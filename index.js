
function triangle(){
    for ( let i = '#'; i.length <= 7 ; i += '#' ){
        console.log(i);
    }
}

//triangle();

function fizzBuzz(){
    for( let i = 1; i <= 100; i += 1 ){
        if( i % 3 == 0 && i % 5 == 0 ){
            console.log("FizzBuzz")
        } else if ( i % 5 == 0 ){
            console.log("Buzz")
        } else if ( i % 3 == 0 ){
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
}

//fizzBuzz()

function chessBoard(){
    let size = 8;

    let grid = "";

    for(let y = 0; y < size; y++) {
        for(let x = 0; x < size; x++) {
            if((x + y) % 2 == 0) {
            grid += " ";
            } else {
            grid += "#";
            }
        }
        grid += "\n"
    }

    console.log(grid);
}

//chessBoard();


