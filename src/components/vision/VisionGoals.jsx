import VisionGoalCard from "./VisionGoalCard";
import visionGoals from "../../data/visionGoals";

function VisionGoals() {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1.5em",
                marginTop: "2em",
            }}
        >
            {visionGoals.map((goal) => (
                <VisionGoalCard
                    key={goal.id}
                    icon={goal.icon}
                    title={goal.title}
                    desc={goal.desc}
                />
            ))}
        </div>
    );
}

export default VisionGoals;