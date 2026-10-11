const teamImages = import.meta.glob(
    "../images/team/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    {
        eager: true,
        import: "default",
    }
);

function getImage(path) {
    return teamImages[path] ?? null;
}

const teamData = {
    executiveBoards: [
        {
            id: "2026-27",
            label: "2026-2027",
            groupPhoto: null,
            members: [],
        },

        {
            id: "2025-26",
            label: "2025-2026",

            groupPhoto: getImage(
                "../images/team/2025-26/group/nsbe-ceb-group2526_1.webp"
            ),

            members: [
                {
                    id: "aicha-2526",
                    name: "Aicha",
                    position: "",
                    image: getImage(
                        "../images/team/2025-26/individuals/aicha-2526_1.webp"
                    ),
                },
                {
                    id: "chloe-2526",
                    name: "Chloe",
                    position: "",
                    image: getImage(
                        "../images/team/2025-26/individuals/chloe-2526_1.webp"
                    ),
                },
                {
                    id: "imran-2526",
                    name: "Imran",
                    position: "",
                    image: getImage(
                        "../images/team/2025-26/individuals/imran-2526.webp"
                    ),
                },
                {
                    id: "junior-2526",
                    name: "Junior",
                    position: "",
                    image: getImage(
                        "../images/team/2025-26/individuals/junior-2526.webp"
                    ),
                },
                {
                    id: "justin-2526",
                    name: "Justin",
                    position: "",
                    image: getImage(
                        "../images/team/2025-26/individuals/justin-2526_1.webp"
                    ),
                },
                {
                    id: "manny-2526",
                    name: "Manny",
                    position: "",
                    image: getImage(
                        "../images/team/2025-26/individuals/manny-2526_1.webp"
                    ),
                },
                {
                    id: "naomi-2526",
                    name: "Naomi",
                    position: "",
                    image: getImage(
                        "../images/team/2025-26/individuals/naomih-2526.webp"
                    ),
                },
                {
                    id: "sherry-2526",
                    name: "Sherifat Solebo",
                    position: "",
                    image: getImage(
                        "../images/team/2025-26/individuals/sherry-2526.webp"
                    ),
                },
                {
                    id: "tabby-2526",
                    name: "Tabitha Sulaiman",
                    position: "",
                    image: null,
                },
            ],
        },

        {
            id: "2024-25",
            label: "2024-2025",

            groupPhoto: getImage(
                "../images/team/2024-25/SP25/group/nsbe-ceb-group-sp25.webp"
            ),

            members: [
                {
                    id: "beth-2425",
                    name: "Beth",
                    position: "",
                    image: getImage(
                        "../images/team/2024-25/SP25/individuals/beth-sp25.webp"
                    ),
                },
                {
                    id: "chinedu-2425",
                    name: "Chinedu",
                    position: "",
                    image: getImage(
                        "../images/team/2024-25/FA24/individuals/chinedu-2425.webp"
                    ),
                },
                {
                    id: "dami-2425",
                    name: "Dami",
                    position: "",
                    image: getImage(
                        "../images/team/2024-25/SP25/individuals/dami-sp25.webp"
                    ),
                },
                {
                    id: "justin-2425",
                    name: "Justin",
                    position: "",
                    image: getImage(
                        "../images/team/2024-25/SP25/individuals/justin-sp25_1.webp"
                    ),
                },
                {
                    id: "kai-2425",
                    name: "Kai",
                    position: "",
                    image: getImage(
                        "../images/team/2024-25/SP25/individuals/kai-sp25.webp"
                    ),
                },
                {
                    id: "manny-2425",
                    name: "Manny",
                    position: "",
                    image: getImage(
                        "../images/team/2024-25/SP25/individuals/manny-sp25_1.webp"
                    ),
                },
                {
                    id: "melany-2425",
                    name: "Melany",
                    position: "",
                    image: getImage(
                        "../images/team/2024-25/SP25/individuals/melany-sp25.webp"
                    ),
                },
                {
                    id: "sherry-2425",
                    name: "Sherifat Solebo",
                    position: "",
                    image: getImage(
                        "../images/team/2024-25/SP25/individuals/sherry-sp25.webp"
                    ),
                },
                {
                    id: "tabby-2425",
                    name: "Tabitha Sulaiman",
                    position: "",
                    image: getImage(
                        "../images/team/2024-25/SP25/individuals/tabby-sp25.webp"
                    ),
                },
                {
                    id: "uche-2425",
                    name: "Uche",
                    position: "",
                    image: getImage(
                        "../images/team/2024-25/FA24/individuals/uche-2425.webp"
                    ),
                },
                {
                    id: "member-a-2425",
                    name: "Name pending",
                    position: "",
                    image: getImage(
                        "../images/team/2024-25/SP25/individuals/nsbebadman-sp25.webp"
                    ),
                },
                {
                    id: "member-b-2425",
                    name: "Name pending",
                    position: "",
                    image: getImage(
                        "../images/team/2024-25/SP25/individuals/nsbegyalis-sp25_2.webp"
                    ),
                },
            ],
        },
    ],
};

export default teamData;