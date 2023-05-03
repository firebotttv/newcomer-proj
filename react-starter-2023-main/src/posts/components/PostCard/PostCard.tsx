import React, { FunctionComponent } from "react";
import { Post } from "../../models/Post";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export interface PostCardProps {
  post: Post;
  onRemove: () => void;
}

const PostCard: FunctionComponent<PostCardProps> = ({ post, onRemove }) => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {post.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {post.body}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="outlined" color="error" onClick={onRemove}>
        Remove
      </Button>
    </CardActions>
  </Card>
);

export default PostCard;
