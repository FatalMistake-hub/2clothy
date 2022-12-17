import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '~/routes';
// import DefaultLayout from '~/layouts';
import ScrollToTop from './ScrollToTop';
import { useSelector } from 'react-redux';
import { authRemainingSelector } from './redux/selector';
import { Suspense, lazy } from 'react';
import ThemedSuspense from './components/ThemedSuspense';

const DefaultLayout = lazy(() => import('../src/layouts/DefaultLayout/DefaultLayout'));

function App() {
    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;

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
