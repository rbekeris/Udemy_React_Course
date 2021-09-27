import './Card.css';
//To use a component as the "outermost" one, we need to set it up
//to use props.children
function Card(props) {
    //Our custom component must be configured to accept other ClassNames
    //Thus we set up a variable 'classes' that derives from card + the data passed to it later
    const classes = 'card ' + props.className;

    return (
    //.children will always be the conent between the opening and closing tags of our custom component
    <div className={classes}>{props.children}</div>   
    )
}
export default Card;