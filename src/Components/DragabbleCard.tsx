import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface CardProps {
  isDragging: boolean;
}

const Card = styled.div<CardProps>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) => (props.isDragging ? "#74b9ff" : "white")};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 25px rgba(0,0,0,0.5)" : "none"};
`;

interface DragabbleCardProps {
  toDo: string;
  index: number;
}

function DragabbleCard({ toDo, index }: DragabbleCardProps) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
