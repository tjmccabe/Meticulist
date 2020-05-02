export const fetchImages = (query) => {
    return $.ajax({
        method: "GET",
        url: `https://api.unsplash.com/search/photos?query=${query}`,
        headers: {
            Authorization: `Client-ID ${window.unsplashAccessKey}`
        }
    })
}