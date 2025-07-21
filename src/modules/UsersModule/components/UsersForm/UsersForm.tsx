import { BasicDrawerMode } from "../../../../shared/interfaces/Shared";

interface UsersFormProps {
  mode: BasicDrawerMode;
}

export const UsersForm = ({ mode }: UsersFormProps) => {
  return <div>UsersForm {mode}</div>;
};
