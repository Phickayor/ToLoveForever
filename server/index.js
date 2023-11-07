const express = require("express");
const app = express();
const qr = require("qr-image");
const fs = require("fs");

const urlToLink = "https://toloveforever.netlify.app"; // Replace this with your desired URL

// Function to generate and save the QR code image
const generateQRCode = () => {
  const qrCode = qr.image(urlToLink, { type: "png" });
  qrCode.pipe(fs.createWriteStream("qr_code.png"));
};

// Generate the QR code on server startup
generateQRCode();

// Route to serve the QR code image
app.get("/qr", (req, res) => {
  res.sendFile(`${__dirname}/qr_code.png`);
});

app.listen(8080, () => {
  console.log("Server is listening");
});
 