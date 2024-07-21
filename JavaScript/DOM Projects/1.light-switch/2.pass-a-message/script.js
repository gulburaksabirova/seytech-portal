
const onSubmit = () =>{
    const val = document.querySelector("#input").value;
   document.querySelector("#input").innerHTML = val.toUpperCase();
}
document.querySelector("#result").addEventListener("click", onSubmit);

