export const useGetProfile = async () => {
  const token = useCookie('Authorization');
  const data = await $fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });
  return data;
};
