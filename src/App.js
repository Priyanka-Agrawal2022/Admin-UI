import { useState, useEffect } from "react";
import { SearchBar } from "./components/SearchBar";
import { UsersList } from "./components/UsersList";
import { PaginatedList } from "./components/PaginatedList";
import "./styles/App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [isMasterSelected, setIsMasterSelected] = useState(false);

  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteUser = (ids) => {
    if(!Array.isArray(ids)) {
      ids = [ids];
    }

    const newUsers = users.filter((user) => !ids.includes(user.id));
    const newFilteredUsers = filteredUsers.filter((user) => !ids.includes(user.id));
    setUsers(newUsers);
    setFilteredUsers(newFilteredUsers);
  };

  const editUser = (editedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === editedUser.id ? editedUser : user
    );
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  const searchUsers = (e) => {
    const str = e.target.value.toLowerCase();

    if (str === "") {
      setFilteredUsers(users);
      return;
    }

    const newUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(str) ||
        user.email.toLowerCase().includes(str) ||
        user.role.toLowerCase().includes(str)
    );
    setFilteredUsers(newUsers);

    clearSelection();
  };

  const toggleSelection = (id) => {
    const newSelectedRows = new Set(selectedRows);

    if (newSelectedRows.has(id)) {
      newSelectedRows.delete(id);
    } else {
      newSelectedRows.add(id);
    }

    setSelectedRows(newSelectedRows);
  };

  const clearSelection = () => {
    setIsMasterSelected(false);
    setSelectedRows(new Set());
  };

  const deleteSelected = () => {
    const ids = Array.from(selectedRows);
    deleteUser(ids);

    clearSelection();
  };

  return (
    <div className="App">
      <SearchBar searchUsers={searchUsers} />
      <PaginatedList
        Component={UsersList}
        data={filteredUsers}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        isMasterSelected={isMasterSelected}
        setIsMasterSelected={setIsMasterSelected}
        toggleSelection={toggleSelection}
        clearSelection={clearSelection}
        deleteSelected={deleteSelected}
        itemsPerPage={10}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    </div>
  );
}

export default App;
