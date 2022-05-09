import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import FooterContainer from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Link, useHistory } from 'react-router-dom';
function SignIn() {
    const { firebase } = useContext(FirebaseContext);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInValid = password === '' || email === '' || password.length < 6;
    const handleSubmit = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/browse');
            })
            .catch((err) => {
                setEmail('');
                setPassword('');
                setError(err.message);
            });
    };
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSubmit}>
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
                            Sign In
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix?{' '}
                        <Form.Link to="/signup">Sign up now.</Form.Link>
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

export default SignIn;
