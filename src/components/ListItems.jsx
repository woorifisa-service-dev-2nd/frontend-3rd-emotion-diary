import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ListItems = ({ item }) => {
  return (
    <div className='flex item-card'>
      <Card sx={{ width: '136px', minWidth: '120px', textAlign: 'center' }}>
        <CardContent>
          <Typography sx={{ position: 'relative', left: '30px' }} variant='h4'>
            {item.icon.value}
          </Typography>
          <Typography variant='h2'>{item.date.slice(-2)}</Typography>
        </CardContent>
      </Card>
      <Card sx={{ width: '80%', minWidth: '400px' }}>
        <CardContent>
          <Typography variant='h4'>{item.title}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListItems;
