import React from 'react';
import {Box} from '@mui/material';

function HorizontalScroollBar({data}) {
  const [horizontal,setHorizontal] = useState("");
  return (
    <div>
        {data.map((item,index) => (
        <Box 
        key={index}
        itemId={item.id || item}
        title = {item.id || item}
        m="0 40px"    
        >
            
        </Box>
        ))}
    </div>
  )
}

export default HorizontalScroollBar