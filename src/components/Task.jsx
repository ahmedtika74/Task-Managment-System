// Hooks
import { useState } from "react";
// MUI
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
// MUI Icons
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Task Component
export default function Task({
  task,
  handleCheck,
  handleDelete,
  handleUpdate,
}) {
  // Delete dialoge state
  const [open, setOpen] = useState(false);
  // Edit dialoge state
  const [openEdit, setOpenEdit] = useState(false);
  // Edit task data state
  const [UpdatedTask, setUpdatedTask] = useState({
    title: task.title,
    description: task.description,
  });
  // Open Delete Dialog
  const handleClickOpen = () => {
    setOpen(true);
  };
  // Close Delete Dialog
  const handleClose = () => {
    setOpen(false);
  };
  // Delete Task Call
  const handleTaskDelete = () => {
    handleDelete(task.id);
    handleClose();
  };
  // Open Edit Dialog
  const handleEdit = () => {
    setOpenEdit(true);
  };
  // Close Edit Dialog
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  // Edit Task Call
  const handleUpdateEdit = () => {
    handleUpdate(task.id, UpdatedTask);
    handleCloseEdit();
  };
  return (
    <>
      {/* Edit Modal */}
      <Dialog open={openEdit} disableRestoreFocus onClose={handleCloseEdit}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            style={{ minWidth: "500px" }}
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            value={UpdatedTask.title}
            onChange={(e) => {
              setUpdatedTask({ ...UpdatedTask, title: e.target.value });
            }}
          />
          <TextField
            style={{ minWidth: "500px" }}
            margin="dense"
            id="description"
            label="Description"
            value={UpdatedTask.description}
            onChange={(e) => {
              setUpdatedTask({ ...UpdatedTask, description: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button onClick={handleUpdateEdit}>Confirm</Button>
        </DialogActions>
      </Dialog>
      {/* Delete Modal */}
      <Dialog open={open} disableRestoreFocus onClose={handleClose}>
        <DialogTitle>Are you sure to delete this task?</DialogTitle>
        <DialogContent>
          <DialogContentText>You can't undo this action.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleTaskDelete}>Agree</Button>
        </DialogActions>
      </Dialog>
      {/* Task */}
      <Card
        sx={{ background: "gray", color: "white", marginBottom: "15px" }}
        className="Card"
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={9} sx={{ textAlign: "left" }}>
              <Typography variant="h5">{task.title}</Typography>
              <Typography variant="h6">{task.description}</Typography>
            </Grid>
            <Grid
              size={3}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {/* Done */}
              <IconButton
                onClick={() => {
                  handleCheck(task.id);
                }}
                sx={{
                  background: task.isDone ? "#15e927" : "white",
                  border: "solid 3px #15e927",
                  color: task.isDone ? "white" : "#15e927",
                }}
              >
                <CheckIcon />
              </IconButton>
              {/* Edit */}
              <IconButton
                onClick={handleEdit}
                sx={{
                  background: "white",
                  border: "solid 3px blue",
                  color: "blue",
                }}
              >
                <EditIcon />
              </IconButton>
              {/* Delete */}
              <IconButton
                onClick={handleClickOpen}
                sx={{
                  background: "white",
                  border: "solid 3px red",
                  color: "red",
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
