function updateTrafficStatus() {
    const now = new Date();
    const hour = now.getHours();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Update the time display
    document.getElementById('traffic-time').textContent = `${time}`;

    let status = '';

    if (hour >= 0 && hour < 6) {
        status = "It's early morning. Roads are mostly clear.";
    } else if (hour >= 6 && hour < 9) {
        status = "Morning rush hour. Expect heavy traffic on key roads.";
    } else if (hour >= 9 && hour < 13) {
        status = "Late morning traffic is light. Good time to travel.";
    } else if (hour >= 13 && hour < 15) {
        status = "School Times. Plan for possible delays.";
    } else if (hour >= 15 && hour < 17) {
        status = "Traffic is lightening up before evening rush.";
    } else if (hour >= 17 && hour < 20) {
        status = "Evening rush hour. Heavy traffic on main roads.";
    } else if (hour >= 20 && hour < 24) {
        status = "Night time traffic is low. Roads are mostly clear.";
    }


    document.getElementById('traffic-status').textContent = status;
}

// Run on page load
updateTrafficStatus();

// Update every second
setInterval(updateTrafficStatus, 1000);
