// Draw the calendar output
function drawCalendar(monthData) {
    const calendarContainer = document.getElementById('calendarContainer');
    calendarContainer.innerHTML = ''; // Clear existing content
  
    for (let day = 1; day <= 31; day++) {
      const template = document.getElementById('calendarDay').content.cloneNode(true);
  
      // Populate day number
      template.querySelector('#calendarDate').textContent = day;
  
      // Determine and populate events
      const dayData = monthData[day - 1]; // Assuming monthData is an array with 31 elements
      if (dayData) {
        if (dayData.dayEvent) {
          template.querySelector('.Daytime .eventText').textContent = dayData.dayEvent;
          template.querySelector('.Daytime #sunIcon').src = 'path_to_sun_icon';
          // Add character image if applicable
          template.querySelector('.Daytime #calendarCharacterImg').src = dayData.dayCharacterImg;
        }
        if (dayData.nightEvent) {
          template.querySelector('.Nighttime .eventText').textContent = dayData.nightEvent;
          template.querySelector('.Nighttime #moonIcon').src = 'path_to_moon_icon';
          // Add character image if applicable
          template.querySelector('.Nighttime #calendarCharacterImg').src = dayData.nightCharacterImg;
        }
      } else {
        template.querySelector('#calendarDate').classList.add('inactive'); // Styling for inactive days
      }
  
      calendarContainer.appendChild(template);
    }
  }

  

// This file holds the logic of how the calendar will appear
// Dummy Code provided by chatgpt
// Assume we have a function to determine if there's a story event and which characters are available
function populateCalendarDay(date, eventType, daytimeCharacter, nighttimeCharacter) {
    const template = document.getElementById('calendarDay').content.cloneNode(true);
  
    // Set the date
    template.querySelector('#calendarDate').textContent = date;
  
    // Handle event type
    if (eventType) {
      template.querySelector('#eventType').textContent = eventType;
      template.querySelector('#eventType').style.display = 'block';
      template.querySelector('.Daytime').style.display = 'none';
      template.querySelector('.Nighttime').style.display = 'none';
    } else {
      // Populate daytime slot
      if (daytimeCharacter) {
        template.querySelector('#calendarCharacterImgDay').src = daytimeCharacter.img;
        template.querySelector('#calendarCharacterImgDay').alt = daytimeCharacter.name;
        template.querySelector('.Daytime .eventText').style.display = 'none';
      } else {
        template.querySelector('.Daytime').style.display = 'none';
      }
      
      // Populate nighttime slot
      if (nighttimeCharacter) {
        template.querySelector('#calendarCharacterImgNight').src = nighttimeCharacter.img;
        template.querySelector('#calendarCharacterImgNight').alt = nighttimeCharacter.name;
        template.querySelector('.Nighttime .eventText').style.display = 'none';
      } else {
        template.querySelector('.Nighttime').style.display = 'none';
      }
    }
  
    // Append the populated template to the DOM
    document.getElementById('calendarContainer').appendChild(template);
  }

  function populateCalendar(monthData) {
    const calendarContainer = document.getElementById('calendarContainer');
    const template = document.getElementById('calendarDayTemplate');
  
    // Clear the calendar container before populating it
    calendarContainer.innerHTML = '';
  
    for (let day = 1; day <= 31; day++) {
      const clone = template.content.cloneNode(true);
  
      // Set the date
      const dateElement = clone.querySelector('.calendar-date');
      dateElement.textContent = day;
  
      // Get the data for this day (if any)
      const dayData = monthData[day - 1];
  
      if (dayData) {
        // Populate Daytime event
        if (dayData.dayEvent) {
          clone.querySelector('.daytime .event-text').textContent = dayData.dayEvent;
          clone.querySelector('.daytime .calendar-character-img').src = dayData.dayCharacterImg;
        } else {
          clone.querySelector('.daytime').style.display = 'none';
        }
  
        // Populate Nighttime event
        if (dayData.nightEvent) {
          clone.querySelector('.nighttime .event-text').textContent = dayData.nightEvent;
          clone.querySelector('.nighttime .calendar-character-img').src = dayData.nightCharacterImg;
        } else {
          clone.querySelector('.nighttime').style.display = 'none';
        }
      } else {
        // If no data, make the day inactive
        clone.querySelector('.calendar-day').classList.add('inactive');
      }
  
      // Append the cloned day to the calendar container
      calendarContainer.appendChild(clone);
    }
  }
  
  // Example data for a month
  const mayData = [
    { dayEvent: 'Study', dayCharacterImg: 'char1.png', nightEvent: 'Meet Friend', nightCharacterImg: 'char2.png' },
    { dayEvent: 'Work', dayCharacterImg: 'char3.png', nightEvent: 'TV Show', nightCharacterImg: 'char4.png' },
    // ... continue adding data for all 31 days or leave blank for no event days
  ];
  
  // Populate the calendar with data for May
  populateCalendar(mayData);