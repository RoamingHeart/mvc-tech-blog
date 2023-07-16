const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'COntent-Type': 'application/json'},
    })

    if(response.ok) {
        document.location.replace('/')
    } else {
        alert('Logout failed...')
    }
}

const logoutButton = document.querySelector('#logout')
if(logoutButton) {
    logoutButton.addEventListener('click', logout);
}
