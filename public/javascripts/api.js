async function apiReadPage (page,size) {
    let response = await fetch(`${baseUrl}/api/readPage?page=${page}&size=${size}`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return response.json();
}

async function apiTotalNum () {
    let response = await fetch(`${baseUrl}/api/totalNum`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return response.json();
}

async function apiDeleteWord (english) {
    let response = await fetch(`${baseUrl}/api/delete`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            english,
        })
    });
}
