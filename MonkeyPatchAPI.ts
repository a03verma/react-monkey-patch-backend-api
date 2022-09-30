// array in local storage for registered users
let users = [{ name: 'test' }];

export function configureFakeBackend() {
  let realFetch = window.fetch;
  window.fetch = function (url:any, opts:any) {
    const { method, headers } = opts;
    const body = opts.body && JSON.parse(opts.body);

    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(handleRoute, 500);

      function handleRoute() {
        switch (true) {
          case url.endsWith('/users/authenticate') && method === 'POST':
            return authenticate();
          case url.endsWith('/users/register') && method === 'POST':
            return register();
          case url.endsWith('/users') && method === 'GET':
            return getUsers();
          default:
            // pass through any requests not handled above
            return realFetch(url, opts)
              .then((response) => resolve(response))
              .catch((error) => reject(error));
        }
      }

      // route functions

  

      function getUsers() {
        return ok(users);
      }

      function ok(body:any) {
        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
    }

    });
  };
}
