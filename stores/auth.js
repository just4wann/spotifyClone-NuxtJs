export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
        isLogin: false
    }
  },
  actions: {
    login() {
      this.isLogin = true;
    },
    logout() {
      this.isLogin = false;
    },
  },
});
