import { BasicDrawer } from "../../../../shared/components/BasicDrawer";
import { useHomeStore } from "../../store";
import { HomeAgencyInfoEditForm } from "../HomeAgencyInfoEditForm";

export const HomeAgencyInfoDrawer = () => {
  const showAgencyInfoDrawer = useHomeStore(
    (state) => state.showAgencyInfoDrawer,
  );
  const setShowAgencyInfoDrawer = useHomeStore(
    (state) => state.setShowAgencyInfoDrawer,
  );

  return (
    <BasicDrawer
      title="Данные агентства"
      isOpen={showAgencyInfoDrawer}
      setIsOpen={setShowAgencyInfoDrawer}
    >
      <HomeAgencyInfoEditForm />
    </BasicDrawer>
  );
};
