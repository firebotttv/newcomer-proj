import React, { FunctionComponent } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { DialogProvider } from "../../providers/DialogProvider/DialogProvider";
import { queryClient } from "../../../config/react-query/react-query";
import Layout from "../Layout/Layout";

interface Props {
  children?: React.ReactNode;
}

const Contexts: FunctionComponent<Props> = ({ children }) => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DialogProvider portalNodeName={"dialog-root"}>
        <Layout>{children}</Layout>
      </DialogProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default Contexts;
