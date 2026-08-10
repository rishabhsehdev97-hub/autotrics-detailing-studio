import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client lazily or safely
function getGeminiAi() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  return new GoogleGenAI({ apiKey });
}

// Health endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", studio: "AUTOTRICS DETAILING STUDIO" });
});

// AI Detailing Quote & Inspection Generator Endpoint
app.post("/api/ai-quote", async (req, res) => {
  try {
    const { vehicleMake, vehicleModel, year, finish, condition, servicesRequested, notes } = req.body;

    const ai = getGeminiAi();
    if (ai) {
      try {
        const prompt = `You are AUTOTRICS Master Automotive Diagnostic AI.
Analyze the following luxury vehicle for detailing & paint protection:
Vehicle: ${year || "Not provided"} ${vehicleMake || "Not provided"} ${vehicleModel || "Not provided"}
Paint Finish: ${finish || "Not provided"}
Paint Condition: ${condition || "Not provided"}
Services Requested: ${(servicesRequested || []).length > 0 ? servicesRequested.join(", ") : "Not specified"}
Client Notes: ${notes || "No additional notes provided."}

Provide a JSON output ONLY with the following exact keys:
{
  "paintHealthScore": number (0 to 100),
  "surfaceDefectAnalysis": "string detailed description of surface micro-swirls, clearcoat thickness, or swirl depth",
  "recommendedSteps": ["step 1", "step 2", "step 3", "step 4"],
  "estimatedTimeHours": number,
  "recommendedPackageName": "string package name like Matrix Graphene Shield Pro",
  "estimatedPriceINR": number,
  "warrantyCoverageYears": number,
  "hydrophobicRating": "string e.g. 115° Contact Angle",
  "aiTechnicianNote": "string professional summary from chief detailing engineer"
}`;

        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: prompt,
          config: {
            responseMimeType: "application/json",
          },
        });

        if (response.text) {
          const parsed = JSON.parse(response.text);
          return res.json({ success: true, quote: parsed, isAiGenerated: true });
        }
      } catch (geminiError) {
        console.warn("Gemini API call failed, using high-tech fallback:", geminiError);
      }
    }

    // High-tech luxury fallback quote calculation engine
    const serviceCount = servicesRequested?.length || 0;

const calculatedPrice = serviceCount > 0 ? 0 : 0;

    return res.json({
      success: true,
      quote: {
  paintHealthScore: 0,

  surfaceDefectAnalysis:
    "A physical inspection or supported vehicle scan is required before Autotrics can provide a verified paint-health assessment.",

  recommendedSteps: [
    "Vehicle inspection",
    "Surface decontamination assessment",
    "Paint condition assessment",
    "Service recommendation"
  ],

  estimatedTimeHours: 0,

  recommendedPackageName:
    servicesRequested?.length
      ? servicesRequested[0]
      : "Inspection Required",

  estimatedPriceINR: calculatedPrice,

  warrantyCoverageYears: 0,

  hydrophobicRating:
    "To be determined based on selected protection package",

  aiTechnicianNote:
    "This is a preliminary AI-assisted estimate. Final service recommendation, pricing, warranty and paint assessment should be confirmed by an Autotrics detailing professional."
},
      isAiGenerated: false
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[AUTOTRICS] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
