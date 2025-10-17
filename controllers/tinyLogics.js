

// Create Short URL function
export async function shortUrl(req, res) {
    // destructuring url from the req body
    const { longUrl } = req.body;
    // key validation
    if (!longUrl) return res.status(400).json({message: 'Kindly fill the url'});

    
}