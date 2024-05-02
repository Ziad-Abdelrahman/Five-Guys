import './header.css'


interface headerofsectionProps {
    title: string;
}

function headerofsection(props:headerofsectionProps){

    return(
        <div className="header-container">
            <title>{props.title}</title>
            <hr/>
        </div>

    );
}

export default headerofsection;