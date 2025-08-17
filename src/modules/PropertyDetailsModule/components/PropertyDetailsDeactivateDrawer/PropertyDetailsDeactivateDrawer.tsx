import { BasicDrawer } from "../../../../shared/components/BasicDrawer";
import { propertyDetailsStore } from "../../store";
import { PropertyDetailsDeleteForm } from "../PropertyDetailsDeleteForm";

export const PropertyDetailsDeactivateDrawer = () => {
  const currentProperty = propertyDetailsStore(
    (state) => state.currentProperty,
  );
  const showDeactivateDrawer = propertyDetailsStore(
    (state) => state.showDeactivateDrawer,
  );
  const setShowDeactivateDrawer = propertyDetailsStore(
    (state) => state.setShowDeactivateDrawer,
  );

  return (
    <BasicDrawer
      title="Деактивация объекта недвижимости"
      isOpen={showDeactivateDrawer}
      setIsOpen={setShowDeactivateDrawer}
    >
      {currentProperty && (
        <PropertyDetailsDeleteForm property={currentProperty} />
      )}
    </BasicDrawer>
  );
};
