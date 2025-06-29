import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ru } from "date-fns/locale";
import { ThemeProvider } from "@emotion/react";
import { Box, CircularProgress } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { RouteList } from "../../routelist";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GlobalAutofillFix } from "./components/GlobalAutofillFix";
import { ToasterProvider, AuthProvider } from "../../providers";
import { customTheme } from "../../themes/customTheme";
import { loadingWrapperStyles } from "./styles";

const client = new QueryClient();

/**
 * Основной модуль приложения.
 *
 * - Включает глобальные провайдеры: маршрутизацию, управление запросами (`react-query`),
 *   тему MUI, локализацию `date-fns`, `AuthProvider` и `ToasterProvider`.
 * - Управляет состоянием загрузки через `isLoading`.
 * - Отображает `RouteList` в качестве основного контента.
 * - Включает `Header` и `Footer`.
 *
 * @returns React-компонент корневого модуля приложения.
 */
export const AppModule = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Router>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={customTheme}>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
            <GlobalAutofillFix />
            {isLoading ? (
              <Box sx={loadingWrapperStyles}>
                <CircularProgress size={32} color="primary" />
              </Box>
            ) : (
              <Box component="div" className="wrapper">
                <Header />
                <Box component="main" className="content">
                  <React.Suspense>
                    <RouteList />
                  </React.Suspense>
                </Box>
                <Footer />
              </Box>
            )}
            <AuthProvider setIsLoading={setIsLoading} />
            <ToasterProvider />
          </LocalizationProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
};
