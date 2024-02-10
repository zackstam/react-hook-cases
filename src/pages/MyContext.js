import React, { useState } from "react";
import ChildContext from "./Context/ChildContext";
import { StudentContext } from "./Context/store/ContextApp";

function MyContext() {
    const [student, setStudent] = useState({
        name: 'Zakuan',
        nim: '11610026',
    }) 
    return (
        <div>
            <h2>My Parent Context</h2>
            <button onClick={() => setStudent({ name: 'Iwan', nim: '11610023000'})}>Change Student</button>
            <StudentContext.Provider value={student}>
                <ChildContext />
            </StudentContext.Provider>
        </div>
    );
}

export default MyContext;