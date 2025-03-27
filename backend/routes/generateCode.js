import express from "express";
import { generateCodeFromGPT } from "../services/openAIService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { source, target, delimiter } = req.body;

  if (!source && !target) {
    return res.status(400).json({ error: "Invalid samples" });
  }

  try {
    const jsCode = await generateCodeFromGPT(source, target, delimiter);
    res.json({ jsCode });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "GPT CALL FAILED" });
  }
});

export default router;
