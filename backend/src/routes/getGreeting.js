const GREETINGS = [
    "Hello Caterina!",
    "Hello Dario!",
    "Hello Amaia!"
];

module.exports = (req, res) => {
    const randomIndex = Math.floor(Math.random() * GREETINGS.length);
    res.send({
        greeting: GREETINGS[randomIndex]
    });
};