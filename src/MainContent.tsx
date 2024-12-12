import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import IResponse from "./types/Response"
import SingleNews from "./SingleNews"

const MainContent = () => {



    const[news, setNews] = useState<IResponse>()

    const baseURL = 'https://api.spaceflightnewsapi.net/v4/articles'
    const getData = async() => {
        
        try {
            const response = await fetch(baseURL) 
            if(response.ok) {
                const arrayOfNews = await response.json()
                console.log(arrayOfNews)
                setNews(arrayOfNews)
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
    }, [])
    return(
        <Container className=" p-3">
            <Row className=" g-3">
                {news && (
                    news.results.map((n, i) => {
                        return(
                            <Col key={i} xs={12} md={4} lg = {3}>
                                <SingleNews singleNew={n}/>
                            </Col>
                        )
                    })
                )}
            </Row>
        </Container>
    )
}

export default MainContent