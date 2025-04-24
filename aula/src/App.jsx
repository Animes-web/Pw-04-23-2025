import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      
      <section className='container'>
      <figure>
          <img className='image-home' src="/undraw_loading_65y2.svg" alt="Imagem da home" />
        </figure>
        <div className='apresentacao'>
          <p>
            Olá, sou <br/>
            <span>Wenvel e João Pedro</span> <br/>
            Devs Full Stack
          </p>
          <button className='btn btn-red'>
            Saiba mais sobre nós!
          </button>
        </div>
        <figure>
          <img className='img-home' src="/undraw_online-review_08y6.svg" alt="Imagem da home" />
        </figure>
       
      </section>
      <Footer />
    </>
  )
}

export default App
