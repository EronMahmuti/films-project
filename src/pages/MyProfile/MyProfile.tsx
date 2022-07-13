import React from "react";
import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { ProfileSidebar } from "../../components/ProfileSidebar/ProfileSidebar";
import { Header } from "../../Layout/Header/Header";
import { Box } from "@mui/system";

export const MyProfile = () => {
  const { user } = useAuthContext();
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Header />
      <ProfileSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
        }}
      >
        <h2>My profile</h2>
        <Outlet />
      </Box>
    </Box>
  );
};
