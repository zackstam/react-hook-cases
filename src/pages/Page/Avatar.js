function Avatar(props) {
    console.log(props)
    return (
        <div>
            <h5>Avatar</h5>
            name: {props.user.name}
        </div>
    );
}

export default Avatar;