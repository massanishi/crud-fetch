var fetch = require('isomorphic-fetch');

var crudFetch = {};

module.exports = crudFetch;

crudFetch.get = function(url) {
  const promise = new Promise((resolve, reject) => {
    fetch(url, {
      method: 'get',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res);
    })
    .then(body => resolve(body))
    .catch(error => reject(error));
  });

  return promise;
}

crudFetch.post = function(url, payload) {
  const promise = new Promise((resolve, reject) => {
    fetch(url, {
      method: 'post',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.status);
    })
    .then(body => resolve(body))
    .catch(error => reject(error));
  });

  return promise;
}

crudFetch.put = function(url, payload) {
  const promise = new Promise((resolve, reject) => {
    fetch(url, {
      method: 'put',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.status);
    })
    .then(body => resolve(body))
    .catch(error => reject(error));
  });

  return promise;
}

crudFetch.remove = function(url, payload) {
  const promise = new Promise((resolve, reject) => {
    fetch(url, {
      method: 'delete',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.status);
    })
    .then(body => resolve(body))
    .catch(error => reject(error));
  });

  return promise;
}
