import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../../actions/userActions.js';

const UserListScreen = ({ history }) => {
    const dispatch = useDispatch();

    const userList = useSelector(state => state.userList)
    // eslint-disable-next-line no-unused-vars
    const { loading, error, users } = userList

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;


    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo])
    return (
        <div className="userlist">
            <div className="userlist__title">
                <h1>Kullanıcılar</h1>
            </div>

            <div className="userlist__table">
                <table border="1" width="80%">
                    <tr>
                        <th>ID</th>
                        <th>Ad</th>
                        <th>Email</th>
                    </tr>
                    {users.map((user) => (
                        <tr key={user._id}>
                            {/* table things here */}
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default UserListScreen
