import React, { useState, useEffect } from "react";
import ListContainer from '../components/ListContainer';
import dataJobs from '../assets/data/dataJobs.json';
import {Redirect, useLocation} from "react-router-dom";
import * as qs from 'query-string';

function GoCardlessRedirect(props){
  const [isComplete, setIsComplete] = useState(false);
  const [failed, setFailed] = useState(false);
  let location = useLocation();
  const parsed = qs.parse(location.search);
  const redirect_flow_id = parsed.redirect_flow_id;

  useEffect(() => {
    fetch(`https://3f9fhnxjd4.execute-api.eu-west-2.amazonaws.com/default/goCardlessCompletionService?redirect_flow_id=${redirect_flow_id}`)
    .then(response => {
      if(response.ok)
      {return response.text();}
      setFailed(true);
      throw new Error('Something went wrong.');
    })  
    .then(() => setIsComplete(true))
    .catch(error => console.log(error) );
  }, [redirect_flow_id]);

  return (
    <div>
      {isComplete
        ? <Redirect to="/gocardless-success" />
        : <ListContainer data={dataJobs} theme={props.theme} background={dataJobs[0].background} colorTitle={dataJobs[0].colorTitle} title={dataJobs[0].type}/>
      }
      {failed
        ? <Redirect to="/gocardless-failed" />
        : <ListContainer data={dataJobs} theme={props.theme} background={dataJobs[0].background} colorTitle={dataJobs[0].colorTitle} title={dataJobs[0].type}/>
      }
    </div>
  );
}

export default GoCardlessRedirect