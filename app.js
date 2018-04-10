var font = require('fontkit');


font.open("C:\\Users\\neven\\Downloads\\Plex\\IBM-Plex-Serif\\IBMPlexSerif-Regular.ttf", (err, font) => {

   font.availableFeatures.forEach(element => {
      console.log(element);
   });

});