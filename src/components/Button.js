import Welcome from "./Welcome";

function Button (props) {
        if (props.name===""){
            return <button>Login</button>
        }
        else{
            return <Welcome name={props.name}/>
        }

}

export default Button;