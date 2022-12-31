import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

const protectedRoute =
  (Comp, route = "/profile") =>
  (props) => {
    const [shouldRedirect, updateShouldRedirect] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      if (shouldRedirect) {
        navigate(route);
      }
    }, [shouldRedirect]);

    async function checkAuthState() {
      try {
        await Auth.currentAuthenticatedUser();
        updateShouldRedirect(false);
      } catch (err) {
        updateShouldRedirect(true);
      }
    }

    useEffect(() => {
      checkAuthState();
    }, []);

    return shouldRedirect === null || shouldRedirect ? null : (
      <Comp {...props} />
    );
  };

export default protectedRoute;
