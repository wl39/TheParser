import express from "express";
import { generateJSONFromGPT } from "../services/openAIService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { samples } = req.body;

  if (!samples) {
    return res.status(400).json({ error: "Invalid samples" });
  }

  try {
    const jsCode = await generateJSONFromGPT(samples);
    res.json({ jsCode });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "GPT CALL FAILED" });
  }
});

export default router;
