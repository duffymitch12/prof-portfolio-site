// const API_KEY = 'UU76MhOgHnZW37PH9T3AJFxbG282jCv8';
// const fetch = require("node-fetch");
// const queryString = require('query-string');
// const moment = require("moment");

// // set the Timelines GET endpoint as the target URL
// const getTimelineURL = "https://api.tomorrow.io/v4/timelines";
// let location = [42.584091, -83.243240];
// const fields = [
//     "precipitationIntensity",
//     "precipitationType",
//     "windSpeed",
//     "windGust",
//     "windDirection",
//     "temperature",
//     "temperatureApparent",
//     "cloudCover",
//     "cloudBase",
//     "cloudCeiling",
//     "weatherCode",
//   ];

//   const units = "imperial";

//   // set the timesteps, like "current", "1h" and "1d"
//   const timesteps = ["current", "1h", "1d"];

//   // configure the time frame up to 6 hours back and 15 days out
//   const now = moment.utc();
//   const startTime = moment.utc(now).add(0, "minutes").toISOString();
//   const endTime = moment.utc(now).add(1, "days").toISOString();

//   // specify the timezone, using standard IANA timezone format
//   const timezone = "America/New_York";

//   // request the timelines with all the query string parameters as options
//   const getTimelineParameters =  queryString.stringify({
//       API_KEY,
//       location,
//       fields,
//       units,
//       timesteps,
//       startTime,
//       endTime,
//       timezone,
//   }, {arrayFormat: "comma"});

//   fetch(getTimelineURL + "?" + getTimelineParameters, {method: "GET", compress: true})
//     .then((result) => result.json())
//     .then((json) => console.log(json)
//     .catch((error) => console.error("error: " + err));
// // export default async function getWeatherData() {

// // }
