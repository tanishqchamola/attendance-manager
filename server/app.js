const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const db = require("./config/key").MongoURI;

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(express.json());

app.use(cors());

app.use("/", require("./routes/index"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}...`));
