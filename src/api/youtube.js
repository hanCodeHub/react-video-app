// gmail
const KEY = 'AIzaSyBuwH4cCCCNTeDveG-sI3U3OGnSQbMcPg8';
// hotmail
// const KEY = 'AIzaSyAw0K2aJMwUwrdrgDPC2P_BWiuivgG0_ek';

const youtube = async (searchTerm) => {
    let url = 'https://www.googleapis.com/youtube/v3/search?';

    let params = {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        q: searchTerm,
        key: KEY
    };
    
    for (let para in params) {
        url += `&${para}=${params[para]}`
    };

    console.log(url);

    const response = await fetch(url, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
    
    return response
}

export default youtube;