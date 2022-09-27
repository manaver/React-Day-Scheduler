import { useState } from "react";

export default function(){

    const[task, setTask] = useState("");
    const[list, setList] = useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(task){
            setList((ls)=>[...ls, task]);
            setTask("");
        }
    }

    return (<div className="Event Todo w-96 bg-slate-900 rounded-2xl m-4 mb-0 h-[25rem] flex flex-col justify-between relative">
                <div className="Main TODO Content  bg-slate-900 rounded-t-lg h-full p-4 font-semibold">
                    <ul className="Days bg-slate-600 w-fit p-1 px-2 rounded-full mb-2">
                        <li>Today's Tasks</li>
                    </ul>
                    <div className="Tasks overflow-y-auto max-h-[17rem]">
                    {
                        list.map((a)=>
                        <div className="Task1 mt-4 bg-b p-2 rounded-full flex flex-row items-center bg-slate-800">
                            <div className="Task Check">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle hover:cursor-pointer" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                </svg>
                            </div>
                            <div className="Task content mx-4 font-light">
                                {a}       
                            </div>
                        </div>
                    )}           
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="chat bg-slate-800 h-20 rounded-b flex justify-center" >
                        <input type="text" placeholder="Create your task" id="taskInput" className="border-2 p-3 m-2 h-2/3 w-full rounded-full border-none bg-slate-900 " name="task" value={task} onChange={(e)=>setTask(e.target.value)}/>
                        <button className="submit w-1/3 flex justify-center items-center">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle h-full w-2/6 text-white mb-1 hover:cursor-pointer" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                            </svg>
                        </button>
                </form>
                
            </div>);
}