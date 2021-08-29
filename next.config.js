const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_connect: 'mongodb://localhost:27017',
      }
    }
  }
  return {
    // reactStrictMode: true,
    env: {
      mongodb_connect: 'mongodb+srv://Faruk:Faruk01936@cluster0.fqsei.mongodb.net/events',
    }
  }


}
