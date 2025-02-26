import React from 'react'
import abtImage from '../images/about.jpeg'
import Title from './Title'
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us"/>
      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={abtImage}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
          Discover breathtaking destinations, unique experiences, and seamless travel. Embrace new cultures, create unforgettable memories, and explore the world with us. Your next adventure starts here.
          </p>
          <p>
          Travel is more than just a journey—it’s an experience that transforms. We take you beyond the usual, uncovering hidden gems, rich cultures, and unforgettable adventures. From pristine beaches to bustling cities, every trip is designed to inspire, connect, and leave a lasting impact. Let’s turn your travel dreams into reality.
          </p>
          <a href="#" className="btn">read more</a>
        </article>
      </div>
    </section>
  )
}

export default About