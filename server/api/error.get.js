export default defineEventHandler(() => {
  return {
    error: createError({
      statusCode: 404,
      statusMessage: 'state mismatch!',
    }),
  };
});
