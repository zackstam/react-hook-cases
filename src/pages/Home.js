import BackwardCounter from "./BackwardCounter";
import ForwardCounter from "./ForwardCounter";

function Home() {
    return (
        <div>
            <h1>Page Home</h1>
            <ForwardCounter/>
            <BackwardCounter/>
        </div>

    );
}

export default Home;