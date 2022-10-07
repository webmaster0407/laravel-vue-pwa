"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["chunks/dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/AppSpecification.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/AppSpecification.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _UI_Labels_ColorLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/Labels/ColorLabel */ "./resources/js/components/UI/Labels/ColorLabel.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AppSpecification',
  components: {
    ThumbsUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.ThumbsUpIcon,
    ColorLabel: _UI_Labels_ColorLabel__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    data: {}
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['config', 'isDarkMode']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Widgets/WidgetLatestRegistrations.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Widgets/WidgetLatestRegistrations.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI_Table_DatatableCellImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../UI/Table/DatatableCellImage */ "./resources/js/components/UI/Table/DatatableCellImage.vue");
/* harmony import */ var _UI_Table_DatatableWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UI/Table/DatatableWrapper */ "./resources/js/components/UI/Table/DatatableWrapper.vue");
/* harmony import */ var _UI_Labels_ColorLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Labels/ColorLabel */ "./resources/js/components/UI/Labels/ColorLabel.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _UI_Others_MemberAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/Others/MemberAvatar */ "./resources/js/components/UI/Others/MemberAvatar.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'WidgetLatestRegistrations',
  props: ['icon', 'title'],
  components: {
    DatatableCellImage: _UI_Table_DatatableCellImage__WEBPACK_IMPORTED_MODULE_0__["default"],
    DatatableWrapper: _UI_Table_DatatableWrapper__WEBPACK_IMPORTED_MODULE_1__["default"],
    MemberAvatar: _UI_Others_MemberAvatar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Trash2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.Trash2Icon,
    ColorLabel: _UI_Labels_ColorLabel__WEBPACK_IMPORTED_MODULE_2__["default"],
    Edit2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.Edit2Icon
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapGetters)(['config'])), {}, {
    columns: function columns() {
      return {
        metered: [{
          label: this.$t('user'),
          field: 'email',
          sortable: true
        }, {
          label: this.$t('role'),
          field: 'role',
          sortable: true
        }, {
          label: this.$t('storage_used'),
          sortable: false
        }, {
          label: this.$t('billing_est.'),
          sortable: false
        }, {
          label: this.$t('created_at'),
          field: 'created_at',
          sortable: true
        }, {
          label: this.$t('action'),
          sortable: false
        }],
        fixed: [{
          label: this.$t('user'),
          field: 'email',
          sortable: true
        }, {
          label: this.$t('role'),
          field: 'role',
          sortable: true
        }, {
          label: this.$t('storage_used'),
          sortable: false
        }, {
          label: this.$t('max_storage'),
          sortable: false,
          hidden: !this.config.storageLimit
        }, {
          label: this.$t('created_at'),
          field: 'created_at',
          sortable: true
        }, {
          label: this.$t('action'),
          sortable: false
        }],
        none: [{
          label: this.$t('user'),
          field: 'email',
          sortable: true
        }, {
          label: this.$t('role'),
          field: 'role',
          sortable: true
        }, {
          label: this.$t('storage_used'),
          sortable: false
        }, {
          label: this.$t('max_storage'),
          sortable: false,
          hidden: !this.config.storageLimit
        }, {
          label: this.$t('created_at'),
          field: 'created_at',
          sortable: true
        }, {
          label: this.$t('action'),
          sortable: false
        }]
      }[this.config.subscriptionType];
    }
  }),
  data: function data() {
    return {
      isLoading: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Widgets/WidgetLatestTransactions.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Widgets/WidgetLatestTransactions.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI_Table_DatatableCellImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../UI/Table/DatatableCellImage */ "./resources/js/components/UI/Table/DatatableCellImage.vue");
/* harmony import */ var _UI_Table_DatatableWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UI/Table/DatatableWrapper */ "./resources/js/components/UI/Table/DatatableWrapper.vue");
/* harmony import */ var _UI_Labels_ColorLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Labels/ColorLabel */ "./resources/js/components/UI/Labels/ColorLabel.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _UI_Others_MemberAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/Others/MemberAvatar */ "./resources/js/components/UI/Others/MemberAvatar.vue");
/* harmony import */ var _UI_Others_InfoBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Others/InfoBox */ "./resources/js/components/UI/Others/InfoBox.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'WidgetLatestTransactions',
  props: ['icon', 'title'],
  components: {
    DatatableCellImage: _UI_Table_DatatableCellImage__WEBPACK_IMPORTED_MODULE_0__["default"],
    DatatableWrapper: _UI_Table_DatatableWrapper__WEBPACK_IMPORTED_MODULE_1__["default"],
    MemberAvatar: _UI_Others_MemberAvatar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Trash2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.Trash2Icon,
    ColorLabel: _UI_Labels_ColorLabel__WEBPACK_IMPORTED_MODULE_2__["default"],
    Edit2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.Edit2Icon,
    InfoBox: _UI_Others_InfoBox__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapGetters)(['config'])),
  data: function data() {
    return {
      columns: [{
        label: this.$t('note'),
        field: 'note',
        sortable: true
      }, {
        label: this.$t('user'),
        field: 'user_id',
        sortable: true
      }, {
        label: this.$t('status'),
        field: 'status',
        sortable: true
      }, {
        label: this.$t('total'),
        field: 'amount',
        sortable: true
      }, {
        label: this.$t('payed_at'),
        field: 'created_at',
        sortable: true
      }, {
        label: this.$t('service'),
        field: 'driver',
        sortable: true
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/BarChart/Bar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/BarChart/Bar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Bar',
  props: ['bar'],
  data: function data() {
    return {
      isVisible: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/BarChart/BarChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/BarChart/BarChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bar */ "./resources/js/components/UI/BarChart/Bar.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'BarChart',
  props: ['color', 'data'],
  components: {
    Bar: _Bar__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ColorLabel',
  props: ['color']
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/AlertBox.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/AlertBox.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AlertBox',
  props: ['isLoading', 'color'],
  components: {
    AlertOctagonIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.AlertOctagonIcon,
    RefreshCwIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.RefreshCwIcon
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCell.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCell.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['data'],
  computed: {
    normalizedColumns: function normalizedColumns() {
      // Remove ID from object
      if (this.data['id']) delete this.data['id']; // Return object

      return Object.values(this.data);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Others_MemberAvatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Others/MemberAvatar */ "./resources/js/components/UI/Others/MemberAvatar.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DatatableCellImage',
  props: ['member', 'title', 'description', 'image-size'],
  components: {
    MemberAvatar: _Others_MemberAvatar__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableWrapper.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableWrapper.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _DatatableCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatatableCell */ "./resources/js/components/UI/Table/DatatableCell.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DatatableWrapper',
  props: ['paginator', 'tableData', 'columns', 'scope', 'api'],
  components: {
    ChevronRightIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronRightIcon,
    ChevronLeftIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronLeftIcon,
    DatatableCell: _DatatableCell__WEBPACK_IMPORTED_MODULE_0__["default"],
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronUpIcon
  },
  computed: {
    hasData: function hasData() {
      return this.data && this.data.data && this.data.data.length > 0;
    },
    floatPages: function floatPages() {
      return [this.pageIndex - 1, this.pageIndex, this.pageIndex + 1];
    }
  },
  data: function data() {
    return {
      data: undefined,
      isLoading: true,
      pageIndex: 1,
      filter: {
        sort: 'DESC',
        field: undefined
      }
    };
  },
  methods: {
    goToPage: function goToPage(index) {
      if (index > this.data.meta.last_page || index === 0) return;
      this.pageIndex = index;
      this.getPage(index);
    },
    sort: function sort(field, sortable) {
      // Prevent sortable if is disabled
      if (!sortable) return; // Set filter

      this.filter.field = field; // Set sorting direction

      if (this.filter.sort === 'DESC') {
        this.filter.sort = 'ASC';
      } else if (this.filter.sort === 'ASC') {
        this.filter.sort = 'DESC';
      }

      this.getPage(this.pageIndex);
    },
    getPage: function getPage(page) {
      var _this = this;

      // Get api URI
      this.URI = this.api; // Set page index

      if (this.paginator) this.URI = this.URI + '?page=' + page; // Add filder URI if is defined sorting

      if (this.filter.field) this.URI = this.URI + (this.paginator ? '&' : '?') + 'sort=' + this.filter.field + '&direction=' + this.filter.sort;
      this.isLoading = true; // Get data

      axios__WEBPACK_IMPORTED_MODULE_1___default().get(this.URI).then(function (response) {
        _this.data = response.data;

        _this.$emit('data', response.data);
      })["catch"](function () {
        return _this.$isSomethingWrong();
      })["finally"](function () {
        _this.$emit('init', true);

        _this.isLoading = false;
      });
    }
  },
  created: function created() {
    if (this.api) this.getPage(this.pageIndex);
    if (this.tableData) this.data = this.tableData, this.isLoading = false;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Dashboard_Widgets_WidgetLatestRegistrations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Dashboard/Widgets/WidgetLatestRegistrations */ "./resources/js/components/Dashboard/Widgets/WidgetLatestRegistrations.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _components_UI_Others_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UI/Others/Spinner */ "./resources/js/components/UI/Others/Spinner.vue");
/* harmony import */ var _components_UI_Labels_FormLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/UI/Labels/FormLabel */ "./resources/js/components/UI/Labels/FormLabel.vue");
/* harmony import */ var _components_UI_BarChart_BarChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/UI/BarChart/BarChart */ "./resources/js/components/UI/BarChart/BarChart.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Dashboard_Widgets_WidgetLatestTransactions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Dashboard/Widgets/WidgetLatestTransactions */ "./resources/js/components/Dashboard/Widgets/WidgetLatestTransactions.vue");
/* harmony import */ var _components_UI_Others_AlertBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UI/Others/AlertBox */ "./resources/js/components/UI/Others/AlertBox.vue");
/* harmony import */ var _components_Dashboard_AppSpecification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Dashboard/AppSpecification */ "./resources/js/components/Dashboard/AppSpecification.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Dashboard',
  components: {
    AppSpecification: _components_Dashboard_AppSpecification__WEBPACK_IMPORTED_MODULE_7__["default"],
    AlertBox: _components_UI_Others_AlertBox__WEBPACK_IMPORTED_MODULE_6__["default"],
    WidgetLatestTransactions: _components_Dashboard_Widgets_WidgetLatestTransactions__WEBPACK_IMPORTED_MODULE_5__["default"],
    WidgetLatestRegistrations: _components_Dashboard_Widgets_WidgetLatestRegistrations__WEBPACK_IMPORTED_MODULE_0__["default"],
    ChevronRightIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronRightIcon,
    FormLabel: _components_UI_Labels_FormLabel__WEBPACK_IMPORTED_MODULE_2__["default"],
    BarChart: _components_UI_BarChart_BarChart__WEBPACK_IMPORTED_MODULE_3__["default"],
    Spinner: _components_UI_Others_Spinner__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapGetters)(['config'])),
  data: function data() {
    return {
      isLoading: false,
      data: undefined
    };
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/admin/dashboard').then(function (response) {
      _this.data = response.data;
    })["finally"](function () {
      _this.isLoading = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/AppSpecification.vue?vue&type=template&id=2426dac8&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/AppSpecification.vue?vue&type=template&id=2426dac8& ***!
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
    staticClass: "mb-4 items-center justify-between md:mb-6"
  }, [_c("a", {
    attrs: {
      href: "https://vuefilemanager.com",
      target: "_blank"
    }
  }, [_c("img", {
    staticClass: "light-mode",
    attrs: {
      src: _vm.isDarkMode ? "/assets/images/vuefilemanager-horizontal-logo-dark.svg" : "/assets/images/vuefilemanager-horizontal-logo.svg",
      alt: "VueFileManager"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mt-4 flex items-center lg:mt-0"
  }, [_c("a", {
    staticClass: "mr-4 inline-block",
    attrs: {
      href: "https://gist.github.com/MakingCG/9c07f8af392081ae5d5290d920a79b5d",
      target: "_blank"
    }
  }, [_c("span", {
    staticClass: "text-sm font-bold"
  }, [_vm._v(" " + _vm._s(_vm.$t("version")) + ": ")]), _vm._v(" "), _c("ColorLabel", {
    attrs: {
      color: "purple"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.data.app.version) + "\n            ")])], 1), _vm._v(" "), _c("a", {
    staticClass: "mr-4 inline-block",
    attrs: {
      href: "https://codecanyon.net/item/vue-file-manager-with-laravel-backend/25815986",
      target: "_blank"
    }
  }, [_c("span", {
    staticClass: "text-sm font-bold"
  }, [_vm._v(" " + _vm._s(_vm.$t("license")) + ": ")]), _vm._v(" "), _c("ColorLabel", {
    attrs: {
      color: "purple"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.data.app.license) + "\n            ")])], 1), _vm._v(" "), _c("b", {
    staticClass: "mr-4 inline-block"
  }, [_c("span", {
    staticClass: "text-sm font-bold"
  }, [_vm._v(" " + _vm._s(_vm.$t("subscription")) + ": ")]), _vm._v(" "), _c("ColorLabel", {
    attrs: {
      color: "purple"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.config.subscriptionType) + "\n            ")])], 1), _vm._v(" "), _c("a", {
    staticClass: "bg-theme-100 ml-8 hidden items-center whitespace-nowrap rounded-lg py-1.5 px-3 lg:flex lg:ml-4",
    attrs: {
      href: "https://bit.ly/VueFileManager-survey",
      target: "_blank"
    }
  }, [_c("thumbs-up-icon", {
    staticClass: "vue-feather text-theme mr-2.5",
    attrs: {
      size: "15"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-theme text-sm font-bold"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("write_feedback")) + "\n            ")])], 1)])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Widgets/WidgetLatestRegistrations.vue?vue&type=template&id=735eaa39&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Widgets/WidgetLatestRegistrations.vue?vue&type=template&id=735eaa39& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("DatatableWrapper", {
    staticClass: "mt-6 overflow-x-auto",
    attrs: {
      api: "/api/admin/dashboard/newbies",
      paginator: false,
      columns: _vm.columns
    },
    on: {
      init: function init($event) {
        _vm.isLoading = false;
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var row = _ref.row;
        return [_vm.config.subscriptionType === "none" ? _c("tr", {
          staticClass: "whitespace-nowrap border-b border-dashed border-light dark:border-opacity-5"
        }, [_c("td", {
          staticClass: "py-3 pr-3 md:pr-1"
        }, [_c("router-link", {
          attrs: {
            to: {
              name: "UserDetail",
              params: {
                id: row.data.id
              }
            }
          }
        }, [_c("div", {
          staticClass: "flex items-center"
        }, [_c("MemberAvatar", {
          attrs: {
            "is-border": false,
            size: 44,
            member: row
          }
        }), _vm._v(" "), _c("div", {
          staticClass: "ml-3 pr-10"
        }, [_c("b", {
          staticClass: "max-w-1 block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold",
          staticStyle: {
            "max-width": "155px"
          }
        }, [_vm._v("\n                                " + _vm._s(row.data.relationships.settings.data.attributes.name) + "\n                            ")]), _vm._v(" "), _c("span", {
          staticClass: "block text-xs text-gray-600 dark:text-gray-500"
        }, [_vm._v("\n                                " + _vm._s(row.data.attributes.email) + "\n                            ")])])], 1)])], 1), _vm._v(" "), _c("td", {
          staticClass: "px-3 md:px-1"
        }, [_c("ColorLabel", {
          attrs: {
            color: _vm.$getUserRoleColor(row.data.attributes.role)
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t(row.data.attributes.role)) + "\n                ")])], 1), _vm._v(" "), _c("td", {
          staticClass: "px-3 md:px-1"
        }, [row.data.attributes.storage.capacity !== 0 ? _c("span", {
          staticClass: "text-sm font-bold"
        }, [_vm._v("\n                    " + _vm._s(row.data.attributes.storage.used_formatted) + "\n                ")]) : _vm._e(), _vm._v(" "), row.data.attributes.storage.capacity === 0 ? _c("span", {
          staticClass: "text-sm font-bold"
        }, [_vm._v(" - ")]) : _vm._e()]), _vm._v(" "), _vm.config.storageLimit ? _c("td", {
          staticClass: "px-3 md:px-1"
        }, [row.data.attributes.storage.capacity !== 0 ? _c("span", {
          staticClass: "text-sm font-bold"
        }, [_vm._v("\n                    " + _vm._s(row.data.attributes.storage.capacity_formatted) + "\n                ")]) : _vm._e(), _vm._v(" "), row.data.attributes.storage.capacity === 0 ? _c("span", {
          staticClass: "text-sm font-bold"
        }, [_vm._v(" - ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("td", {
          staticClass: "px-3 md:px-1"
        }, [_c("span", {
          staticClass: "text-sm font-bold"
        }, [_vm._v("\n                    " + _vm._s(row.data.attributes.created_at) + "\n                ")])]), _vm._v(" "), _c("td", {
          staticClass: "pl-3 text-right md:pl-1"
        }, [_c("div", {
          staticClass: "flex w-full justify-end space-x-2"
        }, [_c("router-link", {
          staticClass: "flex h-8 w-8 items-center justify-center rounded-md bg-light-background transition-colors hover:bg-green-100 dark:bg-2x-dark-foreground",
          attrs: {
            to: {
              name: "UserDetail",
              params: {
                id: row.data.id
              }
            }
          }
        }, [_c("Edit2Icon", {
          staticClass: "opacity-75",
          attrs: {
            size: "15"
          }
        })], 1), _vm._v(" "), _c("router-link", {
          staticClass: "flex h-8 w-8 items-center justify-center rounded-md bg-light-background transition-colors hover:bg-red-100 dark:bg-2x-dark-foreground",
          attrs: {
            to: {
              name: "UserDelete",
              params: {
                id: row.data.id
              }
            }
          }
        }, [_c("Trash2Icon", {
          staticClass: "opacity-75",
          attrs: {
            size: "15"
          }
        })], 1)], 1)])]) : _vm._e(), _vm._v(" "), _vm.config.subscriptionType === "fixed" ? _c("tr", {
          staticClass: "whitespace-nowrap border-b border-dashed border-light dark:border-opacity-5"
        }, [_c("td", {
          staticClass: "py-3 pr-3 md:pr-1"
        }, [_c("router-link", {
          attrs: {
            to: {
              name: "UserDetail",
              params: {
                id: row.data.id
              }
            }
          }
        }, [_c("div", {
          staticClass: "flex items-center"
        }, [_c("MemberAvatar", {
          attrs: {
            "is-border": false,
            size: 44,
            member: row
          }
        }), _vm._v(" "), _c("div", {
          staticClass: "ml-3 pr-10"
        }, [_c("b", {
          staticClass: "max-w-1 block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold",
          staticStyle: {
            "max-width": "155px"
          }
        }, [_vm._v("\n                                " + _vm._s(row.data.relationships.settings.data.attributes.name) + "\n                            ")]), _vm._v(" "), _c("span", {
          staticClass: "block text-xs text-gray-600 dark:text-gray-500"
        }, [_vm._v("\n                                " + _vm._s(row.data.attributes.email) + "\n                            ")])])], 1)])], 1), _vm._v(" "), _c("td", {
          staticClass: "px-3 md:px-1"
        }, [_c("ColorLabel", {
          attrs: {
            color: _vm.$getUserRoleColor(row.data.attributes.role)
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t(row.data.attributes.role)) + "\n                ")])], 1), _vm._v(" "), _vm.config.subscriptionType === "fixed" ? _c("td", {
          staticClass: "px-3 md:px-1"
        }, [_c("span", {
          staticClass: "text-sm font-bold"
        }, [_vm._v("\n                    " + _vm._s(row.data.relationships.subscription ? _vm.$t("premium") : _vm.$t("free")) + "\n                ")])]) : _vm._e(), _vm._v(" "), _c("td", {
          staticClass: "px-3 md:px-1"
        }, [row.data.attributes.storage.capacity !== 0 ? _c("span", {
          staticClass: "text-sm font-bold"
        }, [_vm._v("\n                    " + _vm._s(row.data.attributes.storage.used_formatted) + "\n                ")]) : _vm._e(), _vm._v(" "), row.data.attributes.storage.capacity === 0 ? _c("span", {
          staticClass: "text-sm font-bold"
        }, [_vm._v(" - ")]) : _vm._e()]), _vm._v(" "), _vm.config.storageLimit ? _c("td", {
          staticClass: "px-3 md:px-1"
        }, [row.data.attributes.storage.capacity !== 0 ? _c("span", {
          staticClass: "text-sm font-bold"
        }, [_vm._v("\n                    " + _vm._s(row.data.attributes.storage.capacity_formatted) + "\n                ")]) : _vm._e(), _vm._v(" "), row.data.attributes.storage.capacity === 0 ? _c("span", {
          staticClass: "text-sm font-bold"
        }, [_vm._v(" - ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("td", {
          staticClass: "px-3 md:px-1"
        }, [_c("span", {
          staticClass: "text-sm font-bold"
        }, [_vm._v("\n                    " + _vm._s(row.data.attributes.created_at) + "\n                ")])]), _vm._v(" "), _c("td", {
          staticClass: "pl-3 text-right md:pl-1"
        }, [_c("div", {
          staticClass: "flex w-full justify-end space-x-2"
        }, [_c("router-link", {
          staticClass: "flex h-8 w-8 items-center justify-center rounded-md bg-light-background transition-colors hover:bg-green-100 dark:bg-2x-dark-foreground",
          attrs: {
            to: {
              name: "UserDetail",
              params: {
                id: row.data.id
              }
            }
          }
        }, [_c("Edit2Icon", {
          staticClass: "opacity-75",
          attrs: {
            size: "15"
          }
        })], 1), _vm._v(" "), _c("router-link", {
          staticClass: "flex h-8 w-8 items-center justify-center rounded-md bg-light-background transition-colors hover:bg-red-100 dark:bg-2x-dark-foreground",
          attrs: {
            to: {
              name: "UserDelete",
              params: {
                id: row.data.id
              }
            }
          }
        }, [_c("Trash2Icon", {
          staticClass: "opacity-75",
          attrs: {
            size: "15"
          }
        })], 1)], 1)])]) : _vm._e(), _vm._v(" "), _vm.config.subscriptionType === "metered" ? _c("tr", {
          staticClass: "whitespace-nowrap border-b border-dashed border-light dark:border-opacity-5"
        }, [_c("td", {
          staticClass: "py-3 pr-3 md:pr-1"
        }, [_c("router-link", {
          attrs: {
            to: {
              name: "UserDetail",
              params: {
                id: row.data.id
              }
            }
          }
        }, [_c("div", {
          staticClass: "flex items-center"
        }, [_c("MemberAvatar", {
          attrs: {
            "is-border": false,
            size: 44,
            member: row
          }
        }), _vm._v(" "), _c("div", {
          staticClass: "ml-3 pr-10"
        }, [_c("b", {
          staticClass: "max-w-1 block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold",
          staticStyle: {
            "max-width": "155px"
          }
        }, [_vm._v("\n                                " + _vm._s(row.data.relationships.settings.data.attributes.name) + "\n                            ")]), _vm._v(" "), _c("span", {
          staticClass: "block text-xs text-gray-600 dark:text-gray-500"
        }, [_vm._v("\n                                " + _vm._s(row.data.attributes.email) + "\n                            ")])])], 1)])], 1), _vm._v(" "), _c("td", {
          staticClass: "px-3 md:px-1"
        }, [_c("ColorLabel", {
          attrs: {
            color: _vm.$getUserRoleColor(row.data.attributes.role)
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t(row.data.attributes.role)) + "\n                ")])], 1), _vm._v(" "), _c("td", {
          staticClass: "px-3 md:px-1"
        }, [_c("span", {
          staticClass: "text-sm font-bold"
        }, [_vm._v("\n                    " + _vm._s(row.data.meta.usages ? row.data.meta.usages.featureEstimates.storage.usage : "-") + "\n                ")])]), _vm._v(" "), _c("td", {
          staticClass: "px-3 md:px-1"
        }, [_c("span", {
          staticClass: "text-sm font-bold"
        }, [_vm._v("\n                    " + _vm._s(row.data.meta.usages ? row.data.meta.usages.costEstimate : "-") + "\n                ")])]), _vm._v(" "), _c("td", {
          staticClass: "px-3 md:px-1"
        }, [_c("span", {
          staticClass: "text-sm font-bold"
        }, [_vm._v("\n                    " + _vm._s(row.data.attributes.created_at) + "\n                ")])]), _vm._v(" "), _c("td", {
          staticClass: "pl-3 text-right md:pl-1"
        }, [_c("div", {
          staticClass: "flex w-full justify-end space-x-2"
        }, [_c("router-link", {
          staticClass: "flex h-8 w-8 items-center justify-center rounded-md bg-light-background transition-colors hover:bg-green-100 dark:bg-2x-dark-foreground",
          attrs: {
            to: {
              name: "UserDetail",
              params: {
                id: row.data.id
              }
            }
          }
        }, [_c("Edit2Icon", {
          staticClass: "opacity-75",
          attrs: {
            size: "15"
          }
        })], 1), _vm._v(" "), _c("router-link", {
          staticClass: "flex h-8 w-8 items-center justify-center rounded-md bg-light-background transition-colors hover:bg-red-100 dark:bg-2x-dark-foreground",
          attrs: {
            to: {
              name: "UserDelete",
              params: {
                id: row.data.id
              }
            }
          }
        }, [_c("Trash2Icon", {
          staticClass: "opacity-75",
          attrs: {
            size: "15"
          }
        })], 1)], 1)])]) : _vm._e()];
      }
    }])
  });
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Widgets/WidgetLatestTransactions.vue?vue&type=template&id=25986ec6&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Widgets/WidgetLatestTransactions.vue?vue&type=template&id=25986ec6& ***!
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

  return _c("DatatableWrapper", {
    staticClass: "overflow-x-auto",
    attrs: {
      api: "/api/admin/dashboard/transactions",
      columns: _vm.columns
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var row = _ref.row;
        return [_c("tr", {
          staticClass: "whitespace-nowrap border-b border-dashed border-light dark:border-opacity-5"
        }, [_c("td", {
          staticClass: "py-5 pr-3 md:pr-1"
        }, [_c("span", {
          staticClass: "text-sm font-bold"
        }, [_vm._v("\n                    " + _vm._s(row.data.attributes.note) + "\n                ")])]), _vm._v(" "), _c("td", {
          staticClass: "px-3 md:px-1"
        }, [row.data.relationships.user ? _c("div", {
          staticClass: "flex items-center"
        }, [_c("MemberAvatar", {
          attrs: {
            "is-border": false,
            size: 36,
            member: row.data.relationships.user
          }
        }), _vm._v(" "), _c("div", {
          staticClass: "ml-3 pr-10"
        }, [_c("b", {
          staticClass: "max-w-1 block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold",
          staticStyle: {
            "max-width": "155px"
          }
        }, [_vm._v("\n                            " + _vm._s(row.data.relationships.user.data.attributes.name) + "\n                        ")]), _vm._v(" "), _c("span", {
          staticClass: "block text-xs text-gray-600 dark:text-gray-500"
        }, [_vm._v("\n                            " + _vm._s(row.data.relationships.user.data.attributes.email) + "\n                        ")])])], 1) : _vm._e(), _vm._v(" "), !row.data.relationships.user ? _c("span", {
          staticClass: "text-xs font-bold text-gray-500"
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("user_was_deleted")) + "\n                ")]) : _vm._e()]), _vm._v(" "), _c("td", {
          staticClass: "px-3 md:px-1"
        }, [_vm.config.subscriptionType === "fixed" ? _c("ColorLabel", {
          attrs: {
            color: _vm.$getTransactionStatusColor(row.data.attributes.status)
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t(row.data.attributes.status)) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.config.subscriptionType === "metered" ? _c("ColorLabel", {
          attrs: {
            color: _vm.$getTransactionTypeColor(row.data.attributes.type)
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t(row.data.attributes.type)) + "\n                ")]) : _vm._e()], 1), _vm._v(" "), _c("td", {
          staticClass: "px-3 md:px-1"
        }, [_c("span", {
          staticClass: "text-sm font-bold",
          "class": _vm.$getTransactionTypeTextColor(row.data.attributes.type)
        }, [_vm._v("\n                    " + _vm._s(_vm.$getTransactionMark(row.data.attributes.type) + row.data.attributes.price) + "\n                ")])]), _vm._v(" "), _c("td", {
          staticClass: "px-3 md:px-1"
        }, [_c("span", {
          staticClass: "text-sm font-bold"
        }, [_vm._v("\n                    " + _vm._s(row.data.attributes.created_at) + "\n                ")])]), _vm._v(" "), _c("td", {
          staticClass: "pl-3 md:pl-1"
        }, [_c("div", {
          staticClass: "w-28"
        }, [_c("img", {
          staticClass: "inline-block max-h-5",
          attrs: {
            src: _vm.$getPaymentLogo(row.data.attributes.driver),
            alt: row.data.attributes.driver
          }
        })])])])];
      }
    }, {
      key: "empty-page",
      fn: function fn() {
        return [_c("InfoBox", {
          staticStyle: {
            "margin-bottom": "0"
          }
        }, [_c("p", [_vm._v(_vm._s(_vm.$t("not_any_transactions")))])])];
      },
      proxy: true
    }])
  });
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/BarChart/Bar.vue?vue&type=template&id=b7cce2a2&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/BarChart/Bar.vue?vue&type=template&id=b7cce2a2& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "relative flex items-center justify-center block cursor-pointer lg:mx-1 lg:w-2 2xl:w-3",
    style: {
      height: _vm.bar.percentage > 0 ? _vm.bar.percentage + "%" : "8px"
    },
    on: {
      mouseover: function mouseover($event) {
        _vm.isVisible = true;
      },
      mouseleave: function mouseleave($event) {
        _vm.isVisible = false;
      }
    }
  }, [_vm.isVisible || _vm.bar.percentage === 85.5 ? _c("div", {
    staticClass: "absolute -top-4 z-10 -translate-y-full transform rounded-lg bg-gray-800 py-2 px-3 shadow-lg dark:bg-white"
  }, [_c("b", {
    staticClass: "mb-2 block whitespace-nowrap text-xs text-white dark:text-gray-800"
  }, [_vm._v("\n                " + _vm._s(_vm.bar.created_at) + "\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center pb-1"
  }, [_c("span", {
    staticClass: "bg-theme mr-2 block h-3 w-3 rounded"
  }), _vm._v(" "), _c("b", {
    staticClass: "whitespace-nowrap text-xs text-white dark:text-gray-800"
  }, [_vm._v("\n                    " + _vm._s(_vm.bar.amount) + "\n                ")])]), _vm._v(" "), _vm._m(0)]) : _vm._e(), _vm._v(" "), _c("span", {
    staticClass: "block h-full w-full rounded-lg",
    "class": {
      "bg-theme": _vm.bar.percentage > 0,
      "dark:bg-gray-700 bg-gray-200": _vm.bar.percentage === 0
    }
  })]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "absolute -bottom-2.5 left-0 right-0 mx-auto inline-block w-[17px] overflow-hidden"
  }, [_c("div", {
    staticClass: "h-3 w-3 origin-top-left -rotate-45 transform bg-gray-800 dark:bg-white"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/BarChart/BarChart.vue?vue&type=template&id=1770b4c2&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/BarChart/BarChart.vue?vue&type=template&id=1770b4c2& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "grid h-20 grid-flow-col items-end gap-1 sm:h-28 sm:gap-2 lg:flex lg:items-end lg:justify-between lg:gap-0"
  }, _vm._l(_vm.data, function (item, i) {
    return _c("Bar", {
      key: i,
      attrs: {
        bar: item
      }
    });
  }), 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=template&id=d01aef1e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=template&id=d01aef1e&scoped=true& ***!
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

  return _c("b", {
    staticClass: "color-label inline-block rounded-lg py-1 px-2 text-xs font-bold capitalize",
    "class": _vm.color
  }, [_vm._t("default")], 2);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/AlertBox.vue?vue&type=template&id=5fcb040b&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/AlertBox.vue?vue&type=template&id=5fcb040b& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "mb-6 flex items-center rounded-xl p-5 shadow-card",
    "class": {
      "dark:bg-green-700/30 bg-green-200": _vm.color === "green",
      "dark:bg-rose-700/30 bg-rose-200": _vm.color === "rose"
    }
  }, [_vm.isLoading ? _c("refresh-cw-icon", {
    staticClass: "vue-feather mr-4 shrink-0 animate-spin",
    "class": {
      "text-green-700 dark:text-green-500": _vm.color === "green",
      "text-rose-700 dark:text-rose-500": _vm.color === "rose"
    },
    attrs: {
      size: "18"
    }
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("alert-octagon-icon", {
    staticClass: "vue-feather mr-4 shrink-0",
    "class": {
      "text-green-700 dark:text-green-500": _vm.color === "green",
      "text-rose-700 dark:text-rose-500": _vm.color === "rose"
    },
    attrs: {
      size: "18"
    }
  }) : _vm._e(), _vm._v(" "), _c("p", {
    staticClass: "text-sm",
    "class": {
      "text-green-700 dark:text-green-500": _vm.color === "green",
      "text-rose-700 dark:text-rose-500": _vm.color === "rose"
    }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCell.vue?vue&type=template&id=afd13796&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCell.vue?vue&type=template&id=afd13796&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("tr", {
    staticClass: "table-row"
  }, _vm._l(_vm.normalizedColumns, function (collumn, index) {
    return _c("td", {
      key: index,
      staticClass: "table-cell"
    }, [_c("span", [_vm._v(_vm._s(collumn))])]);
  }), 0);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=template&id=9e8fc254&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=template&id=9e8fc254&scoped=true& ***!
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

  return _c("div", {
    staticClass: "flex shrink-0 grow-0 items-center"
  }, [_c("MemberAvatar", {
    staticClass: "mr-3 shrink-0",
    attrs: {
      "is-border": false,
      size: 52,
      member: _vm.member
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "info"
  }, [_vm.title ? _c("b", {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _vm.description ? _c("span", {
    staticClass: "description"
  }, [_vm._v(_vm._s(_vm.description))]) : _vm._e()])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableWrapper.vue?vue&type=template&id=6b4b82e0&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableWrapper.vue?vue&type=template&id=6b4b82e0& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "w-full"
  }, [_vm.hasData ? _c("table", {
    staticClass: "w-full"
  }, [_c("thead", [_c("tr", {
    staticClass: "whitespace-nowrap"
  }, _vm._l(_vm.columns, function (column, index) {
    return !column.hidden ? _c("th", {
      key: index,
      staticClass: "text-left",
      "class": {
        "sortable cursor-pointer": column.sortable,
        "text-right": Object.values(_vm.columns).length - 1 === index
      },
      on: {
        click: function click($event) {
          return _vm.sort(column.field, column.sortable);
        }
      }
    }, [_c("span", {
      staticClass: "text-xs text-gray-400 dark:text-gray-500"
    }, [_vm._v("\n                            " + _vm._s(_vm.$t(column.label)) + "\n                        ")]), _vm._v(" "), column.sortable ? _c("chevron-up-icon", {
      staticClass: "vue-feather inline-block text-gray-300 dark:text-gray-500",
      "class": {
        "arrow-down": _vm.filter.sort === "ASC"
      },
      attrs: {
        size: "12"
      }
    }) : _vm._e()], 1) : _vm._e();
  }), 0)]), _vm._v(" "), _c("tbody", {
    staticClass: "table-body"
  }, [_vm._l(_vm.data.data, function (row) {
    return _vm._t("default", function () {
      return [_c("DatatableCell", {
        key: row.id,
        attrs: {
          data: row
        }
      })];
    }, {
      row: row
    });
  })], 2)]) : _vm._e(), _vm._v(" "), !_vm.isLoading && !_vm.hasData ? _vm._t("empty-page") : _vm._e(), _vm._v(" "), _vm.paginator && _vm.hasData ? _c("div", {
    staticClass: "mt-6 sm:flex sm:items-center sm:justify-between"
  }, [_vm.data.meta.total > 15 && _vm.data.meta.last_page <= 6 ? _c("ul", {
    staticClass: "pagination flex justify-center items-center"
  }, [_c("li", {
    staticClass: "previous inline-block p-1"
  }, [_c("a", {
    staticClass: "page-link",
    "class": {
      "cursor-default opacity-20": _vm.pageIndex === 1
    },
    on: {
      click: function click($event) {
        return _vm.goToPage(_vm.pageIndex - 1);
      }
    }
  }, [_c("chevron-left-icon", {
    staticClass: "inline-block",
    attrs: {
      size: "14"
    }
  })], 1)]), _vm._v(" "), _vm._l(_vm.data.meta.last_page, function (page, index) {
    return _c("li", {
      key: index,
      staticClass: "inline-block p-1",
      on: {
        click: function click($event) {
          return _vm.goToPage(page);
        }
      }
    }, [_c("a", {
      staticClass: "page-link",
      "class": {
        "bg-light-background dark:bg-4x-dark-foreground dark:text-gray-300": _vm.pageIndex === page
      }
    }, [_vm._v("\n                        " + _vm._s(page) + "\n                    ")])]);
  }), _vm._v(" "), _c("li", {
    staticClass: "next inline-block p-1"
  }, [_c("a", {
    staticClass: "page-link",
    "class": {
      "cursor-default opacity-20": _vm.pageIndex === _vm.data.meta.last_page
    },
    on: {
      click: function click($event) {
        return _vm.goToPage(_vm.pageIndex + 1);
      }
    }
  }, [_c("chevron-right-icon", {
    staticClass: "inline-block",
    attrs: {
      size: "14"
    }
  })], 1)])], 2) : _vm._e(), _vm._v(" "), _vm.data.meta.total > 15 && _vm.data.meta.last_page > 6 ? _c("ul", {
    staticClass: "pagination flex justify-center items-center"
  }, [_c("li", {
    staticClass: "previous inline-block p-1"
  }, [_c("a", {
    staticClass: "page-link",
    "class": {
      "cursor-default opacity-20": _vm.pageIndex === 1
    },
    on: {
      click: function click($event) {
        return _vm.goToPage(_vm.pageIndex - 1);
      }
    }
  }, [_c("chevron-left-icon", {
    staticClass: "inline-block",
    attrs: {
      size: "14"
    }
  })], 1)]), _vm._v(" "), _vm.pageIndex >= 5 ? _c("li", {
    staticClass: "inline-block p-1",
    on: {
      click: function click($event) {
        return _vm.goToPage(1);
      }
    }
  }, [_c("a", {
    staticClass: "page-link"
  }, [_vm._v(" 1 ")])]) : _vm._e(), _vm._v(" "), _vm._l(5, function (page, index) {
    return _vm.pageIndex < 5 ? _c("li", {
      key: index,
      staticClass: "inline-block p-1",
      on: {
        click: function click($event) {
          return _vm.goToPage(page);
        }
      }
    }, [_c("a", {
      staticClass: "page-link",
      "class": {
        "bg-light-background dark:bg-4x-dark-foreground dark:text-gray-300": _vm.pageIndex === page
      }
    }, [_vm._v("\n                        " + _vm._s(page) + "\n                    ")])]) : _vm._e();
  }), _vm._v(" "), _vm.pageIndex >= 5 ? _c("li", {
    staticClass: "inline-block p-1"
  }, [_c("a", {
    staticClass: "page-link"
  }, [_vm._v("...")])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.floatPages, function (page, index) {
    return _vm.pageIndex >= 5 && _vm.pageIndex < _vm.data.meta.last_page - 3 ? _c("li", {
      key: index,
      staticClass: "inline-block p-1",
      on: {
        click: function click($event) {
          return _vm.goToPage(page);
        }
      }
    }, [_c("a", {
      staticClass: "page-link",
      "class": {
        "bg-light-background dark:bg-4x-dark-foreground dark:text-gray-300": _vm.pageIndex === page
      }
    }, [_vm._v("\n                        " + _vm._s(page) + "\n                    ")])]) : _vm._e();
  }), _vm._v(" "), _vm.pageIndex < _vm.data.meta.last_page - 3 ? _c("li", {
    staticClass: "inline-block p-1"
  }, [_c("a", {
    staticClass: "page-link"
  }, [_vm._v("...")])]) : _vm._e(), _vm._v(" "), _vm._l(5, function (page, index) {
    return _vm.pageIndex > _vm.data.meta.last_page - 4 ? _c("li", {
      key: index,
      staticClass: "inline-block p-1",
      on: {
        click: function click($event) {
          _vm.goToPage(_vm.data.meta.last_page - (4 - index));
        }
      }
    }, [_c("a", {
      staticClass: "page-link",
      "class": {
        "bg-light-background dark:bg-4x-dark-foreground dark:text-gray-300": _vm.pageIndex === _vm.data.meta.last_page - (4 - index)
      }
    }, [_vm._v("\n                        " + _vm._s(_vm.data.meta.last_page - (4 - index)) + "\n                    ")])]) : _vm._e();
  }), _vm._v(" "), _vm.pageIndex < _vm.data.meta.last_page - 3 ? _c("li", {
    staticClass: "inline-block p-1",
    on: {
      click: function click($event) {
        return _vm.goToPage(_vm.data.meta.last_page);
      }
    }
  }, [_c("a", {
    staticClass: "page-link"
  }, [_vm._v("\n                        " + _vm._s(_vm.data.meta.last_page) + "\n                    ")])]) : _vm._e(), _vm._v(" "), _c("li", {
    staticClass: "next inline-block p-1"
  }, [_c("a", {
    staticClass: "page-link",
    "class": {
      "cursor-default opacity-20": _vm.pageIndex === _vm.data.meta.last_page
    },
    on: {
      click: function click($event) {
        return _vm.goToPage(_vm.pageIndex + 1);
      }
    }
  }, [_c("chevron-right-icon", {
    staticClass: "inline-block",
    attrs: {
      size: "14"
    }
  })], 1)])], 2) : _vm._e(), _vm._v(" "), _c("span", {
    staticClass: "text-xs text-gray-600 dark:text-gray-500 block text-center sm:mt-0 mt-4"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.$t("paginator", {
    from: _vm.data.meta.from,
    to: _vm.data.meta.to,
    total: _vm.data.meta.total
  })) + "\n            ")])]) : _vm._e()], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Dashboard.vue?vue&type=template&id=393c2ce5&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Dashboard.vue?vue&type=template&id=393c2ce5& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [!_vm.isLoading && _vm.data ? _c("div", {
    attrs: {
      id: "page-content"
    }
  }, [_vm.config.isAdminVueFileManagerBar ? _c("AppSpecification", {
    staticClass: "hidden lg:flex",
    attrs: {
      data: _vm.data
    }
  }) : _vm._e(), _vm._v(" "), _vm.config.isAdminVueFileManagerBar ? _c("AppSpecification", {
    staticClass: "card shadow-card lg:hidden",
    attrs: {
      data: _vm.data
    }
  }) : _vm._e(), _vm._v(" "), _vm.config.subscriptionType === "metered" && _vm.config.isEmptyPlans ? _c("AlertBox", {
    attrs: {
      color: "rose"
    }
  }, [_vm._v("\n            \tAs you installed app with metered subscription type, you have to "), _c("router-link", {
    staticClass: "dark:text-rose-500 text-sm font-bold underline",
    attrs: {
      to: {
        name: "CreateMeteredPlan"
      }
    }
  }, [_vm._v("create your plan")]), _vm._v(" as soon as possible to prevent new user registration without automatically assigned subscription plan.\n\t\t\t")], 1) : _vm._e(), _vm._v(" "), !_vm.data.app.cron.isRunning && !_vm.config.isDev ? _c("AlertBox", {
    attrs: {
      color: "rose"
    }
  }, [_c("p", {
    staticClass: "text-sm text-rose-700 dark:text-rose-500"
  }, [_vm._v("We detect your cron jobs probably doesn't work correctly, please check it, you need it for running app correctly. If you set your cron job, please get back one minute later.")]), _vm._v(" "), _c("p", {
    staticClass: "text-sm text-rose-700 dark:text-rose-500 mt-4 font-bold"
  }, [_vm._v("Command for Shared Web Hosting (Cpanel, Plesk, etc...): "), _c("br"), _vm._v(" " + _vm._s(_vm.data.app.cron.command.shared))]), _vm._v(" "), _c("p", {
    staticClass: "text-sm text-rose-700 dark:text-rose-500 mt-4 font-bold"
  }, [_vm._v("Command for crontab: "), _c("br"), _vm._v(" " + _vm._s(_vm.data.app.cron.command.vps))])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mb-2 md:mb-6 md:flex md:space-x-6"
  }, [_c("div", {
    staticClass: "card mb-4 w-full shadow-card md:mb-0"
  }, [_c("FormLabel", {
    attrs: {
      icon: "users"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("total_users")) + "\n                    ")]), _vm._v(" "), _c("b", {
    staticClass: "-mt-3 mb-0.5 block text-2xl font-extrabold sm:text-3xl"
  }, [_vm._v("\n                        " + _vm._s(_vm.data.users.total) + "\n                    ")]), _vm._v(" "), _c("router-link", {
    staticClass: "mt-6 flex items-center",
    attrs: {
      to: {
        name: "Users"
      }
    }
  }, [_c("span", {
    staticClass: "mr-2 whitespace-nowrap text-xs font-bold"
  }, [_vm._v("\n                            " + _vm._s(_vm.$t("show_all_users")) + "\n                        ")]), _vm._v(" "), _c("chevron-right-icon", {
    staticClass: "text-theme vue-feather",
    attrs: {
      size: "16"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "card mb-4 w-full shadow-card md:mb-0"
  }, [_c("FormLabel", {
    attrs: {
      icon: "hard-drive"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("total_storage")) + "\n                    ")]), _vm._v(" "), _c("b", {
    staticClass: "-mt-3 mb-0.5 block text-2xl font-extrabold sm:text-3xl"
  }, [_vm._v("\n                        " + _vm._s(_vm.data.disk.used) + "\n                    ")]), _vm._v(" "), _c("router-link", {
    staticClass: "mt-6 flex items-center",
    attrs: {
      to: {
        name: "Users"
      }
    }
  }, [_c("span", {
    staticClass: "mr-2 whitespace-nowrap text-xs font-bold"
  }, [_vm._v("\n                            " + _vm._s(_vm.$t("show_all_users")) + "\n                        ")]), _vm._v(" "), _c("chevron-right-icon", {
    staticClass: "text-theme vue-feather",
    attrs: {
      size: "16"
    }
  })], 1)], 1), _vm._v(" "), _vm.config.subscriptionType !== "none" ? _c("div", {
    staticClass: "card mb-4 w-full shadow-card md:mb-0"
  }, [_c("FormLabel", {
    attrs: {
      icon: "dollar"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("earnings")) + "\n                    ")]), _vm._v(" "), _c("b", {
    staticClass: "-mt-3 mb-0.5 block text-2xl font-extrabold sm:text-3xl"
  }, [_vm._v("\n                        " + _vm._s(_vm.data.app.earnings) + "\n                    ")]), _vm._v(" "), _c("router-link", {
    staticClass: "mt-6 flex items-center",
    attrs: {
      to: {
        name: "Invoices"
      }
    }
  }, [_c("span", {
    staticClass: "mr-2 whitespace-nowrap text-xs font-bold"
  }, [_vm._v("\n                            " + _vm._s(_vm.$t("show_all_transactions")) + "\n                        ")]), _vm._v(" "), _c("chevron-right-icon", {
    staticClass: "text-theme vue-feather",
    attrs: {
      size: "16"
    }
  })], 1)], 1) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card mb-4 shadow-card md:mb-6"
  }, [_c("FormLabel", {
    attrs: {
      icon: "hard-drive"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("upload")) + "\n                ")]), _vm._v(" "), _c("b", {
    staticClass: "-mt-3 mb-0.5 block text-2xl font-extrabold sm:text-3xl"
  }, [_vm._v("\n                    " + _vm._s(_vm.data.disk.upload.total) + "\n                ")]), _vm._v(" "), _c("b", {
    staticClass: "mb-3 mb-2 block text-sm dark:text-gray-500 text-gray-400"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("in_last_x_days")) + "\n                ")]), _vm._v(" "), _c("BarChart", {
    attrs: {
      data: _vm.data.disk.upload.records
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "card mb-4 shadow-card md:mb-6"
  }, [_c("FormLabel", {
    attrs: {
      icon: "hard-drive"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("download")) + "\n                ")]), _vm._v(" "), _c("b", {
    staticClass: "-mt-3 mb-0.5 block text-2xl font-extrabold sm:text-3xl"
  }, [_vm._v("\n                    " + _vm._s(_vm.data.disk.download.total) + "\n                ")]), _vm._v(" "), _c("b", {
    staticClass: "mb-3 mb-5 block text-sm dark:text-gray-500 text-gray-400"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("in_last_x_days")) + "\n                ")]), _vm._v(" "), _c("BarChart", {
    attrs: {
      data: _vm.data.disk.download.records
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "card mb-4 shadow-card md:mb-6"
  }, [_c("FormLabel", {
    attrs: {
      icon: "users"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("latest_registrations")) + "\n                ")]), _vm._v(" "), _c("WidgetLatestRegistrations")], 1), _vm._v(" "), ["fixed", "metered"].includes(this.config.subscriptionType) ? _c("div", {
    staticClass: "card mb-4 shadow-card md:mb-6"
  }, [_c("FormLabel", {
    attrs: {
      icon: "dollar"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("latest_transactions")) + "\n                ")]), _vm._v(" "), _c("WidgetLatestTransactions")], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.isLoading ? _c("div", {
    attrs: {
      id: "loader"
    }
  }, [_c("Spinner")], 1) : _vm._e()]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=style&index=0&id=d01aef1e&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=style&index=0&id=d01aef1e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".color-label.purple[data-v-d01aef1e] {\n  color: #9D66FE;\n  background: rgba(157, 102, 254, 0.1);\n}\n.color-label.yellow[data-v-d01aef1e] {\n  color: #FFBD2D;\n  background: rgba(255, 189, 45, 0.1);\n}\n.color-label.green[data-v-d01aef1e] {\n  color: #00BC7E;\n  background: rgba(0, 188, 126, 0.1);\n}\n.color-label.red[data-v-d01aef1e] {\n  color: #fd397a;\n  background: rgba(253, 57, 122, 0.1);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCell.vue?vue&type=style&index=0&id=afd13796&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCell.vue?vue&type=style&index=0&id=afd13796&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".table-row[data-v-afd13796] {\n  border-radius: 8px;\n}\n.table-row[data-v-afd13796]:hover {\n  background: #f4f5f6;\n}\n.table-row .table-cell[data-v-afd13796] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.table-row .table-cell[data-v-afd13796]:first-child {\n  padding-left: 15px;\n}\n.table-row .table-cell[data-v-afd13796]:last-child {\n  padding-right: 15px;\n  text-align: right;\n}\n.table-row .table-cell span[data-v-afd13796] {\n  font-size: 1em;\n  font-weight: bold;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=style&index=0&id=9e8fc254&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=style&index=0&id=9e8fc254&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".info .name[data-v-9e8fc254],\n.info .description[data-v-9e8fc254] {\n  max-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.info .name[data-v-9e8fc254] {\n  font-size: 0.9375em;\n  line-height: 1;\n  color: #1B2539;\n}\n.info .description[data-v-9e8fc254] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.75em;\n}\n.dark .cell-image-thumbnail .image img.blurred[data-v-9e8fc254] {\n  display: none;\n}\n.dark .cell-image-thumbnail .info .name[data-v-9e8fc254] {\n  color: #bec6cf;\n}\n.dark .cell-image-thumbnail .info .description[data-v-9e8fc254] {\n  color: #7d858c;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=style&index=0&id=d01aef1e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=style&index=0&id=d01aef1e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_style_index_0_id_d01aef1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorLabel.vue?vue&type=style&index=0&id=d01aef1e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=style&index=0&id=d01aef1e&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_style_index_0_id_d01aef1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_style_index_0_id_d01aef1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCell.vue?vue&type=style&index=0&id=afd13796&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCell.vue?vue&type=style&index=0&id=afd13796&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCell_vue_vue_type_style_index_0_id_afd13796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatatableCell.vue?vue&type=style&index=0&id=afd13796&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCell.vue?vue&type=style&index=0&id=afd13796&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCell_vue_vue_type_style_index_0_id_afd13796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCell_vue_vue_type_style_index_0_id_afd13796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=style&index=0&id=9e8fc254&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=style&index=0&id=9e8fc254&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_style_index_0_id_9e8fc254_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatatableCellImage.vue?vue&type=style&index=0&id=9e8fc254&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=style&index=0&id=9e8fc254&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_style_index_0_id_9e8fc254_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_style_index_0_id_9e8fc254_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Dashboard/AppSpecification.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Dashboard/AppSpecification.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppSpecification_vue_vue_type_template_id_2426dac8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSpecification.vue?vue&type=template&id=2426dac8& */ "./resources/js/components/Dashboard/AppSpecification.vue?vue&type=template&id=2426dac8&");
/* harmony import */ var _AppSpecification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppSpecification.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/AppSpecification.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppSpecification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppSpecification_vue_vue_type_template_id_2426dac8___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppSpecification_vue_vue_type_template_id_2426dac8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/AppSpecification.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/Widgets/WidgetLatestRegistrations.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Widgets/WidgetLatestRegistrations.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WidgetLatestRegistrations_vue_vue_type_template_id_735eaa39___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WidgetLatestRegistrations.vue?vue&type=template&id=735eaa39& */ "./resources/js/components/Dashboard/Widgets/WidgetLatestRegistrations.vue?vue&type=template&id=735eaa39&");
/* harmony import */ var _WidgetLatestRegistrations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WidgetLatestRegistrations.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/Widgets/WidgetLatestRegistrations.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WidgetLatestRegistrations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WidgetLatestRegistrations_vue_vue_type_template_id_735eaa39___WEBPACK_IMPORTED_MODULE_0__.render,
  _WidgetLatestRegistrations_vue_vue_type_template_id_735eaa39___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/Widgets/WidgetLatestRegistrations.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/Widgets/WidgetLatestTransactions.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Widgets/WidgetLatestTransactions.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WidgetLatestTransactions_vue_vue_type_template_id_25986ec6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WidgetLatestTransactions.vue?vue&type=template&id=25986ec6& */ "./resources/js/components/Dashboard/Widgets/WidgetLatestTransactions.vue?vue&type=template&id=25986ec6&");
/* harmony import */ var _WidgetLatestTransactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WidgetLatestTransactions.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/Widgets/WidgetLatestTransactions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WidgetLatestTransactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WidgetLatestTransactions_vue_vue_type_template_id_25986ec6___WEBPACK_IMPORTED_MODULE_0__.render,
  _WidgetLatestTransactions_vue_vue_type_template_id_25986ec6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/Widgets/WidgetLatestTransactions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UI/BarChart/Bar.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/UI/BarChart/Bar.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Bar_vue_vue_type_template_id_b7cce2a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bar.vue?vue&type=template&id=b7cce2a2& */ "./resources/js/components/UI/BarChart/Bar.vue?vue&type=template&id=b7cce2a2&");
/* harmony import */ var _Bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bar.vue?vue&type=script&lang=js& */ "./resources/js/components/UI/BarChart/Bar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bar_vue_vue_type_template_id_b7cce2a2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Bar_vue_vue_type_template_id_b7cce2a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UI/BarChart/Bar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UI/BarChart/BarChart.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/UI/BarChart/BarChart.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BarChart_vue_vue_type_template_id_1770b4c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarChart.vue?vue&type=template&id=1770b4c2& */ "./resources/js/components/UI/BarChart/BarChart.vue?vue&type=template&id=1770b4c2&");
/* harmony import */ var _BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarChart.vue?vue&type=script&lang=js& */ "./resources/js/components/UI/BarChart/BarChart.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BarChart_vue_vue_type_template_id_1770b4c2___WEBPACK_IMPORTED_MODULE_0__.render,
  _BarChart_vue_vue_type_template_id_1770b4c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UI/BarChart/BarChart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UI/Labels/ColorLabel.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/UI/Labels/ColorLabel.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColorLabel_vue_vue_type_template_id_d01aef1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorLabel.vue?vue&type=template&id=d01aef1e&scoped=true& */ "./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=template&id=d01aef1e&scoped=true&");
/* harmony import */ var _ColorLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorLabel.vue?vue&type=script&lang=js& */ "./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=script&lang=js&");
/* harmony import */ var _ColorLabel_vue_vue_type_style_index_0_id_d01aef1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorLabel.vue?vue&type=style&index=0&id=d01aef1e&lang=scss&scoped=true& */ "./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=style&index=0&id=d01aef1e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ColorLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ColorLabel_vue_vue_type_template_id_d01aef1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ColorLabel_vue_vue_type_template_id_d01aef1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d01aef1e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UI/Labels/ColorLabel.vue"
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

/***/ "./resources/js/components/UI/Others/AlertBox.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/UI/Others/AlertBox.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AlertBox_vue_vue_type_template_id_5fcb040b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertBox.vue?vue&type=template&id=5fcb040b& */ "./resources/js/components/UI/Others/AlertBox.vue?vue&type=template&id=5fcb040b&");
/* harmony import */ var _AlertBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertBox.vue?vue&type=script&lang=js& */ "./resources/js/components/UI/Others/AlertBox.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertBox_vue_vue_type_template_id_5fcb040b___WEBPACK_IMPORTED_MODULE_0__.render,
  _AlertBox_vue_vue_type_template_id_5fcb040b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UI/Others/AlertBox.vue"
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

/***/ "./resources/js/components/UI/Table/DatatableCell.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/UI/Table/DatatableCell.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DatatableCell_vue_vue_type_template_id_afd13796_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatatableCell.vue?vue&type=template&id=afd13796&scoped=true& */ "./resources/js/components/UI/Table/DatatableCell.vue?vue&type=template&id=afd13796&scoped=true&");
/* harmony import */ var _DatatableCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatatableCell.vue?vue&type=script&lang=js& */ "./resources/js/components/UI/Table/DatatableCell.vue?vue&type=script&lang=js&");
/* harmony import */ var _DatatableCell_vue_vue_type_style_index_0_id_afd13796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatatableCell.vue?vue&type=style&index=0&id=afd13796&lang=scss&scoped=true& */ "./resources/js/components/UI/Table/DatatableCell.vue?vue&type=style&index=0&id=afd13796&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DatatableCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DatatableCell_vue_vue_type_template_id_afd13796_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DatatableCell_vue_vue_type_template_id_afd13796_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "afd13796",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UI/Table/DatatableCell.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UI/Table/DatatableCellImage.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/UI/Table/DatatableCellImage.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DatatableCellImage_vue_vue_type_template_id_9e8fc254_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatatableCellImage.vue?vue&type=template&id=9e8fc254&scoped=true& */ "./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=template&id=9e8fc254&scoped=true&");
/* harmony import */ var _DatatableCellImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatatableCellImage.vue?vue&type=script&lang=js& */ "./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=script&lang=js&");
/* harmony import */ var _DatatableCellImage_vue_vue_type_style_index_0_id_9e8fc254_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatatableCellImage.vue?vue&type=style&index=0&id=9e8fc254&lang=scss&scoped=true& */ "./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=style&index=0&id=9e8fc254&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DatatableCellImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DatatableCellImage_vue_vue_type_template_id_9e8fc254_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DatatableCellImage_vue_vue_type_template_id_9e8fc254_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9e8fc254",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UI/Table/DatatableCellImage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UI/Table/DatatableWrapper.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/UI/Table/DatatableWrapper.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DatatableWrapper_vue_vue_type_template_id_6b4b82e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatatableWrapper.vue?vue&type=template&id=6b4b82e0& */ "./resources/js/components/UI/Table/DatatableWrapper.vue?vue&type=template&id=6b4b82e0&");
/* harmony import */ var _DatatableWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatatableWrapper.vue?vue&type=script&lang=js& */ "./resources/js/components/UI/Table/DatatableWrapper.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DatatableWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DatatableWrapper_vue_vue_type_template_id_6b4b82e0___WEBPACK_IMPORTED_MODULE_0__.render,
  _DatatableWrapper_vue_vue_type_template_id_6b4b82e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UI/Table/DatatableWrapper.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/Dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/views/Admin/Dashboard.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_393c2ce5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=393c2ce5& */ "./resources/js/views/Admin/Dashboard.vue?vue&type=template&id=393c2ce5&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_393c2ce5___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_393c2ce5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/AppSpecification.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/AppSpecification.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSpecification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppSpecification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/AppSpecification.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSpecification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard/Widgets/WidgetLatestRegistrations.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Widgets/WidgetLatestRegistrations.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetLatestRegistrations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WidgetLatestRegistrations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Widgets/WidgetLatestRegistrations.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetLatestRegistrations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard/Widgets/WidgetLatestTransactions.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Widgets/WidgetLatestTransactions.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetLatestTransactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WidgetLatestTransactions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Widgets/WidgetLatestTransactions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetLatestTransactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UI/BarChart/Bar.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/UI/BarChart/Bar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/BarChart/Bar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UI/BarChart/BarChart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/UI/BarChart/BarChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/BarChart/BarChart.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorLabel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/UI/Others/AlertBox.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/UI/Others/AlertBox.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlertBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/AlertBox.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/UI/Table/DatatableCell.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/UI/Table/DatatableCell.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatatableCell.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCell.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatatableCellImage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UI/Table/DatatableWrapper.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/UI/Table/DatatableWrapper.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatatableWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableWrapper.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard/AppSpecification.vue?vue&type=template&id=2426dac8&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/AppSpecification.vue?vue&type=template&id=2426dac8& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSpecification_vue_vue_type_template_id_2426dac8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSpecification_vue_vue_type_template_id_2426dac8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSpecification_vue_vue_type_template_id_2426dac8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppSpecification.vue?vue&type=template&id=2426dac8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/AppSpecification.vue?vue&type=template&id=2426dac8&");


/***/ }),

/***/ "./resources/js/components/Dashboard/Widgets/WidgetLatestRegistrations.vue?vue&type=template&id=735eaa39&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Widgets/WidgetLatestRegistrations.vue?vue&type=template&id=735eaa39& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetLatestRegistrations_vue_vue_type_template_id_735eaa39___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetLatestRegistrations_vue_vue_type_template_id_735eaa39___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetLatestRegistrations_vue_vue_type_template_id_735eaa39___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WidgetLatestRegistrations.vue?vue&type=template&id=735eaa39& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Widgets/WidgetLatestRegistrations.vue?vue&type=template&id=735eaa39&");


/***/ }),

/***/ "./resources/js/components/Dashboard/Widgets/WidgetLatestTransactions.vue?vue&type=template&id=25986ec6&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Widgets/WidgetLatestTransactions.vue?vue&type=template&id=25986ec6& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetLatestTransactions_vue_vue_type_template_id_25986ec6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetLatestTransactions_vue_vue_type_template_id_25986ec6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetLatestTransactions_vue_vue_type_template_id_25986ec6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WidgetLatestTransactions.vue?vue&type=template&id=25986ec6& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Widgets/WidgetLatestTransactions.vue?vue&type=template&id=25986ec6&");


/***/ }),

/***/ "./resources/js/components/UI/BarChart/Bar.vue?vue&type=template&id=b7cce2a2&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/UI/BarChart/Bar.vue?vue&type=template&id=b7cce2a2& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Bar_vue_vue_type_template_id_b7cce2a2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Bar_vue_vue_type_template_id_b7cce2a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Bar_vue_vue_type_template_id_b7cce2a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bar.vue?vue&type=template&id=b7cce2a2& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/BarChart/Bar.vue?vue&type=template&id=b7cce2a2&");


/***/ }),

/***/ "./resources/js/components/UI/BarChart/BarChart.vue?vue&type=template&id=1770b4c2&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/UI/BarChart/BarChart.vue?vue&type=template&id=1770b4c2& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_template_id_1770b4c2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_template_id_1770b4c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_template_id_1770b4c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BarChart.vue?vue&type=template&id=1770b4c2& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/BarChart/BarChart.vue?vue&type=template&id=1770b4c2&");


/***/ }),

/***/ "./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=template&id=d01aef1e&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=template&id=d01aef1e&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_template_id_d01aef1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_template_id_d01aef1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_template_id_d01aef1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorLabel.vue?vue&type=template&id=d01aef1e&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=template&id=d01aef1e&scoped=true&");


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

