import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const App = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const onChangeTaskTitle = (e) => {
    setTaskTitle(e.target.value);
  };

  const resetTextField = () => {
    setTaskTitle("");
  };

  const addTasks = () => {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        doing: false,
      },
    ]);
    resetTextField();
  };

  const deleteTasks = (task) => {
    setTasks(
      tasks.filter((t) => {
        return t !== task;
      })
    );
  };

  const isTaskInclude = () => {
    return tasks.some((task) => task.title === taskTitle);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} display="flex" justifyContent="space-around">
        <TextField
          id="standard-basic"
          label="タイトル"
          value={taskTitle}
          onChange={onChangeTaskTitle}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTasks}
          disabled={(taskTitle === "") | isTaskInclude()}
        >
          作成
        </Button>
      </Box>

      <List>
        {tasks.map((t, i) => {
          return (
            <ListItem key={i}>
              <ListItemIcon>
                <Checkbox edge="start" />
              </ListItemIcon>
              <ListItemText primary={t.title} />
              <Button onClick={() => deleteTasks(t)}>
                <DeleteIcon />
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default App;
