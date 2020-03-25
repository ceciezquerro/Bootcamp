var kodersArray = [
]
const saveKoder = () => {
    let koderName = document.getElementById("koder-name").value;
    let koderLastName = document.getElementById("koder-last-name").value;
    let koderDeliveredPractices = document.getElementById("koder-delivered-practices").value;
    let koderAssistances = document.getElementById("koder-assistances").value;
    
    let koderObject = {koderName,koderLastName,koderDeliveredPractices,koderAssistances}
    
    console.log(koderObject)
    kodersArray.push(koderObject);
    printKoders()
}
const printKoders = () => {
    document.getElementById("koders-wrapper").innerHTML = ""
    kodersArray.forEach((koder,index) => {
        let koderFullName = koder.koderName + " " + koder.koderLastName;
        let koderAssistances = koder.koderAssistances;
        let koderDeliveredPractices = koder.koderDeliveredPractices;
        let currentContent = document.getElementById("koders-wrapper").innerHTML;  
        let newContent = `
            <tr id='koder-${index}'>
                <td>${index + 1}</td>
                <td><span class="text-uppercase">${koderFullName}</span></td>
                <td>${koderAssistances}</td>
                <td>${koderDeliveredPractices}</td>
                <td>
                    <div class='btn btn-danger' id='btn-delete'>${index}</div>
                </td>
            </tr>
            `
        document.getElementById("koders-wrapper").innerHTML= currentContent + newContent;
    })
}
var saveKoderBtn = document.getElementById("submit-button");
saveKoderBtn.addEventListener("click",saveKoder)

const printKoderCard = () => {
    document.getElementById("koder-card").innerHTML = ""
    kodersArray.forEach((koder,index) => {
        let koderFullName = koder.koderName + " " + koder.koderLastName;
        let koderAssistances = koder.koderAssistances;
        let koderDeliveredPractices = koder.koderDeliveredPractices;
        let currentContent = document.getElementById("koder-card").innerHTML;
        let newCard = `
        <div class="card mt-3">
        <div class="card-body">
          <h5 class="card-title">${koderFullName}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${koderDeliveredPractices}</li>
          <li class="list-group-item">${koderAssistances}</li>
        </ul>
          <div class="btn btn-danger mt-3 btn-block">${index}</div>
        </div>
    </div>
    `
    document.getElementById("koder-card").innerHTML = currentContent + newCard
    })
}
var printKoderCardBtn = document.getElementById("submit-button");
printKoderCardBtn.addEventListener("click",printKoderCard)
