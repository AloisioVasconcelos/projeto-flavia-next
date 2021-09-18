import Styles from '../Body/body.module.css'
import { GoogleApiWrapper } from 'google-maps-react'

<Body />

function Body() {
  return (


    <div>

      <div className={Styles.banner}>
        <img className=
          {Styles.bannerPage}
          src="/assets/bannerwide.jpg" alt="Banner" />
      </div>

      <div className={Styles.allBody}>
        <div className={Styles.diferencial}> <p><strong> Diferencial: </strong> valorização da individualidade de cada paciente por meio de diagnóstico completo com discrição e profissionalismo.</p> </div>


        <div>

          <div >
            <h2 className={Styles.titles} id="consultInfo" >Atendimento Humanizado</h2>
          </div>

          <div className={Styles.qualities}>

            <div className={Styles.informations}>
              <img className={Styles.svgs} src="./assets/relogio.svg" alt="Imagem de tempo" />
              <strong>Tempo </strong>
            </div>
            <div className={Styles.descriptions}>
              <p >Escuta e análise qualificada com duração de <strong>50 minutos</strong>, abrangendo:
                orientação física e mental, diagnóstico, orientações psicocomportamentais,
                prescrição de tratamento medicamentoso.
              </p>
            </div>





            <div className={Styles.informations}>
              <img className={Styles.svgs} src="./assets/esteto.svg" alt="Image de integração" />
              <strong> Integração </strong>

            </div>

            <div className={Styles.descriptions}>
              <p >Atendimento clínico-psíquico: realiza-se uma análise do paciente
                integralmente <strong> (corpo & mente) </strong> com avaliação
                de exames físicos e psiquiátricos, com o intuito de excluir
                ou confirmar a existência de doenças orgânicas.
              </p>
            </div>



            <div className={Styles.informations}>
              <img className={Styles.svgs} src="./assets/calendario.svg" alt="Image de pontualidade" />
              <strong>Pontualidade</strong>
            </div>
            <div className={Styles.descriptions}>
              <p>Atendimento no horário agendado.</p>
            </div>
          </div>

        </div>
        <h2 className={Styles.titles} id="consultAreas"> Atuação </h2>
        <div>

          <div className={Styles.qualities}>
            <ul className={Styles.descriptions}>
              <li><p>Crianças acima de 12 anos</p></li>
              <li><p>Adultos</p></li>
              <li><p>Idosos</p></li>
              <li><p>Psiquiatria geral ambulatorial (transtornos de ansiedade, depressão, bipolar, esquizofrenia
                adicção, compulsão, insônia, etc).</p></li>
              <li><p>Parecer intra-hospitalar em hospital geral</p></li>
            </ul>
          </div>
          <div>
          </div>


          <h2 className={Styles.titles} id="about">Sobre a médica</h2>
          <div className={Styles.curriculum}>
            <div className={Styles.qualities} >
              <img className={Styles.fotoFlavia} src="./assets/fotomedica.jpeg" alt="foto" />

            </div>


            <div className={Styles.qualities}>
              <h3 className={Styles.informations}>Formação</h3>
              <ul className={Styles.descriptions2}>
                <li><p>Graduada em Medicina pela Universidade Católica de Brasília</p></li>
                <li><p>Especializada em Psiquiatria (Residência realizada no Hospital de Base de Brasília) </p></li>
              </ul>


              <h3 className={Styles.informations}>Experiência</h3>
              <ul className={Styles.descriptions2}>
                <li><p>Psiquiatria, pareceres e tratamento de insônia - atendimento particular.</p></li>
                <li><p>Psiquiatria ambulatorial - Instituto Castro e Santos - ICS</p></li>
                <li><p>Medicina do trabalho: atendimento de urgências e perícia em junta médica - Justiça Federal do Distrito Federal</p></li>
                <li><p>Clínica médica no Pronto Socorro - Hospital Santa Luzia</p></li>
                <li><p>Concursada da Secretaria de Estado de Saúde do
                  Distrito Federal - clínica médica -Hospital Regional da Asa Norte (HRAN)
                </p></li>
                <li><p>Médica voluntária no Exército Brasileiro - Brasília/DF.</p></li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          {/* <a id="wapp" class="whatsapp-link" href="https://api.whatsapp.com/send?phone=5561999547668" target="_blank">
            <img src="" alt="" />
            <i class="fa fa-whatsapp"></i>
        </a> */}
        </div>
        <div className={Styles.allBody}>

          <h2 className={Styles.titles} id='Local'>Endereço</h2>

          <div className={Styles.descriptions}>
            <p align="center"><strong> Shln - Brasília, DF, 70710-100
              Ed. Biosphere Bloco A Sala: 311 </strong> </p>
          </div>

          <div >
            <p className={Styles.centralMap}>
              <iframe className={Styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.2827373838554!2d-47.89640288572318!3d-15.736175225716552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a398fcc35baab%3A0x63994bb0af3e39df!2sBiosphere!5e0!3m2!1spt-BR!2sbr!4v1631923773925!5m2!1spt-BR!2sbr" width="600" height="600" style={{ border: 0 }} allowfullscreen="" loading="lazy" />
            </p>
          </div>
        </div>
      </div>
    </div >








  )
}

export default Body
// export class MapContainer extends React.Component { }
// export default GoogleApiWrapper({})(MapContainer)

