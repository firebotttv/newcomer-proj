import React, { FunctionComponent, ReactNode } from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import useDialogContext from "../../providers/DialogProvider/useDialogContext";

export interface ConfirmationDialogProps {
  title?: ReactNode;
  description?: ReactNode;
  isLoading?: boolean;
  onConfirmation: () => void;
}

const ConfirmationDialog: FunctionComponent<ConfirmationDialogProps> = ({
  title = "Are you sure?",
  description = "Do you really want to proceed this action?",
  onConfirmation,
  isLoading,
}) => {
  const { close } = useDialogContext();

  return (
    <Dialog
      open
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onConfirmation}
          color="primary"
          autoFocus
          disabled={isLoading}
        >
          {!isLoading ? (
            "Proceed"
          ) : (
            <CircularProgress size={24} color="inherit" />
          )}
        </Button>
        <Button onClick={close} color="secondary" disabled={isLoading}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
