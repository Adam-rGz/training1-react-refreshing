import React, {useState} from 'react';

const NewGoal = props => {
  const [enteredText, setEnteredText] = useState('');

  const addGoalHandler = event => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText
    };
    setEnteredText('');
    props.onAddGoal(newGoal);
  };

    const textChangeHandler = event => {
      setEnteredText(event.target.value);
    }

  return(
    <form className="new-goal" onSubmit={addGoalHandler} >
      <input type="text" value={enteredText} onChange={textChangeHandler}/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewGoal;