module.exports = {
    env: {
      "baseURL": process.env.NODE_ENV === "development" ? "http://localhost:5000": "https://www.api.example.com"
    }
}