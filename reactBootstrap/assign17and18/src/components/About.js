import React from "react";
import "./About.css";
import {Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const About = () => {
  return (
    <div>
      <div >
       <img id="aboutImg1" src="about_bg.jpg" alt=""></img>

      </div>
      <div className="aboutImg2-div">
       <img id="aboutImg2" src="class.png" alt=""></img>

      </div>
      <div className='scholarship'>
        <h3 className="scholar-title">Scholarship FAQ</h3>
        <Accordion defaultActiveKey="" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>How to Register?</Accordion.Header>
    <Accordion.Body>
      Click register on Homeskul Scholarship landing page, enter your details and submit.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Mode of Examination?</Accordion.Header>
    <Accordion.Body>
     Online through Homeskul website.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Last day of registration?</Accordion.Header>
    <Accordion.Body>
     15th September 2022
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
      </div>
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
  );
};