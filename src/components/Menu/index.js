import './Menu.css'

import { Link } from 'react-router-dom'

import Logo from '../../assets/img/Logo.png'
import Button from '../Button'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu
