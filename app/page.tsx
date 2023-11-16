import NavBar from "@/components/NavBar";
import Home from "@/components/Home";
import About from "@/components/About";
import EventPage from "@/components/EventPage";
import Academics from "@/components/Academics";
import Programs from "@/components/Programs";
// import Stories from "@/components/Stories";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";

export default function Page() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <EventPage/>
      <Academics/>
      <Programs/>
      {/* <Stories/> */}
      <Blogs/>
      <Contact/>
    </div>
  )
}