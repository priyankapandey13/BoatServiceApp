import { Col } from "../../../../node_modules/react-bootstrap";
import Navilinks from "../navilinks";
// import CupIcon from '../../assets/images/icons/cup-icon-footer.svg';
// import HomeIcon from '../../assets/images/icons/home-icon-footer.svg';
import "./Leftnavi.css";

function LeftNavi() {
  return (
    //   <nav id="sidebarMenu" col class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"></nav>
    // <Col sm={12} lg={9}></Col>
    <Col md={3} lg={2}  className="leftnavi sidebar  p-0"> 
    {/* collapse */}
      <div className="sidebar-sticky">
        <ul>
          <li>
        <Navilinks content="Dashboard" alt="icon" href="/Dashboard" className="active p-3"/>

        </li>
        <li>
        <Navilinks content="Job Ads" alt="icon" href="/Job-Ads" className=" p-3"/>
        </li>
        <li>
        <Navilinks content="Proposals" alt="icon" href="/Proposals" className=" p-3" />
        </li>
        <li>
        <Navilinks content="Reviews" alt="icon" href="/Reviews" className=" p-3" />
        </li>
        </ul>
      </div>
    </Col>
  );
}

export default LeftNavi;
