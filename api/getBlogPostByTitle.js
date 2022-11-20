import axios from "axios";

export default async function(urlTitle) {
    try {
        const res = await axios(`${process.env.baseURL}/posts/get-blog-post-by-url-title?urlTitle=${urlTitle}`);
        return res.data
    } catch(err) {
        return {
            getDataError: true
        }
    }
}