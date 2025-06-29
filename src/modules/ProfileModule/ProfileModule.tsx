import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Grid, Typography } from "@mui/material";
import { version } from "../../../package.json";

import { useIsAuthenticated } from "../../shared/permissions/hooks";
import { NotAuthInfoBlock } from "../../shared/components/NotAuthInfoBlock";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { BasicNavListToPage } from "../../shared/components/BasicNavListToPage";
import { ProfileInfoCard } from "./components/ProfileInfoCard";
import { ProfileFavoritesLinks } from "./components/ProfileFavoritesLinks";

const list = [
  { label: "Центр поддержки", link: "/help" },
  { label: "Соглашения и Правила", link: "/docs" },
];

export const ProfileModule = () => {
  const { t } = useTranslation();
  const isAuthenticated = useIsAuthenticated();
  return (
    <React.Fragment>
      <BasicPageHeader
        title="Мой профиль"
        shownBackArrowButton
        backButtonLink="/"
      />
      <Container>
        {!isAuthenticated && <NotAuthInfoBlock />}
        {isAuthenticated && (
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ py: 2, width: 1 }}>
                <ProfileInfoCard />
              </Box>
              <Box sx={{ pb: 2, width: 1 }}>
                <ProfileFavoritesLinks />
              </Box>
              <Box sx={{ width: 1 }}>
                <BasicNavListToPage list={list} />
                <Typography component="p" variant="body2" mt={1} color="#aaa">
                  {t("version")} {version}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </React.Fragment>
  );
};
