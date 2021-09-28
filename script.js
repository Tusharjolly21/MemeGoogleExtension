let image = document.getElementById('image');
let button = document.getElementById('button');
button.addEventListener('click',function(){
    fetch('https://meme-api.herokuapp.com/gimme')
.then(data => data.json())
.then(jokeData => {
    image.src = jokeData.url;

}).catch(err=>console.log(err));

})
