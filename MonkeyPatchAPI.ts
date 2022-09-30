// array in local storage for registered users
//let users = [{ name: 'test' }]

import users from "./mock/users.json"

export const MonkeyPatchAPI=()=> {
  let realFetch = window.fetch;
  window.fetch = function (url:any, opts:any) {
    const { method, headers } = opts;
    const body = opts.body && JSON.parse(opts.body);

    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(handleRoute, 500);

      function handleRoute() {
        switch (true) {
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
        resolve({ ok: true, json: () => Promise.resolve(JSON.stringify(body)) });
    }
    });
  };
}
