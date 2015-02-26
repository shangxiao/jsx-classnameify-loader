module.exports = function(source) {
  this.cacheable && this.cacheable();
  return source.replace(/([^0-9a-zA-Z_$])class=/g, '$1className=');
};
