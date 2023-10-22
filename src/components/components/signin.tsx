import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useBlockchainContext } from '../../context';
import Action from '../../service';

const SignIn = (props: any) => {
    const { auth } = props;
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [state, { dispatch, translateLang, updateAuth }] = useBlockchainContext() as any;

    const userName = (val: any) => {
        setName(val);
    };
    const passWord = (val: any) => {
        setPassword(val);
    };
    const toSignUp = () => {
        auth(false);
    };
    const signIn = async () => {
        var user = {
            name: name,
            password: password
        };
        const response = await Action.user_login(user);
        if (!response) {
            // NotificationManager.error(translateLang('nofoundaccount_error'));
            toast(translateLang('nofoundaccount_error'), {position: "top-right", autoClose: 2000})
            dispatch({
                type: 'auth',
                payload: {
                    isAuth: false
                }
            });
        } else {
            updateAuth(response.data);
            // NotificationManager.success(translateLang('sigin_success'));
            toast(translateLang('sigin_success'), {position: "top-right", autoClose: 2000})
        }
    };

    return (
       <div>
        
       </div>
    );
};

export default SignIn;
