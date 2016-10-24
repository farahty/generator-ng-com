'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var _ = require('lodash');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.argument('template', {
      type: String,
      required: true
    });
    this.template = this.template;
    this.component = _.upperFirst(_.camelCase(this.template));
  },


  writing: function () {
    var path = './components/' + this.template + '/' + this.template + '.component';
    this.fs.copyTpl(
      this.templatePath('component.js'),
      this.destinationPath(path + '.js'), {
        component: this.component,
        comp_path: this.template
      }
    );
    this.fs.copyTpl(
      this.templatePath('component.html'),
      this.destinationPath(path + '.html'), {
        component: this.component
      }
    );
  }
});