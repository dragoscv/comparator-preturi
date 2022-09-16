import fetch from "node-fetch";
async function addToDb() {
    const data = {
        name: "Tokyo",
        country: "Japan"
    }

    const categories = [
        { name: "laptopuri" },
        { name: "desktop-pc" },
    ]

    new Promise(async (resolve, reject) => {
        categories.forEach(async (category) => {
            const qData = {
                source_id: '7',
                templates: 'full',
                listing_display_id: '2',
                page_limit: '100',
                url: `/${category.name}`,
            }
            const initial = await fetch(`https://www.emag.ro/search-by-url?source_id=${qData.source_id}&templates%5B%5D=${qData.templates}&listing_display_id=${qData.listing_display_id}&page%5Blimit%5D=${qData.page_limit}&url=${qData.url}/c`).then(res => res.json()).then(res => res)
            const itemsCount = initial.data.pagination.items_count
            const pages = Math.ceil(itemsCount / qData.page_limit)
            new Promise(async (resolve, reject) => {
                for (let i = 0; i < pages; i++) {
                    const page = i == 0 ? '' : `/p${i + 1}`
                    console.log(page)
                    const pageData = await fetch(`https://www.emag.ro/search-by-url?source_id=${qData.source_id}&templates%5B%5D=${qData.templates}&listing_display_id=${qData.listing_display_id}&page%5Blimit%5D=${qData.page_limit}&url=${qData.url}${page}/c`).then(res => res.json()).then(res => console.log(res.metadata))
                    resolve(pageData)
                }
            })
            console.log(pages)
            console.log(itemsCount)
        })
        resolve();
    })
}
addToDb()