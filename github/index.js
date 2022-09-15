import fetch from "node-fetch";
async function addToDb() {
    const data = {
        name: "Tokyo",
        country: "Japan"
    }
    const qData = {
        source_id: '7',
        templates: 'full',
        listing_display_id: '2',
        page_limit: '100',
        url: '/laptopuri/c'
    }
    await fetch(`https://www.emag.ro/search-by-url?source_id=${qData.source_id}&templates%5B%5D=${qData.templates}&listing_display_id=${qData.listing_display_id}&page%5Blimit%5D=${qData.page_limit}&url=${qData.url}`).then(res => res.json()).then(res => console.log(res.metadata))
}
addToDb()