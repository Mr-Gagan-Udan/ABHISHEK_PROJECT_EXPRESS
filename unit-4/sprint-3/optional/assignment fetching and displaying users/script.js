document.getElementById('fetchButton').addEventListener('click', fetchUsers);

function fetchUsers() {
    fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(data => {
            displayUsers(data.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayUsers(users) {
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = ''; // Clear previous content

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');

        const avatar = document.createElement('img');
        avatar.src = user.avatar;
        avatar.alt = `${user.first_name} ${user.last_name}`;

        const name = document.createElement('h2');
        name.textContent = `${user.first_name} ${user.last_name}`;

        const email = document.createElement('p');
        email.textContent = `Email: ${user.email}`;

        userDiv.appendChild(avatar);
        userDiv.appendChild(name);
        userDiv.appendChild(email);

        userContainer.appendChild(userDiv);
    });
}
