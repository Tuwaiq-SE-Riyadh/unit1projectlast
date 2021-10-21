
  api_key = "7f02befff719a0bbb116aa6e089a894d";
 BASE_URL = 'https://api.themoviedb.org/3';

 IMG_URL = 'https://image.tmdb.org/t/p/w500';

 movieList = document.querySelector('#movie-list1')
 movieList2 = document.querySelector('#movieList2')
 let cartMovies = []
//  const search = document.querySelector('.search')
// MYINPUT
 myInput=document.getElementById("input"),
//
myoutput=document.getElementById("divresult")

function search()
{

let number= myInput.value

var url = `https://api.themoviedb.org/3/search/movie?api_key=7f02befff719a0bbb116aa6e089a894d&query=`+number;
fetch(url)
    .then(response => response.json())
   .then(data =>  {
       let movies = data.results
      console.log(movies);
                    // return movies[i].title
                    // empty
                    movieList.innerHTML=""
                    for(var i=0; i< movies.length;i++){

                            
                        movieList.innerHTML += `
                               <div class="movie">
                                      <img src="${IMG_URL}/${movies[i].poster_path}" alt="">
                                      <h3">${movies[i].title}</h3>
                                     <div class="actions">
                                     <a class="add-to-cart" onclick="addMovie('${IMG_URL}/${movies[i].poster_path}',' ${movies[i].title}")'>Add to Cart</a>
                                     <div class="rate">${movies[i].vote_average}</div>
                                     </div>
                                  </div>
                         
                         
                                  `
                                        
                        
            
                
                    }
        
   
        
           
        }
            );
        

}
    
     



 function getMovies() {
     var url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}`;
     fetch(url)
         .then(response => response.json())
        .then(data =>  {
             let movies = data.results
             console.log(movies)

            for(var i=0; i<= movies.length;i++){
                movieList.innerHTML += `
                       <div class="movie">
                           <img src="${IMG_URL}/${movies[i].poster_path}" alt="">
                              <div class="title">${movies[i].title}</div>
                             <div class="info">
                              <h3>Movie Info</h3>
                              <p>${movies[i].overview}</p>
                              <p style="margin-top:20px"><span class="price"></span></p>
                              </div>
                              <div class="actions">
                             <a class="add-to-cart" onclick='addMovie("${movies[i].title}"," ${IMG_URL}/${movies[i].poster_path}")'>Add to Cart</a>
                             <div class="rate">${movies[i].vote_average}</div>
                             </div>
                          </div>
                         `
             
                         if (i >=3) {
                            break; 

                        
                    }

                }
              
        }    
         );
 }
 getMovies()
 function viewmore1(){
    var url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}`;
    fetch(url)
        .then(response => response.json())
       .then(data =>  {
            let movies = data.results
            console.log(movies)

            movieList.innerHTML=""
           for(var i=0; i<= movies.length;i++){
               movieList.innerHTML += `
                      <div class="movie">
                          <img src="${IMG_URL}/${movies[i].poster_path}" alt="">
                             <div class="title">${movies[i].title}</div>
                             
                            <div class="info">
                             <h3>Movie Info</h3>
                             <p>${movies[i].overview}</p>
                             <p style="margin-top:20px"><span class="price"></span></p>
                             </div>
                             <div class="actions">
                            <a class="add-to-cart" onclick='addMovie("${movies[i].title}"," ${IMG_URL}/${movies[i].poster_path}")'>Add to Cart</a>
                            <div class="rate">${movies[i].vote_average}</div>
                            </div>
                         </div>
                        `

 }
}
    
);
}

 function getMovies2() {
    var url = `https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=${api_key}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let movies = data.results
            console.log(movies)
            for (var i = 0; i < movies.length; i++) {
                movieList2.innerHTML += `
                        <div class="movie">
                            <img src="${IMG_URL}/${movies[i].poster_path}" alt="">
                            <div class="title">${movies[i].title}</div>
                            <div class="info">
                                <h3>Movie Info</h3>
                                <p>${movies[i].overview}</p>
                                <p style="margin-top:20px">Price : $<span class="price">200</span></p>
                            </div>
                            
                            <div class="actions">
                                <a class="add-to-cart" onclick='addMovie("${movies[i].title}","${IMG_URL}/${movies[i].poster_path}")'>Add to Cart</a>
                                <div class="rate">${movies[i].vote_average}</div>
                            </div>
                        </div>
                        `
                if (i > 2) {
                    break;
                }
            }
        });
}
getMovies2()
function viewmore2() {
    var url = `https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=${api_key}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let movies = data.results
            console.log(movies)
            movieList.innerHTML=""
            for (var i = 0; i < movies.length; i++) {
                movieList2.innerHTML += `
                        <div class="movie">
                            <img src="${IMG_URL}/${movies[i].poster_path}" alt="">
                            <div class="title">${movies[i].title}</div>
                            <div class="info">
                                <h3>Movie Info</h3>
                                <p>${movies[i].overview}</p>
                                <p style="margin-top:20px">Price : <span class="price">200</span></p>
                            </div>
                            
                            <div class="actions">
                                <a class="add-to-cart" onclick='addMovie("${movies[i].title}","${IMG_URL}/${movies[i].poster_path}")'>Add to Cart</a>
                            </div>
                            <div class="rate">${movies[i].vote_average}</div>
                        </div>
                        `
                 {
                
                }
            }
        });
}







//open&close cart

 document.querySelector('.cart-btn').onclick = function () {
    document.querySelector('.cart-box').classList.toggle('opened')
    document.querySelector('body').classList.toggle('fixed')
}
document.querySelector('.cart-box .close').onclick = function () {
    document.querySelector('.cart-box').classList.toggle('opened')
    document.querySelector('body').classList.toggle('fixed')
}




var cartForm = document.querySelector('.form form')
cartForm.onsubmit = function (e) {
    e.preventDefault()
    if (document.querySelector('.form form select').value == "0") {
        document.querySelector('.error').style.display="block";
        setTimeout(function(){ document.querySelector('.error').style.display="none"; }, 3000);
    } else {
        document.querySelector('.message').style.display="block";
        setTimeout(function(){ document.querySelector('.message').style.display="none"; }, 2000);
        cartForm.reset();
        document.querySelector('.cart-box').classList.toggle('opened')
        document.querySelector('body').classList.toggle('fixed')
    }
}


var button = document.querySelector('.form form button')



// add
function addMovie(title,img){

document.querySelector('.cart-box .items').innerHTML = `
                <div class="item">
                    <img src=${img} alt="">
                    <h3>${title}</h3>
                    
                </div>
            
            `
    document.querySelector('.cart-box').classList.toggle('opened')
    document.querySelector('body').classList.toggle('fixed')
}


var total = 0;
document.querySelector('.total .value').innerHTML = total;
document.querySelector('.sum .prices').onchange = function () {
    // alert(this.value, "Test")
    if (this.value == "100") {
        total = 100;
    } else if (this.value == "200") {
        total = 200;
    } else {
        total = 0;
    }
    document.querySelector('.total .value').innerHTML = total;
}





 















