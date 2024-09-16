import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import {
  TextField,
  Button,
  Typography,
  FormLabel,
  Box,
  Grid2,
  Alert,
} from "@mui/material";
import { formSchema } from "../utils/validationSchema";
import { UserCredential } from "../types/User";
import { useAuth } from "../context/AuthContext";
import { ToastContainer } from "react-toastify";

export default function LoginForm() {
  const { handleLogin, error, setError } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredential>({
    resolver: joiResolver(formSchema),
  });

  const onSubmit = (data: UserCredential) => {
    handleLogin(data);
  };

  return (
    <Box
      sx={{
        width: "50vh",
        padding: "24px",
        border: "0.5px solid #9E9E9E",
        borderRadius: "8px",
      }}
      maxWidth="sm"
    >
      <Typography variant="h5" fontWeight={"bold"} gutterBottom>
        LOGIN
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container rowGap={1} direction={"column"}>
          <Grid2>
            <FormLabel>Email</FormLabel>
            <TextField
              size="small"
              fullWidth
              margin="dense"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              onFocus={() => setError("")}
            />
          </Grid2>
          <Grid2>
            <FormLabel>Password</FormLabel>
            <TextField
              size="small"
              type="password"
              fullWidth
              margin="dense"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              onFocus={() => setError("")}
            />
          </Grid2>
          <Grid2>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid2>
          <Grid2>{error && <Alert severity="error">{error}</Alert>}</Grid2>
          {/* <ToastContainer /> */}
        </Grid2>
      </form>
    </Box>
  );
}
