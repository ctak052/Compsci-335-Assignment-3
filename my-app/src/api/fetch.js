const fetchJson = async (url) => {
  const fakePromise = await fetch(url, {
    method: "GET",
  });

  return fakePromise.json();
};

const fetchText = (url) => {
  return fetch(url, {
    method: "GET",
  }).then((response) => response.text());
};

const postJson = (url, body) => {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: body,
  });
};
export { fetchJson, fetchText, postJson };
