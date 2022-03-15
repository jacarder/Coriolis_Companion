import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import ApiService from '../../services/GeneratePersonService';
import './QuoteGenerator.scss';

interface QuoteGeneratorProps {
  color?: string
}

export default function QuoteGenerator(props: QuoteGeneratorProps) {
  const [randomQuote, setRandomQuote] = useState<string|undefined>('')

  useEffect(() => {
    setRandomQuote(ApiService.getRandomQuote());
  }, [])

  const handleGetQuote = () => {
    let quote = randomQuote;
    while (randomQuote === quote) {
      quote = ApiService.getRandomQuote();
    }
    setRandomQuote(quote);
  }

  return (
    <Card sx={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Quote of the Day
        </Typography>
        <Typography variant="body2">
          {randomQuote}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={handleGetQuote}>Generate Quote</Button>
      </CardActions>
    </Card>
  )
}
