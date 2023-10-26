function StartScreen({questions, dispatch}) {
    return (
        <div className="start">
           <h2>Welcome to React Quiz</h2>
           <h3> {questions.length} Questions to test your React knowledge </h3>
           <button className="btn btn-ui" onClick={()=>dispatch({type:"start"})}>Start</button>
        </div>

    
    )
}

export default StartScreen
