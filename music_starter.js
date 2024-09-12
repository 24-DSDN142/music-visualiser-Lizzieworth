



// This array stores multiple images, but that image needs to be loaded
let images = [];

// The current image to be shown (arrays go from 0 to array.length - 1)
let currentImage = 0;

// This variable is true when the code first starts running
let firstRun = true;

let img;
let img2;
let img3;
let img4; 
let img5;

let circleSizeX =0
let circleSizeY = 0

let circle2X = 250
let circle2Y = 250

let circle3X = 500
let circle3Y = 500

let circle4X = 750
let circle4Y = 750





   function draw_one_frame(words, vocal, drum, bass, other, counter) {
   background(13, 2, 33)

   if(firstRun){
    img = loadImage('image1.png');
    img2 = loadImage ('image2.png');
    img3 = loadImage ('image3.png');
    img4 = loadImage ('image4.png')
    img5 = loadImage ('image5.png')

   
    firstRun = false 

   }

   let starSize1 = map (bass, 0, 100, 0, 20)
   let starSize2 = map (vocal, 0, 100, 10, 40)
   stroke (0)
   fill (63, 54, 105)
   ellipse (280,547,starSize1)
   ellipse (672,78,starSize2)
   ellipse (36,306,starSize1)
   ellipse (162,350,starSize2)
   ellipse (28,547,starSize1)
   ellipse (672,730,starSize2)
   ellipse (647,306,starSize2)
   ellipse (120,270,starSize2)
   ellipse (50,690,starSize1)
   ellipse (100,633,starSize2)
   ellipse (340,130,starSize1)
   ellipse (310,110,starSize2)
   ellipse (162,350,starSize2)

   image (img, 0, 0, circleSizeX, circleSizeY)

   
   circleSizeX = circleSizeX + 6
   circleSizeY = circleSizeY + 6

   if (circleSizeX > 800)
    circleSizeX = 10

   if(circleSizeY > 800)
    circleSizeY = 10

   image (img2, 0, 0, circle2X, circle2Y)

   circle2X = circle2X + 6
   circle2Y = circle2Y + 6

   if (circle2X > 800)
    circle2X = 10

   if(circle2Y > 800)
    circle2Y = 10
 
   image (img3, 0, 0, circle3X, circle3Y)

   circle3X = circle3X + 6
   circle3Y = circle3Y + 6

   if (circle3X > 800)
    circle3X = 10

   if(circle3Y > 800)
    circle3Y = 10

   image (img4, 0, 0)



  let drawMap1 = map (drum, 0, 100, 0, 180)
  
  push()
  
   translate (400, 400)
   rotate(drawMap1)
  //  ellipse (0, 0, 10, 10)
   image (img5, -400, -400)

   pop()

  

 

   
  

  



   }

//    fill(180, 52, 235) // purple 
//    stroke (235, 116, 52) // orange 

//    rect( 400, 400, 750, 750) // rectangle boarder
   
//    stroke (235, 79, 52) // reddish orange 
//    let drawMap = map (drum, 0, 100, 0, 35)
//    let lengthOfLine = 280
//    let lineStart = 85
//    let lineEnd = lineStart + lengthOfLine

//    for(let i =9; i <= drawMap; i++) {

//     let lineStep = i * 15;
//     line (lineStart,lineStep,lineEnd,lineStep)
    
//    }
// // if bass reaches a certian number show this screen image


//    let lineStart2 = 435
//    let lineLength2 = 280
//    let lineEnd2 = lineStart2 + lineLength2
//    let drawMap2 = map (vocal, 0, 100, 0, 35)

//    for(let i = 15; i < drawMap2; i=i+1 ) {

//     let lineStep2 = i * 15;
    
//     line (lineStart2, lineStep2, lineEnd2, lineStep2)
//    }


//    let drawMap3 = map (bass, 0, 100, 0, 20)
//    let lengthOfLine3 = 280
//    let lineStart3 = 85
//    let lineEnd3 = lineStart + lengthOfLine3

//    push()
//    translate(0, 360)
//    for(let i =10; i <= drawMap3; i++) {

//     let lineStep3 = i * 15;
//     line (lineStart3,lineStep3,lineEnd3,lineStep3)

//    }
//    pop()


   









   




// if (firstRun) {

  //   // This loads in the images and then "pushes" them onto the array
  //   images.push(loadImage("myImage1.png"));
  //   images.push(loadImage("myImage2.png"));
  //   images.push(loadImage("myImage3.png"));
  //   images.push(loadImage("myImage4.png"));

  //   // This makes it so this part of the code does not run again
  //   firstRun = false;
  // }

  // background(0);

  // // Run if the counter is bigger than 0
  // if (counter > 0) {
  //   // Draw image
  //   image(images[currentImage], 0, 0);

  //   // Every time counter is a multiple of 50, change to next frame
  //   if (counter % 50 == 0) {
  //     currentImage++;
  //   }
    
  //   // If the current image number is bigger than or equal to the length of the
  //   // array, reset the counter 
  //   if (currentImage >= images.length) {
  //     currentImage = 0;
  //   }
  //   console.log(currentImage)
    
  // }

