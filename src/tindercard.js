import Person from '@mui/icons-material/Person';
import React, { useState,useEffect} from 'react'
import './tindercard.css';

import TinderCard from 'react-tinder-card';
import { SwipeableDrawer } from '@mui/material';

function TinderCardd() {
    const [people,  setPeople] = useState([]);
    userEffect(()=>{
        async function fetchData(){
            const req=await axios.get('/tinder/cards');

            setPeople(req.data);
        }
        fetchData(req.data);
    },[])
     const Swiped=(direction,namedelete)=>{
         console.log("removing"+namedelete);
    //   setLastdirection(direction); 
     }
     const outOfFrame=(name)=>{
    
        console.log(name+"left th escreen");
     }
    return (
        <div className="tindercard">
            <div className="cardcontainer">
            {  people.map((people)=>{
             
                return(  <TinderCard 
               className="swipe"
               key={people.name}
               preventSwipe={['right', 'left']}
               onSwipe={(dir)=>Swiped(dir,people.name)} 
               onCardLeftScreen={() =>outOfFrame(people.name)}>

           <div
           className="card"
           style={{backgroundImage: `url(${people.url})`}}>
               <h3>{people.name}</h3>

           </div>
            </TinderCard>
            
             ) })}
            </div>
                    
        </div>
    )
}

export default TinderCardd
