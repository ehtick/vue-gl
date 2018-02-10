(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports,require('three')):'function'==typeof define&&define.amd?define(['exports','three'],b):b(a.VueGL={},a.THREE)})(this,function(a,b){'use strict';/**
 * Returns a parsed vector3 object when the argument is a string.
 * Otherwise pass the argument through.
 */function c(a,c){return'string'==typeof a?(c||new b.Vector3).fromArray(a.trim().split(/\s+/).map(function(a){return parseFloat(a)})):c?c.copy(a):a}/**
 * Returns a parsed euler object when the argument is a string.
 * Othewise pass the argument through.
 */function d(a,c){return'string'==typeof a?(c||new b.Euler).fromArray(a.trim().split(/\s+/).map(function(a,b){return 3===b?a:parseFloat(a)})):c?c.copy(a):a}/**
 * Returns a parsed spherical object when the argument is a string.
 * Otherwise pass the argument through.
 */function e(a,c){var d;return'string'==typeof a?(d=c||new b.Spherical).set.apply(d,q(a.trim().split(/\s+/).map(function(a){return parseFloat(a)}))).makeSafe():c?c.copy(a):a}/**
 * Returns a parsed integer number when the argument is a string.
 * Otherwise pass the argument through.
 *//**
 * Returns a parsed float number when the argument is a string.
 * Otherwise pass the argument through.
 *//**
 * Create an object that has array's items as keys. Values are set by setter function.
 *//**
 * Constant arrays useful for props validation.
 *//**
 * Call the ancestor renderer's vglUpdate function from object3d components.
 */function f(a){a.vglUpdate&&a.vglUpdate()}/**
 * Dispatch an update event on the instance of a component.
 */function g(a){a.inst.dispatchEvent({type:'update'})}function h(a,d,g){if(d||g){var h=c(g);if(d){var i=a.inst.position.setFromSpherical(e(d));h&&i.add(h)}a.inst.lookAt(h||new b.Vector3),f(a)}}function i(a,b){var c=b.clientWidth,d=b.clientHeight;a.isPerspectiveCamera?Object.assign(a,{aspect:c/d}):Object.assign(a,{left:c/-2,right:c/2,top:d/2,bottom:d/-2}),a.updateProjectionMatrix()}function j(a,b){a.setSize(b.clientWidth,b.clientHeight,!1)}function k(a,b){var c=a.$parent;return c?c.$options[b]?c:k(c,b):void 0}function l(a){return k(a,'isVglLensFlare')}var m=Math.PI,n={};n.typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},n.jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),n.asyncIterator=function(a){if('function'==typeof Symbol){if(Symbol.asyncIterator){var b=a[Symbol.asyncIterator];if(null!=b)return b.call(a)}if(Symbol.iterator)return a[Symbol.iterator]()}throw new TypeError('Object is not async iterable')},n.asyncGenerator=function(){function a(a){this.value=a}function b(b){function c(e,f){try{var g=b[e](f),h=g.value;h instanceof a?Promise.resolve(h.value).then(function(a){c('next',a)},function(a){c('throw',a)}):d(g.done?'return':'normal',g.value)}catch(a){d('throw',a)}}function d(a,b){'return'===a?e.resolve({value:b,done:!0}):'throw'===a?e.reject(b):e.resolve({value:b,done:!1});e=e.next,e?c(e.key,e.arg):f=null}var e,f;this._invoke=function(a,b){return new Promise(function(d,g){var h={key:a,arg:b,resolve:d,reject:g,next:null};f?f=f.next=h:(e=f=h,c(a,b))})},'function'!=typeof b.return&&(this.return=void 0)}return'function'==typeof Symbol&&Symbol.asyncIterator&&(b.prototype[Symbol.asyncIterator]=function(){return this}),b.prototype.next=function(a){return this._invoke('next',a)},b.prototype.throw=function(a){return this._invoke('throw',a)},b.prototype.return=function(a){return this._invoke('return',a)},{wrap:function(a){return function(){return new b(a.apply(this,arguments))}},await:function(b){return new a(b)}}}(),n.asyncGeneratorDelegate=function(a,b){function c(c,d){return e=!0,d=new Promise(function(b){b(a[c](d))}),{done:!1,value:b(d)}}var d={},e=!1;return'function'==typeof Symbol&&Symbol.iterator&&(d[Symbol.iterator]=function(){return this}),d.next=function(a){return e?(e=!1,a):c('next',a)},'function'==typeof a.throw&&(d.throw=function(a){if(e)throw e=!1,a;return c('throw',a)}),'function'==typeof a.return&&(d.return=function(a){return c('return',a)}),d},n.asyncToGenerator=function(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}},n.classCallCheck=function(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')},n.createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),n.defineEnumerableProperties=function(a,b){for(var c in b){var d=b[c];d.configurable=d.enumerable=!0,'value'in d&&(d.writable=!0),Object.defineProperty(a,c,d)}return a},n.defaults=function(a,b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],f=Object.getOwnPropertyDescriptor(b,e);f&&f.configurable&&a[e]===void 0&&Object.defineProperty(a,e,f)}return a},n.defineProperty=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a},n.extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},n.get=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(e===void 0){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if('value'in e)return e.value;var g=e.get;return void 0===g?void 0:g.call(d)},n.inherits=function(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)},n.instanceof=function(a,b){return null!=b&&'undefined'!=typeof Symbol&&b[Symbol.hasInstance]?b[Symbol.hasInstance](a):a instanceof b},n.interopRequireDefault=function(a){return a&&a.__esModule?a:{default:a}},n.interopRequireWildcard=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b},n.newArrowCheck=function(a,b){if(a!==b)throw new TypeError('Cannot instantiate an arrow function')},n.objectDestructuringEmpty=function(a){if(null==a)throw new TypeError('Cannot destructure undefined')},n.objectWithoutProperties=function(a,b){var c={};for(var d in a)0<=b.indexOf(d)||Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c},n.possibleConstructorReturn=function(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a},n.selfGlobal='undefined'==typeof global?self:global,n.set=function a(b,c,d,e){var f=Object.getOwnPropertyDescriptor(b,c);if(f===void 0){var g=Object.getPrototypeOf(b);null!==g&&a(g,c,d,e)}else if('value'in f&&f.writable)f.value=d;else{var h=f.set;h!==void 0&&h.call(e,d)}return d},n.slicedToArray=function(){function a(a,b){var c,d=[],e=!0,f=!1;try{for(var g,h=a[Symbol.iterator]();!(e=(g=h.next()).done)&&(d.push(g.value),!(b&&d.length===b));e=!0);}catch(a){f=!0,c=a}finally{try{!e&&h['return']&&h['return']()}finally{if(f)throw c}}return d}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),n.slicedToArrayLoose=function(a,b){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a)){for(var c,d=[],e=a[Symbol.iterator]();!(c=e.next()).done&&(d.push(c.value),!(b&&d.length===b)););return d}throw new TypeError('Invalid attempt to destructure non-iterable instance')},n.taggedTemplateLiteral=function(a,b){return Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))},n.taggedTemplateLiteralLoose=function(a,b){return a.raw=b,a},n.temporalRef=function(a,b,c){if(a===c)throw new ReferenceError(b+' is not defined - temporal dead zone');else return a},n.temporalUndefined={},n.toArray=function(a){return Array.isArray(a)?a:Array.from(a)},n.toConsumableArray=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)},n;var o={inject:{vglCameras:{default:function(){var a=this;return{get forGet(){return a.cameras},get forSet(){return this.forGet}}}},vglScenes:{default:function(){var a=this;return{get forGet(){return a.scenes},get forSet(){return this.forGet}}}},vglGeometries:{default:null},vglMaterials:{default:null},vglTextures:{default:null}},data:function(){var a={geometries:Object.create(Object.assign(Object.create(null),this.vglGeometries?Object.getPrototypeOf(this.vglGeometries.forGet):{},this.vglGeometries?this.vglGeometries.forGet:{})),materials:Object.create(Object.assign(Object.create(null),this.vglMaterials?Object.getPrototypeOf(this.vglMaterials.forGet):{},this.vglMaterials?this.vglMaterials.forGet:{})),textures:Object.create(Object.assign(Object.create(null),this.vglTextures?Object.getPrototypeOf(this.vglTextures.forGet):{},this.vglTextures?this.vglTextures.forGet:{}))};return this.vglCameras.forGet||(a.cameras=Object.create(null),a.scenes=Object.create(null)),a},watch:{"vglGeometries.forGet":function(a){this.geometries=Object.assign(Object.create(Object.assign(Object.create(null),Object.getPrototypeOf(a),a)),this.geometries)},"vglMaterials.forGet":function(a){this.materials=Object.assign(Object.create(Object.assign(Object.create(null),Object.getPrototypeOf(a),a)),this.materials)},"vglTextures.forGet":function(a){this.textures=Object.assign(Object.create(Object.assign(Object.create(null),Object.getPrototypeOf(a),a)),this.textures)}},provide:function(){var a=this,b={vglGeometries:{get forGet(){return a.geometries},get forSet(){return this.forGet}},vglMaterials:{get forGet(){return a.materials},get forSet(){return this.forGet}},vglTextures:{get forGet(){return a.textures},get forSet(){return this.forGet}}};return this.cameras&&(b.vglCameras=this.vglCameras,b.vglScenes=this.vglScenes),b},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},p=function(){function a(a,b){var c,d=[],e=!0,f=!1;try{for(var g,h=a[Symbol.iterator]();!(e=(g=h.next()).done)&&(d.push(g.value),!(b&&d.length===b));e=!0);}catch(a){f=!0,c=a}finally{try{!e&&h['return']&&h['return']()}finally{if(f)throw c}}return d}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),q=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)},r=[String,Number],s=String,t=[String,b.Vector3],u=[String,b.Spherical],v=Boolean,w=[String,b.Euler],x={props:{position:t,rotation:w,scale:t,castShadow:v,receiveShadow:v,name:s},computed:{inst:function(){return new b.Object3D}},inject:{vglUpdate:{default:void 0},vglObject3d:{default:{}}},provide:function(){var a=this;return{vglObject3d:{get inst(){return a.inst}}}},beforeDestroy:function(){this.inst.parent&&this.inst.parent.remove(this.inst)},watch:{inst:{handler:function(a,b){b&&b.parent&&b.parent.remove(b),this.vglObject3d.inst&&this.vglObject3d.inst.add(a),this.position&&a.position.copy(c(this.position)),this.rotation&&a.rotation.copy(d(this.rotation)),this.scale&&a.scale.copy(c(this.scale)),Object.assign(a,{castShadow:this.castShadow,receiveShadow:this.receiveShadow}),f(this)},immediate:!0},"vglObject3d.inst":function(a){a.add(this.inst),f(this)},position:function(a){this.inst.position.copy(c(a)),f(this)},rotation:function(a){this.inst.rotation.copy(d(a)),f(this)},scale:function(a){this.inst.scale.copy(c(a)),f(this)},castShadow:function(a){this.inst.castShadow=a,f(this)},receiveShadow:function(a){this.inst.receiveShadow=a,f(this)}},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},y=Object.create(null),z=Object.create(null),A=Object.create(null),B=Object.create(null),C=Object.create(null),D=Object.create(null),E={mixins:[x],inject:['vglCameras'],props:{orbitTarget:t,orbitPosition:u},computed:{inst:function(){return new b.Camera}},watch:{inst:{handler:function(a,b){b&&delete A[b.uuid],A[a.uuid]=a,this.$set(this.vglCameras.forSet,this.name,a.uuid),h(this,this.orbitPosition,this.orbitTarget)},immediate:!0},name:function(a,b){this.vglCameras.forGet[b]===this.inst.uuid&&this.$delete(this.vglCameras.forSet,b),this.$set(this.vglCameras.forSet,a,this.inst.uuid)},orbitTarget:function(a){h(this,this.orbitPosition,a)},orbitPosition:function(a){h(this,a,this.orbitTarget)}},beforeDestroy:function(){delete A[this.inst.uuid],this.vglCameras.forGet[this.name]===this.inst.uuid&&this.$delete(this.vglCameras.forSet,this.name)}},F={mixins:[x],props:{color:{type:s,default:'#fff'},intensity:{type:r,default:1}},computed:{inst:function(){return new b.Light}},watch:{inst:{handler:function(a){a.color.setStyle(this.color),Object.assign(a,{intensity:parseFloat(this.intensity)})},immediate:!0},color:function(a){this.inst.color.setStyle(a),f(this)},intensity:function(a){this.inst.intensity=parseFloat(a),f(this)}}},G={inject:['vglMaterials'],props:{name:s},computed:{inst:function(){return new b.Material}},watch:{inst:{handler:function(a,b){b&&delete z[b.uuid],z[a.uuid]=a,this.$set(this.vglMaterials.forSet,this.name,a.uuid)},immediate:!0},name:function(a,b){this.vglMaterials.forGet[b]===this.inst.uuid&&this.$delete(this.vglMaterials.forSet,b),this.$set(this.vglMaterials.forSet,a,this.inst.uuid)}},beforeDestroy:function(){this.vglMaterials.forGet[this.name]===this.inst.uuid&&this.$delete(this.vglMaterials.forSet,this.name)},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},H={inject:['vglGeometries'],props:{name:s},computed:{inst:function(){return new b.Geometry}},watch:{inst:{handler:function(a,b){b&&delete y[b.uuid],y[a.uuid]=a,this.$set(this.vglGeometries.forSet,this.name,a.uuid)},immediate:!0},name:function(a,b){this.vglGeometries.forGet[b]===this.inst.uuid&&this.$delete(this.vglGeometries.forSet,b),this.$set(this.vglGeometries.forSet,a,this.inst.uuid)}},beforeDestroy:function(){delete y[this.inst.uuid],this.vglGeometries.forGet[this.name]===this.inst.uuid&&this.$delete(this.vglGeometries.forSet,this.name)},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},I={mixins:[x],props:{material:s},inject:['vglMaterials'],computed:{materialObject:function(){return z[this.vglMaterials.forGet[this.material]]}},mounted:function(){this.materialObject&&(this.inst.material=this.materialObject,this.materialObject.addEventListener('update',this.ud))},methods:{ud:function(){f(this)}},watch:{materialObject:function(a,b){a!==b&&(this.inst.material=a,b&&b.removeEventListener('update',this.ud),a&&a.addEventListener('update',this.ud),this.ud())}}},J={mixins:[I],props:{geometry:s},inject:['vglGeometries'],computed:{geometryObject:function(){return y[this.vglGeometries.forGet[this.geometry]]}},mounted:function(){this.geometryObject&&(this.inst.geometry=this.geometryObject,this.geometryObject.addEventListener('update',this.ud))},methods:{ud:function(){f(this)}},watch:{geometryObject:function(a,b){a!==b&&(this.inst.geometry=a,b&&b.removeEventListener('update',this.ud),a&&a.addEventListener('update',this.ud),this.ud())}}},K={mixins:[H],props:{radius:{type:r,default:1},detail:{type:r,default:0}}},L={mixins:[J],computed:{inst:function(){return new b.Line}}},M={mixins:[L],computed:{inst:function(){return new b.LineSegments}}},N={mixins:[H],props:{radiusTop:{type:r,default:1},radiusBottom:{type:r,default:1},height:{type:r,default:1},radialSegments:{type:r,default:8},heightSegments:{type:r,default:1},openEnded:Boolean,thetaStart:{type:r,default:0},thetaLength:{type:r,default:2*m}},computed:{inst:function(){return new b.CylinderBufferGeometry(parseFloat(this.radiusTop),parseFloat(this.radiusBottom),parseFloat(this.height),parseInt(this.radialSegments,10),parseInt(this.heightSegments,10),this.openEnded,parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},O={inject:['vglTextures'],props:{texture:s,size:{type:r,default:-1},distance:{type:r,default:0},blending:{type:r,default:b.NormalBlending},color:{type:s,default:'#fff'}},data:function(){return{inst:null}},computed:{opts:function(){return[C[this.vglTextures.forGet[this.texture]],parseInt(this.size,10),parseFloat(this.distance),parseInt(this.blending,10),new b.Color(this.color)]}},beforeDestroy:function(){var a=l(this);this.remove(a),f(a)},watch:{opts:{handler:function(a){var b=l(this);b&&(this.inst?(a[0]?this.replace(b):(this.remove(b),this.inst=null),f(b)):a[0]&&(this.add(b),f(b)))},immediate:!0}},methods:{add:function(a){var b;(b=a.inst).add.apply(b,q(this.opts));var c=a.inst.lensFlares.slice(-1),d=p(c,1);this.inst=d[0]},remove:function(a){a.inst.lensFlares.splice(a.inst.lensFlares.indexOf(this.inst),1)},replace:function(a){this.remove(a),this.add(a)}},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},P={mixins:[H],computed:{inst:function(){return new b.ExtrudeGeometry([],{})}}};a.VglNamespace=o,a.VglObject3d=x,a.VglScene={mixins:[x],inject:['vglScenes'],provide:function(){return this.vglUpdate?{}:{vglUpdate:function(){this.inst.dispatchEvent({type:'update'})}}},props:{name:s},computed:{inst:function(){return new b.Scene}},watch:{inst:{handler:function(a,b){b&&delete B[b.uuid],B[a.uuid]=a,this.$set(this.vglScenes.forSet,this.name,a.uuid)},immediate:!0},name:function(a,b){this.vglScenes.forGet[b]===this.inst.uuid&&this.$delete(this.vglScenes.forSet,b),this.$set(this.vglScenes.forSet,a,this.inst.uuid)}},beforeDestroy:function(){delete B[this.inst.uuid],this.vglScenes.forGet[this.name]===this.inst.uuid&&this.$delete(this.vglScenes.forSet,this.name)}},a.VglCamera=E,a.VglRenderer={mixins:[o],props:{precision:s,alpha:v,disablePremultipliedAlpha:v,antialias:v,disableStencil:v,preserveDrawingBuffer:v,disableDepth:v,logarithmicDepthBuffer:v,camera:s,scene:s,shadowMapEnabled:v},provide:function(){return{vglUpdate:this.render}},data:function(){return{key:0,req:!0}},computed:{opt:function(){return{precision:this.precision,alpha:this.alpha,premultipliedAlpha:!this.disablePremultipliedAlpha,antialias:this.antialias,stencil:!this.disableStencil,preserveDrawingBuffer:this.preserveDrawingBuffer,depth:!this.disableDepth,logarithmicDepthBuffer:this.logarithmicDepthBuffer}},inst:function(){return new b.WebGLRenderer(Object.assign({canvas:this.$refs.rdr},this.opt))},cmr:function(){return A[this.vglCameras.forGet[this.camera]]},scn:function(){return B[this.vglScenes.forGet[this.scene]]}},methods:{resize:function(){j(this.inst,this.$el),this.cmr&&(i(this.cmr,this.$el),this.scn&&this.render())},render:function(){var a=this;this.req&&(this.$nextTick(function(){requestAnimationFrame(function(){a.scn&&a.cmr&&a.inst.render(a.scn,a.cmr),a.req=!0})}),this.req=!1)},init:function(){this.resize(),this.inst.shadowMap.enabled=this.shadowMapEnabled}},watch:{opt:function(){this.key+=1,this.$nextTick(this.init)},scn:function(a,b){b&&b.removeEventListener('update',this.render),a&&(a.addEventListener('update',this.render),this.render())},cmr:function(a,b){b&&b.removeEventListener('update',this.render),a&&(a.addEventListener('update',this.render),i(a,this.$el),this.render())},shadowMapEnabled:function(a){this.inst.shadowMap.enabled=a}},created:function(){this.scn&&this.scn.addEventListener('update',this.render),this.cmr&&this.cmr.addEventListener('update',this.render)},mounted:function(){this.init()},render:function(a){var b=this;return a('div',[a('canvas',{ref:'rdr',key:this.key},this.$slots.default),a('iframe',{ref:'frm',style:{visibility:'hidden',width:'100%',height:'100%'},on:{load:function(a){a.target.contentWindow.addEventListener('resize',b.resize,!1)}}})])}},a.VglPerspectiveCamera={mixins:[E],props:{zoom:{type:r,default:1},near:{type:r,default:.1},far:{type:r,default:2e3},fov:{type:r,default:50}},computed:{inst:function(){return new b.PerspectiveCamera}},watch:{inst:{handler:function(a){Object.assign(a,{zoom:parseFloat(this.zoom),near:parseFloat(this.near),far:parseFloat(this.far),fov:parseFloat(this.fov)})},immediate:!0},zoom:function(a){this.inst.zoom=parseFloat(a),f(this)},near:function(a){this.inst.near=parseFloat(a),f(this)},far:function(a){this.inst.far=parseFloat(a),f(this)},fov:function(a){this.inst.fov=parseFloat(a),f(this)}}},a.VglGroup={mixins:[x],computed:{inst:function(){return new b.Group}}},a.VglLight=F,a.VglDirectionalLight={mixins:[F],computed:{inst:function(){return new b.DirectionalLight}},props:{castShadow:v},watch:{inst:{handler:function(a){Object.assign(a,{castShadow:this.castShadow})},immediate:!0},castShadow:function(a){this.inst.castShadow=a,f(this)}}},a.VglAmbientLight={mixins:[F],computed:{inst:function(){return new b.AmbientLight}}},a.VglMaterial=G,a.VglPointsMaterial={mixins:[G],props:{color:{type:s,default:'#fff'},size:{type:r,default:1},disableSizeAttenuation:v},computed:{inst:function(){return new b.PointsMaterial}},watch:{inst:{handler:function(a){Object.assign(a,{size:parseFloat(this.size),sizeAttenuation:!this.disableSizeAttenuation}),a.color.setStyle(this.color)},immediate:!0},color:function(a){this.inst.color.setStyle(a),g(this)},size:function(a){this.inst.size=parseFloat(a),g(this)},disableSizeAttenuation:function(a){this.inst.sizeAttenuation=!a,g(this)}}},a.VglGeometry=H,a.VglSphereGeometry={mixins:[H],props:{radius:{type:r,default:1},widthSegments:{type:r,default:8},heightSegments:{type:r,default:6},phiStart:{type:r,default:0},phiLength:{type:r,default:2*m},thetaStart:{type:r,default:0},thetaLength:{type:r,default:m}},computed:{inst:function(){return new b.SphereBufferGeometry(parseFloat(this.radius),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10),parseFloat(this.phiStart),parseFloat(this.phiLength),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},a.VglMeshStandardMaterial={mixins:[G],inject:['vglTextures'],props:{color:{type:s,default:'#fff'},map:s},computed:{inst:function(){return new b.MeshStandardMaterial},mapObject:function(){return C[this.vglTextures.forGet[this.map]]||null}},watch:{inst:{handler:function(a){a.color.setStyle(this.color),Object.assign(a,{map:this.mapObject})},immediate:!0},color:function(a){this.inst.color.setStyle(a),g(this)},mapObject:function(a,b){this.inst.map=a,b||(this.inst.needsUpdate=!0),g(this)}}},a.VglMesh={mixins:[J],computed:{inst:function(){return new b.Mesh}}},a.VglPoints={mixins:[J],computed:{inst:function(){return new b.Points}}},a.VglLineBasicMaterial={mixins:[G],props:{color:{type:s,default:'#fff'},lights:v,linewidth:{type:r,default:1},linecap:{type:s,default:'round'},linejoin:{type:s,default:'round'}},computed:{inst:function(){return new b.LineBasicMaterial}},watch:{inst:{handler:function(a){Object.assign(a,{lights:this.lights,linecap:this.linecap,linejoin:this.linejoin,linewidth:parseFloat(this.linewidth)}),a.color.setStyle(this.color)},immediate:!0},color:function(a){this.inst.color.setStyle(a)},lights:function(a){this.inst.lights=a},linewidth:function(a){this.inst.linewidth=parseFloat(a)},linecap:function(a){this.inst.linecap=a},linejoin:function(a){this.inst.linejoin=a}}},a.VglLine=L,a.VglSprite={mixins:[I],computed:{inst:function(){return new b.Sprite}}},a.VglBoxGeometry={mixins:[H],props:{width:{type:r,default:1},height:{type:r,default:1},depth:{type:r,default:1},widthSegments:{type:r,default:1},heightSegments:{type:r,default:1},depthSegments:{type:r,default:1}},computed:{inst:function(){return new b.BoxBufferGeometry(parseFloat(this.width),parseFloat(this.height),parseFloat(this.depth),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10),parseInt(this.depthSegments,10))}}},a.VglCircleGeometry={mixins:[H],props:{radius:{type:r,default:1},segments:{type:r,default:8},thetaStart:{type:r,default:0},thetaLength:{type:r,default:2*m}},computed:{inst:function(){return new b.CircleBufferGeometry(parseFloat(this.radius),parseInt(this.segments,10),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},a.VglLineSegments=M,a.VglLineLoop={mixins:[L],computed:{inst:function(){return new b.LineLoop}}},a.VglConeGeometry={mixins:[N],props:{radius:{type:r,default:1}},computed:{inst:function(){return new b.ConeBufferGeometry(parseFloat(this.radius),parseFloat(this.height),parseInt(this.radialSegments,10),parseInt(this.heightSegments,10),this.openEnded,parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},a.VglAxesHelper={mixins:[M],props:{size:{type:r,default:1}},computed:{inst:function(){return new b.AxesHelper(parseFloat(this.size))}}},a.VglOrthographicCamera={mixins:[E],props:{zoom:{type:r,default:1},near:{type:r,default:.1},far:{type:r,default:2e3}},computed:{inst:function(){return new b.OrthographicCamera}},watch:{inst:{handler:function(a){Object.assign(a,{zoom:parseFloat(this.zoom),near:parseFloat(this.near),far:parseFloat(this.far)})},immediate:!0},zoom:function(a){this.inst.zoom=parseFloat(a),f(this)},near:function(a){this.inst.near=parseFloat(a),f(this)},far:function(a){this.inst.far=parseFloat(a),f(this)}}},a.VglCylinderGeometry=N,a.VglPlaneGeometry={mixins:[H],props:{width:{type:r,default:1},height:{type:r,default:1},widthSegments:{type:r,default:1},heightSegments:{type:r,default:1}},computed:{inst:function(){return new b.PlaneBufferGeometry(parseFloat(this.width),parseFloat(this.height),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10))}}},a.VglDodecahedronGeometry={mixins:[K],computed:{inst:function(){return new b.DodecahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},a.VglIcosahedronGeometry={mixins:[K],computed:{inst:function(){return new b.IcosahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},a.VglOctahedronGeometry={mixins:[K],computed:{inst:function(){return new b.OctahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},a.VglRingGeometry={mixins:[H],props:{innerRadius:{type:r,default:.5},outerRadius:{type:r,default:1},thetaSegments:{type:r,default:8},phiSegments:{type:r,default:1},thetaStart:{type:r,default:0},thetaLength:{type:r,default:2*m}},computed:{inst:function(){return new b.RingBufferGeometry(parseFloat(this.innerRadius),parseFloat(this.outerRadius),parseInt(this.thetaSegments,10),parseInt(this.phiSegments,10),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},a.VglTetrahedronGeometry={mixins:[K],computed:{inst:function(){return new b.TetrahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},a.VglTorusGeometry={mixins:[H],props:{radius:{type:r,default:1},tube:{type:r,default:.4},radialSegments:{type:r,default:8},tubularSegments:{type:r,default:6},arc:{type:r,default:2*m}},computed:{inst:function(){return new b.TorusBufferGeometry(parseFloat(this.radius),parseFloat(this.tube),parseInt(this.radialSegments,10),parseInt(this.tubularSegments,10),parseFloat(this.arc))}}},a.VglTorusKnotGeometry={mixins:[H],props:{radius:{type:r,default:1},tube:{type:r,default:.4},radialSegments:{type:r,default:8},tubularSegments:{type:r,default:64},p:{type:r,default:2},q:{type:r,default:3}},computed:{inst:function(){return new b.TorusKnotBufferGeometry(parseFloat(this.radius),parseFloat(this.tube),parseInt(this.tubularSegments,10),parseInt(this.radialSegments,10),parseInt(this.p,10),parseInt(this.q,10))}}},a.VglArrowHelper={mixins:[x],props:{dir:t,length:{type:r,default:1},color:{type:s,default:'#ff0'},headLength:r,headWidth:r},computed:{inst:function(){return new b.ArrowHelper(new b.Vector3(0,1,0),new b.Vector3())},len:function(){return[parseFloat(this.length),this.headLength===void 0?void 0:parseFloat(this.headLength),this.headWidth===void 0?void 0:parseFloat(this.headWidth)]}},watch:{inst:{handler:function(a){this.dir&&a.setDirection(c(this.dir).normalize()),a.setLength.apply(a,q(this.len)),a.setColor(new b.Color(this.color))},immediate:!0},dir:function(a){this.inst.setDirection(c(a).normalize())},len:function(a){var b;(b=this.inst).setLength.apply(b,q(a))},color:function(a){this.inst.setColor(new b.Color(a))}}},a.VglBoxHelper={mixins:[M],props:{color:{type:s,default:'#ff0'}},computed:{inst:function(){return new b.BoxHelper}},watch:{inst:{handler:function(a){var b=this;this.$nextTick(function(){a.setFromObject(b.vglObject3d.inst)}),a.material.color.setStyle(this.color)},immediate:!0},"vglObject3d.inst":function(a){this.inst.setFromObject(a)},color:function(a){this.inst.material.color.setStyle(a)}}},a.VglPointLight={mixins:[F],props:{distance:{type:r,default:0},decay:{type:r,default:1}},computed:{inst:function(){return new b.PointLight}},watch:{inst:{handler:function(a){Object.assign(a,{distance:parseFloat(this.distance),decay:parseFloat(this.decay)})},immediate:!0},distance:function(a){this.inst.distance=parseFloat(a),f(this)},decay:function(a){this.inst.decay=parseFloat(a),f(this)}}},a.VglSpotLight={mixins:[F],props:{distance:{type:r,default:0},decay:{type:r,default:1},angle:{type:r,default:m/3},penumbra:{type:r,default:0},target:t},computed:{inst:function(){return new b.SpotLight}},beforeDestroy:function(){this.inst.target.parent&&this.inst.target.parent.remove(this.inst.target)},watch:{inst:{handler:function(a){if(this.target){a.target.position.copy(c(this.target));var b=this.vglObject3d.inst;b&&b.add(a.target)}Object.assign(a,{distance:parseFloat(this.distance),decay:parseFloat(this.decay),angle:parseFloat(this.angle),penumbra:parseFloat(this.penumbra)})},immediate:!0},"vglObject3d.inst":function(a){a&&a.add(this.inst.target)},distance:function(a){this.inst.distance=parseFloat(a),f(this)},decay:function(a){this.inst.decay=parseFloat(a),f(this)},angle:function(a){this.inst.angle=parseFloat(a),f(this)},penumbra:function(a){this.inst.penumbra=parseFloat(a),f(this)},target:function(a){this.inst.target.position.copy(c(a)),f(this)}}},a.VglTexture={inject:['vglTextures'],props:{src:s,name:s},data:function(){return{uuid:void 0}},computed:{inst:function(){return this.uuid===void 0?null:C[this.uuid]}},watch:{src:{handler:function(a){var c=this;new b.TextureLoader().load(a,function(a){C[a.uuid]=a,c.uuid=a.uuid})},immediate:!0},uuid:function(a,b){b!==void 0&&delete C[b],this.$set(this.vglTextures.forSet,this.name,a)},name:function(a,b){this.vglTextures.forGet[b]===this.uuid&&this.$delete(this.vglTextures.forSet,b),this.$set(this.vglTextures.forSet,a,this.uuid)}},beforeDestroy:function(){delete C[this.uuid],this.vglTextures.forGet[this.name]===this.uuid&&this.$delete(this.vglTextures.forSet,this.name)},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},a.VglLensFlare={isVglLensFlare:!0,mixins:[x],computed:{inst:function(){return new b.LensFlare}}},a.VglLensFlareTexture=O,a.VglExtrudeGeometry=P,a.VglTextGeometry={mixins:[P],props:{font:s,size:{type:r,default:100},height:{type:r,default:50},curveSegments:{type:r,default:12},bevelEnabled:v,bevelThickness:{type:r,default:10},bevelSize:{type:r,default:8},bevelSegments:{type:r,default:3},text:{type:s,default:''}},data:function(){return{f:void 0}},computed:{inst:function(){return this.f===void 0?new b.BufferGeometry:new b.TextBufferGeometry(this.text,{font:D[this.f],size:parseFloat(this.size),height:parseFloat(this.height),curveSegments:parseInt(this.curveSegments,10),bevelEnabled:this.bevelEnabled,bevelThickness:parseFloat(this.bevelThickness),bevelSize:parseFloat(this.bevelSize),bevelSegments:parseInt(this.bevelSegments,10)})}},watch:{font:{handler:function(a){var c=this;if(!!D[a])D[a].isFont?this.f=a:D[a].push(function(){a===c.font&&(c.f=a)});else if(D[a]=[function(){a===c.font&&(c.f=a)}],!/^data:.*?(?:;base64)?,.*$/.test(a)){// GET src data manually and pass as a data URI.
var d=new XMLHttpRequest;d.addEventListener('load',function(){new b.FontLoader().load('data:,'+encodeURIComponent(d.responseText),function(b){var c=D[a];D[a]=b,c.forEach(function(a){a()})})},!1),d.open('GET',a),d.send()}else new b.FontLoader().load(a,function(b){var c=D[a];D[a]=b,c.forEach(function(a){a()})})},immediate:!0}}},a.VglSpriteMaterial={mixins:[G],props:{color:{type:s,default:'#fff'},map:s},inject:['vglTextures'],computed:{inst:function(){return new b.SpriteMaterial},mapObject:function(){return this.vglTextures.forGet[this.map]||null}},watch:{inst:{handler:function(a){a.color.setStyle(this.color),Object.assign(a,{map:this.mapObject})},immediate:!0},color:function(a){this.inst.color.setStyle(a),g(this)},mapObject:function(a,b){this.inst.map=a,b||(this.inst.needsUpdate=!0),g(this)}}},a.VglGridHelper={mixins:[M],props:{size:{type:r,default:10},divisions:{type:r,default:10},colorCenterLine:{type:s,default:'#444444'},colorGrid:{type:s,default:'#888888'}},computed:{inst:function(){return new b.GridHelper(parseFloat(this.size),parseInt(this.divisions,10),this.colorCenterLine,this.colorGrid)}}},a.VglShadowMaterial={mixins:[G],computed:{inst:function(){return new b.ShadowMaterial}}},a.VglCameraHelper={mixins:[M],props:{camera:s},inject:['vglCameras'],computed:{inst:function(){var a=A[this.vglCameras.forGet[this.camera]];return a?new b.CameraHelper(a):new b.LineSegments}}},a.VglDirectionalLightHelper={mixins:[x],props:{color:{type:s},size:{type:r,default:1}},computed:{inst:function(){return this.i},hex:function(){return'color'in this.i&&this.i.parent&&this.i.parent.color.getHex()}},created:function(){var a=this.vglObject3d.inst;a&&(this.i=new b.DirectionalLightHelper(a,parseFloat(this.size),this.color))},data:function(){return{i:new b.Object3D}},watch:{color:function(a){'color'in this.i&&(this.inst.color=a,this.inst.update())},hex:function(a){a&&!this.color&&this.inst.update()},size:function(a){this.i.parent&&(this.i=new b.DirectionalLightHelper(this.i.parent,parseFloat(a),this.color))}}},Object.defineProperty(a,'__esModule',{value:!0})});
