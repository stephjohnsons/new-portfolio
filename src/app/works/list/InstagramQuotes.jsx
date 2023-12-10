'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, Box } from '@mui/material';

export default function InstagramQuotes() {
  return (
    <Card sx={{ 
      maxWidth: 345, 
      border: '1px solid #000', 
      backgroundColor: 'transparent' 
    }}>
      <CardActionArea>
        <CardContent className='rounded-3xl'>
          <h2 className='text-2xl mb-2'>
            Instagram Quotes
          </h2>
          <Box display='flex' maxHeight="24px" className='mb-2'>
            <img src="/svg/HTML.svg" alt="HTML" style={{ maxHeight: '24px', marginRight: '8px' }}/>
            <img src="/svg/Tailwind.svg" alt="Tailwind" style={{ maxHeight: '22px', marginRight: '8px' }}/>
            <img src="/svg/JS.svg" alt="Javascript" style={{ maxHeight: '24px', marginRight: '8px' }}/>
          </Box>
          <p className='text-sm'>
            <u>Self-initiated project.</u><span> </span>
            A website to generate inspirational quotes
            for Instagram posts, with the purpose of 
            practising the use of Tailwind CSS 
            and integrating API into a site.
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}