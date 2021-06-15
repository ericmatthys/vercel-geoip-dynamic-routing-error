import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

function timeout(milliseconds: number) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export const getStaticProps: GetStaticProps = async (context) => {
  await timeout(2000);

  return {
    revalidate: 300,
    props: {
      country: context.params?.country
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

interface MovieProps {
  country?: string;
}

export default function Movie({ country }: MovieProps): ReactElement {
  const router = useRouter();

  return (
    <div>
      <h1>{country}: {router.query.slug}</h1>
      {JSON.stringify(router)}
    </div>
  );
}
