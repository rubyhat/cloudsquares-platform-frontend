import { useUsersStore } from "../../store";
import { UsersDeleteForm } from "../UsersDeleteForm";
import { UsersForm } from "../UsersForm/UsersForm";
import { BasicDrawer } from "../../../../shared/components/BasicDrawer";
import {
  BasicDrawerMode,
  DisplayTextBasicDrawerMode,
} from "../../../../shared/interfaces/Shared";

export const UsersFormDrawer = () => {
  const formMode = useUsersStore((state) => state.mode);
  const showUserFormDrawer = useUsersStore((state) => state.showUserFormDrawer);
  const setShowUserFormDrawer = useUsersStore(
    (state) => state.setShowUserFormDrawer,
  );

  return (
    <BasicDrawer
      title={DisplayTextBasicDrawerMode[formMode] + " пользователя"}
      isOpen={showUserFormDrawer}
      setIsOpen={setShowUserFormDrawer}
    >
      {formMode === BasicDrawerMode.create && <UsersForm mode={formMode} />}
      {formMode === BasicDrawerMode.edit && <UsersForm mode={formMode} />}
      {formMode === BasicDrawerMode.delete && <UsersDeleteForm />}
    </BasicDrawer>
  );
};
