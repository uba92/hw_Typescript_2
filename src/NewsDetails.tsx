import { Col, Container, Row, Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import IResult from "./types/Results"

const NewsDetails = () => {

    const[news, setNews] = useState<IResult>()
    const params = useParams()
    console.log(params)
    const baseURL = 'https://api.spaceflightnewsapi.net/v4/articles'

    const getData = async() => {
        try {
            const response = await fetch(baseURL + '/' + params.id) 
            if(response.ok) {
                const singleNew = await response.json()
                console.log(singleNew)
                setNews(singleNew)
            }
        } catch (error) {
            console.log(error)
        }
    }

    if(news) {
            console.log('news State', news)
        }
        useEffect(() => {
            getData()
        }, [params.id])
    return(
        <Container>
            <Row>
                <Col>
                {news && (
                    <Card style={{height: '80vh', overflow: 'hidden'}}>
                    <Card.Img variant="top" src={news.image_url} style={{height: '80%'}}/>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      
                    </Card.Body>
                  </Card>
                )}
                </Col>
            </Row>

        </Container>
    )
}

export default NewsDetails