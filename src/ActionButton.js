//Pasted code from  https://mui.com/material-ui/react-floating-action-button/

import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


export default function ActionButton() {
    {/*I added some style to the component make it stck to a nice area at the bottom of the page  */}
    return (
    <Box style={{position:'fixed', bottom:'4rem', right:'2rem'}} sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}
