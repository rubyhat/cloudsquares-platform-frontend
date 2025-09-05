import { Box } from "@mui/material";
import { PropertyFormMode } from "@/shared/interfaces/PropertyForm";
import { PropertyBasicDataForm } from "./components/PropertyBasicDataForm";
import { PropertyFormSteps, usePropertyFormStore } from "./store";
import { PropertyFormStepCounter } from "./components/PropertyFormStepCounter";
import { PropertyFormOwners } from "./components/PropertyFormOwners";
import { usePropertyFormStepSync } from "./hooks";

interface PropertyFormModuleProps {
  mode: PropertyFormMode;
}

export const PropertyFormModule = ({ mode }: PropertyFormModuleProps) => {
  const step = usePropertyFormStore((state) => state.step);
  // Синхронизация шага с URL / режимом
  usePropertyFormStepSync(mode);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PropertyFormStepCounter />
      <Box flexGrow={1}>
        {step === PropertyFormSteps.basic_data && (
          <PropertyBasicDataForm mode={mode} editableProperty={null} />
        )}
        {step === PropertyFormSteps.property_owners && <PropertyFormOwners />}
      </Box>
    </Box>
  );
};
