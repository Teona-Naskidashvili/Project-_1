// burger bar
let navigation = document.getElementById('navbarlist');
let togglenav = document.getElementById('toggleburger');
let burgerOne = document.getElementById('burgerOne');
let burgerTwo = document.getElementById('burgerTwo');
let burgerThree = document.getElementById('burgerThree');

togglenav.addEventListener('click', function() {
    navigation.classList.toggle('activeNav');
    burgerOne.classList.toggle('oneline');
    burgerTwo.classList.toggle('twoline');
    burgerThree.classList.toggle('threeline');
});
// slider

let data = [
    {
      id : 1,
      imageurl : "https://www.ge-catering.nu/uploads/LcfoARCu/767x0_2560x0/1800_shutterstock_74171587.jpg",
      url : "https://georgian-house.ge/",
      title : "photo - 1"

    },
    {
      id : 2,
      imageurl : "https://www.wallpaperup.com/uploads/wallpapers/2015/07/24/761338/cd137eb016900a29af183ee99e64c3ac.jpg",
      title : "photo - 2"
    },
    {
      id : 3,
      imageurl : "https://assets.entrepreneur.com/content/3x2/2000/20160607153126-coffee-cafe-breaks-food-eating-espresso-restaurant-relaxation.jpeg",
      url : "https://georgian-house.ge/",
      title : "photo - 3"
    },
    {
      id : 4,
      imageurl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
      url : "https://georgian-house.ge/",
      title : "photo - 4"
    }
];


let leftbotton =document.getElementById("arow-left");
let rightboton = document.getElementById("arow-right");
let slidercontent = document.getElementById("slider-content");
let dotlist = document.getElementsByClassName("dot");

let sliderelement = 0;

function createatag(x){
    let atag = document.createElement("a");
    atag.setAttribute("href", x.url);
    atag.classList.add("slider");
    return atag;
}

function createimg (x){

  slidercontent.style.backgroundImage = 'url('+ x.imageurl +')';
  slidercontent.classList.add('image-slider');
}

function createdots (item){
  let dots = document.createElement("div");
  dots.classList.add("dots");
  data.forEach( (elements) =>{
    let dot =document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("data-id", elements.id - 1 );


    dot.onclick = function(event){
      let id = event.target.getAttribute("data-id");
      sliderelement=id;
      setslide();
    }
    dots.appendChild(dot);

  })
  return(dots);
}

function setslide () {
  slidercontent.innerHTML = " ";
  let xatag = createatag (data[sliderelement]);
  let ximgtag = createimg(data[sliderelement]);
  let dots=createdots();

  // xatag.appendChild(ximgtag);
  slidercontent.appendChild(xatag);
  slidercontent.appendChild(dots);

  dotsslide();
  console.log(setslide);
  
}


function dotsslide (){
  dotlist[sliderelement].classList.add("active");
}

function leftclick() {
  if(sliderelement <= 0){
    sliderelement = data.length - 1;
    setslide();
    return;
  }
  sliderelement--;
  setslide();
}
function rightclick() {
  if(sliderelement >= data.length - 1){
    sliderelement = 0;
    setslide();
    return;
  }
  sliderelement++;
  setslide();

};

leftbotton.addEventListener("click", leftclick);

rightboton.addEventListener("click", rightclick);

setInterval(() => {
  rightclick();
}, 3000);

setslide();











   


