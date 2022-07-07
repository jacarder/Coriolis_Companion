import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ISystemDetail from "../../interfaces/system-detail";

interface SystemDetailProps {
	system?: ISystemDetail
}

const SystemDetail = (props: SystemDetailProps) => {
	const [systemDetails, setSystemDetails] = useState<ISystemDetail>();
	useEffect(() => {
		setSystemDetails(props.system);
	}, [props.system])
	return (
		<Card>
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
export default SystemDetail;