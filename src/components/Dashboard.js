import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  getFirestore,
} from "firebase/firestore";
import Card from "./Card";

async function getUsers() {
  const usersRef = collection(db, "users");
  const usersData = await getDocs(usersRef);

  return usersData;
}

async function postUser(user) {
  try {
    let user = {
      name: "some",
      age: 20,
      img: "url",
    };
    const usersRef = collection(db, "users");
    await setDoc(doc(usersRef), user);
    return 1;
  } catch (e) {
    console.log(e);
  }
}

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [userData, setUserData] = useState([]);
  const db = getFirestore();
  const [elections, setElections] = useState([]);
  const [loader, setloading] = useState(true);
  const colRef = collection(db, "elections");

  let electData = [];
  getDocs(colRef)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        electData.push({ ...doc.data(), id: doc.id });
      });
      setElections(electData);
      setloading(false);
    })
    .catch((err) => {
      console.log(err.message);
    });

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      {loader && (
        <>
          <h1>Loading...</h1>
        </>
      )}

      {!loader && (
        <>
          <div className='wrapper mt-5'>
            {elections.map((card) => {
              return (
                <Card
                  key={card.id}
                  id={card.id}
                  img={card.img}
                  title={card.title}
                  description={card.description[0].candidates}
                  date='End Date: 5th May'
                  route='/club'
                />
              );
            })}
          </div>

          <div className='w-100 text-center mt-3'>
            <Button variant='link' onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </>
      )}
    </>
  );
}
