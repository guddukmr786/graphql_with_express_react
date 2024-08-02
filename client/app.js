async function fetchData() {
  const response = await fetch('http://localhost:9000/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query: 'query {greeting, name}',
    }),
  })
  const { data } = await response.json();
  return data;
}

fetchData().then((data) => {
  const { greeting, name } = data;
  document.getElementById('greeting').textContent = greeting;
  document.getElementById('name').textContent = name
});