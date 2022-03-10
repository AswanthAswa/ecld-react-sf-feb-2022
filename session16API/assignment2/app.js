const IMGPATH = "https://image.tmdb.org/t/p/w1280";


window.addEventListener('load', function(){
    var btn=document.getElementById('btn');
    btn.addEventListener('click', getMovies);
})


function getMovies() {
    var input= document.getElementById('search').value;
    console.log(input);
    var xhr= new XMLHttpRequest();
    xhr.open("GET",`https://api.themoviedb.org/3/search/movie?&api_key=cf0a540583c3e531468284c796edfa9d&query=${input}` );
    //xhr.setRequestHeader('content-type','application/json; charset=utf-8');
    xhr.send();
    xhr.onload = function(){
        // console.log(JSON.parse(this.response).results);
        
        var response=JSON.parse(this.response).results;
        var moviesList= document.getElementById('moviesList');
        for(var i=0; i<response.length; i++){

        var el = document.createElement('div');
        var image = document.createElement('img');
        image.src = IMGPATH + response[i].poster_path;
        var text = document.createElement('h2');
        text.innerHTML=  response[i].original_title;

        el.appendChild(image);
        el.appendChild(text);
        moviesList.appendChild(el);

        }
        }
    }
    