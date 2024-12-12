import { Card } from "react-bootstrap"
import IResult from "./types/Results"
import { Link } from "react-router-dom"

interface SingleNewsProps {
    singleNew: IResult
}

const SingleNews = (props: SingleNewsProps) => {
    return(
        <Link to={'/details/' + props.singleNew.id} className='nav-link'>
        <Card style={{height: '100%', overflow: 'hidden'}}>
      <Card.Img variant="top" src={props.singleNew.image_url} style={{height: '200px'}}/>
      <Card.Body>
        <Card.Title>{props.singleNew.title}</Card.Title>
        <Card.Text>
          {props.singleNew.published_at}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Link>
    )
}

export default SingleNews