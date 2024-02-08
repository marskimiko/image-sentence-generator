import {useState} from 'react';

export default function Home() {
	const [object, setObject] = useState('thief');
	const [subject, setSubject] = useState('police');
	const [verb, setVerb] = useState('arrest');
	const [response, setResponse] = useState(null);
	const [btnText, setBtnText] = useState('Generate');
	/**
	 *
	 *
	 * Fetch generated sentence
	 */
	const fetchGeneratedSentence = async e => {
		e.preventDefault();
    console.log('generate')
		setBtnText('Generating');
		try {
			// const res = await axios.get(`/api/generate`, {
			// 	params: {
			// 		object,
			// 		subject,
			// 		verb
			// 	}
			// });
			// setResponse(res.data);
			// console.log(res.data);
		} catch (err) {
			console.log(err);
		} finally {
			setBtnText('Generate');
		}
	};

	return (
		<div>
			<h2>Sentence Generator App</h2>
			<h3>
				Quickly generate an english sentence using few keywords
			</h3>
			<div>
				<form>
					<input
						type="text"
						value={subject}
						autoFocus={true}
						className=""
						placeholder="Subject..."
						onChange={e => setSubject(e.target.value)}
					/>
					<input
						type="text"
						value={object}
						className=""
						placeholder="Object..."
						onChange={e => setObject(e.target.value)}
					/>
					<input
						type="text"
						value={verb}
						className=""
						placeholder="Verb..."
						onChange={e => setVerb(e.target.value)}
					/>
					<button
						className=""
						onClick={e => fetchGeneratedSentence(e)}
					>
						{btnText}
					</button>
				</form>
				{response && (
					<div>
						<p>{response.sentence}</p>
					</div>
				)}
			</div>
		</div>
	);
}