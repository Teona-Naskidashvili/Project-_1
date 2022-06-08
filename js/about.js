
// create elemant
let MainWrapper = document.getElementById('posts-wrapper');
let OverlayContent = document.getElementById('overlay');
let CloseOverlay = document.getElementById('close');
let content = document.getElementById("content");

// get information  from server
function ajax(url , callback) {
    let requist = new XMLHttpRequest();
    requist.open('GET', url);
    requist.addEventListener('load', function() {
    let data = JSON.parse(requist.responseText);
    callback(data);
  });

  requist.send();

}

ajax('https://jsonplaceholder.typicode.com/posts', function(data){
  PrintData(data);
});

function PrintData(data){
  data.slice(0,6).forEach(element => {
    createPosts(element);
  });
}

function createPosts(item){
  let divWrapper = document.createElement('div');
  divWrapper.classList.add('posts');
  divWrapper.setAttribute('data-id', item.id);

  let h3tag = document.createElement('h3');
  h3tag.textContent = item.title;

  let DeleteButton = document.createElement('button');
  DeleteButton.innerText = 'Delete Post';
  DeleteButton.classList.add('DeleteButton');
  DeleteButton.setAttribute('data-id', item.id);

  divWrapper.appendChild(h3tag);
  divWrapper.appendChild(DeleteButton);



  divWrapper.addEventListener('click', function(event){
   let id = event.target.getAttribute('data-id');
   OpenOverlay(id);
  });

  DeleteButton.addEventListener('click', function(elemant){
    elemant.stopPropagation();
    
    divWrapper.classList.add('deletebt');
    let id = elemant.target.getAttribute('data-id');
    DeletePost(id);
  });

  MainWrapper.appendChild(divWrapper);
  console.log(divWrapper);

}
function OpenOverlay(id){
  OverlayContent.classList.add('active');
  let url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  ajax(url, function(data) {

    overlaydiv(data);

  });

  console.log(id);

}

function DeletePost(id){
  let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  fetch(url, {
  method: 'DELETE',
});

}

function overlaydiv(item){
  let overlaytitle = document.createElement("h3");
  overlaytitle.innerText = item.title;

  let description = document.createElement("p");
  description.innerText = item.body;

  content.appendChild(overlaytitle);
  content.appendChild(description);
}


CloseOverlay.addEventListener('click', function(){
  OverlayContent.classList.remove('active');
  content.innerHTML = '';
});


