const url = document.querySelector("#url");
const topText = document.querySelector("#topText");
const bottomText = document.querySelector("#bottomText");
const submitButton = document.querySelector('.add');
const memeDiv = document.querySelector('div.memes');
const inputs = document.querySelectorAll('input'); 


//Create meme and clear page after added
submitButton.addEventListener("click",(e) => {
  e.preventDefault();
  if(url.value !== ''){
    createMeme(url.value, topText.value.toUpperCase(), bottomText.value.toUpperCase());
  }
  inputs.forEach(input => input.value = ''); 
})

//Create image & text and add to container
const createMemeImage = (url,container) => {
  const img = document.createElement('img');
  container.classList.add('container');
  img.setAttribute('src',url);
  container.append(img);
  return img;
}

//Create text divs and add to container
const addTextToMeme = (top,bottom,container) => {
  const topDiv = document.createElement('div');
  const bottomDiv = document.createElement('div');

  topDiv.innerText = top;
  bottomDiv.innerText = bottom;

  topDiv.classList.add('text','top');
  bottomDiv.classList.add('text','bottom');
  container.append(topDiv,bottomDiv);
}

const createDeleteButton = () => {
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.innerText = 'X';
  return deleteButton;
}

const createMeme = (url,top,bottom) => {
  const container = document.createElement('div');
  createMemeImage(url,container);
  addTextToMeme(top,bottom,container);
  const deleteBtn = createDeleteButton();
  container.append(deleteBtn);

  memeDiv.append(container);
}

//Remove meme when delete button clicked
memeDiv.addEventListener("click",(e) => {
  if(e.target.nodeName === "BUTTON"){
    let parentContainer = e.target.parentElement;
    parentContainer.remove();
  }
})

