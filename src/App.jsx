import "./App.css";

import Hero from "./Hero.jsx";
import Content1 from "./Content1.jsx";
import Content2 from "./Content2.jsx";
import Content3 from "./Content3.jsx";
import Content4 from "./Content4.jsx";
import Content5 from "./Content5.jsx";
import LuxuryCarousel from "./LuxuryCarousel.jsx";
import Content6 from "./Content6.jsx";
import Footer from "./Footer.jsx";
import Content6New from "./Content6New.jsx";

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Hero />
      <Content1 />
      <Content2 />
      {/* <Content3 /> */}
      <Content4 url="https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2Fbt-langco-Banyan%20Tree%20Lang%20Co%20-%20Resort%20Overview.jpg&w=3840&q=65"/>
      <Content4 url="ANH2.jpg"/>
      <Content4 url="https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2Fbt-langco-Banyan%20Tree%20Lang%20Co%20-%20Resort%20Overview.jpg&w=3840&q=65"/>
      <Content4 url="ANH2.jpg"/>
      {/* <Content4 />
      <Content4 /> */}
      {/* <Content5 /> */}
      {/* <LuxuryCarousel /> */}
      <Content6New />
      <Footer />
    </div>
  );
}

export default App;
