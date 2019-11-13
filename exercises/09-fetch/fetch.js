/** An Example of the response you will receive when making an Http request
 * https://dog.ceo/api/breeds/image/random
 *
 * {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
    }
 *
 * 
 * 
 */
const button = document.querySelector ('button');
button.addEventListener('click',() => {
   fetch("https://dog.ceo/api/breeds/image/random")
   .then(response => response.json())
   .then(response => {
      const image = document.querySelector ("#image");
      image.src = response.message;
   })
   .catch(err => console.error(err));
});

/**
 * As a user, I should be able to click on the a button to see random dog images
 * Please use Fetch in this Example
 *
 */
const select = document.querySelector ("#dropdown");
const getAxionsRequest = (url,callback) =>
{
   getAxionsRequest({
      method: 'get',
      url :url
   })
   const populatedropdown = response => {
      const data = response.data.results;
      data.forEach((char)=> {
         const name = document.createElement('option');
         name.value = char.id;
         name.textContent = char.name;
         select.addEventListener(name.null);
      });
   };

   const loadcharacter = response => {
      const char = response.data;
      const img = document.querySelector('#get-scwifty');
      const name = document.querySelector('#little-head');
      const origin = document.querySelector('#photo-caption');
      img.src = char.image;
      name.textContent = char.name;
      origin.textContent = char.origin.name;
   };
   getAxionsRequest('https://rickandmortyapi.com/api/character', populatedropdown);


}
