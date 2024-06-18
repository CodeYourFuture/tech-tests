'use client'

import styles from "./page.module.css";
import Carousel from '../components/Carousel/Carousel.js'

export default function Home() {
  return (
    <Carousel>
      <img src="https://picsum.photos/id/24/600/800" />
      <img src="https://picsum.photos/id/13/600/800" />
      <img src="https://picsum.photos/id/6/600/800" />
      <img src="https://picsum.photos/id/26/600/800" />
      <img src="https://picsum.photos/id/27/600/800" />
    </Carousel>
  );
}
