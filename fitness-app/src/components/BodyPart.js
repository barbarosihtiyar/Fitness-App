import React from 'react'
import {Stack,Typography} from '@mui/material';

import Icon from '../assets/icons/gym.png';
function BodyPart() {
  return (
<Stack>
<img src={Icon} alt="dumbbell" className='body-part-icon'></img>
</Stack>  
)
}

export default BodyPart