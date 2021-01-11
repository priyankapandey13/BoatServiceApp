import React, { useEffect, useState } from "react";
import Header from "../../Container/Header/Header";
import LeftNavi from "../../Component/LeftNavi/Leftnavi";
import { Row, Container, Col } from "react-bootstrap";
import "./proposals.css";
import SearchBar from "../../Component/SearchBar/SearchBar";
import Tabarea from "../../Component/DataTabs/DataTabs";

import axios from "../../Component/axios";
// import { func } from "joi";

// const mytemparray = [
//   {
//     status: "pending",
//     id: 1,
//     job: {
//       description:
//         " Urgent help required with Motor, it has smoke coming out of it.",
//       boat: {
//         zip_code: "1200",
//         user: {
//           name: "Geeta",
//         },
//       },
//       service: {
//         name: "Motor change ",
//         service_boat_types: [
//           {
//             id: 2,
//             boat_type: {
//               name: "Dinghy Boat",
//             },
//           },
//         ],
//       },
//     },
//   },
//   {
//     status: "Accepted",
//     id: 3,
//     job: {
//       description:
//         " Urgent help required with Motor, it has smoke coming out of it.",
//       boat: {
//         zip_code: "1290",
//         user: {
//           name: "Shawn",
//         },
//       },
//       service: {
//         name: "Mentainance ",
//         service_boat_types: [
//           {
//             id: 2,
//             boat_type: {
//               name: "Yatch Boat",
//             },
//           },
//         ],
//       },
//     },
//   },
//   {
//     status: "pending",
//     id: 4,
//     job: {
//       description:
//         " Urgent help required with Motor, it has smoke coming out of it.",
//       boat: {
//         zip_code: "3200",
//         user: {
//           name: "Bob",
//         },
//       },
//       service: {
//         name: "Motor change ",
//         service_boat_types: [
//           {
//             id: 2,
//             boat_type: {
//               name: "fishing Boat",
//             },
//           },
//         ],
//       },
//     },
//   },
// ];

function Proposals() {
  const [Showdata, SetShowdata] = useState([]);

  async function getproposals() {
    try {
      const myapiValue = await axios.get("api/proposals");
      const Allproposals = await myapiValue.data;
      await SetShowdata(Allproposals);
      // SetShowdata(mytemparray);
    } catch (err) {
      console.log(`Error : ${err}`);
    }

    // if (response && response.data) SetShowdata(response.data);
  }

  useEffect(() => {
    getproposals();
  }, []);

  // console.log("Page is loaded");
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <LeftNavi />
          {/* Heading for Blank page */}

          <Col sm={12} lg={9} className="ml-auto mr-auto mt-5">
            <Row>
              <h2 className="mb-5">Proposals</h2>

              <Container className="p-0">
                {/* className="whitebg" */}
                {/* Search bar */}
                <SearchBar />
                {/* tab for different pages */}

                <Tabarea data={Showdata} />
                {/* search result table */}
              </Container>
            </Row>
          </Col>
          {/* Heading for Blank page */}
        </Row>
      </Container>
    </>
  );
}

export default Proposals;
