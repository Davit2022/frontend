const RestClient = () => { 
    const get = (url) => 
        fetch(url) 
        .then(response => response.json()) 
 
    const post = (url,body) => 
        fetch(url, { 
            method: 'POST', 
            headers: { 
                'Content-Type':'application/json', 
            }, body: JSON.stringify(body), }) 
                .then(response => { 
                    response.json() 
                    console.log(data) 
                }) .catch(err => err) 
 
    const put = (url, body) => 
    fetch(url, { 
        method: 'PUT', 
        headers: { 
            'Content-Type':'application/json', 
        },  
        body: JSON.stringify(body), }) 
        .then(response => { 
            response.json() 
            console.log(data) 
        }) .catch(err => err) 
     
    const remove = (url) => 
        fetch(url,{ 
            method: 'DELETE' 
        }) 
        .then(response => { 
            response.json() 
            console.log(data) 
        }) .catch(err => err) 
    return { get, post, put, remove } 
} 
console.log(RestClient())
export default RestClient
