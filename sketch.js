let piso, retrato1, retrato2, retrato3,retrato4;
let mano, dia, cua, son, pas, nos, ojos, so1, hum, tw, men, prueba, leo, xyz, discurso, arb, fondo;
let text1;
let pagina;

function preload() {
  piso = loadImage("img/madera1.jpg");
  mano = loadImage("img/mano.jpg");
  dia = loadImage("img/diagrama.jpg");
  cua = loadImage("img/cuadrados.jpg");
  son = loadImage("img/sonidos.jpg");
  pas = loadImage("img/pasillo.jpg");
  nos = loadImage("img/nosotros.jpg");
  ojos = loadImage("img/ojos2.jpeg");
  son1 = loadImage("img/sonidosejemplo.jpg");
  hum = loadImage("img/humano.jpg");
  tw = loadImage("img/twitter.jpeg");
  men = loadImage("img/men.jpeg");
  prueba = loadImage("img/prueba1.png");
  leo = loadImage("img/leonardo1.jpeg");
  xyz = loadImage("img/xyz.jpeg");
  discurso = loadImage("img/discurso.png");
  arb = loadImage("img/arbol.png");
  fondo = loadSound("son/fondo.mp3");
  retrato1= loadImage("img/retrato1.png");
  retrato2= loadImage("img/retrato2.png");
  retrato3= loadImage("img/retrato3.png");
  retrato4= loadImage("img/retrato4.png");
  
}

function setup() {
  createCanvas(984, 728, WEBGL);
  noCursor();
  cam1 = createCamera();
  text1 = createGraphics(150, 150);
  text1.fill(255);
  text1.textAlign(CENTER);
  text1.textSize(20);
  text1.text("ojos.jpg", 100, 100);
  pagina=0;
  canvas = document.querySelector('canvas');
  canvas.addEventListener('contextmenu', botonDerecho);
}

function draw() {
  background(255);
  drawScene();
  firstPerson(cam1);
  if (frameCount > 150) {
    if      (pagina == 1){
                window.open("https://jeffercart.github.io/galeria/", "_top");} //galeria
    else if (pagina == 2){
               window.open("https://jeffercart.github.io/audios/", "_top");} //audio
    else if (pagina == 3) {
               window.open("https://jeffercart.github.io/cubos/", "_top");}//cubos
    }
}

function drawScene() {
  
  for(let i=-1000; i<=1000; i+=1000){
    for(let a=-1000; a<=1000; a+=1000){
  push();
  fill(200, 255, 200);
  noStroke();
  texture(piso);
  translate(a, 200, i);
  rotateX(PI / 2);
  plane(1000);
  pop();
  }
  }

  // imagen arbol
  push();
  noStroke();
  texture(arb);
  translate(0, -150, -500);
  plane(1000);
  pop();

  // imagen ojo
  push();
  noStroke();
  texture(dia);
  translate(200, -100, 700);
  plane(200);
  pop();
  //imagen 2
  push();
  noStroke();
  texture(cua);
  translate(200, -100, 1200);
  plane(200);
  pop();

  // imagen 3
  push();
  noStroke();
  texture(mano);
  translate(700, -100, 1200);
  plane(200);
  pop();

  // imagen 4
  push();
  noStroke();
  texture(pas);
  translate(1200, -100, 1200);
  plane(200);
  pop();

  // imagen 5
  push();
  noStroke();
  texture(nos);
  translate(1200, -100, 200);
  plane(200);
  pop();


  // imagen 6
  push();
  noStroke();
  texture(hum);
  translate(700, -100, 200);
  plane(200);
  pop();

  // imagen 7
  push();
  noStroke();
  texture(son1);
  translate(700, -100, -300);
  plane(200);
  pop();

  // imagen 8
  push();
  noStroke();
  texture(tw);
  translate(1200, -100, -300);
  plane(200);
  pop();

  // imagen 9
  push();
  noStroke();
  texture(men);
  translate(-300, -100, 1200);
  plane(200);
  pop();

  // imagen 10
  push();
  noStroke();
  texture(prueba);
  translate(-300, -100, 700);
  plane(200);
  pop();

  //imagen 11
  push();
  noStroke();
  texture(son);
  translate(700, -100, 700);
  plane(200);
  pop();
  
  // imagen 12
  push();
  noStroke();
  texture(xyz);
  translate(200, -100, 200);
  plane(200);
  pop();
  
  push();
  noStroke();
  texture(retrato1);
  translate(1200, -100, -1000);
  plane(200);
  pop();
  
  push();
  noStroke();
  texture(retrato2);
  translate(600, -100, -1000);
  plane(200);
  pop();
  
  push();
  noStroke();
  texture(retrato3);
  translate(0, -100, -1000);
  plane(200);
  pop();
  
  push();
  noStroke();
  texture(retrato4);
  translate(-600, -100, -1000);
  plane(200);
  pop();
  
}

