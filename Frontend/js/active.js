const icons = document.querySelectorAll('.icon-round');

icons.forEach(icon => {
  icon.addEventListener('click', () =>{
    //remove 'active' form all icons
    icons.forEach(i => i.classList.remove('active'));

    //Add 'active' to the click icon
    icon.classList.add('active');
  })
} )