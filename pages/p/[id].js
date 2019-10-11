import { useRouter } from 'next/router';
import MyLayout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Markdown from 'react-markdown'

export default function Post(props) {
    const router = useRouter();
    return (
        <MyLayout>
            <h1>{router.query.id}</h1>
            <p>This is the blog post content.</p>
            <h1>{props.show.name}</h1>
            <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
            <img src={props.show.image.medium} />
            <div className="markdown">
                <Markdown source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
      `} />
            </div>
            <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
        </MyLayout>
    );
}

Post.getInitialProps = async function (context) {
    let { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()
    console.log(`Fetch show:${show.name}`)
    return { show }
}

