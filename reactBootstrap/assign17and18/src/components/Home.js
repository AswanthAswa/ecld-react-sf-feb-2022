import React from "react";
import "./Home.css";
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
  return (
    <div>
    <div className="home-container"> 
  <Carousel>
  <Carousel.Item>
  <img id="homeImg1" src="home.jpg" alt=""></img>
  </Carousel.Item>

  <Carousel.Item>
  <img id="homeImg2" src="happy.jpg" alt=""></img>
  </Carousel.Item>
  
  <Carousel.Item>
  <img id="homeImg3" src="teamHands.jpg" alt=""></img>
  </Carousel.Item>
  
</Carousel>
 
       
        <div class="grid-home1">
        <div class="home1-item1">
            <div className="item">Smart Interactive Classes</div>
            <div>
              <p className="data">
                Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...
              </p>
            </div>
          </div>

          <div class="home1-item1">
            <div className="item">360° Learning Programmes</div>
            <div>
              <p className="data">
                Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...
              </p>
            </div>
          </div>

          <div class="home1-item1">
          <div className="item">Experienced Faculty Members</div>
          <div>
            <p className="data">
              Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
              lorem amet elitr vero...
            </p>
          </div>
        </div>

          <div class="home1-item1">
            <div className="item">Play Ground</div>
            <div>
              <p className="data">
                Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...
              </p>
            </div>
          </div>
          
          <div class="home1-item1">
            <div className="item">Arts and Crafts</div>
            <div>
              <p className="data">
                Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...
              </p>
            </div>
          </div>

          <div class="home1-item1">
            <div className="item">Safe Transportation</div>
            <div>
              <p className="data">
                Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};