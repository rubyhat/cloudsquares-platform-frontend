import React from "react";
import { Grid } from "@mui/material";
import { useGetAllUsersQuery } from "../../hooks";
import { AxiosErrorAlertMessage } from "../../../../shared/components/AxiosErrorAlertMessage";
import { UserListItem } from "../UserListItem";

export const UsersList = () => {
  const { data, isSuccess, isLoading, error } = useGetAllUsersQuery();
  return (
    <React.Fragment>
      {isLoading && "Loading..."}
      {error && <AxiosErrorAlertMessage error={error} />}
      {data &&
        isSuccess &&
        data.map((user) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={user.id} py={2}>
            <UserListItem user={user} />
          </Grid>
        ))}
    </React.Fragment>
  );
};
