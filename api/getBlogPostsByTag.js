import axios from "axios";
export default async function(tag) {
    try {
        const res = await axios(`${process.env.baseURL}/posts/get-blog-posts-by-tag?tag=${tag}`);
        return res.data
    } catch(err) {
        return {
            getDataError: true
        }
    }
}