// Code your solutions in this file
function writeCards( stringName, events ) {
    let thankYou = []
    for ( let i = 0; i < stringName.length; i++ ) {
      thankYou.push( `Thank you, ${stringName[i]}, for the wonderful ${events} gift!` )
    }
    return thankYou
  }
  
  function countDown( num1 ) {
    while ( num1 > 0 ) {
      console.log( num1 );
      num1 -= 1;
    }
    console.log( num1 );
  }