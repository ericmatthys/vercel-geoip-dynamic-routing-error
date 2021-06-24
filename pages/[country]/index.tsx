import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React, { ReactElement } from 'react';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    revalidate: 300,
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export default function Home(): ReactElement {
  return (
    <ul>
      <li><Link href="/movie/a">Movie A</Link></li>
      <li><Link href="/movie/b">Movie B</Link></li>
      <li><Link href="/movie/c">Movie C</Link></li>
      <li><Link href="/movie/d">Movie D</Link></li>
      <li><Link href="/movie/e">Movie E</Link></li>
      <li><Link href="/movie/f">Movie F</Link></li>
      <li><Link href="/movie/g">Movie G</Link></li>
      <li><Link href="/movie/h">Movie H</Link></li>
      <li><Link href="/movie/i">Movie I</Link></li>
      <li><Link href="/movie/j">Movie J</Link></li>
      <li><Link href="/movie/k">Movie K</Link></li>
      <li><Link href="/movie/l">Movie L</Link></li>
      <li><Link href="/movie/m">Movie M</Link></li>
      <li><Link href="/movie/n">Movie N</Link></li>
      <li><Link href="/movie/o">Movie O</Link></li>
      <li><Link href="/movie/p">Movie P</Link></li>
      <li><Link href="/movie/q">Movie Q</Link></li>
      <li><Link href="/movie/r">Movie R</Link></li>
      <li><Link href="/movie/s">Movie S</Link></li>
      <li><Link href="/movie/t">Movie T</Link></li>
      <li><Link href="/movie/u">Movie U</Link></li>
      <li><Link href="/movie/v">Movie V</Link></li>
      <li><Link href="/movie/w">Movie W</Link></li>
      <li><Link href="/movie/x">Movie X</Link></li>
      <li><Link href="/movie/y">Movie Y</Link></li>
      <li><Link href="/movie/z">Movie Z</Link></li>
    </ul>
  );
}
