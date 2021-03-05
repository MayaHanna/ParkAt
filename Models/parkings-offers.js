const getParkingsOffers = () => {
    const startDate = new Date();
    startDate.setHours(14);

    const endDate = new Date();
    endDate.setHours(16);
    return [
        {
            id: 1,
            price: 5,
            start: startDate,
            end: endDate,
            parking: 1,
        },
        {
            id: 2,
            price: 5,
            start: startDate,
            end: endDate,
            parking: 2,
        },
        {
            id: 3,
            price: 5,
            start: startDate,
            end: endDate,
            parking: 3,
        },
        {
            id: 4,
            price: 5,
            start: startDate,
            end: endDate,
            parking: 4,
        },
        {
            id: 5,
            price: 5,
            start: startDate,
            end: endDate,
            parking: 5,
        },
        {
            id: 6,
            price: 5,
            start: startDate,
            end: endDate,
            parking: 6,
        },

    ]
};

module.exports.getParkingsOffers = getParkingsOffers;