import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="home-container">
      <h2>Task Manager</h2>
      {tasks.length > 0 ? (
        <div className="task-list">
          {tasks.map((task) => (
            <div key={task._id} className="task-item">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <div className="task-actions">
                <Link to={`/view/${task._id}`} className="view-btn">
                  View
                </Link>
                <Link to={`/edit/${task._id}`} className="edit-btn">
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-tasks-message">
          No tasks available. <Link to="/create">Create a task</Link>
        </p>
      )}
    </div>
  );
};

export default Home;
