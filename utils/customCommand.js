const platformKeyMap = {
    web: 'web',
    mweb: 'mweb',
    android: 'android',
    ios: 'ios',
  };
  
  // Overwrite $ command
  browser.overwriteCommand('$', ($, selector) => {
    let element = undefined;
    if (typeof selector === 'string') {
      element = $(selector);
    } else {
      element = $(getSelectorByPlatform(selector));
    }
    return element;
  });
  
  // Overwrite $$ command
  browser.overwriteCommand('$$', ($$, selector) => {
    let element = undefined;
    if (typeof selector === 'string') {
      element = $$(selector);
    } else {
      element = $$(getSelectorByPlatform(selector));
    }
    return element;
  });
  
  /**
   * Gets platform-specific selector.
   * @param {*} selector
   * @return {string} Platform specific selector.
   */
  function getSelectorByPlatform(selector) {
    const platform = getPlatform();
    const platformKey = validateAndGetPlatformKey(platform);
    return selector[platformKey];
  }
  
  /**
   * Gets current platform.
   * @return {string} platform
   */
  function getPlatform() {
    if (!driver.isMobile) return 'web';
    if (driver.isAndroid && browser.capabilities.browserName) return 'mweb';
    if (driver.isIOS && browser.capabilities.browserName) return 'mweb';
    return driver.isIOS ? 'ios' : 'android';
  }
  
  /**
   * Checks if platform-specific selector is set.
   * @param {string} platform
   * @return {string} key
   */
  function validateAndGetPlatformKey(platform) {
    const platformKey = platformKeyMap[platform];
    if (!platformKey) {
      throw new Error(`Selector not set for ${platform} platform.`);
    }
    return platformKey;
  }
  