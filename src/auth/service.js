const users = {
    admin: {
        username: 'admin',
        dbPassword: '$2b$10$uEZgDxr/yGpaV0ppV2ebRe5ZaFhifO21VnL6AkNQ2hceW8kP4hPSC', // 'secret'
        password: "admin",
        name: 'Administrator',
        id: '1'
    }
};

module.exports.validate = async (request, username, password) => {

    const user = users[username];
    //console.log(user);
    if (!user) {
        return {
            credentials: null,
            isValid: false
        };
    }

    //const isValid = await Bcrypt.compare(password, user.password);
    const isValid = password == user.password;
    const credentials = {
        id: user.id,
        userName: user.username,
        name: user.name
    };

    console.log(credentials);

    return {
        isValid,
        credentials
    };
};