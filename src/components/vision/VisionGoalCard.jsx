function VisionGoalCard({ icon, title, desc }) {
    return (
        <div
            style={{
                background: "#efe3e3",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
                padding: "1.5em",
                flex: "1 1 300px",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                textAlign: "center",
            }}
        >
            <i
                className={`fas fa-${icon}`}
                style={{
                    fontSize: "3em",
                    color: "maroon",
                    marginBottom: "0.5em",
                }}
            ></i>

            <strong
                style={{
                    color: "#590000",
                    marginBottom: "0.5em",
                }}
            >
                {title}
            </strong>

            <span style={{ color: "maroon" }}>{desc}</span>
        </div>
    );
}

export default VisionGoalCard;