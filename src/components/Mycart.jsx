import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cra(props){
return(
<div>
<Card key={props.key} style={{ width: '18rem' }}>

<Card.Img variant= "top" src ={props.img} style={{ width:"150px",height:"150px",borderRadius:"100%" }} className='mx-auto'/>
<Card.Body>
<Card.Title style={{textAlign:"center"}}> {props.name}</Card.Title>
<Card.Text style={{textAlign:"center"}}>
{props.job}

</Card.Text>

</Card.Body>
</Card>


</div>


)


}
export default Cra