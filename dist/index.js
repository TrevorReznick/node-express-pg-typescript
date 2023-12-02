"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./app/routes/index"));
const index_2 = require("./app/controllers/index");
const mailer_1 = require("./app/scripts/mailer");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use('/api', index_1.default);
/* @@ test message @@ */
app.get("/", index_2.MainController.home);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//const mail = require('./app/scripts/mailer.js')
//mail.mailer()
const _email = (0, mailer_1.mail_message)();
// Now you can use the 'email' object here
console.log(_email);
console.log(mailer_1.email);
