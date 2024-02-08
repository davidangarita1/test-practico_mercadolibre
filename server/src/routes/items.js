Object.defineProperty(exports, "__esModule", {value: true});

const axios = require("axios");
const router = require("express").Router();

const {itemMapper, itemListMapper, itemDetailMapper} = require("../mapper");
const Config = require("../Config");
const API = Config.API;

router.get("/", async (req, res) => {
    try {
        const response = await axios.get(
            `${API}/sites/MLA/search?q=${req.query.q}`
        );
        if (response) {
            const responseData = response.data;
            const categories = responseData.filters.find(
                filter => filter.id === "category"
            );
            res.json(itemListMapper(responseData.results, categories));
        }
    } catch (error) {
        const errorResponse = error?.response;
        res.status(errorResponse?.status).json({error: errorResponse?.data.message});
    }
});

router.get("/:id", async (req, res) => {
    try {
        const item = await axios.get(
            `${API}/items/${req.params.id}`
        );
        const description = await axios.get(
            `${API}/items/${req.params.id}/description`
        );
        const response = itemDetailMapper(item.data);
        response.item.description = description.data.plain_text;
        res.json(response);
    } catch (error) {
        console.log(error);
        if (error.response) {
            res
                .status(error.response.status)
                .json({error: error.response.data.message});
        }
    }
});

module.exports = router;