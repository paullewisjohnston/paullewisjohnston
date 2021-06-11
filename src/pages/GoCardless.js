import React, { useEffect } from "react";
import ListContainer from '../components/ListContainer';
import dataJobs from '../assets/data/dataJobs.json';

function GoCardless(props){
  useEffect(() => {
    fetch(`https://a8vg3fnxx8.execute-api.eu-west-2.amazonaws.com/default/goCardlessService`)
    .then(response => response.json())
    .then(data => window.location.href = data.location)
  }, []);

  return (
    <div>
      <ListContainer data={dataJobs} theme={props.theme} background={dataJobs[0].background} colorTitle={dataJobs[0].colorTitle} title={dataJobs[0].type}/>
    </div>
  );
}

export default GoCardless