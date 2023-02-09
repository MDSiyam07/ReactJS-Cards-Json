import "./servicesSection.css";
import Listing from "../../Components/MoviesCards/Listing";

export function ServicesSection() {
    var backgroundStyle = {
        backgroundColor: "#000",
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10px",
    }

    var lifeCostStyle = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        left: "0",
        width: "100%",
        padding: "0",
        margin: "0",
        border: "none",
        overflow: "hidden",
    };

    var flexBox = {
        display: "inline-flex",
        overflow: "hidden",
    }

    return (
        <div style={backgroundStyle}>
            <div style={flexBox}>
                <div style={lifeCostStyle}>
                    <Listing/>
                </div>
            </div>
        </div>
    );
}