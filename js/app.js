class Client{
    constructor(name, lastName,email,nights){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.nights = nights;
    }
}
let clients = []

let btnAccept = $("#accept")
let btnCancel = $("#cancel")
let table = $("#table")
let reservas = $("#reservas")


const saveAll = () => {
   
    let name = $("#name").val()
    let lastName = $("#lastName").val()
    let email = $("#email").val()
    let nights = $("#nights").val()


    if( JSON.parse(localStorage.getItem("clients"))  != null) {
        clients = JSON.parse(localStorage.getItem("clients"))
        let client = new Client(name, lastName,email,nights)
        clients.push(client)
        localStorage.setItem("clients", JSON.stringify(clients))

    }else {
        let client = new Client(name, lastName,email,nights)
        clients.push(client)
        localStorage.setItem("clients", JSON.stringify(clients))

    }
}

// imprimir las reservas
const printAllData = () => {
    let savedData = JSON.parse(localStorage.getItem("clients"))
    if(savedData != null) {
        savedData.forEach(e => {
            let tableOfData = document.createElement("tr")
    
            let td1 = document.createElement("td")
            td1.setAttribute("class","col-1")
            td1.textContent = `${savedData.indexOf(e)}`
            tableOfData.append(td1)
    
            let th1 = document.createElement("th")
            th1.setAttribute("class","col-2")
            th1.textContent = `${e.name}`
            tableOfData.append(th1)
    
            let th2 = document.createElement("th")
            th2.setAttribute("class","col-3")
            th2.textContent = `${e.lastName}`
            tableOfData.append(th2)
    
            let th3 = document.createElement("th")
            th3.setAttribute("class","col-4")
            th3.textContent = `${e.email}`
            tableOfData.append(th3)
    
            let th4 = document.createElement("th")
            th4.setAttribute("class","col-5")
            th4.textContent = `${e.nights}`
            tableOfData.append(th4)
            
            let td2 = document.createElement("td")
            td2.setAttribute("class","col-6")
            td2.textContent = `x`
            tableOfData.append(td2)
    
    
            table.append(tableOfData)
            
        });

    }else {
        alert("haga su reserva")
    }

}

reservas.on("submit", saveAll)
btnCancel.on("click", () => {
    localStorage.clear()
    location.reload()
})


printAllData()