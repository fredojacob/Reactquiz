import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Quiz() {
  return (

    <div className="contenedor cardd imgg" border="primary">
      <Card style={{
        width: '18srem'
      }}>
        <Card.Img className="imgg" variant="top" src="https://hackaday.com/wp-content/uploads/2018/09/mainimage1994606812-e1537821758611.jpg?w=640" />
        <Card.Body>
          <Card.Title> Quiz Gamee</Card.Title>
          <Card.Text>
            Do you want to play Game??
                    </Card.Text>
          <Link to='/questionOne'>
            <Button variant="primary"> Star de Game </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Quiz;