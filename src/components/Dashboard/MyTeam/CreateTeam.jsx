import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CreateTeamForm1, CreateTeamForm2 } from "../../Dashboard";
import { addDataToDB } from "../../../service/firestoreFunctions";
import { useFirebaseAuthentication } from "../../../service/useFirebaseAuthentication";
import { Loader } from "../../UI";
export default function CreateTeam() {
  const [loading, setloading] = useState(false)
  const {checkIfUserIsSignedIn}= useFirebaseAuthentication()
  const user = checkIfUserIsSignedIn()
  const navigate = useNavigate()
    const firstFormValues = useRef()
  const [steps, setSteps] = useState(1);
  

 

  const handlePrev = ()=>{
    setSteps(prev=>prev-1)
  }
  const handleFirstForm = (formVales)=>{
firstFormValues.current = formVales
setSteps(prev=>prev + 1)
  }
  const handleFinish = (teamLineUp)=>{
    const teamInformation = {...firstFormValues.current, formation: "433",}
    try {
      setloading(true)
      addDataToDB(user?.email, teamInformation, teamLineUp).then(()=>{
        navigate("/dashboard/my-team", {replace: true})
       }).catch((error)=>{
        console.log(error);
       }).finally(()=>{
        setloading(false)
       })
    } catch (error) {
      console.log(error)
    }

// navigate("/dashboard/my-team", {replace: true})
  }
  return (
    <div className="px-4 pb-[7rem]">
      <div>
        {steps === 1 && (
          <div>
            <CreateTeamForm1 handleFormOneSubmit={handleFirstForm} />
          </div>
        )}
        {steps === 2 && (
          <div>
            <CreateTeamForm2 handlePrev={handlePrev} handleFinish ={handleFinish} />
          </div>
        )}
       
      </div>
{loading && <Loader />}
    </div>
  );
}
