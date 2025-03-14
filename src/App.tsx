import './App.css'
import {observer} from "mobx-react-lite";
import {taskStore} from "./store/TaskStore.store.ts";
import {useState} from "react";

const App = observer(() => {
  const [inputValues, setInputValues] = useState({
    title: "",
    description: ""
  });

  const handler = () => {
    console.log("dadad")
    if (inputValues.title && inputValues.description) {
      taskStore.addTask(inputValues.title, inputValues.description)
    }else throw new Error("empty inputs")
  }

  return (
    <>
      <div className="flex min-h-screen">
        <div className={"min-w-1/4 flex flex-col gap-4 py-50  p-20 "}>
          <input className={"border w-full rounded-md py-2 px-2"} type="text" onChange={e => setInputValues(
            {...inputValues, title: e.target.value}
          )}/>
          <input className={"border w-full rounded-md py-2 px-2"} type="text" onChange={e => setInputValues(
            {...inputValues, description: e.target.value}
          )}/>
          <button className={"border p-2 w-full] rounded-md cursor-pointer"}
                  onClick={() => handler()}>Добавить задачу
          </button>
        </div>
        <div className="flex flex-wrap gap-5 px-10 py-10 min-h-screen border-l-2 border-indigo-500 ">
          {taskStore.tasks.map((item: any) => (
              <div key={item.id} className={"flex flex-col min-w-72 max-h-52 gap-4 justify-center items-center rounded-2xl p-10 border-2 border-fuchsia-500"}>
                <h1 className={"text-4xl font-semibold"}>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  )
})

export default App
