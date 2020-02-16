import React from "react";
import { Card, Avatar } from "antd";
import StarWars from "../Assets/star_wars.png";

export default function Person({ person }) {
  return (
    <div>
      <Card style={{ width: 300, marginTop: 16 }}>
        <Card.Meta
          avatar={<Avatar src={StarWars} />}
          title={person.name}
          description={person.gender}
        />
      </Card>
    </div>
  );
}
