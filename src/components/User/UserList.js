import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { userListSelector } from "components/_selectors/userSelectors";
import apiService from "services/api.service";
import endpoints from "config/api";

function UserList({ users }) {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.post(endpoints.getUsers.url, {
          page: 1,
          limit: 100,
        });
        console.log("Data fetched:", data.data.data);
        setUserData(data.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userData]);

  const deleteUser = async (id) => {
    try {
      console.log("id:", id);
      await apiService.delete(endpoints.deleteUser.url, { id: id });
      const index = userData.findIndex((e) => e.id === id);
      delete userData[index];
      setUserData(userData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="float-right mb-2">
        <Link to="/add-user" className="ml-2 btn btn-primary">
          Add User
        </Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>course</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr className="table table-light" key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.course}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {userData.length <= 0 && (
            <tr>
              <td colSpan="5" align="center" className="font-weight-bold">
                No users exist
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    users: userListSelector(state),
  };
};
export default connect(mapStateToProps, {})(UserList);
