/* import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
export default function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}
 */
import { useNavigate } from "react-router-dom";
import Button from "./Button";
/* 
export default function BackButton({ to }) {
  const navigate = useNavigate();

  return (
    <Button type="back" onClick={() => navigate(to)}>
      &larr; Back
    </Button>
  );
} */

export default function BackButton({ to }) {
  const navigate = useNavigate();

  function handleBack() {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  }

  return (
    <Button type="back" onClick={handleBack}>
      &larr; Back
    </Button>
  );
}
