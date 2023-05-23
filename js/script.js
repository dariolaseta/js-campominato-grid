const gridElement = document.getElementById("grid");
const button = document.getElementById("button")
let isCreated = false;

button.addEventListener("click", function(){
    gridElement.classList.add("container");

    if(!isCreated){
        for (let i = 0; i < 100; i++) {
            const newCell = createCell(i);
            
            gridElement.append(newCell);
        }
        isCreated = true;
    }

});

function createCell(cellNumber) {
    const cell = document.createElement("div");
    cell.classList.add("cells");
    cell.innerHTML = `<span>${cellNumber + 1}</span>`;
    return cell;
}