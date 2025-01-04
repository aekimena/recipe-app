export default ({url}: {url: string | null}) => {
  if (url) return {uri: url};
  return {uri: 'https://6kbw.com/wp-content/uploads/2021/05/default.jpg'};
};
