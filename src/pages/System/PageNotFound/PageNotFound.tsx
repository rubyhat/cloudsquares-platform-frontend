import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Box, Container, Typography } from "@mui/material";

export const PageNotFound = () => {
  return (
    <Box component="section" className="section" data-testid="pagePageNotFound">
      <Container>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography component="h2" variant="h4" marginBottom={2}>
              Страница не найдена (404)
            </Typography>
            <Box marginBottom={1.5}>
              <Typography component="p" variant="h5" marginBottom={1}>
                Что случилось?
              </Typography>
              <Typography component="p" variant="body1">
                Вы попали на страницу, которой не существует
              </Typography>
            </Box>
            <Box marginBottom={1.5}>
              <Typography component="p" variant="h5" marginBottom={1}>
                Почему это произошло?
              </Typography>
              <Typography component="p" variant="body1">
                В большинстве ситуаций ошибка 404 отображается, если связь с
                сервером установлена, но информации по заданному запросу нет.
                Возможно, в адресе опечатка — такое случается при ручном наборе.
                Или страница была удалена, но сохранилась в закладках вашего
                браузера
              </Typography>
            </Box>
            <Box marginBottom={1.5}>
              <Typography component="p" variant="h5" marginBottom={1}>
                Что делать?
              </Typography>
              <Typography component="p" variant="body1" marginBottom={1.5}>
                Поскольку мы не знаем, как и откуда вы попали на эту страницу,
                то рекомендуем вернуться на{" "}
                <Typography
                  component={Link}
                  to="/"
                  variant="body1"
                  color="primary"
                  sx={{ textDecoration: "underline" }}
                >
                  главную страницу
                </Typography>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
