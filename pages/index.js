
import Link from 'next/link'
import MyLayout from '../components/MyLayout'

/**
 * 常规传参
 */
/* const PostLink = props => {
    return (
        <li>
            <Link href={`/post?title=${props.title}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    )
} */

/**
 * 动态渲染
 */
/* const PostLink = ({props })=> {
    return (
        <li>
            <Link href={`/p/[id]`} as={`/p/${props.id}`}>
                <a>{props.id}</a>
            </Link>
        </li>
    )
}
 */
const Index = () => {
    return (
        <MyLayout>
            {/* Link 就是一个HOC,不会向子组件传递属性 */}
            <Link href='/about'>
                <a title="About Page">about us</a>
            </Link>
            <p>Hello Next.js</p>
            <ul>
                <PostLink title="Hello Next.js" id="Hello Next.js"></PostLink>
                <PostLink title="Learn Next is awesome" id="Learn Next is awesome"></PostLink>
                <PostLink title="dynamic pages" id="dynamic pages"></PostLink>
            </ul>
            <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: red;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
        </MyLayout>
    )

}

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ];
}

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.post.id}`}>
            <a>{props.post.title}</a>
        </Link>
        <style jsx>
            {`
       ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }
      
      `}
        </style>
    </li>
);

export default function Blog() {
    return (
        <MyLayout>
            <h1>My Blog</h1>
            <ul>
                {getPosts().map(post => (
                    <PostLink key={post.id} post={post} />
                ))}
            </ul>
            <style jsx>{`
          h1,
          a {
            font-family: 'Arial';
          }
  
          ul {
            padding: 0;
          }
  
          li {
            list-style: none;
            margin: 5px 0;
          }
  
          a {
            text-decoration: none;
            color: blue;
          }
  
          a:hover {
            opacity: 0.6;
          }
        `}</style>
        </MyLayout>
    );
}
//export default Index;