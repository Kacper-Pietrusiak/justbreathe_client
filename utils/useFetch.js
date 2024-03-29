export const useFetch = async (url) => {
  const res = await fetch(url);
  const data = res.json();

  return data;
};
