export const fetchSearchImages = (query) => {
    return $.ajax({
        method: "GET",
        url: `https://api.unsplash.com/search/photos`,
        data: {
            query,
            orientation: 'landscape',
            per_page: 26
        },
        headers: {
            Authorization: `Client-ID ${window.unsplashAccessKey}`,
        }
    })
}

export const fetchRandomImages = () => {
    return $.ajax({
        method: "GET",
        url: `https://api.unsplash.com/photos/random`,
        data: {
            orientation: 'landscape',
            count: 26
        },
        headers: {
            Authorization: `Client-ID ${window.unsplashAccessKey}`,
        }
    })
}
