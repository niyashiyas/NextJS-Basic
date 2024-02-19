"use client"
import Image from "next/image";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setTodo(event.target.value);
  };
  
  const handleAddTodo = () => {
    if(todo!=""){
      setTodoList([...todoList, todo]);
      setTodo("");
      console.log(todoList)
    }
    else{
      alert("ToDo Cannot Be Empty")
    }
  };

  const handleDelete = (item: string) => {
    var array = [...todoList];
    var index = array.indexOf(item)
    if (index !== -1) {
      array.splice(index, 1);
      setTodoList(array);
    }
  };
  
  const handleEdit = (item: string) => {
    var answer = prompt("Enter new To-Do", item);
    if(answer != null){
      var array = [...todoList];
      var index = array.indexOf(item)
      if (index !== -1) {
        array.splice(index, 1);
        array.push(answer)
        setTodoList(array);
      }
    }
  };

  return (
    <section className="bg-[url('../assets/2.jpeg')] bg-cover bg-center flex justify-center items-center flex-col h-screen w-full" >
      <h2 className="text-white text-2xl">Your Daily Tasks</h2>
      <div className="m-1 p-3 px-8 flex flex-col justify-center bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-md  border border-gray-100">
        {todoList.map((item, index)=>(
          <div className="p-1 py-1.5 grid grid-cols-2 gap-4" key={index}>
            <p className="text-white items-center">{item}</p>
            <div className="grid grid-cols-2">
              <MdDelete color="white" className="text-xl mx-auto" onClick={() => handleDelete(item)} />
              <FaEdit color="white" className="text-xl mx-auto" onClick={() => handleEdit(item)} />
            </div>
          </div>
        ))}
         
        <div className="flex flex-col">
          <input value={todo} onChange={handleTodoChange} placeholder="Enter your task" className="border-none my-2 p-1 px-2 rounded text-black"/>
          <div onClick={handleAddTodo} className="mx-auto px-2 my-1 text-gray-100 rounded-lg py-1 border border-zinc-950" >Add To Do</div>
        </div>
      </div>
    </section>
  );
}