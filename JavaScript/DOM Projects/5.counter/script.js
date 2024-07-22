// const decrease = ()=>{
//     let currNum = Number(document.querySelector("#result").innerHTML)
//     currNum--;
//     document.querySelector("#result").innerHTML = currNum;
//     console.log(currNum)
// }

// const increase = ()=>{
//     let currNum = Number(document.querySelector("#result").innerHTML);
//     currNum++;
//     document.querySelector("#result").innerHTML = currNum;
// }

// const reset = () =>{
//     document.querySelector("#result").innerHTML = 0;
// }

let counter = 0;

function decrease(){
    counter--;
    document.querySelector("#result").innerHTML = counter;
    if(counter < 0){
        document.querySelector("#result").classList.remove("positive");
        document.querySelector("#result").classList.add("negative");
    }
}

function increase(){
    counter++;
    document.querySelector("#result").innerHTML = counter;
    if(counter > 0){
        document.querySelector("#result").classList.remove("negative");
        document.querySelector("#result").classList.add("positive");

    }
}

function reset(){
    counter = 0;
    document.querySelector("#result").innerHTML = counter;
        document.querySelector("#result").classList.remove("negative");
        document.querySelector("#result").classList.remove("positive");
        // document.querySelector("#result").classList.add("zero");

}