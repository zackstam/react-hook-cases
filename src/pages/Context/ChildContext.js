// import { useContext } from "react";
import { useContext } from "react";
import ChildChild from "./ChildChild";
import { StudentContext, AppContext } from "./store/ContextApp";

function ChildContext() {
    const student = useContext(StudentContext);
    const appCtx = useContext(AppContext);
    return (
        <div>
            <h3>Child Context</h3>
            <ChildChild/>
        </div>
    );
}

export default ChildContext;