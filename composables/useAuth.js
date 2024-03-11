export const useAuth = () => {
  const store = useAuthStore();
  const isAuthorized = useCookie('Authorization');

  if (isAuthorized.value) {
    return (store.isLogin = true);
  } else {
    return (store.isLogin = false);
  }
};
