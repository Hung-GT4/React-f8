import React from "react";
import { useState } from "react";
import Content from "./Content";

interface Todos {
  id: string;
  todo: string;
}
//TOLISST 
function App() {
  // const [job, setJob] = useState<string>("");
  // const [jobs, setJobs] = useState<Todos[]>(() => {
  //   const storageJob = JSON.parse(localStorage.getItem("jobs") ?? "[]");
  //   console.log(storageJob);
  //   return storageJob;
  // });
  //api
  // useEffect(() => {
  //   fetch("https://62e897e393938a545be80ba5.mockapi.io/Todos").then((res) =>
  //     res.json().then((jobs) => {
  //       // console.log(jobs);
  //       setJobs(jobs);
  //     })
  //   );
  // }, []);
  // const handleSubmit = () => {
  //   setJobs(() => {
  //     const newJob: Todos = {
  //       id: "",
  //       todo: job,
  //     };
  //     //add new job
  //     const newJobs = [...jobs, newJob];

  //     // save to local storage
  //     const jsonJobs = JSON.stringify(newJobs);
  //     localStorage.setItem("job", jsonJobs);

  //     return newJobs;
  //   });
  //   setJob("");
  // };

  //
  const [show, setShow] = useState(false)
  return (
    <div className='App'>
      {/* <header className='App-header'>
        <div className='Submit'>
          <input value={job} onChange={(e) => setJob(e.target.value)} />
          <button onClick={handleSubmit}>add</button>
          <ul>
            {jobs.map((newJob) => {
              console.log(job);
              return <li key={newJob.id}>{newJob.todo}
              </li>;
            })}
          </ul>
        </div>
      </header> */}
      <main>
        {/* dấu chấm than(!) là một toán tử đảo ngược chuỗi  */}
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <Content />}
      </main>
    </div>
  );
}



export default App;