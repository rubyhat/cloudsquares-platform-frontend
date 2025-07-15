import React from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";

export const PropertyDetailsPropertySettings = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ py: 1 }}>
      <Button
        id="settings-button"
        aria-controls={open ? "settings-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        size="medium"
      >
        Настройки
      </Button>
      <Menu
        id="settings-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "settings-button",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <Typography component="p" variant="body1">
            Редактировать
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} color="error">
          <Typography component="p" variant="body1" color="error">
            Удалить
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
