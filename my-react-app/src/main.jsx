import {createRoot} from "react-dom/client"

function MissedGoal(){
    return <h1>Missed!!!</h1>;
}

function MadeGoal(){
    return <h1>Goal!</h1>;
}

function Goal(props){
    const isGoal =props.isGoal;
    return(
        <>
        {isGoal?< MadeGoal /> :<MissedGoal />}
        </>
    );
}

createRoot(document.getElementById('root')).render(
    <Goal isGoal={true} />
)