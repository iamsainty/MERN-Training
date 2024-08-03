import React, { useState } from "react";

function TodoList() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      setList([...list, task]);
      setTask("");
    }
  };

  const handleRemoveTask = (index) => {
    const newList = list.filter((task, i) => i !== index);
    setList(newList);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "2.5px solid black",
          borderRadius: "10px",
          padding: "40px",
        }}
      >
        <div className="input">
          <input
            type="text"
            placeholder="Enter your Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{
              width: "300px",
              padding: "10px",
              fontSize: "18px",
              border: "1px solid black",
              borderRadius: "15px 0 0 15px",
            }}
          />
          <button
            onClick={handleAddTask}
            style={{
              width: "100px",
              padding: "10px",
              fontSize: "18px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "0 15px 15px 0",
            }}
          >
            Add
          </button>
        </div>
        <div
          style={{ fontWeight: "bold", marginTop: "50px", fontSize: "25px" }}
        >
          Task List
        </div>
        <div style={{ marginTop: "25px" }}>
          {list.map((item, index) => (
            <li
              key={index}
              style={{
                width: "400px",
                fontSize: "18px",
                border: "1px solid black",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "10px",
                marginTop: '10px'
              }}
            >
              {item}
              <button
                onClick={() => handleRemoveTask(index)}
                style={{
                  width: "100px",
                  padding: "10px",
                  fontSize: "18px",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "0 15px 15px 0",
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
