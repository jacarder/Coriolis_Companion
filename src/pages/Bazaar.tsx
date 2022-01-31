import { Grid } from "@mui/material";
import IPage from "../interfaces/page";
import Bazaar from "../components/Bazaar/Bazaar";


const BazaarPage: React.FunctionComponent<IPage> = props => {
	return (	
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<Bazaar></Bazaar>
			</Grid>
		</Grid>
	)
}

export default BazaarPage;