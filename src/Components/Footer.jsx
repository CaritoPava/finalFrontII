import React, { useContext } from 'react'
// Theme
import theme from '../theme'
// Components
import { ContextGlobal } from './utils/global.context';

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  const styleImagesInvert = {
    filter: 'invert(1)',
    '-webkit-filter': 'invert(1)'
  }

  const styleImages = {
    filter: 'invert(0)',
    '-webkit-filter': 'invert(0)'
  }

  return (
    <main style={theme[state.theme]}>
      <footer>
        <div>
          <p>Powered by</p>
          <img style={state.theme === 'light' ? styleImages : styleImagesInvert} src="./images/DH.png" alt='DH-logo' />
        </div>
        <div className='containerNetworks'>
          <a target='__blank' href="https://www.facebook.com/DigitalHouseColombia/?brand_redir=865681700186683">
            <img style={state.theme === 'light' ? styleImagesInvert : styleImages} src="./images/ico-facebook.png" alt='facebook' />
          </a>
          <a target='__blank' href="https://www.instagram.com/_digitalhouse/?hl=es">
            <img style={state.theme === 'light' ? styleImagesInvert : styleImages} src="./images/ico-instagram.png" alt='instagram' />
          </a>
          <a target='__blank' href="">
            <img style={state.theme === 'light' ? styleImagesInvert : styleImages} src="./images/ico-whatsapp.png" alt='whatsapp' />
          </a>
          <a target='__blank' href="https://www.tiktok.com/@_digitalhouse">
            <img style={state.theme === 'light' ? styleImagesInvert : styleImages} src="./images/ico-tiktok.png" alt='tiktok' />
          </a>
        </div>
      </footer>
    </main>
  )
}

export default Footer
