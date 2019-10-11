import MyLayout from '../components/MyLayout'
import {useRouter} from 'next/router'

/**
 * 组件也能用next/router对象
 */
const Content = () =>{
    const router = useRouter()
    return(
        <>
            <h2>{router.query.title}</h2>
            <p>This is post components content</p>  
        </>
    )
}

export default function Page() {
    const router = useRouter()
    return (
        <MyLayout>
            <h1>{router.query.title}</h1>
            <p>This is post content</p>
            <Content></Content>
        </MyLayout>
    )
}