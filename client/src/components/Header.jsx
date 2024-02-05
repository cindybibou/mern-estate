import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

 export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                {/* font-bold: police en gras, 
                text-sm: ajuste la taille de la police de l'élément à une petite dimension selon l'échelle prédéfinie
                sm:text-x1:applique une condition basée sur la taille de l'écran, 
                sm: indique que la classe 'text-x1'(texte de grande taille) s'appliquera lorsque l'écran atteint une certaine largeur minimale ('sm' pour small). Cela permet au texte d'être plus petit sur les petits écran et de s'agrandir sur les écrans plus grands, améliorant ainsi l'expérience utilisateur sur différents appareils.   */}
                    <span className='text-slate-500'>Sahand</span>
                    <span className='text-slate-700'>Estate</span>
                </h1>
            </Link>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-24' />
                <FaSearch className='text-slate-600'/>
            </form>
            <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
                </Link>
                <Link to='/sign-in'>
                    <li className='text-slate-700 hover:underline'>Sign in</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}
