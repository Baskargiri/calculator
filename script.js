var output = document.getElementById('input_val');

function display(num){
    output.value += num;
}
function evalute(){
    try{
        output.value = eval(output.value)
    }
    catch(err){
        alert("invalid input")
    }
}

function cl(){
    output.value="";
}

function back(){
    output.value=output.value.slice(0,-1)
}

output.addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
        output.value = eval(output.value)
    }

})