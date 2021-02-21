import Link from "next/link";
import styles from "../../styles/Users.module.css";
import Head from "next/head";

export const getStaticProps = async () => {
   const res = await fetch("https://jsonplaceholder.typicode.com/users");
   const data = await res.json();

   return {
      props: {
         users: data,
      },
   };
};

const index = ({ users }) => {
   return (
      <>
         <Head>
            <title>Users List | Users</title>
            <meta name="keywords" content="ninjas" />
         </Head>
         <div>
            <h1>All Users</h1>
            {users.map((u, i) => {
               return (
                  <Link href={`/users/${u.id}`} key={u.id}>
                     <a className={styles.single}>
                        <h3>{u.name}</h3>
                     </a>
                  </Link>
               );
            })}
         </div>
      </>
   );
};

export default index;
