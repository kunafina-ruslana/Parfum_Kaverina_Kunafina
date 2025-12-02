import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Banner from './pages/HomePage/components/Banner/Banner'
import SectionAdvantages from './pages/HomePage/components/SectionAdvantages/SectionAdvantages'
import SectionImageWithText from './pages/HomePage/components/SectionImageWithText/SectionImageWithText'
import SectionLogos from './pages/HomePage/components/SectionLogos/SectionLogos'
import SectionMarquee from './pages/HomePage/components/SectionMarquee/SectionMarquee'
import SectionProducts from './pages/HomePage/components/SectionProducts/SectionProducts'
import SectionReviewsSlider from './pages/HomePage/components/SectionReviewsSlider/SectionReviewsSlider'

function App() {

  return (
    <>
      <Banner/>
      <SectionLogos/>
      <SectionProducts/>
      <SectionImageWithText/>
      <SectionMarquee/>
      <SectionAdvantages/>
      <SectionReviewsSlider/>
      
      <Footer/>
    </>
  )
}

export default App
