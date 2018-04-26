/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var start = null;
var rID = null;
var NF = 50;
var f = 1;
var duration = 2000

function anim() {

  function update(timestamp) {
    if (!start) start = timestamp;
    var progress = ((timestamp - start) / duration).toFixed(3);

    if (progress > 0.5) {
      console.log('stop');
    }
    if (progress < 1) {
      rID = requestAnimationFrame(update);
    };
    console.log(progress);
  }
  
  rID = requestAnimationFrame(update);
}

anim();

