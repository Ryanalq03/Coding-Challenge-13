//Coding Challenge #13

//Task 2: Employee Cards

function createEmployeeCard(name, position) {

    // This creates the employee card elements
    const employeeCard = document.createElement('div');
    employeeCard.setAttribute('class','employee-card');  
    employeeCard.setAttribute('id', 'employeeCard');  
    
    //creates the employee name element
    const employeeName = document.createElement('h2');
    employeeName.textContent = name; 
    employeeCard.appendChild(employeeName);
    
    //Element with employee position added
    const employeePosition = document.createElement('p');
    employeePosition.textContent = position; 
    employeeCard.appendChild(employeePosition);
    
    // This is a button that removes the card
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.setAttribute('class', 'remove-button');
    Clipboard.appendChild(removeButton);

    //Adding employees
employeeCard("Employee: Alex Earle", "Position: CNA");
employeeCard("Employee: Parker Munari", "Position: CMA");
employeeCard("Employee: Marla Smith", "Position: HUC");
}

//Task 3 Converting NodeLists to Arrays for Bulk Updates

//Selects elements with the employee card class
const employeeCards = document.querySelectorAll(".employee-card");

//Converts Nodelist into an array with spread operator
const employeeCardsArray = [...employeeCards];

//Array method to add a solid grey border to cards
employeeCardsArray.forEach((card) => {
    card.style.border = "2px solid grey";
});

//Task 4 Adding the removal of employees with event bubbling

//Event listener that removes parent employee card
emoveButton.addEventListener(`click`, (event) => {
    employeeCard.remove();
    event.stopPropagation();
});

//Event listener for when an employee card is clicked
employeeCard.addEventListener('click', () => {
    console.log(`Employee Card Clicked!`);
})

//Task 5  Inline Editing of Employee Details
// Adds event listener for double click 
card.addEventListener('dblclick', () => {
    if (card.querySelector('.save-button')){
        return;
    }
    
// logs text content 
    const currentName = empName.textContent;
    const currentPosition = empPosition.textContent;
    
//Allows for input of names
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.value = empName.textContent;
//Allows for input of employee position
        const positionInput = document.createElement('input');
        positionInput.type = 'text';
        positionInput.value = empPosition.textContent;
//Adds save button
    const saveBtn = document.createElement('button');
    saveBtn.setAttribute('class','save-button');
    saveBtn.textContent = 'Save';
    
//Clears content and adds new imputs
    card.innerHTML = '';
    card.append(nameInput, document.createElement('br'), positionInput, document.createElement('br'), saveButton);
        
//Goes back to original card view
    saveBtn.addEventListener('click', () => {
        empName.textContent = nameInput.value;
        empPosition.textContent = positionInput.value;
    
//Brings back updated text and removes imputs
        card.innerHTML = '';
        card.append(empName, empPosition, removeBtn);
        });
    });
    
//Appends container to the card
    employeeContainer.appendChild(card);
    
//End of attept at Coding Challenge 13

