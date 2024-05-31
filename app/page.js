import Image from 'next/image';
import React from 'react'
import second from '../public/slide-img-prepd.webp'

function Home(){
  return (
    <>
        <h1>Home</h1>
        <Image src={second} alt="solution slide image" />
    </>
  );
}
export default Home

