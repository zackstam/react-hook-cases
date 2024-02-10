import { useContext } from "react";
import { OtherContext, StudentContext } from "./store/ContextApp";

function ChildChild() {
    const ctx = useContext(StudentContext);
    console.log('rendering child child ', ctx)
    return (
        <OtherContext.Consumer>
            {(context) => {
                console.log(context)
                return (
                    <div>
                        <h3>Child Child</h3>
                    </div>
                )
            }}
        </OtherContext.Consumer>

 
    );
}

export default ChildChild;