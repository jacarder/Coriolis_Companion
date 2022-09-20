import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import IGeneratedPerson from '../../interfaces/generated-person';
import GeneratePersonService from '../../services/GeneratePerson.service';
import './NameGenerator.scss';

const NameGenerator = () => {

  const [generatedName, setGeneratedName] = useState<string>('')

  useEffect(() => {
    GeneratePersonService.getNames("m").then((person: IGeneratedPerson) => {
      setGeneratedName(`${person.firstName} ${person.lastName}`);
    });
  }, [])

  const handleGetName = () => {
    GeneratePersonService.getNames("m").then((person: IGeneratedPerson) => {
      setGeneratedName(`${person.firstName} ${person.lastName}`);
    });
  }

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Generated Name
        </Typography>
        <Typography variant="body2">
          {generatedName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={handleGetName}>Generate Name</Button>
      </CardActions>
    </Card>
  )
}
export default NameGenerator;