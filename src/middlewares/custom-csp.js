export default (config, { strapi }) => {
  return async (ctx, next) => {
    const existingCsp = ctx.response.get('Content-Security-Policy') || '';

    const updatedCsp = existingCsp.replace(
      /img-src[^;]*/g,
      (match) => match + ' https://cdn.astroved.com'
    );

    const finalCsp = updatedCsp.includes('img-src')
      ? updatedCsp
      : `${existingCsp}; img-src 'self' data: blob: https://cdn.astroved.com`;

    ctx.set('Content-Security-Policy', finalCsp.trim());
    await next();
  };
};
