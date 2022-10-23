import { defineStore } from 'pinia'

const useAppStore = defineStore({
    id: 'app',
    state: () => ({
        name: 'store name'
    }),
    actions: {
        setName(name: string){
            this.name = name
        }
    }
});

export default useAppStore;