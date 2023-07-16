const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

const updatedPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-update-post')
    const content = document.querySelector('#content-update-post').ariaValueMax.trim();

    if(title && content) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json'},
        })

        if(response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('Post failed to update...');
        }
    }
}

const deletePostFormHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
    })

    if(response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('Deletiion failed...')
    }
}

const updatePostButton = document.querySelector('#update-post')
const deletePostButton = document.querySelector('#delete-post')

if(updatePostButton) {
    updatePostButton.addEventListener('click', updatedPostFormHandler)
}

if(deletePostButton) {
    deletePostButton.addEventListener('click', deletePostFormHandler)
}
