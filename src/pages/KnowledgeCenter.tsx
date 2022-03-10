import { Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import KnowledgeContent from "../components/KnowledgeContent/KnowledgeContent";
import TableOfContents from "../components/TableOfContents/TableOfContents";
import { BazaarCategory } from "../constants/BazaarCategory";
import IPage from "../interfaces/page";
import Bazaar from "./Bazaar";


const KnowledgeCenterPage: React.FunctionComponent<IPage> = props => {
	const [dataId, setDataId] = useState<number>(0);
	const selectSection = (selectedDataId: number) => {
		setDataId(selectedDataId);
	}
	return (
		<Grid container xs={12} spacing={1} component={Paper} sx={{marginLeft: 0, marginTop: 0}}>
			<Grid item xs={3} sx={{borderRight: 'grey solid 1px'}}>				
				<TableOfContents selectSection={selectSection}></TableOfContents>
			</Grid>
			<Grid item xs={9}>				
				<KnowledgeContent dataId={dataId}></KnowledgeContent>
			</Grid>
		</Grid>
	)
}

export default KnowledgeCenterPage;