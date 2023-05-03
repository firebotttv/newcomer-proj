import React from "react";
import { FunctionComponent } from "react";
import { Post } from "../../models/Post";
import useDialogContext from "../../../common/providers/DialogProvider/useDialogContext";
import { getPostsQueryKey } from "../../hooks/queries/usePostsQuery";
import { useQueryClient } from "@tanstack/react-query";
import ConfirmationDialog from "../../../common/dialogs/ConfirmatioDialog/ConfirmationDialog";
import usePostRemoveCommand from "../../hooks/mutations/usePostRemoveCommand";

export interface PostRemoveConfirmationDialogProps {
  post: Post;
}

const PostRemoveConfirmationDialog: FunctionComponent<
  PostRemoveConfirmationDialogProps
> = ({ post }) => {
  const { close } = useDialogContext();
  const queryCache = useQueryClient();
  const { isLoading, mutate } = usePostRemoveCommand();

  return (
    <ConfirmationDialog
      description={`Do you really want to remove post "${post.title}"`}
      isLoading={isLoading}
      onConfirmation={() =>
        mutate(post.id, {
          onSuccess: () => {
            // Close dialog
            close();

            // Reset posts query, so it'll re-fetch new data on overview page
            queryCache.removeQueries(getPostsQueryKey());
          },
        })
      }
    />
  );
};

export default PostRemoveConfirmationDialog;
