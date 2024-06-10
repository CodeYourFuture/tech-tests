import Image from 'next/image';
import styles from '../../styles/showings.module.css'
import AvailableShow from '../../components/AvailableShow.js'

async function getData() {
  const response = await fetch('http://localhost:9090/api/shows/all-open');
  return await response.json();
}

function soldOutShow(showing) {
  return (
    <div key={showing.id} className={`${styles.sold_out} ${styles.showing}`}>
      <div className={styles.img_container}>
        <Image
            src={showing.image}
            fill={true}
            alt={showing.title}
            className={styles.img}
          />
      </div>
      <h2>{showing.title}</h2>
      <p>SOLD OUT</p>
    </div>
  );
}

export default async function Showings() {
  const data = await getData();
  const showings = data.showings.map((showing) => {
    let bookLink;
    for (let i in showing.see_tickets_url_infos) {
      const url = showing.see_tickets_url_infos[i].url;
      if (url.indexOf('https://tktsbooth.seetickets.com') != -1) {
        bookLink = url;
        break;
      }

      if (url.indexOf('https://officiallondontheatre.seetickets.com') != -1) {
        bookLink = url;
      }
    }

    if (bookLink) {
      return <AvailableShow data={showing} link={bookLink}></AvailableShow>
    } else {
      return soldOutShow(showing);
    }
  });

  return (
    <main>
      <h1>Today's deals</h1>
      <div className={styles.showings}>
        {showings}
      </div>
    </main>
  );
}
