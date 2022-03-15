import { Box, Container, Grow, Typography, Fade } from "@mui/material";
import { useEffect } from "react";
import IPage from "../interfaces/page";


const HomePage: React.FunctionComponent<IPage> = props => {
	useEffect(() => {
		
	}, [])
	return (
		<Box pt='30px' alignItems={'center'} sx={{display: 'flex', flexDirection: 'column'}}>
			<Grow in timeout={1000} unmountOnExit>
				<Typography className="welcome-font" textAlign={'center'} color='white' variant="h3" gutterBottom >
					Welcome to
				</Typography>
			</Grow>
			<Fade in timeout={1000} style={{transitionDelay: '800ms'}} unmountOnExit>
				<Typography className="welcome-font" textAlign={'center'} color='white' variant="h1" gutterBottom >
					The Third Horizon
				</Typography>
			</Fade>
			<Fade in timeout={1000} style={{transitionDelay: '1600ms'}} unmountOnExit>
				<Typography className="welcome-font" textAlign={'center'} color='white' variant="h5" gutterBottom >
					May the Icons protect
				</Typography>
			</Fade>						
		</Box>
	)
}

export default HomePage;