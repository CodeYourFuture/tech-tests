'use client'

import Image from "next/image";
import styles from "./page.module.css";
import MyModal from '../components/MyModal/MyModal.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Praesent sed diam</h1>

      <MyModal>
        <MyModal.Header>Vivamus sollicitudin</MyModal.Header>
        <MyModal.Body>Vivamus sollicitudin pulvinar egestas. Duis faucibus enim libero, pulvinar rutrum turpis varius at. Mauris aliquet nunc urna, consectetur semper elit molestie efficitur. Sed cursus vitae turpis ac mollis. Nunc sit amet tortor ut orci ullamcorper tristique.</MyModal.Body>
      </MyModal>

      <div className={styles.flex}>
        <aside className={styles.aside}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas luctus urna quis sagittis. Nunc bibendum nunc nec vehicula lobortis. Praesent non ante elit. Vestibulum vel turpis eleifend, tempus leo eget, ultricies velit. Praesent pellentesque, sapien sed euismod tristique, quam tellus sagittis lorem, eu vestibulum odio massa vitae ligula. Phasellus nec nisl nulla. Quisque sapien elit, hendrerit non turpis at, tincidunt auctor neque. Etiam eu gravida est, at vehicula sem. Quisque luctus, tortor ut tincidunt dictum, turpis velit blandit nunc, non convallis dolor urna nec magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </aside>
        <main className={styles.main}>
          Integer ac nunc maximus, rhoncus sem quis, rutrum ex. Phasellus malesuada tincidunt elit, eu iaculis est hendrerit eget. Aliquam efficitur magna velit, id efficitur lorem dictum sed. Praesent mollis tortor ac sem fermentum porttitor. Duis et euismod risus. In pellentesque at dui gravida varius. Cras maximus condimentum orci, ac pulvinar lectus fringilla ac. Maecenas scelerisque tortor auctor sapien dapibus aliquam. Aenean elementum dolor sed iaculis bibendum. Integer commodo iaculis diam sed placerat. Integer sed convallis erat. Vivamus porta vel nulla id hendrerit. Vivamus vestibulum dolor eget purus vehicula, eu efficitur nisi vestibulum. Aliquam porta viverra vestibulum. Proin a porta augue. Vivamus mi orci, ornare a nisl vitae, bibendum faucibus nisl.
        </main>
      </div>
    </div>
  );
}
