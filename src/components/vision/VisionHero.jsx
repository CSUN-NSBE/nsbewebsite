import matador from "../../images/admitted-day-matadors-banner-Web2.png";

function VisionHero() {
    return (
        <div id="main" style={{ position: "relative", width: "100%" }}>
            <img
                src={matador}
                alt="CSUN NSBE Landscape"
                style={{
                    width: "100vw",
                    maxWidth: "100vw",
                    height: "auto",
                    display: "block",
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "2em",
                    fontWeight: "bold",
                    textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
                    textAlign: "center",
                    width: "100%",
                }}
            >
                <h1
                    style={{
                        color: "maroon",
                        fontSize: "2.8em",
                        fontWeight: "bold",
                        margin: "0 auto",
                        textAlign: "center",
                        marginBottom: "0.5em",
                        marginTop: "-4em",
                    }}
                >
                    CSUN-NSBE
                </h1>

                <h2
                    style={{
                        color: "gold",
                        fontSize: "1.4em",
                        fontWeight: "bold",
                        margin: "0 auto",
                        width: "40%",
                        textAlign: "center",
                        marginBottom: "0.5em",
                        marginTop: "-1em",
                    }}
                >
                    Our Vision
                </h2>
            </div>
        </div>
    );
}

export default VisionHero;