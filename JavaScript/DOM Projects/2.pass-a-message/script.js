
const onSubmit = () =>{
    let val = document.querySelector("#text").value;
    if(val.length > 0){
        document.querySelector("#result").innerHTML = val.toUpperCase();
        document.querySelector("#text").value = " ";
    }
        document.querySelector("#text").addEventListener("keypress", function(event){
            if(event.key === "Enter"){
                event.preventDefault();
                onSubmit();
            }
        })
}


