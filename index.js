const express = require("express");
const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({ message: "ini adalah data" });
// });

require("./src/routers/produk.routers")(app);

const PORT = 8100;
app.listen(PORT, () => console.log(`server ${PORT}`));
