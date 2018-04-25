// @flow
export const getFetch = endpoint =>
  fetch(endpoint)
    .then(response => response.json())