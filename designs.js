// When size is submitted by the user, call makeGrid()
const form = document.getElementById('sizePicker');
let tables = document.querySelector('table');

form.addEventListener('submit', makeGrid);

/**
 * Add rows and columns
 * @param {*} event 
 */
function makeGrid(event) {

    //prevent the default action  
    event.preventDefault();

    // Select color input
    const color = document.querySelector('#colorPicker');

    // Select size input
    const height = document.querySelector('#inputHeight');
    const width = document.querySelector('#inputWidth');

    tables.innerHTML = "";

    // TODO: add rows and columns
    for(let h = 1; h <= height.value; h++){
    
        // TODO: add row
        let tr = document.createElement('tr');
        tables.appendChild(tr);

        // TODO: add column
        for(let w = 1; w <= width.value; w++){
            let td = document.createElement('td');
            tr.appendChild(td);
            td.addEventListener('click', function(event){  
              td.style.backgroundColor = color.value;
            });
        }   
    }

}