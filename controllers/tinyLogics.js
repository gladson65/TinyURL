import tinyModel from "../models/tinyModels.js";

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
        const shortCode = shortid.generate();
        url = new tinyModel({ longUrl, shortCode });
        await url.save();

        return res.status(200).json({ shortUrl: `http://localhost:7000/${shortCode}` })

    }
    catch(error) {
        return res.status(500).json({ error: error.message });
    }
}