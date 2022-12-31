function User(){
    var username, password;

    function doLogin(user,pw) {
        username = user;
        password = pw;

        // faça o resto do trabalho do login
    }

    var publicAPI = {
        login: doLogin
    };

    return publicAPI;
}

// cria uma instãncia do módulo`User`
var fred = User();

fred.login( "fred", "12Battery34!" );
