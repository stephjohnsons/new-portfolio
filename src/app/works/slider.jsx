import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent className='rounded-3xl'>
          <h2 className='text-2xl mb-2'>
            FlyEasy
          </h2>
          <p className='text-sm'>
            Self-initiated project. 
            Concept website for a fictitious travel agency 
            based in Malaysia, with the purpose of 
            practising the use of Bootstrap components and framework.
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}