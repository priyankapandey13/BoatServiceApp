import "../../../App.css";
import Header from "../../Container/Header/Header";
import LeftNavi from "../../Component/LeftNavi/Leftnavi";
import ContentContainer from "../../Component/ContentContainer/ContentContainer";
import Table from "react-bootstrap/Table";
import { Row, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

import axios from "../../Component/axios";
// import UserContext from '../../../AppContext';

// const [IsLogin, SetIsLogin] = useState(false);

// const mymessage = "Welcome to dashbord";

function Dashboard() {
  const [Showdata, SetShowdata] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("user"));

  async function getproposals() {
    try {
      const myapiValue = await axios.get("api/alluser");
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

  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Row>
          <LeftNavi />

          <ContentContainer>
            <h2>Welcome {currentUser.user.name}</h2>

            <Table striped bordered hover>
              <thead>
                <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Email Id</th>
                <th>Role Id</th>
                <th>Phone Number</th>
                <th>Zip Code</th>
                <th>Created AT</th>
                </tr>
              </thead>
              <tbody>
                {Showdata.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>

                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.user_role_id}</td>
                      <td>{item.phone_number}</td>
                      <td>{item.zip_code}</td>
                      <td>{item.created_at}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </ContentContainer>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
