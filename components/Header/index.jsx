import Styles from './header.module.css'
import Image from 'next/image'
import ImageMenu from '/home/aavubuntu/projeto-flavia-next/public/assets/menu.svg'
// import ToggleMenu from '../Functions/handlers'






function Header() {

  // const [menuitem, setMenuItem] = useState(false)

  // function ToggleMenu() {

  //   const nav = document.getElementsByClassName('menuitem')


  //   return (


  //     nav.classList.toggle('active')

  //   )

  // }



  return (


    <nav className={Styles.menu}>

      <div><a className={Styles.menuitem} href="#">Home</a> </div>
      <div> <a className={Styles.menuitem} href="#consultInfo">Atendimento Humanizado</a> </div>
      <div> <a className={Styles.menuitem} href="#consultAreas">Atuação</a> </div>
      <div className="logo">
        <img className={Styles.logo} src="/assets/logoFlaviaFaggianicortado.png " alt="Logo Dra. Flávia Faggiani" />
      </div>
      <div><a className={Styles.menuitem} href="#about">Sobre a médica</a> </div>
      <div> <a className={Styles.menuitem} href="https://api.whatsapp.com/send?phone=5561999547668" target="_blank">Agende sua Consulta</a> </div>
      <div> <a className={Styles.menuitem} href="#Local">Endereço</a> </div>
      <div className={Styles.allMenu} > <button className={Styles.imageMenu}> Menu  <Image src={ImageMenu} width="1rem" height="2.8rem" layout="responsive" /></button>
      </div>
    </nav >


  )
}



export default Header

