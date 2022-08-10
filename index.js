const input = document.getElementById('button');
function addingEventListener(event) {
    alert('I was clicked');
    input.addEventListener('click', addingEventListener);
}

