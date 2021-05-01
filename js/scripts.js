function newItem() {

  // ADD ITEMS
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  let text = document.createTextNode(inputValue);
  li.append(text);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
  }

  // CROSS OUT ITEMS
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', crossOut);

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
