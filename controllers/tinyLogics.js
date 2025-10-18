import tinyModel from "../models/tinyModels.js";
import { nanoid } from "nanoid";

// Create Short URL function
export async function shortUrl(req, res) {
    // destructuring url from the req body
    const { longUrl } = req.body;
    // key validation
    if (!longUrl) return res.status(400).json({message: 'Kindly fill the url'});

    try {
        // check if urls already exists
        let url = await tinyModel.findOne({ longUrl });
        if (url) return res.status(200).json({ shortUrl: `http://localhost:7000/${url.shortcode}` });

        // generate short code
        const shortcode = nanoid(7);
        url = new tinyModel({ longUrl, shortcode });
        await url.save();

        return res.status(200).json({ shortUrl: `http://localhost:7000/${shortcode}` })

    }
    catch(error) {
        return res.status(500).json({ error: error.message });
    }
}

// Redirect short url. Basically get request
export async function getShortUrl(req, res) {

    // destructuring code from req param
    const code = req.params.code;
    console.log(code)

    try {
        const url = await tinyModel.findOne({ shortcode: code });

        if (!url) return res.status(404).json({message: "url not found"});

        // update the clicks
        url.clicks++;
        await url.save();

        res.redirect(url.longUrl);
    }
    catch(error) {
        return res.status(500).json({ error: error.message });
    }
}