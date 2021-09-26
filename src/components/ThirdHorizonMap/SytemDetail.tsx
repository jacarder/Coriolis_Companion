import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ThirdHorizonMapService from "../../services/ThirdHorizonMapService";

interface SystemDetail {
	name: string;
	planetCount: number;
}
interface SystemDetailProps {
	systemId: string
}

export default function SystemDetail(props: SystemDetailProps) {
	const [systemDetails, setSystemDetails] = useState<SystemDetail>();
	useEffect(() => {
		ThirdHorizonMapService.getSystemDetails(props.systemId).then((data: any) => {
			setSystemDetails(data.data());
		})
	}, [props.systemId])
	return (
		<Card sx={{ minWidth: 275 }}>
		<CardContent>
		  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
			System Information
		  </Typography>
		  <Typography component={'span'} variant="body2">
			<Grid container spacing={12}>
				<Grid item xs={6}>
					Name: {systemDetails?.name}
				</Grid>
				<Grid item xs={6}>
					Planet Count: {systemDetails?.planetCount}
				</Grid>
			</Grid>		  
		  </Typography>
		</CardContent>
	  </Card>
	)
}
