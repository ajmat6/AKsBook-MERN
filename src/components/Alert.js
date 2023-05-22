import React from 'react'

export default function Alert(props) {
  const capitalize = (word) => {
    if(word === 'danger')
    {
        word = 'error';
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1); //1 is not included in the slice.
  }

  return (
    //props.alert && acts like if else so if props.alert is null then the next will not render and it will not cause any error in the program.
    //js is written in className below to make the alert color button according to the alert type.
    //below div is used to solve alert component shifting the layout:

    <div style={{height: '50px'}}>
            {props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong className='text-center'>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>}
    </div>
  )
}
