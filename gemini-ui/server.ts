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
Vehicle: ${year || "2024"} ${vehicleMake || "Porsche"} ${vehicleModel || "911 GT3 RS"}
Paint Finish: ${finish || "Gloss Carbon"}
Paint Condition: ${condition || "Micro-swirls & light oxidation"}
Services Requested: ${(servicesRequested || ["PPF", "Ceramic Coating"]).join(", ")}
Client Notes: ${notes || "Wants maximum depth and hydrophobic gloss."}

Provide a JSON output ONLY with the following exact keys:
{
  "paintHealthScore": number (0 to 100),
  "surfaceDefectAnalysis": "string detailed description of surface micro-swirls, clearcoat thickness, or swirl depth",
  "recommendedSteps": ["step 1", "step 2", "step 3", "step 4"],
  "estimatedTimeHours": number,
  "recommendedPackageName": "string package name like Matrix Graphene Shield Pro",
  "estimatedPriceUSD": number,
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
    const isSupercar = ["Porsche", "Ferrari", "Lamborghini", "McLaren", "Aston Martin", "Bugatti", "Pagani"].some(
      m => vehicleMake?.toLowerCase().includes(m.toLowerCase())
    );
    const basePrice = isSupercar ? 1850 : 1250;
    const conditionMultiplier = condition?.includes("Heavy") ? 1.4 : condition?.includes("Swirls") ? 1.2 : 1.0;
    const serviceCount = (servicesRequested?.length || 2);
    const calculatedPrice = Math.round((basePrice + (serviceCount * 450)) * conditionMultiplier);
    const healthScore = condition?.includes("Showroom") ? 96 : condition?.includes("Heavy") ? 64 : 78;

    return res.json({
      success: true,
      quote: {
        paintHealthScore: healthScore,
        surfaceDefectAnalysis: `Spectrogram optical analysis indicates sub-micron clear coat swirls on horizontal panels. Surface tension requires multi-stage prep for dual-layer ${finish || 'Gloss'} protection.`,
        recommendedSteps: [
          "Decontamination Wash & Iron Fallout Removal",
          "Dual-Action Stage 2 Optical Paint Correction",
          "9H Graphene Matrix Ceramic Infusion",
          "Self-Healing TPU Film Application (Front Clip)"
        ],
        estimatedTimeHours: 18,
        recommendedPackageName: "AUTOTRICS APEX MATRIX SHIELD 10Y",
        estimatedPriceUSD: calculatedPrice,
        warrantyCoverageYears: 10,
        hydrophobicRating: "118° Hydrophobic Water Contact Angle",
        aiTechnicianNote: "Recommended for high-velocity paint preservation. Restores optical depth beyond OEM showroom clarity."
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
