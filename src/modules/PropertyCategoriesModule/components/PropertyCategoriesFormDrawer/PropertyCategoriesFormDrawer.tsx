import {
  BasicDrawerMode,
  DisplayTextBasicDrawerMode,
} from "@/shared/interfaces/Shared";
import { BasicDrawer } from "@/shared/components/BasicDrawer";
import { PropertyCategoryFormModule } from "@/modules/PropertyCategoryFormModule";

import { usePropertyCategoriesStore } from "../../store";

export const PropertyCategoriesFormDrawer = () => {
  const formMode = usePropertyCategoriesStore((state) => state.mode);
  const showPropertyCategoriesFormDrawer = usePropertyCategoriesStore(
    (state) => state.showPropertyCategoriesFormDrawer,
  );
  const setShowPropertyCategoriesFormDrawer = usePropertyCategoriesStore(
    (state) => state.setShowPropertyCategoriesFormDrawer,
  );
  const editablePropertyCategory = usePropertyCategoriesStore(
    (state) => state.editablePropertyCategory,
  );

  return (
    <BasicDrawer
      title={DisplayTextBasicDrawerMode[formMode] + " категории"}
      isOpen={showPropertyCategoriesFormDrawer}
      setIsOpen={setShowPropertyCategoriesFormDrawer}
    >
      {formMode === BasicDrawerMode.create && (
        <PropertyCategoryFormModule
          mode={formMode}
          onSuccess={() => setShowPropertyCategoriesFormDrawer(false)}
          onDecline={() => setShowPropertyCategoriesFormDrawer(false)}
        />
      )}
      {(formMode === BasicDrawerMode.edit ||
        formMode === BasicDrawerMode.delete) && (
        <PropertyCategoryFormModule
          mode={formMode}
          onSuccess={() => setShowPropertyCategoriesFormDrawer(false)}
          onDecline={() => setShowPropertyCategoriesFormDrawer(false)}
          editablePropertyCategory={editablePropertyCategory}
        />
      )}
    </BasicDrawer>
  );
};
