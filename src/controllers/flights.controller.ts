import { JsonController, Get, Post, Body, Param } from "routing-controllers";
import { FlightsService } from "../services/flights.service";
import { Person } from "../models/persons.model";

const flightsService = new FlightsService();

@JsonController("/flights")
export default class FlightsController {
  @Get("", { transformResponse: false })
  async getAll() {
    const data = await flightsService.getAll();
    return {
      status: 200,
      data: data,
    };
  }
  @Post("/:code/book", { transformResponse: false })
  async bookFlight(@Param("code") code: string, @Body() person: Person) {
    console.log(code, person);
    const data = await flightsService.bookFlight(code, person);
    return {
      status: 200,
      data: data,
    };
  }
}
