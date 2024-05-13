import React from 'react';
import techstock from 'src/assets/images/logos/Techstockpng.png'; 

import { useMediaQuery, Box, Drawer, Button } from '@mui/material';
import Logo from '../shared/logo/Logo';
import SidebarItems from './SidebarItems';
import { Upgrade } from './Updrade';

const Sidebar = (props) => {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const sidebarWidth = '270px';
  
    return (
      <div>
     
     <Box sx={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}}>
  <Box sx={{
    height: '100vh',
    width: '60px',
    background: 'linear-gradient(to top, lightblue, darkblue)',
    marginRight: '10px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  }} onClick={toggleDrawer(true)}>
    <img src={techstock} alt="Submit" width="48" height="48"/>
  </Box>
</Box>  
     
        <Drawer open={open} onClose={toggleDrawer(false)}
          
        >
          {/* ------------------------------------------- */}
          {/* Sidebar Box */}
          {/* ------------------------------------------- */}
          <Box
            sx={{
              height: '100%',
            }}
          >
            {/* ------------------------------------------- */}
            {/* Logo */}
            {/* ------------------------------------------- */}
            <Box px={3}>
              <Logo />
                    </Box>
            <Box>
              {/* ------------------------------------------- */}
              {/* Sidebar Items */} 
              {/* ------------------------------------------- */}
              <SidebarItems />
              <Upgrade />
            </Box>
            
          </Box>
          
        </Drawer>
        </div>
   
    );
 // }

  // return (
    
  //   <Drawer
  //     anchor="left"
  //     open={props.isMobileSidebarOpen}
  //     onClose={props.onSidebarClose}
  //     variant="temporary"
  //     PaperProps={{
  //       sx: {
  //         width: sidebarWidth,
  //         boxShadow: (theme) => theme.shadows[8],
  //       },
  //     }}
  //   >
  //     {/* ------------------------------------------- */}
  //     {/* Logo */}
  //     {/* ------------------------------------------- */}
  //     <Box px={2}>
  //       <Logo />
  //     </Box>
  //     {/* ------------------------------------------- */}
  //     {/* Sidebar For Mobile */}
  //     {/* ------------------------------------------- */}
  //     <SidebarItems />
  //     <Upgrade />
  //   </Drawer>
  // );
  };

export default Sidebar;
