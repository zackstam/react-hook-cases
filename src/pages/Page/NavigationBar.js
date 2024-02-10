import Link from './Link';

function NavigationBar(props) {
    console.log(props)
    return (
        <div>
            <h5>Navigation Bar</h5>
            {props.children}
        </div>
    );
}

export default NavigationBar;