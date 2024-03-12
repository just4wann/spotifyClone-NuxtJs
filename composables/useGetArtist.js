export const useGetArtist = async (artistName) => {
  const token = useCookie('Authorization');
  const data = await $fetch('https://api.spotify.com/v1/search?q=' + artistName + '&type=artist', {
    headers: {
      Authorization: `Bearer ${token.value}`,
      'Content-Type': 'application/json'
    },
  });
  console.log('artist', data)
  return data
};
