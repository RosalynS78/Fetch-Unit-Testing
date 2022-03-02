// https://punkapi.com/documentation/v2



// funFunFunction guy video example tutorial

function getAnimals(fetch, id) {
    return fetch('http://api.anilfarmgame.com/animals/' + id)
        .then(response => response.json())
        .then(data => data.results[0])
}

// getAnimals(window.fetch, 123)
// .then(animal =>
//     document.querySelector('.animal').innerHTML = animal.name)

describe('getAnimals', () => {
    it('calls fetch with the correct url', () => {
        const fakeFetch = url => {
            asssert(
                url ===
                'http://api.animalfarmgame.com/animals/123'
            )
            return new Promise(function (resolve) {

            })
        }
        getAnimals(fakeFetch, 123)
    })
})

describe('getAnimals', () => {
    it('parses the response of fetch correctly', (done) => { 
        const fakeFetch = () => {
            return Promise.resolve({
                json: () => Promise.resolve({
                    results: [

                        {
                            name: 'fluffykins',
                           
                        }
                    ]
                })
            })
        }
        getAnimals(fakeFetch, 12345)
        .then(result => assert(result.name === 'fluffykins'))
        done()
    })
})