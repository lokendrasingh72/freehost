const Services = (method, url, body) => {
  if (method == "post") {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } else {
    return fetch(url, {
      method: "GET",
    });
  }
};

export function __fetch(method, url, body) {
  return new Promise((resolve, reject) => {
    return Services(method, url, body)
      .then((e) => e.json())
      .then((e) => {
        if (e.token == "QpwL5tke4Pnpja7X4") {
          resolve(e.data);
        } else {
          reject(e);
        }
      })
      .catch((error) => {
        console.log("error", error);
        reject("we are unable to fetch data");
      });
  });
}
