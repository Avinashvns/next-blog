'use client'
import {usePathname} from 'next/navigation';
import './loginpage.css'
import Link from 'next/link'

export default function Layout({children}){
    const conditionPathname=usePathname()
    console.log(conditionPathname)
    return(
        <>
            <h1>Common Layout for Login Page & its all children</h1>
            <br/> 
            {
                conditionPathname !=="/login/teacherlogin" ? <ul className='login-menu'>
                <li><Link href='/login'>Login Main</Link></li>
                <li><Link href='/login/studentlogin'>Student Login</Link></li>
                <li><Link href='/login/teacherlogin'>Teacher Login</Link></li>
                <li><Link href='/'>Home Page</Link></li>
            </ul> 
            : null
            }
            <br/>

            {
                children
            }
        </>
    )
}