export default () => ({
  activeTab: 'All',
  selectTab(tabLink) {
    this.activeTab = tabLink.getAttribute('href').split('#')[1];
    const allTabLinks = document.querySelectorAll('.tab-link');
    allTabLinks.forEach((link) => {
      console.log(this.activeTab);
      link.classList.remove('tab-link-active');
      if (link.getAttribute('href').split('#')[1] === this.activeTab) {
        link.classList.add('tab-link-active');
      }
    });
  },
});
