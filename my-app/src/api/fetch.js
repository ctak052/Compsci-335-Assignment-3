const fetchJson = async (url) => {
  const fakePromise = await fetch(url, {
    method: "GET",
  });

  return fakePromise.json();
};

const fetchText = (url) => {
  const fakePromise = fetch(url, {
    method: "GET",
  }).then((response) => response.text());

  return fakePromise;
};

export { fetchJson, fetchText };
