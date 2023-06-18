export const serveLink = link => {
  if (link.includes('play.google')) {
    return 'Google Play';
  } else if (link.includes('books.google')) {
    return 'Google Books';
  } else {
    return link;
  }
};
