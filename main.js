// Data on the projects to date
const projs = [
    {
        name: 'proj1',
        using: 'HTML, CSS',
        date: '18 July 2022',
        description: 'This project is awesome.'
    },
    {
        name: 'proj2',
        using: 'HTML, CSS, Javascript',
        date: '19 July 2022',
        description: 'This project is even better.'
    },
    {
        name: 'proj3',
        using: 'HTML, CSS',
        date: '20 July 2022',
        description: 'This project is the best yet.'
    }];

// Put each project name to link with pictures in the HTML
const portfolio = [];
projs.forEach(function(proj){
    portfolio.push(document.getElementsByClassName(proj.name));
})

// Function that changes the color of the picture pressed
let picClick = (event) => {
    event.target.style.backgroundColor = 'blue';
  }

// Inject data into the .proj_data area?? How to do this...  
let picReturn = (event) => {
    event.target.style.backgroundColor = '';
    
  }

// Press picture with event handler properties
let picPress = (proj) => {
    proj.addEventListener('mousedown', picClick);
    proj.addEventListener('mouseup', picReturn);
}

// Loop through each project and add an event listener
portfolio.forEach(function(proj){
    picPress(proj);
})

