const square = document.querySelectorAll(".square")
const mole = document.querySelectorAll(".square")
let score = document.querySelector(".score")
let time = document.querySelector(".time")
let result = 0;
function randsqaure() {

    square.forEach(clname => {
        clname.classList.remove('mole');
    })


    let randp = square[Math.floor(Math.random() * 9)];
    randp.classList.add("mole");
    hitposition = randp.id;
    if (result === 3) {

        clearInterval(timeid);
        over();
    }


    // break;


}


square.forEach(id => {
    id.addEventListener('click', function (d) {
        if (d.currentTarget.id === hitposition) {
            result = result + 1;
            score.textContent = result;
            // console.log(result)
        }

    })

})
var timeid = null;
// var tm
function mm() {
    // var timeid = null;
    timeid = setInterval(randsqaure, 800);
    // tm.setInterval(time, 1000);

}



mm()
function over() {

    square.forEach(clname => {
        clname.classList.remove('mole');
    })
    alert("You won the game");



}