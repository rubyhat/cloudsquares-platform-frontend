import { Box, Container, Grid, Typography } from "@mui/material";
import { BasicNavListToPage } from "../../shared/components/BasicNavListToPage";
import { BasicNavListToPageItem } from "../../shared/components/BasicNavListToPage/BasicNavListToPage";
import { BasicNavListToDrawer } from "../../shared/components/BasicNavListToDrawer";
import { BasicNavListToDrawerItem } from "../../shared/components/BasicNavListToDrawer/BasicNavListToDrawer";
import { useNavigate } from "react-router-dom";
import { useHomeStore } from "./store";
import { HomeAgencyInfoDrawer } from "./components/HomeAgencyInfoDrawer";

export const HomeModule = () => {
  const navigate = useNavigate();
  const setShowAgencyInfoDrawer = useHomeStore(
    (state) => state.setShowAgencyInfoDrawer,
  );

  const agencyLinks: BasicNavListToDrawerItem[] = [
    { label: "Общая информация", onClick: () => setShowAgencyInfoDrawer(true) },
    { label: "Сотрудники", onClick: () => navigate("/agency/users") },
  ];
  const propertiesLinks: BasicNavListToPageItem[] = [
    { label: "Каталог недвижимости", link: "/properties" },
    { label: "Добавить новую", link: "/properties/create" },
  ];
  const requestsLinks: BasicNavListToPageItem[] = [
    { label: "Заявки на покупку", link: "/" },
    { label: "Заявки на продажу", link: "/" },
  ];

  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography component="h3" variant="h4">
            Панель управления
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Box pb={2}>
            <Typography component="h5" variant="h5">
              Мое агентство
            </Typography>
            <Box py={1}>
              <BasicNavListToDrawer list={agencyLinks} />
            </Box>
          </Box>
          <Box pb={2}>
            <Typography component="h5" variant="h5">
              Недвижимость
            </Typography>
            <Box py={1}>
              <BasicNavListToPage list={propertiesLinks} />
            </Box>
          </Box>
          <Box>
            <Typography component="h5" variant="h5">
              Заявки
            </Typography>
            <Box py={1}>
              <BasicNavListToPage list={requestsLinks} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <HomeAgencyInfoDrawer />
    </Container>
  );
};
