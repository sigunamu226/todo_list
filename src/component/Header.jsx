import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import "./header.css";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography className="title" variant="h6">
            Todoリスト
          </Typography>
          <Button color="inherit" href="https://github.com/sigunamu226">
            GitHub
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
