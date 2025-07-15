import { MdStar } from "react-icons/md";
import { Box, Typography } from "@mui/material";
import { UserSlim } from "../../interfaces";
import { tempAvatarStyles } from "./styles";

interface AgentCompactCardProps {
  agent: UserSlim;
}

export const AgentCompactCard = ({ agent }: AgentCompactCardProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
      <Box sx={tempAvatarStyles}>
        <Typography component="p" variant="h4" color="secondary">
          {agent.first_name[0]}
        </Typography>
      </Box>
      <Box>
        <Typography component="h6" variant="subtitle2">
          {agent.last_name + " " + agent.first_name}
        </Typography>
        <Typography component="p" variant="caption1">
          Специалист по недвижимости
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Typography component="p" variant="caption1">
            Рейтинг <strong>5.0</strong>
          </Typography>
          <MdStar color="#FACC15" />
        </Box>
      </Box>
    </Box>
  );
};
