const apiConfig = {
    baseUrl:'https://api.themoviedb.org/3',
    apiKey:'f3cd3cce295831fc3405b0bb6dac3831',
    originalImage:(imagePath) => `https://image.tmdb.org/t/p/original/${imagePath}`,
    w500Image:(imagePath) => `https://image.tmdb.org/t/p/w500/${imagePath}`,
}

export default apiConfig;