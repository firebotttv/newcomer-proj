import React, { FunctionComponent } from "react";
import Contexts from "../components/Context";
import PostsPage from "../../posts/pages/PostsPage";

const Routes: FunctionComponent = () => (
  <Contexts>
    <PostsPage /> // TODO routing
  </Contexts>
);

export default Routes;
