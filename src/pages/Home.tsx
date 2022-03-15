import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import IPage from "../interfaces/page";


const HomePage: React.FunctionComponent<IPage> = props => {
	useEffect(() => {
		
	}, [])
	return (
		<>
			<Box mt='8px'>
				<Typography className="welcome-font" textAlign={'center'} color='white' variant="h3" gutterBottom >
					Welcome to
				</Typography>
				<Typography className="welcome-font" textAlign={'center'} color='white' variant="h1" gutterBottom >
					The Third Horizon
				</Typography>
				<Typography className="welcome-font" textAlign={'center'} color='white' variant="h5" gutterBottom >
					May the Icons protect
				</Typography>			
			</Box>
		</>
	)
}

export default HomePage;