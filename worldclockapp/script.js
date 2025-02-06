function updateTime() {
    const cities = [
        { timezone: 'America/New_York', elementId: 'new-york-time' },
        { timezone: 'America/Los_Angeles', elementId: 'los-angeles-time' },
        { timezone: 'America/Toronto', elementId: 'toronto-time' },
        { timezone: 'America/Mexico_City', elementId: 'mexico-city-time' },
        { timezone: 'America/Chicago', elementId: 'chicago-time' },
        { timezone: 'Europe/London', elementId: 'london-time' },
        { timezone: 'Europe/Paris', elementId: 'paris-time' },
        { timezone: 'Europe/Berlin', elementId: 'berlin-time' },
        { timezone: 'Europe/Moscow', elementId: 'moscow-time' },
        { timezone: 'Europe/Rome', elementId: 'rome-time' },
        { timezone: 'Asia/Tokyo', elementId: 'tokyo-time' },
        { timezone: 'Asia/Shanghai', elementId: 'beijing-time' },
        { timezone: 'Asia/Kolkata', elementId: 'new-delhi-time' },
        { timezone: 'Asia/Bangkok', elementId: 'bangkok-time' },
        { timezone: 'Asia/Singapore', elementId: 'singapore-time' },
        { timezone: 'Australia/Sydney', elementId: 'sydney-time' },
        { timezone: 'Pacific/Auckland', elementId: 'auckland-time' },
        { timezone: 'Australia/Melbourne', elementId: 'melbourne-time' },
        { timezone: 'Africa/Cairo', elementId: 'cairo-time' },
        { timezone: 'Africa/Johannesburg', elementId: 'johannesburg-time' },
        { timezone: 'Africa/Nairobi', elementId: 'nairobi-time' },
        { timezone: 'America/Sao_Paulo', elementId: 'sao-paulo-time' },
        { timezone: 'America/Argentina/Buenos_Aires', elementId: 'buenos-aires-time' },
        { timezone: 'America/Sao_Paulo', elementId: 'rio-de-janeiro-time' }
    ];

    cities.forEach(city => {
        const time = new Date().toLocaleString("en-US", { timeZone: city.timezone });
        document.getElementById(city.elementId).textContent = time;
    });
}

setInterval(updateTime, 1000);
updateTime();
