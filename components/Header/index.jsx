import Styles from './header.module.css'
import Image from 'next/image'
import ImageMenu from '/home/aavubuntu/projeto-flavia-next/public/assets/menu.svg'
import { useState } from 'react'
// import ToggleMenu from '../Functions/handlers'






function Header() {

  const [menuitem, setMenuItem] = useState(false)

  function ToggleMenu() {

    setMenuItem(!menuitem)

  }

  function closeMenu() {
    setMenuItem(false)
  }



  return (

    <div className={Styles.all}>
      <nav className={Styles.menu}>

        <div><a onClick={closeMenu} className={menuitem ? Styles.active : Styles.menuitem} href="#">Home</a> </div>
        <div> <a onClick={closeMenu} className={menuitem ? Styles.active : Styles.menuitem} href="#consultInfo">Atendimento Humanizado</a> </div>
        <div> <a onClick={closeMenu} className={menuitem ? Styles.active : Styles.menuitem} href="#consultAreas">Atuação</a> </div>
        <div className="logo">
          <img className={Styles.logo} src="/assets/logoFlaviaFaggianicortado.png " alt="Logo Dra. Flávia Faggiani" />
        </div>
        <div><a onClick={closeMenu} className={menuitem ? Styles.active : Styles.menuitem} href="#about">Sobre a médica</a> </div>
        <div> <a onClick={closeMenu} className={menuitem ? Styles.active : Styles.menuitem} href="https://api.whatsapp.com/send?phone=5561999547668" rel="noreferrer" target="_blank">Agende sua Consulta</a> </div>
        <div> <a onClick={closeMenu} className={menuitem ? Styles.active : Styles.menuitem} href="#Local">Endereço</a>
        </div>
        <div className={Styles.allMenu}>
          <div  > <button onClick={ToggleMenu} className={Styles.imageMenu}> Menu
            <Image className={Styles.menuMenu} src={ImageMenu} width="2.0rem" height="2.6rem" alt="Imagemenu" layout="responsive" /></button>
          </div>
        </div>

      </nav>
    </div>



  )
}



export default Header

