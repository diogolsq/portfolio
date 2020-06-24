// this code was coded by Tim Holman, you can look his work on codepen //

function Banner(){

  var keyword = "Hello";
  var canvas;
  var context;

  var bgCanvas;
  var bgContext;

  var denseness = 10;

  //Each particle/icon
  var parts = [];

  var mouse = {x:0,y:0};
  var mouseOnScreen = false;

  var itercount = 0;
  var itertot = 40;

  var colors = ['rgba(250,250,250,0.8)', 'rgba(250,250,250,0.8)', 'rgba(250,250,250,0.8)', 'rgba(250,250,250,0.8)'];


  //When creating the particles, we assign a color from this list.
  color: colors[Math.floor(Math.random() * colors.length)],


  this.initialize = function(canvas_id){
    canvas = document.getElementById(canvas_id);
    context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    bgCanvas = document.createElement('canvas');
    bgContext = bgCanvas.getContext('2d');

    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;

    canvas.addEventListener('mousemove', MouseMove, false);
    canvas.addEventListener('mouseout', MouseOut, false);

    start();
  }

  var start = function(){

    bgContext.fillStyle = "#000000";
    bgContext.font = '300px impact';
    bgContext.fillText(keyword, 85, 275);

    clear();
    getCoords();
  }

  var getCoords = function(){
    var imageData, pixel, height, width;

    imageData = bgContext.getImageData(0, 0, canvas.width, canvas.height);

    // quickly iterate over all pixels - leaving density gaps
      for(height = 0; height < bgCanvas.height; height += denseness){
            for(width = 0; width < bgCanvas.width; width += denseness){
               pixel = imageData.data[((width + (height * bgCanvas.width)) * 4) - 1];
                  //Pixel is black from being drawn on.
                  if(pixel == 255) {
                    drawCircle(width, height);
                  }
            }
        }

        setInterval( update, 40 );
  }

  var drawCircle = function(x, y){

    var startx = (Math.random() * canvas.width);
    var starty = (Math.random() * canvas.height);

    var velx = (x - startx) / itertot;
    var vely = (y - starty) / itertot;

    parts.push(
      {c: '#' + (Math.random() * 0x949494 + 0xaaaaaa | 0).toString(16),
       x: x, //goal position
       y: y,
       x2: startx, //start position
       y2: starty,
       r: true, //Released (to fly free!)
       v:{x:velx , y: vely}
      }
    )
  }

  var update = function(){
    var i, dx, dy, sqrDist, scale;
    itercount++;
    clear();
    for (i = 0; i < parts.length; i++){

      //If the dot has been released
      if (parts[i].r == true){
        //Fly into infinity!!
        parts[i].x2 += parts[i].v.x;
            parts[i].y2 += parts[i].v.y;
      //Perhaps I should check if they are out of screen... and kill them?
      }
      if (itercount == itertot){
        parts[i].v = {x:(Math.random() * 6) * 2 - 6 , y:(Math.random() * 6) * 2 - 6};
        parts[i].r = false;
      }


      //Look into using svg, so there is no mouse tracking.
      //Find distance from mouse/draw!
      dx = parts[i].x - mouse.x;
          dy = parts[i].y - mouse.y;
          sqrDist =  Math.sqrt(dx*dx + dy*dy);

      if (sqrDist < 20){
        parts[i].r = true;
      }

      //Draw the circle
      context.fillStyle = parts[i].c;
      context.beginPath();
      context.arc(parts[i].x2, parts[i].y2, 4 ,0 , Math.PI*2, true);
      context.closePath();
        context.fill();

    }
  }

  var MouseMove = function(e) {
      if (e.layerX || e.layerX == 0) {
        //Reset particle positions
        mouseOnScreen = true;


          mouse.x = e.layerX - canvas.offsetLeft;
          mouse.y = e.layerY - canvas.offsetTop;
      }
  }

  var MouseOut = function(e) {
    mouseOnScreen = false;
    mouse.x = -100;
    mouse.y = -100;
  }

  //Clear the on screen canvas
  var clear = function(){
    context.fillStyle = '#333';
    context.beginPath();
      context.rect(0, 0, canvas.width, canvas.height);
    context.closePath();
    context.fill();
  }
}


export { Banner };

























// function Banner(){

//   var keyword = "Hi";
//   var canvas;
//   var context;

