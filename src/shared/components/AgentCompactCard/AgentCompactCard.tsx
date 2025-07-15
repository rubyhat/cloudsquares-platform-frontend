import { Box, Typography } from "@mui/material";
import { UserSlim } from "../../interfaces";

interface AgentCompactCardProps {
  agent: UserSlim;
}

export const AgentCompactCard = ({ agent }: AgentCompactCardProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "customColors.primary",
        }}
      >
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
        <Typography component="p" variant="caption1">
          Рейтинг 5.0
        </Typography>
      </Box>
    </Box>
  );
};
