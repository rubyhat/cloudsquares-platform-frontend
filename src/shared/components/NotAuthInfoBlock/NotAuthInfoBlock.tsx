import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";

import { version } from "../../../../package.json";

export const NotAuthInfoBlock = () => {
  const { t } = useTranslation();
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Box sx={{ py: 2, width: 1 }}>
          <Box component={Paper} sx={{ py: 4, px: 2 }}>
            <Typography component="h6" variant="h6">
              Упс, Вы не авторизованы ;(
            </Typography>
            <Typography component="p" variant="body1">
              Создавайте магазины, продавайте и покупайте товары и услуги!
            </Typography>
            <Typography component="p" variant="body1" mt={1} mb={2}>
              Для этого необходимо войти в систему или создать аккаунт :)
            </Typography>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              color="primary"
              fullWidth
            >
              {t("login")}
            </Button>
          </Box>
          <Typography component="p" variant="body2" mt={1} color="#aaa">
            {t("version")} {version}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
