Object.defineProperty(exports, "__esModule", { value: true });

const axios = require("axios");
const router = require("express").Router();

const Config = require("../Config");
const API = Config.API;

router.get("/:id", async (req, res) => {
    try {
        const response = await axios.get(
            `${API}/categories/${req.params.id}`
        );
        const {path_from_root} = response.data;
        const categories = path_from_root.map(category => category.name);
        res.json(categories);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;