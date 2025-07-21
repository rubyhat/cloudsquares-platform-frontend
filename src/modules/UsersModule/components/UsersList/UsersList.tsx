import React from "react";
import { Grid } from "@mui/material";
import { useGetAllUsersQuery } from "../../hooks";
import { AxiosErrorAlertMessage } from "../../../../shared/components/AxiosErrorAlertMessage";
import { UsersListItem } from "../UsersListItem";
import { UsersListSkeleton } from "../UsersListSkeleton";

export const UsersList = () => {
  const { data, isSuccess, isLoading, error } = useGetAllUsersQuery();
  return (
    <React.Fragment>
      {isLoading && <UsersListSkeleton />}
      {error && <AxiosErrorAlertMessage error={error} />}
      {data &&
        isSuccess &&
        data.map((user) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={user.id}>
            <UsersListItem user={user} />
          </Grid>
        ))}
    </React.Fragment>
  );
};
