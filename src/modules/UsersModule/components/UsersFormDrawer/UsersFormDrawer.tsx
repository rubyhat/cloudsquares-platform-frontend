import { useUsersStore } from "../../store";
import { UsersDeleteForm } from "../UsersDeleteForm";
import { BasicDrawer } from "../../../../shared/components/BasicDrawer";
import {
  BasicDrawerMode,
  DisplayTextBasicDrawerMode,
} from "../../../../shared/interfaces/Shared";
import { UsersFormModule } from "../../../UsersFormModule";

export const UsersFormDrawer = () => {
  const formMode = useUsersStore((state) => state.mode);
  const showUserFormDrawer = useUsersStore((state) => state.showUserFormDrawer);
  const setShowUserFormDrawer = useUsersStore(
    (state) => state.setShowUserFormDrawer,
  );

  return (
    <BasicDrawer
      title={DisplayTextBasicDrawerMode[formMode] + " сотрудника"}
      isOpen={showUserFormDrawer}
      setIsOpen={setShowUserFormDrawer}
    >
      {formMode === BasicDrawerMode.create && (
        <UsersFormModule
          mode={formMode}
          onSuccess={() => setShowUserFormDrawer(false)}
          onDecline={() => setShowUserFormDrawer(false)}
        />
      )}
      {formMode === BasicDrawerMode.edit && <UsersFormModule mode={formMode} />}
      {formMode === BasicDrawerMode.delete && <UsersDeleteForm />}
    </BasicDrawer>
  );
};
