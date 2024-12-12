import { Card } from "react-bootstrap"
import IResult from "./types/Results"

interface SingleNewsProps {
    singleNew: IResult
}

const SingleNews = (props: SingleNewsProps) => {
    return(
        <Card style={{height: '100%', overflow: 'hidden'}}>
      <Card.Img variant="top" src={props.singleNew.image_url} style={{height: '200px'}}/>
      <Card.Body>
        <Card.Title>{props.singleNew.title}</Card.Title>
        <Card.Text>
          {props.singleNew.published_at}
        </Card.Text>
        
      </Card.Body>
    </Card>
    )
}

export default SingleNews