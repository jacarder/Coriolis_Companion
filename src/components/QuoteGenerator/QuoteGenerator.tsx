import { Button, Card, CardActions, CardContent, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ApiService from '../../services/GeneratePerson.service';
import './QuoteGenerator.scss';

interface QuoteGeneratorProps {
  color?: string
}

const QuoteGenerator = (props: QuoteGeneratorProps) => {
  const [randomQuote, setRandomQuote] = useState<string | undefined>('')
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {

    const getQuote = async () => {
      const quote = await ApiService.getRandomQuote();
      setRandomQuote(quote);
      setIsLoading(false);
    }
    getQuote();
  }, [])

  const handleGetQuote = async () => {
    setIsLoading(true);
    const quote = await ApiService.getRandomQuote();
    setRandomQuote(quote);
    setIsLoading(false);
  }

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Quote of the Day
        </Typography>
        <Typography variant="body2">
          {
            isLoading ? <CircularProgress sx={{ position: 'absolute' }} size={20} /> : <>{randomQuote}</>
          }
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={handleGetQuote}>Generate Quote</Button>
      </CardActions>
    </Card>
  )
}
export default QuoteGenerator;