import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import boyce from './slideMusica/boyce.png';
import cantores from './slideMusica/cantores.png';
import ellaJazz from './slideMusica/ellaJazz.png';
import karaoke from './slideMusica/karaoke.png';
import soad from './slideMusica/soad.png';

import styles from './Slider.module.css'


function Slider_M() {
    return (
        <div>
          <h4>React-Bootstrap Carousel Component</h4>
          <Carousel>
            <Carousel.Item>
              <img className={styles.Slider_img} src={boyce }/>
            </Carousel.Item>

            <Carousel.Item>
              <img className={styles.Slider_img} src={cantores }/>
            </Carousel.Item>

            <Carousel.Item>
              <img className={styles.Slider_img}  src={ellaJazz }/>
            </Carousel.Item>

            <Carousel.Item>
              <img className={styles.Slider_img}  src={karaoke }/>
            </Carousel.Item>

            <Carousel.Item>
              <img className={styles.Slider_img}  src={soad }/>
            </Carousel.Item>
          </Carousel>
        </div>
      );
    }

    export default Slider_M;
