import { useEffect, useState } from "react";
import { Container, Row, Col} from 'react-bootstrap';
import SingleNews from "./SingleNews";


const MyList = (  ) => {

    const [news, setNews] = useState([]);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        const url = "https://api.spaceflightnewsapi.net/v4/articles/?limit=15";
        try {
            const resp = await fetch(url)
            if (resp.status >= 300) {
                setError(true);
                console.log('Qualcosa è andato storto')
                return
            }
            const newsArray = await resp.json();
            const news = newsArray.results.map(nw => {
                return {
                    id: nw.id,
                    title: nw.title,
                    image: nw.image_url,
                    description: nw.summary,
                    published: nw.published_at
                }
            });
            console.log(news)
            setNews(news);
            setError(false);
        } catch (error) {
            setError(true);
            console.log('Errore', error);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <Container>
          <Row>
            {news.map((newsItem) => (
              <Col xs={12} sm={6} md={4} key={newsItem.id}>
                <SingleNews news={newsItem} />
              </Col>
            ))}
          </Row>
        </Container>
    )
}

export default MyList