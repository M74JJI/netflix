import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import FooterContainer from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Link, useHistory } from 'react-router-dom';

function SignUp() {
    const { firebase } = useContext(FirebaseContext);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const isInValid =
        password === '' || email === '' || name === '' || password.length < 6;
    const handleSubmit = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                res.user
                    .updateProfile({
                        displayName: name,
                        photoURL: Math.floor(Math.random() * 5 + 1),
                    })
                    .then(() => {
                        history.push('/browse');
                    });
            })
            .catch((err) => {
                setEmail('');
                setPassword('');
                setName('');
                setError(err.message);
            });
    };
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSubmit}>
                        <Form.Input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Submit disabled={isInValid} type="submit">
                            Sign Up
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        already have an account?{' '}
                        <Form.Link to="/signin">Sign In now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot.{' '}
                        <Link
                            style={{ color: '#0071eb', textDecoration: 'none' }}
                        >
                            Learn more
                        </Link>
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}

export default SignUp;
