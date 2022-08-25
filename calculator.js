function button(numberInput){
    disp.innerHTML += (numberInput)
}
function cl(){
    disp.innerHTML = disp.innerHTML.slice(0,-1)
}
function ac(){
    disp.innerHTML = ''
    result.innerHTML = ''
}
function solve(){
    result.innerHTML = eval(disp.innerHTML)
}