/***/ "./resources/js/components/UI/Others/AlertBox.vue?vue&type=template&id=5fcb040b&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/UI/Others/AlertBox.vue?vue&type=template&id=5fcb040b& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertBox_vue_vue_type_template_id_5fcb040b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertBox_vue_vue_type_template_id_5fcb040b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertBox_vue_vue_type_template_id_5fcb040b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlertBox.vue?vue&type=template&id=5fcb040b& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/AlertBox.vue?vue&type=template&id=5fcb040b&");


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

/***/ "./resources/js/components/UI/Table/DatatableCell.vue?vue&type=template&id=afd13796&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/UI/Table/DatatableCell.vue?vue&type=template&id=afd13796&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCell_vue_vue_type_template_id_afd13796_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCell_vue_vue_type_template_id_afd13796_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCell_vue_vue_type_template_id_afd13796_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatatableCell.vue?vue&type=template&id=afd13796&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCell.vue?vue&type=template&id=afd13796&scoped=true&");


/***/ }),

/***/ "./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=template&id=9e8fc254&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=template&id=9e8fc254&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_template_id_9e8fc254_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_template_id_9e8fc254_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_template_id_9e8fc254_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatatableCellImage.vue?vue&type=template&id=9e8fc254&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=template&id=9e8fc254&scoped=true&");


