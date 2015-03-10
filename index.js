
var translations = {

  // JavaScript keywords
  'class': 'className',
  'for':   'htmlFor',

  // attributes requiring camel case
  // see http://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes
  'acceptcharset':     'acceptCharset',
  'accesskey':         'accessKey',
  'allowfullscreen':   'allowFullScreen',
  'allowtransparency': 'allowTransparency',
  'autocomplete':      'autoComplete',
  'autofocus':         'autoFocus',
  'autoplay':          'autoPlay',
  'cellpadding':       'cellPadding',
  'cellspacing':       'cellSpacing',
  'charset':           'charSet',
  'classid':           'classID',
  'colspan':           'colSpan',
  'contenteditable':   'contentEditable',
  'contextmenu':       'contextMenu',
  'crossorigin':       'crossOrigin',
  'datetime':          'dateTime',
  'enctype':           'encType',
  'formaction':        'formAction',
  'formenctype':       'formEncType',
  'formmethod':        'formMethod',
  'formnovalidate':    'formNoValidate',
  'formtarget':        'formTarget',
  'frameborder':       'frameBorder',
  'hreflang':          'hrefLang',
  'httpequiv':         'httpEquiv',
  'marginheight':      'marginHeight',
  'marginwidth':       'marginWidth',
  'maxlength':         'maxLength',
  'mediagroup':        'mediaGroup',
  'novalidate':        'noValidate',
  'radiogroup':        'radioGroup',
  'readonly':          'readOnly',
  'rowspan':           'rowSpan',
  'spellcheck':        'spellCheck',
  'srcdoc':            'srcDoc',
  'srcset':            'srcSet',
  'tabindex':          'tabIndex',
  'usemap':            'useMap',
};

module.exports = function(source) {
  this.cacheable && this.cacheable();
  for (from in translations) {
    var regex = new RegExp('([^0-9a-zA-Z_$])' + from + '=', 'g')
    source = source.replace(regex, '$1' + translations[from] + '=')
  }
  return source;
};
