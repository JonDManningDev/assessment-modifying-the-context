import { createContext, useState, useEffect } from "react";

export const TasksContext = createContext({
    tasks: [],
    setTasks: () => {},
});

export function TasksContextProvider({ initialData, children }) {
    const [tasks, setTasks] = useState(initialData);

    useEffect(() => {
        console.log(tasks);
    }, [tasks])

    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TasksContext.Provider>
    );
}