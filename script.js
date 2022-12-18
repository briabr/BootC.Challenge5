let container = document.getElementById('container');

function createTimeBlocks(){
    let timeBlockDiv = document.createElement("div");

    for (let i=9; i<= 17; i++){
        let parentDiv = document.createElement("div");
        parentDiv.style.display = 'flex';

        let timeDiv = document.createElement("div");
        timeDiv.innerHTML =`${i}:00`;
        timeDiv.style.flex = '20%';
        timeDiv.style.border = '1px solid black';
    

        let textAreaDiv = document.createElement("div");
        let textArea = document.createElement("textarea");
        textAreaDiv.append(textArea);
        textAreaDiv.style.flex = '70%';
        textAreaDiv.style.border = '1px solid black';


        let buttonDiv = document.createElement("div");
        let buttonEl = document.createElement('button');
        buttonEl.addEventListener('click', function(event){
            event.preventDefault();
            console.log(event.target.parentElement);
            console.log(event.target.parentElement.previousElementSibling);
            console.log(event.target.parentElement.previousElementSibling.childNodes[0].value);
            let textAreaValue = event.target.parentElement.previousElementSibling.childNodes[0].value;
            saveData(textAreaValue);
        })
        buttonEl.innerHTML = "Save";
        buttonDiv.append(buttonEl);
        buttonDiv.style.flex = '10%';
        buttonDiv.style.border = '1px solid black';

        parentDiv.append(timeDiv, textAreaDiv, buttonDiv);
        timeBlockDiv.append(parentDiv)

    }
    container.append(timeBlockDiv)

}
function saveData(textAreaValue){
    let localStorageData = localStorage.getItem('notes');
    let userNotes = {
        note:textAreaValue
    }
    let jsonData = JSON.parse(localStorageData);
    console.log(jsonData)
    if (jsonData === null){
        jsonData = [];
        jsonData.push(userNotes)
    }else {
        jsonData.push(userNotes)
    }
    localStorage.setItem('notes', JSON.stringify(jsonData))
  
}

createTimeBlocks()