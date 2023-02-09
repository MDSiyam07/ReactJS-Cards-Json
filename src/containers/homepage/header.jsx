import "./header.css";

const titleStyle = {
    textAlign: "left",
    fontSize: "6vw",
    fontFamily: "Mont",
    color: "#283D47",
};

const titleBcnStyle = {
    textAlign: "center",
    fontWeight: "medium",
    fontSize: "9vw",
    color: "#000",
};

const titleBcnStyleMedium = {
    textAlign: "center",
    fontWeight: "medium",
    fontSize: "11vw",
    color: "#000",
};

const titleStyleMedium = {
    textAlign: "center",
    fontSize: "8vw",
    fontFamily: "Mont",
    color: "#283D47",
};

export function Header() {
    var elemStyle = {
    };

    return (
        <>
        <div className="elemStyle" style={elemStyle} name="Header">
            <div className="titleFont">
                <span style={titleStyleMedium}>React Test Project</span>
            </div>
            <span style={titleBcnStyle} className="bcnFont">Siyam Mohamed Dhoiffir</span>
            <div className="titleFont">
                <span style={titleStyle}>Movie cards</span>
            </div>
        </div>
        </>
    );
}