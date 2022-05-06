import React from 'react'
import {connect} from 'react-redux'
import {addTask} from './actions'
import {useDispatch, useSelector} from 'react-redux';
function Content({appState,addNewTask}) {

  const elementValue = useSelector(state => state);
  const dispatch = useDispatch();
  function handleAddTask(){
    const task=document.querySelector('.task').value;
    addNewTask(task);
  }

  return (
    <div class="content">
      
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className='tasks'>
     
      </div>
            <label>NAME</label>
        <input type="text" className="task" required/><br/><br/>
        <button onClick={handleAddTask}>SUBMIT</button>
        
    </div>
  )
}

const mapStateToProps=(state)=>(
  {
  
     appState:state,
  }
  
  );
  
  const mapDispatchToProps=(dispatch)=>
  ({
    addNewTask:(task)=>dispatch(addTask(task)),
  });

  export default connect(mapStateToProps,mapDispatchToProps)(Content);



