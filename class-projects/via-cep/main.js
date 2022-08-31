const cep = document.querySelector('#cep');
cep.addEventListener('blur', handleSearch);

async function handleSearch(event) {
  let search = event.target.value.replace('-', '');
  const baseUrl = `http://viacep.com.br/ws/${search}/json/`;

  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  };

  const result = await (await fetch(baseUrl, options)).json();
  fillOutForm(result);
}

function fillOutForm(result) {
  for (const key in result) {
    const inputEl = document.querySelector(`#${key}`);
    if (inputEl) {
      inputEl.value = result[key];
    }
  }
}
