const ExifImage = require('exif').ExifImage;

function converteCoordenada(p, ref) {
    let n = p[0] + p[1] / 60 + p[2] / 3600;
    if (ref === 'S' || ref === 'W') {
        n = n * -1;
    }
    return n;
}

new ExifImage({ image: 'img.jpg' },
    function (error, exifData) {
        if (error) {
            console.log('Error: ' + error.message);
        } else {
            console.log(`Aparelho ${exifData.image.Make} ${exifData.image.Model}`);
            console.log(`Posição ${exifData.gps.GPSLatitude} ${exifData.gps.GPSLatitudeRef} ${exifData.gps.GPSLongitude} ${exifData.gps.GPSLongitudeRef}`);
            console.log(`Mapa ${converteCoordenada(exifData.gps.GPSLatitude, exifData.gps.GPSLatitudeRef)} ${converteCoordenada(exifData.gps.GPSLongitude, exifData.gps.GPSLongitudeRef)}`);
            console.log(`https://www.google.com/maps/@${converteCoordenada(exifData.gps.GPSLatitude, exifData.gps.GPSLatitudeRef)},${converteCoordenada(exifData.gps.GPSLongitude, exifData.gps.GPSLongitudeRef)},18z`);
        }
    });



