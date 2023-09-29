import React from 'react'
import Carousel from './Carousel';

function LandingPage() {

    const images = [

        '/Images/image1.png',
        '/Images/image2.png',
        '/Images/image3.png',      

    ];

  return (

    <div>

        {/*<h1>Hello World</h1>

  <h1>Images</h1>*/}

        <Carousel images={images} />

     

    </div>

  )

}

export default LandingPage;