import React from "react";

function Task({
    idx,
    taskName,
    date,
    taskList,
    setTaskList
}) {

    function removeTask() {
        const updatedTasks = taskList.filter((_, index) => idx!==index);
        setTaskList(updatedTasks);

    }

    return(
        <div className="flex flex-wrap justify-center items-center gap-3">
            <p>
                {taskName}
            </p>

            <p>
                {date}
            </p>

            <button
            onClick={removeTask}
            className="px-3 py-2 bg-red-400 cursor-pointer rounded-xl">
                Delete
            </button>
        </div>
    )
}

export default Task;