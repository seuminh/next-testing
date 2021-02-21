import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
   return (
      <div>
         <Head>
            <title>Users List | Home</title>
            <meta name="keywords" content="ninjas" />
         </Head>
         <div>
            <h1 className={styles.title}>Homepage</h1>
            <p className={styles.text}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
               animi impedit suscipit architecto, odio inventore nostrum non
               neque dicta. Quam magni accusantium culpa distinctio tempore iure
               accusamus, dolorem nobis odit.
            </p>
            <p className={styles.text}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
               animi impedit suscipit architecto, odio inventore nostrum non
               neque dicta. Quam magni accusantium culpa distinctio tempore iure
               accusamus, dolorem nobis odit.
            </p>
            <Link href="/users/">
               <a className={styles.btn}>See Users Listing</a>
            </Link>
         </div>
      </div>
   );
}
