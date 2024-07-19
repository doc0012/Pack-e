import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap'; // Import ProgressBar here
import { Line, Bar } from 'react-chartjs-2';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'chart.js/auto'; // Ensure that chart.js is correctly imported
import './DashboardPage.css'; // Import the CSS file

const DashboardPage = () => {
  // Sample data for the line chart
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Earnings',
        data: [1200, 1900, 3000, 5000, 2000, 3000],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const lineOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Sample data for the bar chart
  const barData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Weekly Sales',
        data: [120, 190, 300, 500, 200, 300, 400],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Container className="mt-4">
      <h2>Seller Dashboard</h2>
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header className="card-header">Earnings Over Time</Card.Header>
            <Card.Body>
              <Line data={lineData} options={lineOptions} />
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header className="card-header">Weekly Sales</Card.Header>
            <Card.Body>
              <Bar data={barData} options={barOptions} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header className="card-header">Total Earnings</Card.Header>
            <Card.Body>
              <h3>15,000DT</h3>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header className="card-header">Total Orders</Card.Header>
            <Card.Body>
              <CircularProgressbar value={58.4} text={`${58.4}DT`} />
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header className="card-header">Market Share</Card.Header>
            <Card.Body>
              <CircularProgressbar value={26} text={`26M`} />
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header className="card-header">Weather</Card.Header>
            <Card.Body>
              <h4>Tunisia</h4>
              <p>31°C, Sunny</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header className="card-header">Trending Pack-e</Card.Header>
            <Card.Body>
              <ul>
                <li>Pack-e #25698 - <ProgressBar now={88} label="88%" /></li>
                <li>Pack-e #54125 - <ProgressBar now={79} label="79%" /></li>
                <li>Pack-e #85236 - <ProgressBar now={90} label="90%" /></li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header className="card-header">Storage</Card.Header>
            <Card.Body>
              <ProgressBar now={85} label="85%" />
              <p>Using 850 U of 1000 U</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header className="card-header">Recent Activities</Card.Header>
            <Card.Body>
              <ul>
                <li>Pack-e #41258 - 3 sold </li>
                <li>Pack-e #58426 - out of stock</li>
                <li>Pack-e #78412 - 3 cancelled</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header className="card-header">Top Products</Card.Header>
            <Card.Body>
              <ul>
                <li>Pack-e #41258 - 125DT</li>
                <li>Pack-e #97412 - 89DT</li>
                <li>Pack-e #65239 - 200DT</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;





