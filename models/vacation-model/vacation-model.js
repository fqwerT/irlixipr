const VacationService = require("../../service/vaction-service/vacation-service")

class VacationModel {
   static async createRequest(req,res) {
    try {
      const { type, startDate, endDate } = req.body
      const vaction = await VacationService.createVacationRequest({ type, startDate, endDate })
      res.status(200).json(vaction)
    } catch (error) {
      res.status(400).send('Internal Server Error')
    }
   }


}

module.exports = VacationModel