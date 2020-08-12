const {Schema, model} = require('mongoose');

const CalendarSchema = new Schema(
    {
        CalendarId: {type: String},
        Date: {type: String},
        Country: {type: String},
        Category: {type: String},
        Event: {type: String},
        Reference: {type: String},
        ReferenceDate: {type: String},
        Source: {type: String},
        Actual: {type: String},
        Previous: {type: String},
        Forecast: {type: String},
        TEForecast: {type: String},
        URL: {type: String},
        DateSpan: {type: String},
        Importance: {type: Number},
        LastUpdate: {type: String},
        Revised: {type: String},
        Currency: {type: String},
        Unit: {type: String},
        OCountry: {type: String},
        OCategory: {type: String},
        Ticker: {type: String},
        Symbol: {type: String}
      });

    module.exports = model('Calendar', CalendarSchema);

    //// just for git