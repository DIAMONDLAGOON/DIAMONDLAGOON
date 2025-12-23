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
      <Content4 alt="Phố Thị Nại" title="Phố Thị Nại" subtitle="Sắc màu thương mại ven đầm" url="Picture1.png"/>
      <Content4 alt="Nhà Rường Thị Nại" title="Nhà Rường Thị Nại" subtitle="Làng sinh thái xanh Thị Nại" url="Picture2.png"/>
      <Content4 alt="Công viên Phố Cảng Đầm Xanh" title="Công viên Phố Cảng Đầm Xanh" subtitle="Tổ hợp thương mại – giáo dục sinh thái tiên phong, tọa lạc tại trái tim của Đầm Thị Nại" url="Picture3.png"/>
      <Content4 alt="resort nghỉ dưỡng" title="Resort nghỉ dưỡng sinh thái hạng sang" subtitle="Trải nghiệm những căn bungalow sang trọng với view đầm Thị Nại" url="Picture4.png"/>
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
