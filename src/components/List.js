import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


let data = {
  1: 0,
  2: 0,
  3: 0,
};

function List() {
  const [voted, setVoted] = useState(false);

  const notify = () =>
    toast.success("Thanks for Voting!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const vote = (e) => {
    data[e.target.value] += 1;
    setVoted(true);
    console.log(data);
    notify();
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1%" }}>ACM Elections</h1>
      <Table striped bordered hover variant="light" style={{ marginTop: "2%" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Post</th>
            <th>Vote</th>
          </tr>
        </thead>
        <tbody>
          <tr id={"1"}>
            <td id={"1"}>1</td>
            <td>Mark</td>
            <td>President</td>
            <td id="1">
              <button className="vote-button" value="1" id="1" onClick={vote} disabled={voted}>
                Vote Confirm
              </button>
            </td>
          </tr>
          <tr id={"2"}>
            <td>2</td>
            <td>Jacob</td>
            <td>President</td>
            <td id="2">
              <button className="vote-button" value="2" id="2" onClick={vote} disabled={voted}>
                Vote Confirm
              </button>
            </td>
          </tr>
          <tr id={"3"}>
            <td>3</td>
            <td>Larry</td>
            <td>Secretary</td>
            <td id="3">
              <button className="vote-button" value="3" id="3" onClick={vote} disabled={voted}>
                Vote Confirm
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default List;
