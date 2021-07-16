import React,{useState} from 'react'

export default function SingleQuestion(props) {
 const [hide, setHide] = useState(false)
    return (
        <div>
           
            {
             props.allQuestions.map((quest)=>{
                return (<>
                <article className="question">
                    <header>
                <h4>{quest.title}</h4>
                
                
                    <button className="btn" onClick={()=>{
                        hide?setHide(false):setHide(true)
                    }}>{hide?<i className="fa fa-minus"></i>:<i className="fa fa-plus"></i>}</button>
                    </header>
                    {hide===true?<p>{quest.info}</p>:''}
                    </article>
                    </>
                    )
             })
            }
        </div>
    )
}
