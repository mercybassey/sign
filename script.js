const loginBtn = document.getElementById('login-btn');

const sendData = () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com';
    const apiUrl = 'https://maniera-dev.herokuapp.com/api/auth/signin';
    axios.post(proxyUrl + apiUrl, {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        }
    })
    .then(response => {
        console.log(response);
    });
}


loginBtn.addEventListener('click', sendData);