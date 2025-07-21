import { Box, Chip, IconButton, Paper, Typography } from "@mui/material";
import { User } from "../../../../shared/interfaces";
import { displayUserName } from "../../../../shared/utils";
import { UserRoleDisplayText } from "../../../../shared/permissions/roles";
import { MdDelete, MdEdit } from "react-icons/md";
import { useUsersStore } from "../../store";
import { BasicDrawerMode } from "../../../../shared/interfaces/Shared";
import { titleWrapperStyles } from "./styles";

interface UsersListItemProps {
  user: User;
}

// TODO: Добавить информацию о последнем входе в систему, дату и время
export const UsersListItem = ({ user }: UsersListItemProps) => {
  const openDrawerWithMode = useUsersStore((state) => state.openDrawerWithMode);

  const { first_name, last_name, middle_name } = user;
  const { shortName } = displayUserName({ first_name, last_name, middle_name });

  return (
    <Box component={Paper} p={2}>
      <Box sx={titleWrapperStyles}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography component="h6" variant="h6">
            {shortName}
          </Typography>
          <Chip
            size="small"
            variant="filled"
            color={user.is_active ? "success" : "error"}
            label={user.is_active ? "Активный" : "Заблокирован"}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <IconButton
            size="small"
            color="info"
            onClick={() => openDrawerWithMode(BasicDrawerMode.edit)}
          >
            <MdEdit />
          </IconButton>
          <IconButton
            size="small"
            color="error"
            onClick={() => openDrawerWithMode(BasicDrawerMode.delete)}
          >
            <MdDelete />
          </IconButton>
        </Box>
      </Box>
      <Box
        component="ul"
        sx={{ display: "flex", flexDirection: "column", gap: 1, pt: 1 }}
      >
        <Box component="li">Телефон: +{user.phone}</Box>
        <Box component="li">Почта: {user.email}</Box>
        <Box component="li">Роль: {UserRoleDisplayText[user.role]}</Box>
      </Box>
    </Box>
  );
};
