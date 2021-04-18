const startDate = new Date();
startDate.setHours(14);

const endDate = new Date();
endDate.setHours(16);

const parkings = [
    {
        id: 1,
        address: "קלר 5, חיפה",
        isPrivate: true,
        description: "חניה מלאה בחזירי בר חמודים",
        size: "Big",
        owner: "pazreshef@gmail.com",
        comments: [{
            rating: 4,
            content: "אחלה חניה",
            publisher: "pazreshef@gmail.com",
            publisherName: "פז רשף"
        },
            {
                rating: 1,
                content: "חרא חניה",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            },
            {
                rating: 3,
                content: "תגובה מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד ארוכה",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            },
            {
                rating: 4,
                content: "",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            }]
    },
    {
        id: 2,
        address: "לכיש 34, שוהם",
        isPrivate: true,
        description: "חניה קטנה ומטריפה, ברגע שתיכנסו לחניה אתם תשתגעו. תאמינו לי.",
        size: "Big",
        owner: "pazreshef@gmail.com",
        comments: [{
            rating: 4,
            content: "אחלה חניה",
            publisher: "pazreshef@gmail.com",
            publisherName: "פז רשף"
        },
            {
                rating: 1,
                content: "חרא חניה",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            },
            {
                rating: 3,
                content: "תגובה מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד ארוכה",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            },
            {
                rating: 4,
                content: "",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            }]
    },
    {
        id: 3,
        address: "רוטשילד 16, תל אביב",
        isPrivate: true,
        description: "חניה פרטית במקום הכי חם שיש",
        size: "Big",
        owner: "pazreshef@gmail.com",
        comments: [{
            rating: 4,
            content: "אחלה חניה",
            publisher: "pazreshef@gmail.com",
            publisherName: "פז רשף"
        },
            {
                rating: 1,
                content: "חרא חניה",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            },
            {
                rating: 3,
                content: "תגובה מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד ארוכה",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            },
            {
                rating: 4,
                content: "",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            }]
    },
    {
        id: 4,
        address: "רוטשילד 16, תל אביב",
        isPrivate: true,
        description: "חניה פרטית במקום הכי חם שיש",
        size: "Big",
        owner: "mayshanna.mh@gmail.com",
        comments: [{
            rating: 4,
            content: "אחלה חניה",
            publisher: "pazreshef@gmail.com",
            publisherName: "פז רשף"
        },
            {
                rating: 1,
                content: "חרא חניה",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            },
            {
                rating: 3,
                content: "תגובה מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד ארוכה",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            },
            {
                rating: 4,
                content: "",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            }]
    },
    {
        id: 5,
        address: "רוטשילד 16, תל אביב",
        isPrivate: true,
        description: "חניה פרטית במקום הכי חם שיש",
        size: "Big",
        owner: "pazreshef@gmail.com",
        comments: [{
            rating: 4,
            content: "אחלה חניה",
            publisher: "pazreshef@gmail.com",
            publisherName: "פז רשף"
        },
            {
                rating: 1,
                content: "חרא חניה",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            },
            {
                rating: 3,
                content: "תגובה מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד ארוכה",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            },
            {
                rating: 4,
                content: "",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            }]
    },
    {
        id: 6,
        address: "רוטשילד 16, תל אביב",
        isPrivate: true,
        description: "חניה פרטית במקום הכי חם שיש",
        size: "Big",
        owner: "mayshanna.mh@gmail.com",
        comments: [{
            rating: 4,
            content: "אחלה חניה",
            publisher: "pazreshef@gmail.com",
            publisherName: "פז רשף"
        },
            {
                rating: 1,
                content: "חרא חניה",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            },
            {
                rating: 3,
                content: "תגובה מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד מאוד ארוכה",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            },
            {
                rating: 4,
                content: "",
                publisher: "pazreshef@gmail.com",
                publisherName: "פז רשף"
            }]
    }

]

const getParkings = () => {
    return parkings;
};

const getParkingById = (parkingId) => {
    return parkings.find(p => p.id === parkingId);
};

const getParkingsByOwner = (ownerMail) => {
  return parkings.filter(p => p.owner === ownerMail)
};

const updateParking = (parking) => {
    const parkingIndex = parkings.findIndex(p => p.id === parkingId);
    parkings[parkingIndex] = parking;
    return parking;
}

module.exports = {
    getParkings,
    getParkingById,
    getParkingsByOwner,
    updateParking
};