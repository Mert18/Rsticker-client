
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateUserProfile } from '../../actions/userActions.js';

const ProfileScreen = ({ history }) => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [message, setMessage] = useState('')

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector((state) => state.userLogin);
    const { success } = userUpdateProfile;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        } else {
            if (!user.name) {
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }

    }, [dispatch, history, userInfo, user])

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Şifreler eşleşmiyor.")
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }

    return (
        <div>
            {message}
            {success}
            <form className="signup__form" autoComplete="off" onSubmit={submitHandler}>
                <div className="signup__form__element">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="signup__form__element">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                <div className="signup__form__element">
                    <label htmlFor="password">Parola</label>
                    <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <div className="signup__form__element">
                    <label htmlFor="conpassword">Yeniden Parola</label>
                    <input type="password" id="conpassword" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                </div>
                <button type="submit">Güncelle</button>
            </form>
        </div>
    )
}

export default ProfileScreen
