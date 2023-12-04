const Nav = ({ handleSignOut }) => {
	return (
		<nav className="flex justify-end p-8">
			<p
				className="underline hover:opacity-75 cursor-pointer text-white font-bold text-2xl"
				onClick={() => handleSignOut("signin")}>
				Sign Out
			</p>
		</nav>
	);
};
export default Nav;
