import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from "../services/open-weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public cityName: string;
  public weatherResult: any;

  constructor(private service: OpenWeatherService) { }

  ngOnInit() {
  }

  getWeather(countryName: string) {
    this.service.getWeather(countryName).subscribe(
      (data: any) => {
        console.log(data);
        console.log(data.name)
        this.weatherResult = data;
      }
    );
  }

}
