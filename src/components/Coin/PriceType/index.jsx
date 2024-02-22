import React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton({alignment,handleTypeChange}) {
//  const [alignment, setAlignment] = React.useState('web');



  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleTypeChange}
      aria-label="Platform"
    >
      <ToggleButton value="prices">Price</ToggleButton>
      <ToggleButton value="market_caps">MKT CAP</ToggleButton>
      <ToggleButton value="total_volumes">VOLUME</ToggleButton>
    </ToggleButtonGroup>
  );
}