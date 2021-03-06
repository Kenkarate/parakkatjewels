import React from 'react'


function Slider() {
  return (
    <div><div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" style={{height: "50rem",width:"40rem"}} src="https://i0.wp.com/parakkatjewels.com/wp-content/uploads/2022/02/18-INSTA-scaled.webp?resize=1080%2C1080&ssl=1" alt="First slide"></img>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" style={{height: "50rem",width:'60vm'}} src="https://i0.wp.com/parakkatjewels.com/wp-content/uploads/2022/02/17-SITE.webp?resize=1536%2C1536&ssl=1" alt="Second slide"></img>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" style={{height: "50rem",width:'60vm'}} src="https://i0.wp.com/parakkatjewels.com/wp-content/uploads/2022/02/14-SITE.webp?resize=1536%2C1536&ssl=1" alt="Third slide"></img>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div></div>
  )
}

export default Slider