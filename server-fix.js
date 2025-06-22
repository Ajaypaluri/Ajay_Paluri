import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the dist/public directory
const distPath = path.resolve(__dirname, "dist", "public");

if (!fs.existsSync(distPath)) {
  console.error(`Could not find the build directory: ${distPath}`);
  console.error("Make sure you've run 'npm run build' first");
  process.exit(1);
}

app.use(express.static(distPath));

// API routes for contact form
app.post('/api/contacts', (req, res) => {
  console.log('Contact form submission:', req.body);
  res.json({ success: true, message: 'Contact form submitted successfully' });
});

// Catch-all handler for client-side routing
app.use("*", (req, res) => {
  res.sendFile(path.resolve(distPath, "index.html"));
});

const port = 5000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Portfolio server running on http://localhost:${port}`);
});