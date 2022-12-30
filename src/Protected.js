import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import Container from "./Container";
import { useNavigate } from "react-router-dom";

function Protected() {
  const [shouldRedirect, updateShouldRedirect] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldRedirect) {
      navigate(-1);
    }
  }, [shouldRedirect]);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        updateShouldRedirect(false);
      })
      .catch(() => {
        updateShouldRedirect(true);
      });
  }, []);

  return (
    <Container>{shouldRedirect ? null : <h1>Protected route</h1>}</Container>
  );
}

export default Protected;
