import React from "react";
import { FunctionComponent } from "react";
import { Grid, LinearProgress } from "@mui/material";
import { useUsersQuery } from "../hooks/queries/useUsersQuery";
import { User } from "../models/User";
import PostCard from "../../posts/components/PostCard";
import PostRemoveConfirmationDialog from "../dialogs/PostRemoveConfirmationDialog";
import useDialogContext from "../../common/providers/DialogProvider/useDialogContext";

const UserContainer: FunctionComponent = () => {
  const { data, isLoading, isError } = useUsersQuery();
  const { show } = useDialogContext();

  if (isLoading) return <LinearProgress />;
  if (!data || isError) return <p>Users not loading.</p>;

  const users = data.map((user: User) => (
    <Grid key={post.id} item xs={12} md={4}>
      <UserCard
        user={user}
        //onRemove={() => show(<PostRemoveConfirmationDialog post={post} />)}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {users}
    </Grid>
  );
};

export default UserContainer;
