import { shortUrl } from "../controllers/tinyLogics.js";

export function tinyRoute(tinyApp) {
    tinyApp.post('/api/shorten', shortUrl)
}

