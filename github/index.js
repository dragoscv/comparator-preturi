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


    categories.forEach(async (category) => {
        const qData = {
            source_id: '7',
            templates: 'full',
            listing_display_id: '2',
            page_limit: '100',
            url: `/${category.name}`,
        }
        const initialUrl = `https://www.emag.ro/search-by-url?source_id=${qData.source_id}&templates%5B%5D=${qData.templates}&listing_display_id=${qData.listing_display_id}&page%5Blimit%5D=${qData.page_limit}&url=${qData.url}/c`
        // console.log(initialUrl)
        const initial = await fetch(initialUrl).then(res => res.json()).then(res => res)
        const itemsCount = initial.data.pagination.items_count
        const pages = Math.ceil(itemsCount / qData.page_limit)
        for (let i = 1; i < pages; i++) {
            const page = i == 1 ? '' : `/p${i}`
            console.log(page)
            const pageUrl = `https://www.emag.ro/search-by-url?source_id=${qData.source_id}&templates%5B%5D=${qData.templates}&listing_display_id=${qData.listing_display_id}&page%5Blimit%5D=${qData.page_limit}&url=${qData.url}${page}/c`
            // console.log(pageUrl)
            async function getData() {
                try {
                    const pageData = await fetch(pageUrl)
                    .then(res => res.json())
                    .then(res => res)
                    // .catch(err => {console.log(err); getData(); return})
                    if (pageData.metadata.category_id) {
                        // console.log(pageData.metadata)
                    }else {
                        getData()
                    }
                } catch (e) {
                    console.log(e)
                    getData()
                }
            }
            getData()
        }
        // console.log(pages)
        // console.log(itemsCount)
    })
// console.log(scanedPages)
}
addToDb()