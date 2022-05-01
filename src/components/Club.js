import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { db } from "../firebase";
import "../pages/pagestyles.css";
import { collection, query, getDocs, where } from "firebase/firestore";

function Club() {
  const [voted, setVoted] = useState(false);
  const [candidateData, setCandidateData] = useState([]);
  const [loader, setLoader] = useState(true);

  const search = useLocation().search;
  const electionId = new URLSearchParams(search).get("id");

  const voteCount = {};

  async function getCandidateList() {
    const candidateColRef = collection(db, "candidates");
    const q = query(candidateColRef, where("electionId", "==", electionId));
    const data = await getDocs(q);
    const candList = [];
    data.docs.forEach((doc) => {
      candList.push({ ...doc.data(), id: doc.id });
    });
    return candList;
  }

  useEffect(async () => {
    const li = await getCandidateList();
    setCandidateData(li);
    setLoader(false);
  }, []);

  const notify = () =>
    toast.success("🦄 Thanks for Voting!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const vote = (e) => {
    // const id = e.target.id;
    // voteCount[id] += 1;
    setVoted(true);
    notify();
  };

  const Candidate = ({ cand }) => {
    return (
      <tr id={"1"}>
        <td id={"1"}>1</td>
        <td>{cand.name}</td>
        <td>{cand.post}</td>
        <td id='1'>
          <button
            className='vote-button'
            value='1'
            id='1'
            disabled={voted}
            onClick={vote}
          >
            Vote Confirm
          </button>
        </td>
      </tr>
    );
  };

  console.log(voteCount);
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1%" }}>ACM Elections</h1>
      <Table striped bordered hover variant='light' style={{ marginTop: "2%" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Post</th>
            <th>Vote</th>
          </tr>
        </thead>
        <tbody>
          <>
            {loader && (
              <>
                <h1 className='text'>Loading...</h1>
              </>
            )}
            {!loader && (
              <>
                {candidateData.map((doc) => {
                  return <Candidate cand={doc} />;
                })}
              </>
            )}
          </>
        </tbody>
      </Table>
      <ToastContainer
        position='top-center'
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

export default Club;
