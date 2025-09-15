
//collect input data

//decide canvas from dimentions, 3d or 2d

function twoD_init(){ 
    //draw canvas using its dimentions for 2d
    //const canvas = document.querySelector("..") 
    const canvas = document.getElementById("...........");
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);
    const can = canvas.getContext("2d");
}

function threeD_init(){
    //initialise camera and scene for 3d
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75 , window.innerWidth / window.innerHeight , 0.1 , 1000);
    const render = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild( renderer.domElement );
}

