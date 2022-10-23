export const localStorage = {
    set(key: string, val: any) {
        window.localStorage.setItem(key, JSON.stringify(val))
    },
    get(key: string) {
        const json: any = window.localStorage.getItem(key)
        return JSON.parse(json)
    },
    clear() {
        window.localStorage.clear()
    }
}

export const sessionStorage = {
    set(key: string, val: any) {
        window.sessionStorage.setItem(key, JSON.stringify(val))
    },
    get(key: string) {
        const json: any = window.localStorage.getItem(key)
        return JSON.parse(json)
    },
    clear() {
        window.localStorage.clear()
    }
}