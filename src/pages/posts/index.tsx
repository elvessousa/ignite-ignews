import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>31 de junho de 2021</time>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              laudantium sapiente autem rerum quos voluptates natus, minus esse
              vero minima inventore doloremque suscipit, earum facilis
              reiciendis, aut ab consequatur temporibus.
            </p>
          </a>
          <a>
            <time>31 de junho de 2021</time>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              laudantium sapiente autem rerum quos voluptates natus, minus esse
              vero minima inventore doloremque suscipit, earum facilis
              reiciendis, aut ab consequatur temporibus.
            </p>
          </a>
          <a>
            <time>31 de junho de 2021</time>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              laudantium sapiente autem rerum quos voluptates natus, minus esse
              vero minima inventore doloremque suscipit, earum facilis
              reiciendis, aut ab consequatur temporibus.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
