import {url, button, section} from './main.js'
console.log(url)

function catImage(json){
    let photo= json[0].url;
 //  section.classlist.add("cats");
 
   let image = document.createElement('img');
   image.src=photo;
 // image.classlist.add("cat_image");
   image.alt=photo
   section.appendChild(image)
 }


async function getCatImage(){
    section.innerHTML=""
   try{
  
    const response = await fetch(url);
    console.log(response)
    const json = await response.json()
    console.log(json)
    return catImage(json)
  } catch(err) {
            console.log(err)
      }}
 button.addEventListener('click', getCatImage);