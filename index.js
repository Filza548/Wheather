document.write ( "<nav class='navbar navbar-expand-lg navbar-light bg-light fixed-bottom'>"+
    "<div class='container-fluid'>" +
      "<a class='navbar-brand fw-bold fs-1' href='#'>" + "CheckWiz" + "</a>"+
      "<button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>" +
        "<span class='navbar-toggler-icon'>"+"</span>" +
      "</button>"+
      "<div class='collapse navbar-collapse' id='navbarSupportedContent'>"+
        "<ul class='navbar-nav px-3 fs-3 mb-lg-0'>"+
          "<li class='nav-item mx-2 fw-bold'>"+
            "<a class='nav-link active' aria-current='page' href='#'>" + "Karchi" + "</a>" +
          "</li>" +

          "<li class='nav-item mx-2 fw-bold'>"+
           "<a class='nav-link active' aria-current='page' href='#'>" + "Lahore" + "</a>" +
          "</li>"+

          "<li class='nav-item mx-2 fw-bold'>"+
            "<a class='nav-link active' aria-current='page' href='#'>"+ "Islamabad" + "</a>" +
          "</li>" +

          "<li class='nav-item mx-2 fw-bold'>" +
            "<a class='nav-link active' aria-current='page' href='#'>" + "Murree" + "</a>" +
          "</li>" +

          "<li class='nav-item mx-2 fw-bold'>"+
            "<a class='nav-link active' aria-current='page' href='#'>" + "Quetta" + "</a>" +
          "</li>" +

          "<li class='nav-item mx-2 fw-bold'>" +
            "<a class='nav-link active' aria-current='page' href='#'>" + "Peshawar" + "</a>"+
          "</li>"+

          "<li class='nav-item mx-2 fw-bold'>" +
            "<a class='nav-link active' aria-current='page' href='#'>" + "Naran" + "</a>"+
          "</li>"+

          "<li class='nav-item mx-2 fw-bold'>" +
          "<a class='nav-link active' aria-current='page' href='#'>" + "Skardu" + "</a>"+
        "</li>"+
    
        "</ul>"+
        
      "</div>" +
    "</div>" +
  "</nav>")

  let userInp =prompt("Enter Your city name & check your city weather")

  if (userInp.toLocaleLowerCase() === "karachi"){
    document.write(` <div class="container">
    <div class="row">
      <div class="col-sm d-flex justify-content-center align-items-center p-5">
<div class="main d-flex justify-content-center align-items-center flex-column">
        <div class="first" style="width: 150px; height: 150px; border-radius: 50%; overflow: hidden;">
          <img src="assets/images/59916196-99ce-4e56-846b-15cde8e82423.webp" alt="">
        </div>

        <div class="second">

          <div class="sec-child1 mt-4" style="width: 250px; height: 60px; text-align: center;"><h1 class="fw-normal" style="color: white; text-align: center;">27&deg;C</h1></div>
          <div class="sec-child2" style="width: 250px; height: 60px; text-align: center;">
            <h2 class="text-white ">Karachi</h2>
          </div>
          <div class="sec-child3" style="width: 250px; height: 60px;text-align: center;">
            <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          

        </div>
      </div>
      </div>
    </div>
  </div>`)
    }else if (userInp.toLocaleLowerCase() === "lahore"){
      document.write(` <div class="container">
    <div class="row">
      <div class="col-sm d-flex justify-content-center align-items-center p-5">
<div class="main-1 d-flex justify-content-center align-items-center flex-column">
        <div class="first" style="width: 150px; height: 150px; border-radius: 50%; overflow: hidden;">
          <img src="assets/images/lahore.webp" alt="">
        </div>

        <div class="second">

          <div class="sec-child1 mt-4" style="width: 250px; height: 60px; text-align: center;"><h1 class="fw-normal" style="color: white; text-align: center;">22&deg;C</h1></div>
          <div class="sec-child2" style="width: 250px; height: 60px; text-align: center;">
            <h2 class="text-white ">Lahore</h2>
          </div>
          <div class="sec-child3" style="width: 250px; height: 60px;text-align: center;">
            <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          

        </div>
      </div>
      </div>
    </div>
  </div>`)
    }else if (userInp.toLocaleLowerCase() === "islamabad"){
      document.write(` <div class="container">
    <div class="row">
      <div class="col-sm d-flex justify-content-center align-items-center p-5">
<div class="main-1 d-flex justify-content-center align-items-center flex-column">
        <div class="first" style="width: 150px; height: 150px; border-radius: 50%; overflow: hidden;">
          <img src="assets/images/islamabd.webp" alt="">
        </div>

        <div class="second">

          <div class="sec-child1 mt-4" style="width: 250px; height: 60px; text-align: center;"><h1 class="fw-normal" style="color: white; text-align: center;">20&deg;C</h1></div>
          <div class="sec-child2" style="width: 250px; height: 60px; text-align: center;">
            <h2 class="text-white ">Islamabad</h2>
          </div>
          <div class="sec-child3" style="width: 250px; height: 60px;text-align: center;">
            <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          

        </div>
      </div>
      </div>
    </div>
  </div>`)
    }else if (userInp.toLocaleLowerCase() === "murree"){
      document.write(`<div class="container">
    <div class="row">
      <div class="col-sm d-flex justify-content-center align-items-center p-5">
<div class="main-1 d-flex justify-content-center align-items-center flex-column">
        <div class="first" style="width: 150px; height: 150px; border-radius: 50%; overflow: hidden;">
          <img src="assets/images/Muree.webp" alt="">
        </div>

        <div class="second">

          <div class="sec-child1 mt-4" style="width: 250px; height: 60px; text-align: center;"><h1 class="fw-normal" style="color: white; text-align: center;">9&deg;C</h1></div>
          <div class="sec-child2" style="width: 250px; height: 60px; text-align: center;">
            <h2 class="text-white ">Murree</h2>
          </div>
          <div class="sec-child3" style="width: 250px; height: 60px;text-align: center;">
            <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          

        </div>
      </div>
      </div>
    </div>
  </div>`)
    }else if (userInp.toLocaleLowerCase() === "quetta"){
      document.write(`<div class="container">
    <div class="row">
      <div class="col-sm d-flex justify-content-center align-items-center p-5">
<div class="main-1 d-flex justify-content-center align-items-center flex-column">
        <div class="first" style="width: 150px; height: 150px; border-radius: 50%; overflow: hidden;">
          <img src="assets/images/quetta.webp" alt="">
        </div>

        <div class="second">

          <div class="sec-child1 mt-4" style="width: 250px; height: 60px; text-align: center;"><h1 class="fw-normal" style="color: white; text-align: center;">13&deg;C</h1></div>
          <div class="sec-child2" style="width: 250px; height: 60px; text-align: center;">
            <h2 class="text-white ">Quetta</h2>
          </div>
          <div class="sec-child3" style="width: 250px; height: 60px;text-align: center;">
            <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          

        </div>
      </div>
      </div>
    </div>
  </div>`)
    }else if (userInp.toLocaleLowerCase() === "peshawar"){
      document.write(` <div class="container">
    <div class="row">
      <div class="col-sm d-flex justify-content-center align-items-center p-5">
<div class="main-1 d-flex justify-content-center align-items-center flex-column">
        <div class="first" style="width: 150px; height: 150px; border-radius: 50%; overflow: hidden;">
          <img src="assets/images/peshawar.webp" alt="">
        </div>

        <div class="second">

          <div class="sec-child1 mt-4" style="width: 250px; height: 60px; text-align: center;"><h1 class="fw-normal" style="color: white; text-align: center;">16&deg;C</h1></div>
          <div class="sec-child2" style="width: 250px; height: 60px; text-align: center;">
            <h2 class="text-white ">Peshawar</h2>
          </div>
          <div class="sec-child3" style="width: 250px; height: 60px;text-align: center;">
            <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          

        </div>
      </div>
      </div>
    </div>
  </div>`)
    }else if (userInp.toLocaleLowerCase() === "naran"){
      document.write(`<div class="container">
    <div class="row">
      <div class="col-sm d-flex justify-content-center align-items-center p-5">
<div class="main-1 d-flex justify-content-center align-items-center flex-column">
        <div class="first" style="width: 150px; height: 150px; border-radius: 50%; overflow: hidden;">
          <img src="assets/images/naran.webp" alt="">
        </div>

        <div class="second">

          <div class="sec-child1 mt-4" style="width: 250px; height: 60px; text-align: center;"><h1 class="fw-normal" style="color: white; text-align: center;">5&deg;C</h1></div>
          <div class="sec-child2" style="width: 250px; height: 60px; text-align: center;">
            <h2 class="text-white ">Naran</h2>
          </div>
          <div class="sec-child3" style="width: 250px; height: 60px;text-align: center;">
            <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          

        </div>
      </div>
      </div>
    </div>
  </div>
  `)
    }else if (userInp.toLocaleLowerCase() === "skardu"){
      document.write(` <div class="container">
    <div class="row">
      <div class="col-sm d-flex justify-content-center align-items-center p-5">
<div class="main-1 d-flex justify-content-center align-items-center flex-column">
        <div class="first" style="width: 150px; height: 150px; border-radius: 50%; overflow: hidden;">
          <img src="assets/images/skardu.webp" alt="">
        </div>

        <div class="second">

          <div class="sec-child1 mt-4" style="width: 250px; height: 60px; text-align: center;"><h1 class="fw-normal" style="color: white; text-align: center;">10&deg;C</h1></div>
          <div class="sec-child2" style="width: 250px; height: 60px; text-align: center;">
            <h2 class="text-white ">Skardu</h2>
          </div>
          <div class="sec-child3" style="width: 250px; height: 60px;text-align: center;">
            <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          

        </div>
      </div>
      </div>
    </div>
  </div>`)
    }else{
      document.write(`<div class="container">
    <div class="row">
      <div class="col-sm d-flex justify-content-center align-items-center p-5">
<div class="main-1 d-flex justify-content-center align-items-center flex-column">
        <div class="first" style="width: 150px; height: 150px; border-radius: 50%; overflow: hidden;">
          <img src="assets/images/sorry.webp" alt="">
        </div>

        <div class="second">

          <div class="sec-child1 mt-4" style="width: 250px; height: 60px; text-align: center;"><h1 class="fw-normal" style="color: white; text-align: center;">0&deg;C</h1></div>
          <div class="sec-child2" style="width: 250px; height: 60px; text-align: center;">
            <h2 class="text-white ">Not Available</h2>
          </div>
          <div class="sec-child3" style="width: 250px; height: 60px;text-align: center;">
            <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          

        </div>
      </div>
      </div>
    </div>
  </div>`)
    }


