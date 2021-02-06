const mongoose = require("mongoose");

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useFindAndModify: true
    });
  } catch (e) {
    console.error("Error connecting to db", e);
  }
})();
