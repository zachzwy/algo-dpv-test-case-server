import dotenv from "dotenv";
import express from "express";
import axios from "axios";
import cors from "cors";
import { PythonShell } from "python-shell";
import { getProblems } from "./util";
import {
  pythonDeserialize,
  javaDeserialize,
  cppDeserialize,
  javascriptDeserialize,
} from "./deserializer";

dotenv.config();
const app = express();
app.use(cors());

app.get("/problems", (req: express.Request, res: express.Response) => {
  try {
    res.send(getProblems());
  } catch (e) {
    console.log("Error in get problems: ", e);
    res.send({});
  }
});

app.get("/submit", async (req: express.Request, res: express.Response) => {
  try {
    const { code, problem, language, token } = req.query;
    console.log("problem: ", problem);
    console.log("language: ", language);

    const resp = await axios.post(
      `https://www.recaptcha.net/recaptcha/api/siteverify?response=${token}&secret=${process.env.RECAPTCHA_SECRET_KEY}`
    );

    if (resp.data.score <= 0.1) {
      res.send(`Bot detected - ${resp.data.score}`);
      return;
    }

    if (language == "python") {
      const content = pythonDeserialize(problem as string);
      PythonShell.runString(
        code + "\n" + content,
        null,
        // results is an array consisting of messages collected during execution
        (err, results) => {
          if (err) res.send(err.stack);
          else res.send(results);
        }
      );
    } else if (language == "cpp") {
      // Todo
      const content = cppDeserialize(problem as string);
      res.send(`${language} is not yet supported`);
    } else if (language == "java") {
      const content = javaDeserialize(problem as string);
      // Todo
      res.send(`${language} is not yet supported`);
    } else if (language == "javascript") {
      const content = javascriptDeserialize(problem as string);
      // Todo
      res.send(`${language} is not yet supported`);
    } else res.send(`${language} is not yet supported`);
  } catch (e) {
    console.log("Error in submit: ", e);
    res.send("Unknown system error");
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server started on port 8080");
});
