import React from 'react';

// import { GetStaticProps } from 'next';
import { initializeApollo } from 'apollo/apollo';
import useDarkMode from 'utils/use-dark-mode';
import TopNav from '@components/Navigation/TopNav';
import Layout from '@components/Layout/Layout';
import {
  CategoriesDocument,
  CategoriesQuery,
  useCategoriesQuery,
} from 'graphql/generated/graphql';
import { GetStaticProps } from 'next';
import EventCard from '@components/Cards/EventCard';

export default function Index() {
  const darkMode = useDarkMode();

  const { data: categories } = useCategoriesQuery();
  console.log(categories);
  return (
    <>
      <TopNav navData={categories as CategoriesQuery} />
      <Layout>
        
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </Layout>
    </>
  );
}

// export async function getStaticProps(): GetStaticProps {
//   return {

//   };
// }

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: CategoriesDocument,
    // variables: {
    //   limit: 1,
    // } as CategoriesQueryVariables,
  });

  return {
    props: {
      apolloState: apolloClient.cache.extract(),
    },
  };
};
