import Tilt from "react-parallax-tilt";
import faceIcon from "./face-icon.png";

const Logo = () => {
	return (
		<div className="w-[150px] p-2">
			<Tilt
				tiltMaxAngleX={40}
				tiltMaxAngleY={40}
				perspective={1000}
				scale={1.2}
				glareEnable={true}>
				<div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center  rounded-lg border-[0.5px]">
					<img
						src={faceIcon}
						alt="face icon"
						width={150}
						height={150}
					/>
				</div>
			</Tilt>
		</div>
	);
};
export default Logo;
