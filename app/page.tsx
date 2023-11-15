import NavBar from "@/components/NavBar";
import Home from "@/components/Home";
import About from "@/components/About";
import EventPage from "@/components/EventPage";
import Academics from "@/components/Academics";

export default function Page() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <EventPage/>
      <Academics/>
    </div>
  )
}