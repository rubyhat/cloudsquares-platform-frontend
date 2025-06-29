import { RegistrationForm } from "../RegistrationForm";
import { BasicDrawer } from "../../../../shared/components/BasicDrawer";
import { useRegistrationStore } from "../../store/useRegistrationStore";

export const RegistrationDrawer = () => {
  const showRegistrationDrawer = useRegistrationStore(
    (state) => state.showRegistrationDrawer,
  );
  const setShowRegistrationDrawer = useRegistrationStore(
    (state) => state.setShowRegistrationDrawer,
  );
  return (
    <BasicDrawer
      title="Создание аккаунта"
      isOpen={showRegistrationDrawer}
      setIsOpen={setShowRegistrationDrawer}
    >
      <RegistrationForm />
    </BasicDrawer>
  );
};
