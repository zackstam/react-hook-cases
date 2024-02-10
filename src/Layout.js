import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './Layout.css'

function Layout() {
    const [exampleState, setExampleState] = useState(true);
    return (
        <div>
            <h1>Bookkeeper</h1>
            <nav
                style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem"
                }}
            >
                <Link className="nav" to="/home">Home</Link>
                <Link className="nav" to="/example">Example</Link>
                <Link className="nav" to="/context">Context</Link>
                <Link className="nav" to="/page">Page</Link>
                <Link className="nav" to="/myreducer">Myreducer</Link>
                <Link className="nav" to="/text-input?product=1">Text Input</Link>
                <Link className="nav" to="/calculator">Calculator</Link>
                <Link className="nav" to="/dashboard">Dashboard</Link>
                <Link className="nav" to="/memo">memo</Link>
                <Link className="nav" to="/callback">callback</Link>
                <Link className="nav" to="/useeffect">use effect</Link>
                <Link className="nav" to="/score">Score</Link>




            </nav>
            {/* <button onClick={() => setExampleState(prev => !prev)}>toggle example</button> */}
            <Outlet />
            {/* { exampleState ? <Example/> : null } */}
        </div>
    );
}

export default Layout;