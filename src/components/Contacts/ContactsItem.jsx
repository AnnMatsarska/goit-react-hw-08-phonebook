import { IconButton, ListItem, ListItemText, SvgIcon } from '@mui/material';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <ListItem
      sx={{
        p: '0',
        width: '330px',
        mt: '10px',
      }}
    >
      <AccountCircleRoundedIcon
        sx={{
          fill: 'rgb(207, 149, 11)',
          fontSize: '40px',
          marginRight: '24px',
        }}
      />
      <ListItemText
        primary={
          <span style={{ color: 'rgb(37, 32, 73)', fontSize: '18px' }}>
            {name}
          </span>
        }
        secondary={number}
      />
      <IconButton type="button" onClick={() => deleteContact(id)}>
        <SvgIcon sx={{ fontSize: '30px' }}>
          <DeleteIcon />
        </SvgIcon>
      </IconButton>
    </ListItem>
  );
};
