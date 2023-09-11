import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const startServer = async () => {
  return app.listen(3000, () => console.log("3000번 포트에서 Express 실행"));
};

if (process.env.NODE_ENV !== "test") {
  (async () => {
    await startServer();
  })();
}

export { app, startServer };
