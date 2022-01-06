import React, { useState } from "react";
import { Container as DraggContainer, Draggable } from "react-smooth-dnd";
import { arrayMove } from "react-sortable-hoc";
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
import Header from "./component/Header";

const App = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

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
        order: count,
      },
    ]);
    setCount(count + 1);
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

  const onDrop = ({ removedIndex, addedIndex }) => {
    const updater = (tasks) =>
      arrayMove(tasks, removedIndex, addedIndex).map((task, idx) => {
        return { ...task, order: idx };
      });
    setTasks(updater);
  };

  return (
    <>
      <Header />
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
          <DraggContainer onDrop={onDrop}>
            {tasks.map((t, i) => {
              return (
                <Draggable key={i}>
                  <ListItem>
                    <ListItemIcon>
                      <Checkbox edge="start" />
                    </ListItemIcon>
                    <ListItemText primary={t.title} />
                    <Button onClick={() => deleteTasks(t)}>
                      <DeleteIcon />
                    </Button>
                  </ListItem>
                </Draggable>
              );
            })}
          </DraggContainer>
        </List>
      </Container>
    </>
  );
};

export default App;
