import React, { useState } from 'react';
import GoalList from './components/GoalsList/GoalsList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course main topic'},
    {id: 'cg3', text: 'help other bla bla'},
  ]);


  const addNewGoalHandler = newGoal => {
    //setCourseGoals(courseGoals.concat(newGoal));

    //jesli state update zalezy od poprzedniego state'u
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    })
  }
  return (
    <div className="course-goals">
      <h2>Course goals!</h2>;
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>

  )
};

export default App;