function mouseClicked() {
  if ( mouseButton == LEFT)
  
  {fondo.setVolume(0.08);
  fondo.loop();
  }

}

function firstPerson(cam){
  cam.firstPersonState = cam.firstPersonState || {
    azimuth: -atan2(cam.eyeZ - cam.centerZ, cam.eyeX - cam.centerX),
    zenith: -atan2(cam.eyeY - cam.centerY, dist(cam.eyeX, cam.eyeZ, cam.centerX, cam.centerZ)),
    lookAtDist: dist(cam.eyeX, cam.eyeY, cam.eyeZ, cam.centerX, cam.centerY, cam.centerZ),
    mousePrevX: mouseX,
    mousePrevY: mouseY
  }
  
  // Look around controls
  cam.firstPersonState.azimuth -= (mouseX - cam.firstPersonState.mousePrevX) / 100;
  if(abs(cam.firstPersonState.zenith + (mouseY - cam.firstPersonState.mousePrevY) / 100) < PI/2) cam.firstPersonState.zenith += (mouseY - cam.firstPersonState.mousePrevY) / 100;
  
  // Movement controls
  if(keyIsPressed && keyCode == 87 || keyIsDown(UP_ARROW)){
    cam.eyeX -= 10 * cos(cam.firstPersonState.azimuth)
    cam.eyeZ += 10 * sin(cam.firstPersonState.azimuth)
  }
  if(keyIsPressed && keyCode == 83 || keyIsDown(DOWN_ARROW)){
    cam.eyeX += 10 * cos(cam.firstPersonState.azimuth)
    cam.eyeZ -= 10 * sin(cam.firstPersonState.azimuth)
  }
  if(keyIsPressed && keyCode == 65 || keyIsDown(LEFT_ARROW)){
    cam.eyeX -= 10 * cos(cam.firstPersonState.azimuth + PI/2)
    cam.eyeZ += 10 * sin(cam.firstPersonState.azimuth + PI/2)
  }
  if(keyIsPressed && keyCode == 68 || keyIsDown(RIGHT_ARROW)){
    cam.eyeX += 10 * cos(cam.firstPersonState.azimuth + PI/2)
    cam.eyeZ -= 10 * sin(cam.firstPersonState.azimuth + PI/2)
  }
  
  // Update previous mouse position
  cam.firstPersonState.mousePrevX = mouseX;
  cam.firstPersonState.mousePrevY = mouseY;
  
  // Update the look-at point
  cam.centerX = cam.eyeX - cam.firstPersonState.lookAtDist * cos(cam.firstPersonState.zenith) * cos(cam.firstPersonState.azimuth);
  cam.centerY = cam.eyeY + cam.firstPersonState.lookAtDist * sin(cam.firstPersonState.zenith);
  cam.centerZ = cam.eyeZ + cam.firstPersonState.lookAtDist * cos(cam.firstPersonState.zenith) * sin(cam.firstPersonState.azimuth);
  
  // Call the built in p5 function 'camera' to position and orient the camera
  camera(cam.eyeX, cam.eyeY, cam.eyeZ,  // position
         cam.centerX, cam.centerY, cam.centerZ,  // look-at
         0, 1, 0)  // up vector
}

function botonDerecho(event) {
  // Evitar que aparezca el menú contextual del botón derecho del mouse
  event.preventDefault();

  // cuando se hace clic con el botón derecho pagina cambia por un numero random entero entre 1 y 3
  pagina = floor(random(4));
}

