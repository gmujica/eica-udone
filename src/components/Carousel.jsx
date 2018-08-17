import React, {Component} from 'react';

class Carousel extends Component {
    render() {
        return (
            <div id="Carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="imgCarousel" src={require('../img/udo.jpg')} width="100%" height="400" />
                    </div>
                    <div className="carousel-item">
                        <img className="imgCarousel" src={require('../img/pexels.jpeg')} width="100%" height="400" />
                    </div>
                    <div className="carousel-item">
                        <img className="imgCarousel" src={require('../img/edificio.jpg')} width="100%" height="400" />
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
            </div>
        );
    }
}
export default Carousel
