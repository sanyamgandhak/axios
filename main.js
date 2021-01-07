
function get() {
  axios
    .get('https://reqres.in/api/users?page=2', {
      timeout: 5000
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}


function post() {
  axios
    .post('https://reqres.in/api/users', {
      "name": "morpheus",
      "job": "leader"
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}


function patch() {
  axios
    .patch('https://reqres.in/api/users/2', {
      "name": "morpheus",
    "job": "zion resident"
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}


function deletedata() {
  axios
    .delete('https://reqres.in/api/users/2')
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}


function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div>
    <h5>Status: ${res.status}</h5>
  </div>

    <div>
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  
`;
}


document.getElementById('get').addEventListener('click', get);
document.getElementById('post').addEventListener('click', post);
document.getElementById('update').addEventListener('click', patch);
document.getElementById('delete').addEventListener('click', deletedata);

