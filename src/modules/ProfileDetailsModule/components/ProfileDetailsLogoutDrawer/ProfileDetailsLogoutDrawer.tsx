import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

import { useProfileDetailsStore } from "../../store/useProfileDetailsStore";
import { useLoginStore } from "../../../LoginModule/store";
import { BasicDrawer } from "../../../../shared/components/BasicDrawer";

export const ProfileDetailsLogoutDrawer = () => {
  const navigate = useNavigate();
  const { markLogoutPending } = useLoginStore();
  const { showLogoutDrawer, setShowLogoutDrawer } = useProfileDetailsStore();

  const handleLogoutButtonClick = () => {
    markLogoutPending();
    setShowLogoutDrawer(false);
    navigate("/login");
  };

  return (
    <BasicDrawer
      title="Выйти из аккаунта?"
      isOpen={showLogoutDrawer}
      setIsOpen={setShowLogoutDrawer}
    >
      <Box sx={{ p: 2, display: "flex", flexDirection: "column", height: 1 }}>
        <Box flexGrow={1}>
          <Typography component="p" variant="body1" mb={2}>
            Вы уверены, что хотите выйти из текущего аккаунта?
          </Typography>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowLogoutDrawer(false)}
          >
            Отмена
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleLogoutButtonClick}
          >
            Да, выйти
          </Button>
        </Box>
      </Box>
    </BasicDrawer>
  );
};
