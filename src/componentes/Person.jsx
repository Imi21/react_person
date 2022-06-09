
// const Person = (props) => {
//     console.log(props.objeto.name)
//   return (
//       <div>
//     <span>{props.objeto.name}</span>
//     <span>{props.objeto.surname}</span>
//     <span>{props.objeto.age}</span>
//     </div>
//   )
// }

// export default Person



import React, { Component } from 'react'

export class Person extends Component {
  render() {
    return (
      <div>
          <span>
              nombre: {this.props.objeto.name} <br/>
              apellido: {this.props.objeto.surname}<br/>
              edad: {this.props.objeto.age}
          </span>
      </div>
    )
  }
}

export default Person