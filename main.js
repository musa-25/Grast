//collect input data
let duminx = [1,2,3,4,5];
let duminy = [10,13,3,100,5]//[102,105,104,107,100];
let skipp = 0;
//decide canvas from dimentions, 1d, 2d, or 3d
let dim = 1
let scaleY = 1;//Math.max.apply(null,duminy);
let scaleX = 1;//Math.max.apply(null,duminx); 


//draw canvas using its dimentions for 2d
const canvas = document.querySelector(".target") 
//const canvas = document.getElementById(".target");
const width = (canvas.width = window.innerWidth); // remove if formats correctly
const gwidth = width*.9;
const height = (canvas.height = window.innerHeight);
const gheight = height*.9;
const can = canvas.getContext("2d");


/* +++++++++++++++++++++MAKE SEPERATE FILE FOR 3D++++++++++++++++++++++++++++++++++++++++++++++++++++++
//initialise camera and scene for 3d
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75 , window.innerWidth / window.innerHeight , 0.1 , 1000);
const render = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );
*/
function Scale_It(){
    scaleY= (1 / Math.max.apply(null,duminy))*gheight;
  //console.log(scaleY);
}//let scale = gheight/y.length;

function init_Twod(){
    // creates graph space to scale with window
    can.fillStyle = "white";
    can.fillRect(0, 0, width, height);
    
    //one axis matters for scaling y in bar graph
    can.fillStyle="rgb(244, 244, 244, 1)"//hollow grey for inner graph ortion
    can.fillRect( width*.05, height*.05, width*.90, height*.90);
    can.moveTo(width*.05, height*.05); //100,0
    can.lineTo(width*.05, height*.95); //0,0
    can.lineTo(width*.95, height*.95); //100,0
    can.stroke();
}

function draw_bar(dataX, dataY){ //data will have been pre formatted for graphing
    can.fillStyle = "blue"
    can.fillRect(dataX-5,(gheight+height*.05), 10, -dataY);
}

function bar_graph(x,y){
    //length of x divided by width to get position
    //y sized to graph scale
    init_Twod();
    for (let i = 1; i <= x.length; i++){
        draw_bar((i*gwidth/(x.length+1)+width*.05), y[i-1]*scaleY);
    }
}
Scale_It();
bar_graph(duminx,duminy);

