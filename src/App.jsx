import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetups.jsx';
import FavoritesPage from './pages/Favourites.jsx';
import Layout from './components/layouot/Layout.jsx';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <AllMeetupsPage />
                </Route>
                <Route path='/new-meetup'>
                    <NewMeetupPage />
                </Route>
                <Route path='/favorites'>
                    <FavoritesPage />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;