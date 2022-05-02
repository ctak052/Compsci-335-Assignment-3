
const Loading = (props) => {
    return (
        !props.activeFetch && (
            <h1>Loading...</h1>
        )
    );
}

export default Loading