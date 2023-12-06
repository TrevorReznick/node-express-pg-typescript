"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./app/routes/index"));
const index_2 = require("./app/controllers/index");
dotenv_1.default.config();
/* @@ init express @@ */
const app = (0, express_1.default)();
/* @@ init cors */
const corsOptions = {
    origin: ''
};
if (process.env.NODE_ENV == 'production') {
    corsOptions.origin = process.env.API_URL_PROD;
}
else {
    corsOptions.origin = process.env.API_URL_DEV;
}
app.use(cors(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
const port = process.env.PORT;
/* @@ init router @@ */
app.use('/api', index_1.default);
/* welcome message */
app.get("/", index_2.MainController.home);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//do_mail(__email)
