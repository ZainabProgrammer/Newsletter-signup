import { Button } from "@mui/base";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import check from "../images/icon-list.svg";
import MyButton from "./MyButton";

const Success = ({ email }) => {
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ maxWidth: "400px", p: 5, boxShadow: 5, borderRadius: 9 }}>
        <div style={{ width: "50px" }}>
          <CardMedia component="img" src={check} />
        </div>
        <CardContent>
          <Typography variant="h3" fontWeight="bold" mt={3}>
            Thanks for subscribing
          </Typography>
          <Typography mt={2}>
            A confirmation email has been sent to{" "}
            <span style={{ fontWeight: "bold" }}>{email}. </span>
            Please open it and click the button inside to confirm your
            subscription.
          </Typography>
          <div style={{ marginTop: 9 }}>
            <MyButton title="Dismiss message" onClick={handleClick} />
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Success;
