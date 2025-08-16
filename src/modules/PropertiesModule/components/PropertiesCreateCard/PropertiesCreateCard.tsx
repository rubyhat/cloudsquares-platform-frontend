import { Link } from "react-router-dom";
import { Box, Button, Paper, Typography } from "@mui/material";

interface PropertiesCreateCardProps {
  title: string;
  description: string;
}

export const PropertiesCreateCard = ({
  title,
  description,
}: PropertiesCreateCardProps) => {
  return (
    <Box component={Paper} sx={{ p: 2 }}>
      <Typography component="h6" variant="h6">
        {title}
      </Typography>
      <Typography component="p" variant="body1">
        {description}
      </Typography>
      <Box display="flex" pt={2} component={Link} to="/properties/create">
        <Button variant="contained" color="primary" fullWidth size="large">
          Добавить объект
        </Button>
      </Box>
    </Box>
  );
};
