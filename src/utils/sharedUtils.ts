import { startOfDay, startOfISOWeek, startOfMonth } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

import { GamesFrequenciesEnum } from '../types/common';

export const getStartDateOfFrequency = (
  frequency?: GamesFrequenciesEnum | null,
  tz?: string | null,
) => {
  const now = new Date();
  const serverTzOffset = now.getTimezoneOffset() * 60000; // server TimeZone offset in millisenconds
  const tzNow = tz
    ? utcToZonedTime(now, tz)
    : new Date(now.getTime() + serverTzOffset);

  let startDate: Date | undefined;
  if (frequency === 'DAILY') startDate = startOfDay(tzNow);
  if (frequency === 'WEEKLY') startDate = startOfISOWeek(tzNow);
  if (frequency === 'MONTHLY') startDate = startOfMonth(tzNow);

  if (!startDate) return undefined;
  startDate = tz
    ? zonedTimeToUtc(startDate, tz)
    : new Date(startDate.getTime() - serverTzOffset);
  return startDate.toISOString();
};
