// EntertainmentNews.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const EntertainmentNews = () => {
  const [entertainmentData, setEntertainmentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://inshortsapi.vercel.app/news?category=entertainment');
        const data = await response.json();
        setEntertainmentData(data.data);
      } catch (error) {
        console.error('Error fetching entertainment news data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container fluid className="my-4 d-flex flex-column align-items-center">
      <h2 className="mb-4">Entertainment News</h2>
      <Row xs={1} md={3} className="g-4">
        {entertainmentData.map((article) => (
          <Col key={article.id} className="mb-3">
            <Card style={{ height: '100%' }}>
              {article.imageUrl && (
                <Card.Img
                  variant="top"
                  src={article.imageUrl}
                  alt={article.title}
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              )}
              <Card.Body>
                <Card.Title style={{ minHeight: '60px' }}>{article.title}</Card.Title>
                <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', maxHeight: '100px' }}>
                  {article.content}
                </Card.Text>
                <Card.Link href={article.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EntertainmentNews;
