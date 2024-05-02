import React from "react";

function QuestionItem({ question,setQuestions,questions }) {
  const { id, prompt, answers, correctIndex } = question;
 function handleCorrectAnsChange (event){
  const selectedValue = event.target.value;
  console.log(selectedValue);
  fetch (`http://localhost:4000/questions/${id}`,{
   method:"PATCH",
   headers:{
    "Content-Type": "application/json" 
   },
   body:JSON.stringify({
    "correctIndex" : selectedValue
  })
  }).then(r=>r.json())
  .then(updatedData=>{
    console.log(updatedData)
    changeCorrectAns(selectedValue)})
  .catch(err=>console.error(err))
 }
 function changeCorrectAns(selectedValue){
  setQuestions(questions.map(q=>q.id===id ? {...q, correctIndex : selectedValue}:q))
 }
  const options = answers.map((answer, index) => (
    <option 
    key={index} 
    value={index}
    >
   {index}. {answer}
    </option>
  ));
  function delFormData(deletedData){
    console.log(deletedData)
    setQuestions(questions.filter(q=>q.id !== id))
  }
  
  function handleDelete (){
    console.log(id)
    fetch (`http://localhost:4000/questions/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    }).then(r=>r.json())
    .then(deletedData=>delFormData(deletedData))
    .catch(err=>console.error(`error deleting data ${err}`))

  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleCorrectAnsChange}>
          {options}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
