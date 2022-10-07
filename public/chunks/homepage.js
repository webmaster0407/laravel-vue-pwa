"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["chunks/homepage"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexPageTile',
  props: ['title', 'description', 'type']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Subscription_PlanPeriodSwitcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Subscription/PlanPeriodSwitcher */ "./resources/js/components/Subscription/PlanPeriodSwitcher.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PricingTables',
  components: {
    PlanPeriodSwitcher: _Subscription_PlanPeriodSwitcher__WEBPACK_IMPORTED_MODULE_1__["default"],
    HardDriveIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.HardDriveIcon,
    CheckIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.CheckIcon
  },
  computed: {
    intervalPlanType: function intervalPlanType() {
      return this.isSelectedYearlyPlans ? 'year' : 'month';
    },
    yearlyPlans: function yearlyPlans() {
      return this.plans.data.filter(function (plan) {
        return plan.data.attributes.interval === 'year';
      });
    }
  },
  data: function data() {
    return {
      plans: undefined,
      isSelectedYearlyPlans: false
    };
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default().get('api/subscriptions/plans').then(function (response) {
      _this.plans = response.data;

      _this.$emit('load', response.data);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_PageTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/PageTitle */ "./resources/js/components/IndexPage/Components/PageTitle.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexGetStarted',
  components: {
    InfoIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.InfoIcon,
    UploadCloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.UploadCloudIcon,
    ShareIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.ShareIcon,
    ChevronRightIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.ChevronRightIcon,
    FolderPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.FolderPlusIcon,
    HardDriveIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.HardDriveIcon,
    SettingsIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.SettingsIcon,
    Trash2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.Trash2Icon,
    SearchIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.SearchIcon,
    CloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.CloudIcon,
    PageTitle: _Components_PageTitle__WEBPACK_IMPORTED_MODULE_0__["default"],
    ImageIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.ImageIcon,
    GridIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.GridIcon,
    LinkIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.LinkIcon,
    StarIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.StarIcon,
    EyeIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.EyeIcon
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['index']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexHeroScreenshot',
  components: {
    FolderPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.FolderPlusIcon,
    HardDriveIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.HardDriveIcon,
    SettingsIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.SettingsIcon,
    Trash2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Trash2Icon,
    SearchIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.SearchIcon,
    ImageIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ImageIcon,
    GridIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.GridIcon,
    LinkIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.LinkIcon,
    StarIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.StarIcon,
    EyeIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.EyeIcon
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['config']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _Components_PageTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/PageTitle */ "./resources/js/components/IndexPage/Components/PageTitle.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexMainFeatures',
  components: {
    PageTitle: _Components_PageTitle__WEBPACK_IMPORTED_MODULE_0__["default"],
    HardDriveIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.HardDriveIcon,
    CloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.CloudIcon,
    UserIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.UserIcon
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['index']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexNavigation',
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['config', 'index', 'isDarkMode'])), {}, {
    logoSrc: function logoSrc() {
      return this.isDarkMode && this.config.app_logo_horizontal ? this.config.app_logo_horizontal_dark : this.config.app_logo_horizontal;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexPageFooter',
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['config', 'isDarkMode'])), {}, {
    logoSrc: function logoSrc() {
      return this.isDarkMode && this.config.app_logo_horizontal ? this.config.app_logo_horizontal_dark : this.config.app_logo_horizontal;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons_icons_HardDriveIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-feather-icons/icons/HardDriveIcon */ "./node_modules/vue-feather-icons/icons/HardDriveIcon.js");
/* harmony import */ var _Components_PageTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/PageTitle */ "./resources/js/components/IndexPage/Components/PageTitle.vue");
/* harmony import */ var _UI_Buttons_AuthButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Buttons/AuthButton */ "./resources/js/components/UI/Buttons/AuthButton.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexPageHeader',
  components: {
    PageTitle: _Components_PageTitle__WEBPACK_IMPORTED_MODULE_0__["default"],
    CreditCardIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.CreditCardIcon,
    HardDriveIcon: vue_feather_icons_icons_HardDriveIcon__WEBPACK_IMPORTED_MODULE_3__["default"],
    AuthButton: _UI_Buttons_AuthButton__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)(['index', 'config']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_PricingTables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/PricingTables */ "./resources/js/components/IndexPage/Components/PricingTables.vue");
/* harmony import */ var _UI_Buttons_AuthButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Buttons/AuthButton */ "./resources/js/components/UI/Buttons/AuthButton.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexPricingTables',
  components: {
    PricingTables: _Components_PricingTables__WEBPACK_IMPORTED_MODULE_0__["default"],
    AuthButton: _UI_Buttons_AuthButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    CloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.CloudIcon
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(['index', 'config'])),
  data: function data() {
    return {
      isEmpty: false
    };
  },
  methods: {
    pricingLoaded: function pricingLoaded(pricing) {
      if (pricing.length === 0) this.isEmpty = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SwitchInput',
  props: ['label', 'name', 'state', 'info', 'input', 'isDisabled'],
  data: function data() {
    return {
      isSwitched: undefined
    };
  },
  methods: {
    changeState: function changeState() {
      if (this.isDisabled) return;
      this.isSwitched = !this.isSwitched;
      this.$emit('input', this.isSwitched);
    }
  },
  mounted: function mounted() {
    this.isSwitched = this.state;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Inputs_SwitchInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Inputs/SwitchInput */ "./resources/js/components/Inputs/SwitchInput.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PlanPeriodSwitcher',
  components: {
    SwitchInput: _Inputs_SwitchInput__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  watch: {
    'isSelectedYearlyPlans': function isSelectedYearlyPlans() {
      this.$emit('input', this.isSelectedYearlyPlans);
    }
  },
  data: function data() {
    return {
      isSelectedYearlyPlans: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AuthContent',
  props: ['loading', 'icon', 'text'],
  components: {
    ChevronRightIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ChevronRightIcon,
    RefreshCwIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.RefreshCwIcon
  },
  data: function data() {
    return {
      isVisible: false
    };
  },
  created: function created() {
    this.isVisible = this.visible;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frontpage/Homepage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frontpage/Homepage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_IndexPage_IndexHeroScreenshot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/IndexPage/IndexHeroScreenshot */ "./resources/js/components/IndexPage/IndexHeroScreenshot.vue");
/* harmony import */ var _components_IndexPage_IndexPricingTables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/IndexPage/IndexPricingTables */ "./resources/js/components/IndexPage/IndexPricingTables.vue");
/* harmony import */ var _components_IndexPage_IndexMainFeatures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/IndexPage/IndexMainFeatures */ "./resources/js/components/IndexPage/IndexMainFeatures.vue");
/* harmony import */ var _components_IndexPage_IndexNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/IndexPage/IndexNavigation */ "./resources/js/components/IndexPage/IndexNavigation.vue");
/* harmony import */ var _components_IndexPage_IndexPageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/IndexPage/IndexPageHeader */ "./resources/js/components/IndexPage/IndexPageHeader.vue");
/* harmony import */ var _components_IndexPage_IndexGetStarted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/IndexPage/IndexGetStarted */ "./resources/js/components/IndexPage/IndexGetStarted.vue");
/* harmony import */ var _components_IndexPage_IndexPageFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/IndexPage/IndexPageFooter */ "./resources/js/components/IndexPage/IndexPageFooter.vue");
/* harmony import */ var _components_UI_Others_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UI/Others/Spinner */ "./resources/js/components/UI/Others/Spinner.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Homepage',
  components: {
    HeroScreenshot: _components_IndexPage_IndexHeroScreenshot__WEBPACK_IMPORTED_MODULE_0__["default"],
    PricingTables: _components_IndexPage_IndexPricingTables__WEBPACK_IMPORTED_MODULE_1__["default"],
    MainFeatures: _components_IndexPage_IndexMainFeatures__WEBPACK_IMPORTED_MODULE_2__["default"],
    GetStarted: _components_IndexPage_IndexGetStarted__WEBPACK_IMPORTED_MODULE_5__["default"],
    Navigation: _components_IndexPage_IndexNavigation__WEBPACK_IMPORTED_MODULE_3__["default"],
    PageHeader: _components_IndexPage_IndexPageHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
    PageFooter: _components_IndexPage_IndexPageFooter__WEBPACK_IMPORTED_MODULE_6__["default"],
    Spinner: _components_UI_Others_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapGetters)(['config'])),
  data: function data() {
    return {
      isLoading: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    // Get page content
    axios__WEBPACK_IMPORTED_MODULE_8___default().get('/api/settings', {
      params: {
        column: 'allow_homepage|footer_content|get_started_description|get_started_title|pricing_description|pricing_title|feature_description_3|feature_title_3|feature_description_2|feature_title_2|feature_description_1|feature_title_1|features_description|features_title|header_description|header_title|section_get_started|section_pricing_content|section_feature_boxes|section_features'
      }
    }).then(function (response) {
      _this.$store.commit('SET_INDEX_CONTENT', response.data);
    })["finally"](function () {
      _this.isLoading = false;
    });
  },
  created: function created() {
    this.$scrollTop();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=template&id=4818f36e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=template&id=4818f36e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "page-title left",
    "class": _vm.type
  }, [_c("h1", {
    staticClass: "title",
    domProps: {
      innerHTML: _vm._s(_vm.title)
    }
  }), _vm._v(" "), _vm.description ? _c("h2", {
    staticClass: "description"
  }, [_vm._v("\n        " + _vm._s(_vm.description) + "\n    ")]) : _vm._e()]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=template&id=513863ea&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=template&id=513863ea&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "text-center"
  }, [_vm.plans && _vm.yearlyPlans.length > 0 ? _c("PlanPeriodSwitcher", {
    staticClass: "inline-block",
    model: {
      value: _vm.isSelectedYearlyPlans,
      callback: function callback($$v) {
        _vm.isSelectedYearlyPlans = $$v;
      },
      expression: "isSelectedYearlyPlans"
    }
  }) : _vm._e(), _vm._v(" "), _vm.plans ? _c("div", {
    staticClass: "plans-wrapper"
  }, _vm._l(_vm.plans.data, function (plan) {
    return plan.data.attributes.interval === _vm.intervalPlanType ? _c("article", {
      key: plan.data.id,
      staticClass: "plan"
    }, [_c("div", {
      staticClass: "plan-wrapper"
    }, [_c("header", {
      staticClass: "plan-header mb-8"
    }, [_c("div", {
      staticClass: "icon"
    }, [_c("hard-drive-icon", {
      staticClass: "text-theme mx-auto",
      attrs: {
        size: "26"
      }
    })], 1), _vm._v(" "), _c("h1", {
      staticClass: "title"
    }, [_vm._v(_vm._s(plan.data.attributes.name))]), _vm._v(" "), _c("h2", {
      staticClass: "description"
    }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(plan.data.attributes.description) + "\n\t\t\t\t\t")])]), _vm._v(" "), _vm._l(plan.data.attributes.features, function (value, key, i) {
      return _c("div", {
        key: i,
        staticClass: "justify-center flex py-1.5"
      }, [_c("div", {
        staticClass: "flex items-center"
      }, [_c("CheckIcon", {
        staticClass: "svg-stroke-theme mr-2",
        attrs: {
          size: "18"
        }
      }), _vm._v(" "), value !== -1 ? _c("span", {
        staticClass: "text-sm font-bold"
      }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.$t(key === "max_team_members" ? "max_team_members_total" : key, {
        value: value
      })) + "\n\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), value === -1 ? _c("span", {
        staticClass: "text-sm font-bold"
      }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.$t("".concat(key, ".unlimited"))) + "\n\t\t\t\t\t\t")]) : _vm._e()], 1)]);
    }), _vm._v(" "), _c("footer", {
      staticClass: "plan-footer mt-8"
    }, [_c("b", {
      staticClass: "price text-theme"
    }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(plan.data.attributes.price) + " / " + _vm._s(_vm.$t("interval.".concat(plan.data.attributes.interval))) + "\n\t\t\t\t\t")])])], 2)]) : _vm._e();
  }), 0) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=template&id=e018e898&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=template&id=e018e898&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.index.section_get_started === "1" ? _c("div", {
    staticClass: "page-wrapper large get-started"
  }, [_c("PageTitle", {
    staticClass: "page-title",
    attrs: {
      type: "center",
      title: _vm.index.get_started_title,
      description: _vm.index.get_started_description
    }
  }), _vm._v(" "), _c("router-link", {
    staticClass: "get-started-button bg-theme-800 hover-bg-theme shadow-theme",
    attrs: {
      tag: "button",
      to: {
        name: "SignUp"
      }
    }
  }, [_c("span", {
    staticClass: "content"
  }, [_vm._v(_vm._s(_vm.$t("sign_up_now")))]), _vm._v(" "), _c("chevron-right-icon", {
    attrs: {
      size: "22"
    }
  })], 1), _vm._v(" "), _c("cloud-icon", {
    staticClass: "cloud-bg svg-color-theme",
    attrs: {
      size: "790"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "icons"
  }, [_c("hard-drive-icon", {
    staticClass: "icon",
    attrs: {
      size: "42"
    }
  }), _vm._v(" "), _c("settings-icon", {
    staticClass: "icon",
    attrs: {
      size: "22"
    }
  }), _vm._v(" "), _c("image-icon", {
    staticClass: "icon",
    attrs: {
      size: "50"
    }
  }), _vm._v(" "), _c("link-icon", {
    staticClass: "icon",
    attrs: {
      size: "24"
    }
  }), _vm._v(" "), _c("trash2-icon", {
    staticClass: "icon",
    attrs: {
      size: "40"
    }
  }), _vm._v(" "), _c("search-icon", {
    staticClass: "icon",
    attrs: {
      size: "18"
    }
  }), _vm._v(" "), _c("eye-icon", {
    staticClass: "icon",
    attrs: {
      size: "36"
    }
  }), _vm._v(" "), _c("star-icon", {
    staticClass: "icon",
    attrs: {
      size: "34"
    }
  }), _vm._v(" "), _c("folder-plus-icon", {
    staticClass: "icon",
    attrs: {
      size: "20"
    }
  }), _vm._v(" "), _c("grid-icon", {
    staticClass: "icon",
    attrs: {
      size: "28"
    }
  }), _vm._v(" "), _c("share-icon", {
    staticClass: "icon",
    attrs: {
      size: "32"
    }
  }), _vm._v(" "), _c("folder-plus-icon", {
    staticClass: "icon",
    attrs: {
      size: "48"
    }
  }), _vm._v(" "), _c("search-icon", {
    staticClass: "icon",
    attrs: {
      size: "34"
    }
  }), _vm._v(" "), _c("star-icon", {
    staticClass: "icon",
    attrs: {
      size: "22"
    }
  }), _vm._v(" "), _c("upload-cloud-icon", {
    staticClass: "icon",
    attrs: {
      size: "42"
    }
  }), _vm._v(" "), _c("grid-icon", {
    staticClass: "icon",
    attrs: {
      size: "18"
    }
  }), _vm._v(" "), _c("settings-icon", {
    staticClass: "icon",
    attrs: {
      size: "32"
    }
  }), _vm._v(" "), _c("link-icon", {
    staticClass: "icon",
    attrs: {
      size: "36"
    }
  }), _vm._v(" "), _c("hard-drive-icon", {
    staticClass: "icon",
    attrs: {
      size: "22"
    }
  }), _vm._v(" "), _c("info-icon", {
    staticClass: "icon",
    attrs: {
      size: "36"
    }
  })], 1)], 1) : _vm._e();
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=template&id=71efc52e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=template&id=71efc52e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "page-wrapper large hero-screenshot"
  }, [_c("img", {
    staticClass: "hero-light",
    attrs: {
      src: "/assets/images/vuefilemanager-screenshot-light.png",
      alt: _vm.config.app_name
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "hero-dark",
    attrs: {
      src: "/assets/images/vuefilemanager-screenshot-dark.png",
      alt: _vm.config.app_name
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "icons"
  }, [_c("link-icon", {
    staticClass: "icon",
    attrs: {
      size: "20"
    }
  }), _vm._v(" "), _c("image-icon", {
    staticClass: "icon",
    attrs: {
      size: "38"
    }
  }), _vm._v(" "), _c("hard-drive-icon", {
    staticClass: "icon",
    attrs: {
      size: "34"
    }
  }), _vm._v(" "), _c("folder-plus-icon", {
    staticClass: "icon",
    attrs: {
      size: "40"
    }
  }), _vm._v(" "), _c("settings-icon", {
    staticClass: "icon",
    attrs: {
      size: "18"
    }
  }), _vm._v(" "), _c("search-icon", {
    staticClass: "icon",
    attrs: {
      size: "24"
    }
  }), _vm._v(" "), _c("star-icon", {
    staticClass: "icon",
    attrs: {
      size: "18"
    }
  }), _vm._v(" "), _c("trash2-icon", {
    staticClass: "icon",
    attrs: {
      size: "32"
    }
  }), _vm._v(" "), _c("search-icon", {
    staticClass: "icon",
    attrs: {
      size: "18"
    }
  }), _vm._v(" "), _c("eye-icon", {
    staticClass: "icon",
    attrs: {
      size: "30"
    }
  }), _vm._v(" "), _c("star-icon", {
    staticClass: "icon",
    attrs: {
      size: "30"
    }
  }), _vm._v(" "), _c("folder-plus-icon", {
    staticClass: "icon",
    attrs: {
      size: "16"
    }
  }), _vm._v(" "), _c("grid-icon", {
    staticClass: "icon",
    attrs: {
      size: "20"
    }
  })], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=template&id=2f87e6bf&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=template&id=2f87e6bf&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("section", {
    staticClass: "main-features page-wrapper medium"
  }, [_vm.index.section_features === "1" ? _c("PageTitle", {
    attrs: {
      type: "center",
      title: _vm.index.features_title,
      description: _vm.index.features_description
    }
  }) : _vm._e(), _vm._v(" "), _vm.index.section_feature_boxes === "1" ? _c("div", {
    staticClass: "content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "features"
  }, [_c("div", {
    staticClass: "feature"
  }, [_c("div", {
    staticClass: "icon"
  }, [_c("cloud-icon", {
    attrs: {
      size: "24"
    }
  })], 1), _vm._v(" "), _c("h3", {
    staticClass: "title"
  }, [_vm._v("\n                    " + _vm._s(_vm.index.feature_title_1) + "\n                ")]), _vm._v(" "), _c("p", {
    staticClass: "description"
  }, [_vm._v("\n                    " + _vm._s(_vm.index.feature_description_1) + "\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "feature"
  }, [_c("div", {
    staticClass: "icon"
  }, [_c("user-icon", {
    attrs: {
      size: "24"
    }
  })], 1), _vm._v(" "), _c("h3", {
    staticClass: "title"
  }, [_vm._v("\n                    " + _vm._s(_vm.index.feature_title_2) + "\n                ")]), _vm._v(" "), _c("p", {
    staticClass: "description"
  }, [_vm._v("\n                    " + _vm._s(_vm.index.feature_description_2) + "\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "feature"
  }, [_c("div", {
    staticClass: "icon"
  }, [_c("hard-drive-icon", {
    attrs: {
      size: "24"
    }
  })], 1), _vm._v(" "), _c("h3", {
    staticClass: "title"
  }, [_vm._v("\n                    " + _vm._s(_vm.index.feature_title_3) + "\n                ")]), _vm._v(" "), _c("p", {
    staticClass: "description"
  }, [_vm._v("\n                    " + _vm._s(_vm.index.feature_description_3) + "\n                ")])])])]) : _vm._e()], 1);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "hero"
  }, [_c("img", {
    attrs: {
      src: "/assets/images/hero-Illustration.svg",
      alt: "Hero"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("nav", {
    staticClass: "main-navigation"
  }, [_c("router-link", {
    staticClass: "logo",
    attrs: {
      to: {
        name: "Homepage"
      },
      tag: "div"
    }
  }, [_vm.config.app_logo_horizontal ? _c("img", {
    staticClass: "max-h-6",
    attrs: {
      src: _vm.$getImage(_vm.logoSrc),
      alt: _vm.config.app_name
    }
  }) : _vm._e(), _vm._v(" "), !_vm.config.app_logo_horizontal ? _c("b", {
    staticClass: "logo-text"
  }, [_vm._v(_vm._s(_vm.config.app_name))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "navigation"
  }, [_c("ul", {
    staticClass: "navigation-links"
  }, [_c("li", [_c("router-link", {
    staticClass: "hover-text-theme",
    attrs: {
      to: {
        name: "ContactUs"
      }
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("contact_us")) + "\n                    ")])], 1)]), _vm._v(" "), !_vm.config.isAuthenticated ? _c("ul", {
    staticClass: "navigation-links"
  }, [_c("li", [_c("router-link", {
    staticClass: "hover-text-theme",
    attrs: {
      to: {
        name: "SignIn"
      }
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("log_in")) + "\n                    ")])], 1), _vm._v(" "), _vm.config.userRegistration ? _c("li", [_c("router-link", {
    staticClass: "cta-button text-theme bg-theme-100",
    attrs: {
      to: {
        name: "SignUp"
      }
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("page_index.menu.sign_in")) + "\n                    ")])], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.config.isAuthenticated ? _c("ul", {
    staticClass: "navigation-links"
  }, [_c("li", [_c("router-link", {
    staticClass: "cta-button text-theme bg-theme-100",
    attrs: {
      to: {
        name: "Files"
      }
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("go_to_files")) + "\n                    ")])], 1)]) : _vm._e()]), _vm._v(" "), _c("router-link", {
    staticClass: "cta-button log-in text-theme bg-theme-100",
    attrs: {
      to: {
        name: "SignIn"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("log_in")) + "\n        ")])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("footer", {
    staticClass: "page-wrapper medium"
  }, [_c("router-link", {
    staticClass: "logo",
    attrs: {
      to: {
        name: "Homepage"
      },
      tag: "div"
    }
  }, [_vm.config.app_logo_horizontal ? _c("img", {
    staticClass: "mx-auto max-h-6",
    attrs: {
      src: _vm.$getImage(_vm.logoSrc),
      alt: _vm.config.app_name
    }
  }) : _vm._e(), _vm._v(" "), !_vm.config.app_logo_horizontal ? _c("b", {
    staticClass: "logo-text"
  }, [_vm._v(_vm._s(_vm.config.app_name))]) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "navigation-links"
  }, [_c("li", [_c("router-link", {
    staticClass: "hover-text-theme",
    attrs: {
      to: {
        name: "ContactUs"
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("contact_us")) + "\n                ")])], 1)]), _vm._v(" "), _c("ul", {
    staticClass: "navigation-links"
  }, _vm._l(_vm.config.legal, function (legal, index) {
    return legal.visibility ? _c("li", {
      key: index
    }, [_c("router-link", {
      staticClass: "hover-text-theme",
      attrs: {
        to: {
          name: "DynamicPage",
          params: {
            slug: legal.slug
          }
        }
      }
    }, [_vm._v("\n                    " + _vm._s(legal.title) + "\n                ")])], 1) : _vm._e();
  }), 0), _vm._v(" "), _c("p", {
    staticClass: "copyright",
    domProps: {
      innerHTML: _vm._s(_vm.config.app_footer)
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=template&id=08bace36&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=template&id=08bace36&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("header", {
    staticClass: "main-header page-wrapper medium"
  }, [_c("PageTitle", {
    attrs: {
      title: _vm.index.header_title,
      description: _vm.index.header_description
    }
  }), _vm._v(" "), !_vm.config.isAuthenticated ? _c("div", [_vm.config.userRegistration ? _c("router-link", {
    staticClass: "sign-up-button",
    attrs: {
      to: {
        name: "SignUp"
      }
    }
  }, [_c("AuthButton", {
    staticClass: "button",
    attrs: {
      icon: "chevron-right",
      text: _vm.$t("page_index.sign_up_button")
    }
  })], 1) : _vm._e(), _vm._v(" "), !_vm.config.userRegistration ? _c("router-link", {
    staticClass: "sign-up-button",
    attrs: {
      to: {
        name: "SignIn"
      }
    }
  }, [_c("AuthButton", {
    staticClass: "button",
    attrs: {
      icon: "chevron-right",
      text: _vm.$t("log_in")
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.config.subscriptionType === "fixed" ? _c("div", {
    staticClass: "features"
  }, [_c("div", {
    staticClass: "feature"
  }, [_c("credit-card-icon", {
    staticClass: "feature-icon",
    attrs: {
      size: "19"
    }
  }), _vm._v(" "), _c("b", {
    staticClass: "feature-title"
  }, [_vm._v(_vm._s(_vm.$t("page_index.sign_feature_1")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "feature"
  }, [_c("hard-drive-icon", {
    staticClass: "feature-icon",
    attrs: {
      size: "19"
    }
  }), _vm._v(" "), _c("b", {
    staticClass: "feature-title"
  }, [_vm._v(_vm._s(_vm.$t("page_index.sign_feature_2", {
    defaultSpace: _vm.config.storageDefaultSpaceFormatted
  })))])], 1)]) : _vm._e()], 1) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=template&id=19994af2&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=template&id=19994af2&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return !_vm.isEmpty && _vm.index.section_pricing_content === "1" ? _c("div", {
    staticClass: "page-wrapper medium pricing"
  }, [_c("div", {
    staticClass: "page-title center",
    attrs: {
      id: "pricing"
    }
  }, [_c("h1", {
    staticClass: "title",
    domProps: {
      innerHTML: _vm._s(_vm.index.pricing_title)
    }
  })]), _vm._v(" "), _c("PricingTables", {
    staticClass: "pricing-tables",
    on: {
      load: _vm.pricingLoaded
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "page-title center"
  }, [_c("h2", {
    staticClass: "description"
  }, [_vm._v("\n            " + _vm._s(_vm.index.pricing_description) + "\n        ")]), _vm._v(" "), _c("router-link", {
    staticClass: "sign-up-button",
    attrs: {
      to: {
        name: "SignUp"
      }
    }
  }, [_c("AuthButton", {
    staticClass: "button",
    attrs: {
      icon: "chevron-right",
      text: _vm.$t("page_index.sign_up_button")
    }
  })], 1)], 1), _vm._v(" "), _c("cloud-icon", {
    staticClass: "cloud-bg",
    attrs: {
      size: "800"
    }
  }), _vm._v(" "), _c("cloud-icon", {
    staticClass: "cloud-bg",
    attrs: {
      size: "560"
    }
  })], 1) : _vm._e();
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", {
    staticClass: "switch-content"
  }, [_vm.label ? _c("label", {
    staticClass: "input-label"
  }, [_vm._v(" " + _vm._s(_vm.label) + ": ")]) : _vm._e(), _vm._v(" "), _vm.info ? _c("small", {
    staticClass: "input-info"
  }, [_vm._v("\n            " + _vm._s(_vm.info) + "\n        ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "switch-content text-right"
  }, [_c("div", {
    staticClass: "switch",
    "class": {
      active: _vm.state
    },
    on: {
      click: _vm.changeState
    }
  }, [_c("div", {
    staticClass: "switch-button"
  })])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=template&id=65b62582&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=template&id=65b62582& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "mb-2 text-right"
  }, [_c("label", {
    staticClass: "cursor-pointer text-xs font-bold",
    "class": {
      "text-gray-400": !_vm.isSelectedYearlyPlans
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.$t("billed_annually")) + "\n\t")]), _vm._v(" "), _c("div", {
    staticClass: "relative inline-block w-12 select-none align-middle"
  }, [_c("SwitchInput", {
    staticClass: "scale-75 transform",
    attrs: {
      state: _vm.isSelectedYearlyPlans
    },
    model: {
      value: _vm.isSelectedYearlyPlans,
      callback: function callback($$v) {
        _vm.isSelectedYearlyPlans = $$v;
      },
      expression: "isSelectedYearlyPlans"
    }
  })], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("button", {
    staticClass: "group mx-auto inline-block flex items-center whitespace-nowrap rounded-lg border-2 border-black px-7 py-2.5 dark:border-gray-300"
  }, [_c("span", {
    staticClass: "pr-1 text-lg font-extrabold"
  }, [_vm._v("\n        " + _vm._s(_vm.text) + "\n    ")]), _vm._v(" "), _vm.loading ? _c("refresh-cw-icon", {
    staticClass: "vue-feather text-theme sync-alt -mr-1",
    attrs: {
      size: "20"
    }
  }) : _vm._e(), _vm._v(" "), !_vm.loading && _vm.icon ? _c("chevron-right-icon", {
    staticClass: "vue-feather text-theme -mr-1",
    attrs: {
      size: "20"
    }
  }) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frontpage/Homepage.vue?vue&type=template&id=61ef4ce4&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frontpage/Homepage.vue?vue&type=template&id=61ef4ce4& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "landing-page"
  }, [!_vm.isLoading ? _c("div", [_c("Navigation", {
    staticClass: "page-wrapper medium"
  }), _vm._v(" "), _c("PageHeader"), _vm._v(" "), _c("HeroScreenshot"), _vm._v(" "), _vm.config.allowedAdsense && _vm.config.adsenseBanner03 ? _c("div", {
    staticClass: "mb-5 min-h-[120px]",
    domProps: {
      innerHTML: _vm._s(_vm.config.adsenseBanner03)
    }
  }) : _vm._e(), _vm._v(" "), _c("MainFeatures"), _vm._v(" "), _vm.config.subscriptionType === "fixed" ? _c("PricingTables") : _vm._e(), _vm._v(" "), _c("GetStarted"), _vm._v(" "), _c("PageFooter")], 1) : _vm._e(), _vm._v(" "), _vm.isLoading ? _c("div", [_c("Spinner")], 1) : _vm._e()]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-4818f36e] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-4818f36e] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-4818f36e] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-4818f36e] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-4818f36e] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-4818f36e] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-4818f36e] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-4818f36e] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-4818f36e] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-4818f36e] {\n    width: 100%;\n}\n}\n.page-title[data-v-4818f36e] {\n  position: relative;\n  z-index: 1;\n}\n.page-title.center[data-v-4818f36e] {\n  text-align: center;\n}\n.page-title.center .title[data-v-4818f36e] {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 780px;\n}\n.page-title.center .description[data-v-4818f36e] {\n  margin-left: auto;\n  margin-right: auto;\n}\n.page-title .title[data-v-4818f36e] {\n  max-width: 580px;\n  font-size: 48px;\n  font-weight: 800;\n  line-height: 1.3;\n  margin-bottom: 15px;\n}\n.page-title .title[data-v-4818f36e] span {\n  font-size: 48px;\n}\n.page-title .description[data-v-4818f36e] {\n  max-width: 580px;\n  font-size: 1.25em;\n  font-weight: 500;\n  line-height: 1.65;\n  margin-bottom: 30px;\n}\n@media only screen and (max-width: 960px) {\n.page-title .title[data-v-4818f36e] {\n    max-width: 100%;\n    font-size: 32px;\n    line-height: 1.25;\n    margin-bottom: 15px;\n}\n.page-title .title[data-v-4818f36e] span {\n    font-size: 32px;\n}\n.page-title .description[data-v-4818f36e] {\n    max-width: 100%;\n    font-size: 1em;\n    line-height: 1.6;\n    margin-bottom: 30px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".plans-wrapper[data-v-513863ea] {\n  box-shadow: 0 7px 20px 5px rgba(26, 36, 55, 0.05);\n  border-radius: 8px;\n  background: white;\n}\n.plan[data-v-513863ea] {\n  text-align: center;\n  flex: 0 0 33%;\n  padding: 55px 25px 75px;\n}\n.plan[data-v-513863ea]:last-child {\n  border-right: none;\n}\n.plan .plan-header .icon path[data-v-513863ea],\n.plan .plan-header .icon line[data-v-513863ea],\n.plan .plan-header .icon polyline[data-v-513863ea],\n.plan .plan-header .icon rect[data-v-513863ea],\n.plan .plan-header .icon circle[data-v-513863ea] {\n  color: inherit;\n}\n.plan .plan-header .title[data-v-513863ea] {\n  font-size: 1.5625em;\n  font-weight: 800;\n  padding-top: 10px;\n}\n.plan .plan-header .description[data-v-513863ea] {\n  font-size: 0.875em;\n  font-weight: 600;\n}\n.plan .plan-features[data-v-513863ea] {\n  margin: 55px 0;\n}\n.plan .plan-features .storage-size[data-v-513863ea] {\n  font-size: 3em;\n  font-weight: 900;\n  line-height: 1.1;\n}\n.plan .plan-features .storage-description[data-v-513863ea] {\n  display: block;\n  font-size: 0.9375em;\n  font-weight: 800;\n}\n.plan .plan-footer .sign-in-button[data-v-513863ea] {\n  width: 100%;\n  text-align: center;\n}\n.plan .plan-footer .price[data-v-513863ea] {\n  font-size: 1.125em;\n  display: block;\n  padding-top: 5px;\n}\n.plan .plan-footer .price .vat-disclaimer[data-v-513863ea] {\n  font-size: 0.6875em;\n  color: #1B2539;\n  display: block;\n  font-weight: 300;\n  opacity: 0.45;\n  margin-top: 5px;\n}\n.plans-wrapper[data-v-513863ea] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n@media only screen and (max-width: 960px) {\n.plans-wrapper[data-v-513863ea] {\n    display: block;\n    margin: 0;\n}\n.plans-wrapper .plan[data-v-513863ea] {\n    padding: 30px 25px;\n    border-bottom: 1px solid #f7f7f7;\n    border-right: none;\n}\n}\n.dark .plans-wrapper[data-v-513863ea] {\n  background: #1e2024;\n}\n.dark .plan[data-v-513863ea] {\n  border-color: rgba(255, 255, 255, 0.02) !important;\n}\n.dark .plan .plan-wrapper[data-v-513863ea] {\n  background: #1e2024;\n}\n.dark .plan .plan-header .title[data-v-513863ea] {\n  color: #bec6cf;\n}\n.dark .plan .plan-header .description[data-v-513863ea] {\n  color: #7d858c;\n}\n.dark .plan .plan-features .storage-size[data-v-513863ea] {\n  color: #bec6cf;\n}\n.dark .plan .plan-features .storage-description[data-v-513863ea] {\n  color: #bec6cf;\n}\n.dark .plan .plan-footer .sign-in-button[data-v-513863ea] {\n  background: rgba(0, 188, 126, 0.1);\n}\n.dark .plan .plan-footer .sign-in-button[data-v-513863ea] .content {\n  color: #00BC7E;\n}\n.dark .plan .plan-footer .price .vat-disclaimer[data-v-513863ea] {\n  color: #bec6cf;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-e018e898] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-e018e898] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-e018e898] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-e018e898] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-e018e898] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-e018e898] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-e018e898] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-e018e898] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-e018e898] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-e018e898] {\n    width: 100%;\n}\n}\n.icons .icon[data-v-e018e898] {\n  position: absolute;\n}\n.icons .icon[data-v-e018e898]:nth-child(20) {\n  bottom: -37%;\n  left: 37%;\n  transform: rotate(0deg);\n}\n.icons .icon:nth-child(20) circle[data-v-e018e898],\n.icons .icon:nth-child(20) line[data-v-e018e898] {\n  stroke: #FFBD2D;\n}\n.icons .icon[data-v-e018e898]:nth-child(19) {\n  bottom: -21%;\n  left: 23.5%;\n  transform: rotate(-20deg);\n}\n.icons .icon:nth-child(19) path[data-v-e018e898],\n.icons .icon:nth-child(19) line[data-v-e018e898] {\n  stroke: #9D66FE;\n}\n.icons .icon[data-v-e018e898]:nth-child(18) {\n  bottom: -4%;\n  left: 26.5%;\n  transform: rotate(0deg);\n}\n.icons .icon:nth-child(18) path[data-v-e018e898] {\n  stroke: #00BC7E;\n}\n.icons .icon[data-v-e018e898]:nth-child(17) {\n  bottom: -5%;\n  left: 8.5%;\n  transform: rotate(0deg);\n}\n.icons .icon[data-v-e018e898]:nth-child(16) {\n  top: 86%;\n  left: 17%;\n  transform: rotate(18deg);\n}\n.icons .icon[data-v-e018e898]:nth-child(15) {\n  top: 64%;\n  left: 17%;\n  transform: rotate(0deg);\n}\n.icons .icon:nth-child(15) polyline[data-v-e018e898],\n.icons .icon:nth-child(15) line[data-v-e018e898],\n.icons .icon:nth-child(15) path[data-v-e018e898] {\n  stroke: #FE6057;\n}\n.icons .icon[data-v-e018e898]:nth-child(14) {\n  top: 44%;\n  left: 28%;\n  transform: rotate(0deg);\n}\n.icons .icon:nth-child(14) polygon[data-v-e018e898] {\n  stroke: #9D66FE;\n}\n.icons .icon[data-v-e018e898]:nth-child(13) {\n  top: 33%;\n  left: 16%;\n  transform: rotate(0deg);\n}\n.icons .icon[data-v-e018e898]:nth-child(12) {\n  top: 23%;\n  left: 32%;\n  transform: rotate(13deg);\n}\n.icons .icon:nth-child(12) line[data-v-e018e898],\n.icons .icon:nth-child(12) path[data-v-e018e898] {\n  stroke: #FFBD2D;\n}\n.icons .icon[data-v-e018e898]:nth-child(1) {\n  top: 35%;\n  right: 49%;\n  transform: rotate(-11deg);\n}\n.icons .icon:nth-child(1) line[data-v-e018e898],\n.icons .icon:nth-child(1) path[data-v-e018e898] {\n  stroke: #00BC7E;\n}\n.icons .icon[data-v-e018e898]:nth-child(2) {\n  top: 12%;\n  right: 45%;\n  transform: rotate(0);\n}\n.icons .icon:nth-child(2) circle[data-v-e018e898],\n.icons .icon:nth-child(2) path[data-v-e018e898] {\n  stroke: #FE6057;\n}\n.icons .icon[data-v-e018e898]:nth-child(3) {\n  top: 30%;\n  right: 30%;\n  transform: rotate(20deg);\n}\n.icons .icon[data-v-e018e898]:nth-child(4) {\n  top: 14%;\n  right: 14.5%;\n  transform: rotate(-1deg);\n}\n.icons .icon[data-v-e018e898]:nth-child(5) {\n  top: 62%;\n  right: 15.5%;\n  transform: rotate(21deg);\n}\n.icons .icon:nth-child(5) polyline[data-v-e018e898],\n.icons .icon:nth-child(5) path[data-v-e018e898],\n.icons .icon:nth-child(5) line[data-v-e018e898] {\n  stroke: #FE6057;\n}\n.icons .icon[data-v-e018e898]:nth-child(6) {\n  top: 66%;\n  right: 26.5%;\n  transform: rotate(0deg);\n}\n.icons .icon[data-v-e018e898]:nth-child(7) {\n  bottom: 3%;\n  right: 21.5%;\n  transform: rotate(16deg);\n}\n.icons .icon[data-v-e018e898]:nth-child(8) {\n  bottom: -13%;\n  right: 16.5%;\n  transform: rotate(0deg);\n}\n.icons .icon:nth-child(8) polygon[data-v-e018e898] {\n  stroke: #FFBD2D;\n}\n.icons .icon[data-v-e018e898]:nth-child(9) {\n  bottom: -32%;\n  right: 27%;\n  transform: rotate(-20deg);\n}\n.icons .icon[data-v-e018e898]:nth-child(10) {\n  bottom: -5%;\n  right: 34%;\n  transform: rotate(16deg);\n}\n.icons .icon:nth-child(10) rect[data-v-e018e898] {\n  stroke: #9D66FE;\n}\n.icons .icon[data-v-e018e898]:nth-child(11) {\n  bottom: -28%;\n  right: 44%;\n  transform: rotate(-12deg);\n}\n.icons .icon:nth-child(11) polyline[data-v-e018e898],\n.icons .icon:nth-child(11) line[data-v-e018e898],\n.icons .icon:nth-child(11) path[data-v-e018e898] {\n  stroke: #FE6057;\n}\n.cloud-bg[data-v-e018e898] {\n  z-index: 0;\n  position: absolute;\n  top: 70px;\n  right: 60px;\n  transform: scale(-1, 1) rotate(13deg);\n  opacity: 0.1;\n}\n.cloud-bg path[data-v-e018e898] {\n  stroke: none;\n}\n.page-title[data-v-e018e898] {\n  padding-top: 340px;\n}\n.get-started-button[data-v-e018e898] {\n  display: flex;\n  align-items: center;\n  outline: none;\n  border: none;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  padding: 20px 36px;\n  border-radius: 6px;\n  margin-bottom: 395px;\n  transition: 150ms all ease;\n  position: relative;\n  z-index: 1;\n}\n.get-started-button .content[data-v-e018e898] {\n  font-size: 1.1875em;\n  font-weight: 700;\n  margin-right: 8px;\n  color: white;\n}\n.get-started-button polyline[data-v-e018e898] {\n  stroke: white;\n}\n@media only screen and (max-width: 1190px) {\n.get-started-button[data-v-e018e898] {\n    margin-bottom: 280px;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-title[data-v-e018e898] {\n    padding-top: 20px;\n}\n.get-started-button[data-v-e018e898] {\n    margin-bottom: 30px;\n}\n.cloud-bg[data-v-e018e898],\n  .icons[data-v-e018e898] {\n    display: none;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-71efc52e] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-71efc52e] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-71efc52e] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-71efc52e] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-71efc52e] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-71efc52e] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-71efc52e] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-71efc52e] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-71efc52e] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-71efc52e] {\n    width: 100%;\n}\n}\n.icons .icon[data-v-71efc52e] {\n  z-index: 0;\n  position: absolute;\n}\n.icons .icon[data-v-71efc52e]:nth-child(1) {\n  top: -14%;\n  right: 2%;\n}\n.icons .icon[data-v-71efc52e]:nth-child(2) {\n  top: -5%;\n  right: 14%;\n  transform: rotate(19deg);\n}\n.icons .icon[data-v-71efc52e]:nth-child(3) {\n  top: -6.5%;\n  right: 28.5%;\n  transform: rotate(-12deg);\n}\n.icons .icon:nth-child(3) line[data-v-71efc52e],\n.icons .icon:nth-child(3) path[data-v-71efc52e] {\n  stroke: #00BC7E;\n}\n.icons .icon[data-v-71efc52e]:nth-child(4) {\n  top: -9.5%;\n  right: 41.5%;\n  transform: rotate(13deg);\n}\n.icons .icon:nth-child(4) path[data-v-71efc52e],\n.icons .icon:nth-child(4) line[data-v-71efc52e] {\n  stroke: #FFBD2D;\n}\n.icons .icon[data-v-71efc52e]:nth-child(5) {\n  top: -16%;\n  right: 26%;\n}\n.icons .icon:nth-child(5) circle[data-v-71efc52e],\n.icons .icon:nth-child(5) path[data-v-71efc52e] {\n  stroke: #FE6057;\n}\n.icons .icon[data-v-71efc52e]:nth-child(6) {\n  top: -13%;\n  right: 49%;\n}\n.icons .icon[data-v-71efc52e]:nth-child(7) {\n  top: 2.5%;\n  right: 46%;\n}\n.icons .icon:nth-child(7) polygon[data-v-71efc52e] {\n  stroke: #9D66FE;\n}\n.icons .icon[data-v-71efc52e]:nth-child(8) {\n  top: 13%;\n  right: 2.5%;\n  transform: rotate(22deg);\n}\n.icons .icon:nth-child(8) polyline[data-v-71efc52e],\n.icons .icon:nth-child(8) path[data-v-71efc52e],\n.icons .icon:nth-child(8) line[data-v-71efc52e] {\n  stroke: #FE6057;\n}\n.icons .icon[data-v-71efc52e]:nth-child(9) {\n  top: 14%;\n  right: 11%;\n}\n.icons .icon:nth-child(9) circle[data-v-71efc52e],\n.icons .icon:nth-child(9) line[data-v-71efc52e] {\n  stroke: #9D66FE;\n}\n.icons .icon[data-v-71efc52e]:nth-child(10) {\n  top: 29%;\n  right: 7%;\n  transform: rotate(19deg);\n}\n.icons .icon[data-v-71efc52e]:nth-child(11) {\n  top: 38%;\n  right: 3%;\n}\n.icons .icon:nth-child(11) polygon[data-v-71efc52e] {\n  stroke: #FFBD2D;\n}\n.icons .icon[data-v-71efc52e]:nth-child(12) {\n  top: 50%;\n  right: 11.5%;\n  transform: rotate(-22deg);\n}\n.icons .icon[data-v-71efc52e]:nth-child(13) {\n  top: 34%;\n  right: 16%;\n  transform: rotate(13deg);\n}\n.icons .icon:nth-child(13) rect[data-v-71efc52e] {\n  stroke: #00BC7E;\n}\n.hero-screenshot[data-v-71efc52e] {\n  position: relative;\n  z-index: 1;\n  padding-top: 75px;\n  padding-bottom: 130px;\n}\n.hero-screenshot img[data-v-71efc52e] {\n  border-radius: 8px;\n  width: 80%;\n  box-shadow: 0 7px 255px rgba(25, 54, 60, 0.1);\n}\n.hero-screenshot img.hero-dark[data-v-71efc52e] {\n  display: none;\n}\n@media only screen and (max-width: 890px) {\n.icons[data-v-71efc52e] {\n    display: none;\n}\n.hero-screenshot[data-v-71efc52e] {\n    padding-top: 40px;\n    padding-bottom: 90px;\n}\n.hero-screenshot img[data-v-71efc52e] {\n    width: 100%;\n}\n}\n.dark .hero-screenshot img.hero-light[data-v-71efc52e] {\n  display: none;\n}\n.dark .hero-screenshot img.hero-dark[data-v-71efc52e] {\n  display: block;\n  box-shadow: 0 7px 185px rgba(0, 0, 0, 0.8);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-2f87e6bf] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-2f87e6bf] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-2f87e6bf] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-2f87e6bf] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-2f87e6bf] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-2f87e6bf] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-2f87e6bf] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-2f87e6bf] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-2f87e6bf] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-2f87e6bf] {\n    width: 100%;\n}\n}\n.features[data-v-2f87e6bf] {\n  padding-left: 75px;\n}\n.features .feature[data-v-2f87e6bf] {\n  margin-bottom: 25px;\n}\n.features .feature .title[data-v-2f87e6bf] {\n  font-size: 1.625em;\n  font-weight: 800;\n  margin-bottom: 4px;\n}\n.features .feature .description[data-v-2f87e6bf] {\n  line-height: 1.5;\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 1.125em;\n}\n.features .feature .icon[data-v-2f87e6bf] {\n  border-radius: 12px;\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 18px;\n}\n.features .feature .icon svg[data-v-2f87e6bf] {\n  margin: 0 auto;\n}\n.features .feature:nth-child(1) .icon[data-v-2f87e6bf] {\n  background: rgba(255, 189, 45, 0.1);\n}\n.features .feature:nth-child(1) .icon path[data-v-2f87e6bf],\n.features .feature:nth-child(1) .icon line[data-v-2f87e6bf],\n.features .feature:nth-child(1) .icon polyline[data-v-2f87e6bf],\n.features .feature:nth-child(1) .icon rect[data-v-2f87e6bf],\n.features .feature:nth-child(1) .icon circle[data-v-2f87e6bf] {\n  stroke: #FFBD2D;\n}\n.features .feature:nth-child(2) .icon[data-v-2f87e6bf] {\n  background: rgba(0, 188, 126, 0.1);\n}\n.features .feature:nth-child(2) .icon path[data-v-2f87e6bf],\n.features .feature:nth-child(2) .icon line[data-v-2f87e6bf],\n.features .feature:nth-child(2) .icon polyline[data-v-2f87e6bf],\n.features .feature:nth-child(2) .icon rect[data-v-2f87e6bf],\n.features .feature:nth-child(2) .icon circle[data-v-2f87e6bf] {\n  stroke: #00BC7E;\n}\n.features .feature:nth-child(3) .icon[data-v-2f87e6bf] {\n  background: rgba(157, 102, 254, 0.1);\n}\n.features .feature:nth-child(3) .icon path[data-v-2f87e6bf],\n.features .feature:nth-child(3) .icon line[data-v-2f87e6bf],\n.features .feature:nth-child(3) .icon polyline[data-v-2f87e6bf],\n.features .feature:nth-child(3) .icon rect[data-v-2f87e6bf],\n.features .feature:nth-child(3) .icon circle[data-v-2f87e6bf] {\n  stroke: #9D66FE;\n}\n.content[data-v-2f87e6bf] {\n  margin-top: 107px;\n  display: flex;\n}\n@media only screen and (max-width: 1190px) {\n.hero[data-v-2f87e6bf] {\n    flex: 0 0 60%;\n}\n.hero img[data-v-2f87e6bf] {\n    width: 100%;\n}\n.features[data-v-2f87e6bf] {\n    padding-left: 25px;\n    margin-top: 0px;\n}\n}\n@media only screen and (max-width: 960px) {\n.content[data-v-2f87e6bf] {\n    display: block;\n    margin-top: 40px;\n}\n.features[data-v-2f87e6bf] {\n    margin-top: 50px;\n    padding-left: 0;\n}\n.features .feature[data-v-2f87e6bf] {\n    margin-bottom: 35px;\n}\n.features .feature .title[data-v-2f87e6bf] {\n    font-size: 1.375em;\n}\n.features .feature .description[data-v-2f87e6bf] {\n    font-size: 1em;\n}\n}\n.dark .features .feature .description[data-v-2f87e6bf] {\n  color: #7d858c;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-11c30cfd] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-11c30cfd] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-11c30cfd] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-11c30cfd] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-11c30cfd] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-11c30cfd] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-11c30cfd] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-11c30cfd] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-11c30cfd] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-11c30cfd] {\n    width: 100%;\n}\n}\n.main-navigation[data-v-11c30cfd] {\n  justify-content: space-between;\n  padding-bottom: 25px;\n  align-items: center;\n  padding-top: 25px;\n  display: flex;\n}\n.logo[data-v-11c30cfd] {\n  cursor: pointer;\n}\n.logo img[data-v-11c30cfd] {\n  cursor: pointer;\n  height: 38px;\n  width: auto;\n}\n.logo .logo-text[data-v-11c30cfd] {\n  font-weight: 800;\n  font-size: 1.5625em;\n}\n.navigation-links[data-v-11c30cfd] {\n  display: inline-block;\n  margin-left: 25px;\n}\n.navigation-links[data-v-11c30cfd]:first-child {\n  margin-left: 0;\n}\n.navigation-links li[data-v-11c30cfd] {\n  display: inline-block;\n}\n.navigation-links li a[data-v-11c30cfd] {\n  padding: 14px;\n  font-weight: 700;\n  font-size: 1.0625em;\n  transition: 150ms all ease;\n}\n.cta-button[data-v-11c30cfd] {\n  border-radius: 6px;\n  padding: 8px 23px;\n  font-size: 1.0625em;\n  font-weight: 700;\n}\n.cta-button.log-in[data-v-11c30cfd] {\n  display: none;\n}\n@media only screen and (max-width: 690px) {\n.navigation[data-v-11c30cfd] {\n    display: none;\n}\n.logo img[data-v-11c30cfd] {\n    height: auto;\n    width: 190px;\n}\n.cta-button.log-in[data-v-11c30cfd] {\n    display: block;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-4b1f961a] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-4b1f961a] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-4b1f961a] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-4b1f961a] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-4b1f961a] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-4b1f961a] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-4b1f961a] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-4b1f961a] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-4b1f961a] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-4b1f961a] {\n    width: 100%;\n}\n}\nfooter[data-v-4b1f961a] {\n  text-align: center;\n  padding-top: 80px;\n}\n.logo[data-v-4b1f961a] {\n  margin-bottom: 15px;\n  cursor: pointer;\n}\n.logo img[data-v-4b1f961a] {\n  height: 38px;\n  width: auto;\n}\n.logo .logo-text[data-v-4b1f961a] {\n  font-weight: 800;\n  font-size: 1.5625em;\n}\n.navigation-links[data-v-4b1f961a] {\n  display: inline-block;\n}\n.navigation-links li[data-v-4b1f961a] {\n  display: inline-block;\n}\n.navigation-links li a[data-v-4b1f961a] {\n  display: block;\n  padding: 19px;\n  font-weight: 700;\n  font-size: 1.0625em;\n  transition: 150ms all ease;\n}\n.copyright[data-v-4b1f961a] {\n  font-size: 1.0625em;\n  color: rgba(27, 37, 57, 0.7);\n  padding-top: 50px;\n  padding-bottom: 20px;\n}\n.copyright[data-v-4b1f961a] a {\n  font-weight: 700;\n}\n@media only screen and (max-width: 960px) {\n.navigation-links[data-v-4b1f961a] {\n    display: block;\n}\n.navigation-links li[data-v-4b1f961a] {\n    display: block;\n}\n.navigation-links li a[data-v-4b1f961a] {\n    padding: 10px 0;\n}\n}\n.dark .copyright[data-v-4b1f961a] {\n  color: #7d858c;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-08bace36] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-08bace36] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-08bace36] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-08bace36] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-08bace36] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-08bace36] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-08bace36] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-08bace36] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-08bace36] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-08bace36] {\n    width: 100%;\n}\n}\n.features[data-v-08bace36] {\n  display: flex;\n  margin-top: 35px;\n}\n.features .feature[data-v-08bace36] {\n  display: flex;\n  margin-right: 35px;\n}\n.features .feature:nth-child(1) path[data-v-08bace36],\n.features .feature:nth-child(1) line[data-v-08bace36],\n.features .feature:nth-child(1) polyline[data-v-08bace36],\n.features .feature:nth-child(1) rect[data-v-08bace36],\n.features .feature:nth-child(1) circle[data-v-08bace36] {\n  stroke: #FFBD2D;\n}\n.features .feature:nth-child(2) path[data-v-08bace36],\n.features .feature:nth-child(2) line[data-v-08bace36],\n.features .feature:nth-child(2) polyline[data-v-08bace36],\n.features .feature:nth-child(2) rect[data-v-08bace36],\n.features .feature:nth-child(2) circle[data-v-08bace36] {\n  stroke: #9D66FE;\n}\n.features .feature[data-v-08bace36]:last-child {\n  margin-right: 0;\n}\n.features .feature .feature-title[data-v-08bace36] {\n  font-size: 0.875em;\n  font-weight: 700;\n}\n.features .feature .feature-icon[data-v-08bace36] {\n  margin-right: 10px;\n}\n.main-header[data-v-08bace36] {\n  padding-top: 70px;\n}\n.sign-up-button[data-v-08bace36] {\n  margin-top: 65px;\n  display: block;\n}\n.sign-up-button .button[data-v-08bace36] {\n  margin-left: 0;\n  margin-right: 0;\n}\n@media only screen and (max-width: 690px) {\n.main-header[data-v-08bace36] {\n    padding-top: 50px;\n}\n.features[data-v-08bace36] {\n    display: block;\n}\n.features .feature[data-v-08bace36] {\n    margin-right: 0;\n    margin-bottom: 15px;\n}\n.features .feature[data-v-08bace36]:last-child {\n    margin-bottom: 0;\n}\n.sign-up-button[data-v-08bace36] {\n    margin-top: 30px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-19994af2] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-19994af2] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-19994af2] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-19994af2] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-19994af2] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-19994af2] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-19994af2] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-19994af2] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-19994af2] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-19994af2] {\n    width: 100%;\n}\n}\n.pricing .cloud-bg[data-v-19994af2] {\n  z-index: 0;\n}\n.pricing .cloud-bg path[data-v-19994af2] {\n  stroke: none;\n  fill: rgba(0, 188, 126, 0.05);\n}\n.pricing .cloud-bg[data-v-19994af2]:first-of-type {\n  position: absolute;\n  top: 30px;\n  right: -130px;\n  transform: scale(-1, 1) rotate(-17deg);\n}\n.pricing .cloud-bg[data-v-19994af2]:last-of-type {\n  position: absolute;\n  bottom: 160px;\n  left: -230px;\n  transform: rotate(13deg);\n}\n.page-title[data-v-19994af2] {\n  position: relative;\n  z-index: 1;\n}\n.page-title.center[data-v-19994af2] {\n  text-align: center;\n}\n.page-title.center .title[data-v-19994af2] {\n  margin-left: auto;\n  margin-right: auto;\n}\n.page-title.center .description[data-v-19994af2] {\n  margin-left: auto;\n  margin-right: auto;\n}\n.page-title .title[data-v-19994af2] {\n  max-width: 580px;\n  font-size: 48px;\n  font-weight: 800;\n  line-height: 1.25;\n  margin-bottom: 15px;\n}\n.page-title .title[data-v-19994af2] span {\n  font-size: 48px;\n}\n.page-title .description[data-v-19994af2] {\n  max-width: 580px;\n  font-size: 1.25em;\n  font-weight: 500;\n  line-height: 1.6;\n  margin-bottom: 30px;\n}\n.pricing[data-v-19994af2] {\n  padding-top: 250px;\n  padding-bottom: 120px;\n}\n.pricing-tables[data-v-19994af2] {\n  margin-top: 50px;\n  margin-bottom: 60px;\n  position: relative;\n  z-index: 1;\n}\n.sign-up-button[data-v-19994af2] {\n  padding-top: 10px;\n  display: block;\n}\n@media only screen and (max-width: 1190px) {\n.cloud-bg[data-v-19994af2] {\n    display: none;\n}\n.pricing[data-v-19994af2] {\n    padding-top: 150px;\n    padding-bottom: 60px;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-title .title[data-v-19994af2] {\n    font-size: 28px;\n    line-height: 1.25;\n    margin-bottom: 15px;\n}\n.page-title .title[data-v-19994af2] span {\n    font-size: 28px;\n}\n.page-title .description[data-v-19994af2] {\n    font-size: 1em;\n    line-height: 1.6;\n    margin-bottom: 30px;\n}\n.pricing[data-v-19994af2] {\n    padding-top: 50px;\n    padding-bottom: 120px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".input-wrapper[data-v-537cb35b] {\n  display: flex;\n  width: 100%;\n}\n.input-wrapper .input-label[data-v-537cb35b] {\n  color: #1B2539;\n}\n.input-wrapper .switch-content[data-v-537cb35b] {\n  width: 100%;\n}\n.input-wrapper .switch-content[data-v-537cb35b]:last-child {\n  width: 80px;\n}\n.switch[data-v-537cb35b] {\n  width: 50px;\n  height: 28px;\n  border-radius: 50px;\n  display: block;\n  background: #f1f1f5;\n  position: relative;\n  transition: 0.3s all ease;\n}\n.switch .switch-button[data-v-537cb35b] {\n  transition: 0.3s all ease;\n  width: 22px;\n  height: 22px;\n  border-radius: 50px;\n  display: block;\n  background: white;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  box-shadow: 0 2px 4px rgba(37, 38, 94, 0.1);\n  cursor: pointer;\n}\n.switch.active .switch-button[data-v-537cb35b] {\n  left: 25px;\n}\n.dark .switch[data-v-537cb35b] {\n  background: #1e2024;\n}\n.dark .popup-wrapper .switch[data-v-537cb35b] {\n  background: #25272c;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".sync-alt[data-v-97e201b0] {\n  -webkit-animation: spin-97e201b0 1s linear infinite;\n          animation: spin-97e201b0 1s linear infinite;\n}\n@-webkit-keyframes spin-97e201b0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-97e201b0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_4818f36e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_4818f36e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_4818f36e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_style_index_0_id_513863ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_style_index_0_id_513863ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_style_index_0_id_513863ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_style_index_0_id_e018e898_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_style_index_0_id_e018e898_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_style_index_0_id_e018e898_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_style_index_0_id_71efc52e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_style_index_0_id_71efc52e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_style_index_0_id_71efc52e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_style_index_0_id_2f87e6bf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_style_index_0_id_2f87e6bf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_style_index_0_id_2f87e6bf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_style_index_0_id_11c30cfd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_style_index_0_id_11c30cfd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_style_index_0_id_11c30cfd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_style_index_0_id_4b1f961a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_style_index_0_id_4b1f961a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_style_index_0_id_4b1f961a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_style_index_0_id_08bace36_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_style_index_0_id_08bace36_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_style_index_0_id_08bace36_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_style_index_0_id_19994af2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_style_index_0_id_19994af2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_style_index_0_id_19994af2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_537cb35b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_537cb35b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_537cb35b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_style_index_0_id_97e201b0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_style_index_0_id_97e201b0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_style_index_0_id_97e201b0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-feather-icons/icons/HardDriveIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue-feather-icons/icons/HardDriveIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-helper-vue-jsx-merge-props */ "./node_modules/babel-helper-vue-jsx-merge-props/index.js");
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'HardDriveIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-hard-drive"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "22",
        y1: "12",
        x2: "2",
        y2: "12"
      }
    }), h("path", {
      attrs: {
        d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "16",
        x2: "6.01",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "16",
        x2: "10.01",
        y2: "16"
      }
    })]);
  }
});

/***/ }),

/***/ "./resources/js/components/IndexPage/Components/PageTitle.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/IndexPage/Components/PageTitle.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageTitle_vue_vue_type_template_id_4818f36e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=template&id=4818f36e&scoped=true& */ "./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=template&id=4818f36e&scoped=true&");
/* harmony import */ var _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=script&lang=js& */ "./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=script&lang=js&");
/* harmony import */ var _PageTitle_vue_vue_type_style_index_0_id_4818f36e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true& */ "./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageTitle_vue_vue_type_template_id_4818f36e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PageTitle_vue_vue_type_template_id_4818f36e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4818f36e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/IndexPage/Components/PageTitle.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/IndexPage/Components/PricingTables.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/IndexPage/Components/PricingTables.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PricingTables_vue_vue_type_template_id_513863ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PricingTables.vue?vue&type=template&id=513863ea&scoped=true& */ "./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=template&id=513863ea&scoped=true&");
/* harmony import */ var _PricingTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PricingTables.vue?vue&type=script&lang=js& */ "./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=script&lang=js&");
/* harmony import */ var _PricingTables_vue_vue_type_style_index_0_id_513863ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true& */ "./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PricingTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PricingTables_vue_vue_type_template_id_513863ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PricingTables_vue_vue_type_template_id_513863ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "513863ea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/IndexPage/Components/PricingTables.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexGetStarted.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexGetStarted.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexGetStarted_vue_vue_type_template_id_e018e898_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexGetStarted.vue?vue&type=template&id=e018e898&scoped=true& */ "./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=template&id=e018e898&scoped=true&");
/* harmony import */ var _IndexGetStarted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexGetStarted.vue?vue&type=script&lang=js& */ "./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=script&lang=js&");
/* harmony import */ var _IndexGetStarted_vue_vue_type_style_index_0_id_e018e898_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true& */ "./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IndexGetStarted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexGetStarted_vue_vue_type_template_id_e018e898_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexGetStarted_vue_vue_type_template_id_e018e898_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e018e898",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/IndexPage/IndexGetStarted.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexHeroScreenshot.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexHeroScreenshot.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexHeroScreenshot_vue_vue_type_template_id_71efc52e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexHeroScreenshot.vue?vue&type=template&id=71efc52e&scoped=true& */ "./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=template&id=71efc52e&scoped=true&");
/* harmony import */ var _IndexHeroScreenshot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexHeroScreenshot.vue?vue&type=script&lang=js& */ "./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=script&lang=js&");
/* harmony import */ var _IndexHeroScreenshot_vue_vue_type_style_index_0_id_71efc52e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true& */ "./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IndexHeroScreenshot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexHeroScreenshot_vue_vue_type_template_id_71efc52e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexHeroScreenshot_vue_vue_type_template_id_71efc52e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "71efc52e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/IndexPage/IndexHeroScreenshot.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexMainFeatures.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexMainFeatures.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexMainFeatures_vue_vue_type_template_id_2f87e6bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexMainFeatures.vue?vue&type=template&id=2f87e6bf&scoped=true& */ "./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=template&id=2f87e6bf&scoped=true&");
/* harmony import */ var _IndexMainFeatures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexMainFeatures.vue?vue&type=script&lang=js& */ "./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=script&lang=js&");
/* harmony import */ var _IndexMainFeatures_vue_vue_type_style_index_0_id_2f87e6bf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true& */ "./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IndexMainFeatures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexMainFeatures_vue_vue_type_template_id_2f87e6bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexMainFeatures_vue_vue_type_template_id_2f87e6bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2f87e6bf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/IndexPage/IndexMainFeatures.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexNavigation.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexNavigation.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexNavigation_vue_vue_type_template_id_11c30cfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true& */ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true&");
/* harmony import */ var _IndexNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexNavigation.vue?vue&type=script&lang=js& */ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _IndexNavigation_vue_vue_type_style_index_0_id_11c30cfd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true& */ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IndexNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexNavigation_vue_vue_type_template_id_11c30cfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexNavigation_vue_vue_type_template_id_11c30cfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "11c30cfd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/IndexPage/IndexNavigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageFooter.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageFooter.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexPageFooter_vue_vue_type_template_id_4b1f961a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true& */ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true&");
/* harmony import */ var _IndexPageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexPageFooter.vue?vue&type=script&lang=js& */ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js&");
/* harmony import */ var _IndexPageFooter_vue_vue_type_style_index_0_id_4b1f961a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true& */ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IndexPageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexPageFooter_vue_vue_type_template_id_4b1f961a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexPageFooter_vue_vue_type_template_id_4b1f961a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4b1f961a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/IndexPage/IndexPageFooter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageHeader.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageHeader.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexPageHeader_vue_vue_type_template_id_08bace36_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexPageHeader.vue?vue&type=template&id=08bace36&scoped=true& */ "./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=template&id=08bace36&scoped=true&");
/* harmony import */ var _IndexPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexPageHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=script&lang=js&");
/* harmony import */ var _IndexPageHeader_vue_vue_type_style_index_0_id_08bace36_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true& */ "./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IndexPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexPageHeader_vue_vue_type_template_id_08bace36_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexPageHeader_vue_vue_type_template_id_08bace36_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "08bace36",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/IndexPage/IndexPageHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPricingTables.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPricingTables.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexPricingTables_vue_vue_type_template_id_19994af2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexPricingTables.vue?vue&type=template&id=19994af2&scoped=true& */ "./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=template&id=19994af2&scoped=true&");
/* harmony import */ var _IndexPricingTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexPricingTables.vue?vue&type=script&lang=js& */ "./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=script&lang=js&");
/* harmony import */ var _IndexPricingTables_vue_vue_type_style_index_0_id_19994af2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true& */ "./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IndexPricingTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexPricingTables_vue_vue_type_template_id_19994af2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexPricingTables_vue_vue_type_template_id_19994af2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "19994af2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/IndexPage/IndexPricingTables.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Inputs/SwitchInput.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Inputs/SwitchInput.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SwitchInput_vue_vue_type_template_id_537cb35b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true& */ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true&");
/* harmony import */ var _SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=script&lang=js& */ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _SwitchInput_vue_vue_type_style_index_0_id_537cb35b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true& */ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwitchInput_vue_vue_type_template_id_537cb35b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SwitchInput_vue_vue_type_template_id_537cb35b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "537cb35b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Inputs/SwitchInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Subscription/PlanPeriodSwitcher.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Subscription/PlanPeriodSwitcher.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlanPeriodSwitcher_vue_vue_type_template_id_65b62582___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlanPeriodSwitcher.vue?vue&type=template&id=65b62582& */ "./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=template&id=65b62582&");
/* harmony import */ var _PlanPeriodSwitcher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlanPeriodSwitcher.vue?vue&type=script&lang=js& */ "./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PlanPeriodSwitcher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PlanPeriodSwitcher_vue_vue_type_template_id_65b62582___WEBPACK_IMPORTED_MODULE_0__.render,
  _PlanPeriodSwitcher_vue_vue_type_template_id_65b62582___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Subscription/PlanPeriodSwitcher.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UI/Buttons/AuthButton.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/UI/Buttons/AuthButton.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthButton_vue_vue_type_template_id_97e201b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthButton.vue?vue&type=template&id=97e201b0&scoped=true& */ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true&");
/* harmony import */ var _AuthButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthButton.vue?vue&type=script&lang=js& */ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _AuthButton_vue_vue_type_style_index_0_id_97e201b0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss& */ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AuthButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthButton_vue_vue_type_template_id_97e201b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AuthButton_vue_vue_type_template_id_97e201b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "97e201b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UI/Buttons/AuthButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Frontpage/Homepage.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/Frontpage/Homepage.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Homepage_vue_vue_type_template_id_61ef4ce4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Homepage.vue?vue&type=template&id=61ef4ce4& */ "./resources/js/views/Frontpage/Homepage.vue?vue&type=template&id=61ef4ce4&");
/* harmony import */ var _Homepage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Homepage.vue?vue&type=script&lang=js& */ "./resources/js/views/Frontpage/Homepage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Homepage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Homepage_vue_vue_type_template_id_61ef4ce4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Homepage_vue_vue_type_template_id_61ef4ce4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Frontpage/Homepage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageTitle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PricingTables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexGetStarted.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexHeroScreenshot.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexMainFeatures.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexNavigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPageFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPageHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPricingTables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanPeriodSwitcher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PlanPeriodSwitcher.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanPeriodSwitcher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Frontpage/Homepage.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Frontpage/Homepage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Homepage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Homepage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frontpage/Homepage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Homepage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=template&id=4818f36e&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=template&id=4818f36e&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_4818f36e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_4818f36e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_4818f36e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageTitle.vue?vue&type=template&id=4818f36e&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=template&id=4818f36e&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=template&id=513863ea&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=template&id=513863ea&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_template_id_513863ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_template_id_513863ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_template_id_513863ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PricingTables.vue?vue&type=template&id=513863ea&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=template&id=513863ea&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=template&id=e018e898&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=template&id=e018e898&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_template_id_e018e898_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_template_id_e018e898_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_template_id_e018e898_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexGetStarted.vue?vue&type=template&id=e018e898&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=template&id=e018e898&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=template&id=71efc52e&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=template&id=71efc52e&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_template_id_71efc52e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_template_id_71efc52e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_template_id_71efc52e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexHeroScreenshot.vue?vue&type=template&id=71efc52e&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=template&id=71efc52e&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=template&id=2f87e6bf&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=template&id=2f87e6bf&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_template_id_2f87e6bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_template_id_2f87e6bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_template_id_2f87e6bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexMainFeatures.vue?vue&type=template&id=2f87e6bf&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=template&id=2f87e6bf&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_template_id_11c30cfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_template_id_11c30cfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_template_id_11c30cfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_template_id_4b1f961a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_template_id_4b1f961a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_template_id_4b1f961a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=template&id=08bace36&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=template&id=08bace36&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_template_id_08bace36_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_template_id_08bace36_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_template_id_08bace36_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPageHeader.vue?vue&type=template&id=08bace36&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=template&id=08bace36&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=template&id=19994af2&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=template&id=19994af2&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_template_id_19994af2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_template_id_19994af2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_template_id_19994af2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPricingTables.vue?vue&type=template&id=19994af2&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=template&id=19994af2&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_537cb35b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_537cb35b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_537cb35b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=template&id=65b62582&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=template&id=65b62582& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanPeriodSwitcher_vue_vue_type_template_id_65b62582___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanPeriodSwitcher_vue_vue_type_template_id_65b62582___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanPeriodSwitcher_vue_vue_type_template_id_65b62582___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PlanPeriodSwitcher.vue?vue&type=template&id=65b62582& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=template&id=65b62582&");


/***/ }),

/***/ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_template_id_97e201b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_template_id_97e201b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_template_id_97e201b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthButton.vue?vue&type=template&id=97e201b0&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true&");


/***/ }),

/***/ "./resources/js/views/Frontpage/Homepage.vue?vue&type=template&id=61ef4ce4&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Frontpage/Homepage.vue?vue&type=template&id=61ef4ce4& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Homepage_vue_vue_type_template_id_61ef4ce4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Homepage_vue_vue_type_template_id_61ef4ce4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Homepage_vue_vue_type_template_id_61ef4ce4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Homepage.vue?vue&type=template&id=61ef4ce4& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frontpage/Homepage.vue?vue&type=template&id=61ef4ce4&");


/***/ }),

/***/ "./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_4818f36e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_style_index_0_id_513863ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_style_index_0_id_e018e898_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_style_index_0_id_71efc52e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_style_index_0_id_2f87e6bf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_style_index_0_id_11c30cfd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_style_index_0_id_4b1f961a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_style_index_0_id_08bace36_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_style_index_0_id_19994af2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_537cb35b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_style_index_0_id_97e201b0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss&");


/***/ })

}]);