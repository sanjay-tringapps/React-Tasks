const initialState=['HEADER','FOOTER','Item1','Item2','Item3']

const appReducer=(state,action)=>{
  
  const inter=[action.task,action.task,initialState[2],initialState[3],initialState[4]]
  
   switch(action.type){

       case 'ADD_TASK':
          return inter;  

          default:     
            return initialState;
   }
   
};

export default appReducer;