//   var bgCanvas;
//   var bgContext;

//   var denseness = 9;

//   //Each particle/icon
//   var parts = [];

//   var mouse = {x:0,y:0};
//   var mouseOnScreen = false;

//   var colors = ['rgba(250,250,250,0.8)', 'rgba(250,250,250,0.8)', 'rgba(250,250,250,0.8)', 'rgba(250,250,250,0.8)'];


// //When creating the particles, we assign a color from this list.
// color: colors[Math.floor(Math.random() * colors.length)],

//   this.initialize = function(canvas_id){
//     canvas = document.getElementById(canvas_id);
//     context = canvas.getContext('2d');

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     bgCanvas = document.createElement('canvas');
//     bgContext = bgCanvas.getContext('2d');

//     bgCanvas.width = window.innerWidth;
//     bgCanvas.height = window.innerHeight;

//     canvas.addEventListener('mousemove', MouseMove, false);
//     canvas.addEventListener('mouseout', MouseOut, false);

//     test();
//   }

//   var test = function(){

//     bgContext.fillStyle = "#123321";
//     bgContext.font = '300px impact';
//     bgContext.fillText(keyword, 40, 270);

//     clear();
//     getCoords();
//   }

//   var getCoords = function(){
//     var imageData, pixel, height, width;

//     imageData = bgContext.getImageData(0, 0, canvas.width, canvas.height);

//     // quickly iterate over all pixels - leaving density gaps
//       for(height = 0; height < bgCanvas.height; height += denseness){
//             for(width = 0; width < bgCanvas.width; width += denseness){
//                pixel = imageData.data[((width + (height * bgCanvas.width)) * 4) - 1];
//                   //Pixel is black from being drawn on.
//                   if(pixel == 255) {
//                     drawCircle(width, height);
//                   }
//             }
//         }

//         setInterval( update, 40 );
//   }

//   var drawCircle = function(x, y){
//     parts.push(
//       {c: colors[Math.floor(Math.random() * colors.length)],
//        x: x, //Original position
//        y: y,
//        x2: x, //Movable position
//        y2: y,
//        v:{x:(Math.random() * 3) * 2 - 3 , y:(Math.random() * 3) * 2 - 3},
//       }
//     )
//   }

//   var update = function(){
//     var i, dx, dy, sqrDist, scale;

//     clear();
//     for (i = 0; i < parts.length; i++){

//       if (mouseOnScreen == true){

//         parts[i].x2 += parts[i].v.x;
//             parts[i].y2 += parts[i].v.y;

//             if (parts[i].x2 > canvas.width || parts[i].x2 < 0) {
//                 parts[i].v.x = -parts[i].v.x;
//             }

//             if (parts[i].y2 > canvas.height || parts[i].y2 < 0) {
//                 parts[i].v.y = -parts[i].v.y;
//             }
//       } else {
//         parts[i].x2 = parts[i].x;
//         parts[i].y2 = parts[i].y;
//       }


//       //Look into using svg, so there is no mouse tracking.
//       //Find distance from mouse/draw!
//     dx = parts[i].x2 - mouse.x;
//           dy = parts[i].y2 - mouse.y;
//           sqrDist =  Math.sqrt(dx*dx + dy*dy);
//     scale = Math.max( Math.min( 6 - ( sqrDist / 10 ), 10 ), 1 );
//     //Draw the circle

//     context.fillStyle = parts[i].c;
//     context.beginPath();
//     context.arc(parts[i].x2, parts[i].y2, 4 * scale ,0 , Math.PI*2, true);
//     context.closePath();
//     context.fill();

//     }
//   }

//   var MouseMove = function(e) {
//       if (e.layerX || e.layerX == 0) {
//         //Reset particle positions
//         mouseOnScreen = true;


//           mouse.x = e.layerX - canvas.offsetLeft;
//           mouse.y = e.layerY - canvas.offsetTop;
//       }
//   }

//   var MouseOut = function(e) {
//     mouseOnScreen = false;
//     mouse.x = -200;
//     mouse.y = -200;

//   }

//   //Clear the on screen canvas
//   var clear = function(){
//     context.fillStyle = '#eee';
//     context.beginPath();
//       context.rect(0, 0, canvas.width, canvas.height);
//     context.closePath();
//     context.fill();
//   }
// }

