import axios from "axios";

export default async function() {
    try {
        const res = await axios(`${process.env.baseURL}/posts/get-all-blog-posts`);
        return res.data
    } catch(err) {
        return {
            getDataError: err
        }
    }
}