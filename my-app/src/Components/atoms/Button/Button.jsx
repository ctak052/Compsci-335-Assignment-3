import { CustomButton } from './styles'

const Button = (props) => {
    let fontSize = "22px"
    if(props.size === "md"){
        fontSize = "18px";
    } else if(props.size ==="sm"){
        fontSize= "14px";
    }

    return (<CustomButton size={fontSize} onClick={props.onClickHandler}>{props.text} </CustomButton>)
}

export default Button;