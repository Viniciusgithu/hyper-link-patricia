let app = document.body

function changedTheme(){
  if(app.classList.contains('light')){
    app.classList.remove('light')
  } else {
    app.classList.add('light')
  }
}


btn.addEventListener('click', changedTheme)
