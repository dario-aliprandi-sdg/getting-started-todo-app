const GREETING = ['Hello Caterina', 'Hello Dario', 'Hello Amaia' ];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};

module.exports = async (req, res) => {
  res.send({
    greeting: GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
  });
};
