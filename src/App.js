import FooterContainer from './containers/footer';
import { JumbotronContainer } from './containers/Jumbotron';
import { FaqsContainer } from './containers/faqs';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { AuthListener } from './hooks';
export default function App() {
    const { user } = AuthListener();
    console.log(user);
    return (
        <>
            <Switch>
                <IsUserRedirect
                    user={user}
                    loggedInPath="/browse"
                    path="/signin"
                    exact
                >
                    <SignIn />
                </IsUserRedirect>
                <IsUserRedirect
                    user={user}
                    loggedInPath="/browse"
                    path="/signup"
                    exact
                >
                    <SignUp />
                </IsUserRedirect>
                <ProtectedRoute user={user} path="/browse" exact>
                    <Browse />
                </ProtectedRoute>
                <IsUserRedirect
                    user={user}
                    loggedInPath="/browse"
                    path="/"
                    exact
                >
                    <Home />
                </IsUserRedirect>
            </Switch>
        </>
    );
}
