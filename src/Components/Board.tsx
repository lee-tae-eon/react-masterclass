import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

interface BoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: BoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(provided) => (
        <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
          {toDos.map((toDo, index) => (
            <DragabbleCard key={toDo} toDo={toDo} index={index} />
          ))}
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
}

export default Board;
