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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [params.id])
    return(
        <Container>
            <Row>
                <Col>
                {news && (
                    <Card style={{height: '80vh', overflow: 'hidden'}}>
                    <Card.Img variant="top" src={news.image_url} style={{height: '80%'}}/>
                    <Card.Body>
                      <Card.Title>{news.title}</Card.Title>
                      <Card.Text>
                       Pubblicato il  {news.published_at}
                      </Card.Text>
                      <Card.Text>
                        {news.summary}
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