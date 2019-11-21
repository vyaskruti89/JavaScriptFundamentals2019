/**
 * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
 *
 *
 *  Developer notes:
 *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
 *
 *
 * This is the API you will be using. The method will be GET.
 * https://ron-swanson-quotes.herokuapp.com/v2/quotes
 */
 let button = document.querySelector('button');

 const gneratedQuote = document.querySelector("#quote");
 button.addEventListener ('click', getData);
 // () =>{
   //  getData().then (response => {
     //    console.log(response);
       //  document.querySelector("#quote").textContent = response.data[0];
   //  })
// })
async function getData ( ) {
    let data = await oxios.get ("https://fonts.googleapis.com/css?family=Kavivanar|Syncopate");
    document.querySelector("#quote").textContent = response.data = 
    response.data[0];}
 
//const  getData = async () => {
  //  let data = await oxios.get ("https://fonts.googleapis.com/css?family=Kavivanar|Syncopate");

    //    return response
    //})//.then (response => response.text())
    //.then(response => response);
    //console.log(response);

    
   // const globaldata = await  asyncExample();
   // console.log(globaldata.data);
   
   
    //console.log(await getrequest());
 //return "finish";
};
