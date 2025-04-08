let { token } = Cookies.get();

export const getToken = () => token

const getUserData = () => {
    const decodeToken = token ? jwt_decode(token) : undefined;
    return decodeToken;
}

export const removerCookies = () => {
    Cookies.remove(key);
}

export default getUserData;