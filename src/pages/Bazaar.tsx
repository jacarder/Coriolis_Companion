import { Grid } from "@mui/material";
import IPage from "../interfaces/page";
import Bazaar from "../components/Bazaar/Bazaar";
import { BazaarCategory } from "../constants/BazaarCategory";


const BazaarPage: React.FunctionComponent<IPage> = props => {
	return (	
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<Bazaar categoryId={BazaarCategory.EVERYDAY_ITEMS}></Bazaar>
				<Bazaar categoryId={BazaarCategory.MEDICURGICAL_TECHNOLOGY}></Bazaar>
			</Grid>
		</Grid>
	)
}

export default BazaarPage;