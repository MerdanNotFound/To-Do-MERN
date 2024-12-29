import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./viewTask.css";

const ViewTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/tasks/${id}`);
        setTask(response.data);
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    fetchTask();
  }, [id]);

  const goBack = () => {
    navigate("/");
  };

  const deleteTask = async () => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      console.log("Task deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="view-task-container">
      {task ? (
        <>
          <h2>Task Details</h2>
          <div className="task-details">
            <div className="task-field">
              <strong>Title:</strong>
              <p>{task.title}</p>
            </div>
            <div className="task-field">
              <strong>Description:</strong>
              <p>{task.description}</p>
            </div>
          </div>
          <button onClick={goBack} className="go-back-btn">
            Go Back
          </button>
          <button onClick={deleteTask} className="delete-btn">
            Delete Task
          </button>
        </>
      ) : (
        <p>Loading task details...</p>
      )}
    </div>
  );
};

export default ViewTask;
