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
exports.doChatCopia = exports.doChat = void 0;
const axios_1 = __importDefault(require("axios"));
function doChat(msgObj) {
    return __awaiter(this, void 0, void 0, function* () {
        const previousMessages = msgObj;
        let messages = previousMessages;
        const prompt = messages.map((message) => `${message.role}: ${message.message}`).join('\n') + `\nAI:`;
        const API_URL = 'https://api.openai.com/v1/completions';
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        };
        try {
            const req = yield fetch('https://api.openai.com/v1/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'text-davinci-003',
                    prompt: prompt,
                    temperature: 0.9,
                    max_tokens: 512,
                    top_p: 1.0,
                    frequency_penalty: 0,
                    presence_penalty: 0.6,
                    stop: [' User:', ' AI:']
                })
            });
            let res = yield req.json();
            res = res.choices[0];
            return {
                message: res.text
            };
        }
        catch (error) {
            throw error;
        }
    });
}
exports.doChat = doChat;
function doChatCopia(msgObj) {
    return __awaiter(this, void 0, void 0, function* () {
        // Assicurati che msgObj contenga un array di oggetti con le proprietà 'role' e 'message'
        const previousMessages = msgObj;
        // Non è necessario utilizzare concat se previousMessages è già un array
        let messages = previousMessages;
        const prompt = messages.map((message) => `${message.role}: ${message.message}`).join('\n') + `\nAI:`;
        const API_URL = 'https://api.openai.com/v1/completions';
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        };
        //console.log('api key', process.env.OPENAI_API_KEY)
        const data = JSON.stringify({
            model: 'text-davinci-003',
            prompt: prompt,
            temperature: 0.9,
            max_tokens: 512,
            top_p: 1.0,
            frequency_penalty: 0,
            presence_penalty: 0.6,
            stop: [' User:', ' AI:'],
        });
        try {
            const req = yield axios_1.default.post(API_URL, data, {
                headers,
                responseType: "json",
            });
            const res = yield req.json();
            const result = res.choices[0];
            return result; /*message: result.text*/
        }
        catch (error) {
            throw error;
        }
    });
}
exports.doChatCopia = doChatCopia;
