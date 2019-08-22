
// geting canvas by id canvScr
let canvScr= document.getElementById("canvScr");
let canvScrContxt = canvScr.getContext("2d");

//making the canvas full screen
canvScr.height = window.innerHeight;
canvScr.width = window.innerWidth;

//japanese characters - taken from the unicode charset
let matrix = "fit_text_tokenizer, save_text_tokenizer, sequences_to_matrix, text_tokenizer, texts_to_sequences_generator, texts_to_sequences";
//converting the string into an array of single characters
matrix = matrix.split("");

let font_size = 15;
let columns = canvScr.width / font_size; //number of columns for the rain
//an array of drops - one per column
let drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(let x = 0; x < columns; x++)
    drops[x] = 1; 

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    canvScrContxt.fillStyle = "rgba(0, 0, 0, 0.04)";
    canvScrContxt.fillRect(0, 0, canvScr.width, canvScr.height);

    canvScrContxt.fillStyle = "#0F0"; //green text
    canvScrContxt.font = font_size + "px";
    //looping over drops
    for( let i = 0; i < drops.length; i++ )
    {
        //a random chinese character to print
        let text = matrix[ Math.floor( Math.random() * matrix.length ) ];
        //x = i*font_size, y = value of drops[i]*font_size
        canvScrContxt.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if( drops[i] * font_size > canvScr.height && Math.random() > 0.975 )
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval( draw, 35 );
//*** MATRIX ENDS ***//

//*** CLOCK STARTS ***//
const showTime = () => {
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds(); 

    if(currentHours == 0){
        currentHours = 12;
    }

    if(currentHours > 12){
    }

    currentHours = (currentHours < 10) ? "0" + currentHours : currentHours;
    currentMinutes = (currentMinutes < 10) ? "0" + currentMinutes : currentMinutes;
    currentSeconds = (currentSeconds < 10) ? "0" + currentSeconds: currentSeconds 

    let time = currentHours + ":" + currentMinutes + ":" + currentSeconds;

    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();

