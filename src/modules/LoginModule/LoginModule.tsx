import { Container, Grid } from "@mui/material";
import { LoginForm } from "./components/LoginForm";
import { useLogoutEffect } from "./hooks";
import { RegistrationModule } from "../RegistrationModule";

/**
 * Модуль страницы входа в систему.
 *
 * - Центрирует форму входа (`LoginForm`) по горизонтали и вертикали.
 * - Использует `Grid` для адаптивного расположения формы.
 * - Использует `useLogoutEffect` для выхода из учетной записи.
 *
 * @returns React-компонент модуля входа
 */
export const LoginModule = () => {
  useLogoutEffect();

  return (
    <Container maxWidth={false}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid size={{ xs: 12, md: 6 }} py={10}>
          <LoginForm />
          <RegistrationModule />
        </Grid>
      </Grid>
    </Container>
  );
};
