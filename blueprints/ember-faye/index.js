/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies
  description: 'Installs bower package for Faye',

  normalizeEntityName: function() {},

  afterInstall: function(/* options */) {
    return this.addBowerPackageToProject('faye-browser');
  }
};
