import { useProfileDetailsStore } from "../../store/useProfileDetailsStore";
import { ProfileDetailsEditUserForm } from "../ProfileDetailsEditUserForm";
import { BasicDrawer } from "../../../../shared/components/BasicDrawer";

export const ProfileDetailsEditUserDrawer = () => {
  const { showEditProfileDrawer, setShowEditProfileDrawer } =
    useProfileDetailsStore();
  return (
    <BasicDrawer
      title="Личные данные"
      isOpen={showEditProfileDrawer}
      setIsOpen={setShowEditProfileDrawer}
    >
      <ProfileDetailsEditUserForm />
    </BasicDrawer>
  );
};
