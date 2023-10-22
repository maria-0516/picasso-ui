import React, { useState } from 'react';
import Action from '../../service';
import { useBlockchainContext } from '../../context';
import { toast } from 'react-toastify';

interface Props {
    auth: any
}

const SignUp = ({auth}: Props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [passConfirm, setConfirm] = useState('');
    const [state, { translateLang }] = useBlockchainContext() as any;

    const userName = (val: any) => {
        setName(val);
    };
    const userEmail = (val: any) => {
        setEmail(val);
    };
    const passWord = (val: any) => {
        setPass(val);
    };
    const confirmPassword = (val: any) => {
        setConfirm(val);
    };
    const toSignIn = () => {
        auth(true);
    };
    const SignUp = async () => {
        if (name != '' && email != '' && password == passConfirm && password != '') {
            var info = {
                name: name,
                email: email,
                password: password
            };
            const upload = await Action.user_create(info);
            if (upload.status) {
                // NotificationManager.success(translateLang('createaccount_success'));
                toast(translateLang('createaccount_success'), {position: "top-right", autoClose: 2000})
                toSignIn();
            }
        } else {
            // NotificationManager.error(translateLang('checkallinfo_error'));
            toast(translateLang('checkallinfo_error'), {position: "top-right", autoClose: 2000})
        }
    };

    return (
        <div>
            
        </div>
    );
};

export default SignUp;
