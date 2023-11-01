function findMatching(drivers, string) {
    // Convert the input string to lowercase for case-insensitive comparison
    const searchString = string.toLowerCase();
  
    // Use the filter method to create an array of matching drivers
    const matchingDrivers = drivers.filter(driver => {
      // Convert each driver's name to lowercase and check if it includes the lowercase search string
      return driver.toLowerCase().includes(searchString);
    });
  
    return matchingDrivers;
  }

  function fuzzyMatch(drivers, string) {
    const matchingDrivers = drivers.filter(driver => {
        return driver.toLowerCase().startsWith(string.toLowerCase());
    })
    return matchingDrivers;
  }

  function matchName(drivers, string) {
    const matchingDrivers = drivers.filter(driver => {
        return driver.name.toLowerCase() === string.toLowerCase();
    })
    return matchingDrivers;
  }