import { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import patientServices from "../services/patients";
import { Diagnosis, Patient } from "../types";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';


interface Props {
  diagnoses: Diagnosis[];
}





const PatientDetail = (props:Props) => {
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

      <div>{patient?.entries.map((entrie)=>{
        return(
          <div key={entrie.id}>
            <p>{entrie.date}</p>
            <p>{entrie.description}</p>
            <ul>
              {entrie.diagnosisCodes?.map((code)=>{
                return(
                  <li key={code}>{code} {props.diagnoses.find((diagnose)=>{
                    return diagnose.code===code;
                  })?.name}</li>

                  //todo : 输出对应 名字
                );
              })}
            </ul>
          </div>
        );
      })}</div>



    </>
  );
};



export default PatientDetail;