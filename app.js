import express from "express";
import axios from "axios";
import cors from "cors";
const app = express();
app.use(cors());
app.get("/api/maps/api/distancematrix/json", async (req, res) => {
  const { origins, destinations } = req.query;
  const apiKey = "AIzaSyAkKlLCRRCfBiGWl0cct-xfZcCBFbEpZT0";
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}&destinations=${destinations}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data from Google Maps API" });
  }
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
