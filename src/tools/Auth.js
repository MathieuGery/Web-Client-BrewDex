import Cookies from 'js-cookie';

function storeUser(jwt) {
    Cookies.set('jwt', jwt);
}

function getUser() {
    const credentials = Cookies.get('jwt');
    if (credentials) {
        return credentials
    }
    return null
}

function removeUser() {
    Cookies.remove('jwt')
}

export { storeUser, getUser, removeUser }
