import React , {useContext} from 'react';
import {Box,Typography} from '@mui/material';
import BodyPart from './BodyPart';
import {ScroolMenu,visibilityContext} from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart';

const HorizontalScroollBar =({data, bodyPart , setBodyPart}) =>   {

  return (
    <ScroolMenu LeftArrow={LeftArrow} RigtArrow={RightArrow}>
        {data.map((item,index) => (
        <Box 
        key={index}
        itemId={item.id || item}
        title = {item.id || item}
        m="0 40px"    
        >
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
        ))}
    </ScroolMenu>
  )
}

export default HorizontalScroollBar