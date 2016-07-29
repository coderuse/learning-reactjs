/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Yam_1 = __webpack_require__(3);
	var Helpers_1 = __webpack_require__(5);
	var accessToken = Helpers_1.Utils.get('newAccessToken');
	ReactDOM.render(React.createElement(Yam_1.YamApp, {accessToken: accessToken}), document.getElementById("example"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Feed_1 = __webpack_require__(4);
	var Yammer_1 = __webpack_require__(6);
	var Yammer_2 = __webpack_require__(7);
	var YamApp = (function (_super) {
	    __extends(YamApp, _super);
	    function YamApp(props) {
	        _super.call(this, props);
	        this.state = {
	            currentUser: new Yammer_1.User()
	        };
	        this.api = new Yammer_2.YamAPI(props.accessToken);
	    }
	    YamApp.prototype.componentDidMount = function () {
	        var p = this.api.call('currentUser', {});
	        p.done(function (data) {
	            this.setState({
	                currentUser: Yammer_1.User.Box(data)
	            });
	        }.bind(this));
	    };
	    YamApp.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement("div", {id: "header"}, React.createElement("img", {className: "circle", src: this.state.currentUser.mugshot_url})), React.createElement("div", {id: "content"}, React.createElement(Feed_1.Feed, {api: this.api})), React.createElement("div", {id: "footer"}, React.createElement("a", {href: "javascript:void();", className: "active"}, React.createElement("span", {className: "yamcon-home"})), React.createElement("a", {href: "javascript:void();"}, React.createElement("span", {className: "yamcon-markunread"})), React.createElement("a", {href: "javascript:void();"}, React.createElement("span", {className: "yamcon-notifications"})), React.createElement("a", {href: "javascript:void();"}, React.createElement("span", {className: "yamcon-people"})), React.createElement("a", {href: "javascript:void();"}, React.createElement("span", {className: "yamcon-wc"})), React.createElement("a", {href: "javascript:void();"}, React.createElement("span", {className: "yamcon-view_headline"})), React.createElement("a", {href: "javascript:void();"}, React.createElement("span", {className: "yamcon-info"})))));
	    };
	    return YamApp;
	}(React.Component));
	exports.YamApp = YamApp;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Helpers_1 = __webpack_require__(5);
	var Yammer_1 = __webpack_require__(6);
	var FeedItem = (function (_super) {
	    __extends(FeedItem, _super);
	    function FeedItem(props) {
	        _super.call(this, props);
	        this.state = props.message;
	    }
	    FeedItem.prototype.render = function () {
	        var message = this.state;
	        var sender = Yammer_1.User.Box(Helpers_1.Utils.getReferenceById(message.sender_type, message.sender_id, this.props.references));
	        var group = Yammer_1.Group.Box(Helpers_1.Utils.getReferenceById('group', message.group_created_id, this.props.references));
	        var innerHtml = {
	            __html: message.body
	        };
	        return (React.createElement("div", {className: "msg"}, React.createElement("div", {className: "row"}, React.createElement("div", {className: "header"}, React.createElement("div", {className: "sender"}, React.createElement("div", {className: "pic"}, React.createElement("a", {href: "javascript:void()"}, React.createElement("img", {src: sender.mugshot_url}))), React.createElement("div", {className: "name"}, sender.full_name)))), React.createElement("div", {className: "row"}, React.createElement("div", {dangerouslySetInnerHTML: innerHtml}), message.attachments.map(function (attch) {
	            console.log(attch.content);
	            var attchInnerHtml = {
	                __html: attch.content
	            };
	            return (React.createElement("div", {key: attch.id, className: "row"}, React.createElement("h3", null, attch.name), React.createElement("div", {dangerouslySetInnerHTML: attchInnerHtml})));
	        }))));
	    };
	    return FeedItem;
	}(React.Component));
	exports.FeedItem = FeedItem;
	var Feed = (function (_super) {
	    __extends(Feed, _super);
	    function Feed(props) {
	        _super.call(this, props);
	        this.state = {
	            references: new Array(),
	            messages: new Array()
	        };
	    }
	    Feed.prototype.componentDidMount = function () {
	        var p = this.props.api.call('allFeed', {}, { threaded: 'extended', limit: '20' });
	        p.done(function (data) {
	            this.setState({
	                references: data.references,
	                messages: data.messages.map(function (msg) { return Yammer_1.Message.Box(msg); })
	            });
	        }.bind(this));
	    };
	    Feed.prototype.render = function () {
	        var self = this;
	        return (React.createElement("div", null, this.state.messages.map(function (msg) {
	            return React.createElement(FeedItem, {key: msg.id, message: msg, references: self.state.references});
	        })));
	    };
	    return Feed;
	}(React.Component));
	exports.Feed = Feed;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var StorageItem = (function () {
	    function StorageItem(data) {
	        this.key = data.key;
	        this.value = data.value;
	    }
	    return StorageItem;
	}());
	exports.StorageItem = StorageItem;
	var Utils = (function () {
	    function Utils() {
	    }
	    // add value to storage
	    Utils.add = function (key, item) {
	        if (Utils.localStorageSupported) {
	            localStorage.setItem(key, item);
	        }
	    };
	    // get all values from storage (all items)
	    Utils.getAllItems = function () {
	        var list = new Array();
	        for (var i = 0; i < localStorage.length; i++) {
	            var key = localStorage.key(i);
	            var value = localStorage.getItem(key);
	            list.push(new StorageItem({
	                key: key,
	                value: value
	            }));
	        }
	        return list;
	    };
	    // get only all values from localStorage
	    Utils.getAllValues = function () {
	        var list = new Array();
	        if (Utils.localStorageSupported) {
	            for (var i = 0; i < localStorage.length; i++) {
	                var key = localStorage.key(i);
	                var value = localStorage.getItem(key);
	                list.push(value);
	            }
	        }
	        return list;
	    };
	    // get one item by key from storage
	    Utils.get = function (key) {
	        if (Utils.localStorageSupported) {
	            var item = localStorage.getItem(key);
	            return item;
	        }
	        else {
	            return null;
	        }
	    };
	    // remove value from storage
	    Utils.remove = function (key) {
	        if (Utils.localStorageSupported) {
	            localStorage.removeItem(key);
	        }
	    };
	    // clear storage (remove all items from it)
	    Utils.clear = function () {
	        if (Utils.localStorageSupported) {
	            localStorage.clear();
	        }
	    };
	    Utils.getReferenceById = function (type, ref_id, references) {
	        var matchedReference = $.grep(references, function (reference) {
	            return reference.type === type && reference.id == ref_id;
	        });
	        return matchedReference.length > 0 ? matchedReference[0] : {};
	    };
	    Utils.priceToUSDString = function (price) {
	        return '$' + price.toFixed(2);
	    };
	    Utils.tryParseNumber = function (str, radix, defaultValue) {
	        if (str === void 0) { str = ''; }
	        if (radix === void 0) { radix = 10; }
	        if (defaultValue === void 0) { defaultValue = 0; }
	        var retValue = defaultValue;
	        if (str !== null) {
	            if (typeof str === 'String' && str.length > 0) {
	                retValue = parseInt(str, radix);
	                if (isNaN(retValue)) {
	                    retValue = defaultValue;
	                }
	            }
	        }
	        return retValue;
	    };
	    Utils.localStorageSupported = typeof window['localStorage'] !== "undefined" && window['localStorage'] !== null;
	    return Utils;
	}());
	exports.Utils = Utils;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Helpers_1 = __webpack_require__(5);
	var Reference = (function () {
	    function Reference(id, name, network_id, type, url, web_url) {
	        if (id === void 0) { id = 0; }
	        if (name === void 0) { name = ''; }
	        if (network_id === void 0) { network_id = 0; }
	        if (type === void 0) { type = ''; }
	        if (url === void 0) { url = ''; }
	        if (web_url === void 0) { web_url = ''; }
	        this.id = id;
	        this.name = name;
	        this.network_id = network_id;
	        this.type = type;
	        this.url = url;
	        this.web_url = web_url;
	    }
	    return Reference;
	}());
	exports.Reference = Reference;
	var References = (function () {
	    function References(references) {
	        this.references = references;
	    }
	    References.prototype.getReferenceById = function (type, ref_id) {
	        var matchedReference = $.grep(this.references, function (reference) {
	            return reference.type === type && reference.id == ref_id;
	        });
	        return matchedReference.length > 0 ? matchedReference[0] : new Reference();
	    };
	    return References;
	}());
	exports.References = References;
	var Stats = (function () {
	    function Stats(followers, following, updates) {
	        if (followers === void 0) { followers = 0; }
	        if (following === void 0) { following = 0; }
	        if (updates === void 0) { updates = 0; }
	        this.followers = followers;
	        this.following = following;
	        this.updates = updates;
	    }
	    Stats.Box = function (obj) {
	        if (obj) {
	            return new Stats(Helpers_1.Utils.tryParseNumber(obj.followers), Helpers_1.Utils.tryParseNumber(obj.following), Helpers_1.Utils.tryParseNumber(obj.updates));
	        }
	        return new Stats();
	    };
	    return Stats;
	}());
	exports.Stats = Stats;
	var User = (function (_super) {
	    __extends(User, _super);
	    function User(permalink, user_id, activated_at, auto_activated, email, full_name, id, job_title, mugshot_url, mugshot_url_template, name, network_id, state, stats, type, url, web_url) {
	        if (permalink === void 0) { permalink = ''; }
	        if (user_id === void 0) { user_id = 0; }
	        if (activated_at === void 0) { activated_at = ''; }
	        if (auto_activated === void 0) { auto_activated = false; }
	        if (email === void 0) { email = ''; }
	        if (full_name === void 0) { full_name = ''; }
	        if (id === void 0) { id = 0; }
	        if (job_title === void 0) { job_title = ''; }
	        if (mugshot_url === void 0) { mugshot_url = ''; }
	        if (mugshot_url_template === void 0) { mugshot_url_template = ''; }
	        if (name === void 0) { name = ''; }
	        if (network_id === void 0) { network_id = 0; }
	        if (state === void 0) { state = ''; }
	        if (stats === void 0) { stats = new Stats(); }
	        if (type === void 0) { type = ''; }
	        if (url === void 0) { url = ''; }
	        if (web_url === void 0) { web_url = ''; }
	        _super.call(this, id, name, network_id, type, url, web_url);
	        this.permalink = permalink;
	        this.user_id = user_id;
	        this.activated_at = activated_at;
	        this.auto_activated = auto_activated;
	        this.email = email;
	        this.full_name = full_name;
	        this.id = id;
	        this.job_title = job_title;
	        this.mugshot_url = mugshot_url;
	        this.mugshot_url_template = mugshot_url_template;
	        this.name = name;
	        this.network_id = network_id;
	        this.state = state;
	        this.stats = stats;
	        this.type = type;
	        this.url = url;
	        this.web_url = web_url;
	    }
	    User.Box = function (obj) {
	        if (typeof obj !== 'undefined' && ('id' in obj)) {
	            var stats = Stats.Box(obj.stats);
	            return new User(obj.permalink, obj.user_id, obj.activated_at, obj.auto_activated, obj.email, obj.full_name, obj.id, obj.job_title, obj.mugshot_url, obj.mugshot_url_template, obj.name, obj.network_id, obj.state, stats, obj.type, obj.url, obj.web_url);
	        }
	        return new User();
	    };
	    return User;
	}(Reference));
	exports.User = User;
	var Group = (function (_super) {
	    __extends(Group, _super);
	    function Group(color, created_at, description, email, external, full_name, id, members, moderated, mugshot_id, mugshot_url, mugshot_url_template, name, network_id, privacy, show_in_directory, type, url, web_url) {
	        if (color === void 0) { color = ''; }
	        if (created_at === void 0) { created_at = ''; }
	        if (description === void 0) { description = ''; }
	        if (email === void 0) { email = ''; }
	        if (external === void 0) { external = false; }
	        if (full_name === void 0) { full_name = ''; }
	        if (id === void 0) { id = 0; }
	        if (members === void 0) { members = 0; }
	        if (moderated === void 0) { moderated = false; }
	        if (mugshot_id === void 0) { mugshot_id = ''; }
	        if (mugshot_url === void 0) { mugshot_url = ''; }
	        if (mugshot_url_template === void 0) { mugshot_url_template = ''; }
	        if (name === void 0) { name = ''; }
	        if (network_id === void 0) { network_id = 0; }
	        if (privacy === void 0) { privacy = ''; }
	        if (show_in_directory === void 0) { show_in_directory = ''; }
	        if (type === void 0) { type = ''; }
	        if (url === void 0) { url = ''; }
	        if (web_url === void 0) { web_url = ''; }
	        _super.call(this, id, name, network_id, type, url, web_url);
	        this.color = color;
	        this.created_at = created_at;
	        this.description = description;
	        this.email = email;
	        this.external = external;
	        this.full_name = full_name;
	        this.id = id;
	        this.members = members;
	        this.moderated = moderated;
	        this.mugshot_id = mugshot_id;
	        this.mugshot_url = mugshot_url;
	        this.mugshot_url_template = mugshot_url_template;
	        this.name = name;
	        this.network_id = network_id;
	        this.privacy = privacy;
	        this.show_in_directory = show_in_directory;
	        this.type = type;
	        this.url = url;
	        this.web_url = web_url;
	    }
	    Group.Box = function (obj) {
	        if (typeof obj !== 'undefined' && ('id' in obj)) {
	            return new Group(obj.color, obj.created_at, obj.description, obj.email, obj.external, obj.full_name, obj.id, obj.members, obj.moderated, obj.mugshot_id, obj.mugshot_url, obj.mugshot_url_template, obj.name, obj.network_id, obj.privacy, obj.show_in_directory, obj.type, obj.url, obj.web_url);
	        }
	        return new Group();
	    };
	    return Group;
	}(Reference));
	exports.Group = Group;
	var Image = (function () {
	    function Image(size, thumbnail, url) {
	        if (size === void 0) { size = 0; }
	        if (thumbnail === void 0) { thumbnail = ''; }
	        if (url === void 0) { url = ''; }
	    }
	    return Image;
	}());
	exports.Image = Image;
	var Upload = (function () {
	    function Upload(content_class, content_type, created_at, description, download_url, full_name, group_id, height, id, image, large_icon_url, large_preview_url, last_uploaded_at, last_uploaded_by_id, last_uploaded_by_type, latest_version_id, name, network_id, official, original_name, overlay_url, owner_id, owner_type, path, preview_url, privacy, real_type, scaled_url, size, small_icon_url, status, streaming_url, thumbnail_url, transcoded, type, url, uuid, web_url, width, y_id) {
	        if (content_class === void 0) { content_class = ''; }
	        if (content_type === void 0) { content_type = ''; }
	        if (created_at === void 0) { created_at = ''; }
	        if (description === void 0) { description = ''; }
	        if (download_url === void 0) { download_url = ''; }
	        if (full_name === void 0) { full_name = ''; }
	        if (group_id === void 0) { group_id = 0; }
	        if (height === void 0) { height = 0; }
	        if (id === void 0) { id = 0; }
	        if (image === void 0) { image = new Image(); }
	        if (large_icon_url === void 0) { large_icon_url = ''; }
	        if (large_preview_url === void 0) { large_preview_url = ''; }
	        if (last_uploaded_at === void 0) { last_uploaded_at = ''; }
	        if (last_uploaded_by_id === void 0) { last_uploaded_by_id = 0; }
	        if (last_uploaded_by_type === void 0) { last_uploaded_by_type = ''; }
	        if (latest_version_id === void 0) { latest_version_id = 0; }
	        if (name === void 0) { name = ''; }
	        if (network_id === void 0) { network_id = 0; }
	        if (official === void 0) { official = false; }
	        if (original_name === void 0) { original_name = ''; }
	        if (overlay_url === void 0) { overlay_url = ''; }
	        if (owner_id === void 0) { owner_id = 0; }
	        if (owner_type === void 0) { owner_type = ''; }
	        if (path === void 0) { path = ''; }
	        if (preview_url === void 0) { preview_url = ''; }
	        if (privacy === void 0) { privacy = ''; }
	        if (real_type === void 0) { real_type = ''; }
	        if (scaled_url === void 0) { scaled_url = ''; }
	        if (size === void 0) { size = 0; }
	        if (small_icon_url === void 0) { small_icon_url = ''; }
	        if (status === void 0) { status = ''; }
	        if (streaming_url === void 0) { streaming_url = ''; }
	        if (thumbnail_url === void 0) { thumbnail_url = ''; }
	        if (transcoded === void 0) { transcoded = ''; }
	        if (type === void 0) { type = ''; }
	        if (url === void 0) { url = ''; }
	        if (uuid === void 0) { uuid = ''; }
	        if (web_url === void 0) { web_url = ''; }
	        if (width === void 0) { width = 0; }
	        if (y_id === void 0) { y_id = 0; }
	        this.content_class = content_class;
	        this.content_type = content_type;
	        this.created_at = created_at;
	        this.description = description;
	        this.download_url = download_url;
	        this.full_name = full_name;
	        this.group_id = group_id;
	        this.height = height;
	        this.id = id;
	        this.image = image;
	        this.large_icon_url = large_icon_url;
	        this.large_preview_url = large_preview_url;
	        this.last_uploaded_at = last_uploaded_at;
	        this.last_uploaded_by_id = last_uploaded_by_id;
	        this.last_uploaded_by_type = last_uploaded_by_type;
	        this.latest_version_id = latest_version_id;
	        this.name = name;
	        this.network_id = network_id;
	        this.official = official;
	        this.original_name = original_name;
	        this.overlay_url = overlay_url;
	        this.owner_id = owner_id;
	        this.owner_type = owner_type;
	        this.path = path;
	        this.preview_url = preview_url;
	        this.privacy = privacy;
	        this.real_type = real_type;
	        this.scaled_url = scaled_url;
	        this.size = size;
	        this.small_icon_url = small_icon_url;
	        this.status = status;
	        this.streaming_url = streaming_url;
	        this.thumbnail_url = thumbnail_url;
	        this.transcoded = transcoded;
	        this.type = type;
	        this.url = url;
	        this.uuid = uuid;
	        this.web_url = web_url;
	        this.width = width;
	        this.y_id = y_id;
	    }
	    return Upload;
	}());
	exports.Upload = Upload;
	var Attachment = (function () {
	    function Attachment(id, content, name, network_id, thumbnail_url, web_url) {
	        if (id === void 0) { id = 0; }
	        if (content === void 0) { content = ''; }
	        if (name === void 0) { name = ''; }
	        if (network_id === void 0) { network_id = 0; }
	        if (thumbnail_url === void 0) { thumbnail_url = ''; }
	        if (web_url === void 0) { web_url = ''; }
	        this.id = id;
	        this.content = content;
	        this.name = name;
	        this.network_id = network_id;
	        this.thumbnail_url = thumbnail_url;
	        this.web_url = web_url;
	    }
	    Attachment.Box = function (obj) {
	        if (typeof obj === 'Object' && obj !== null) {
	            var content = obj.inline_html || obj.comment || '';
	            return new Attachment(obj.id, content, obj.name, obj.network_id, obj.thumbnail_url, obj.web_url);
	        }
	        return new Attachment();
	    };
	    return Attachment;
	}());
	exports.Attachment = Attachment;
	var Liked_By = (function () {
	    function Liked_By(count, names) {
	        if (count === void 0) { count = 0; }
	        if (names === void 0) { names = new Array(); }
	        this.count = count;
	        this.names = names;
	    }
	    Liked_By.Box = function (obj) {
	        if (typeof obj === 'Object' && obj !== null &&
	            typeof obj.names === 'Array' && obj.names.length > 0) {
	            var names = obj.names.map(function (name) {
	                return new User(name.permalink, name.user_id, '', false, '', name.full_name, 0, '', '', '', '', name.network_id);
	            });
	            return new Liked_By(obj.count, names);
	        }
	        return new Liked_By();
	    };
	    return Liked_By;
	}());
	exports.Liked_By = Liked_By;
	var Message = (function () {
	    function Message(attachments, body, chat_client_sequence, client_type, client_url, content_excerpt, created_at, direct_message, group_created_id, group_id, id, language, liked_by, message_type, network_id, notified_user_ids, privacy, replied_to_id, sender_id, sender_type, system_message, thread_id, url, web_url) {
	        if (attachments === void 0) { attachments = new Array(); }
	        if (body === void 0) { body = ''; }
	        if (chat_client_sequence === void 0) { chat_client_sequence = ''; }
	        if (client_type === void 0) { client_type = ''; }
	        if (client_url === void 0) { client_url = ''; }
	        if (content_excerpt === void 0) { content_excerpt = ''; }
	        if (created_at === void 0) { created_at = ''; }
	        if (direct_message === void 0) { direct_message = false; }
	        if (group_created_id === void 0) { group_created_id = 0; }
	        if (group_id === void 0) { group_id = 0; }
	        if (id === void 0) { id = 0; }
	        if (language === void 0) { language = ''; }
	        if (liked_by === void 0) { liked_by = new Liked_By(); }
	        if (message_type === void 0) { message_type = ''; }
	        if (network_id === void 0) { network_id = 0; }
	        if (notified_user_ids === void 0) { notified_user_ids = new Array(); }
	        if (privacy === void 0) { privacy = ''; }
	        if (replied_to_id === void 0) { replied_to_id = ''; }
	        if (sender_id === void 0) { sender_id = 0; }
	        if (sender_type === void 0) { sender_type = ''; }
	        if (system_message === void 0) { system_message = false; }
	        if (thread_id === void 0) { thread_id = 0; }
	        if (url === void 0) { url = ''; }
	        if (web_url === void 0) { web_url = ''; }
	        this.attachments = attachments;
	        this.body = body;
	        this.chat_client_sequence = chat_client_sequence;
	        this.client_type = client_type;
	        this.client_url = client_url;
	        this.content_excerpt = content_excerpt;
	        this.created_at = created_at;
	        this.direct_message = direct_message;
	        this.group_created_id = group_created_id;
	        this.group_id = group_id;
	        this.id = id;
	        this.language = language;
	        this.liked_by = liked_by;
	        this.message_type = message_type;
	        this.network_id = network_id;
	        this.notified_user_ids = notified_user_ids;
	        this.privacy = privacy;
	        this.replied_to_id = replied_to_id;
	        this.sender_id = sender_id;
	        this.sender_type = sender_type;
	        this.system_message = system_message;
	        this.thread_id = thread_id;
	        this.url = url;
	        this.web_url = web_url;
	    }
	    Message.Box = function (obj) {
	        if (typeof obj !== 'undefined' && ('id' in obj)) {
	            var attachments = void 0;
	            var body = obj.body.rich || obj.body.plain || obj.body.plain || '';
	            if (typeof obj.attachments === 'Array' && obj.attachments.length > 0) {
	                attachments = obj.attachments.map(function (attch) {
	                    return Attachment.Box(attch);
	                });
	            }
	            return new Message(attachments, body, obj.chat_client_sequence, obj.client_type, obj.client_url, obj.content_excerpt, obj.created_at, obj.direct_message, obj.group_created_id, obj.group_id, obj.id, obj.language, Liked_By.Box(obj.liked_by), obj.message_type, obj.network_id, obj.notified_user_ids, obj.privacy, obj.replied_to_id, obj.sender_id, obj.sender_type, obj.system_message, obj.thread_id, obj.url, obj.web_url);
	        }
	        return new Message();
	    };
	    return Message;
	}());
	exports.Message = Message;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var Endpoints_1 = __webpack_require__(8);
	var CallServerTask = (function () {
	    function CallServerTask(url, method, data, defer) {
	        this.url = url;
	        this.method = method;
	        this.data = data;
	        this.defer = defer;
	    }
	    return CallServerTask;
	}());
	exports.CallServerTask = CallServerTask;
	var YamAPI = (function () {
	    function YamAPI(accessToken) {
	        this.accessToken = accessToken;
	        this.queue = new Array();
	    }
	    YamAPI.prototype.callNext = function () {
	        var self = this;
	        var task = self.queue[0];
	        $.ajax({
	            type: task.method,
	            url: task.url,
	            beforeSend: function (request) {
	                request.setRequestHeader("Authorization", "Bearer " + self.accessToken);
	            },
	            data: $.extend({}, {}, task.data),
	            dataType: 'json',
	            xhrFields: {
	                withCredentials: false
	            }
	        }).done(function (data, textStatus, jqXHR) {
	            task.defer.resolve(data);
	        }).fail(function (jqXHR, textStatus, errorThrown) {
	            console.log(errorThrown);
	        }).always(function () {
	            self.queue.shift();
	            if (self.queue.length > 0) {
	                self.callNext();
	            }
	        });
	    };
	    YamAPI.prototype.call = function (name, data, parameters) {
	        var callConf = Endpoints_1.endPoints[name];
	        if (typeof callConf === 'undefined') {
	            throw new ReferenceError('Undefined API name.');
	        }
	        var d = $.Deferred();
	        var params = new Array();
	        for (var p in parameters) {
	            if (parameters.hasOwnProperty(p)) {
	                params.push(p + '=' + parameters[p]);
	            }
	        }
	        var url = callConf.url;
	        if (params.length > 0) {
	            url += '?' + params.join('&');
	        }
	        this.queue.push(new CallServerTask(url, callConf.method, data, d));
	        if (this.queue.length === 1) {
	            this.callNext();
	        }
	        return d.promise();
	    };
	    return YamAPI;
	}());
	exports.YamAPI = YamAPI;


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	exports.endPoints = {
	    currentUser: {
	        method: 'GET',
	        url: 'https://www.yammer.com/api/v1/users/current.json'
	    },
	    allFeed: {
	        method: 'GET',
	        url: 'https://www.yammer.com/api/v1/messages.json'
	    },
	    topFeed: {
	        method: 'GET',
	        url: 'https://www.yammer.com/api/v1/messages/algo.json'
	    },
	    followingFeed: {
	        method: 'GET',
	        url: 'https://www.yammer.com/api/v1/messages/following.json'
	    },
	    defaultFeed: {
	        method: 'GET',
	        url: 'https://www.yammer.com/api/v1/messages.json/my_feed.json'
	    }
	};


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map