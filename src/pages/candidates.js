import "./pagestyles.css";
import React, { useEffect } from "react";
import { Dropdown, Button, Form } from "react-bootstrap";
import { db } from "../firebase";
import { collection, getDocs, setDoc, doc, addDoc } from "firebase/firestore";
import { useState } from "react";

function Candidates() {
  const [elections, setElections] = useState([]);
  const [loader, setLoader] = useState(true);
  const [candidate, setCandidate] = useState({
    name: "",
    post: "",
    electionId: "",
  });

  async function getelections() {
    const electionRef = collection(db, "elections");
    const data = await getDocs(electionRef);
    let electionData = [];
    data.docs.forEach((doc) => {
      electionData.push({ ...doc.data(), id: doc.id });
    });
    return electionData;
  }

  useEffect(async () => {
    const data = await getelections();
    setElections(data);
    setLoader(false);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const candidateRef = collection(db, "candidates");
    await addDoc(candidateRef, candidate);
    window.location.href = "/candidates";
  }

  return (
    <>
      {loader && (
        <>
          <h1>loading</h1>
        </>
      )}

      {!loader && (
        <>
          <div className='mt-4 text-center w-100 '>
            <Form className='add' onSubmit={handleSubmit}>
              <input
                type='name'
                placeholder='enter name'
                id='name1'
                name={candidate.name}
                value={candidate.name}
                required
                onChange={(e) => {
                  setCandidate({ ...candidate, name: e.target.value });
                }}
              />

              <input
                type='name'
                placeholder='post name'
                id='post1'
                name={candidate.post}
                value={candidate.post}
                required
                onChange={(e) => {
                  setCandidate({ ...candidate, post: e.target.value });
                }}
              />

              <Dropdown>
                <Dropdown.Toggle variant='info' id='dropdown-basic'>
                  Select Election
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {elections.map((elect) => (
                    <Dropdown.Item
                      key={elect.id}
                      id={elect.id}
                      onClick={(e) => {
                        console.log(e.target);
                        setCandidate({
                          ...candidate,
                          electionId: e.target.id,
                        });
                      }}
                    >
                      {elect.title}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Button className='mt-4' type='submit'>
                Submit
              </Button>
            </Form>
          </div>
        </>
      )}
    </>
  );
}

export default Candidates;
