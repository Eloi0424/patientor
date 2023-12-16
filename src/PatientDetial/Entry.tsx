import { Divider } from "@mui/material";
import { Diagnosis, Patient } from "../types";

interface Props {
  diagnoses: Diagnosis[];
  entries: Patient["entries"]|undefined;
}



const Entry = (props:Props)=>{
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };



  
  return(
    <>
      entries
      <div>
        {props.entries?.map((entrie)=>{
          switch(entrie.type){
            case "Hospital":
              return(
                <div key={entrie.id}>
                  <p>{entrie.date} {entrie.description}</p>
                  <ul>
                    {entrie.diagnosisCodes?.map((code)=><li key={code}>{code} {props.diagnoses.find((d)=>d.code===code)?.name}</li>)}
                  </ul>
                  <p>diagnose by {entrie.specialist}</p>
                  
                  <Divider/>
                </div>
              );
            case "OccupationalHealthcare":
              return(
                <div key={entrie.id}>
                  <p>{entrie.date} {entrie.description}</p>
                  <ul>
                    {entrie.diagnosisCodes?.map((code)=><li key={code}>{code} {props.diagnoses.find((d)=>d.code===code)?.name}</li>)}
                  </ul>
                  <p>diagnose by {entrie.specialist}</p>
                  <Divider/>
                </div>
              );
            case "HealthCheck":
              return(
                <div key={entrie.id}>
                  <p>{entrie.date} {entrie.description}</p>
                  <ul>
                    {entrie.diagnosisCodes?.map((code)=><li key={code}>{code} {props.diagnoses.find((d)=>d.code===code)?.name}</li>)}
                  </ul>
                  <p>diagnose by {entrie.specialist}</p>
                  <p>healthCheakRating {entrie.healthCheckRating}</p>
                  <Divider/>
                </div>
              );
            default:
              return assertNever(entrie);
          }
        })}
      </div>
    </>
  );
};



export default Entry;