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
		<Grid container spacing={1} component={Paper}>
			<Grid item xs={3}>				
				<TableOfContents></TableOfContents>
			</Grid>
			<Grid item xs={9}>				
				<KnowledgeContent dataId={dataId} selectSection={selectSection}></KnowledgeContent>
			</Grid>			
		</Grid>
	)
}

export default KnowledgeCenterPage;