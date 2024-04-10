import logo from '../assets/logo.png'

export default function Header(){
    return <header className='p-2'>
        <img className='w-28' src={logo} alt="logo de kavav" />
    </header>
}