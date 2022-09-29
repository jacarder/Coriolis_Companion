import { Card, CardContent, Divider, Grid, styled, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { ICharacter } from '../../interfaces/character';
import './CharacterCard.scss';

const StyledDivider = styled(Divider)(({ theme }) => ({
  height: '5px',
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.main,
  borderRadius: '6px',
}));

type CharacterCardProps = {
  characterInfo: ICharacter
}

const CharacterCard = ({ characterInfo }: CharacterCardProps): ReactElement => {
  const { name: characterName, concept, subConcept: { name: subConceptName = "", skills = [] } = {}, features, speechPattern } = characterInfo;
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Typography className="welcome-font" paddingLeft={2} variant='h5' gutterBottom>
          {characterName}
        </Typography>
        <StyledDivider sx={{ marginBottom: '10px' }} />
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
          <Grid item xs={12}>
            <b>Features:</b> {features}
          </Grid>
          <Grid item xs={12}>
            <b>Speech Pattern:</b> {speechPattern}
          </Grid>
        </Grid>

      </CardContent>
    </Card>
  )
}
export default CharacterCard;
