"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["chunks/app-server"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AppInputText',
  props: ['description', 'isLast', 'title', 'error']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/CopyInput.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/CopyInput.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CopyInput',
  props: ['size', 'str'],
  components: {
    CheckIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.CheckIcon,
    CopyIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.CopyIcon,
    SendIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.SendIcon
  },
  data: function data() {
    return {
      isCopiedLink: false,
      id: 'link-input-' + Math.floor(Math.random() * 10000000)
    };
  },
  methods: {
    copyUrl: function copyUrl() {
      var _this = this;

      // Get input value
      var copyText = document.getElementById(this.id); // select link

      copyText.select();
      copyText.setSelectionRange(0, 99999); // Copy

      document.execCommand('copy'); // Mark button as copied

      this.isCopiedLink = true; // Reset copy button

      setTimeout(function () {
        _this.isCopiedLink = false;
      }, 1000);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTab.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTab.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI_Others_Spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/Others/Spinner */ "./resources/js/components/UI/Others/Spinner.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PageTab',
  props: ['isLoading'],
  components: {
    Spinner: _UI_Others_Spinner__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FormLabel',
  props: ['icon'],
  components: {
    TrendingUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.TrendingUpIcon,
    WifiIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.WifiIcon,
    ListIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ListIcon,
    MailIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.MailIcon,
    InfoIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.InfoIcon,
    DatabaseIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.DatabaseIcon,
    UsersIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.UsersIcon,
    CreditCardIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.CreditCardIcon,
    DollarSignIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.DollarSignIcon,
    SmartphoneIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.SmartphoneIcon,
    HardDriveIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.HardDriveIcon,
    BarChartIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.BarChartIcon,
    SettingsIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.SettingsIcon,
    FileTextIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.FileTextIcon,
    ShieldIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ShieldIcon,
    FrownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.FrownIcon,
    Edit2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Edit2Icon,
    BellIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.BellIcon,
    KeyIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.KeyIcon
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'InfoBox',
  props: ['type']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Server.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Server.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Forms_Layouts_AppInputText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/Forms/Layouts/AppInputText */ "./resources/js/components/Forms/Layouts/AppInputText.vue");
/* harmony import */ var _components_Inputs_CopyInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/Inputs/CopyInput */ "./resources/js/components/Inputs/CopyInput.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _components_UI_Labels_FormLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/UI/Labels/FormLabel */ "./resources/js/components/UI/Labels/FormLabel.vue");
/* harmony import */ var _components_Layout_PageTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/Layout/PageTab */ "./resources/js/components/Layout/PageTab.vue");
/* harmony import */ var _components_UI_Others_InfoBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/UI/Others/InfoBox */ "./resources/js/components/UI/Others/InfoBox.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_UI_Buttons_ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/UI/Buttons/ButtonBase */ "./resources/js/components/UI/Buttons/ButtonBase.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Server',
  components: {
    AppInputText: _components_Forms_Layouts_AppInputText__WEBPACK_IMPORTED_MODULE_0__["default"],
    CopyInput: _components_Inputs_CopyInput__WEBPACK_IMPORTED_MODULE_1__["default"],
    ButtonBase: _components_UI_Buttons_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"],
    FormLabel: _components_UI_Labels_FormLabel__WEBPACK_IMPORTED_MODULE_2__["default"],
    InfoBox: _components_UI_Others_InfoBox__WEBPACK_IMPORTED_MODULE_4__["default"],
    PageTab: _components_Layout_PageTab__WEBPACK_IMPORTED_MODULE_3__["default"],
    DownloadCloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.DownloadCloudIcon,
    CheckIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.CheckIcon,
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.XIcon
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_8__.mapGetters)(['config'])), {}, {
    isCheckedAPI: function isCheckedAPI() {
      return typeof this.apiRunning !== 'undefined';
    }
  }),
  data: function data() {
    return {
      isLoading: true,
      ini: undefined,
      cron: undefined,
      modules: undefined,
      phpVersion: undefined,
      apiRunning: undefined,
      backups: undefined,
      logs: undefined,
      writable: undefined
    };
  },
  methods: {
    testWebsocketConnection: function testWebsocketConnection() {
      this.$store.dispatch('testConnection');
    },
    downloadLog: function downloadLog(log) {
      var anchor = document.createElement('a');
      anchor.href = "/admin/log/".concat(log);
      anchor.download = log;
      document.body.appendChild(anchor);
      anchor.click();
    }
  },
  created: function created() {
    var _this = this;

    // Get status
    axios__WEBPACK_IMPORTED_MODULE_5___default().get('/api/admin/status').then(function (response) {
      _this.isLoading = false;
      _this.ini = response.data.ini;
      _this.cron = response.data.cron;
      _this.modules = response.data.modules;
      _this.phpVersion = response.data.php_version;
      _this.backups = response.data.backups;
      _this.logs = response.data.logs;
      _this.writable = response.data.writable;
    }); // Ping API

    axios__WEBPACK_IMPORTED_MODULE_5___default().get('/api/ping').then(function (response) {
      _this.apiRunning = response.data === 'pong';
    })["catch"](function () {
      _this.apiRunning = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    "class": {
      "mb-6 sm:mb-7": !_vm.isLast
    }
  }, [_vm.title ? _c("label", {
    staticClass: "mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-200"
  }, [_vm._v("\n        " + _vm._s(_vm.title) + ":\n    ")]) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), _vm.error ? _c("span", {
    staticClass: "pt-2 text-xs dark:text-rose-600 text-rose-600"
  }, [_vm._v("\n        " + _vm._s(_vm.error) + "\n    ")]) : _vm._e(), _vm._v(" "), _vm.description ? _c("small", {
    staticClass: "block pt-2 text-xs leading-4 dark:text-gray-500 text-gray-500",
    domProps: {
      innerHTML: _vm._s(_vm.description)
    }
  }) : _vm._e()], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/CopyInput.vue?vue&type=template&id=766e790c&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/CopyInput.vue?vue&type=template&id=766e790c& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "relative flex items-center",
    on: {
      click: _vm.copyUrl
    }
  }, [_c("input", {
    ref: "sel",
    staticClass: "focus-border-theme input-dark !pr-10",
    attrs: {
      id: _vm.id,
      type: "text",
      readonly: ""
    },
    domProps: {
      value: _vm.str
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "absolute right-0 px-4"
  }, [!_vm.isCopiedLink ? _c("copy-icon", {
    staticClass: "hover-text-theme vue-feather cursor-pointer",
    attrs: {
      size: "16"
    }
  }) : _vm._e(), _vm._v(" "), _vm.isCopiedLink ? _c("check-icon", {
    staticClass: "text-theme vue-feather cursor-pointer",
    attrs: {
      size: "16"
    }
  }) : _vm._e()], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTab.vue?vue&type=template&id=9d7e21a8&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTab.vue?vue&type=template&id=9d7e21a8& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "page-tab"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isLoading,
      expression: "isLoading"
    }],
    attrs: {
      id: "loader"
    }
  }, [_c("Spinner")], 1), _vm._v(" "), _vm._t("default")], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "mb-8 flex items-center"
  }, [!_vm.icon ? _c("edit-2-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "frown" ? _c("frown-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "list" ? _c("list-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "info" ? _c("info-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "database" ? _c("database-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "file-text" ? _c("file-text-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "dollar" ? _c("dollar-sign-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "credit-card" ? _c("credit-card-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "bar-chart" ? _c("bar-chart-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "settings" ? _c("settings-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "hard-drive" ? _c("hard-drive-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "mail" ? _c("mail-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "smartphone" ? _c("smartphone-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "shield" ? _c("shield-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "bell" ? _c("bell-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "key" ? _c("key-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "users" ? _c("users-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "wifi" ? _c("wifi-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "trending-up" ? _c("trending-up-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _c("b", {
    staticClass: "text-md font-bold dark:text-gray-200 sm:text-lg"
  }, [_vm._t("default")], 2)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "info-box",
    "class": _vm.type
  }, [_vm._t("default")], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Server.vue?vue&type=template&id=330f502d&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Server.vue?vue&type=template&id=330f502d& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return !_vm.isLoading ? _c("PageTab", [_c("div", {
    staticClass: "card shadow-card"
  }, [_c("FormLabel", {
    attrs: {
      icon: "info"
    }
  }, [_vm._v("Cron")]), _vm._v(" "), _c("div", {
    staticClass: "lg:flex lg:space-y-0 space-y-3 items-center justify-between"
  }, [_c("div", {
    staticClass: "text-left"
  }, [_c("b", {
    staticClass: "block text-sm font-bold"
  }, [_vm._v("Cron Jobs")]), _vm._v(" "), !_vm.cron.running ? _c("small", {
    staticClass: "text-xs text-gray-600 pt-1 block leading-normal"
  }, [_vm._v("\n                        We detect, your cron jobs probably doesn't work correctly, please check it.\n                    ")]) : _vm._e(), _vm._v(" "), _vm.cron.running ? _c("small", {
    staticClass: "text-xs text-gray-600 pt-1 block leading-normal"
  }, [_vm._v("\n                        Latest Update: " + _vm._s(_vm.cron.lastUpdate) + "\n                    ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center"
  }, [_vm.cron.running ? _c("check-icon", {
    staticClass: "vue-feather text-green-600 dark:text-green-600",
    attrs: {
      size: "16"
    }
  }) : _vm._e(), _vm._v(" "), !_vm.cron.running ? _c("x-icon", {
    staticClass: "vue-feather text-red-600 dark:text-red-600",
    attrs: {
      size: "16"
    }
  }) : _vm._e(), _vm._v(" "), _c("span", {
    staticClass: "ml-3 text-sm font-bold",
    "class": _vm.cron.running ? "text-green-600 dark:text-green-600" : "text-red-600 dark:text-red-600"
  }, [_vm._v("\n                        " + _vm._s(_vm.cron.running ? "Working correctly" : "Doesn't work") + "\n                    ")])], 1)]), _vm._v(" "), !_vm.cron.running ? _c("div", {
    staticClass: "mt-8"
  }, [_c("AppInputText", {
    attrs: {
      title: _vm.$t("Shared Web Hosting (Cpanel, Plesk, etc...) Command"),
      description: _vm.$t("Proposed command for Shared Web Hosting (Cpanel, Plesk, etc...)")
    }
  }, [_c("CopyInput", {
    attrs: {
      size: "small",
      str: _vm.cron.command.shared
    }
  })], 1), _vm._v(" "), _c("AppInputText", {
    attrs: {
      title: _vm.$t("Crontab Command"),
      description: _vm.$t("Proposed command for crontab. Available only for setup via linux terminal."),
      "is-last": true
    }
  }, [_c("CopyInput", {
    attrs: {
      size: "small",
      str: _vm.cron.command.vps
    }
  })], 1)], 1) : _vm._e()], 1), _vm._v(" "), _vm.config.broadcasting ? _c("div", {
    staticClass: "card shadow-card"
  }, [_c("FormLabel", {
    attrs: {
      icon: "info"
    }
  }, [_vm._v("Broadcasting")]), _vm._v(" "), _c("div", {
    staticClass: "lg:flex lg:space-y-0 space-y-3 items-center justify-between"
  }, [_c("div", {
    staticClass: "text-left"
  }, [_c("b", {
    staticClass: "block text-sm font-bold"
  }, [_vm._v("Websocket connection")]), _vm._v(" "), _c("small", {
    staticClass: "text-xs text-gray-600 pt-1 block leading-normal"
  }, [_vm._v("\n                        Here you can test websocket connection by sending test event.\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center"
  }, [_c("ButtonBase", {
    staticClass: "w-full sm:w-auto",
    attrs: {
      "button-style": "theme"
    },
    nativeOn: {
      click: function click($event) {
        return _vm.testWebsocketConnection.apply(null, arguments);
      }
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("Send Test Event")) + "\n                    ")])], 1)])], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card shadow-card"
  }, [_c("FormLabel", {
    attrs: {
      icon: "list"
    }
  }, [_vm._v("Latest Server Logs")]), _vm._v(" "), !_vm.logs.length ? _c("InfoBox", {
    staticClass: "!mb-0"
  }, [_c("p", {
    domProps: {
      innerHTML: _vm._s(_vm.$t("there_is_not_log"))
    }
  })]) : _vm._e(), _vm._v(" "), _vm._l(_vm.logs, function (log, i) {
    return _vm.logs.length ? _c("div", {
      key: i,
      staticClass: "flex items-center justify-between border-b border-dashed border-light py-3 dark:border-opacity-5"
    }, [_c("div", {
      staticClass: "text-left"
    }, [_c("b", {
      staticClass: "block text-sm font-bold"
    }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(log) + "\n\t\t\t\t\t")])]), _vm._v(" "), _c("div", {
      staticClass: "flex h-8 w-8 items-center justify-center rounded-md bg-light-background transition-colors hover:bg-green-100 dark:bg-2x-dark-foreground cursor-pointer",
      on: {
        click: function click($event) {
          return _vm.downloadLog(log);
        }
      }
    }, [_c("DownloadCloudIcon", {
      staticClass: "opacity-75",
      attrs: {
        size: "15"
      }
    })], 1)]) : _vm._e();
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "card shadow-card"
  }, [_c("FormLabel", {
    attrs: {
      icon: "database"
    }
  }, [_vm._v(" Latest Database Backups ")]), _vm._v(" "), !_vm.backups.length ? _c("InfoBox", {
    staticClass: "!mb-0"
  }, [_c("p", {
    domProps: {
      innerHTML: _vm._s(_vm.$t("there_is_not_database_backup"))
    }
  })]) : _vm._e(), _vm._v(" "), _vm.backups.length ? _c("InfoBox", {
    staticClass: "!mb-3"
  }, [_c("p", {
    domProps: {
      innerHTML: _vm._s(_vm.$t("backup_path"))
    }
  })]) : _vm._e(), _vm._v(" "), _vm._l(_vm.backups, function (filename, i) {
    return _vm.backups.length ? _c("div", {
      key: i,
      staticClass: "md:flex md:space-y-0 space-y-3 items-center justify-between border-b border-dashed border-light py-3 dark:border-opacity-5"
    }, [_c("div", {
      staticClass: "text-left"
    }, [_c("b", {
      staticClass: "block text-sm font-bold"
    }, [_vm._v(_vm._s(filename))])]), _vm._v(" "), _c("div", {
      staticClass: "flex items-center"
    }, [_c("check-icon", {
      staticClass: "vue-feather text-green-600 dark:text-green-600",
      attrs: {
        size: "16"
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "ml-3 text-sm font-bold text-green-600 dark:text-green-600"
    }, [_vm._v(" Stored Successfully ")])], 1)]) : _vm._e();
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "card shadow-card"
  }, [_c("FormLabel", {
    attrs: {
      icon: "database"
    }
  }, [_vm._v("Writable Permission")]), _vm._v(" "), _vm._l(_vm.writable, function (isWritable, file, i) {
    return _c("div", {
      key: i,
      staticClass: "flex md:space-y-0 space-y-3 items-center justify-between border-b border-dashed border-light py-3 dark:border-opacity-5"
    }, [_c("div", {
      staticClass: "text-left"
    }, [_c("b", {
      staticClass: "block text-sm font-bold"
    }, [_vm._v("/" + _vm._s(file))])]), _vm._v(" "), _c("div", {
      staticClass: "flex items-center"
    }, [isWritable ? _c("check-icon", {
      staticClass: "vue-feather text-green-600 dark:text-green-600",
      attrs: {
        size: "16"
      }
    }) : _vm._e(), _vm._v(" "), !isWritable ? _c("x-icon", {
      staticClass: "vue-feather text-red-600 dark:text-red-600",
      attrs: {
        size: "16"
      }
    }) : _vm._e(), _vm._v(" "), _c("span", {
      staticClass: "ml-3 text-sm font-bold",
      "class": {
        "text-green-600 dark:text-green-600": isWritable,
        "text-red-600 dark:text-red-600": !isWritable
      }
    }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(isWritable ? "Writable" : "Unwritable") + "\n\t\t\t\t\t")])], 1)]);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "card shadow-card"
  }, [_c("FormLabel", {
    attrs: {
      icon: "info"
    }
  }, [_vm._v(" PHP Settings ")]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center justify-between border-b border-dashed border-light py-3 dark:border-opacity-5"
  }, [_c("div", {
    staticClass: "text-left"
  }, [_c("b", {
    staticClass: "block text-sm font-bold"
  }, [_vm._v("PHP Version")]), _vm._v(" "), !_vm.phpVersion.acceptable ? _c("small", {
    staticClass: "text-xs text-gray-600 pt-1 block leading-normal"
  }, [_vm._v("\n                        You need PHP version at least " + _vm._s(_vm.phpVersion.minimal) + ".\n                    ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center"
  }, [_vm.phpVersion.acceptable ? _c("check-icon", {
    staticClass: "vue-feather text-green-600 dark:text-green-600",
    attrs: {
      size: "16"
    }
  }) : _vm._e(), _vm._v(" "), !_vm.phpVersion.acceptable ? _c("x-icon", {
    staticClass: "vue-feather text-red-600 dark:text-red-600",
    attrs: {
      size: "16"
    }
  }) : _vm._e(), _vm._v(" "), _c("span", {
    staticClass: "ml-3 text-sm font-bold",
    "class": _vm.phpVersion.acceptable ? "text-green-600 dark:text-green-600" : "text-red-600 dark:text-red-600"
  }, [_vm._v("\n                        " + _vm._s(_vm.phpVersion.current) + "\n                    ")])], 1)]), _vm._v(" "), _vm._l(_vm.ini, function (values, setting, i) {
    return _c("div", {
      key: i,
      staticClass: "flex items-center justify-between border-b border-dashed border-light py-3 dark:border-opacity-5"
    }, [_c("div", {
      staticClass: "text-left"
    }, [_c("b", {
      staticClass: "block text-sm font-bold"
    }, [_vm._v(_vm._s(setting))]), _vm._v(" "), !values.status ? _c("small", {
      staticClass: "text-xs text-gray-600 pt-1 block leading-normal"
    }, [_vm._v("\n                        You must set this value at least " + _vm._s(values.minimal) + ".\n                    ")]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "flex items-center"
    }, [values.status ? _c("check-icon", {
      staticClass: "vue-feather text-green-600 dark:text-green-600",
      attrs: {
        size: "16"
      }
    }) : _vm._e(), _vm._v(" "), !values.status ? _c("x-icon", {
      staticClass: "vue-feather text-red-600 dark:text-red-600",
      attrs: {
        size: "16"
      }
    }) : _vm._e(), _vm._v(" "), _c("span", {
      staticClass: "ml-3 text-sm font-bold",
      "class": values.status ? "text-green-600 dark:text-green-600" : "text-red-600 dark:text-red-600"
    }, [_vm._v("\n                        " + _vm._s(values.current) + _vm._s(setting !== "max_execution_time" ? "M" : "") + "\n                    ")])], 1)]);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "card shadow-card"
  }, [_c("FormLabel", {
    attrs: {
      icon: "info"
    }
  }, [_vm._v(" PHP Extensions ")]), _vm._v(" "), _vm._l(_vm.modules, function (value, module, i) {
    return _vm.modules ? _c("div", {
      key: i,
      staticClass: "flex items-center justify-between border-b border-dashed border-light py-3 dark:border-opacity-5"
    }, [_c("b", {
      staticClass: "text-sm font-bold"
    }, [_vm._v("\n                    " + _vm._s(module) + "\n                ")]), _vm._v(" "), _c("div", {
      staticClass: "flex items-center"
    }, [value ? _c("check-icon", {
      staticClass: "vue-feather text-green-600 dark:text-green-600",
      attrs: {
        size: "16"
      }
    }) : _vm._e(), _vm._v(" "), !value ? _c("x-icon", {
      staticClass: "vue-feather text-red-600 dark:text-red-600",
      attrs: {
        size: "16"
      }
    }) : _vm._e(), _vm._v(" "), _c("span", {
      staticClass: "ml-3 text-sm font-bold",
      "class": value ? "text-green-600 dark:text-green-600" : "text-red-600 dark:text-red-600"
    }, [_vm._v("\n                        " + _vm._s(value ? "Module Installed" : "You have to install this module") + "\n                    ")])], 1)]) : _vm._e();
  })], 2)]) : _vm._e();
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".info-box[data-v-51c5e09e] {\n  padding: 20px;\n  border-radius: 10px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-51c5e09e] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-51c5e09e],\n.info-box.error a[data-v-51c5e09e] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-51c5e09e] {\n  text-decoration: underline;\n}\n.info-box p[data-v-51c5e09e] {\n  font-size: 15px;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-51c5e09e] a {\n  font-size: 15px;\n}\n.info-box p[data-v-51c5e09e] b {\n  font-size: 15px;\n  font-weight: 700;\n}\n.info-box b[data-v-51c5e09e] {\n  font-weight: 700;\n}\n.info-box a[data-v-51c5e09e] {\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-51c5e09e] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-51c5e09e] {\n  display: block;\n}\n.info-box ul li a[data-v-51c5e09e] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-51c5e09e] {\n    padding: 15px;\n}\n}\n.dark .info-box[data-v-51c5e09e] {\n  background: #1e2024;\n}\n.dark .info-box.error[data-v-51c5e09e] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.dark .info-box.error p[data-v-51c5e09e],\n.dark .info-box.error a[data-v-51c5e09e] {\n  color: #fd397a;\n}\n.dark .info-box.error a[data-v-51c5e09e] {\n  text-decoration: underline;\n}\n.dark .info-box p[data-v-51c5e09e] {\n  color: #bec6cf;\n}\n.dark .info-box ul li[data-v-51c5e09e] {\n  color: #bec6cf;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_style_index_0_id_51c5e09e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_style_index_0_id_51c5e09e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_style_index_0_id_51c5e09e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Forms/Layouts/AppInputText.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Forms/Layouts/AppInputText.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppInputText_vue_vue_type_template_id_50a9af87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppInputText.vue?vue&type=template&id=50a9af87& */ "./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87&");
/* harmony import */ var _AppInputText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppInputText.vue?vue&type=script&lang=js& */ "./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppInputText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppInputText_vue_vue_type_template_id_50a9af87___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppInputText_vue_vue_type_template_id_50a9af87___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forms/Layouts/AppInputText.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Inputs/CopyInput.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Inputs/CopyInput.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CopyInput_vue_vue_type_template_id_766e790c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CopyInput.vue?vue&type=template&id=766e790c& */ "./resources/js/components/Inputs/CopyInput.vue?vue&type=template&id=766e790c&");
/* harmony import */ var _CopyInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CopyInput.vue?vue&type=script&lang=js& */ "./resources/js/components/Inputs/CopyInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CopyInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CopyInput_vue_vue_type_template_id_766e790c___WEBPACK_IMPORTED_MODULE_0__.render,
  _CopyInput_vue_vue_type_template_id_766e790c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Inputs/CopyInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout/PageTab.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Layout/PageTab.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageTab_vue_vue_type_template_id_9d7e21a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTab.vue?vue&type=template&id=9d7e21a8& */ "./resources/js/components/Layout/PageTab.vue?vue&type=template&id=9d7e21a8&");
/* harmony import */ var _PageTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTab.vue?vue&type=script&lang=js& */ "./resources/js/components/Layout/PageTab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageTab_vue_vue_type_template_id_9d7e21a8___WEBPACK_IMPORTED_MODULE_0__.render,
  _PageTab_vue_vue_type_template_id_9d7e21a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layout/PageTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UI/Labels/FormLabel.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/UI/Labels/FormLabel.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormLabel_vue_vue_type_template_id_3e75b5c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLabel.vue?vue&type=template&id=3e75b5c0& */ "./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0&");
/* harmony import */ var _FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLabel.vue?vue&type=script&lang=js& */ "./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormLabel_vue_vue_type_template_id_3e75b5c0___WEBPACK_IMPORTED_MODULE_0__.render,
  _FormLabel_vue_vue_type_template_id_3e75b5c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UI/Labels/FormLabel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UI/Others/InfoBox.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/UI/Others/InfoBox.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfoBox_vue_vue_type_template_id_51c5e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true& */ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true&");
/* harmony import */ var _InfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoBox.vue?vue&type=script&lang=js& */ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js&");
/* harmony import */ var _InfoBox_vue_vue_type_style_index_0_id_51c5e09e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true& */ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoBox_vue_vue_type_template_id_51c5e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _InfoBox_vue_vue_type_template_id_51c5e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "51c5e09e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UI/Others/InfoBox.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/Settings/AppSettingsTabs/Server.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Admin/Settings/AppSettingsTabs/Server.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Server_vue_vue_type_template_id_330f502d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Server.vue?vue&type=template&id=330f502d& */ "./resources/js/views/Admin/Settings/AppSettingsTabs/Server.vue?vue&type=template&id=330f502d&");
/* harmony import */ var _Server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Server.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/Settings/AppSettingsTabs/Server.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Server_vue_vue_type_template_id_330f502d___WEBPACK_IMPORTED_MODULE_0__.render,
  _Server_vue_vue_type_template_id_330f502d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/Settings/AppSettingsTabs/Server.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInputText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppInputText.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInputText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Inputs/CopyInput.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Inputs/CopyInput.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CopyInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/CopyInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layout/PageTab.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Layout/PageTab.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormLabel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/Settings/AppSettingsTabs/Server.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/Admin/Settings/AppSettingsTabs/Server.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Server.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Server.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInputText_vue_vue_type_template_id_50a9af87___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInputText_vue_vue_type_template_id_50a9af87___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInputText_vue_vue_type_template_id_50a9af87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppInputText.vue?vue&type=template&id=50a9af87& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87&");


/***/ }),

/***/ "./resources/js/components/Inputs/CopyInput.vue?vue&type=template&id=766e790c&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Inputs/CopyInput.vue?vue&type=template&id=766e790c& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyInput_vue_vue_type_template_id_766e790c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyInput_vue_vue_type_template_id_766e790c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyInput_vue_vue_type_template_id_766e790c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CopyInput.vue?vue&type=template&id=766e790c& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/CopyInput.vue?vue&type=template&id=766e790c&");


/***/ }),

/***/ "./resources/js/components/Layout/PageTab.vue?vue&type=template&id=9d7e21a8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Layout/PageTab.vue?vue&type=template&id=9d7e21a8& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTab_vue_vue_type_template_id_9d7e21a8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTab_vue_vue_type_template_id_9d7e21a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTab_vue_vue_type_template_id_9d7e21a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageTab.vue?vue&type=template&id=9d7e21a8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTab.vue?vue&type=template&id=9d7e21a8&");


/***/ }),

/***/ "./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_template_id_3e75b5c0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_template_id_3e75b5c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_template_id_3e75b5c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormLabel.vue?vue&type=template&id=3e75b5c0& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0&");


/***/ }),

/***/ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_template_id_51c5e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_template_id_51c5e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_template_id_51c5e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true&");


/***/ }),

/***/ "./resources/js/views/Admin/Settings/AppSettingsTabs/Server.vue?vue&type=template&id=330f502d&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/Admin/Settings/AppSettingsTabs/Server.vue?vue&type=template&id=330f502d& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_template_id_330f502d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_template_id_330f502d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_template_id_330f502d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Server.vue?vue&type=template&id=330f502d& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Server.vue?vue&type=template&id=330f502d&");


/***/ }),

/***/ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_style_index_0_id_51c5e09e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true&");


/***/ })

}]);