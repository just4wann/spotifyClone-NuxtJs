import querystring from 'querystring';

const authParam = {
  client_id: process.env.CLIENT_ID,
  response_type: 'code',
  redirect_uri: process.env.REDIRECT_URI,
  state: '$323s',
};

export default defineEventHandler((event) => {
    return sendRedirect(event, `https://accounts.spotify.com/authorize?${querystring.stringify(authParam)}`, 200)
});