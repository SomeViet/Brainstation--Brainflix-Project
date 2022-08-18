import "./Views.scss";
import viewIcon from "../../assets/images/views.svg";

function Views() {
    return (
        <>
            <div className="views">
                <img src={viewIcon} className="views__icon" alt="view icon" />
                <div className="views__count">1,524,154 Views</div>
            </div>
        </>
    );
}

export default Views;
