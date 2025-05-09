const app = require("./app");


const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  console.log("✅ Successs");  
  res.send(`
    <h2 style="color: blue;">Hello, Astra Team! 🚀</h2>
    <p style="color: green;">Backend APIs are working perfectly!</p>
    <p style="color: purple; font-weight: bold;">My name is <strong>Touseef Iqbal</strong>! 👋</p>
  `);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
