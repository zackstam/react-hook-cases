
function PageLayout(props) {
    console.log(props)
    return (
        <div>
            <h5>Page Layout</h5>
            {props.userLink}
        </div>
    );
}

export default PageLayout;