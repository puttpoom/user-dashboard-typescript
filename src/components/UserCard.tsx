import React from "react";
import { Box, CardMedia, Grid2, Typography } from "@mui/material";
import { UserData } from "../types/User";
import { useNavigate } from "react-router-dom";

export type TUserCard = Omit<UserData, "password"> & {
  mark?: string;
};

export default function UserCard({
  id,
  name,
  address,
  email,
  gender,
  avatar,
  aboutme,
  mark,
}: TUserCard) {
  const navigate = useNavigate();

  function HighLightText(text: string) {
    if (!mark) return text;
    const regex = new RegExp(`(${mark})`, "gi");
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, index) =>
          typeof part === "string" &&
          part.toLowerCase() === mark.toLowerCase() ? (
            <mark key={index}>{part}</mark>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        direction: "row",
        padding: "16px",
        alignItems: "center",
        outline: "black solid 0.5px",
        backgroundColor: "inherit",
        "&:hover": {
          backgroundColor: "#eeeeee",
          cursor: "pointer",
        },
      }}
      onClick={() => navigate(`/user/${id}`)}
    >
      <CardMedia
        component="img"
        sx={{ width: "50px" }}
        image={avatar}
        alt="Avatar"
      />
      <Grid2 direction="row">
        <Typography component="p" variant="h6" sx={{ fontWeight: "bold" }}>
          {HighLightText(name)}
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Email: </span>
          {HighLightText(email)}
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Gender: </span>
          {gender}
        </Typography>
        <Typography
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <span style={{ fontWeight: "bold" }}>AboutMe: </span>
          {aboutme}
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Address: </span>
          {address}
        </Typography>
      </Grid2>
    </Box>
  );
}
