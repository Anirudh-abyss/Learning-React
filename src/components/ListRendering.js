import React from "react"; 

function ListRendering(){
   const names =['Bruce','Clark','Diana']
   const nameList =names.map(name=>(<h1>{name}</h1>))

   const persons =[{
    id:1,
    name:'Burce',
    heroName:'Batman',
   },
   {
    id:2,
    name:'Clark',
    heroName:'SuperMan'
   },
   {
    id:3,
    name:'Diana',
    heroName:'WonderWomen'
   }
]

const personList = persons.map(person=><h1>{person.id} Hey I am {person.name}and I am the {person.heroName}</h1>)
    return(
        // <div>{nameList}</div>
        <div>{personList}</div>
    )
}
export default ListRendering;