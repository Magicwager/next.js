import Head from './Head'

const layoutStyle = {
    margin:20,
    padding:20,
    border:'1px solid #DDD'
}

export default function Layout (props){
    return(
        <div style={layoutStyle}>
            <Head />
            {props.children}
        </div>
    )
}