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
    portfolio.push(document.getElementById(proj.name));
})

let Make_Proj_Data = (proj) => {
    let info = `<h3>Name: </h3> ${proj.name}<br>
    <h3>Using: </h3> <span class="word" title="using">${proj.using}</span><br>
    <h3>Date: </h3> <span class="word"  title="date">${proj.date}</span><br>
    <h3>Description: </h3> <span class="word" title="description">${proj.description}</span><br>`;
    return info;
}


// Inject data into the .proj_data area?? Is there an easier way for 3 projects...  
let Proj1 = (event) => {
    let data = projs[0];
    document.getElementById('proj_data').innerHTML = Make_Proj_Data(data);
}

let Proj2 = (event) => {
    let data = projs[1];
    document.getElementById('proj_data').innerHTML = Make_Proj_Data(data);
}

let Proj3 = (event) => {
    let data = projs[2];
    document.getElementById('proj_data').innerHTML = Make_Proj_Data(data);
    
}

// Loop through each project and add an event listener
portfolio[0].onclick = Proj1;
portfolio[1].onclick = Proj2;
portfolio[2].onclick = Proj3;

