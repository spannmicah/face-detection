import Nav from './components/Navigation/Nav';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageSearchField from './components/ImageSearchField/ImageSearchField';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ParticlesBg from 'particles-bg';

import { useState, useEffect } from 'react';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

const PAT = import.meta.env.VITE_PAT_KEY;
const USER_ID = 'clarifai';
const APP_ID = 'main';
const MODEL_ID = 'face-detection';
const ENDPOINT = 'https://api.clarifai.com/v2/models/' + MODEL_ID + '/outputs';

const faceDetectImageFromUser = (url) => {
	const raw = JSON.stringify({
		user_app_id: {
			user_id: USER_ID,
			app_id: APP_ID,
		},
		inputs: [
			{
				data: {
					image: {
						url: url,
					},
				},
			},
		],
	});

	const requestOptions = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			Authorization: 'Key ' + PAT,
		},
		body: raw,
	};

	return requestOptions;
};

const App = () => {
	const [searchInput, setSearchInput] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [boundingBox, setBoundingBox] = useState([]);
	const [route, setRoute] = useState('signin');

	const handleSearchInput = ({ target }) => {
		// get the search input field without blank spaces in url
		setSearchInput(target.value.trim());
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSearchInput('');

		try {
			const response = await fetch(
				ENDPOINT,
				faceDetectImageFromUser(searchInput)
			);
			const data = await response.json();

			if (data) {
				displayFaceBox(calculateFaceLocation(data));
				setImageUrl(searchInput);
			}
		} catch (err) {
			console.error('Something went wrong', err);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					ENDPOINT,
					faceDetectImageFromUser(searchInput)
				);
				const data = await response.json();

				if (data) {
					displayFaceBox(calculateFaceLocation(data));
					setImageUrl(searchInput);
				}
			} catch (err) {
				console.error('Something went wrong', err);
			}
		};

		if (searchInput) {
			fetchData();
		}
	}, [searchInput]);

	const calculateFaceLocation = (data) => {
		// get the regions that contain an array of objects
		const { regions } = data.outputs[0].data;

		if (regions && regions.length > 0) {
			// get every bounding box in the regions array
			const boundingBoxes = regions.map((region) => {
				const clarifaiFace = region.region_info.bounding_box;
				const image = document.getElementById('inputImage');
				const width = parseFloat(image.width);
				const height = parseFloat(image.height);

				return {
					leftCol: clarifaiFace.left_col * width,
					topRow: clarifaiFace.top_row * height,
					rightCol: width - clarifaiFace.right_col * width,
					bottomRow: height - clarifaiFace.bottom_row * height,
				};
			});

			return boundingBoxes;
		} else {
			return [];
		}
	};

	const displayFaceBox = (box) => {
		setBoundingBox(box);
	};

	const handleSignIn = (route) => {
		setRoute(route);
	};

	const handleSignOut = (route) => {
		setRoute(route);
		setImageUrl('');
		setBoundingBox({});
	};

	const handleRegister = (route) => {
		setRoute(route);
	};

	return (
		<>
			<ParticlesBg
				type='cobweb'
				bg={true}
				className='fixed top-0 right-0 bottom-0 left-0 z-10'
			/>
			<div className='App '>
				{route === 'home' ? (
					<>
						<div className='flex justify-between items-center flex-row-reverse pt-12 w-9/12 mx-auto '>
							<Nav handleSignOut={handleSignOut} />
							<Logo />
						</div>
						<Rank />
						<ImageSearchField
							handleSearchInput={handleSearchInput}
							handleSubmit={handleSubmit}
						/>
						<FaceRecognition
							imageUrl={imageUrl}
							boundingBoxes={boundingBox}
						/>
					</>
				) : route === 'signin' ? (
					<div className='flex min-h-screen items-center justify-center '>
						<SignIn
							handleSignIn={handleSignIn}
							handleRegister={handleRegister}
						/>
					</div>
				) : route === 'register' ? (
					<div className='flex min-h-screen items-center justify-center '>
						<Register handleRegister={handleRegister} />
					</div>
				) : null}
			</div>
		</>
	);
};
export default App;
