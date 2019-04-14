

// selects all projects on page
const project = document.querySelectorAll('.project');


for(var i = 0; i < project.length; i++) {
  project[i].addEventListener('mouseover', function(project){
    const logo = document.querySelectorAll('.port-logo');
    for(var j = 0; j < logo.length; j++){

      logo[j].classList.add('port-hover');
      logo[j].style.transition = '1s';
    }
  });

  project[i].addEventListener('mouseout', function(project){
    const logo = document.querySelectorAll('.port-logo');
    for(var j = 0; j < logo.length; j++){
      logo[j].classList.remove('port-hover');
      logo[j].style.transition = '1s';
    }
  });
}
