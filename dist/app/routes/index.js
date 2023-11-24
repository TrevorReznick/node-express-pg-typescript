"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
router.get('/', controllers_1.MainController.home);
router.get('/test-db', controllers_1.MainController.getAll);
router.get('/test-api', controllers_1.MainController.testApi);
exports.default = router;
/*
export function test(req: Request, res: Response) {
  res.send('Testing Routes')
}
*/
