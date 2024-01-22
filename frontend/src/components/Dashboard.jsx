import { useState } from "react";
import { WrapperCard } from "./WrapperCard";
import CreateTask from "./CreateTask";

export default function Dashboard(){
    const [tasks,setTasks] = useState([{
        id:1,
        title: "Go to Gym",
        description: "go to gym everyday",
        isCompleted: false
    },{
        id:2,
        title: "Go to Gym2",
        description: "go to gym everyday2",
        isCompleted: false
    },{
        id:3,
        title: "Go to Gym3",
        description: "go to gym everyday3",
        isCompleted: false
    },{
        id:4,
        title: "Go to Gym4",
        description: "go to gym everyday4",
        isCompleted: false
    }]);

    return <div>
            <CreateTask/>
            {tasks.map((task) => {
                return <WrapperCard key={task.id}> 
                    <div style={{
                            // border:"2px solid black"
                        }}>
                        <h2 style={{
                            marginBottom:"8px",
                            // border:"2px solid black"
                        }}>{task.title}</h2> 
                        <h3 style={{
                            // border:"2px solid black"
                        }}>{task.description}</h3>
                    </div>

                    <div style={{marginLeft:"auto" , 
                                display :"flex" , 
                                flexDirection:"column"}}>
                        <button style={{
                            marginBottom:"8px",
                            padding: "5px",
                            boxShadow:"0 4px 8px rgba(0, 0, 0, 0.01)",
                            borderRadius:"5px"
                        }}>Edit</button>
                        <button style={{
                            padding:"5px",
                            boxShadow:"0 4px 8px rgba(0, 0, 0, 0.01)",
                            borderRadius:"5px"
                        }}>Remove</button>
                    </div>
                </WrapperCard>
            })}
    </div>
}