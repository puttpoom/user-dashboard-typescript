import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Grid2,
  Button,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type THeader = {
  title: string;
};

export default function Header({ title }: THeader) {
  const { authUser, handleLogout } = useAuth();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Grid2 container spacing={1} alignItems={"center"}>
            <Grid2>
              <Typography variant="h6">Hello! {authUser?.name}</Typography>
            </Grid2>
            <Grid2>
              <Avatar alt={authUser?.name} src={authUser?.avatar} />
            </Grid2>
            <Grid2>
              <Button color="error" variant="contained" onClick={handleLogout}>
                LOG OUT
              </Button>
            </Grid2>
          </Grid2>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
