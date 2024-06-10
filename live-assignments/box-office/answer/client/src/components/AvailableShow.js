'use client'

import Image from 'next/image';
import styles from '../styles/showings.module.css'

function openBookingPage(link) {
  window.open(link, '_blank').focus();
}

export default function AvailableShow(props) {
  return (
    <div key={props.data.id} className={styles.showing} onClick={() => openBookingPage(props.link)}>
      <div className={styles.img_container}>
        <Image
            src={props.data.image}
            fill={true}
            alt={props.data.title}
            className={styles.img}
          />
      </div>
      <h2>{props.data.title}</h2>
      <p>About the show</p>
      <button>Book Now</button>
    </div>
  );
}
