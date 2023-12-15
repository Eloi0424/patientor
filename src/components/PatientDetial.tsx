import { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import patientServices from "../services/patients";
import { Patient } from "../types";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

const PatientDetail = () => {
  const match = useMatch("/patients/:id");
  const [patient, setPatient] = useState<Patient>();
  useEffect(() => {
    patientServices.getOne(match?.params.id as string).then((patient) => setPatient(patient));
  }, [match]);

  return(
    <>
      <h1>{patient?.name}</h1>
      {patient?.gender==="male" && <MaleIcon/>}
      {patient?.gender==="female" && <FemaleIcon/>}
      <p>{patient?.dateOfBirth}</p>
      <p>{patient?.occupation}</p>


      entries

      <p>{patient?.entries.map((entrie)=>{
        return(
          <div>
            <p>{entrie.date}</p>
            <p>{entrie.description}</p>
            <ul>
              {entrie.diagnosisCodes?.map((code)=>{
                return(
                  <li>{code}</li>
                );
              })}
            </ul>
          </div>
        );
      })}</p>



    </>
  );
};



export default PatientDetail;