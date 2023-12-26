function Main(props){
    return(
    <div>
        This is Main Component
        {props.children} <br></br>
        {props.name }<br></br>
        {props.age}
    </div>
    );
}

export default Main;