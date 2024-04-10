import logo from '../assets/logo.png'
import logoGithub from '../assets/github.png'
import { Link } from "react-router-dom"

export default function Header(){
    return <header className=' flex justify-between items-end shadow-xl'>
        <img className='w-24' src={logo} alt="logo de kavav" />
        <nav>
            <ul className='flex items-end gap-8 text-lg text-[#EC4E20]'>
            <li className='hover:text-orange-500'>
                    <Link to="/">Inicio</Link>
                </li>
                <li className='hover:text-orange-500'>
                    <Link to="nivel-uno">Nivel I</Link>
                </li>
                <li className='hover:text-orange-500'>
                    <Link to="nivel-dos">Nivel II</Link>
                </li>
                <li className='hover:text-orange-500'>
                    <Link to="nivel-tres">Nivel III</Link>
                </li>
                <li className='cursor-pointer'>
                    <img className='w-16' src={logoGithub} alt="github" />
                </li>
                
            </ul>
        </nav>
    </header>
}