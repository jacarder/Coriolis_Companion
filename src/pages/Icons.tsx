import { Grid } from "@mui/material";
import IPage from "../interfaces/page";
import IconsCarousel from "../components/IconsCarousel/IconsCarousel";


const IconsPage: React.FunctionComponent<IPage> = props => {
	return (	
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<IconsCarousel/>
			</Grid>
		</Grid>
	)
}

export default IconsPage;