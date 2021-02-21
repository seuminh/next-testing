import Head from "next/head";

export const getStaticPaths = async () => {
   const res = await fetch("https://jsonplaceholder.typicode.com/users");
   const data = await res.json();

   const paths = data.map((d) => {
      return {
         params: {
            id: d.id.toString(),
         },
      };
   });
   return {
      paths,
      fallback: false,
   };
};

export const getStaticProps = async (context) => {
   let id = context.params.id;
   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
   const data = await res.json();

   return {
      props: {
         user: data,
      },
   };
};

const user = ({ user }) => {
   return (
      <>
         <Head>
            <title>User | {user.name}</title>
            <meta name="keywords" content="hello" />
         </Head>
         <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.website}</p>
         </div>
      </>
   );
};

export default user;
