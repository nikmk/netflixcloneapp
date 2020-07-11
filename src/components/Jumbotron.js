/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import Button from './Button'
import wallpaper from '../img/wallpaper.jpg'
import logo from '../img/logo.png'
import slider from '../img/slider.jpg'
/*
 * @function Jumbotron
 */
const Jumbotron = () => (
  <div css={JumbotronCSS}>
    <div className="synopsis">
      <div>
        <img src={logo} />
        <p>
          All he wants to do is leave the town and start all over. But this is
          not possible in this life. He must deal with his demons outside and
          the ones that are outside.
        </p>

        <Button icon="play">Play</Button>
        <Button icon="info-circle">More Info</Button>
      </div>

      <img src={slider} alt="slider" className="slider" />
    </div>
  </div>
)

const JumbotronCSS = css`
  position: relative;
  background-image: url('${wallpaper}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 98vh;
  top: 0;
  .synopsis {
    padding-top: 200px;
    padding-left: 60px;
    max-width: 500px;
    color: white;
    padding-left: 60px;
    img {
      width: 100%;
    }
   .Icon {
      margin-right: 10.5px;
      font-size: 18px;
    }
  }
  .ContentRow {
    position: absolute;
    bottom: 20px;
  }
  .slider {
   height: 125px;
    position: absolute;
    bottom: 20px;
    width: calc(100% - 60px);
  }
`
export default Jumbotron
