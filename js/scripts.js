function newItem() {

  // ADD ITEMS
  let li = document.createElement('li');
  let inputValue = document.getElementById('input').value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    let list = document.querySelector('#list');
    list.appendChild(li);
  }

  // CROSS OUT ITEMS
  function crossOut() {
    li.classList.toggle('strike');
  }

  li.addEventListener('dblclick', crossOut);

  // DELETE BUTTON
  let crossOutButton = document.createElement('crossOutButton');
  crossOutButton.appendChild(document.createTextNode('X'));
  li.appendChild(crossOutButton);

  crossOutButton.addEventListener('click', deleteListItem);

  function deleteListItem() {
    li.classList.add('delete');
  }

  // ORDER ITEMS
  $('#list').sortable();
}
