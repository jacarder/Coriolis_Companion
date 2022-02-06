import { Grid } from "@mui/material";
import IPage from "../interfaces/page";
import Bazaar from "../components/Bazaar/Bazaar";
import { BazaarCategory } from "../constants/BazaarCategory";
import BazaarCart from "../components/BazaarCart/BazaarCart";
import CartContextProvider from "../config/cart-context-provider";
import Slider from "../components/Slider/Slider";

const BazaarPage: React.FunctionComponent<IPage> = props => {
	
	return (
		<CartContextProvider>
			<Slider sliderTitle="Bazaar Cart">
				<BazaarCart></BazaarCart>	
			</Slider>
			<Grid container spacing={1}>
				<Grid item xs={12}>				
					<Bazaar categoryId={BazaarCategory.EVERYDAY_ITEMS}></Bazaar>
					<Bazaar categoryId={BazaarCategory.MEDICURGICAL_TECHNOLOGY}></Bazaar>
				</Grid>
			</Grid>
		</CartContextProvider>
	)
}

export default BazaarPage;