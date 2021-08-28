import { Button } from "@material-ui/core";
import React from "react";

const QuizButton = ({ children, onClick }) => {
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        type="submit"
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
};

export default QuizButton;
