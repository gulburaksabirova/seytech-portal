const submit = () =>{
    const bill = Number(document.querySelector("#bill").value);
    const tip = Number(document.querySelector("#tipdom").value);
    const people = Number(document.querySelector("#people").value);
    const tipAmount = bill * tip;
    const billPerPerson = (bill + tipAmount)/people;

    document.querySelector("#result").innerHTML = `<h1>Bill per person</h1><div>${Math.floor(billPerPerson)}</div>`;
    console.log("Bill per person:", billPerPerson);
    console.log(bill, tip, people);
}