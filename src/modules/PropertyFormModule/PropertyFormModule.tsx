import { Box } from "@mui/material";
import { PropertyBasicDataForm } from "./components/PropertyBasicDataForm";
import { BasicDrawerMode } from "../../shared/interfaces/Shared";
import { PropertyFormSteps, usePropertyFormStore } from "./store";
import { PropertyFormStepCounter } from "./components/PropertyFormStepCounter";
import { PropertyFormOwners } from "./components/PropertyFormOwners";

interface PropertyFormModuleProps {
  mode: BasicDrawerMode; // TODO: BasicDrawerMode переименовать, так как это уже и в модалке и в просто форме может быть.
}

export const PropertyFormModule = ({ mode }: PropertyFormModuleProps) => {
  const step = usePropertyFormStore((state) => state.step);

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
