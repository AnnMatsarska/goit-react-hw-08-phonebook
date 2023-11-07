import { IconButton, ListItem, ListItemText, SvgIcon } from '@mui/material';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <ListItem>
      <AccountCircleRoundedIcon
        sx={{
          fill: 'rgb(255, 171, 64)',
          fontSize: '48px',
          marginRight: '24px',
        }}
      />
      <ListItemText
        primary={
          <span style={{ color: '#1976d2', fontSize: '20px' }}>{name}</span>
        }
        secondary={number}
      />
      <IconButton type="button" onClick={() => deleteContact(id)}>
        <SvgIcon sx={{ fontSize: '36px' }}>
          <DeleteIcon />
        </SvgIcon>
      </IconButton>
    </ListItem>
  );
};
