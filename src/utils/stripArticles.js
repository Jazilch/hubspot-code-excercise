'use es6';

export const stripArticles = mediaTitle => mediaTitle.replace(/^(a |the |an )/i, '').trim();

export default stripArticles;
