import React from 'react'
import {Stack,Typography} from '@mui/material';

import Icon from '../assets/icons/gym.png';
function BodyPart({item,setBodyPart,bodyPart}) {
  return (
<Stack
type="button"
alignItems="center"
justfyContent="center"
className="bodyPart-card"
sx={
bodyPart === item ?  {
  borderTop: "4px solid #ff2625",
  backgroundColor:"#fff",
  borderBottomLeftRadius:"20px",
  width:"270px",
  height:"280px",
  cursor : "pointer" ,
   gap:"47px"

} : {
  background : "#fff",
  borderBottomLeftRadius:"20px",
  width:"270px",
  height:"280px",
  cursor : "pointer" ,
   gap:"47px"
}

}

>
<img src={Icon} alt="dumbbell" className='body-part-icon' styles={{width:"40px" ,height:"40px"}} />
</Stack>  
)
}

export default BodyPart