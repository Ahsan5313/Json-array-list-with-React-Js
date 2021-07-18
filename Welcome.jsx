import React, {Component} from 'react'
import './style.css'



class Welcome extends Component{


  render(){

      const names = [

        {name: 'Ahsan', age : 21, grade : 2.71},
        {name:'nul', age : 22, grade: 2.72},
        {name:'huq', age : 23, grade: 2.73}

      ]

      const itmes = names.map((item, ind) =>{

          return <li key={ind}>Name : {item.name}, Age : {item.age}, Grade : {item.grade}</li>

      })

    return(

      <div>   

       {itmes}
      
             
      </div>
    )
  }

}

export default Welcome;

