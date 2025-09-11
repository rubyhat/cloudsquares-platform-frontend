import { BasicDrawer } from "@/shared/components/BasicDrawer";
import { PropertyCategoriesModule } from "@/modules/PropertyCategoriesModule";
import { usePropertyFormStore } from "../../store";

export const PropertyCategoryDrawer = () => {
  const showPropertyCategoryDrawer = usePropertyFormStore(
    (state) => state.showPropertyCategoryDrawer,
  );
  const setShowPropertyCategoryDrawer = usePropertyFormStore(
    (state) => state.setShowPropertyCategoryDrawer,
  );

  return (
    <BasicDrawer
      title="Категории недвижимости"
      isOpen={showPropertyCategoryDrawer}
      setIsOpen={setShowPropertyCategoryDrawer}
    >
      <PropertyCategoriesModule showContentOnly />
    </BasicDrawer>
  );
};
