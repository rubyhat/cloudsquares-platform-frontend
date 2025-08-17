import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";

import { useHomeStore } from "./store";
import { HomeAgencyInfoDrawer } from "./components/HomeAgencyInfoDrawer";
import { BasicNavListToPage } from "../../shared/components/BasicNavListToPage";
import { BasicNavListToPageItem } from "../../shared/components/BasicNavListToPage/BasicNavListToPage";
import { BasicNavListToDrawer } from "../../shared/components/BasicNavListToDrawer";
import { BasicNavListToDrawerItem } from "../../shared/components/BasicNavListToDrawer/BasicNavListToDrawer";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";

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
    { label: "Добавить объект", link: "/properties/create" },
    { label: "База собственников", link: "/properties/owners" },
  ];
  const requestsLinks: BasicNavListToPageItem[] = [
    { label: "Заявки на покупку", link: "/" },
    { label: "Заявки на продажу", link: "/" },
  ];

  return (
    <React.Fragment>
      <BasicPageHeader title="Панель управления" />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Box py={2}>
              <Typography component="h5" variant="h6">
                Мое агентство
              </Typography>
              <Box py={1}>
                <BasicNavListToDrawer list={agencyLinks} />
              </Box>
            </Box>
            <Box pb={2}>
              <Typography component="h5" variant="h6">
                Недвижимость
              </Typography>
              <Box py={1}>
                <BasicNavListToPage list={propertiesLinks} />
              </Box>
            </Box>
            <Box>
              <Typography component="h5" variant="h6">
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
    </React.Fragment>
  );
};
