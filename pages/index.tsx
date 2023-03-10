import Head from 'next/head'
import Sort from "components/Sort"
import MenuTabContents from "components/Menu_wrap/MenuTabContents"
import SearchBox from 'components/SearchBox';

export default function Home() {
  return (
    <>
      <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        
      <SearchBox/>
      <Sort />
      <MenuTabContents />

    </>
  );
}