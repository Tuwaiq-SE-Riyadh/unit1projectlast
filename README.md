# Project Title
movie ticket booking site
afflamy is :A site  to choosing and booking movie tickets

Simple overview of use/purpose.

## Description

An in-depth paragraph about your project and overview of use.

on the site , you can search for the movie you want to book,then read informaiton about it ,
and evaluting it ,this makes it easy fo ryou to choose movie 
provide add to cart and show message sucess if confirmed order .
responsive from diffrent sizes.

## Executing program

* The main file that needs to be done to execute the program
index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aflamy</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!--  -->
</header>
    <!-- Start Navbar -->
    <div class="top-nav">
      <a class="logo" href="#"><img src="images/Logo.png" alt=""></a>
      <a class="cart-btn"><img src="images/cart2.png" width="50" alt=""></a>
    </div>    
    


    <!-- Start Header -->
    <header>
      <div class="text">
        <h1>Iron Man <span>(2021)</span></h1>
        <div class="info"><span>2h 15m</span> <span>Action</span> <span>Adventure</span></div>
        <div class="desc">After being held captive in an Afghan cave, Billionair Engineer Tony Stark Creates a unique weaponized suit of armor to fight evil.</div>
      </div>
    </header>
    
    <!-- <div="search" >
        <input type="text"  id ="input" placeholder="Search"  class="searchi">
        <button onclick="search()" >submit</button>
      </div> -->
  
    <!-- section movies -->
    <section class="movies">
      <div="search" >
        <input type="text"  id ="input" placeholder="Search"  class="searchi">
        <button onclick="search()" >submit</button>
      </div>

      <div class="list-head">
        <h2>Popular Movies</h2>
        <a   clas= "Viewmore1" onclick="viewmore1(`Dune`)">View More</a>
      </div> 
      <div id="movie-list1" class="movie-list">
        <!-- <div class="movie">
          <img src="images/iron.jpg" alt="">
          <div class="title">Film Title</div>
          <div class="overview">
            After being held captive in an Afghan cave, Billionair Engineer Tony Stark Creates a unique weaponized suit of armor to fight evil.</div>
      </div>
          <div class="actions">
            <a href="" class="add-to-cart">Show Time</a>
            <a href="" class="add-to-cart">Add to Cart</a>
          </div>
        </div>
        <div class="movie">
          <img src="images/iron.jpg" alt="">
          <div class="title">Film Title</div>
          <div class="overview">
            After being held captive in an Afghan cave, Billionair Engineer Tony Stark Creates a unique weaponized suit of armor to fight evil.</div>
      </div>
          <div class="actions">
            <a href="" class="add-to-cart">Show Time</a>
            <a href="" class="add-to-cart">Add to Cart</a>
          </div>
        </div>
        <div class="movie">
          <img src="images/iron.jpg" alt="">
          <div class="title">Film Title</div>
          <div class="overview">
            After being held captive in an Afghan cave, Billionair Engineer Tony Stark Creates a unique weaponized suit of armor to fight evil.</div>
      </div>
          <div class="actions">
            <a href="" class="add-to-cart">Show Time</a>
            <a href="" class="add-to-cart">Add to Cart</a>
          </div>
        </div>
        <div class="movie">
          <img src="images/iron.jpg" alt="">
          <div class="title">Film Title</div>
          <div class="overview">
            After being held captive in an Afghan cave, Billionair Engineer Tony Stark Creates a unique weaponized suit of armor to fight evil.</div>
      </div>
          <div class="actions">
            <a href="" class="add-to-cart">Show Time</a>
            <a href="" class="add-to-cart">Add to Cart</a>
          </div>
        </div> -->
      </div>
      <div class="list-head">
        <h2>Now Playing Movies</h2>
        <a onclick= "viewmore2()">View More</a>
      </div>
      
      <div id="movieList2" class="movie-list"></div>
    </section>


    <footer>
      <div class="cols">
        <!-- <div class="col">
          <a href="">Home</a><a href="">Contact Us</a><a href="">Terms of service</a><a href="">About Us</a>
        </div>
        <div class="col">
          <a href="">Live</a><a href="">FAQ</a><a href="">Premium</a><a href="">Privacy Policy</a>
        </div>
        <div class="col">
          <a href="">Popular</a><a href="">Recently Released</a><a href="">250 IMDB</a><a href="">Advertise with us</a>
        </div> -->
        <div class="col2">
          <img src="images/Logo.png" alt="">
          <p class="lead">Aflamy is the world's leading community for creators to share, grow, and get hired.</p>
        </div>
      </div>
          

        <div class="last">
          AFLAMY all Copyrights &copy; are Reserved 2021
        </div>
    </footer>

    <!-- The Cart -->
    <div class="cart-box">
      <span class="close">&times;</span>
      <!-- <div class="message">sucess</div>
      <div class="error">please choose price</div> -->

      <h2>Shopping Cart</h2>
      <div>
        <div class="items">
         
        </div>
        <div class="form">
          <form>
            <div class="">
              <label for="">Choose The Day</label>
              <input type="date" required name="" id="">
            </div>
            <div>
              <label for="">Choose the time</label>
              <select>
                <option value="0">-- Choose the time--</option>
                <option value="1:45am">1:45am</option>
                <option value="8:30:00pm">9:00pm</option>
                <option value="9:00pm">9:00pm</option>
                <option value="11:00pm">11:00pm</option>
              </select>
              <!-- <input type="time" required name="" id=""> -->
            </div>
            <div>
              <label for=""> pay method</label>
              <select>
                <option value="0">-- pay method--</option>
                <option value="card">card</option>
                <option value="cash">cash</option>
                
              </select>
              <!-- <input type="time" required name="" id=""> -->
            </div>
            <div class ="sum">
              <label for="">Choose the price</label>
              <select class="prices" onchange="document.querySelector('.total .value').innerHTML=this.value"> 
                <option value="0">-- Choose the Price--</option>
                <option value="200">VIP= 200SR</option>
                <option value="100"> other= 100SR</option>
              </select>

            </div>
            <button type="submit">Confirm Order</button>
            <!-- <button type="submit">Clear Order</button> -->

          </form>
          
        </div>
      </div>
      <div class="total">
        <h2>Total :  <span class="value"></span></h2>
      </div>
      
    </div>


    <!-- Messages -->
    <div class="message">Your request applied successfully</div>
    <div class="error">Please Choose The Price</div>
    <script src="js/main.js"></script>
</body>
</html>  

      
```

## The used API
use api=  https://developers.themoviedb.org/3/search/search-movies

api to view movie contain diffrent types of url

