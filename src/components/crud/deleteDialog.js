import React from "react";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export function DeleteDialog({
  open,
  handleClose,
  handleDelete,
  object
}) {

  return    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" className="dialog">
                <DialogTitle id="alert-dialog-title">
                Delete { object.name ? object.name : object.id } from the database?
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    You are about to delete {object.name ? object.name : object.id}. This deletion is irreversible and will completely remove all relations to this item in the database. <br />
                    Are you sure you want to delete {object.name ? object.name : object.id}?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} id="disagree" autoFocus>Cancel</Button>
                    <Button onClick={handleDelete} id="agree">
                        Delete {object.name ? object.name : object.id}
                    </Button>
                </DialogActions>
            </Dialog>;
}
  