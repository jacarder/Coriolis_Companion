import { Grid } from "@mui/material";
import ThirdHorizonMap from "../components/ThirdHorizonMap/ThirdHorizonMap";
import QuoteGenerator from "../components/QuoteGenerator/QuoteGenerator";
import IPage from "../interfaces/page";
import NameGenerator from "../components/NameGenerator/NameGenerator";


const ToolsPage: React.FunctionComponent<IPage> = props => {
	//	TODO name generator tool will be moved to another page later. Just testing.
	return (	
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<p>This is the Tools page</p>
			</Grid>
			<Grid item xs={6}>
				<NameGenerator></NameGenerator>
			</Grid>
			<Grid item xs={6}>
				<QuoteGenerator></QuoteGenerator>
			</Grid>
			<Grid item xs={12}>
				<ThirdHorizonMap></ThirdHorizonMap>
			</Grid>
		</Grid>
	)
}

export default ToolsPage;