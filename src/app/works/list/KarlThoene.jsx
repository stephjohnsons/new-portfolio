'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, Box } from '@mui/material';

export default function KarlThoene() {
  return (
    <Card sx={{ 
      maxWidth: 345, 
      border: '1px solid #000', 
      backgroundColor: 'transparent' 
    }}>
      <CardActionArea>
        <CardContent className='rounded-3xl'>
          <h2 className='text-2xl mb-2'>
            Karl Thöne
          </h2>
          <Box display='flex' maxHeight="24px" className='mb-2'>
            <p>Wix, Adobe AI, UI/UX</p>
          </Box>
          <p className='text-sm'>
            Website for German composer Karl Thöne, 
            commissioned by Datin Veronika Thöne. 
            Used to host the works of Karl's compositions, 
            as well as updates for his music festival.
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}