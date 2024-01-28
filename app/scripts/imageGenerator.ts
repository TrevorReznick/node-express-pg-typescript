//import * as fs from "fs"
//import { promisify } from "util"
//import {RequestPrompt} from '../controllers/index'
import { promises as fs } from "fs"
import axios from "axios"
import dotenv from 'dotenv'

dotenv.config()

const API_URL =
  "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0"

const headers = {
  Authorization: "Bearer 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",
}

async function query(data: any): Promise<ArrayBuffer> {
    try {
      const response = await axios.post(API_URL, data, {
        headers,
        responseType: "arraybuffer",
      })
  
      return response.data
    } catch (error) {
      throw error
    }
  }
  
export async function generateImage(caption: string) {
    try {
      const imageBytes = await query({
        inputs: caption,
    })  
    // Generate a file name with the caption and save the image
    const fileName = `${caption.replace(/\s+/g, "-")}.png`;
    const filePath = "./test/" + fileName  
    await fs.writeFile(filePath, Buffer.from(imageBytes));
    console.log(`Image saved to: ${filePath}`);
    } catch (error) {
      console.error(error)
    }
}
