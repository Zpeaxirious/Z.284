// Function to handle exchanging authorization code for access token
async function exchangeCodeForToken(code) {
    const response = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            client_id: 'YOUR_CLIENT_ID',
            client_secret: 'YOUR_CLIENT_SECRET',
            code: code,
            redirect_uri: 'YOUR_CALLBACK_URL'
        })
    });

    const data = await response.json();
    const accessToken = data.access_token;

    // Use the access token to authenticate API requests or store it securely for further use
    return accessToken;
}

// Call the function with the authorization code received from the callback URL
const authorizationCode = 'CODE_RECEIVED_FROM_CALLBACK';
exchangeCodeForToken(authorizationCode)
    .then((accessToken) => {
        // Use the access token to make API calls on behalf of the user
        console.log('Access Token:', accessToken);
    })
    .catch((error) => {
        console.error('Error exchanging code for token:', error);
    });

// Function to fetch user information from GitHub API using the access token
async function fetchGitHubUserInfo(accessToken) {
    const response = await fetch('https://api.github.com/user', {
        headers: {
            Authorization: `token ${accessToken}`,
        },
    });

    if (response.ok) {
        const userData = await response.json();
        return userData;
    } else {
        throw new Error('Failed to fetch user information from GitHub API');
    }
}

// Call the function with the access token obtained after exchanging the authorization code
const accessToken = 'ACCESS_TOKEN';
fetchGitHubUserInfo(accessToken)
    .then((userData) => {
        // Handle the user data returned from GitHub API
        console.log('User Data:', userData);
        // You can now access and utilize the user information as needed
    })
    .catch((error) => {
        console.error('Error fetching user information:', error);
    });

// Assume you have fetched the user data from GitHub as shown in step 6
const userData = {
    login: 'githubUsername',
    name: 'User Name',
    email: 'user@example.com',
    avatar_url: 'https://avatars.githubusercontent.com/user',
    // Add more relevant user data as needed
};

// Function to display personalized content or features for the logged-in user
function showPersonalizedContent(userData) {
    // Access user data and customize features accordingly
    console.log(`Welcome, ${userData.name} (${userData.login})`);
    console.log(`Email: ${userData.email}`);
    console.log(`Avatar URL: ${userData.avatar_url}`);
    // Implement specific actions or display content based on user data
}

// Call the function with the user data fetched from GitHub
showPersonalizedContent(userData);