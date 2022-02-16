class News {
    constructor(){
        this.APIkey = 'ff1ace2bfb2542e4a4a59d84831c19e3'
    }

    // send url to the API
    async queryAPI(newsName, country, category){
        // Build URL
        let url = 'https://newsapi.org/v2/'

        // check the country and category value
        if (country === '' && category === '') {
            url += 'everything?'
        } else {
            url += 'top-headlines?'
        }

        // if newsName exist
        if (newsName !=='') {
            url += `q=${newsName}&`
        }

        // if country exist
        if (country !=='') {
            url += `country=${country}&`
        }

        // if category exist 
        if (category !== '') {
            url += `category=${category}&`
        }

        // complete url with key
        url += `apiKey=${this.APIkey}`

        
        const newsResponse = await fetch(url)
        const news = await newsResponse.json()
        return {
            news
        }
    }
}