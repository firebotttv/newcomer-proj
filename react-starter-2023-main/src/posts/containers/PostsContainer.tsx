import React from "react";
import { FunctionComponent } from "react";
import { Grid, LinearProgress } from "@mui/material";
import { usePostsQuery } from "../hooks/queries/usePostsQuery";
import { Post } from "../models/Post";
import PostCard from "../components/PostCard";
import PostRemoveConfirmationDialog from "../dialogs/PostRemoveConfirmationDialog";
import useDialogContext from "../../common/providers/DialogProvider/useDialogContext";

const PostsContainer: FunctionComponent = () => {
  const { data, isLoading, isError } = usePostsQuery();
  const { show } = useDialogContext();

  if (isLoading) return <LinearProgress />;
  if (!data || isError) return <p>Posts not loading.</p>;

  const posts = data.map((post: Post) => (
    <Grid key={post.id} item xs={12} md={4}>
      <PostCard
        post={post}
        onRemove={() => show(<PostRemoveConfirmationDialog post={post} />)}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {posts}
    </Grid>
  );
};

export default PostsContainer;
