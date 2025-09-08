import { BasicDrawer } from "@/shared/components/BasicDrawer";
import {
  BasicDrawerMode,
  DisplayTextBasicDrawerMode,
} from "@/shared/interfaces/Shared";

import { usePropertyCategoriesStore } from "../../store";
import { PropertyCategoryFormModule } from "@/modules/PropertyCategoryFormModule";

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
      title={DisplayTextBasicDrawerMode[formMode] + " сотрудника"}
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
      {formMode === BasicDrawerMode.edit && (
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
