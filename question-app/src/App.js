import React, { useState } from 'react';
import data from './QuestionData'
import './App.css';
import SingleQuestion from './SingleQuestion';
function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <>
      <div className="App">
        <main>
          <div className='container'>
            <h3>Top Questions</h3>
            <section className='info'>
              <SingleQuestion allQuestions={questions} />
            </section>
          </div>
        </main>
      </div >
    </>
  );
}

export default App;
