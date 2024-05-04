// Constant
const diceFaces = 20;

// Funtions
// Random Numbers
function randI(max){
    return Math.ceil(Math.random() * max);
}
function rollDice(){
    return randI(diceFaces);
}
// Calculate
function calcMod(d20){
    const weight = 1.2;
    let inc = -1;

    if ( d20 > 15 ) {
        inc = 1;
    }
    else if ( d20 > 7 ){
        inc = 0;
    } 
         
    return Math.round(inc + d20/weight); 
}
function calcTotal(base,mod){
    return base+mod;
}
// Get values
function getBase(row){
    const input = row.querySelector('input');
    return parseInt(input.value);
}

function fillTd(row, value, pos){
    const td = row.querySelector(`td:nth-child(${pos})`);
    td.innerHTML = value;
}
function fillD20(row, value){
    fillTd(row, value,3)
}
function fillMod(row, value){
    fillTd(row, value,4)
}
function fillTotal(row, value){
    fillTd(row, value,5)
}
// Setup functions
function setup(row){
    const base = getBase(row);

    // Calc values
    const dice = rollDice();
    const mod =  calcMod();
    const total = calcTotal(base, mod);

    //Fill values
    fillD20(row, dice);
    fillMod(row, mod);
    fillTotal(row, total);
}
function setupAll() {
    const all = document.querySelectorAll('.entry');
    for (const tr of all){
        setup(tr);
    }
}
