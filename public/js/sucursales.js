// Branch Location Functionality with Schedule Data from Server
const branchesData = window.branchesData || '[]';
const branches = JSON.parse(branchesData);
const pageLang = window.pageLang || 'es';

// Translations for UI strings
const translations = {
  es: {
    browserNotSupported: 'Tu navegador no soporta geolocalización.',
    gettingLocation: 'Obteniendo ubicación...',
    gettingLocationInfo: 'Obteniendo tu ubicación...',
    foundNearest: '¡Encontrado!',
    nearestBranchIs: 'Tu sucursal más cercana es',
    atDistance: 'a',
    distanceUnit: 'km de distancia.',
    findNearestBtn: 'Buscar sucursal más cercana',
    errorGeneral: 'No se pudo obtener tu ubicación.',
    errorPermissionDenied: 'Permiso de ubicación denegado. Por favor, permite el acceso a tu ubicación.',
    errorPositionUnavailable: 'Información de ubicación no disponible.',
    errorTimeout: 'Tiempo de espera agotado al obtener ubicación.'
  },
  en: {
    browserNotSupported: 'Your browser does not support geolocation.',
    gettingLocation: 'Getting location...',
    gettingLocationInfo: 'Getting your location...',
    foundNearest: 'Found!',
    nearestBranchIs: 'Your nearest branch is',
    atDistance: 'at',
    distanceUnit: 'km away.',
    findNearestBtn: 'Find nearest branch',
    errorGeneral: 'Could not get your location.',
    errorPermissionDenied: 'Location permission denied. Please allow access to your location.',
    errorPositionUnavailable: 'Location information unavailable.',
    errorTimeout: 'Timed out while getting location.'
  }
};

const t = translations[pageLang] || translations.es;

function toggleBranch(branchId) {
  const content = document.getElementById('content-' + branchId);
  const icon = document.getElementById('icon-' + branchId);

  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    icon.classList.remove('rotated');
  } else {
    content.classList.add('expanded');
    icon.classList.add('rotated');
  }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c;
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180);
}

function populateSchedules() {
  branches.forEach(function(branch) {
    const salsaContainer = document.getElementById(branch.id + '-salsa-schedule');
    const bachataContainer = document.getElementById(branch.id + '-bachata-schedule');

    if (salsaContainer && branch.salsaSchedule) {
      branch.salsaSchedule.forEach(function(schedule) {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'schedule-item';
        scheduleItem.innerHTML =
          '<div class="schedule-days">' + schedule.days.join(', ') + '</div>' +
          '<div class="schedule-time">' + schedule.time + '</div>';
        salsaContainer.appendChild(scheduleItem);
      });
    }

    if (bachataContainer && branch.bachataSchedule) {
      branch.bachataSchedule.forEach(function(schedule) {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'schedule-item';
        scheduleItem.innerHTML =
          '<div class="schedule-days">' + schedule.days.join(', ') + '</div>' +
          '<div class="schedule-time">' + schedule.time + '</div>';
        bachataContainer.appendChild(scheduleItem);
      });
    }
  });
}

function findNearestBranch() {
  const statusDiv = document.getElementById('locationStatus');
  const button = document.getElementById('findNearestBtn');

  if (!navigator.geolocation) {
    statusDiv.innerHTML = '<div class="alert alert-danger">' + t.browserNotSupported + '</div>';
    return;
  }

  button.disabled = true;
  button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>' + t.gettingLocation;
  statusDiv.innerHTML = '<div class="alert alert-info">' + t.gettingLocationInfo + '</div>';

  navigator.geolocation.getCurrentPosition(
    function(position) {
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;

      let nearestBranch = null;
      let nearestDistance = Infinity;

      branches.forEach(function(branch) {
        const distance = calculateDistance(userLat, userLng, branch.lat, branch.lng);

        const distanceBadge = document.getElementById('distance-' + branch.id);
        distanceBadge.textContent = distance.toFixed(1) + ' km';
        distanceBadge.style.display = 'inline-block';

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestBranch = branch;
        }
      });

      document.querySelectorAll('.branch-card').forEach(function(card) {
        card.classList.remove('nearest');
      });

      if (nearestBranch) {
        const nearestCard = document.querySelector('[data-branch="' + nearestBranch.id + '"]');
        nearestCard.classList.add('nearest');

        statusDiv.innerHTML =
          '<div class="alert alert-success">' +
          '<strong>' + t.foundNearest + '</strong> ' + t.nearestBranchIs + ' <strong>' + nearestBranch.name + '</strong> ' +
          t.atDistance + ' ' + nearestDistance.toFixed(1) + ' ' + t.distanceUnit +
          '</div>';
      }

      button.disabled = false;
      button.innerHTML = '<i class="fas fa-location-arrow me-2"></i>' + t.findNearestBtn;
    },
    function(error) {
      let errorMessage = t.errorGeneral;

      switch(error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = t.errorPermissionDenied;
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = t.errorPositionUnavailable;
          break;
        case error.TIMEOUT:
          errorMessage = t.errorTimeout;
          break;
      }

      statusDiv.innerHTML = '<div class="alert alert-danger">' + errorMessage + '</div>';
      button.disabled = false;
      button.innerHTML = '<i class="fas fa-location-arrow me-2"></i>' + t.findNearestBtn;
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 300000
    }
  );
}

// Initialize schedules when page loads
document.addEventListener('DOMContentLoaded', function() {
  populateSchedules();
});