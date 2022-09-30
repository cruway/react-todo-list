import {IToDo} from "../atoms";

function ToDo({text,category}:IToDo) {
    const onClick = (newCategory: IToDo["category"]) => {
        console.log("i wanna to ", newCategory)
    };
    return (
        <li>
            <span>{text}</span>
            {category !== "DOING" && <button onClick={() => onClick("DOING")}>To Do</button>}
            {category !== "TO_DO" && <button onClick={() => onClick("TO_DO")}>Doing</button>}
            {category !== "DONE" && <button onClick={() => onClick("DONE")}>Done</button>}
        </li>
    );
}

export default ToDo;