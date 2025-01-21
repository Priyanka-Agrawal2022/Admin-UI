import { User } from "./User";
import "../styles/UsersList.css";

export const UsersList = (props) => {
  const { data, selectedRows, isMasterSelected, toggleAll, ...rest } = props;

  return (
    <>
      <div id="header">
        <input type="checkbox" checked={isMasterSelected} onChange={toggleAll} />
        <span className="field">Name</span>
        <span className="field">Email</span>
        <span className="field">Role</span>
        <span className="actions">Actions</span>
      </div>

      {data.map((user) => (
        <User
          key={user.id}
          user={user}
          isSelected={selectedRows.has(user.id)}
          {...rest}
        />
      ))}
    </>
  );
};
