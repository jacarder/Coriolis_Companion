import { Card, CardContent, Grid, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { ICharacter } from '../../interfaces/character';
import './CharacterCard.scss';

type CharacterCardProps = {
  characterInfo: ICharacter
}

const CharacterCard = ({ characterInfo }: CharacterCardProps): ReactElement => {
  const { name: characterName, concept, subConcept: { name: subConceptName = "", skills = [] } = {} } = characterInfo;
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {characterName}
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <b>Concept:</b> {concept}
          </Grid>
          <Grid item xs={12}>
            <b>Sub Concept:</b> {subConceptName}
          </Grid>
          <Grid item xs={12}>
            <b>Skills:</b> {skills.join(", ")}
          </Grid>
        </Grid>

      </CardContent>
    </Card>
  )
}
export default CharacterCard;
