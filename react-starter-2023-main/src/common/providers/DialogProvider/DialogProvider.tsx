import React, { FunctionComponent, ReactNode, useState } from "react";
import { createPortal } from "react-dom";

export interface DialogInterface {
  show: (component: ReactNode) => void;
  close: () => void;
}

export const DialogContext = React.createContext<DialogInterface | null>(null);

interface DialogProviderInterface {
  portalNodeName: string;
  children?: React.ReactNode;
}

export const DialogProvider: FunctionComponent<DialogProviderInterface> = ({
  portalNodeName,
  children,
}) => {
  const [dialog, setDialog] = useState<ReactNode | null>();

  let dialogPortalNode = document.getElementById(portalNodeName);

  if (!dialogPortalNode) {
    dialogPortalNode = document.createElement("div");
    dialogPortalNode.setAttribute("id", portalNodeName);

    document.body.appendChild(dialogPortalNode);
  }

  return (
    <DialogContext.Provider
      value={{
        show: (component) => setDialog(component),
        close: () => setDialog(null),
      }}
    >
      {dialog && createPortal(dialog, dialogPortalNode as HTMLElement)}
      {children}
    </DialogContext.Provider>
  );
};
