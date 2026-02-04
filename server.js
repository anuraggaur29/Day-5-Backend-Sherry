// Server ko start krna server.js file krti hai

const app = require("./src/app")

app.listen("3000", (req,res) => {
    console.log("Server is running on port no. 3000");
})

app.get("/", (req,res) => {
    res.send("Anurag Sharma chl rha hai bhaiiiiii dar mt ")
})