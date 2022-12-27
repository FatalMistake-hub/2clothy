import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '~/routes';
// import DefaultLayout from '~/layouts';
import ScrollToTop from './ScrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import { authRemainingSelector } from './redux/selector';
import { Suspense, lazy } from 'react';
import ThemedSuspense from './components/ThemedSuspense';
import axios from 'axios';
import AuthSlice from './redux/AuthSlice';

const DefaultLayout = lazy(() => import('../src/layouts/DefaultLayout/DefaultLayout'));

function App() {
    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;
    const dispatch = useDispatch();
    axios.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            if (
                401 === error.response.status ||
                (400 === error.response.status && error.response.data === 'Refresh Token không tìm thấy trong cơ sở dữ liệu !')
            ) {
                // handle error: inform user, go to login, etc
                dispatch(AuthSlice.actions.logOutSuccess());
            } else {
                return Promise.reject(error);
            }
        },
    );
    return (
        <Router>
            <div className="App">
                <ScrollToTop>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Suspense fallback={<ThemedSuspense />}>
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        </Suspense>
                                    }
                                />
                            );
                        })}
                        {currentUser &&
                            privateRoutes.map((route, index) => {
                                const Page = route.component;
                                let Layout = DefaultLayout;

                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Suspense fallback={<ThemedSuspense />}>
                                                <Layout>
                                                    <Page />
                                                </Layout>
                                            </Suspense>
                                        }
                                    />
                                );
                            })}
                    </Routes>
                </ScrollToTop>
            </div>
        </Router>
    );
}

export default App;
