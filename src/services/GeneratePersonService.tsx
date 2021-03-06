import IGeneratedPerson from "../interfaces/generated-person";

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

	getRandomQuote = (): string => {
		//	TODO api to get random qoute
		const qouteList = [
			"That which cannot be seen follows you.",
			"Arrash... please!",
			"This isn't any ordinary accelerator pistol."
		  ];
		  
		return qouteList[Math.floor(Math.random()*qouteList.length)];
	}
}

export default new GeneratePersonService;