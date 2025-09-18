import { BasicDrawer } from "../../../../shared/components/BasicDrawer";
import { usePropertyDetailsStore } from "../../store";
import { PropertyDetailsDeleteForm } from "../PropertyDetailsDeleteForm";

export const PropertyDetailsDeactivateDrawer = () => {
  const currentProperty = usePropertyDetailsStore(
    (state) => state.currentProperty,
  );
  const showDeactivateDrawer = usePropertyDetailsStore(
    (state) => state.showDeactivateDrawer,
  );
  const setShowDeactivateDrawer = usePropertyDetailsStore(
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
