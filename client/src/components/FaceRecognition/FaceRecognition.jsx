const FaceRecognition = ({ imageUrl, boundingBoxes = [] }) => {
	return (
		<div className="flex items-center justify-center mt-12 text-center">
			<div className="relative">
				<img
					id="inputImage"
					src={imageUrl}
					alt="Image goes here..."
					width={500}
					height={500}
					className="w-100 h-auto"
				/>
				{boundingBoxes.map((box, index) => (
					<div
						key={index}
						className="bounding-box"
						style={{
							left: box.leftCol,
							right: box.rightCol,
							top: box.topRow,
							bottom: box.bottomRow,
						}}></div>
				))}
			</div>
		</div>
	);
};

export default FaceRecognition;
