import { useRef, useState } from "react";
import "../styles/User.css";

export const User = (props) => {
  const { user, deleteUser, editUser, isSelected, toggleSelection } = props;

  const [currentUser, setCurrentUser] = useState(user);
  const [isEdit, setIsEdit] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const roleRef = useRef(null);

  const handleChange = (e, key) => {
    setCurrentUser({ ...currentUser, [key]: e.target.value });
  };

  const handleEdit = () => {
    setIsEdit(true);
    nameRef.current.focus();
  };

  const handleSave = () => {
    setIsEdit(false);
    editUser(currentUser);
  };

  return (
    <>
      <div
        id={user.id}
        key={user.id}
        className={`user-row ${isSelected ? "selected" : ""}`}
      >
        <input type="checkbox" checked={isSelected} onChange={() => toggleSelection(user.id)} />
        <textarea 
          className={`name ${isSelected ? "selected" : ""}`}
          value={currentUser.name}
          readOnly={!isEdit}
          ref={nameRef}
          onChange={(e) => handleChange(e, "name")}
        />
        <textarea 
          className={`email ${isSelected ? "selected" : ""}`}
          value={currentUser.email}
          readOnly={!isEdit}
          ref={emailRef}
          onChange={(e) => handleChange(e, "email")}
        />
        <textarea 
          className={`role ${isSelected ? "selected" : ""}`}
          value={currentUser.role}
          readOnly={!isEdit}
          ref={roleRef}
          onChange={(e) => handleChange(e, "role")}
        />
        <span className="icons">
          {isEdit ? (
            <button className="save" onClick={handleSave}>
              Save
            </button>
          ) : (
            <i
              className="fa-solid fa-pen-to-square edit"
              onClick={handleEdit}
            ></i>
          )}
          <i
            className="fa-solid fa-trash delete"
            onClick={() => deleteUser(user.id)}
          ></i>
        </span>
      </div>
    </>
  );
};
