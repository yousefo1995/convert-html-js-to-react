import "./App.css";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Title from "./components/title/title";
import Content from "./components/content/content";

function App() {
  const [answer, setAnswer] = useState("");
  const [answerState, setAnswerState] = useState("");
  const [loadingState, setLoadingState] = useState(false);

  const InputValueHandler = (e) => {
    setAnswer(e.target.value);
    setAnswerState("");
  };

  async function submitHandler(e) {
    try {
      setLoadingState(true);
      await submitForm(answer);
      setAnswerState("success");
    } catch (err) {
      setAnswerState("error");
    } finally {
      setLoadingState(false);
    }
  }

  async function submitForm(answer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (answer.toLocaleLowerCase() === "istanbul") {
          resolve();
        } else {
          reject();
        }
      }, 1500);
    });
  }

  return (
    <div>
      {answerState === "success" ? null : (
        <Box m={2.5} fontFamily="sans-serif">
          <Title>City quiz</Title>
          <Content>What city is located on two continents?</Content>
          <input value={answer} onChange={InputValueHandler} />
          <Box mt={1}>
            <button onClick={submitHandler}>submit</button>
            {loadingState === true && (
              <Typography mt={1}>Loading...</Typography>
            )}
            {answerState === "error" && (
              <Typography color="red">
                Good guess but a wrong answer. Try again!
              </Typography>
            )}
            {/* <p id="error" style="display: none; color: red"></p> */}
          </Box>
        </Box>
      )}
      {answerState === "success" && (
        <Typography m={1.5} fontSize="2rem" color="green">
          That's right!
        </Typography>
      )}
    </div>
  );
}

export default App;
