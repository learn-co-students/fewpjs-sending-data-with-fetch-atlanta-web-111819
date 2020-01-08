function submitData(name, email) {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }
    return fetch("http://localhost:3000/users", config)
        .then(resp => resp.json())
        .then(function(object) {
            const p = document.createElement('p')
            p.textContent = object.id
            document.body.appendChild(p)
        }).catch(function(error) {
            const p = document.createElement('p')
            p.textContent = error.message
            document.body.appendChild(p)
        })
}

document.addEventListener('DOMContentLoaded', function(e) {
    submitData('hello', 'there')
})