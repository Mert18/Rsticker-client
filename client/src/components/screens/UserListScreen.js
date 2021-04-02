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
        <div>
            <h1>Kullanıcılar</h1>
            <div>

                <div>
                    <div>
                        <p>ID</p>
                        <p>Ad</p>
                        <p>Email</p>
                        <p>X</p>
                    </div>
                    <div>
                        {users.map((user) => (
                            <div key={user._id}>
                                {/* table things here */}
                                <p>{user._id}</p>
                                <p>{user.name}</p>
                                <p>{user.email}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserListScreen
