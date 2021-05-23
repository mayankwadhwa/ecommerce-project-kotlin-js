(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-ktor-client-core-jsLegacy', 'ktor-ktor-client-json-jsLegacy', 'ktor-ktor-client-serialization-jsLegacy', 'ktor-ktor-client-logging-jsLegacy', 'kotlinx-serialization-kotlinx-serialization-core-jsLegacy', 'kotlin-wrappers-kotlin-styled-jsLegacy', 'kotlin-css', 'react', 'kotlin-wrappers-kotlin-react-router-dom-jsLegacy', 'kotlin-wrappers-kotlin-react-jsLegacy', 'kotlin-wrappers-kotlin-extensions-jsLegacy', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlinx-coroutines-core', '/Users/mayankwadhwa/IdeaProjects/ecommerce-project-kotlin-js/src/main/kotlin/data.js', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-ktor-client-core-jsLegacy'), require('ktor-ktor-client-json-jsLegacy'), require('ktor-ktor-client-serialization-jsLegacy'), require('ktor-ktor-client-logging-jsLegacy'), require('kotlinx-serialization-kotlinx-serialization-core-jsLegacy'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('kotlin-css'), require('react'), require('kotlin-wrappers-kotlin-react-router-dom-jsLegacy'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlin-wrappers-kotlin-extensions-jsLegacy'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlinx-coroutines-core'), require('/Users/mayankwadhwa/IdeaProjects/ecommerce-project-kotlin-js/src/main/kotlin/data.js'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ecommerce-kmp'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ecommerce-kmp'.");
    }if (typeof this['ktor-ktor-client-core-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'ecommerce-kmp'. Its dependency 'ktor-ktor-client-core-jsLegacy' was not found. Please, check whether 'ktor-ktor-client-core-jsLegacy' is loaded prior to 'ecommerce-kmp'.");
    }if (typeof this['ktor-ktor-client-json-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'ecommerce-kmp'. Its dependency 'ktor-ktor-client-json-jsLegacy' was not found. Please, check whether 'ktor-ktor-client-json-jsLegacy' is loaded prior to 'ecommerce-kmp'.");
    }if (typeof this['ktor-ktor-client-serialization-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'ecommerce-kmp'. Its dependency 'ktor-ktor-client-serialization-jsLegacy' was not found. Please, check whether 'ktor-ktor-client-serialization-jsLegacy' is loaded prior to 'ecommerce-kmp'.");
    }if (typeof this['ktor-ktor-client-logging-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'ecommerce-kmp'. Its dependency 'ktor-ktor-client-logging-jsLegacy' was not found. Please, check whether 'ktor-ktor-client-logging-jsLegacy' is loaded prior to 'ecommerce-kmp'.");
    }if (typeof this['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'ecommerce-kmp'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-jsLegacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-jsLegacy' is loaded prior to 'ecommerce-kmp'.");
    }if (typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'ecommerce-kmp'. Its dependency 'kotlin-wrappers-kotlin-styled-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-jsLegacy' is loaded prior to 'ecommerce-kmp'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'ecommerce-kmp'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'ecommerce-kmp'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'ecommerce-kmp'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'ecommerce-kmp'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-router-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'ecommerce-kmp'. Its dependency 'kotlin-wrappers-kotlin-react-router-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-router-dom-jsLegacy' is loaded prior to 'ecommerce-kmp'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'ecommerce-kmp'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'ecommerce-kmp'.");
    }if (typeof this['kotlin-wrappers-kotlin-extensions-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'ecommerce-kmp'. Its dependency 'kotlin-wrappers-kotlin-extensions-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-extensions-jsLegacy' is loaded prior to 'ecommerce-kmp'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'ecommerce-kmp'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'ecommerce-kmp'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ecommerce-kmp'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ecommerce-kmp'.");
    }if (typeof data === 'undefined') {
      throw new Error("Error loading module 'ecommerce-kmp'. Its dependency '/Users/mayankwadhwa/IdeaProjects/ecommerce-project-kotlin-js/src/main/kotlin/data.js' was not found. Please, check whether '/Users/mayankwadhwa/IdeaProjects/ecommerce-project-kotlin-js/src/main/kotlin/data.js' is loaded prior to 'ecommerce-kmp'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'ecommerce-kmp'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'ecommerce-kmp'.");
    }root['ecommerce-kmp'] = factory(typeof this['ecommerce-kmp'] === 'undefined' ? {} : this['ecommerce-kmp'], kotlin, this['ktor-ktor-client-core-jsLegacy'], this['ktor-ktor-client-json-jsLegacy'], this['ktor-ktor-client-serialization-jsLegacy'], this['ktor-ktor-client-logging-jsLegacy'], this['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'], this['kotlin-wrappers-kotlin-styled-jsLegacy'], this['kotlin-css'], react, this['kotlin-wrappers-kotlin-react-router-dom-jsLegacy'], this['kotlin-wrappers-kotlin-react-jsLegacy'], this['kotlin-wrappers-kotlin-extensions-jsLegacy'], this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlinx-coroutines-core'], data, this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$ktor_ktor_client_core_jsLegacy, $module$ktor_ktor_client_json_jsLegacy, $module$ktor_ktor_client_serialization_jsLegacy, $module$ktor_ktor_client_logging_jsLegacy, $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy, $module$kotlin_wrappers_kotlin_styled_jsLegacy, $module$kotlin_css, $module$react, $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlin_wrappers_kotlin_extensions_jsLegacy, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlinx_coroutines_core, $module$_Users_mayankwadhwa_IdeaProjects_ecommerce_project_kotlin_js_src_main_kotlin_data_js, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var getKClass = Kotlin.getKClass;
  var createKType = Kotlin.createKType;
  var HttpTimeout = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.features.HttpTimeout;
  var L3000 = Kotlin.Long.fromInt(3000);
  var Unit = Kotlin.kotlin.Unit;
  var JsonFeature = $module$ktor_ktor_client_json_jsLegacy.io.ktor.client.features.json.JsonFeature;
  var KotlinxSerializer = $module$ktor_ktor_client_serialization_jsLegacy.io.ktor.client.features.json.serializer.KotlinxSerializer;
  var Logging = $module$ktor_ktor_client_logging_jsLegacy.io.ktor.client.features.logging.Logging;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Logger = $module$ktor_ktor_client_logging_jsLegacy.io.ktor.client.features.logging.Logger;
  var LogLevel = $module$ktor_ktor_client_logging_jsLegacy.io.ktor.client.features.logging.LogLevel;
  var HttpClient = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.HttpClient_f0veat$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var takeFrom = $module$ktor_ktor_client_core_jsLegacy.$$importsForInline$$['ktor-ktor-http-jsLegacy'].io.ktor.http.takeFrom_jl1sg7$;
  var utils = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.utils;
  var url = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod = $module$ktor_ktor_client_core_jsLegacy.$$importsForInline$$['ktor-ktor-http-jsLegacy'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.HttpRequestBuilder;
  var HttpStatement_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.HttpStatement;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var HttpResponse = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.HttpResponse;
  var complete = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.complete_abn2de$;
  var call = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.call;
  var TypeInfo_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.call.TypeInfo;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal;
  var ArrayListSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.ArrayListSerializer;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.UnknownFieldException;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.MissingFieldException;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var StyleSheet = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyleSheet;
  var TextTransform = $module$kotlin_css.kotlinx.css.TextTransform;
  var set_textTransform = $module$kotlin_css.kotlinx.css.set_textTransform_ktraln$;
  var get_rem = $module$kotlin_css.kotlinx.css.get_rem_rcaex3$;
  var set_fontSize = $module$kotlin_css.kotlinx.css.set_fontSize_n8chyh$;
  var Color = $module$kotlin_css.kotlinx.css.Color;
  var set_backgroundColor = $module$kotlin_css.kotlinx.css.set_backgroundColor_ommczd$;
  var BorderStyle = $module$kotlin_css.kotlinx.css.BorderStyle;
  var border = $module$kotlin_css.kotlinx.css.properties.border_2hqznt$;
  var set_color = $module$kotlin_css.kotlinx.css.set_color_ommczd$;
  var set_borderRadius = $module$kotlin_css.kotlinx.css.set_borderRadius_n8chyh$;
  var padding = $module$kotlin_css.kotlinx.css.padding_cx3uck$;
  var Cursor = $module$kotlin_css.kotlinx.css.Cursor;
  var set_cursor = $module$kotlin_css.kotlinx.css.set_cursor_hrkqtc$;
  var margin = $module$kotlin_css.kotlinx.css.margin_fjjo64$;
  var Time = $module$kotlin_css.kotlinx.css.properties.Time;
  var Timing = $module$kotlin_css.kotlinx.css.properties.Timing;
  var transition = $module$kotlin_css.kotlinx.css.properties.transition_nv0p8h$;
  var Outline = $module$kotlin_css.kotlinx.css.Outline;
  var set_outline = $module$kotlin_css.kotlinx.css.set_outline_jfkew8$;
  var Position = $module$kotlin_css.kotlinx.css.Position;
  var set_position = $module$kotlin_css.kotlinx.css.set_position_mvtmy5$;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var set_top = $module$kotlin_css.kotlinx.css.set_top_n8chyh$;
  var set_left = $module$kotlin_css.kotlinx.css.set_left_n8chyh$;
  var set_right = $module$kotlin_css.kotlinx.css.set_right_n8chyh$;
  var set_bottom = $module$kotlin_css.kotlinx.css.set_bottom_n8chyh$;
  var set_background = $module$kotlin_css.kotlinx.css.set_background_krvuuu$;
  var Display = $module$kotlin_css.kotlinx.css.Display;
  var set_display = $module$kotlin_css.kotlinx.css.set_display_qidz4o$;
  var Align = $module$kotlin_css.kotlinx.css.Align;
  var set_alignItems = $module$kotlin_css.kotlinx.css.set_alignItems_olgsez$;
  var JustifyContent = $module$kotlin_css.kotlinx.css.JustifyContent;
  var set_justifyContent = $module$kotlin_css.kotlinx.css.set_justifyContent_gwpzrh$;
  var padding_0 = $module$kotlin_css.kotlinx.css.padding_9vmwvs$;
  var rgb = $module$kotlin_css.kotlinx.css.rgb_qt1dr2$;
  var margin_0 = $module$kotlin_css.kotlinx.css.margin_cx3uck$;
  var route = $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy.react.router.dom.route_9tkfd6$;
  var switch_0 = $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy.react.router.dom.switch_jg12zk$;
  var browserRouter = $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy.react.router.dom.browserRouter_ysa1x$;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_lqgejo$;
  var RComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent;
  var requireAll = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.requireAll_spd3bs$;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  var createContext = $module$react.createContext;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var setState = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.setState_kpl3tw$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  var functionalComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.functionalComponent_7g4vsr$;
  var child = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.child_9r8yuv$;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H3_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var routeLink = $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy.react.router.dom.routeLink_4zdlmx$;
  var set_borderColor = $module$kotlin_css.kotlinx.css.set_borderColor_ommczd$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var H1_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var DIV_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var IMG_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var SPAN_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
  var STRONG_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STRONG;
  var enumEncode = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_1 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var BUTTON_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  var H2_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
  var H4_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H4;
  var P_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var H5_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H5;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var LI_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
  var I_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.I;
  var UL_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.UL;
  var NAV_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NAV;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var enumEncode_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var BUTTON_init_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var List = Kotlin.kotlin.collections.List;
  var SECTION_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SECTION;
  var set_width = $module$kotlin_css.kotlinx.css.set_width_n8chyh$;
  var set_height = $module$kotlin_css.kotlinx.css.set_height_n8chyh$;
  var IMG_init_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var set_key = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.set_key_g0n3bx$;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var ensureNotNull = Kotlin.ensureNotNull;
  var RComponent_init_0 = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_8bz2yq$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var INPUT_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  ComponentStyles.prototype = Object.create(StyleSheet.prototype);
  ComponentStyles.prototype.constructor = ComponentStyles;
  WelcomeStyles.prototype = Object.create(StyleSheet.prototype);
  WelcomeStyles.prototype.constructor = WelcomeStyles;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  ProductProvider.prototype = Object.create(RComponent.prototype);
  ProductProvider.prototype.constructor = ProductProvider;
  Ticker.prototype = Object.create(RComponent.prototype);
  Ticker.prototype.constructor = Ticker;
  Welcome.prototype = Object.create(RComponent.prototype);
  Welcome.prototype.constructor = Welcome;
  function get$lambda($receiver) {
    return Unit;
  }
  function KtorApi() {
    KtorApi_instance = this;
    this.client_0 = HttpClient(KtorApi$client$lambda);
  }
  function Coroutine$getDatabase($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$response = void 0;
  }
  Coroutine$getDatabase.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getDatabase.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getDatabase.prototype.constructor = Coroutine$getDatabase;
  Coroutine$getDatabase.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.client_0;
            var urlString = 'https://sheets.googleapis.com/v4/spreadsheets/1m_Q3fTugs_m6_WiltWMBFYQnnRcHZPp4mNLpHJIaK94/values/A1%3AH98?majorDimension=ROWS&key=AIzaSyDdZ8ob8KRuVvTLGauSB5jV2Nh7Y8FaXlA';
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, urlString);
            get$lambda($receiver_1);
            var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = getKClass(SheetResponse);
            if (equals(tmp$_4, getKClass(HttpStatement_init))) {
              this.result_0 = Kotlin.isType(tmp$_5 = $this_0, SheetResponse) ? tmp$_5 : throwCCE();
              this.state_0 = 9;
              continue;
            } else {
              if (equals(tmp$_4, getKClass(HttpResponse))) {
                this.state_0 = 7;
                this.result_0 = $this_0.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = $this_0.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = new TypeInfo_init(getKClass(SheetResponse), call.JsType, createKType(getKClass(SheetResponse), [], false));
              } catch (_) {
                typeInfo$result_0 = new TypeInfo_init(getKClass(SheetResponse), call.JsType);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_jo9acv$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_7 = this.result_0, SheetResponse) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 8;
            continue;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          case 7:
            this.result_0 = Kotlin.isType(tmp$_6 = this.result_0, SheetResponse) ? tmp$_6 : throwCCE();
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  KtorApi.prototype.getDatabase = function (continuation_0, suspended) {
    var instance = new Coroutine$getDatabase(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function KtorApi$client$lambda$lambda($receiver) {
    $receiver.requestTimeoutMillis = L3000;
    return Unit;
  }
  function KtorApi$client$lambda$lambda_0($receiver) {
    $receiver.serializer = new KotlinxSerializer();
    return Unit;
  }
  function KtorApi$client$lambda$lambda$ObjectLiteral() {
  }
  KtorApi$client$lambda$lambda$ObjectLiteral.prototype.log_61zpoe$ = function (message) {
    print('Network: ' + message);
  };
  KtorApi$client$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Logger]
  };
  function KtorApi$client$lambda$lambda_1($receiver) {
    $receiver.logger = new KtorApi$client$lambda$lambda$ObjectLiteral();
    $receiver.level = LogLevel.ALL;
    return Unit;
  }
  function KtorApi$client$lambda($receiver) {
    $receiver.install_xlxg29$(HttpTimeout.Feature, KtorApi$client$lambda$lambda);
    $receiver.install_xlxg29$(JsonFeature.Feature, KtorApi$client$lambda$lambda_0);
    $receiver.install_xlxg29$(Logging.Companion, KtorApi$client$lambda$lambda_1);
    return Unit;
  }
  KtorApi.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KtorApi',
    interfaces: []
  };
  var KtorApi_instance = null;
  function KtorApi_getInstance() {
    if (KtorApi_instance === null) {
      new KtorApi();
    }return KtorApi_instance;
  }
  function SheetResponse(majorDimension, range, values) {
    SheetResponse$Companion_getInstance();
    this.majorDimension = majorDimension;
    this.range = range;
    this.values = values;
  }
  function SheetResponse$Companion() {
    SheetResponse$Companion_instance = this;
  }
  SheetResponse$Companion.prototype.serializer = function () {
    return SheetResponse$$serializer_getInstance();
  };
  SheetResponse$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SheetResponse$Companion_instance = null;
  function SheetResponse$Companion_getInstance() {
    if (SheetResponse$Companion_instance === null) {
      new SheetResponse$Companion();
    }return SheetResponse$Companion_instance;
  }
  function SheetResponse$$serializer() {
    this.descriptor_q0xk4l$_0 = new PluginGeneratedSerialDescriptor('SheetResponse', this, 3);
    this.descriptor.addElement_ivxn3r$('majorDimension', false);
    this.descriptor.addElement_ivxn3r$('range', false);
    this.descriptor.addElement_ivxn3r$('values', false);
    SheetResponse$$serializer_instance = this;
  }
  Object.defineProperty(SheetResponse$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_q0xk4l$_0;
    }
  });
  SheetResponse$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.majorDimension);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.range);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, new ArrayListSerializer(new ArrayListSerializer(internal.StringSerializer)), value.values);
    output.endStructure_24f42q$(this.descriptor);
  };
  SheetResponse$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeSerializableElement_12e8id$(this.descriptor, 2, new ArrayListSerializer(new ArrayListSerializer(internal.StringSerializer)), local2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return SheetResponse_init(bitMask0, local0, local1, local2, null);
  };
  SheetResponse$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, new ArrayListSerializer(new ArrayListSerializer(internal.StringSerializer))];
  };
  SheetResponse$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var SheetResponse$$serializer_instance = null;
  function SheetResponse$$serializer_getInstance() {
    if (SheetResponse$$serializer_instance === null) {
      new SheetResponse$$serializer();
    }return SheetResponse$$serializer_instance;
  }
  function SheetResponse_init(seen1, majorDimension, range, values, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(SheetResponse.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('majorDimension');
    else
      $this.majorDimension = majorDimension;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('range');
    else
      $this.range = range;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('values');
    else
      $this.values = values;
    return $this;
  }
  SheetResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SheetResponse',
    interfaces: []
  };
  SheetResponse.prototype.component1 = function () {
    return this.majorDimension;
  };
  SheetResponse.prototype.component2 = function () {
    return this.range;
  };
  SheetResponse.prototype.component3 = function () {
    return this.values;
  };
  SheetResponse.prototype.copy_b32kzi$ = function (majorDimension, range, values) {
    return new SheetResponse(majorDimension === void 0 ? this.majorDimension : majorDimension, range === void 0 ? this.range : range, values === void 0 ? this.values : values);
  };
  SheetResponse.prototype.toString = function () {
    return 'SheetResponse(majorDimension=' + Kotlin.toString(this.majorDimension) + (', range=' + Kotlin.toString(this.range)) + (', values=' + Kotlin.toString(this.values)) + ')';
  };
  SheetResponse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.majorDimension) | 0;
    result = result * 31 + Kotlin.hashCode(this.range) | 0;
    result = result * 31 + Kotlin.hashCode(this.values) | 0;
    return result;
  };
  SheetResponse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.majorDimension, other.majorDimension) && Kotlin.equals(this.range, other.range) && Kotlin.equals(this.values, other.values)))));
  };
  function ComponentStyles() {
    ComponentStyles_instance = this;
    StyleSheet.call(this, 'ComponentStyles', true);
    this.buttonContainer_7rk596$_0 = this.css_wopuc9$([], ComponentStyles$buttonContainer$lambda).provideDelegate_n5byny$(this, ComponentStyles$buttonContainer_metadata);
    this.modalContainer_7g8zft$_0 = this.css_wopuc9$([], ComponentStyles$modalContainer$lambda).provideDelegate_n5byny$(this, ComponentStyles$modalContainer_metadata);
  }
  function ComponentStyles$Colors() {
    ComponentStyles$Colors_instance = this;
    this.mainBlue = '#2a2a72';
    this.lightBlue = '#009ffd';
    this.mainWhite = '#f3f3f3';
    this.mainDark = '#232528';
    this.mainYellow = '#ffa400';
  }
  ComponentStyles$Colors.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Colors',
    interfaces: []
  };
  var ComponentStyles$Colors_instance = null;
  function ComponentStyles$Colors_getInstance() {
    if (ComponentStyles$Colors_instance === null) {
      new ComponentStyles$Colors();
    }return ComponentStyles$Colors_instance;
  }
  var ComponentStyles$buttonContainer_metadata = new PropertyMetadata('buttonContainer');
  Object.defineProperty(ComponentStyles.prototype, 'buttonContainer', {
    configurable: true,
    get: function () {
      return this.buttonContainer_7rk596$_0.getValue_lrcp0p$(this, ComponentStyles$buttonContainer_metadata);
    }
  });
  var ComponentStyles$modalContainer_metadata = new PropertyMetadata('modalContainer');
  Object.defineProperty(ComponentStyles.prototype, 'modalContainer', {
    configurable: true,
    get: function () {
      return this.modalContainer_7g8zft$_0.getValue_lrcp0p$(this, ComponentStyles$modalContainer_metadata);
    }
  });
  function ComponentStyles$buttonContainer$lambda$lambda($receiver) {
    set_backgroundColor($receiver, new Color(ComponentStyles$Colors_getInstance().lightBlue));
    set_color($receiver, Color.Companion.aliceBlue);
    return Unit;
  }
  function ComponentStyles$buttonContainer$lambda$lambda_0($receiver) {
    set_outline($receiver, Outline.none);
    return Unit;
  }
  function ComponentStyles$buttonContainer$lambda($receiver) {
    set_textTransform($receiver, TextTransform.capitalize);
    set_fontSize($receiver, get_rem(1.4));
    set_backgroundColor($receiver, Color.Companion.transparent);
    border($receiver, get_rem(0.05), BorderStyle.solid, new Color(ComponentStyles$Colors_getInstance().lightBlue));
    set_color($receiver, new Color(ComponentStyles$Colors_getInstance().lightBlue));
    set_borderRadius($receiver, get_rem(0.5));
    padding($receiver, get_rem(0.2), get_rem(0.5));
    set_cursor($receiver, Cursor.pointer);
    margin($receiver, get_rem(0.2), get_rem(0.5), get_rem(0.2), get_rem(0));
    transition($receiver, 'all', new Time('0.5'), Timing.Companion.easeInOut);
    $receiver.hover_sa4rfh$(ComponentStyles$buttonContainer$lambda$lambda);
    $receiver.focus_sa4rfh$(ComponentStyles$buttonContainer$lambda$lambda_0);
    return Unit;
  }
  function ComponentStyles$modalContainer$lambda($receiver) {
    set_position($receiver, Position.fixed);
    set_top($receiver, get_px(0));
    set_left($receiver, get_px(0));
    set_right($receiver, get_px(0));
    set_bottom($receiver, get_px(0));
    set_background($receiver, 'rgba(0,0,0,0.3)');
    set_display($receiver, Display.flex);
    set_alignItems($receiver, Align.center);
    set_justifyContent($receiver, JustifyContent.center);
    return Unit;
  }
  ComponentStyles.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ComponentStyles',
    interfaces: [StyleSheet]
  };
  var ComponentStyles_instance = null;
  function ComponentStyles_getInstance() {
    if (ComponentStyles_instance === null) {
      new ComponentStyles();
    }return ComponentStyles_instance;
  }
  function WelcomeStyles() {
    WelcomeStyles_instance = this;
    StyleSheet.call(this, 'WelcomeStyles', true);
    this.textContainer_felub4$_0 = this.css_wopuc9$([], WelcomeStyles$textContainer$lambda).provideDelegate_n5byny$(this, WelcomeStyles$textContainer_metadata);
    this.textInput_7s4gnt$_0 = this.css_wopuc9$([], WelcomeStyles$textInput$lambda).provideDelegate_n5byny$(this, WelcomeStyles$textInput_metadata);
  }
  var WelcomeStyles$textContainer_metadata = new PropertyMetadata('textContainer');
  Object.defineProperty(WelcomeStyles.prototype, 'textContainer', {
    configurable: true,
    get: function () {
      return this.textContainer_felub4$_0.getValue_lrcp0p$(this, WelcomeStyles$textContainer_metadata);
    }
  });
  var WelcomeStyles$textInput_metadata = new PropertyMetadata('textInput');
  Object.defineProperty(WelcomeStyles.prototype, 'textInput', {
    configurable: true,
    get: function () {
      return this.textInput_7s4gnt$_0.getValue_lrcp0p$(this, WelcomeStyles$textInput_metadata);
    }
  });
  function WelcomeStyles$textContainer$lambda($receiver) {
    padding_0($receiver, get_px(5));
    set_backgroundColor($receiver, rgb(8, 97, 22));
    set_color($receiver, rgb(56, 246, 137));
    return Unit;
  }
  function WelcomeStyles$textInput$lambda($receiver) {
    margin_0($receiver, get_px(5));
    set_fontSize($receiver, get_px(14));
    return Unit;
  }
  WelcomeStyles.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'WelcomeStyles',
    interfaces: [StyleSheet]
  };
  var WelcomeStyles_instance = null;
  function WelcomeStyles_getInstance() {
    if (WelcomeStyles_instance === null) {
      new WelcomeStyles();
    }return WelcomeStyles_instance;
  }
  function App() {
    RComponent_init(this);
  }
  function App$render$lambda$lambda$lambda$lambda$lambda(this$) {
    return function () {
      return productList(this$);
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_0(this$) {
    return function () {
      return details(this$);
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_1(this$) {
    return function () {
      return cart(this$);
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_2(this$) {
    return function () {
      return default_0(this$);
    };
  }
  function App$render$lambda$lambda$lambda$lambda($receiver) {
    route($receiver, '/', true, void 0, App$render$lambda$lambda$lambda$lambda$lambda($receiver));
    route($receiver, '/details', void 0, void 0, App$render$lambda$lambda$lambda$lambda$lambda_0($receiver));
    route($receiver, '/cart', void 0, void 0, App$render$lambda$lambda$lambda$lambda$lambda_1($receiver));
    route($receiver, '', void 0, void 0, App$render$lambda$lambda$lambda$lambda$lambda_2($receiver));
    return Unit;
  }
  function App$render$lambda$lambda$lambda($receiver) {
    navBar($receiver);
    switch_0($receiver, App$render$lambda$lambda$lambda$lambda);
    modal($receiver);
    return Unit;
  }
  function App$render$lambda$lambda($receiver) {
    $receiver.invoke_eb8iu4$($module$react.Fragment, App$render$lambda$lambda$lambda);
    return Unit;
  }
  function App$render$lambda($receiver) {
    browserRouter($receiver, void 0, void 0, void 0, void 0, App$render$lambda$lambda);
    return Unit;
  }
  App.prototype.render_ss14n$ = function ($receiver) {
    $receiver.child_ssazr1$(getKClass(ProductProvider), App$render$lambda);
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: [RComponent]
  };
  function app$lambda($receiver) {
    return Unit;
  }
  function app($receiver) {
    return $receiver.child_ssazr1$(getKClass(App), app$lambda);
  }
  function main$lambda$lambda($receiver) {
    app($receiver);
    return Unit;
  }
  function main$lambda(it) {
    requireAll(require.context('/Users/mayankwadhwa/IdeaProjects/ecommerce-kmp/src/jsMain/kotlin', true, /\.css$/));
    render(document.getElementById('root'), void 0, main$lambda$lambda);
    return Unit;
  }
  function main() {
    window.onload = main$lambda;
  }
  var productContext;
  function ContextState() {
  }
  ContextState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ContextState',
    interfaces: []
  };
  function ProductProvider() {
    RComponent_init(this);
    this.handleDetail_0 = ProductProvider$handleDetail$lambda(this);
    this.getItem_0 = ProductProvider$getItem$lambda(this);
    this.addToCart_0 = ProductProvider$addToCart$lambda(this);
    this.openModal_0 = ProductProvider$openModal$lambda(this);
    this.closeModal_0 = ProductProvider$closeModal$lambda(this);
    this.increment_0 = ProductProvider$increment$lambda;
    this.decrement_0 = ProductProvider$decrement$lambda;
    this.removeItem_0 = ProductProvider$removeItem$lambda;
    this.clearCart_0 = ProductProvider$clearCart$lambda(this);
    this.addTotals_0 = ProductProvider$addTotals$lambda(this);
  }
  function Coroutine$ProductProvider$componentDidMount$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$ProductProvider$componentDidMount$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ProductProvider$componentDidMount$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ProductProvider$componentDidMount$lambda.prototype.constructor = Coroutine$ProductProvider$componentDidMount$lambda;
  Coroutine$ProductProvider$componentDidMount$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = KtorApi_getInstance().getDatabase(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var database = this.result_0;
            return console.log(database.values), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ProductProvider$componentDidMount$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$ProductProvider$componentDidMount$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function ProductProvider$componentDidMount$lambda_0(closure$tempDetailProduct) {
    return function ($receiver) {
      $receiver.detailProduct = closure$tempDetailProduct;
      $receiver.cartProducts = emptyList();
      $receiver.modalOpen = false;
      $receiver.modalProduct = closure$tempDetailProduct;
      $receiver.cartSubTotal = 0.0;
      $receiver.cartTax = 0.0;
      $receiver.cartTotal = 0.0;
      return Unit;
    };
  }
  ProductProvider.prototype.componentDidMount = function () {
    launch(coroutines.GlobalScope, void 0, void 0, ProductProvider$componentDidMount$lambda);
    var tempDetailProduct = $module$_Users_mayankwadhwa_IdeaProjects_ecommerce_project_kotlin_js_src_main_kotlin_data_js.detailProduct;
    setState(this, ProductProvider$componentDidMount$lambda_0(tempDetailProduct));
    this.setProducts_0();
  };
  function ProductProvider$setProducts$lambda(closure$tempStoreProducts) {
    return function ($receiver) {
      $receiver.storeProducts = closure$tempStoreProducts;
      return Unit;
    };
  }
  ProductProvider.prototype.setProducts_0 = function () {
    var tmp$, tmp$_0;
    var tempStoreProducts = ArrayList_init();
    tmp$_0 = typeof (tmp$ = $module$_Users_mayankwadhwa_IdeaProjects_ecommerce_project_kotlin_js_src_main_kotlin_data_js.storeProducts.length) === 'number' ? tmp$ : throwCCE();
    for (var x = 0; x < tmp$_0; x++) {
      tempStoreProducts.add_11rb$($module$_Users_mayankwadhwa_IdeaProjects_ecommerce_project_kotlin_js_src_main_kotlin_data_js.storeProducts[x]);
    }
    setState(this, ProductProvider$setProducts$lambda(tempStoreProducts));
  };
  function ProductProvider$render$lambda(this$ProductProvider) {
    return function ($receiver) {
      $receiver.attrs.value = mapOf([to('handleDetail', this$ProductProvider.handleDetail_0), to('addToCart', this$ProductProvider.addToCart_0), to('storeProducts', this$ProductProvider.state.storeProducts), to('detailProduct', this$ProductProvider.state.detailProduct), to('modalProduct', this$ProductProvider.state.modalProduct), to('cartProducts', this$ProductProvider.state.cartProducts), to('modalOpen', this$ProductProvider.state.modalOpen), to('openModal', this$ProductProvider.openModal_0), to('closeModal', this$ProductProvider.closeModal_0), to('increment', this$ProductProvider.increment_0), to('decrement', this$ProductProvider.decrement_0), to('removeItem', this$ProductProvider.removeItem_0), to('clearCart', this$ProductProvider.clearCart_0), to('cartSubtotal', this$ProductProvider.state.cartSubTotal), to('cartTax', this$ProductProvider.state.cartTax), to('cartTotal', this$ProductProvider.state.cartTotal)]);
      $receiver.children_yllgzm$(this$ProductProvider.props);
      return Unit;
    };
  }
  ProductProvider.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_eb8iu4$(productContext.Provider, ProductProvider$render$lambda(this));
  };
  function ProductProvider$handleDetail$lambda$lambda(closure$item) {
    return function ($receiver) {
      $receiver.detailProduct = closure$item;
      return Unit;
    };
  }
  function ProductProvider$handleDetail$lambda(this$ProductProvider) {
    return function (id) {
      var item = this$ProductProvider.getItem_0(id);
      setState(this$ProductProvider, ProductProvider$handleDetail$lambda$lambda(item));
      return Unit;
    };
  }
  function ProductProvider$getItem$lambda(this$ProductProvider) {
    return function (id) {
      var $receiver = this$ProductProvider.state.storeProducts;
      var first$result;
      first$break: do {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.id === id) {
            first$result = element;
            break first$break;
          }}
        throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
      }
       while (false);
      return first$result;
    };
  }
  function ProductProvider$addToCart$lambda$lambda(closure$tempProducts, closure$product) {
    return function ($receiver) {
      $receiver.storeProducts = closure$tempProducts;
      $receiver.cartProducts = plus($receiver.cartProducts, closure$product);
      return Unit;
    };
  }
  function ProductProvider$addToCart$lambda(this$ProductProvider) {
    return function (id) {
      var tempProducts = this$ProductProvider.state.storeProducts;
      var index = tempProducts.indexOf_11rb$(this$ProductProvider.getItem_0(id));
      var product = tempProducts.get_za3lpa$(index);
      product.inCart = true;
      product.count = 1;
      var price = product.price;
      product.total = price;
      setState(this$ProductProvider, ProductProvider$addToCart$lambda$lambda(tempProducts, product));
      this$ProductProvider.addTotals_0();
      return Unit;
    };
  }
  function ProductProvider$openModal$lambda$lambda(closure$product) {
    return function ($receiver) {
      $receiver.modalProduct = closure$product;
      $receiver.modalOpen = true;
      return Unit;
    };
  }
  function ProductProvider$openModal$lambda(this$ProductProvider) {
    return function (id) {
      var product = this$ProductProvider.getItem_0(id);
      setState(this$ProductProvider, ProductProvider$openModal$lambda$lambda(product));
      return Unit;
    };
  }
  function ProductProvider$closeModal$lambda$lambda($receiver) {
    $receiver.modalOpen = false;
    return Unit;
  }
  function ProductProvider$closeModal$lambda(this$ProductProvider) {
    return function () {
      setState(this$ProductProvider, ProductProvider$closeModal$lambda$lambda);
      return Unit;
    };
  }
  function ProductProvider$increment$lambda(id) {
    println('Increment Method');
    return Unit;
  }
  function ProductProvider$decrement$lambda(id) {
    println('Decrement  Method');
    return Unit;
  }
  function ProductProvider$removeItem$lambda(id) {
    println('Item Removed');
    return Unit;
  }
  function ProductProvider$clearCart$lambda$lambda($receiver) {
    $receiver.cartProducts = emptyList();
    return Unit;
  }
  function ProductProvider$clearCart$lambda(this$ProductProvider) {
    return function () {
      setState(this$ProductProvider, ProductProvider$clearCart$lambda$lambda);
      this$ProductProvider.setProducts_0();
      return Unit;
    };
  }
  function ProductProvider$addTotals$lambda$lambda(closure$subTotal, closure$tempTax, closure$total) {
    return function ($receiver) {
      $receiver.cartSubTotal = closure$subTotal.v;
      $receiver.cartTax = closure$tempTax;
      $receiver.cartTotal = closure$total;
      return Unit;
    };
  }
  function ProductProvider$addTotals$lambda(this$ProductProvider) {
    return function () {
      var subTotal = {v: 0.0};
      var tmp$;
      tmp$ = this$ProductProvider.state.cartProducts.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        subTotal.v += element.total;
      }
      var tempTax = subTotal.v * 0.1;
      var total = subTotal.v + tempTax;
      setState(this$ProductProvider, ProductProvider$addTotals$lambda$lambda(subTotal, tempTax, total));
      return Unit;
    };
  }
  ProductProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProductProvider',
    interfaces: [RComponent]
  };
  var productConsumer;
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function Default$lambda($receiver, it) {
    var $receiver_0 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0.unaryPlus_pdl1vz$('Hello From The Page Not Found');
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var Default;
  function default_0($receiver) {
    return child($receiver, Default);
  }
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function img$lambda(closure$alt, closure$src, closure$classes) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
    };
  }
  function span$lambda(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function strong$lambda(closure$classes) {
    return function (it) {
      return new STRONG_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledButton$lambda(closure$formEncType, closure$formMethod, closure$type) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_1(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null]), it);
    };
  }
  function h2$lambda(closure$classes) {
    return function (it) {
      return new H2_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h4$lambda(closure$classes) {
    return function (it) {
      return new H4_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function Details$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledButton$lambda(null, null, null));
    $receiver_0.css.unaryPlus_ocqyl0$(ComponentStyles_getInstance().buttonContainer);
    $receiver_0.unaryPlus_pdl1vz$('back to products');
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  function Details$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$value, closure$product) {
    return function (event) {
      var addToCart = closure$value.get_11rb$('addToCart');
      var openModal = closure$value.get_11rb$('openModal');
      addToCart(closure$product.id);
      openModal(closure$product.id);
      return Unit;
    };
  }
  function Details$lambda$lambda$lambda($receiver, value) {
    var $receiver_0 = value.get_11rb$('detailProduct');
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda('container py-5'));
    var $receiver_0_1 = new RDOMBuilder_init(div$lambda('row'));
    var $receiver_0_2 = new RDOMBuilder_init(div$lambda('col-10 mx-auto text-center text-slanted text-blue my-5'));
    var $receiver_0_3 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0_3.unaryPlus_pdl1vz$($receiver_0.title);
    $receiver_0_2.child_52psg1$($receiver_0_3.create());
    $receiver_0_1.child_52psg1$($receiver_0_2.create());
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    var $receiver_0_4 = new RDOMBuilder_init(div$lambda('row'));
    var $receiver_0_5 = new RDOMBuilder_init(div$lambda('col-10 mx-auto col-md-6 my-3'));
    var $receiver_0_6 = new RDOMBuilder_init(img$lambda('product', $receiver_0.img, 'img-fluid'));
    $receiver_0_5.child_52psg1$($receiver_0_6.create());
    $receiver_0_4.child_52psg1$($receiver_0_5.create());
    var $receiver_0_7 = new RDOMBuilder_init(div$lambda('col-10 mx-auto col-md-6 my-3 text-capitalize'));
    var $receiver_0_8 = new RDOMBuilder_init(h2$lambda(null));
    $receiver_0_8.unaryPlus_pdl1vz$('model: ' + $receiver_0.title);
    $receiver_0_7.child_52psg1$($receiver_0_8.create());
    var $receiver_0_9 = new RDOMBuilder_init(h4$lambda('text-title text-uppercase text-muted mt-3 mb-2'));
    $receiver_0_9.unaryPlus_pdl1vz$('made by: ' + $receiver_0.company);
    $receiver_0_7.child_52psg1$($receiver_0_9.create());
    var $receiver_0_10 = new RDOMBuilder_init(h4$lambda('text-blue'));
    var $receiver_0_11 = new RDOMBuilder_init(strong$lambda(null));
    $receiver_0_11.unaryPlus_pdl1vz$('Price : ');
    var $receiver_0_12 = new RDOMBuilder_init(span$lambda(null));
    $receiver_0_12.unaryPlus_pdl1vz$('\u20B9' + $receiver_0.price);
    $receiver_0_11.child_52psg1$($receiver_0_12.create());
    $receiver_0_10.child_52psg1$($receiver_0_11.create());
    $receiver_0_7.child_52psg1$($receiver_0_10.create());
    var $receiver_0_13 = new RDOMBuilder_init(p$lambda('text-capitalize font-weight-bold mt-3 mb-0'));
    $receiver_0_13.unaryPlus_pdl1vz$('Some info about the product');
    $receiver_0_7.child_52psg1$($receiver_0_13.create());
    var $receiver_0_14 = new RDOMBuilder_init(p$lambda('text-muted lead'));
    $receiver_0_14.unaryPlus_pdl1vz$($receiver_0.info);
    $receiver_0_7.child_52psg1$($receiver_0_14.create());
    routeLink($receiver_0_7, '/', void 0, void 0, Details$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    var $receiver_0_15 = new StyledDOMBuilder_init(styledButton$lambda(null, null, null));
    var $receiver_1 = $receiver_0_15.css;
    set_borderColor($receiver_1, new Color(ComponentStyles$Colors_getInstance().mainYellow));
    set_color($receiver_1, new Color(ComponentStyles$Colors_getInstance().mainYellow));
    $receiver_1.unaryPlus_ocqyl0$(ComponentStyles_getInstance().buttonContainer);
    $receiver_0_15.attrs.disabled = $receiver_0.inCart;
    set_onClickFunction($receiver_0_15.attrs, Details$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(value, $receiver_0));
    $receiver_0_15.unaryPlus_pdl1vz$($receiver_0.inCart ? 'inCart' : 'Add to Cart');
    $receiver_0_7.child_52psg1$($receiver_0_15.create());
    $receiver_0_4.child_52psg1$($receiver_0_7.create());
    $receiver_0_0.child_52psg1$($receiver_0_4.create());
    $receiver.child_52psg1$($receiver_0_0.create());
    return Unit;
  }
  function Details$lambda$lambda($receiver) {
    $receiver.invoke_ory6b3$(productConsumer, Details$lambda$lambda$lambda);
    return Unit;
  }
  function Details$lambda($receiver, it) {
    $receiver.invoke_eb8iu4$($module$react.Fragment, Details$lambda$lambda);
    return Unit;
  }
  var Details;
  function details($receiver) {
    return child($receiver, Details);
  }
  function styledButton$lambda_0(closure$formEncType, closure$formMethod, closure$type) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_1(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null]), it);
    };
  }
  function h5$lambda(closure$classes) {
    return function (it) {
      return new H5_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function img$lambda_0(closure$alt, closure$src, closure$classes) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
    };
  }
  function styledDiv$lambda(it) {
    return new DIV_init_0(html.emptyMap, it);
  }
  function div$lambda_0(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function Modal$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$closeModal) {
    return function (event) {
      closure$closeModal();
      return Unit;
    };
  }
  function Modal$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$closeModal) {
    return function ($receiver) {
      var $receiver_0 = new StyledDOMBuilder_init(styledButton$lambda_0(null, null, null));
      var closure$closeModal_0 = closure$closeModal;
      $receiver_0.css.unaryPlus_ocqyl0$(ComponentStyles_getInstance().buttonContainer);
      $receiver_0.unaryPlus_pdl1vz$('Store');
      set_onClickFunction($receiver_0.attrs, Modal$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$closeModal_0));
      $receiver.child_52psg1$($receiver_0.create());
      return Unit;
    };
  }
  function Modal$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$closeModal) {
    return function (event) {
      closure$closeModal();
      return Unit;
    };
  }
  function Modal$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$closeModal) {
    return function ($receiver) {
      var $receiver_0 = new StyledDOMBuilder_init(styledButton$lambda_0(null, null, null));
      var closure$closeModal_0 = closure$closeModal;
      var $receiver_1 = $receiver_0.css;
      $receiver_1.unaryPlus_ocqyl0$(ComponentStyles_getInstance().buttonContainer);
      set_borderColor($receiver_1, new Color(ComponentStyles$Colors_getInstance().mainYellow));
      set_color($receiver_1, new Color(ComponentStyles$Colors_getInstance().mainYellow));
      $receiver_0.unaryPlus_pdl1vz$('Go to cart');
      set_onClickFunction($receiver_0.attrs, Modal$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$closeModal_0));
      $receiver.child_52psg1$($receiver_0.create());
      return Unit;
    };
  }
  function Modal$lambda$lambda($receiver, map) {
    var modalOpen = map.get_11rb$('modalOpen');
    var closeModal = map.get_11rb$('closeModal');
    var modalProduct = map.get_11rb$('modalProduct');
    if (!modalOpen) {
      return;
    } else {
      var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
      $receiver_0.css.unaryPlus_ocqyl0$(ComponentStyles_getInstance().modalContainer);
      var $receiver_0_0 = new RDOMBuilder_init(div$lambda_0('container'));
      var $receiver_0_1 = new RDOMBuilder_init(div$lambda_0('row'));
      var $receiver_0_2 = new StyledDOMBuilder_init(styledDiv$lambda);
      var $receiver_1 = $receiver_0_2.css;
      set_backgroundColor($receiver_1, new Color(ComponentStyles$Colors_getInstance().mainWhite));
      $receiver_1.classes.add_11rb$('col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5');
      var $receiver_0_3 = new RDOMBuilder_init(h5$lambda(null));
      $receiver_0_3.unaryPlus_pdl1vz$('Item Added To The Cart');
      $receiver_0_2.child_52psg1$($receiver_0_3.create());
      var $receiver_0_4 = new RDOMBuilder_init(img$lambda_0('product', modalProduct.img, 'img-fluid'));
      $receiver_0_2.child_52psg1$($receiver_0_4.create());
      var $receiver_0_5 = new RDOMBuilder_init(h5$lambda(null));
      $receiver_0_5.unaryPlus_pdl1vz$(modalProduct.title);
      $receiver_0_2.child_52psg1$($receiver_0_5.create());
      var $receiver_0_6 = new RDOMBuilder_init(h5$lambda('text-muted'));
      $receiver_0_6.unaryPlus_pdl1vz$('Price : ' + '$' + modalProduct.price);
      $receiver_0_2.child_52psg1$($receiver_0_6.create());
      routeLink($receiver_0_2, '/', void 0, void 0, Modal$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closeModal));
      routeLink($receiver_0_2, '/cart', void 0, void 0, Modal$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closeModal));
      $receiver_0_1.child_52psg1$($receiver_0_2.create());
      $receiver_0_0.child_52psg1$($receiver_0_1.create());
      $receiver_0.child_52psg1$($receiver_0_0.create());
      $receiver.child_52psg1$($receiver_0.create());
    }
    return Unit;
  }
  function Modal$lambda($receiver, it) {
    $receiver.invoke_ory6b3$(productConsumer, Modal$lambda$lambda);
    return Unit;
  }
  var Modal;
  function modal($receiver) {
    return child($receiver, Modal);
  }
  function li$lambda(closure$classes) {
    return function (it) {
      return new LI_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function i$lambda(closure$classes) {
    return function (it) {
      return new I_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledButton$lambda_1(closure$formEncType, closure$formMethod, closure$type) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_1(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null]), it);
    };
  }
  function ul$lambda(closure$classes) {
    return function (it) {
      return new UL_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledNav$lambda(it) {
    return new NAV_init(html.emptyMap, it);
  }
  function Navbar$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function Navbar$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('products');
    return Unit;
  }
  function Navbar$lambda$lambda$lambda_0($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledButton$lambda_1(null, null, null));
    $receiver_0.css.unaryPlus_ocqyl0$(ComponentStyles_getInstance().buttonContainer);
    var $receiver_0_0 = new RDOMBuilder_init(i$lambda('fa fa-cart-plus'));
    $receiver_0_0.unaryPlus_pdl1vz$('My Cart');
    $receiver_0.child_52psg1$($receiver_0_0.create());
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  function Navbar$lambda($receiver, it) {
    var $receiver_0 = new StyledDOMBuilder_init(styledNav$lambda);
    $receiver_0.css.classes.add_11rb$('navbar navbar-expand-sm  navbar-dark px-sm-5');
    routeLink($receiver_0, '/', void 0, void 0, Navbar$lambda$lambda$lambda);
    var $receiver_0_0 = new RDOMBuilder_init(ul$lambda('navbar-nav align-items-center'));
    var $receiver_0_1 = new RDOMBuilder_init(li$lambda('nav-items ml-5'));
    routeLink($receiver_0_1, '/', void 0, 'nav-link', Navbar$lambda$lambda$lambda$lambda$lambda);
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    $receiver_0.child_52psg1$($receiver_0_0.create());
    routeLink($receiver_0, '/cart', void 0, 'ml-auto', Navbar$lambda$lambda$lambda_0);
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var Navbar;
  function navBar$lambda($receiver) {
    return Unit;
  }
  function navBar($receiver) {
    child($receiver, Navbar, void 0, navBar$lambda);
  }
  function img$lambda_1(closure$alt, closure$src, closure$classes) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
    };
  }
  function p$lambda_0(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function i$lambda_0(closure$classes) {
    return function (it) {
      return new I_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function button$lambda(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init_0(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode_0(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode_0(closure$formMethod) : null, 'type', closure$type != null ? enumEncode_0(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function div$lambda_1(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function span$lambda_0(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h5$lambda_0(closure$classes) {
    return function (it) {
      return new H5_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledDiv$lambda_0(it) {
    return new DIV_init_0(html.emptyMap, it);
  }
  function ProductProps() {
  }
  ProductProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ProductProps',
    interfaces: []
  };
  function Product$lambda$lambda$lambda$lambda$lambda$lambda(closure$map, closure$props) {
    return function (it) {
      var handleDetail = closure$map.get_11rb$('handleDetail');
      handleDetail(closure$props.product.id);
      return Unit;
    };
  }
  function Product$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$props) {
    return function ($receiver) {
      var $receiver_0 = new RDOMBuilder_init(img$lambda_1('product', closure$props.product.img, 'card-img-top'));
      $receiver.child_52psg1$($receiver_0.create());
      return Unit;
    };
  }
  function Product$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$map, closure$props) {
    return function (it) {
      var addToCart = closure$map.get_11rb$('addToCart');
      var openModal = closure$map.get_11rb$('openModal');
      addToCart(closure$props.product.id);
      openModal(closure$props.product.id);
      return Unit;
    };
  }
  function Product$lambda$lambda$lambda$lambda(closure$props) {
    return function ($receiver, map) {
      var classes = 'img-container p-5';
      var $receiver_0 = new RDOMBuilder_init(div$lambda_1(classes));
      var closure$props_0 = closure$props;
      set_onClickFunction($receiver_0.attrs, Product$lambda$lambda$lambda$lambda$lambda$lambda(map, closure$props_0));
      routeLink($receiver_0, '/details', void 0, void 0, Product$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$props_0));
      var $receiver_0_0 = new RDOMBuilder_init(button$lambda(null, null, null, 'cart-btn'));
      $receiver_0_0.attrs.disabled = closure$props_0.product.inCart;
      set_onClickFunction($receiver_0_0.attrs, Product$lambda$lambda$lambda$lambda$lambda$lambda$lambda(map, closure$props_0));
      if (closure$props_0.product.inCart) {
        var $receiver_0_1 = new RDOMBuilder_init(p$lambda_0('text-capitalize mb-0'));
        $receiver_0_1.unaryPlus_pdl1vz$('in cart');
        $receiver_0_0.child_52psg1$($receiver_0_1.create());
      } else {
        var $receiver_0_2 = new RDOMBuilder_init(i$lambda_0('fa fa-cart-plus'));
        $receiver_0_0.child_52psg1$($receiver_0_2.create());
      }
      $receiver_0.child_52psg1$($receiver_0_0.create());
      $receiver.child_52psg1$($receiver_0.create());
      return Unit;
    };
  }
  function Product$lambda($receiver, props) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_0);
    $receiver_0.css.classes = mutableListOf(['col-9 mx-auto col-md-6 col-lg-3 my-3']);
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda_1('card'));
    $receiver_0_0.invoke_ory6b3$(productConsumer, Product$lambda$lambda$lambda$lambda(props));
    var $receiver_0_1 = new RDOMBuilder_init(div$lambda_1('card-footer d-flex justify-content-between'));
    var $receiver_0_2 = new RDOMBuilder_init(p$lambda_0('align-self-center mb-0'));
    $receiver_0_2.unaryPlus_pdl1vz$(props.product.title);
    $receiver_0_1.child_52psg1$($receiver_0_2.create());
    var $receiver_0_3 = new RDOMBuilder_init(h5$lambda_0('text-blue font-italic mb-0'));
    var $receiver_0_4 = new RDOMBuilder_init(span$lambda_0('mr-1'));
    $receiver_0_4.unaryPlus_pdl1vz$('\u20B9');
    $receiver_0_3.child_52psg1$($receiver_0_4.create());
    $receiver_0_3.attrs.text_3p81yu$(props.product.price);
    $receiver_0_1.child_52psg1$($receiver_0_3.create());
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    $receiver_0.child_52psg1$($receiver_0_0.create());
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var Product;
  function product$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function product($receiver, handler) {
    child($receiver, Product, void 0, product$lambda(handler));
  }
  function div$lambda_2(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function ProductList$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.name = 'our';
    $receiver.title = 'products';
    return Unit;
  }
  function ProductList$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$product) {
    return function ($receiver) {
      $receiver.key = closure$product.id;
      $receiver.product = closure$product;
      return Unit;
    };
  }
  function ProductList$lambda$lambda$lambda$lambda$lambda$lambda($receiver, data) {
    var tmp$, tmp$_0;
    if ((tmp$_0 = Kotlin.isType(tmp$ = data.get_11rb$('storeProducts'), List) ? tmp$ : null) != null) {
      var tmp$_1;
      tmp$_1 = tmp$_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        product($receiver, ProductList$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(element));
      }
    }return Unit;
  }
  function ProductList$lambda$lambda($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_2('py-5'));
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda_2('container'));
    title($receiver_0_0, ProductList$lambda$lambda$lambda$lambda$lambda);
    var $receiver_0_1 = new RDOMBuilder_init(div$lambda_2('row'));
    $receiver_0_1.invoke_ory6b3$(productConsumer, ProductList$lambda$lambda$lambda$lambda$lambda$lambda);
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    $receiver_0.child_52psg1$($receiver_0_0.create());
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  function ProductList$lambda($receiver, it) {
    $receiver.invoke_eb8iu4$($module$react.Fragment, ProductList$lambda$lambda);
    return Unit;
  }
  var ProductList;
  function productList$lambda($receiver) {
    return Unit;
  }
  function productList($receiver) {
    return child($receiver, ProductList, void 0, productList$lambda);
  }
  function strong$lambda_0(closure$classes) {
    return function (it) {
      return new STRONG_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h1$lambda_0(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_3(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function TitleProps() {
  }
  TitleProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TitleProps',
    interfaces: []
  };
  function Title$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_3('row'));
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda_3('col-10 mx-auto my-2 text-center text-title'));
    var $receiver_0_1 = new RDOMBuilder_init(h1$lambda_0('font-weight-bold '));
    $receiver_0_1.unaryPlus_pdl1vz$(props.name);
    var $receiver_0_2 = new RDOMBuilder_init(strong$lambda_0('text-blue'));
    $receiver_0_2.unaryPlus_pdl1vz$(' ' + props.title);
    $receiver_0_1.child_52psg1$($receiver_0_2.create());
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    $receiver_0.child_52psg1$($receiver_0_0.create());
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var Title;
  function title$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function title($receiver, handler) {
    return child($receiver, Title, void 0, title$lambda(handler));
  }
  function section$lambda(closure$classes) {
    return function (it) {
      return new SECTION_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function Cart$lambda$lambda$lambda$lambda($receiver) {
    $receiver.name = 'your';
    $receiver.title = 'cart';
    return Unit;
  }
  function Cart$lambda$lambda$lambda$lambda_0(closure$map) {
    return function ($receiver) {
      $receiver.contextValue = closure$map;
      return Unit;
    };
  }
  function Cart$lambda$lambda$lambda$lambda_1(closure$cartSubTotal, closure$cartTax, closure$cartTotal, closure$clearCart) {
    return function ($receiver) {
      $receiver.cartSubtotal = closure$cartSubTotal;
      $receiver.cartTax = closure$cartTax;
      $receiver.cartTotal = closure$cartTotal;
      $receiver.clearCart = closure$clearCart;
      return Unit;
    };
  }
  function Cart$lambda$lambda$lambda($receiver, map) {
    var cartProducts = map.get_11rb$('cartProducts');
    var cartSubTotal = map.get_11rb$('cartSubtotal');
    var cartTax = map.get_11rb$('cartTax');
    var cartTotal_0 = map.get_11rb$('cartTotal');
    var clearCart = map.get_11rb$('clearCart');
    if (!(cartProducts == null || cartProducts.isEmpty())) {
      title($receiver, Cart$lambda$lambda$lambda$lambda);
      cartColumns($receiver);
      cartList($receiver, Cart$lambda$lambda$lambda$lambda_0(map));
      cartTotal($receiver, Cart$lambda$lambda$lambda$lambda_1(cartSubTotal, cartTax, cartTotal_0, clearCart));
    } else
      emptyCart($receiver);
    return Unit;
  }
  function Cart$lambda($receiver, it) {
    var $receiver_0 = new RDOMBuilder_init(section$lambda(null));
    $receiver_0.invoke_ory6b3$(productConsumer, Cart$lambda$lambda$lambda);
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var Cart;
  function cart($receiver) {
    return child($receiver, Cart);
  }
  function p$lambda_1(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_4(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function CartColumns$lambda($receiver, it) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_4('container-fluid text-center d-none d-lg-block'));
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda_4('row'));
    var $receiver_0_1 = new RDOMBuilder_init(div$lambda_4('col-10 mx-auto col-lg-2'));
    var $receiver_0_2 = new RDOMBuilder_init(p$lambda_1('text-uppercase'));
    $receiver_0_2.unaryPlus_pdl1vz$('products');
    $receiver_0_1.child_52psg1$($receiver_0_2.create());
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    var $receiver_0_3 = new RDOMBuilder_init(div$lambda_4('col-10 mx-auto col-lg-2'));
    var $receiver_0_4 = new RDOMBuilder_init(p$lambda_1('text-uppercase'));
    $receiver_0_4.unaryPlus_pdl1vz$('name of product');
    $receiver_0_3.child_52psg1$($receiver_0_4.create());
    $receiver_0_0.child_52psg1$($receiver_0_3.create());
    var $receiver_0_5 = new RDOMBuilder_init(div$lambda_4('col-10 mx-auto col-lg-2'));
    var $receiver_0_6 = new RDOMBuilder_init(p$lambda_1('text-uppercase'));
    $receiver_0_6.unaryPlus_pdl1vz$('price');
    $receiver_0_5.child_52psg1$($receiver_0_6.create());
    $receiver_0_0.child_52psg1$($receiver_0_5.create());
    var $receiver_0_7 = new RDOMBuilder_init(div$lambda_4('col-10 mx-auto col-lg-2'));
    var $receiver_0_8 = new RDOMBuilder_init(p$lambda_1('text-uppercase'));
    $receiver_0_8.unaryPlus_pdl1vz$('quantity');
    $receiver_0_7.child_52psg1$($receiver_0_8.create());
    $receiver_0_0.child_52psg1$($receiver_0_7.create());
    var $receiver_0_9 = new RDOMBuilder_init(div$lambda_4('col-10 mx-auto col-lg-2'));
    var $receiver_0_10 = new RDOMBuilder_init(p$lambda_1('text-uppercase'));
    $receiver_0_10.unaryPlus_pdl1vz$('remove');
    $receiver_0_9.child_52psg1$($receiver_0_10.create());
    $receiver_0_0.child_52psg1$($receiver_0_9.create());
    var $receiver_0_11 = new RDOMBuilder_init(div$lambda_4('col-10 mx-auto col-lg-2'));
    var $receiver_0_12 = new RDOMBuilder_init(p$lambda_1('text-uppercase'));
    $receiver_0_12.unaryPlus_pdl1vz$('total');
    $receiver_0_11.child_52psg1$($receiver_0_12.create());
    $receiver_0_0.child_52psg1$($receiver_0_11.create());
    $receiver_0.child_52psg1$($receiver_0_0.create());
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var CartColumns;
  function cartColumns$lambda($receiver) {
    return Unit;
  }
  function cartColumns($receiver) {
    child($receiver, CartColumns, void 0, cartColumns$lambda);
  }
  function styledImg$lambda(closure$alt, closure$src) {
    return function (it) {
      return new IMG_init_0(attributesMapOf_1(['alt', closure$alt, 'src', closure$src]), it);
    };
  }
  function span$lambda_1(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_5(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function i$lambda_1(closure$classes) {
    return function (it) {
      return new I_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function strong$lambda_1(closure$classes) {
    return function (it) {
      return new STRONG_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function CartItem$lambda$lambda$lambda$lambda$lambda$lambda(closure$props) {
    return function (it) {
      closure$props.decrement(closure$props.item.id);
      return Unit;
    };
  }
  function CartItem$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$props) {
    return function (it) {
      closure$props.decrement(closure$props.item.id);
      return Unit;
    };
  }
  function CartItem$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$props) {
    return function (it) {
      closure$props.removeItem(closure$props.item.id);
      return Unit;
    };
  }
  function CartItem$lambda$lambda$lambda$lambda$lambda(closure$props) {
    return function (it) {
      closure$props.removeItem(closure$props.item.id);
      return Unit;
    };
  }
  function CartItem$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_5('row my-1 text-capitalize text-center'));
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda_5('col-10 mx-auto col-lg-2'));
    var $receiver_0_1 = new StyledDOMBuilder_init(styledImg$lambda('product', props.item.img));
    var $receiver_1 = $receiver_0_1.css;
    set_width($receiver_1, get_rem(5));
    set_height($receiver_1, get_rem(5));
    $receiver_1.classes.add_11rb$('img-fluid');
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    $receiver_0.child_52psg1$($receiver_0_0.create());
    var $receiver_0_2 = new RDOMBuilder_init(div$lambda_5('col-10 mx-auto col-lg-2'));
    var $receiver_0_3 = new RDOMBuilder_init(span$lambda_1('d-lg-none'));
    $receiver_0_3.unaryPlus_pdl1vz$('product : ');
    $receiver_0_2.child_52psg1$($receiver_0_3.create());
    $receiver_0_2.unaryPlus_pdl1vz$(props.item.title);
    $receiver_0.child_52psg1$($receiver_0_2.create());
    var $receiver_0_4 = new RDOMBuilder_init(div$lambda_5('col-10 mx-auto col-lg-2'));
    var $receiver_0_5 = new RDOMBuilder_init(span$lambda_1('d-lg-none'));
    $receiver_0_5.unaryPlus_pdl1vz$('price : $');
    $receiver_0_4.child_52psg1$($receiver_0_5.create());
    $receiver_0_4.unaryPlus_pdl1vz$(props.item.price.toString());
    $receiver_0.child_52psg1$($receiver_0_4.create());
    var $receiver_0_6 = new RDOMBuilder_init(div$lambda_5('col-10 mx-auto col-lg-2 my-2 my-lg-0'));
    var $receiver_0_7 = new RDOMBuilder_init(div$lambda_5('d-flex justify-content-center'));
    var $receiver_0_8 = new RDOMBuilder_init(span$lambda_1('btn btn-black mx-1'));
    set_onClickFunction($receiver_0_8.attrs, CartItem$lambda$lambda$lambda$lambda$lambda$lambda(props));
    $receiver_0_8.unaryPlus_pdl1vz$('-');
    $receiver_0_7.child_52psg1$($receiver_0_8.create());
    var $receiver_0_9 = new RDOMBuilder_init(span$lambda_1('btn btn-black mx-1'));
    set_onClickFunction($receiver_0_9.attrs, CartItem$lambda$lambda$lambda$lambda$lambda$lambda_0(props));
    $receiver_0_9.unaryPlus_pdl1vz$(props.item.count.toString());
    $receiver_0_7.child_52psg1$($receiver_0_9.create());
    var $receiver_0_10 = new RDOMBuilder_init(span$lambda_1('btn btn-black mx-1'));
    set_onClickFunction($receiver_0_10.attrs, CartItem$lambda$lambda$lambda$lambda$lambda$lambda_1(props));
    $receiver_0_10.unaryPlus_pdl1vz$('+');
    $receiver_0_7.child_52psg1$($receiver_0_10.create());
    $receiver_0_6.child_52psg1$($receiver_0_7.create());
    $receiver_0.child_52psg1$($receiver_0_6.create());
    var $receiver_0_11 = new RDOMBuilder_init(div$lambda_5('col-10 mx-auto col-lg-2'));
    var $receiver_0_12 = new RDOMBuilder_init(div$lambda_5('cart-icon'));
    var $receiver_0_13 = new RDOMBuilder_init(i$lambda_1('fa fa-trash'));
    $receiver_0_12.child_52psg1$($receiver_0_13.create());
    set_onClickFunction($receiver_0_12.attrs, CartItem$lambda$lambda$lambda$lambda$lambda(props));
    $receiver_0_11.child_52psg1$($receiver_0_12.create());
    $receiver_0.child_52psg1$($receiver_0_11.create());
    var $receiver_0_14 = new RDOMBuilder_init(div$lambda_5('col-10 mx-auto col-lg-2'));
    var $receiver_0_15 = new RDOMBuilder_init(strong$lambda_1(null));
    $receiver_0_15.unaryPlus_pdl1vz$('item total : ' + '\u20B9' + ' ' + props.item.total);
    $receiver_0_14.child_52psg1$($receiver_0_15.create());
    $receiver_0.child_52psg1$($receiver_0_14.create());
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var CartItem;
  function CartItemProps() {
  }
  CartItemProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CartItemProps',
    interfaces: []
  };
  function cartItem$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function cartItem($receiver, handler) {
    child($receiver, CartItem, void 0, cartItem$lambda(handler));
  }
  function div$lambda_6(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function CartList$lambda$lambda$lambda$lambda(closure$item, this$, closure$increment, closure$decrement, closure$removeItem) {
    return function ($receiver) {
      set_key(this$.attrs, closure$item.id.toString());
      $receiver.item = closure$item;
      $receiver.increment = closure$increment;
      $receiver.decrement = closure$decrement;
      $receiver.removeItem = closure$removeItem;
      return Unit;
    };
  }
  function CartList$lambda($receiver, props) {
    var cartProducts = props.contextValue.get_11rb$('cartProducts');
    var increment = props.contextValue.get_11rb$('increment');
    var decrement = props.contextValue.get_11rb$('decrement');
    var removeItem = props.contextValue.get_11rb$('removeItem');
    var $receiver_0 = new RDOMBuilder_init(div$lambda_6('container-fluid'));
    var tmp$;
    tmp$ = cartProducts.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      cartItem($receiver_0, CartList$lambda$lambda$lambda$lambda(element, $receiver_0, increment, decrement, removeItem));
    }
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var CartList;
  function CartListProps() {
  }
  CartListProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CartListProps',
    interfaces: []
  };
  function cartList$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function cartList($receiver, handler) {
    child($receiver, CartList, void 0, cartList$lambda(handler));
  }
  function button$lambda_0(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init_0(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode_0(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode_0(closure$formMethod) : null, 'type', closure$type != null ? enumEncode_0(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function span$lambda_2(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function strong$lambda_2(closure$classes) {
    return function (it) {
      return new STRONG_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h5$lambda_1(closure$classes) {
    return function (it) {
      return new H5_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_7(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function CartTotal$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$props) {
    return function (it) {
      closure$props.clearCart();
      return Unit;
    };
  }
  function CartTotal$lambda$lambda$lambda$lambda$lambda$lambda(closure$props) {
    return function ($receiver) {
      var classes = 'btn btn-outline-danger text-uppercase mb-3 px-5';
      var $receiver_0 = new RDOMBuilder_init(button$lambda_0(null, null, null, classes));
      var closure$props_0 = closure$props;
      $receiver_0.attrs.type = ButtonType.button;
      set_onClickFunction($receiver_0.attrs, CartTotal$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$props_0));
      $receiver_0.unaryPlus_pdl1vz$('Clear Cart');
      $receiver.child_52psg1$($receiver_0.create());
      return Unit;
    };
  }
  function CartTotal$lambda$lambda(closure$props) {
    return function ($receiver) {
      var classes = 'container';
      var $receiver_0 = new RDOMBuilder_init(div$lambda_7(classes));
      var closure$props_0 = closure$props;
      var $receiver_0_0 = new RDOMBuilder_init(div$lambda_7('row'));
      var $receiver_0_1 = new RDOMBuilder_init(div$lambda_7('col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'));
      routeLink($receiver_0_1, '/', void 0, void 0, CartTotal$lambda$lambda$lambda$lambda$lambda$lambda(closure$props_0));
      var $receiver_0_2 = new RDOMBuilder_init(h5$lambda_1(null));
      var $receiver_0_3 = new RDOMBuilder_init(span$lambda_2('text-title'));
      $receiver_0_3.unaryPlus_pdl1vz$('subtotal :');
      $receiver_0_2.child_52psg1$($receiver_0_3.create());
      var $receiver_0_4 = new RDOMBuilder_init(strong$lambda_2(null));
      $receiver_0_4.unaryPlus_pdl1vz$('\u20B9' + ' ' + closure$props_0.cartSubtotal);
      $receiver_0_2.child_52psg1$($receiver_0_4.create());
      $receiver_0_1.child_52psg1$($receiver_0_2.create());
      var $receiver_0_5 = new RDOMBuilder_init(h5$lambda_1(null));
      var $receiver_0_6 = new RDOMBuilder_init(span$lambda_2('text-title'));
      $receiver_0_6.unaryPlus_pdl1vz$('tax :');
      $receiver_0_5.child_52psg1$($receiver_0_6.create());
      var $receiver_0_7 = new RDOMBuilder_init(strong$lambda_2(null));
      $receiver_0_7.unaryPlus_pdl1vz$('\u20B9' + ' ' + closure$props_0.cartTax);
      $receiver_0_5.child_52psg1$($receiver_0_7.create());
      $receiver_0_1.child_52psg1$($receiver_0_5.create());
      var $receiver_0_8 = new RDOMBuilder_init(h5$lambda_1(null));
      var $receiver_0_9 = new RDOMBuilder_init(span$lambda_2('text-title'));
      $receiver_0_9.unaryPlus_pdl1vz$('total :');
      $receiver_0_8.child_52psg1$($receiver_0_9.create());
      var $receiver_0_10 = new RDOMBuilder_init(strong$lambda_2(null));
      $receiver_0_10.unaryPlus_pdl1vz$('\u20B9' + ' ' + closure$props_0.cartTotal);
      $receiver_0_8.child_52psg1$($receiver_0_10.create());
      $receiver_0_1.child_52psg1$($receiver_0_8.create());
      $receiver_0_0.child_52psg1$($receiver_0_1.create());
      $receiver_0.child_52psg1$($receiver_0_0.create());
      $receiver.child_52psg1$($receiver_0.create());
      return Unit;
    };
  }
  function CartTotal$lambda($receiver, props) {
    $receiver.invoke_eb8iu4$($module$react.Fragment, CartTotal$lambda$lambda(props));
    return Unit;
  }
  var CartTotal;
  function CartTotalProps() {
  }
  CartTotalProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CartTotalProps',
    interfaces: []
  };
  function cartTotal$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function cartTotal($receiver, handler) {
    child($receiver, CartTotal, void 0, cartTotal$lambda(handler));
  }
  function h1$lambda_1(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_8(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function EmptyCart$lambda($receiver, it) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_8('container mt-5'));
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda_8('row'));
    var $receiver_0_1 = new RDOMBuilder_init(div$lambda_8('col-10 mx-auto text-center text-title'));
    var $receiver_0_2 = new RDOMBuilder_init(h1$lambda_1(null));
    $receiver_0_2.unaryPlus_pdl1vz$('Your cart is currently empty');
    $receiver_0_1.child_52psg1$($receiver_0_2.create());
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    $receiver_0.child_52psg1$($receiver_0_0.create());
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var EmptyCart;
  function emptyCart$lambda($receiver) {
    return Unit;
  }
  function emptyCart($receiver) {
    child($receiver, EmptyCart, void 0, emptyCart$lambda);
  }
  function ProductModel(id, title, img, price, company, info, inCart, count, total) {
    if (id === void 0)
      id = 0;
    if (title === void 0)
      title = '';
    if (img === void 0)
      img = '';
    if (price === void 0)
      price = 0;
    if (company === void 0)
      company = '';
    if (info === void 0)
      info = '';
    if (inCart === void 0)
      inCart = false;
    if (count === void 0)
      count = 0;
    if (total === void 0)
      total = 0;
    this.id = id;
    this.title = title;
    this.img = img;
    this.price = price;
    this.company = company;
    this.info = info;
    this.inCart = inCart;
    this.count = count;
    this.total = total;
  }
  ProductModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProductModel',
    interfaces: []
  };
  ProductModel.prototype.component1 = function () {
    return this.id;
  };
  ProductModel.prototype.component2 = function () {
    return this.title;
  };
  ProductModel.prototype.component3 = function () {
    return this.img;
  };
  ProductModel.prototype.component4 = function () {
    return this.price;
  };
  ProductModel.prototype.component5 = function () {
    return this.company;
  };
  ProductModel.prototype.component6 = function () {
    return this.info;
  };
  ProductModel.prototype.component7 = function () {
    return this.inCart;
  };
  ProductModel.prototype.component8 = function () {
    return this.count;
  };
  ProductModel.prototype.component9 = function () {
    return this.total;
  };
  ProductModel.prototype.copy_ti0m1x$ = function (id, title, img, price, company, info, inCart, count, total) {
    return new ProductModel(id === void 0 ? this.id : id, title === void 0 ? this.title : title, img === void 0 ? this.img : img, price === void 0 ? this.price : price, company === void 0 ? this.company : company, info === void 0 ? this.info : info, inCart === void 0 ? this.inCart : inCart, count === void 0 ? this.count : count, total === void 0 ? this.total : total);
  };
  ProductModel.prototype.toString = function () {
    return 'ProductModel(id=' + Kotlin.toString(this.id) + (', title=' + Kotlin.toString(this.title)) + (', img=' + Kotlin.toString(this.img)) + (', price=' + Kotlin.toString(this.price)) + (', company=' + Kotlin.toString(this.company)) + (', info=' + Kotlin.toString(this.info)) + (', inCart=' + Kotlin.toString(this.inCart)) + (', count=' + Kotlin.toString(this.count)) + (', total=' + Kotlin.toString(this.total)) + ')';
  };
  ProductModel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.img) | 0;
    result = result * 31 + Kotlin.hashCode(this.price) | 0;
    result = result * 31 + Kotlin.hashCode(this.company) | 0;
    result = result * 31 + Kotlin.hashCode(this.info) | 0;
    result = result * 31 + Kotlin.hashCode(this.inCart) | 0;
    result = result * 31 + Kotlin.hashCode(this.count) | 0;
    result = result * 31 + Kotlin.hashCode(this.total) | 0;
    return result;
  };
  ProductModel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.img, other.img) && Kotlin.equals(this.price, other.price) && Kotlin.equals(this.company, other.company) && Kotlin.equals(this.info, other.info) && Kotlin.equals(this.inCart, other.inCart) && Kotlin.equals(this.count, other.count) && Kotlin.equals(this.total, other.total)))));
  };
  function SheetResponse_0(majorDimension, range, values) {
    SheetResponse$Companion_getInstance_0();
    this.majorDimension = majorDimension;
    this.range = range;
    this.values = values;
  }
  function SheetResponse$Companion_0() {
    SheetResponse$Companion_instance_0 = this;
  }
  SheetResponse$Companion_0.prototype.serializer = function () {
    return SheetResponse$$serializer_getInstance_0();
  };
  SheetResponse$Companion_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SheetResponse$Companion_instance_0 = null;
  function SheetResponse$Companion_getInstance_0() {
    if (SheetResponse$Companion_instance_0 === null) {
      new SheetResponse$Companion_0();
    }return SheetResponse$Companion_instance_0;
  }
  function SheetResponse$$serializer_0() {
    this.descriptor_ngectb$_0 = new PluginGeneratedSerialDescriptor('models.SheetResponse', this, 3);
    this.descriptor.addElement_ivxn3r$('majorDimension', false);
    this.descriptor.addElement_ivxn3r$('range', false);
    this.descriptor.addElement_ivxn3r$('values', false);
    SheetResponse$$serializer_instance_0 = this;
  }
  Object.defineProperty(SheetResponse$$serializer_0.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_ngectb$_0;
    }
  });
  SheetResponse$$serializer_0.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.majorDimension);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.range);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, new ArrayListSerializer(new ArrayListSerializer(internal.StringSerializer)), value.values);
    output.endStructure_24f42q$(this.descriptor);
  };
  SheetResponse$$serializer_0.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeSerializableElement_12e8id$(this.descriptor, 2, new ArrayListSerializer(new ArrayListSerializer(internal.StringSerializer)), local2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return SheetResponse_init_0(bitMask0, local0, local1, local2, null);
  };
  SheetResponse$$serializer_0.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, new ArrayListSerializer(new ArrayListSerializer(internal.StringSerializer))];
  };
  SheetResponse$$serializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var SheetResponse$$serializer_instance_0 = null;
  function SheetResponse$$serializer_getInstance_0() {
    if (SheetResponse$$serializer_instance_0 === null) {
      new SheetResponse$$serializer_0();
    }return SheetResponse$$serializer_instance_0;
  }
  function SheetResponse_init_0(seen1, majorDimension, range, values, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(SheetResponse_0.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('majorDimension');
    else
      $this.majorDimension = majorDimension;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('range');
    else
      $this.range = range;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('values');
    else
      $this.values = values;
    return $this;
  }
  SheetResponse_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SheetResponse',
    interfaces: []
  };
  SheetResponse_0.prototype.component1 = function () {
    return this.majorDimension;
  };
  SheetResponse_0.prototype.component2 = function () {
    return this.range;
  };
  SheetResponse_0.prototype.component3 = function () {
    return this.values;
  };
  SheetResponse_0.prototype.copy_b32kzi$ = function (majorDimension, range, values) {
    return new SheetResponse_0(majorDimension === void 0 ? this.majorDimension : majorDimension, range === void 0 ? this.range : range, values === void 0 ? this.values : values);
  };
  SheetResponse_0.prototype.toString = function () {
    return 'SheetResponse(majorDimension=' + Kotlin.toString(this.majorDimension) + (', range=' + Kotlin.toString(this.range)) + (', values=' + Kotlin.toString(this.values)) + ')';
  };
  SheetResponse_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.majorDimension) | 0;
    result = result * 31 + Kotlin.hashCode(this.range) | 0;
    result = result * 31 + Kotlin.hashCode(this.values) | 0;
    return result;
  };
  SheetResponse_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.majorDimension, other.majorDimension) && Kotlin.equals(this.range, other.range) && Kotlin.equals(this.values, other.values)))));
  };
  function TickerProps() {
  }
  TickerProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TickerProps',
    interfaces: []
  };
  function TickerState() {
  }
  TickerState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TickerState',
    interfaces: []
  };
  function Ticker(props) {
    RComponent_init_0(props, this);
    this.timerID = null;
  }
  Ticker.prototype.init_65a95q$ = function ($receiver, props) {
    $receiver.secondsElapsed = props.startFrom;
  };
  function Ticker$componentDidMount$lambda$lambda($receiver) {
    $receiver.secondsElapsed = $receiver.secondsElapsed + 1 | 0;
    return Unit;
  }
  function Ticker$componentDidMount$lambda(this$Ticker) {
    return function () {
      setState(this$Ticker, Ticker$componentDidMount$lambda$lambda);
      return Unit;
    };
  }
  Ticker.prototype.componentDidMount = function () {
    this.timerID = window.setInterval(Ticker$componentDidMount$lambda(this), 1000);
  };
  Ticker.prototype.componentWillUnmount = function () {
    window.clearInterval(ensureNotNull(this.timerID));
  };
  Ticker.prototype.render_ss14n$ = function ($receiver) {
    $receiver.unaryPlus_pdl1vz$('This app has been running for ' + this.state.secondsElapsed + ' seconds.');
  };
  Ticker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ticker',
    interfaces: [RComponent]
  };
  function ticker$lambda(closure$startFrom) {
    return function ($receiver) {
      $receiver.attrs.startFrom = closure$startFrom;
      return Unit;
    };
  }
  function ticker($receiver, startFrom) {
    if (startFrom === void 0)
      startFrom = 0;
    return $receiver.child_ssazr1$(getKClass(Ticker), ticker$lambda(startFrom));
  }
  function styledDiv$lambda_1(it) {
    return new DIV_init_0(html.emptyMap, it);
  }
  function styledInput$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name) {
    return function (it) {
      return new INPUT_init(attributesMapOf_1(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name]), it);
    };
  }
  function WelcomeState(name) {
    this.name = name;
  }
  WelcomeState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WelcomeState',
    interfaces: []
  };
  WelcomeState.prototype.component1 = function () {
    return this.name;
  };
  WelcomeState.prototype.copy_61zpoe$ = function (name) {
    return new WelcomeState(name === void 0 ? this.name : name);
  };
  WelcomeState.prototype.toString = function () {
    return 'WelcomeState(name=' + Kotlin.toString(this.name) + ')';
  };
  WelcomeState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  WelcomeState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function Welcome(props) {
    RComponent_init_0(props, this);
    this.state = new WelcomeState(props.name);
  }
  function Welcome$render$lambda$lambda$lambda(this$Welcome) {
    return function (event) {
      var tmp$, tmp$_0;
      tmp$_0 = new WelcomeState((Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value);
      this$Welcome.setState(tmp$_0);
      return Unit;
    };
  }
  Welcome.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_1);
    $receiver_0.css.unaryPlus_ocqyl0$(WelcomeStyles_getInstance().textContainer);
    $receiver_0.unaryPlus_pdl1vz$('Hello, ' + this.state.name);
    $receiver.child_52psg1$($receiver_0.create());
    var $receiver_0_0 = new StyledDOMBuilder_init(styledInput$lambda(null, null, null, null));
    $receiver_0_0.css.unaryPlus_ocqyl0$(WelcomeStyles_getInstance().textInput);
    var $receiver_1 = $receiver_0_0.attrs;
    $receiver_1.type = InputType.text;
    $receiver_1.value = this.state.name;
    set_onChangeFunction($receiver_1, Welcome$render$lambda$lambda$lambda(this));
    $receiver.child_52psg1$($receiver_0_0.create());
  };
  Welcome.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Welcome',
    interfaces: [RComponent]
  };
  $$importsForInline$$['ktor-ktor-client-core-jsLegacy'] = $module$ktor_ktor_client_core_jsLegacy;
  Object.defineProperty(_, 'KtorApi', {
    get: KtorApi_getInstance
  });
  Object.defineProperty(SheetResponse, 'Companion', {
    get: SheetResponse$Companion_getInstance
  });
  Object.defineProperty(SheetResponse, '$serializer', {
    get: SheetResponse$$serializer_getInstance
  });
  _.SheetResponse_init_w5r3kw$ = SheetResponse_init;
  _.SheetResponse = SheetResponse;
  Object.defineProperty(ComponentStyles.prototype, 'Colors', {
    get: ComponentStyles$Colors_getInstance
  });
  Object.defineProperty(_, 'ComponentStyles', {
    get: ComponentStyles_getInstance
  });
  Object.defineProperty(_, 'WelcomeStyles', {
    get: WelcomeStyles_getInstance
  });
  var package$app = _.app || (_.app = {});
  package$app.App = App;
  package$app.app_ss14n$ = app;
  _.main = main;
  var package$components = _.components || (_.components = {});
  Object.defineProperty(package$components, 'productContext', {
    get: function () {
      return productContext;
    }
  });
  package$components.ContextState = ContextState;
  package$components.ProductProvider = ProductProvider;
  Object.defineProperty(package$components, 'productConsumer', {
    get: function () {
      return productConsumer;
    }
  });
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  Object.defineProperty(package$components, 'Default', {
    get: function () {
      return Default;
    }
  });
  package$components.default_ss14n$ = default_0;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  Object.defineProperty(package$components, 'Details', {
    get: function () {
      return Details;
    }
  });
  package$components.details_ss14n$ = details;
  Object.defineProperty(package$components, 'Modal', {
    get: function () {
      return Modal;
    }
  });
  package$components.modal_ss14n$ = modal;
  Object.defineProperty(package$components, 'Navbar', {
    get: function () {
      return Navbar;
    }
  });
  package$components.navBar_ss14n$ = navBar;
  package$components.ProductProps = ProductProps;
  Object.defineProperty(package$components, 'Product', {
    get: function () {
      return Product;
    }
  });
  package$components.product_x9uup$ = product;
  Object.defineProperty(package$components, 'ProductList', {
    get: function () {
      return ProductList;
    }
  });
  package$components.productList_ss14n$ = productList;
  package$components.TitleProps = TitleProps;
  Object.defineProperty(package$components, 'Title', {
    get: function () {
      return Title;
    }
  });
  package$components.title_dcmkk8$ = title;
  var package$cart = package$components.cart || (package$components.cart = {});
  Object.defineProperty(package$cart, 'Cart', {
    get: function () {
      return Cart;
    }
  });
  package$cart.cart_ss14n$ = cart;
  Object.defineProperty(package$cart, 'CartColumns', {
    get: function () {
      return CartColumns;
    }
  });
  package$cart.cartColumns_ss14n$ = cartColumns;
  Object.defineProperty(package$cart, 'CartItem', {
    get: function () {
      return CartItem;
    }
  });
  package$cart.CartItemProps = CartItemProps;
  package$cart.cartItem_ng8igx$ = cartItem;
  Object.defineProperty(package$cart, 'CartList', {
    get: function () {
      return CartList;
    }
  });
  package$cart.CartListProps = CartListProps;
  package$cart.cartList_fib1m4$ = cartList;
  Object.defineProperty(package$cart, 'CartTotal', {
    get: function () {
      return CartTotal;
    }
  });
  package$cart.CartTotalProps = CartTotalProps;
  package$cart.cartTotal_hspptu$ = cartTotal;
  Object.defineProperty(package$cart, 'EmptyCart', {
    get: function () {
      return EmptyCart;
    }
  });
  package$cart.emptyCart_ss14n$ = emptyCart;
  var package$models = _.models || (_.models = {});
  package$models.ProductModel = ProductModel;
  Object.defineProperty(SheetResponse_0, 'Companion', {
    get: SheetResponse$Companion_getInstance_0
  });
  Object.defineProperty(SheetResponse_0, '$serializer', {
    get: SheetResponse$$serializer_getInstance_0
  });
  package$models.SheetResponse_init_w5r3kw$ = SheetResponse_init_0;
  package$models.SheetResponse = SheetResponse_0;
  var package$ticker = _.ticker || (_.ticker = {});
  package$ticker.TickerProps = TickerProps;
  package$ticker.TickerState = TickerState;
  package$ticker.Ticker = Ticker;
  package$ticker.ticker_e0iee1$ = ticker;
  _.WelcomeState = WelcomeState;
  _.Welcome = Welcome;
  SheetResponse$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  SheetResponse$$serializer_0.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  productContext = createContext();
  productConsumer = productContext.Consumer;
  Default = functionalComponent(void 0, Default$lambda);
  Details = functionalComponent(void 0, Details$lambda);
  Modal = functionalComponent(void 0, Modal$lambda);
  Navbar = functionalComponent(void 0, Navbar$lambda);
  Product = functionalComponent(void 0, Product$lambda);
  ProductList = functionalComponent(void 0, ProductList$lambda);
  Title = functionalComponent(void 0, Title$lambda);
  Cart = functionalComponent(void 0, Cart$lambda);
  CartColumns = functionalComponent(void 0, CartColumns$lambda);
  CartItem = functionalComponent(void 0, CartItem$lambda);
  CartList = functionalComponent(void 0, CartList$lambda);
  CartTotal = functionalComponent(void 0, CartTotal$lambda);
  EmptyCart = functionalComponent(void 0, EmptyCart$lambda);
  main();
  Kotlin.defineModule('ecommerce-kmp', _);
  return _;
}));

//# sourceMappingURL=ecommerce-kmp.js.map
