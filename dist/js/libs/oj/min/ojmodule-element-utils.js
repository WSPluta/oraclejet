/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
define(["ojs/ojcore","knockout","ojs/ojhtmlutils","ojs/ojlogger"],function(e,i,r,n){"use strict";var t={};return e.ModuleElementUtils=t,t.createView=function(e){if(!e||!e.viewPath)return Promise.resolve([]);var i=new Promise(function(i,r){(e.require?e.require:require)(["text!"+e.viewPath],i,r)});return new Promise(function(e,n){i.then(function(i){var n=r.stringToNodeArray(i);return e(n)},function(e){return n(e)})})},t.createViewModel=function(e){return e&&e.viewModelPath?new Promise(function(i,r){(e.require?e.require:require)([e.viewModelPath],i,r)}).then(function(i){var r=i;return r&&("always"===e.initialize||null!=e.params&&"never"!==e.initialize)&&("function"==typeof r?r=new r(e.params):"function"==typeof r.initialize&&r.initialize(e.params)),r}):Promise.resolve(null)},t.createConfig=function(e){if(!e||!e.name&&!e.viewPath)return Promise.resolve(null);var i=e.viewPath||"views/"+e.name+".html",r=e.viewModelPath||(e.name?"viewModels/"+e.name:null);return Promise.all([t.createView({viewPath:i,require:e.require}),t.createViewModel({viewModelPath:r,require:e.require,params:e.params,initialize:"always"})]).then(function(e){return{view:e[0],viewModel:e[1]}})},{createView:t.createView,createViewModel:t.createViewModel,createConfig:t.createConfig}});