import React from 'react';
import Typed from 'react-typed';

function header() {
  return (
    <div>
      <h1>What Am I?</h1>
      <Typed 
        strings={[
            '',
            'Software Engineer',
            'Also referred to as...',
            'A Front-End Developer',
            'A Back-End Developer',
            'A MERN Full Stack Developer',
            'OR!!!',
            'A Coder!',
            '',
            '']}
            typeSpeed={40}
            backSpeed={50}
            loop
      />
    </div>
  )
}

export default header