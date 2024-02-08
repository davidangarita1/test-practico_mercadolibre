const router = require("express").Router();

const categories = require("./categories");
const items = require("./items");

router.use("/categories", categories);
router.use("/items", items);

router.get("/", (req, res) => {
    res.status(200).json({ message: "Te conectaste a mi API 😀" });
});

module.exports = router;