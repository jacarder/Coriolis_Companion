import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import IGeneratedPerson from '../../interfaces/generated-person';
import GeneratePersonService from '../../services/GeneratePersonService';
import './NameGenerator.scss';

export default function NameGenerator() {

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
    <Card sx={{height: '100%'}}>
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
