import {Categories, IToDo, toDoState} from "../atoms";
import React from "react";
import {useSetRecoilState} from "recoil";

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: {name},
        } = event;
        setToDos(oldToDos => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const newToDo = { text, id, category: name as any };
            if(newToDo.category === Categories.DELETE) {
                return [
                    ...oldToDos.slice(0, targetIndex),
                    ...oldToDos.slice(targetIndex + 1),
                ];
            } else {
                return [
                    ...oldToDos.slice(0, targetIndex),
                    newToDo,
                    ...oldToDos.slice(targetIndex + 1),
                ];
            }
        });
    };
    return (
        <li>
            <span>{text}</span>
            {category !== Categories.TO_DO && (
                <button name={Categories.TO_DO} onClick={onClick}>To Do</button>
            )}
            {category !== Categories.DOING && (
                <button name={Categories.DOING} onClick={onClick}>Doing</button>
            )}
            {category !== Categories.DONE && (
                <button name={Categories.DONE} onClick={onClick}>Done</button>
            )}
            <button name={Categories.DELETE} onClick={onClick}>X</button>
        </li>
    );
}

export default ToDo;