(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['deps'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <tr class=\"js-navigation-item navigation-focus\">\n        <td class=\"icon\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.deprecated : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "        </td>\n        <td class=\"content\">\n          <a href=\"https://libraries.io/"
    + alias4(((helper = (helper = helpers.platform || (depth0 != null ? depth0.platform : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"platform","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n            "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\n          </a>\n        </td>\n        <td class=\"message\">\n          Required: <b>"
    + alias4(((helper = (helper = helpers.requirements || (depth0 != null ? depth0.requirements : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"requirements","hash":{},"data":data}) : helper)))
    + "</b>\n        </td>\n        <td>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.outdated : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </td>\n        <td class=\"age\">\n          "
    + alias4(((helper = (helper = helpers.platform || (depth0 != null ? depth0.platform : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"platform","hash":{},"data":data}) : helper)))
    + "\n        </td>\n      </tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "          <span class=\"octicon octicon-flame\"></span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.outdated : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "            <span class=\"octicon octicon-alert\"></span>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <span class=\"octicon octicon-check\"></span>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            Latest: <b>"
    + container.escapeExpression(((helper = (helper = helpers.latest_stable || (depth0 != null ? depth0.latest_stable : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"latest_stable","hash":{},"data":data}) : helper)))
    + "</b>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"overall-summary \">\n  <div class=\"stats-switcher-viewport js-stats-switcher-viewport\">\n    <div class=\"stats-switcher-wrapper\">\n    <ul class=\"numbers-summary\">\n      <li class=\"commits\">\n        <a href=\"#\">\n        <span class=\"octicon octicon-package\"></span>\n        <span class=\"num text-emphasized\">\n          "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.repo : depth0)) != null ? stack1.dependency_count : stack1), depth0))
    + "          \n        </span>\n        dependencies\n        </a>\n      </li>\n      <li>\n        <a href=\"#\">\n        <span class=\"octicon octicon-alert\"></span>\n        <span class=\"num text-emphasized\">\n          "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.repo : depth0)) != null ? stack1.outdated_count : stack1), depth0))
    + "          \n        </span>\n        out of date\n        </a>\n      </li>\n      <li>\n        <a href=\"#\">\n        <span class=\"octicon octicon-flame\"></span>\n        <span class=\"num text-emphasized\">\n          "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.repo : depth0)) != null ? stack1.deprecated_count : stack1), depth0))
    + "          \n        </span>\n        deprecated\n        </a>\n      </li>\n    </ul>\n    </div>\n  </div>\n</div>\n\n<div class=\"commit-tease js-details-container\">\n  Dependencies Health\n</div>\n\n<div class=\"file-wrap\">\n  <table class=\"files\">\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.repo : depth0)) != null ? stack1.dependencies : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n</div>\n\n<p>Powered by <a href=\"https://libraries.io\">Libraries.io</a></p>\n";
},"useData":true});
})();