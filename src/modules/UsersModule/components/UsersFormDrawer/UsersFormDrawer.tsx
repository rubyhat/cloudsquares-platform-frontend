import {
  BasicDrawerMode,
  DisplayTextBasicDrawerMode,
} from "../../../../shared/interfaces/Shared";
import { BasicDrawer } from "../../../../shared/components/BasicDrawer";
import { useUsersStore } from "../../store";
import { UsersDeleteForm } from "../UsersDeleteForm";
import { UsersFormModule } from "../../../UsersFormModule";

export const UsersFormDrawer = () => {
  const formMode = useUsersStore((state) => state.mode);
  const showUserFormDrawer = useUsersStore((state) => state.showUserFormDrawer);
  const setShowUserFormDrawer = useUsersStore(
    (state) => state.setShowUserFormDrawer,
  );
  const editableUser = useUsersStore((state) => state.editableUser);

  return (
    <BasicDrawer
      title={DisplayTextBasicDrawerMode[formMode] + " сотрудника"}
      isOpen={showUserFormDrawer}
      setIsOpen={setShowUserFormDrawer}
    >
      {formMode === BasicDrawerMode.create && (
        <UsersFormModule
          user={null}
          mode={formMode}
          onSuccess={() => setShowUserFormDrawer(false)}
          onDecline={() => setShowUserFormDrawer(false)}
        />
      )}
      {formMode === BasicDrawerMode.edit && editableUser && (
        <UsersFormModule user={editableUser} mode={formMode} />
      )}
      {formMode === BasicDrawerMode.delete && editableUser && (
        <UsersDeleteForm
          user={editableUser}
          onSuccess={() => setShowUserFormDrawer(false)}
          onDecline={() => setShowUserFormDrawer(false)}
        />
      )}
    </BasicDrawer>
  );
};
