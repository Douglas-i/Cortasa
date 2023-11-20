// ubicaciones.js
document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([12.13282,  -85.250], 8); // Coordenadas de Nueva York como ejemplo

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Coordenadas de ejemplo (puedes agregar tus propias ubicaciones)
    const locations = [
        { lat: 	12.13282, lng:  -86.2504, name: 'Empresa 1' },
        { lat: 	11.97444, lng: -86.09417, name: 'Empresa 2' },
        { lat: 	12.13282, lng:  -85.2504, name: 'Empresa 1' }
    ];

    // Agrega marcadores para cada ubicación
    locations.forEach(location => {
        L.marker([location.lat, location.lng])
            .addTo(map)
            .bindPopup(location.name);
    });
});
