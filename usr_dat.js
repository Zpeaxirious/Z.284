fetch('https://api.github.com/user', {
        headers: {
            Authorization: `token ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const username = data.login;
        console.log('Username:', username);
    });

const userData = {
    login: 'githubUsername'
};
const usernameElement = document.getElementById('username');
usernameElement.textContent = userData.login;