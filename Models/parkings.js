const getParkings = () => {
    const startDate = new Date();
    startDate.setHours(14);

    const endDate = new Date();
    endDate.setHours(16);
    return [
        {
            id: 1,
            address: "קלר 5, חיפה",
            isPrivate: true,
            description: "חניה מלאה בחזירי בר חמודים",
            size: "Big",
            owner: "1",
        },
        {
            id: 2,
            address: "לכיש 34, שוהם",
            isPrivate: true,
            description: "חניה קטנה ומטריפה, ברגע שתיכנסו לחניה אתם תשתגעו. תאמינו לי.",
            size: "Big",
            owner: "1",
        },
        {
            id: 3,
            address: "רוטשילד 16, תל אביב",
            isPrivate: true,
            description: "חניה פרטית במקום הכי חם שיש",
            size: "Big",
            owner: "1",
        },
        {
            id: 4,
            address: "רוטשילד 16, תל אביב",
            isPrivate: true,
            description: "חניה פרטית במקום הכי חם שיש",
            size: "Big",
            owner: "mayshanna.mh@gmail.com",
        },
        {
            id: 5,
            address: "רוטשילד 16, תל אביב",
            isPrivate: true,
            description: "חניה פרטית במקום הכי חם שיש",
            size: "Big",
            owner: "1",
        },
        {
            id: 6,
            address: "רוטשילד 16, תל אביב",
            isPrivate: true,
            description: "חניה פרטית במקום הכי חם שיש",
            size: "Big",
            owner: "mayshanna.mh@gmail.com",
        }

    ]
};

module.exports.getParkings = getParkings;