import axios from "axios";
import "./SetToDoList.scss";

function SetToDoLists ({setTodos}) {
    const API_URL = 'http://localhost:8080/tasks';
    const handleClick = () => {
        const getToDoItems = async () => {
            try {
              const response = await axios.get(API_URL);
              setTodos(response.data);
            } catch(error) {
              console.log(error);
            }
          };
          getToDoItems();
    }

    return (
        <>
        <h3 className="title">Choose a pre-made list:</h3>
      
        <button className="button" onClick={handleClick}>Clean the Kitchen</button>
      
        </>
    )
}

export default SetToDoLists;