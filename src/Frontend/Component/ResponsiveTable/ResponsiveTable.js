import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
// import './Tabarea.css';

const ResponsiveTable = (tabledata) => {
  const [CurrentString, SetCurrentString] = useState([]);
  const [isShown, SetisShown] = useState(false);
  const [Status, SetStatus] = useState([]);

  
  function gettables() {
  
    SetCurrentString(tabledata.data);
    console.log(CurrentString);
    

  }

  function CancelProposal(key){
alert(key);
// SetCurrentString(CurrentString[key].status = "cancelled")


// console.log(CurrentString);
  }

  // this.setState(prevState => ({
  //   myArray: [...prevState.myArray, {"name": "object"}]
  // }))


  // async function gettables() {
  //   // debugger;
  //   try {
  //   const response = await tabledata.data;
  //   // waits until the request completes...
  //   // console.log(response);
  //    SetCurrentString(response)

  //   console.log(response);

  // } catch (err) {
  //   alert(`Error: ${err}`);
  // }
  // }




  function delayState() {
    setTimeout(() => {
      SetisShown(true);
    }, 1000);
  }

  function Showdatatable() {
    if (isShown === false) {
      return <h2>Data is loading please wait </h2>;
    } else {
      return (

        <Table responsive="sm" striped bordered hover>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Boat Type</th>
              <th>Service</th>
              <th>Boat Location</th>
              <th>Job Type</th>
              <th>-</th>
              <th>-</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>
             {CurrentString.map((item, index) => {
               return (
                 <tr key={index}>
                   <td>{item.job.boat.user.name}</td>

                   <td>
                     {item.job.service.service_boat_types[0].boat_type.name}
                   </td>
                   <td>{item.job.service.name}</td>
                   <td>{item.job.boat.city}</td>
                   <td>{item.job.is_emergency ? "Emergency" : "Normal"}</td>
                   <td>Mail</td>
                   <td>
                     <Button
                       variant="primary"
                       type="submit"
                      className=" btn-danger btn-xs"
                      onClick={( ) => CancelProposal(index)}
                    >
                      Cancel Proposal
                    </Button>
                  </td>
                  <td>Search</td>
                </tr>



                //  <tr key={index}>
                //   <td>Search</td><td>Search</td><td>Search</td><td>Search</td>
                // </tr> 
              );
            })}
          </tbody>
        </Table>
        
      );
    }
  }

  useEffect(() => {
    gettables();
    SetisShown(false);
    delayState();
  }, [tabledata]);

  // {/*
  //     {tableRowData.map( item =>{
  //       console.log(item);
  //       return <tr>

  //       <td colSpan="8">{item.data.id}</td>
  //       <td>{tabledata.data.job.boat.user.name}</td>
  //       </tr>
  //     })} */}

  return <Showdatatable />;
};

ResponsiveTable.propTypes = {
  tabledata: PropTypes.object,
  // containercontent: PropTypes.string.isRequired,
};

export default ResponsiveTable;
