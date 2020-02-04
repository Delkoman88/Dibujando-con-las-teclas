var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var colorElegido = document.getElementById("colorUsuario");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
var xi, yi, xf, yf;
dibujarLinea("red", 149, 149, 151, 151);
cuadrito.addEventListener("mousedown", apretarClick);
cuadrito.addEventListener("mouseup", soltarClick);
cuadrito.addEventListener("mousemove", moverClick);
var apretar = false;
console.log(colorElegido);
function apretarClick(evento)
  {
    apretar = true;
  }
  function moverClick(evento)
      {
        var xi = evento.offsetX;
        var yi = evento.offsetY;
        var xf =  xi + evento.movementX + 1;
        var yf = yi + evento.movementY + 1;
        if (apretar == true)
          {
            dibujarLinea("green", xi, yi, xf, yf);
          }
      }
function soltarClick(evento)
  {
    console.log(evento);
    apretar = false;
  }
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
  {
    papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = 4;
    papel.moveTo(xinicial, yinicial);
    papel.lineTo(xfinal, yfinal);
    papel.stroke();
    papel.closePath();
  }
function dibujarTeclado(evento)
{
  var colorcito = "green";
  var movimiento = 1;
  if(evento.keyCode == teclas.UP)
  {
    dibujarLinea(colorcito, x, y, x, y - movimiento);
    y = y - movimiento
  }
  switch(evento.keyCode)
  {
    case teclas.RIGHT:
    dibujarLinea(colorcito, x, y, x + movimiento, y);
    x = x + movimiento;
    break;
    case teclas.LEFT:
    dibujarLinea(colorcito, x, y, x - movimiento, y);
    x = x - movimiento;;
    break;
    case teclas.DOWN:
    dibujarLinea(colorcito, x, y, x, y + movimiento);
    y = y + movimiento;
    break;
    default:
      console.log("otra tecla");
    }
}
