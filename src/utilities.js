export function commonPost(url, data) {
    return fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Token': localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        }
    )
        .then(a => a.json())
}


export function commonPut(url, data) {
    return fetch(url,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Token': localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        }
    )
        .then(a => a.json())
}




export function commonDelete(url) {
    return fetch(url,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Token': localStorage.getItem('token')
            }
        }
    )
        .then(a => a.json())
}



export function commonGet(url) {
    return fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Token': localStorage.getItem('token')
        },
    }).then(a => a.json())
}