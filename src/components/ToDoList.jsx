// Hooks
import { useState } from "react";
// Components
import Task from "./Task";
// MUI
import { Divider } from "@mui/material";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
// Unique Id Lib
import { v4 as uuidv4 } from "uuid";

// ToDoList Component
export default function ToDoList() {
  // All Tasks State
  const [tasks, setTasks] = useState(() => {
    const storageTasks = JSON.parse(localStorage.getItem("Tasks")) ?? [];
    return storageTasks;
  });
  // Input for Task
  const [inputValue, setInputValue] = useState("");
  // Add New Task
  function handleAddTask() {
    const newTask = {
      id: uuidv4(),
      title: inputValue,
      description: "",
      isDone: false,
    };
    const storageTasks = [...tasks, newTask];
    setTasks(storageTasks);
    localStorage.setItem("Tasks", JSON.stringify(storageTasks));
    setInputValue("");
  }
  // Check task is done or not
  function handleCheckClick(id) {
    const updatedTasks = tasks.map((t) => {
      if (t.id === id) {
        return { ...t, isDone: !t.isDone };
      }
      return t;
    });
    setTasks(updatedTasks);
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
  }
  // Edit Task Data
  function handleUpdate(id, editTask) {
    const updatedTasks = tasks.map((t) => {
      if (t.id == id) {
        return {
          ...t,
          title: editTask.title,
          description: editTask.description,
        };
      } else {
        return t;
      }
    });
    setTasks(updatedTasks);
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
  }
  // Delete Task
  function handleDelete(id) {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
  }

  // Filter Tasks State
  const [FilterTasks, setFilterTasks] = useState("All");
  // Choose category
  const handleChange = (e) => {
    setFilterTasks(e.target.value);
  };
  // filter Data
  let filteredData = tasks.filter((t) => {
    if (FilterTasks === "Done") {
      return t.isDone;
    } else if (FilterTasks === "Pending") {
      return !t.isDone;
    } else {
      return true;
    }
  });
  // Turn the Data to Jsx
  const allTasks = filteredData.map((task) => {
    return (
      <Task
        key={task.id}
        task={task}
        handleCheck={handleCheckClick}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    );
  });

  return (
    <Container maxWidth="md">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {/* Title */}
          <Typography variant="h2">To Do List</Typography>
          <Divider />
          {/* Filter Buttons */}
          <ToggleButtonGroup
            color="primary"
            onChange={handleChange}
            value={FilterTasks}
            exclusive
            style={{ marginTop: "15px", marginBottom: "15px" }}
          >
            <ToggleButton value="All">All</ToggleButton>
            <ToggleButton value="Done">Done</ToggleButton>
            <ToggleButton value="Pending">Pending</ToggleButton>
          </ToggleButtonGroup>
          {/* Tasks Jsx */}
          {allTasks}
          {/* Add Task */}
          <Grid container spacing={2}>
            <Grid size={10}>
              <TextField
                label="Task"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid size={2}>
              <Button
                onClick={handleAddTask}
                variant="contained"
                sx={{ width: "100%", height: "100%" }}
                disabled={inputValue.length == 0}
              >
                Add Task
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
