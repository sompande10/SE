import React, { useState } from "react";
import "./pagestyles.css";
import ReportCard from "../components/ReportCard";
import "../pages/pagestyles.css";
import Card from "../components/Card";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Reports() {
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
                <ReportCard
                  key={card.id}
                  id={card.id}
                  img={card.img}
                  title={card.title}
                  description={card.description[0].candidates}
                  date='End Date: 5th May'
                  route='/result'
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Reports;