/***/ }),

/***/ "./resources/js/components/UI/Table/DatatableWrapper.vue?vue&type=template&id=6b4b82e0&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/UI/Table/DatatableWrapper.vue?vue&type=template&id=6b4b82e0& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableWrapper_vue_vue_type_template_id_6b4b82e0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableWrapper_vue_vue_type_template_id_6b4b82e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableWrapper_vue_vue_type_template_id_6b4b82e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatatableWrapper.vue?vue&type=template&id=6b4b82e0& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableWrapper.vue?vue&type=template&id=6b4b82e0&");


/***/ }),

/***/ "./resources/js/views/Admin/Dashboard.vue?vue&type=template&id=393c2ce5&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Admin/Dashboard.vue?vue&type=template&id=393c2ce5& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_393c2ce5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_393c2ce5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_393c2ce5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=393c2ce5& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Dashboard.vue?vue&type=template&id=393c2ce5&");


/***/ }),

/***/ "./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=style&index=0&id=d01aef1e&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=style&index=0&id=d01aef1e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_style_index_0_id_d01aef1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorLabel.vue?vue&type=style&index=0&id=d01aef1e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/ColorLabel.vue?vue&type=style&index=0&id=d01aef1e&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_style_index_0_id_51c5e09e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/UI/Table/DatatableCell.vue?vue&type=style&index=0&id=afd13796&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/UI/Table/DatatableCell.vue?vue&type=style&index=0&id=afd13796&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCell_vue_vue_type_style_index_0_id_afd13796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatatableCell.vue?vue&type=style&index=0&id=afd13796&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCell.vue?vue&type=style&index=0&id=afd13796&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=style&index=0&id=9e8fc254&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=style&index=0&id=9e8fc254&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_style_index_0_id_9e8fc254_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatatableCellImage.vue?vue&type=style&index=0&id=9e8fc254&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Table/DatatableCellImage.vue?vue&type=style&index=0&id=9e8fc254&lang=scss&scoped=true&");


/***/ })

}]);