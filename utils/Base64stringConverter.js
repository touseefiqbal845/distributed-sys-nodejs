const axios = require("axios");

async function convertImageToBase64() {
  const imgUrl = "https://headandfaces.com/assets/images/b20.jpg";

  try {
    const response = await axios.get(imgUrl, { responseType: "arraybuffer" });
    const base64Image = Buffer.from(response.data, "binary").toString("base64");

    const imgBase64 = `data:image/jpeg;base64,${base64Image}`;

    console.log(imgBase64);
  } catch (error) {
    console.error("Error fetching or converting the image:", error);
  }
}

convertImageToBase64();
