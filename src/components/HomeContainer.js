import HeroSection from "./HeroSection"
import MoviesGrid from "./MoviesGrid"


const HomeContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
    <HeroSection />
    <MoviesGrid />
    </div>
  )
}

export default HomeContainer