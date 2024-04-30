import './header.css'


interface headerofsectionProps {
    title: string;
}

function headerofsection(props:headerofsectionProps){

    return(
        <div className="header-container">
            <h2>{props.title}</h2>
            <hr/>
        </div>

    );
}

export default headerofsection;