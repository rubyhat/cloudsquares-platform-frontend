import * as React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";

import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { useGetPropertyDetailsQuery } from "./hooks";
import { PropertyDetailsPriceBlock } from "./components/PropertyDetailsPriceBlock";
import { AxiosErrorAlertMessage } from "../../shared/components/AxiosErrorAlertMessage";
import { PropertyDetailsPhotoBlock } from "./components/PropertyDetailsPhotoBlock";
import { PropertyDetailsSlimInfo } from "./components/PropertyDetailsSlimInfo";
import { PropertyDetailsApartmentInfo } from "./components/PropertyDetailsApartmentInfo";
import { propertyDetailsStore } from "./store";
import { PropertyDetailsApartmentHouseInfo } from "./components/PropertyDetailsApartmentHouseInfo";
import { PropertyDetailsAdditionalOptions } from "./components/PropertyDetailsAdditionalOptions";
import { PropertyDetailsDescriptionInfo } from "./components/PropertyDetailsDescriptionInfo";

/**
 * Модуль страницы деталей недвижимости.
 *
 * Поведение:
 * - При смене `id` из URL сбрасывает `currentProperty` в Zustand → предотвращает
 *   «мигание» старыми данными (старые фото) до прихода новых.
 * - После успешной загрузки кладёт актуальные данные в `currentProperty`.
 * - В блок фото передаёт `key` и `entityKey`, чтобы Embla пересоздавалась при смене объекта.
 */
export const PropertyDetailsModule = () => {
  const { id } = useParams<{ id: string }>();

  const currentProperty = propertyDetailsStore(
    (state) => state.currentProperty,
  );
  const setCurrentProperty = propertyDetailsStore(
    (state) => state.setCurrentProperty,
  );

  // Загружаем детали по id (важно, чтобы внутри хука queryKey включал id)
  const { data, isSuccess, isLoading, error } = useGetPropertyDetailsQuery(id);

  // 1) КРИТИЧЕСКОЕ: при смене id мгновенно очищаем состояние,
  // чтобы старая карточка/фото не оставались на экране.
  React.useEffect(() => {
    setCurrentProperty(null);
  }, [id, setCurrentProperty]);

  // 2) После успешной загрузки записываем новые данные в Zustand
  React.useEffect(() => {
    if (isSuccess && data) {
      setCurrentProperty(data);
    }
  }, [data, isSuccess, setCurrentProperty]);

  const showContent = Boolean(currentProperty) && !isLoading;

  return (
    <React.Fragment>
      <BasicPageHeader title="Детали недвижимости" shownBackArrowButton />
      <Container
        maxWidth={false}
        sx={{ pb: { xs: "100px", md: 0 }, py: { xs: 2, md: 0 } }}
      >
        <Grid container spacing={2}>
          {error && !isLoading && (
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <AxiosErrorAlertMessage error={error} />
            </Grid>
          )}

          {isLoading && <React.Fragment>loading..</React.Fragment>}

          {showContent && (
            <React.Fragment>
              <Grid size={{ xs: 12, md: 8 }}>
                {/* key / entityKey гарантируют чистую инициализацию Embla при смене объекта */}
                <PropertyDetailsPhotoBlock
                  key={id}
                  entityKey={id}
                  photos={currentProperty!.property_photos ?? []}
                  // Можно также передать loading, если внутри слайдера хочешь показывать плейсхолдер:
                  // loading={isLoading}
                />
                <Grid size={12}>
                  <Box py={2.5}>
                    <PropertyDetailsSlimInfo />
                  </Box>
                  <Box pb={2.5}>
                    <Typography component="h1" variant="h4">
                      {currentProperty!.title}
                    </Typography>
                  </Box>
                </Grid>

                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <PropertyDetailsApartmentInfo />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <PropertyDetailsApartmentHouseInfo />
                  </Grid>

                  <PropertyDetailsAdditionalOptions />

                  <Grid size={12}>
                    <PropertyDetailsDescriptionInfo />
                  </Grid>
                </Grid>
              </Grid>

              <PropertyDetailsPriceBlock />
            </React.Fragment>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
