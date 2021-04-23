import React, { useState } from 'react'

import TinderCard from 'react-tinder-card'

import './TinderCards.css'

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: 'Nature',
            url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },
        {
            name: 'Nature',
            url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },
        {
            name: 'Nature',
            url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },
    ])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name +  " Left The Screen")
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards_CardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}>

                        <div
                            style={{ backgroundImage: `url(${person.url})`}}
                            className="card">

                            <h3>{person.name}</h3>

                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
