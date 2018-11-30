import React from 'react';

const Location = () => (
  <div className="location_wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13417.821172960459!2d-96.7990857!3d32.7801851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9073cfe6d9a606a!2sMagnolia+Dallas+Downtown!5e0!3m2!1spt-BR!2sbr!4v1543614794390"
      width="100%"
      height="500px"
      frameBorder="0"
      allowFullScreen
      title="map"
    />

    <div className="location_tag">
      <div>Location</div>
    </div>
  </div>
);

export default Location;
