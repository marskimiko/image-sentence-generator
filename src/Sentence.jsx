function Sentence() {
   return (
    <div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Quickly generate an english sentence using few keywords
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						type="text"
						autoFocus={true}
						className="border-none outline-none w-1/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
						placeholder="Subject..."
					/>
					<input
						type="text"
						className="border-none outline-none w-1/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
						placeholder="Object..."
					/>
					<input
						type="text"
						className="border-none outline-none w-1/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
						placeholder="Verb..."
					/>
					<button
						className="outline-none border border-secondary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-bc transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
					>Button Text
					</button>
				</form>
					<div className="flex flex-col mt-20 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
						<p className="mb-12 border border-secondary text-primary font-raleway px-4 py-8 tracking-wide leading-8">
						</p>
					</div>
			</div>
		</div>
   )
}

export default Sentence;
