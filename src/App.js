import React, { useState }  from 'react';
import NameForm from './NameForm';
import AddWord from './addWord';
import HistoryWord from './History'


const App2 = () =>{
    return <div id="techword">Technical words in Georgian</div>
}


function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    if(count === 3){
      return(
        <div>
        <p>count is : 3</p>
        </div>
      )
    }
    return (
      <div id="increment">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }


const App = () => {
    return <div>
        <App2 />
        <NameForm />
        <AddWord />
        <HistoryWord />
        {/*<Example />*/}
    </div>
}
export default App