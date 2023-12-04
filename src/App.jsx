import AboutMe from "./Components/AboutMe"
import BannerSection from "./Components/BannerSection"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import ProjecSection from "./Components/Projetos/projectolist";
import TechList from "./Components/techsection/TechList"
import "./Styles/Index.css"
function App() {

  return (
    <>
      <Header></Header>
      <BannerSection />
      <AboutMe />
      <TechList />
      <ProjecSection />
      <Footer />

    </>
  )
}

export default App
