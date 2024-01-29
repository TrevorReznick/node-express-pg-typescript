"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateImage = void 0;
//import * as fs from "fs"
//import { promisify } from "util"
//import {RequestPrompt} from '../controllers/index'
const fs_1 = require("fs");
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";
const headers = {
    //Authorization: "Bearer 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",
    Authorization: 'Bearer ' + process.env.HF_ACCESS_TOKEN
};
function query(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post(API_URL, data, {
                headers,
                responseType: "arraybuffer",
            });
            return response.data;
        }
        catch (error) {
            throw error;
        }
    });
}
function generateImage(caption) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const imageBytes = yield query({
                inputs: caption,
            });
            // Generate a file name with the caption and save the image
            const fileName = `${caption.replace(/\s+/g, "-")}.png`;
            const filePath = "./test/" + fileName;
            yield fs_1.promises.writeFile(filePath, Buffer.from(imageBytes));
            console.log(`Image saved to: ${filePath}`);
        }
        catch (error) {
            console.log('function pass from here, is error');
            console.log(error);
        }
    });
}
exports.generateImage = generateImage;
