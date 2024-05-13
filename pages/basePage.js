const basePage = {
  baseUrl: 'https://qualityshepherd.com/',

  /**
   * wrapper for visit so we can use relative urls and append them to baseUrl
   * @param  {string} relativeUrl
   */
  goto (relativeUrl = '') {
    cy.visit('https://qualityshepherd.com/')
  }
}
export default basePage
