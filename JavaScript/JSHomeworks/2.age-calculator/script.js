document.addEventListener('DOMContentLoaded', ()=>{
    const currentYear = new Date().getFullYear();
    const calculateButton = document.getElementById('calculate-button');
    const resultElement = document.getElementById('result');

    calculateButton.addEventListener('click', ()=> {
        const birthYear = parseInt(document.getElementById('birth-year').value);
        
        if(isNaN(birthYear) || birthYear > currentYear){
            resultElement.textContent = 'Please enter a valid birth year.';
            return;
        }
        const age1 = currentYear - birthYear;
        const age2 = age1 - 1;
        resultElement.textContent = `You are ${age2} or ${age1} years old`;       
    });
});