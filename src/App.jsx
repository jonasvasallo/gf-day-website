import HeroSection from "./components/sections/HeroSection"
import LoveLetterSection from "./components/sections/LoveLetterSection"
import MyLetters from "./components/sections/MyLetters"
import OurMemoriesTogether from "./components/sections/OurMemoriesTogether"

function App() {

  return (
    <div className="flex justify-center items-center">
      <div className="pt-32 flex flex-col justify-center items-center w-[1024px] gap-16">
        <HeroSection/>
        <MyLetters/>
        {/* Our Memories Together File */}
        <OurMemoriesTogether/>
        <LoveLetterSection/>
        <span className="font-bold">From </span>
        <div className="flex justify-center items-center flex-col mb-24">
          <div className="w-32 h-32">
            <img src="/pictures/penguin_habibi.jpg" alt="" className="w-full h-full object-cover"/>
          </div>
          <span className="mt-4 font-bold">Jonathan</span>
          <span>your favorite kabit.</span>
        </div>
      </div>
    </div>
  )
}

export default App
