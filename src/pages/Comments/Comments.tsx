import React from "react";
import axios from "axios";
import { Box, Toolbar } from "@mui/material";
import { useQuery } from "react-query";
import { Header } from "../../Layout/Header/Header";
import "../../App.css";
import { useComments } from "../../api/hooks/useComments";

export const Comments = () => {
  const { isLoading, error, data, isFetching, isError } = useComments();
  
  console.log("development", process.env.REACT_APP_JSON_PLACEHOLDER);
  console.log({ isLoading, error, data, isFetching });

  if (isLoading) {
    return <div>Loading ...</div>;
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
          <li className="list_item" key={item.id}>
            <br /> <br />
            <div className="list_item__content">
              <h4>{item.name}</h4>
              <p>{item.email}</p>
              <p>{item.body}</p>
            </div>
          </li>
        ))}
      </Box>
    </Box>
  );
};
