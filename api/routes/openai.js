const express = require("express");
const router = express.Router();
import { GoogleGenAI, Type } from "@google/genai";

const prompt =
  'You are an expert data extraction specialist. Your task is to find and compare prices for a Plyneer Bullet 8 ft. x 4 ft. 18 mm MR Plywood as product from various online vendors and return the information ONLY as a JSON object.\\n\\nThe product name is: "{{product_name}}".\\n\\nStructure the JSON response as follows:\\n\\n```json\\n{\\n  "product": "{{product_name}}",\\n  "comparison": [\\n    {\\n      "vendor": "Vendor Name 1",\\n      "price": "Price details for Vendor 1",\\n      "availability": "Availability status for Vendor 1",\\n      "purchase_link": "URL to purchase from Vendor 1",\\n      "notes": "Any additional notes for Vendor 1"\n    },\\n    {\\n      "vendor": "Vendor Name 2",\\n      "price": "Price details for Vendor 2",\\n      "availability": "Availability status for Vendor 2",\\n      "purchase_link": "URL to purchase from Vendor 2",\\n      "notes": "Any additional notes for Vendor 2"\n    }\\n    // ... more vendors as found\\n  ]\\n}\\n```\\n\\nYou MUST adhere to the JSON structure above. Do not include any introductory or concluding sentences, explanations, or any text outside of the valid JSON object.\\n\\nFor the product "{{product}}", find price comparison details from at least two different online vendors in India, if possible. Focus on extracting the vendor name, price, availability, purchase link, and any relevant notes about the pricing or product specifics from that vendor.\\n\\nReturn ONLY the JSON object.';

const openaiKey = process.env.OPENAI_KEY;

// Initialize Gemini AI with API key from environment variable
import OpenAI from "openai";
const client = new OpenAI({
  apiKey: openaiKey,
});

// Get all orders
router.get("/", (req, res) => {
  res.json({ message: `Get user with ID: ` });
});

router.get("/openai", async (req, res) => {
  try {
    const response = await client.responses.create({
      model: "gpt-4.1",
      input: prompt,
    });

    res.json({
      message: "Success",
      response: response,
    });
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({
      message: "Error calling Gemini API",
      error: error.message,
    });
  }
});

module.exports = router;