// // minimum and maximum points for firework 0
// let fireworkMinPoint0 = 40;
// let fireworkMaxPoint0 = 150;

// // minimum and maximum points for firework 1
// let fireworkMinPoint1 = 20;
// let fireworkMaxPoint1 = 50;


// // minimum and maximum points for firework 2
// let fireworkMinPoint2 = 50;
// let fireworkMaxPoint2 = 250;


// // the maximum point of each firework, in order from 0, 1, 2, ... , and so on
// // start off the array with the minimum points so that they are not showing.
// const fireworksPoints = [fireworkMinPoint0, fireworkMinPoint1, fireworkMinPoint2];


// // vocal, drum, bass, and other are volumes ranging from 0 to 100
// function draw_one_frame(words, vocal, drum, bass, other, counter) {
//   background(20);
//   angleMode(DEGREES);

//   // this makes firework 0 grow by 1 when counter is higher than 200, 
//   // and decay by 1 when the counter is higher than 400
//   growOrDecayFirework(counter, 0, fireworkMinPoint0, fireworkMaxPoint0, 200, 400, 1, 1);

//   // this makes firework 1 grow by 3 when counter is higher than 0, 
//   // and decay by 0.5 when the counter is higher than 100
//   growOrDecayFirework(counter, 1, fireworkMinPoint1, fireworkMaxPoint1, 0, 100, 3, 0.5);

//   // this makes firework 2 grow by 7 when counter is higher than 50, 
//   // and decay by 0.1 when the counter is higher than 250
//   growOrDecayFirework(counter, 2, fireworkMinPoint2, fireworkMaxPoint2, 50, 250, 7, 0.1);

//   // draws firework 0
//   drawFirework(canvasWidth/2, canvasHeight/2, 8, fireworkMinPoint0, fireworksPoints[0]);


//   // draws firework 1
//   drawFirework(canvasWidth/4, canvasHeight/4, 5, fireworkMinPoint1, fireworksPoints[1]);


//   // draws firework 2
//   drawFirework(3 * canvasWidth/4, canvasHeight/4, 13, fireworkMinPoint2, fireworksPoints[2]);
// }

// /**
//  * This function is used to make a chosen firwork grow or decay
//  * 
//  * counter - the counter
//  * fireworkNumber - what firework you want to change
//  * fireworkMinPoint - what that firework's min point is
//  * fireworkMaxPoint - what that firework's max point is
//  * start - when to start growing
//  * stop - when to stop growing
//  * growthAmount - how much to grow by
//  * decayAmount - how much to decay by
//  */
// function growOrDecayFirework(counter, fireworkNumber, fireworkMinPoint, fireworkMaxPoint, start, stop, growthAmount, decayAmount) {
//   // if the counter is less than start AND the counter is smaller than stop, make the firework grow by some amount
//   if (counter > start && counter < stop) {
//     if (fireworksPoints[fireworkNumber] < fireworkMaxPoint) { fireworksPoints[fireworkNumber] += growthAmount; }
//   }

//   // otherwise, make the firework decay by some amount
//   else {
//     if (fireworksPoints[fireworkNumber] > fireworkMinPoint) { fireworksPoints[fireworkNumber] -= decayAmount; } 
//   }
// }

// /**
//  * This function draws a firework
//  * 
//  * x - x position of firework
//  * y - y position of firework
//  * lineCount - number of lines in the firework
//  * lineMinPoint - mimimum point of line
//  * lineMaxPoint - maximum point of line
//  */
// function drawFirework(x, y, lineCount, lineMinPoint, lineMaxPoint) {
//   push();

//   // initial colour stuff
//   noFill();
//   strokeWeight(3);
//   stroke(180, 255, 50);

//   // translate to (x, y) for drawing and rotating
//   translate(x, y);

//   // for each number of lines in the firework (defined by lineCount), draw the line and rotate.
//   for (let i=0; i<lineCount; i++) {
//     line(0, lineMinPoint, 0, lineMaxPoint);
//     rotate(360/lineCount)
//   }

//   pop();
// }



// // vocal, drum, bass, and other are volumes ranging from 0 to 100
// function draw_one_frame(words, vocal, drum, bass, other, counter) {
//   background(20)
//   textFont('Verdana'); // please use CSS safe fonts
//   rectMode(CENTER)
//   textSize(24);
  
//    let bar_spacing = height / 10;
//    let bar_height = width / 12;
//    let bar_pos_x = width / 2;
 

//    // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
   
//    // display "words"
//    textAlign(CENTER);
//    textSize(vocal);
//    text(words, width/2, height/3);
// }


// vocal, drum, bass, and other are volumes ranging from 0 to 100
// var Xmove = 1;
// function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // background(20)
  // ellipse(10 + Xmove, 100, 20, 20);
  // Xmove = Xmove + 1;

  // if (Xmove > 200) {
  //   Xmove = 0;
  // }
// }