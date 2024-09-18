import { Link } from "react-router-dom"

export let Header=function(){
    return <>
    <ul>
        <li>
        <Link to={'/'}>Home</Link>
        </li>
        <li>
         <Link to={'/about-us'}>AboutUs</Link>
        </li>
    </ul>
    </>
}


