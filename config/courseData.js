const courseData = {
  "2024-09": {
    courseStartDate: "2024-10-11T00:00:00", // One day before first startDates.satuday
    stripeStartDate: "2024-09-11T00:00:00", // One day after startDates.tuesday (5 weeks)
    courseEndDate: "2024-11-15T00:00:00", //  Next courseStartDate
    startDates: {
      saturday: "2024-10-12T00:00:00",
      sunday: "2024-10-13T00:00:00",
      monday: "2024-10-14T00:00:00",
      tuesday: "2024-10-15T00:00:00",
    },
  },
  "2024-10": {
    courseStartDate: "2024-11-15T00:00:00",
    stripeStartDate: "2024-10-16T00:00:00",
    courseEndDate: "2025-01-03T00:00:00",
    startDates: {
      saturday: "2024-11-16T00:00:00",
      sunday: "2024-11-17T00:00:00",
      monday: "2024-11-18T00:00:00",
      tuesday: "2024-11-19T00:00:00",
    },
  },
  "2025-01": {
    courseStartDate: "2025-01-03T00:00:00",
    stripeStartDate: "2024-11-20T00:00:00",
    courseEndDate: "2025-02-07T00:00:00",
    startDates: {
      saturday: "2025-01-04T00:00:00",
      sunday: "2025-01-05T00:00:00",
      monday: "2025-01-06T00:00:00",
      tuesday: "2025-01-07T00:00:00",
    },
  },
  "2025-02": {
    courseStartDate: "2025-02-07T00:00:00",
    stripeStartDate: "2025-01-08T00:00:00",
    courseEndDate: "2025-03-14T00:00:00",
    startDates: {
      saturday: "2025-02-08T00:00:00",
      sunday: "2025-02-09T00:00:00",
      monday: "2025-02-10T00:00:00",
      tuesday: "2025-02-11T00:00:00",
    },
  },
  "2025-03": {
    courseStartDate: "2025-03-14T00:00:00",
    stripeStartDate: "2025-02-12T00:00:00",
    courseEndDate: "2025-04-18T00:00:00",
    startDates: {
      saturday: "2025-03-15T00:00:00",
      sunday: "2025-03-16T00:00:00",
      monday: "2025-03-17T00:00:00",
      tuesday: "2025-03-18T00:00:00",
    },
  },
  "2025-04": {
    courseStartDate: "2025-04-18T00:00:00",
    stripeStartDate: "2025-03-19T00:00:00",
    courseEndDate: "2025-05-23T00:00:00",
    startDates: {
      saturday: "2025-04-19T00:00:00",
      sunday: "2025-04-20T00:00:00",
      monday: "2025-04-21T00:00:00",
      tuesday: "2025-04-22T00:00:00",
    },
  },
  "2025-05": {
    courseStartDate: "2025-05-23T00:00:00",
    stripeStartDate: "2025-04-23T00:00:00",
    courseEndDate: "2025-06-27T00:00:00",
    startDates: {
      saturday: "2025-05-24T00:00:00",
      sunday: "2025-05-25T00:00:00",
      monday: "2025-05-26T00:00:00",
      tuesday: "2025-05-27T00:00:00",
    },
  },
  "2025-06": {
    courseStartDate: "2025-06-27T00:00:00",
    stripeStartDate: "2025-05-28T00:00:00",
    courseEndDate: "2025-08-01T00:00:00",
    startDates: {
      saturday: "2025-06-28T00:00:00",
      sunday: "2025-06-29T00:00:00",
      monday: "2025-06-30T00:00:00",
      tuesday: "2025-07-01T00:00:00",
    },
  },
  "2025-08": {
    courseStartDate: "2025-08-01T00:00:00",
    stripeStartDate: "2025-07-02T00:00:00",
    courseEndDate: "2025-09-05T00:00:00",
    startDates: {
      saturday: "2025-08-02T00:00:00",
      sunday: "2025-08-03T00:00:00",
      monday: "2025-08-04T00:00:00",
      tuesday: "2025-08-05T00:00:00",
    },
  },
  "2025-09": {
    courseStartDate: "2025-09-05T00:00:00",
    stripeStartDate: "2025-08-06T00:00:00",
    courseEndDate: "2025-10-10T00:00:00",
    startDates: {
      saturday: "2025-09-06T00:00:00",
      sunday: "2025-09-07T00:00:00",
      monday: "2025-09-08T00:00:00",
      tuesday: "2025-09-09T00:00:00",
    },
  },
  "2025-10": {
    courseStartDate: "2025-10-10T00:00:00",
    stripeStartDate: "2025-09-10T00:00:00",
    courseEndDate: "2025-11-14T00:00:00",
    startDates: {
      saturday: "2025-10-11T00:00:00",
      sunday: "2025-10-12T00:00:00",
      monday: "2025-10-13T00:00:00",
      tuesday: "2025-10-14T00:00:00",
    },
  },
  "2025-11": {
    courseStartDate: "2025-11-14T00:00:00",
    stripeStartDate: "2025-10-15T00:00:00",
    courseEndDate: "2025-12-19T00:00:00",
    startDates: {
      saturday: "2025-11-15T00:00:00",
      sunday: "2025-11-16T00:00:00",
      monday: "2025-11-17T00:00:00",
      tuesday: "2025-11-18T00:00:00",
    },
  },
  "2025-12": {
    courseStartDate: "2025-12-19T00:00:00",
    stripeStartDate: "2025-11-19T00:00:00",
    courseEndDate: "2026-01-23T00:00:00",
    startDates: {
      saturday: "2025-12-20T00:00:00",
      sunday: "2025-12-21T00:00:00",
      monday: "2025-12-22T00:00:00",
      tuesday: "2025-12-23T00:00:00",
    },
  },
};

module.exports = courseData;
