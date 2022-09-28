import { Button, Grid } from "@mui/material"
import { ReactElement, useState } from "react"
import CharacterCard from "../components/CharacterCard/CharacterCard"
import { ICharacter } from "../interfaces/character"
import { generateNPC } from "../services/GenerateNPC.service"

type Props = {}

const NPCGenerator = ({ }: Props): ReactElement => {
	//	TODO save to store for return to page
	const [npcList, setNpcList] = useState<ICharacter[]>([]);
	const handleGenerateNPC = async () => {
		const npc = await generateNPC();
		setNpcList((state) => [...state, npc])
	}
	return (
		<Grid container spacing={1}>
			<Grid item xs={12} display="flex" justifyContent="center" m={2}>
				<Button variant="contained" onClick={handleGenerateNPC}>Generate NPC</Button>
			</Grid>
			<Grid container spacing={1}>
				{npcList.map((npc) =>
					<Grid display="flex" key={npc.id} item xs={3}>
						<CharacterCard characterInfo={npc} />
					</Grid>
				)}
			</Grid>
		</Grid >
	)
}

export default NPCGenerator