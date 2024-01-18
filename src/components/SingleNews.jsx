import { Button, Card } from 'react-bootstrap';


const SingleNews = ({ news }) => {

    // const date = new Date(news.published)
    // const italia = toLocaleTimeStrin(date, {
    //     locale: 'it-IT',
    //     timeZone: 'Europe/Rome',
    // });

    return(
        <Card style={{width: '400px', height: '700px'}} className='my-3'>
            <Card.Img variant="top" src={news.image} style={{width: '400px', height: '300px'}}/>
            <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.description}</Card.Text>
                <div className='d-flex justify-content-between align-items-center'>
                    <Card.Text className='m-0'>{news.published}</Card.Text>
                    <Button variant="primary">Dettagli</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default SingleNews