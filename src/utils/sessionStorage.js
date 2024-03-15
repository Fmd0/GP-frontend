
const getFromSessionStorage = () => {
    const histories = sessionStorage.getItem('histories')
    if(histories === null) {
        return []
    }
    return JSON.parse(histories)
}

const setSessionStorage = (data) => {
    sessionStorage.setItem('histories', JSON.stringify(data))
}

export {
    getFromSessionStorage,
    setSessionStorage
}