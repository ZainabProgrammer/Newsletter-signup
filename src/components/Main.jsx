import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { List, ListItem, Stack } from "@mui/material";
import { Container } from "@mui/system";
import image from "../images/img-desk.svg";
import checkbox from "../images/icon-list.svg";
import image_small from "../images/img-mob.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import MyButton from "./MyButton";
import Success from "./Success";

export default function Main() {
  const [email, setemail] = React.useState("");
  const [error, seterror] = React.useState(false);
  const [success, setsuccess] = React.useState(false);
  const sm = useMediaQuery("(max-width:600px)");
  const list = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];
  const emailInputRef = React.useRef(null);
  const handleChange = (e) => {
    setemail(e.target.value);
    seterror(false);
    emailInputRef.current.classList.remove("error");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    !email.includes("@company.com") && email !== ""
      ? seterror(true)
      : seterror(false);
    !email.includes("@company.com") && email !== ""
      ? emailInputRef.current.classList.add("error")
      : setsuccess(true);
    email !== "" && email.includes("@company.com") && setsuccess(true);
  };
  return (
    <>
      {!success ? (
        <Container
          maxWidth="md"
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            "@media (max-width:700px)": {
              height: "100%",
            },
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              p: 4,
              boxShadow: 4,
              gap: 2,
              borderRadius: 5,
              "@media (max-width:700px)": {
                flexDirection: "column",
                gap: 0,
              },
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={image}
              width="100%"
              height={500}
              src={sm ? image_small : image}
              sx={{
                flex: 1,
                content: {
                  xs: `url(${image_small})`,
                  md: `url(${image})`,
                },
              }}
            />
            <CardContent
              sx={{
                mt: 4,
                flex: 2,
                "@media (max-width:600px)": {
                  mt: 2,
                },
              }}
            >
              <Typography
                color="hsl(235, 18%, 26%)"
                gutterBottom
                variant="h3"
                component="div"
                fontWeight="bold"
              >
                Stay updated!
              </Typography>
              <Typography
                variant="body2"
                fontSize={16}
                color="hsl(235, 18%, 26%)"
                fontWeight={500}
                mb={2}
              >
                Join 60,000+ product managers receiving monthly updates on:
              </Typography>
              <List disablePadding>
                {list.map((e, index) => {
                  return (
                    <ListItem key={index} disablePadding>
                      <img src={checkbox} height={18} />
                      <Typography fontSize={14} ml={2} mt={1}>
                        {e}
                      </Typography>
                    </ListItem>
                  );
                })}
              </List>
              <br />
              <form>
                <Stack direction="row" justifyContent="space-between">
                  <label
                    style={{
                      fontWeight: 900,
                      fontSize: "10px",
                      color: "hsl(234, 29%, 20%)",
                    }}
                    id="email"
                  >
                    Email address
                  </label>
                  {error && (
                    <span
                      style={{
                        fontSize: 10,
                        color: "hsl(4, 100%, 57%) ",
                        fontWeight: "bold",
                      }}
                    >
                      Valid email required
                    </span>
                  )}
                </Stack>

                <input
                  type="email"
                  required
                  value={email}
                  name="email"
                  style={{
                    width: "90%",
                    padding: "14px",
                    marginTop: 10,
                    borderRadius: "5px",
                  }}
                  placeholder="email@company.com"
                  onChange={handleChange}
                  ref={emailInputRef}
                />
                <MyButton
                  type="submit"
                  onClick={handleSubmit}
                  title="Subscribe to monthly newsletter"
                />
              </form>
            </CardContent>
          </Card>
        </Container>
      ) : (
        <Success email={email} />
      )}
    </>
  );
}
