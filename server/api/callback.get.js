import querystring from 'querystring';
import axios from 'axios';

export default defineEventHandler(async (event) => {
  const { code, state } = getQuery(event);

  if (!state) {
    return sendRedirect(event, 'http://localhost:3000/api/error', 404);
  }

  const optionParam = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: process.env.REDIRECT_URI,
  };

  const res = await axios.post('https://accounts.spotify.com/api/token', querystring.stringify(optionParam), {
    headers: {
      Content_Type: 'application/x-www-form-urlencoded',
    },
  });

  const { access_token } = res.data;
  setCookie(event, 'Authorization', access_token);

  return sendRedirect(event, 'http://localhost:3000/', 200);
});
