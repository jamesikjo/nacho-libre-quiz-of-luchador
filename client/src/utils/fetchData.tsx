export const getData = async (path: string, params: null | string = null) => {
  let url;
  console.log(url);
  if (params !== null) {
    url = `${process.env.REACT_APP_PROD_URL}/${path}/${params}`;
  } else {
    url = `${process.env.REACT_APP_PROD_URL}/${path}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch quiz data.");
  }
  const data = await res.json();
  return data;
};
