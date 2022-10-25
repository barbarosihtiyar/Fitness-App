import React from 'react'
import {Stack,Typography} from '@mui/material';

import Icon from '../assets/icons/gym.png';
function BodyPart() {
  return (
<Stack
type="button"
alignItems="center"
justfyContent="center"
className="bodyPart-card"
sx={{

  
}}

>
<img src={Icon} alt="dumbbell" className='body-part-icon' styles={{width:"40px" ,height:"40px"}} />
</Stack>  
)
}

export default BodyPart