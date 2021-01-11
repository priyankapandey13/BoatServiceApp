import { useState, useEffect } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import PropTypes from "prop-types";
import "./DataTabs.css";
import ResponsiveTable from "../../Component/ResponsiveTable/ResponsiveTable";

const Tabarea = (ProposalArray) => {
  const [key, setKey] = useState("pending");
  // const [CurrentStatus, SetCurrentStatus] = useState();

  // create hooks for each state and put the data inside it
  const [Pending, SetPending] = useState();
  // const [Accepted, SetAccepted] = useState([]);
  // const [Rejected, SetRejected] = useState([]);
  // const [Cancelled, SetCancelled] = useState([]);

const pendinglist =[];
  async function getProposalForStatus() {
    try {
      const Proposaldata = ProposalArray.data;
      const filterproposal = await Proposaldata.map((item) => {
        const Proposalitem = item.status.toLowerCase()
        if ( Proposalitem && Proposalitem === "pending") {
          // SetPending(item);
          
          // console.log(item);
          pendinglist.push(item);

          // SetPending(Pending => ({
          //     myArray: [...Pending, item]
          //   }));
          // SetPending(Pending => ({
          //   ...Pending, item
          // }));
          // SetPending(Pending.concat(item))
          
        }
        else {
          // SetPending(null);
          return item
        }
SetPending(pendinglist);
        // if (item.status.toLowerCase() === "accepted") {
        //   SetAccepted(item);
        // }
        // if (item.status.toLowerCase() === "rejected") {
        //   SetRejected(item);
        // }
        // if (item.status.toLowerCase() === "cancelled") {
        //   SetCancelled(item);
        // }

        return item;
      });
      return filterproposal;
    } catch (err) {
      alert(`Error: ${err}`);
    }
  }

  console.log(Pending);
  // console.log(`Pending id: ${Pending.id}, Pending status: ${Pending.status}, Pending Job desc: ${Pending.job.description}`);
  // console.log(Accepted);
  // console.log(Rejected);
  // console.log(Cancelled);
  // console.log(filterproposal);

  useEffect(() => {
    getProposalForStatus();
    
    // delayState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ProposalArray]);

  // key, CurrentStatus
  return (
    <Container className="dataShowTable pl-0 pr-0" fluid>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="pending" title="Pending">
          <div>
            <ResponsiveTable  data={Pending}/>
{/* { (!Pending) ? <h2>Data is loading please wait </h2> : 
            // <Table responsive="sm" style={ { display: isShown ? 'block' : 'none' } } >  
          }  */}
          </div>
        </Tab>
        <Tab eventKey="accepted" title="Accepted">
          <div>
            {/* <ResponsiveTable data={Accepted} /> */}
          </div>
        </Tab>
        <Tab eventKey="completed" title="Completed">
          <div>
            {/* <ResponsiveTable /> */}
          </div>
        </Tab>
        <Tab eventKey="declined" title="Declined">
          <div>
            {/* <ResponsiveTable data={Rejected} /> */}
          </div>
        </Tab>
        <Tab eventKey="cancelled" title="Cancelled">
          <div>
            {/* <ResponsiveTable data={Cancelled} /> */}
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
};

Tabarea.propTypes = {
  ProposalArray: PropTypes.array,
  // containercontent: PropTypes.string.isRequired,
};

export default Tabarea;
