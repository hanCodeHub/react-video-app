const KEY = 'AIzaSyAw0K2aJMwUwrdrgDPC2P_BWiuivgG0_ek';

const youtube = async (searchTerm) => {
    let url = 'https://www.googleapis.com/youtube/v3/search?';

    let params = {
        part: 'snippet',
        maxResults: 5,
        q: searchTerm,
        key: KEY
    };
    
    for (let para in params) {
        url += `&${para}=${params[para]}`
    };

    const response = await fetch(url, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return data
    })
    .catch(err => console.log(err))

    return response
}

export default youtube;