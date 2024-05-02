import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions,setQuestions] =useState(null)
 function handleFormData(formData){
  console.log(formData)
  setQuestions([...questions,formData])
 }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ?
       <QuestionForm  AddFormdata={handleFormData}/> 
       : <QuestionList   delFormData={handleFormData}  setQuestions={setQuestions}  questions={questions}/>}
    </main>
  );
}

export default App;
