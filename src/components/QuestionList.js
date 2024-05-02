import React,{useState,useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({setQuestions,questions,delFormData}) {
  
  useEffect(()=>{
  fetch("http://localhost:4000/questions")
  .then(r=>r.json())
  .then(data=> setQuestions(data))
  .catch(err=>console.err(err))
  },[])



let questionList = null
  if(questions){
    questionList = questions.map((question,index)=>
    <QuestionItem question={question} key={index} setQuestions={setQuestions} questions={questions}/>)
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {questionList}
      </ul>
    </section>
  );
}

export default QuestionList;
