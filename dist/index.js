"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./app/routes/index"));
const index_2 = require("./app/controllers/index");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use('/api', index_1.default);
/* @@ test message @@ */
app.get("/", index_2.MainController.home);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
