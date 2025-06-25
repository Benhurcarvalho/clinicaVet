const express = require("express");
const cors = require("cors");
const animaisRoutes = require("./routes/animais");
const servicosRoutes = require("./routes/servicos");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/animais", animaisRoutes);
app.use("/servicos", servicosRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});
