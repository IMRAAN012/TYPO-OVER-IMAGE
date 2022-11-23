/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Carousel from "react-material-ui-carousel";
import { CardMedia, Card, Box, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import area from "assets/icons/location.svg";
import CardHeaderContainer from "component/CardHeaderContainer/CardHeaderContainer";
import profileimage from "assets/svg/propertyImage.svg";
import {
  typoimg,
  typo,
  cardray,
  typoray,
  woodenHometypo,
  woodenHomeLocation,
  profile,
} from "./PropertyProfile.style";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },

  // {
  //   label: "Bird",
  //   imgPath:
  //     "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  // },
  // {
  //   label: "Bali, Indonesia",
  //   imgPath:
  //     "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  // },
  // {
  //   label: "Goč, Serbia",
  //   imgPath:
  //     "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  // },
];

function ProfileImageDetails(props) {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel height={400}>
      {images.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "400px",
        backgroundImage: `url(${props.item.imgPath})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            color: "#FFFFFF",
            top: 25,
            left: "10%",
            transform: "translateX(-50%)",
          }}
        >
          {" "}
          <Card style={typoimg}>
            <Typography style={typo}>Auction</Typography>
          </Card>
        </div>
        <div
          style={{
            position: "absolute",
            color: "#FFFFFF",
            top: 25,
            left: "90%",
            transform: "translateX(-50%)",
          }}
        >
          {" "}
          <Card style={profile}>
            <Typography style={typo}>Guy Hawkins</Typography>
          </Card>
        </div>
        <div
          style={{
            position: "absolute",
            color: "red",
            top: 285,
            left: "15%",
            transform: "translateX(-50%)",
          }}
        >
          {" "}
          <Typography style={woodenHometypo}>
            Wooden Home
            <Typography style={woodenHomeLocation}>
              <CardHeaderContainer
                width="18.63px"
                height="22.62px"
                icon={area}
              />
              56 Owen Street, North Bondi
            </Typography>
          </Typography>
        </div>
        <div
          style={{
            position: "absolute",
            color: "#FFFFFF",
            top: 115,
            left: "90%",
            transform: "translateX(-50%)",
          }}
        >
          {" "}
          <Card style={cardray}>
            <Typography style={typoray}>RayWhite</Typography>
          </Card>
        </div>
      </div>
      {/* <img src={props.item.imgPath} alt="s" width="100%" height="100%" /> */}
    </Box>
  );
}
export default ProfileImageDetails;
