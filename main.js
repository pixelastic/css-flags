(function() {
  'use strict';

  var globals = typeof window === 'undefined' ? global : window;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = ({}).hasOwnProperty;

  var unalias = function(alias, loaderPath) {
    var result = aliases[alias] || aliases[alias + '/index.js'];
    return result || alias;
  };

  var _reg = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (_reg.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = unalias(name, loaderPath);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has.call(cache, dirIndex)) return cache[dirIndex].exports;
    if (has.call(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from ' + '"' + loaderPath + '"');
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  require.register = require.define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  require.list = function() {
    var result = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  require.brunch = true;
  require._cache = cache;
  globals.require = require;
})();
require.register("app", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* globals algoliasearch, algoliasearchHelper, $, _ */
var CSSFlags = {
  init: function init() {
    this.$searchInput = $('#searchbar-input');
    this.client = algoliasearch('O3F8QXYK6R', '3253f339ecaf4ff23f0afe8ad2ae655a');
    this.helper = algoliasearchHelper(this.client, 'cssflags');

    this.$searchInput.on('keyup', this.updateQuery);
    this.helper.on('result', this.updateResults);
  },
  updateQuery: function updateQuery() {
    var query = $(CSSFlags.$searchInput).val();
    CSSFlags.helper.setQuery(query).search();
  },
  updateResults: function updateResults(results) {
    var flags = _.map(results.hits, function (hit) {
      var name = hit.name;
      if (hit._highlightResult.name) {
        name = hit._highlightResult.name.value;
      }

      return {
        code: hit.code,
        name: name
      };
    });

    // Hide them all
    $('.c-flaglist--item').hide();

    _.each(flags, function (flag) {
      var flagNode = $('.c-flag__' + flag.code);
      var parent = flagNode.closest('.c-flaglist--item');
      if (parent.hasClass('c-flaglist--name__hard') || parent.hasClass('c-flaglist--item__unknown')) {
        return;
      }
      parent.find('.c-flaglist--name').html(flag.name);
      parent.show();
    });
  }
};

exports.default = CSSFlags;
});


//# sourceMappingURL=main.js.map