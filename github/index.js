import fetch from "node-fetch";
async function addToDb() {
    const data = {
        name: "Tokyo",
        country: "Japan"
    }
    await fetch("https://savetiktok.vercel.app/api/categories").then(res => res.json()).then(res => console.log(res))
}
addToDb()