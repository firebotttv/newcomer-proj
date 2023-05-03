import React from "react";
import { DialogContext } from "./DialogProvider";

const useDialogContext = () => {
  const context = React.useContext(DialogContext);

  if (!context) {
    throw new Error(
      "useDialogContext needs to be called inside DialogProvider!"
    );
  }

  return context;
};

export default useDialogContext;
