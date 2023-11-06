class VacationService {
  static async createVacationRequest(data) {
    const { type, startDate, endDate } = data;
    try {
      let daysToApprove;
      if (type === "Ежегодный") daysToApprove = 5;
      if (type === "Ненормированный") daysToApprove = 2;
      if (type === "Студенческий") daysToApprove = 3;
      const startDateRequest = new Date();
      startDateRequest.setDate(startDateRequest.getDate() + daysToApprove);
      const day = startDateRequest.getDate();
      const month = startDateRequest.getMonth() + 1;
      const year = startDateRequest.getFullYear();
      const endDateRequest = `${day}.${month}.${year}`;
      const dateStart = new Date(startDate);
      const dateEnd = new Date(endDate);
      const timeDifference = dateEnd - dateStart;
      const countDays = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

      const payload = {
        id: Date.now(),
        type: type,
        startDate: dateStart,
        endDate: dateEnd,
        status: "pending_approval",
        countDays: countDays,
        numberRequest: `RE${dateStart.getTime()}${dateEnd.getTime()}`,
      };

      return {
        message: "Ваша заявка успешно создана",
        id: Date.now(),
        numberRequest: payload.numberRequest,
      };
    } catch (e) {
      return e;
    }
  }
}

module.exports = VacationService;
