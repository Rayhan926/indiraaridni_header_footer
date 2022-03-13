import DesktopHeader from "./components/DesktopHeader"
import Footer from "./components/Footer"
import MobileHeader from "./components/MobileHeader"

function App() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      <div className="min-h-screen bg-slate-100 grid grid-cols-1 place-items-center text-2xl md:text-5xl font-termina-bold">
        Please Scroll
      </div>
      <Footer />
    </>
  )
}

export default App
