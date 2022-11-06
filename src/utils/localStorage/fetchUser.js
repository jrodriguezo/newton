export const fetchUser = () => {
    const userLocalStorage = JSON.parse(localStorage.getItem('user')) ?? localStorage.clear()
    return userLocalStorage;
}