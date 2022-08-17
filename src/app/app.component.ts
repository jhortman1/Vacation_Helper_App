import { Component } from '@angular/core';
interface destination{
  name:string;
  description:string;
  price:number;
  climate:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Let Us Help You Choose the Right Vacation Destination';

  budget!:number;
  climate!:number;
  returnDestination!:destination;

  onGenerateDestinationRecomendation() {
    let b =this.budget;
    let c = this.climate
    let d:destination;
    let desc = function(value:destination[]):destination
    {
      value.forEach((v)=>{
        if(v.price==b && v.climate==c)
        {
          d = v;
        }
      })
      return d;
    }
    this.returnDestination = desc(this.destinations);
  }

  destinations: destination [] = [
    {
      name:"Paris",
      description:"The magnetic City of Light draws visitors from around the globe who come to see iconic attractions like the Eiffel Tower, the Louvre and the Arc de Triomphe. But what travelers really fall in love with are the city's quaint cafes, vibrant markets, trendy shopping districts and unmistakable je ne sais quoi. Get lost wandering along the charming cobblestone streets, or grab a croissant and relax on the banks of the Seine for hours.",
      price:500,
      climate:55
    },
    {
      name:"Maui",
      description:"Whether you're driving along the Road to Hana, enjoying a bird's-eye view of Maui's lush coastline from a helicopter, snorkeling with sea turtles or simply relaxing on white or black sand beaches, you'll find that this Hawaiian island is unlike any other tropical destination.",
      price:750,
      climate:65
    },
    {
      name:"Tokyo",
      description:"Simply setting foot in Japan's cosmopolitan capital is an experience within itself. A city known for its bustling streets and flashing neon signs, Tokyo has an electric energy and plenty of attractions to discover. Foodies won't be let down by the city's fresh sushi and hearty ramen. Budding photographers and adrenaline junkies will love taking in the sweeping panoramas from the top of the Tokyo Skytree.",
      price:1000,
      climate:75
    },
    {
      name:"Dubai",
      description:"Stunning Persian Gulf views, heart-pumping activities and historical landmarks await you in Dubai. This Middle Eastern city is filled with some of the world's most notable and unique attractions, including the Dubai Mall, indoor Ski Dubai and Burj Khalifa, the tallest building on the planet.",
      price:1500,
      climate:85
    },
    {
      name:"Yellostone",
      description:"A visit to this national park in Idaho, Montana and Wyoming is considered by many to be a rite of passage for Americans, and it's sure to leave you in awe of nature's power. Marvel at the kaleidoscopic waters of the Grand Prismatic Spring, catch the Old Faithful geyser's nearly hourly show, admire (from a safe distance) the roaming bison in the Lamar and Hayden valleys or simply relax with a picnic at Yellowstone Lake.",
      price:200,
      climate:100
    }
  ]
}
