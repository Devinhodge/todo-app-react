import React from 'react';

function TodoCard (props) {


  const {title, clickToRemove, index } = props
  return (
    <li style={{ listStyle: "none", color: "#ff1ba5", fontWeight: "bold", fontSize: "25px", textAlign: "center",  }}>{title}
      <button style={{ backgroundColor: "transparent", borderColor: "#ff1ba5", color: "grey", textDecoration: "underline", textDecorationColor: "#ff1ba5", padding: "5px", fontSize: "18px", fontStyle: "italic", fontWeight: "bold", marginLeft: "15px", borderRadius: "12px"}}onClick={()=>{clickToRemove(index)}}>Delete</button>
    </li>
    
  )
}

export default TodoCard