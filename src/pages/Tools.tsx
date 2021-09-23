import { useEffect, useState } from "react";
import QuoteGenerator from "../components/QuoteGenerator/QuoteGenerator";
import IGeneratedPerson from "../interfaces/generated-person";
import IPage from "../interfaces/page";
import ApiService from "../services/ApiService";


const ToolsPage: React.FunctionComponent<IPage> = props => {
	//	TODO name generator tool will be moved to another page later. Just testing.
	const [generatedName, setGeneratedName] = useState<string>('')

	useEffect(() => {
		ApiService.getNames("m").then((person: IGeneratedPerson) => {
			setGeneratedName(`${person.firstName} ${person.lastName}`);
			// const firstName = person.data.name.firstname.name;
			// const lastName = person.data.name.lastname.name;
			// setGeneratedName(`${firstName} ${lastName}`)
		});
	}, [])
	return (	
		<div>
			<p>This is the Tools page</p>
			<div>
				Name: {generatedName}
			</div>
			<QuoteGenerator></QuoteGenerator>
		</div>
	)
}

export default ToolsPage;