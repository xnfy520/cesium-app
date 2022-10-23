import userAppStore from './modules/app';

const userStore = () => ({
    app: userAppStore()
});

export default userStore;
