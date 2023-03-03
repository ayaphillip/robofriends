import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'; 
import { robots } from './robots';


const App = () => {
    return(
        //remeber to use div since the return can only output one element
        <div className='tc'>
           <h1>RoboFriends</h1>
            <SearchBox />
            <CardList robots={robots}/> 
        </div>   
    );
}

export default App;