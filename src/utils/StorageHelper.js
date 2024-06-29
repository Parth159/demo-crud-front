export const storeLocalStorage = (key,value) => {
    localStorage.setItem(key,value);
}

export const getLocalStorage = (key) => {
    localStorage.getItem(key);
}