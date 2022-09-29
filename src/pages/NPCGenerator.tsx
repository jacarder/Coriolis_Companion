import { LoadingButton } from "@mui/lab"
import { Button, Grid, styled } from "@mui/material"
import { ReactElement, useState } from "react"
import CharacterCard from "../components/CharacterCard/CharacterCard"
import { ICharacter } from "../interfaces/character"
import { generateNPC } from "../services/GenerateNPC.service"

const StyledLoadingButton = styled(LoadingButton)(({ theme }) => ({
	"&:disabled": {
		backgroundColor: theme.palette.primary.main,
		"span": {
			color: 'white',
		}
	}
}));

type Props = {}

const NPCGenerator = ({ }: Props): ReactElement => {
	//	TODO save to store for return to page
	const [npcList, setNpcList] = useState<ICharacter[]>([]);
	const [isLoading, setIsLoading] = useState(false)
	const handleGenerateNPC = async () => {
		setIsLoading(true);
		const npc = await generateNPC();
		setNpcList((state) => [...state, npc])
		setIsLoading(false)
	}
	return (
		<Grid container spacing={1}>
			<Grid item xs={12} display="flex" justifyContent="center" m={2}>
				<StyledLoadingButton variant="contained" onClick={handleGenerateNPC} loading={isLoading}>
					Generate NPC
				</StyledLoadingButton>
			</Grid>
			<Grid container spacing={1}>
				{npcList.map((npc) =>
					<Grid display="flex" key={npc.id} item xs={12} sm={6} md={6} lg={3}>
						<CharacterCard characterInfo={npc} />
					</Grid>
				)}
			</Grid>
		</Grid >
	)
}

export default NPCGenerator