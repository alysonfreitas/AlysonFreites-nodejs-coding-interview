import { FlightsModel } from "../models/flights.model";
import { Person } from "../models/persons.model";

export class FlightsService {
  getAll() {
    return FlightsModel.find();
  }
  async bookFlight(code: string, person: Person) {
    const flight = await FlightsModel.findOne({ code: code });
    flight.passengers.push(person);
    return FlightsModel.updateOne(
      { code: code },
      { $set: { passengers: flight.passengers } }
    );
  }
}
