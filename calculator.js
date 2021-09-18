//get number
function number(num){
    var result=document.getElementById("input");
    result.value+=num;
}
//get result
function result(){
    var result=document.getElementById("input");
    result.value=eval(result.value);
}
//clearall
function clearresult(){
    var result=document.getElementById("input");
    result.value="";
}
function deletechar(){
    var number=document.getElementById("input");
    var remove=number.value;
    remove=remove.slice(0,-1);
    number.value=remove;
}