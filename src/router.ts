import { Router } from "express";
import { authRouter } from "./auth/interface/auth.route";
import { userRouter } from "./user/interface/user.route";
import { folderRouter } from "./folder/interface/folder.route";
import { vocaNoteRouter } from "./vocaNote/interface/vocaNote.route";
import { wordDataRouter } from "./wordData/interface/wordData.route";

export const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/folders", folderRouter);
rootRouter.use("/voca-notes", vocaNoteRouter);
rootRouter.use("/word-data", wordDataRouter);
