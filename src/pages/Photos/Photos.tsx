import React from "react";
import axios from "axios";
import { Box, Toolbar } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "react-query";
import { Header } from "../../Layout/Header/Header";
import "../../App.css";
import { usePhotos } from "../../api/hooks/usePhotos";

export const Photos = () => {
  const { isLoading, error, data, isFetching, isError } = usePhotos();

  console.log({ isLoading, error, data, isFetching });
  console.log("development", process.env.REACT_APP_JSON_PLACEHOLDER);
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "inline-block",
          margin: "auto",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (isError) {
    console.error(error);
    return <div>Posts couldn't be loaded</div>;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <Box
        component="ul"
        sx={{
          flexGrow: 1,
          p: 4,
          listStyle: "none",
        }}
      >
        <Toolbar />
        {/* only if you have data do map otherwise  */}
        {data?.map((item) => (
          <li key={item.id} className="list_item">
            <div className="list_item__thumb">
              <img src={item.thumbnailUrl} />
            </div>
            <div className="list_item__content">
              <h4>{item.title}</h4>
              <p>{item.albumId}</p>
            </div>
          </li>
        ))}
      </Box>
    </Box>
  );
};
