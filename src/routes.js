import Layout from "./Layout"
import Calculator from "./pages/Calculator";
import Dashboard from "./pages/Dashboard";
import Example from "./pages/Example"
import Home from "./pages/Home"
import MyContext from "./pages/MyContext";
import MyReducer from "./pages/MyReducer";
import Page from "./pages/Page/Page";
import TextInputPage from "./pages/TextInputPage";
import ExampleClass from "./pages/ExampleClass";
import UsingMemo from "./pages/UsingMemo";
import UsingCallback from "./pages/UsingCallback";
import UsingUseEffect from "./pages/UsingUseEffect";
import Score from "./pages/Page/Score";
import PageRxjs from "./pages/PageRxjs";


const routes = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'home',
                element: <Home/>
            },
            {
                path: 'example',
                element: <Example/>
            },
            {
                path: 'context',
                element: <MyContext/>
            },
            {
                path: 'page',
                element: <Page/>
            },
            {
                path: 'myreducer',
                element: <MyReducer/>
            },
            {
                path: 'text-input',
                element: <TextInputPage/>
            },
            {
                path: 'calculator',
                element: <Calculator/>
            },
            {
                path: 'dashboard',
                element: <Dashboard/>
            },
            {
                path: 'example-class',
                element: <ExampleClass/>
            },
            {
                path: 'memo',
                element: <UsingMemo/>
            },
            {
                path: 'callback',
                element: <UsingCallback/>
            },
            {
                path: 'useeffect',
                element: <UsingUseEffect/>
            },
            {
                path: 'rxjs',
                element: <PageRxjs/>
            },
            {
                path: '',
                element: <Home/>
            }
        ]
    }
]

export default routes;