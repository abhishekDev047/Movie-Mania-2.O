import React from 'react'

const Errors = (props) => {
    let  data = props.data ;
    if (data.Response === false) {
          return (
    <div> Sorry could not found <i> " {props.val}"</i></div>
  )
    } else {
        <div> please search something</div>
    }

}

export default Errors;