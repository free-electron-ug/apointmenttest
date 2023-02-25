import React from 'react';
import Hero from './hero/Hero';
import NavbarStandard from './NavbarStandard';
import Appointment from './appointment/Appointment';
import Processes from './processes/Processes';
import Services from './Services';
import Testimonial from './Testimonial';
import Cta from './Cta';
import FooterStandard from './footer-standard/FooterStandard';

const Landing = () => {
  return (
    <>
      <NavbarStandard />
      <Hero />
      <Appointment />
      <Processes />
      <Services />
      <Testimonial />
      <Cta />
      <FooterStandard />
    </>
  );
};

export default Landing;
