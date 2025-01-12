function updateDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'medium',
    });
    document.getElementById('dateTimeDisplay').innerText = formattedDateTime;
  }
  setInterval(updateDateTime, 1000);
  updateDateTime();
  