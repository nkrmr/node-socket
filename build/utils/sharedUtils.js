"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStartDateOfFrequency = void 0;
const date_fns_1 = require("date-fns");
const date_fns_tz_1 = require("date-fns-tz");
const getStartDateOfFrequency = (frequency, tz) => {
    const now = new Date();
    const serverTzOffset = now.getTimezoneOffset() * 60000; // server TimeZone offset in millisenconds
    const tzNow = tz
        ? date_fns_tz_1.utcToZonedTime(now, tz)
        : new Date(now.getTime() + serverTzOffset);
    let startDate;
    if (frequency === 'DAILY')
        startDate = date_fns_1.startOfDay(tzNow);
    if (frequency === 'WEEKLY')
        startDate = date_fns_1.startOfISOWeek(tzNow);
    if (frequency === 'MONTHLY')
        startDate = date_fns_1.startOfMonth(tzNow);
    if (!startDate)
        return undefined;
    startDate = tz
        ? date_fns_tz_1.zonedTimeToUtc(startDate, tz)
        : new Date(startDate.getTime() - serverTzOffset);
    return startDate.toISOString();
};
exports.getStartDateOfFrequency = getStartDateOfFrequency;
