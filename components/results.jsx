import React from 'react';

const Results = ( props ) => {


  const cardGenerator = (reps) => {
    
    let result = []
    
    reps.map((rep) => {
      result.push(
        <div>
          {rep.bio.first_name} {rep.bio.last_name}
        </div>
      )
    })

    return result
  }

  return (
    <div>
      {cardGenerator(props.reps)}
    </div>
  )
}

export default Results;