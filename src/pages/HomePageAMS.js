import { Image } from "react-bootstrap";
import banner from '../img/banner/banner01.jpg'
function HomePageAMS() {
  return (
    <>
      <section className="homepage">
        <Image src={banner} className="img-fluid"/>
      </section>
    </>
  );
}

export default HomePageAMS;
