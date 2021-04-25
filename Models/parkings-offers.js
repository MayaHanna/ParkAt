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
            merchantId: "FAUJDYBDLARQG",
            status: "Closed",
            client: "pazreshef@gmail.com"
        },
        {
            id: 2,
            price: 5,
            start: startDate,
            end: endDate,
            parking: 2,
            merchantId: "FAUJDYBDLARQG",
            status: "Open"
        },
        {
            id: 3,
            price: 5,
            start: startDate,
            end: endDate,
            parking: 3,
            merchantId: "FAUJDYBDLARQG",
            status: "Open"
        },
        {
            id: 4,
            price: 5,
            start: startDate,
            end: endDate,
            parking: 4,
            merchantId: "FAUJDYBDLARQG",
            status: "Open"
        },
        {
            id: 5,
            price: 5,
            start: startDate,
            end: endDate,
            parking: 5,
            merchantId: "FAUJDYBDLARQG",
            status: "Open"
        },
        {
            id: 6,
            price: 5,
            start: startDate,
            end: endDate,
            parking: 6,
            merchantId: "FAUJDYBDLARQG",
            status: "Open"
        },

    ]
};

module.exports.getParkingsOffers = getParkingsOffers;
