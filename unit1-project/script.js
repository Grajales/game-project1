/*
 * DOTS: Level Three
 *
*
 * DOTS: Level Three
 *
 */
let score = 0;
let movingDots =document.querySelectorAll(".js-dot");

function handleClickEvent(e) {
  if (score < 100){
    //console.log(typeof e.target.dataset.increment);
    let dotIncrement = e.target.dataset.increment;
    console.log("You win " + dotIncrement + " points!");
    let dotValue = parseInt(dotIncrement, 10);
    score += dotValue;
    console.log(score);
  } 
  else {
    console.log("You win, game is over")
      //score =0;
  }
}
movingDots[0].addEventListener('click',handleClickEvent);
movingDots[1].addEventListener('click',handleClickEvent);
movingDots[2].addEventListener('click',handleClickEvent);