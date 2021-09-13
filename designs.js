// Select color input
const color = document.querySelector('#colorPicker');

// Select size input
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');

// When size is submitted by the user, call makeGrid()
const form = document.getElementById('sizePicker');
form.addEventListener('submit', makeGrid);

// TODO: make canvas for user
function makeGrid(event) {
    //prevent the default action  
    event.preventDefault();

    // TODO: add rows and columns
    for(let h = 1; h <= height.value; h++){
    
        // TODO: add row
        let tr = document.createElement('tr');
        let table = document.querySelector('#pixelCanvas');
        table.appendChild(tr);

        // TODO: add column
        for(let w = 1; w <= width.value; w++){
            let td = document.createElement('td');
            tr.appendChild(td);
            td.addEventListener('click', function(event){
            td.style.background = color.value;

            // TODO: reset to blank 
            if(color.value !== ''){
                form.removeEventListener('submit',makeGrid);
            }});
        }   
    }

}