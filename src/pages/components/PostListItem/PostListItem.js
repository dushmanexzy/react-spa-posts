import React from 'react';
import {Button, Card, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import {capitalizeText} from "../../../utils/capitalizeText";

import './postlistitem.css';

export function PostListItem({post}) {
  const {id, userId, title, body} = post;

  return (
      <Card className={`post-container`}>
        <Card.Body className={`post`}>
          <Link to={'/more'}>
            <Image
              className={`avatar`}
              src={`https://cdn-icons-png.flaticon.com/512/3607/3607444.png`}
            />
          </Link>
          <Card.Title className={`post-title`}>{capitalizeText(title)}</Card.Title>
          <Card.Text className={`post-text`}>{capitalizeText(body)}</Card.Text>

          <div className={`comments`}>
            Комментарии
          </div>
        </Card.Body>
        <Button className={`primary post-text`}>Комментарии</Button>
      </Card>
  );
}
