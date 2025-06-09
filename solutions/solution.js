function updateTrafficStatus() {
    const now = new Date();
    const hour = now.getHours();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Update the time display
    document.getElementById('traffic-time').textContent = `${time}`;

    let status = '';

    if (hour >= 6 && hour < 12) {
        status = "Morning rush hour is over. Traffic is lightening up.";
    } else if (hour >= 12 && hour < 17) {
        status = "Midday traffic is moderate. Some congestion expected near city centers.";
    } else if (hour >= 17 && hour < 22) {
        status = "Evening rush hour. Expect heavy traffic on major roads.";
    } else {
        status = "It's late. Roads are mostly clear.";
    }

    
    document.getElementById('traffic-status').textContent = status;
}

// Run on page load
updateTrafficStatus();

// Update every second
setInterval(updateTrafficStatus, 1000);
