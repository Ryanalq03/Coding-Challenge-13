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


