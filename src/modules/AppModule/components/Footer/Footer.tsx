import { useTranslation } from "react-i18next";
import { Box, Container, Grid, Typography } from "@mui/material";

import { SelectLanguage } from "../../../../shared/components/SelectLanguage";
import {
  languageStyles,
  linkStyles,
  selectLanguageWrapperStyles,
} from "./styles";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      data-testid="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "#ccc",
        py: 2,
        display: { xs: "none", md: "block" },
      }}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography component="h6" variant="h6">
                CloudSquares
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Typography component="p" variant="body1">
                  © {currentYear}. {t("footer.made_with")}
                </Typography>
                <Box
                  sx={linkStyles}
                  component="a"
                  target="_blank"
                  href="https://whitedog.kz"
                >
                  WhiteDog
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={languageStyles}>
              <Box sx={selectLanguageWrapperStyles}>
                <SelectLanguage />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
