import * as React from "react";
import { Box, Typography } from "@mui/material";
import { usePropertyFormStore } from "../../store";
import { chipStyles } from "./styles";

/**
 * Индикатор прогресса пошаговой формы.
 * - Подсвечивает пройденные и текущий шаги цветом `customColors.primary`;
 * - Будущие шаги — `customColors.grey300`;
 * - Порядок шагов берётся из store.stepsOrder (единый источник правды).
 */
export const PropertyFormStepCounter: React.FC = () => {
  const stepsOrder = usePropertyFormStore((s) => s.stepsOrder);
  const currentIndex = usePropertyFormStore((s) => s.getCurrentStepIndex());

  const total = stepsOrder.length;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        py: { xs: 1, md: 0 },
      }}
      aria-label={`Шаг ${currentIndex + 1} из ${total}`}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: 1 }}>
        {stepsOrder.map((item, idx) => {
          const isPassedOrCurrent = idx <= currentIndex;
          return <Box key={item} sx={chipStyles(isPassedOrCurrent)} />;
        })}
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ whiteSpace: "nowrap" }}
      >
        {currentIndex + 1}/{total}
      </Typography>
    </Box>
  );
};
