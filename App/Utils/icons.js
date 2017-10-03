export default function(iconCode) {
  let map = {
    '3': 'weather-lightning', // severe thunderstorms
    '4': 'weather-lightning', // thunderstorms
    '5': 'weather-snowy-rainy', // mixed rain and snow
    '11': 'weather-pouring', // Showers
    '12': 'weather-pouring', // Showers
    '14': 'weather-snowy', // Light snow showers
    '14': 'weather-snowy', // Light snow showers
    '16': 'weather-snowy', // Snow
    '20': 'weather-fog', // Foggy
    '24': 'weather-windy', // Windy
    '26': 'weather-cloudy', // Cloudy
    '27': 'weather-cloudy',    //  mostly cloudy (night)
    '28': 'weather-cloudy',    //  mostly cloudy (day)
    '29': 'weather-partlycloudy',    //  partly cloudy (night)
    '30': 'weather-partlycloudy',    //  partly cloudy (day)
    '30': 'weather-cloudy', // Cloudy
    '31':'weather-night', //  clear (night)
    '32':'weather-sunny', //  sunny
    '33':'weather-night', //  fair (night)
    '34':'weather-sunny', //  fair (day)
    '35':'weather-rainy', //  mixed rain and hail
    '37':'weather-lightning', //  isolated thunderstorms
    '38':'weather-lightning', //  scattered thunderstorms
    '39':'weather-lightning', //  scattered thunderstorms
    '40':'weather-pouring', //  scattered showers
    '41':'weather-snowy', //  heavy snow
    '42':'weather-snowy', //  scattered snow showers
    '43':'weather-snowy', //  heavy snow
    '44':'weather-cloudy', //  partly cloudy
    '45':'weather-lightning-rainy', //  thundershowers
    '46':'weather-cloudy', //  snow showers
    '47':'weather-lightning-rainy' //  isolated thundershowers

  };

  return map[iconCode] || '\uf03e;';
}