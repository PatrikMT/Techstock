import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { IconListCheck, IconMail, IconUser } from '@tabler/icons';
import mensage from 'src/assets/images/service/chat.png';
import Messages from 'src/views/mensagens/Mensagens';

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const navigate = useNavigate();
  const handleClick2 = (event) => {
    navigate("/mensagens");
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === 'object' && {
            color: 'primary.main',
          }),
        }}
        onClick={handleClick2}
      >
         <Avatar
          src={mensage}
          alt={mensage}
          sx={{
            width: 35,
            height: 35,
          }}
        /> 
      </IconButton>
     
    </Box>
  );
};

export default Profile;
