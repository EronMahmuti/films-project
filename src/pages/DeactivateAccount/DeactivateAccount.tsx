import React, { useState } from "react";
import { Button, FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";

export const DeactivateAccount = () => {
  const authContext = useAuthContext();
  const [deactivate, setIsDeactivated] = useState(false);
  const handleDeactivate = () => {
    setIsDeactivated(!deactivate);
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch onChange={handleDeactivate} />}
        label="Deactivate user"
      ></FormControlLabel>
      <Button
        type="submit"
        variant="contained"
        sx={{
          width: "200px",
        }}
        disabled = {!deactivate  }
        onClick={authContext.onLogOut }
      >
        Save
      </Button>
    </FormGroup>
  );
};
