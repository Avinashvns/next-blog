import './loginpage.css'
import Link from 'next/link'
export default function Layout({children}){

    return(
        <>
            <h1>Common Layout for Login Page & its all children</h1>
            <br/> 
            <ul className='login-menu'>
                <li><Link href='/login/studentlogin'>Student login</Link></li>
                <li><Link href='/'>Home Page</Link></li>
            </ul>

            {
                children
            }
        </>
    )
}