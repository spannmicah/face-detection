const ImageSearchField = ({ handleSearchInput, handleSubmit }) => {
	return (
		<div className="flex justify-center mt-12 ">
			<form
				action="#"
				onSubmit={handleSubmit}>
				<input
					type="text"
					className="bg-transparent border-2 border-r-0 px-8 py-2 rounded-l-md text-black placeholder:text-black focus:outline-none"
					placeholder="Enter image url..."
					onChange={handleSearchInput}
				/>
				<button
					type="submit"
					className="px-8 py-[10px] rounded-r-md bg-black text-white uppercase tracking-wider"
					>
					Detect
				</button>
			</form>
		</div>
	);
};
export default ImageSearchField;
