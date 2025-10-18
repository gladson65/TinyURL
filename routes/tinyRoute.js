import { shortUrl, getShortUrl } from "../controllers/tinyLogics.js";

export function tinyRoute(tinyApp) {
    tinyApp.post('/api/shorten', shortUrl),
    tinyApp.get('/api/:code', getShortUrl)
}

