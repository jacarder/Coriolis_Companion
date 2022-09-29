import { OPENAI_COMMAND } from "../constants/OpenAI";
import IGeneratedPerson from "../interfaces/generated-person";
import { createText } from "./OpenAI.service";

//const BASE_API_URL = `https://api.parser.name/?api_key=e59ae224c978620463a78afb1a2a386e&endpoint=generate&`;
const BASE_API_URL = `https://randomuser.me/api/`;
const headers = {
	//authorization: `Bearer ${token}`,
	'Allow-Access-Control-Origin': '*'
}

class GeneratePersonService {

	getNames = async (gender: 'm' | 'f'): Promise<IGeneratedPerson> => {
		//	TODO randomize the country code for middle east contries
		//return fetch(`${BASE_API_URL}country_code=AF&gender=${gender}`, {mode: "no-cors"})
		const req = fetch(`${BASE_API_URL}?nat=TR&gender=${gender === 'm' ? 'male' : 'female'}`);
		const response = await req;
		return response.json().then(res => {
			const firstName = res.results[0].name.first;
			const lastName = res.results[0].name.last;
			return { firstName: firstName, lastName: lastName };
		});
	}

	getRandomQuote = async (): Promise<string> => {
		const { data: { choices } } = await createText(OPENAI_COMMAND.CREATE_QUOTE);
		return choices?.length === 1 ? (choices[0].text ?? '') : 'Kamra, we are doomed';;
	}
}

export default new GeneratePersonService;