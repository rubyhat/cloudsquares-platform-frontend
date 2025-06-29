interface DisplayUserNameProps {
  first_name?: string | null;
  last_name?: string | null;
  middle_name?: string | null;
}

export const displayUserName = ({
  first_name,
  last_name,
  middle_name,
}: DisplayUserNameProps): { shortName: string; fullName: string } => {
  let shortName = "";
  let fullName = "";

  if (first_name) {
    shortName = first_name;
    fullName = first_name;
  }

  if (last_name) {
    shortName += " " + last_name.slice(0, 1) + ".";
    fullName += " " + last_name;
  }

  if (middle_name) {
    shortName += " " + middle_name.slice(0, 1) + ".";
    fullName += " " + middle_name;
  }

  if (shortName.length === 0) {
    shortName = "-";
    fullName = "-";
  }

  return {
    shortName,
    fullName,
  };
};
