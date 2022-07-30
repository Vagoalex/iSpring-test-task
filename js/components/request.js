function request(obj, url) {
  axios({
    method: 'post',
    url,
    data: obj,
    headers: { 'content-type': 'application/json' },
  }).then((data) => console.log(data));
}

function getRequest(url) {
  axios.get(url).then((response) => console.log(response));
}

export { request, getRequest };
