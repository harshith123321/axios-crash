// GET REQUEST
function getTodos() {
  axios.get('/api/todos')
    .then(function (response) {
      console.log('GET Request', response);
      showOutput(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// POST REQUEST
function addTodo() {
  axios.post('/api/todos', {
      title: 'New Todo',
      completed: false
    })
    .then(function (response) {
      console.log('POST Request', response);
      showOutput(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios.put('/api/todos/1', {
      title: 'Updated Todo',
      completed: true
    })
    .then(function (response) {
      console.log('PUT/PATCH Request', response);
      showOutput(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// DELETE REQUEST
function removeTodo() {
  axios.delete('/api/todos/1')
    .then(function (response) {
      console.log('DELETE Request', response);
      showOutput(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// SIMULTANEOUS DATA
function getData() {
  axios.all([
      axios.get('/api/todos'),
      axios.get('/api/posts')
    ])
    .then(axios.spread(function (todos, posts) {
      console.log('Simultaneous Request');
      console.log('Todos', todos);
      console.log('Posts', posts);
      // You can show output for each request if needed
      showOutput(todos);
      showOutput(posts);
    }))
    .catch(function (error) {
      console.log(error);
    });
}

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer token'
    }
  };

  axios.get('/api/todos', config)
    .then(function (response) {
      console.log('Custom Headers', response);
      showOutput(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options = {
    transformResponse: axios.defaults.transformResponse.concat(function (data) {
      data.title = data.title.toUpperCase();
      return data;
    })
  };

  axios.get('/api/todos', options)
    .then(function (response) {
      console.log('Transform Response', response);
      showOutput(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// ERROR HANDLING
function errorHandling() {
  axios.get('/api/todos')
    .then(function (response) {
      console.log('Error Handling', response);
      showOutput(response);
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        console.log(error.message);
      }
      console.log(error.config);
    });
}

// CANCEL TOKEN
function cancelToken() {
 


// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
