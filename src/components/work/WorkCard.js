import React from "react";
import { Card, Col } from "react-bootstrap";

const WorkCard = ({ work }) => {
  const startDate = new Date(work.startDate);
  const endDate = new Date(work.endDate);
  const workDuration =
    startDate.toLocaleString("en-US", { month: "short", timeZone: "UTC" }) +
    " " +
    startDate.getUTCFullYear() +
    " - " +
    (work.endDate.toLowerCase() === "present"
      ? "Present"
      : endDate.toLocaleString("en-US", { month: "short", timeZone: "UTC" }) +
        " " +
        endDate.getUTCFullYear());

  return (
    <Col>
      <a
        href={work.website || "#"}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card style={{ height: "100%", cursor: "pointer" }}>
          <Card.Img variant="top" src={work.logoURL} />
          <Card.Body>
            <Card.Title>{work.company}</Card.Title>
            <Card.Subtitle>{work.position}</Card.Subtitle>
            <Card.Text>{workDuration}</Card.Text>
            <Card.Text className="summary">{work.summary}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
};

export default WorkCard;
