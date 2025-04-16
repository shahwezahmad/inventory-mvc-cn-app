function deteteProduct(id,name) {
    if(confirm(`Are you want to delete this Product (${name})`)) {
        fetch(`/deleteProduct/${id}`, {method: 'POST'}).then (res => {
            if(res.ok) {
                window.location.reload()
            }
        })
    }
}