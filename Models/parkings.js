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
      status: "Free",
      owner: "1",
      price: 5,
      start: startDate,
      end: endDate,
    },
    {
      id: 2,
      address: "לכיש 34, שוהם",
      isPrivate: true,
      description:
        "חניה קטנה ומטריפה, ברגע שתיכנסו לחניה אתם תשתגעו. תאמינו לי.",
      size: "Big",
      status: "Free",
      owner: "1",
      price: 5,
      start: startDate,
      end: endDate,
    },
    {
      id: 3,
      address: "רוטשילד 16, תל אביב",
      isPrivate: true,
      description: "חניה פרטית במקום הכי חם שיש",
      size: "Big",
      status: "Taken",
      owner: "1",
      price: 5,
      start: startDate,
      end: endDate,
    },
    {
      id: 4,
      address: "רוטשילד 16, תל אביב",
      isPrivate: true,
      description: "חניה פרטית במקום הכי חם שיש",
      size: "Big",
      status: "Taken",
      owner: "1",
      price: 5,
      start: startDate,
      end: endDate,
    },
    {
      id: 5,
      address: "רוטשילד 16, תל אביב",
      isPrivate: true,
      description: "חניה פרטית במקום הכי חם שיש",
      size: "Big",
      status: "Taken",
      owner: "1",
      price: 5,
      start: startDate,
      end: endDate,
    },
    {
      id: 6,
      address: "רוטשילד 16, תל אביב",
      isPrivate: true,
      description: "חניה פרטית במקום הכי חם שיש",
      size: "Big",
      status: "Taken",
      owner: "1",
      price: 5,
      start: startDate,
      end: endDate,
    },
  ];
};

module.exports.getParkings = getParkings;
