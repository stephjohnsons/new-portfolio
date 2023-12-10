'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, Box } from '@mui/material';

export default function FlyEasy() {
  return (
    <Card sx={{ 
      maxWidth: 345, 
      border: '1px solid #000', 
      backgroundColor: 'transparent' 
    }}>
      <CardActionArea>
        <CardContent className='rounded-3xl'>
          <h2 className='text-2xl mb-2'>
            FlyEasy
          </h2>
          <Box display='flex' maxHeight="24px" className='mb-2'>
            <img src="/svg/HTML.svg" alt="HTML" style={{ maxHeight: '24px', marginRight: '8px' }}/>
            <img src="/svg/Bootstrap.svg" alt="Bootstrap" style={{ maxHeight: '24px', marginRight: '8px' }}/>
            <img src="/svg/JS.svg" alt="Javascript" style={{ maxHeight: '24px', marginRight: '8px' }}/>
          </Box>
          <p className='text-sm'>
            <u>Self-initiated project.</u><span> </span>
            Concept website for a fictitious travel agency 
            based in Malaysia, with the purpose of 
            practising the use of Bootstrap components and framework.
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}