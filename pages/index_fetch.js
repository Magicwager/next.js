import MyLayout from '../components/MyLayout'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <MyLayout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </MyLayout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  //重新加载只在服务端打印出来，因为页面是服务端渲染的，我们已经有数据了，不会再去拉取数据
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;