function button(numberInput){
    disp.innerHTML += (numberInput)
}
function cl(){
    disp.innerHTML = ''
}
function ac(){
    disp.innerHTML = ''
    result.innerHTML = ''
}
function solve(){
    result.innerHTML = eval(disp.innerHTML)
}