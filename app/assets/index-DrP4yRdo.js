/*-----------------------------------------------------------------
* Project: Decay Function Web App
* Version: 0.1.0
* Date:    2026
* Author:  Rohin Gosling
*
* Description:
*
*   Readable production bundle containing the application and its runtime dependencies.
*   Region markers identify the original source module for each block of code.
*
*-----------------------------------------------------------------*/
//#region \0rolldown/runtime.js
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
//#endregion
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region node_modules/react/cjs/react.production.js
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_PORTAL_TYPE = Symbol.for("react.portal");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
	var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
	var REACT_CONTEXT_TYPE = Symbol.for("react.context");
	var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
	var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
	var REACT_MEMO_TYPE = Symbol.for("react.memo");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	};
	var assign = Object.assign;
	var emptyObject = {};
	function Component(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function(partialState, callback) {
		if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function(callback) {
		this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = !0;
	var isArrayImpl = Array.isArray;
	function noop() {}
	var ReactSharedInternals = {
		H: null,
		A: null,
		T: null,
		S: null
	};
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, props) {
		var refProp = props.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== refProp ? refProp : null,
			props
		};
	}
	function cloneAndReplaceKey(oldElement, newKey) {
		return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function escape(key) {
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		return "$" + key.replace(/[=:]/g, function(match) {
			return escaperLookup[match];
		});
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
		return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
	}
	function resolveThenable(thenable) {
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default: switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
				"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
			}, function(error) {
				"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			})), thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
			}
		}
		throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		var type = typeof children;
		if ("undefined" === type || "boolean" === type) children = null;
		var invokeCallback = !1;
		if (null === children) invokeCallback = !0;
		else switch (type) {
			case "bigint":
			case "string":
			case "number":
				invokeCallback = !0;
				break;
			case "object": switch (children.$$typeof) {
				case REACT_ELEMENT_TYPE:
				case REACT_PORTAL_TYPE:
					invokeCallback = !0;
					break;
				case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
			}
		}
		if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
			return c;
		})) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
		invokeCallback = 0;
		var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
		if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if ("object" === type) {
			if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
			array = String(children);
			throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
		}
		return invokeCallback;
	}
	function mapChildren(children, func, context) {
		if (null == children) return children;
		var result = [], count = 0;
		mapIntoArray(children, result, "", "", function(child) {
			return func.call(context, child, count++);
		});
		return result;
	}
	function lazyInitializer(payload) {
		if (-1 === payload._status) {
			var ctor = payload._result;
			ctor = ctor();
			ctor.then(function(moduleObject) {
				if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
			}, function(error) {
				if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
			});
			-1 === payload._status && (payload._status = 0, payload._result = ctor);
		}
		if (1 === payload._status) return payload._result.default;
		throw payload._result;
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
		if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
			var event = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
				error
			});
			if (!window.dispatchEvent(event)) return;
		} else if ("object" === typeof process && "function" === typeof process.emit) {
			process.emit("uncaughtException", error);
			return;
		}
		console.error(error);
	};
	var Children = {
		map: mapChildren,
		forEach: function(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		},
		count: function(children) {
			var n = 0;
			mapChildren(children, function() {
				n++;
			});
			return n;
		},
		toArray: function(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		},
		only: function(children) {
			if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
			return children;
		}
	};
	exports.Activity = REACT_ACTIVITY_TYPE;
	exports.Children = Children;
	exports.Component = Component;
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.PureComponent = PureComponent;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
	exports.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(size) {
			return ReactSharedInternals.H.useMemoCache(size);
		}
	};
	exports.cache = function(fn) {
		return function() {
			return fn.apply(null, arguments);
		};
	};
	exports.cacheSignal = function() {
		return null;
	};
	exports.cloneElement = function(element, config, children) {
		if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
		var props = assign({}, element.props), key = element.key;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
		var propName = arguments.length - 2;
		if (1 === propName) props.children = children;
		else if (1 < propName) {
			for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		return ReactElement(element.type, key, props);
	};
	exports.createContext = function(defaultValue) {
		defaultValue = {
			$$typeof: REACT_CONTEXT_TYPE,
			_currentValue: defaultValue,
			_currentValue2: defaultValue,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		};
		defaultValue.Provider = defaultValue;
		defaultValue.Consumer = {
			$$typeof: REACT_CONSUMER_TYPE,
			_context: defaultValue
		};
		return defaultValue;
	};
	exports.createElement = function(type, config, children) {
		var propName, props = {}, key = null;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
		var childrenLength = arguments.length - 2;
		if (1 === childrenLength) props.children = children;
		else if (1 < childrenLength) {
			for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
		return ReactElement(type, key, props);
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(render) {
		return {
			$$typeof: REACT_FORWARD_REF_TYPE,
			render
		};
	};
	exports.isValidElement = isValidElement;
	exports.lazy = function(ctor) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: {
				_status: -1,
				_result: ctor
			},
			_init: lazyInitializer
		};
	};
	exports.memo = function(type, compare) {
		return {
			$$typeof: REACT_MEMO_TYPE,
			type,
			compare: void 0 === compare ? null : compare
		};
	};
	exports.startTransition = function(scope) {
		var prevTransition = ReactSharedInternals.T, currentTransition = {};
		ReactSharedInternals.T = currentTransition;
		try {
			var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
			null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
			"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
		} catch (error) {
			reportGlobalError(error);
		} finally {
			null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
		}
	};
	exports.unstable_useCacheRefresh = function() {
		return ReactSharedInternals.H.useCacheRefresh();
	};
	exports.use = function(usable) {
		return ReactSharedInternals.H.use(usable);
	};
	exports.useActionState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	exports.useCallback = function(callback, deps) {
		return ReactSharedInternals.H.useCallback(callback, deps);
	};
	exports.useContext = function(Context) {
		return ReactSharedInternals.H.useContext(Context);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(value, initialValue) {
		return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	exports.useEffect = function(create, deps) {
		return ReactSharedInternals.H.useEffect(create, deps);
	};
	exports.useEffectEvent = function(callback) {
		return ReactSharedInternals.H.useEffectEvent(callback);
	};
	exports.useId = function() {
		return ReactSharedInternals.H.useId();
	};
	exports.useImperativeHandle = function(ref, create, deps) {
		return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	exports.useInsertionEffect = function(create, deps) {
		return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	exports.useLayoutEffect = function(create, deps) {
		return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	exports.useMemo = function(create, deps) {
		return ReactSharedInternals.H.useMemo(create, deps);
	};
	exports.useOptimistic = function(passthrough, reducer) {
		return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	exports.useReducer = function(reducer, initialArg, init) {
		return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	exports.useRef = function(initialValue) {
		return ReactSharedInternals.H.useRef(initialValue);
	};
	exports.useState = function(initialState) {
		return ReactSharedInternals.H.useState(initialState);
	};
	exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
		return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	};
	exports.useTransition = function() {
		return ReactSharedInternals.H.useTransition();
	};
	exports.version = "19.2.7";
}));
//#endregion
//#region node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_production();
}));
//#endregion
//#region node_modules/scheduler/cjs/scheduler.production.js
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_scheduler_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	function push(heap, node) {
		var index = heap.length;
		heap.push(node);
		a: for (; 0 < index;) {
			var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
			if (0 < compare(parent, node)) heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
			else break a;
		}
	}
	function peek(heap) {
		return 0 === heap.length ? null : heap[0];
	}
	function pop(heap) {
		if (0 === heap.length) return null;
		var first = heap[0], last = heap.pop();
		if (last !== first) {
			heap[0] = last;
			a: for (var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength;) {
				var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
				if (0 > compare(left, last)) rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
				else if (rightIndex < length && 0 > compare(right, last)) heap[index] = right, heap[rightIndex] = last, index = rightIndex;
				else break a;
			}
		}
		return first;
	}
	function compare(a, b) {
		var diff = a.sortIndex - b.sortIndex;
		return 0 !== diff ? diff : a.id - b.id;
	}
	exports.unstable_now = void 0;
	if ("object" === typeof performance && "function" === typeof performance.now) {
		var localPerformance = performance;
		exports.unstable_now = function() {
			return localPerformance.now();
		};
	} else {
		var localDate = Date, initialTime = localDate.now();
		exports.unstable_now = function() {
			return localDate.now() - initialTime;
		};
	}
	var taskQueue = [];
	var timerQueue = [];
	var taskIdCounter = 1;
	var currentTask = null;
	var currentPriorityLevel = 3;
	var isPerformingWork = !1;
	var isHostCallbackScheduled = !1;
	var isHostTimeoutScheduled = !1;
	var needsPaint = !1;
	var localSetTimeout = "function" === typeof setTimeout ? setTimeout : null;
	var localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null;
	var localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
	function advanceTimers(currentTime) {
		for (var timer = peek(timerQueue); null !== timer;) {
			if (null === timer.callback) pop(timerQueue);
			else if (timer.startTime <= currentTime) pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
			else break;
			timer = peek(timerQueue);
		}
	}
	function handleTimeout(currentTime) {
		isHostTimeoutScheduled = !1;
		advanceTimers(currentTime);
		if (!isHostCallbackScheduled) if (null !== peek(taskQueue)) isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline());
		else {
			var firstTimer = peek(timerQueue);
			null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
		}
	}
	var isMessageLoopRunning = !1;
	var taskTimeoutID = -1;
	var frameInterval = 5;
	var startTime = -1;
	function shouldYieldToHost() {
		return needsPaint ? !0 : exports.unstable_now() - startTime < frameInterval ? !1 : !0;
	}
	function performWorkUntilDeadline() {
		needsPaint = !1;
		if (isMessageLoopRunning) {
			var currentTime = exports.unstable_now();
			startTime = currentTime;
			var hasMoreWork = !0;
			try {
				a: {
					isHostCallbackScheduled = !1;
					isHostTimeoutScheduled && (isHostTimeoutScheduled = !1, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
					isPerformingWork = !0;
					var previousPriorityLevel = currentPriorityLevel;
					try {
						b: {
							advanceTimers(currentTime);
							for (currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost());) {
								var callback = currentTask.callback;
								if ("function" === typeof callback) {
									currentTask.callback = null;
									currentPriorityLevel = currentTask.priorityLevel;
									var continuationCallback = callback(currentTask.expirationTime <= currentTime);
									currentTime = exports.unstable_now();
									if ("function" === typeof continuationCallback) {
										currentTask.callback = continuationCallback;
										advanceTimers(currentTime);
										hasMoreWork = !0;
										break b;
									}
									currentTask === peek(taskQueue) && pop(taskQueue);
									advanceTimers(currentTime);
								} else pop(taskQueue);
								currentTask = peek(taskQueue);
							}
							if (null !== currentTask) hasMoreWork = !0;
							else {
								var firstTimer = peek(timerQueue);
								null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
								hasMoreWork = !1;
							}
						}
						break a;
					} finally {
						currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = !1;
					}
					hasMoreWork = void 0;
				}
			} finally {
				hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = !1;
			}
		}
	}
	var schedulePerformWorkUntilDeadline;
	if ("function" === typeof localSetImmediate) schedulePerformWorkUntilDeadline = function() {
		localSetImmediate(performWorkUntilDeadline);
	};
	else if ("undefined" !== typeof MessageChannel) {
		var channel = new MessageChannel(), port = channel.port2;
		channel.port1.onmessage = performWorkUntilDeadline;
		schedulePerformWorkUntilDeadline = function() {
			port.postMessage(null);
		};
	} else schedulePerformWorkUntilDeadline = function() {
		localSetTimeout(performWorkUntilDeadline, 0);
	};
	function requestHostTimeout(callback, ms) {
		taskTimeoutID = localSetTimeout(function() {
			callback(exports.unstable_now());
		}, ms);
	}
	exports.unstable_IdlePriority = 5;
	exports.unstable_ImmediatePriority = 1;
	exports.unstable_LowPriority = 4;
	exports.unstable_NormalPriority = 3;
	exports.unstable_Profiling = null;
	exports.unstable_UserBlockingPriority = 2;
	exports.unstable_cancelCallback = function(task) {
		task.callback = null;
	};
	exports.unstable_forceFrameRate = function(fps) {
		0 > fps || 125 < fps ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
	};
	exports.unstable_getCurrentPriorityLevel = function() {
		return currentPriorityLevel;
	};
	exports.unstable_next = function(eventHandler) {
		switch (currentPriorityLevel) {
			case 1:
			case 2:
			case 3:
				var priorityLevel = 3;
				break;
			default: priorityLevel = currentPriorityLevel;
		}
		var previousPriorityLevel = currentPriorityLevel;
		currentPriorityLevel = priorityLevel;
		try {
			return eventHandler();
		} finally {
			currentPriorityLevel = previousPriorityLevel;
		}
	};
	exports.unstable_requestPaint = function() {
		needsPaint = !0;
	};
	exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
		switch (priorityLevel) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: priorityLevel = 3;
		}
		var previousPriorityLevel = currentPriorityLevel;
		currentPriorityLevel = priorityLevel;
		try {
			return eventHandler();
		} finally {
			currentPriorityLevel = previousPriorityLevel;
		}
	};
	exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
		var currentTime = exports.unstable_now();
		"object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
		switch (priorityLevel) {
			case 1:
				var timeout = -1;
				break;
			case 2:
				timeout = 250;
				break;
			case 5:
				timeout = 1073741823;
				break;
			case 4:
				timeout = 1e4;
				break;
			default: timeout = 5e3;
		}
		timeout = options + timeout;
		priorityLevel = {
			id: taskIdCounter++,
			callback,
			priorityLevel,
			startTime: options,
			expirationTime: timeout,
			sortIndex: -1
		};
		options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = !0, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline())));
		return priorityLevel;
	};
	exports.unstable_shouldYield = shouldYieldToHost;
	exports.unstable_wrapCallback = function(callback) {
		var parentPriorityLevel = currentPriorityLevel;
		return function() {
			var previousPriorityLevel = currentPriorityLevel;
			currentPriorityLevel = parentPriorityLevel;
			try {
				return callback.apply(this, arguments);
			} finally {
				currentPriorityLevel = previousPriorityLevel;
			}
		};
	};
}));
//#endregion
//#region node_modules/scheduler/index.js
var require_scheduler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_scheduler_production();
}));
//#endregion
//#region node_modules/react-dom/cjs/react-dom.production.js
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function noop() {}
	var Internals = {
		d: {
			f: noop,
			r: function() {
				throw Error(formatProdErrorMessage(522));
			},
			D: noop,
			C: noop,
			L: noop,
			m: noop,
			X: noop,
			S: noop,
			M: noop
		},
		p: 0,
		findDOMNode: null
	};
	var REACT_PORTAL_TYPE = Symbol.for("react.portal");
	function createPortal$1(children, containerInfo, implementation) {
		var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: REACT_PORTAL_TYPE,
			key: null == key ? null : "" + key,
			children,
			containerInfo,
			implementation
		};
	}
	var ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function getCrossOriginStringAs(as, input) {
		if ("font" === as) return "";
		if ("string" === typeof input) return "use-credentials" === input ? input : "";
	}
	exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
	exports.createPortal = function(children, container) {
		var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType) throw Error(formatProdErrorMessage(299));
		return createPortal$1(children, container, null, key);
	};
	exports.flushSync = function(fn) {
		var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
		try {
			if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
		} finally {
			ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
		}
	};
	exports.preconnect = function(href, options) {
		"string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
	};
	exports.prefetchDNS = function(href) {
		"string" === typeof href && Internals.d.D(href);
	};
	exports.preinit = function(href, options) {
		if ("string" === typeof href && options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
			"style" === as ? Internals.d.S(href, "string" === typeof options.precedence ? options.precedence : void 0, {
				crossOrigin,
				integrity,
				fetchPriority
			}) : "script" === as && Internals.d.X(href, {
				crossOrigin,
				integrity,
				fetchPriority,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0
			});
		}
	};
	exports.preinitModule = function(href, options) {
		if ("string" === typeof href) if ("object" === typeof options && null !== options) {
			if (null == options.as || "script" === options.as) {
				var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
				Internals.d.M(href, {
					crossOrigin,
					integrity: "string" === typeof options.integrity ? options.integrity : void 0,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0
				});
			}
		} else options ?? Internals.d.M(href);
	};
	exports.preload = function(href, options) {
		if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
			Internals.d.L(href, as, {
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0,
				type: "string" === typeof options.type ? options.type : void 0,
				fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
				referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
				imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
				imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
				media: "string" === typeof options.media ? options.media : void 0
			});
		}
	};
	exports.preloadModule = function(href, options) {
		if ("string" === typeof href) if (options) {
			var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
			Internals.d.m(href, {
				as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0
			});
		} else Internals.d.m(href);
	};
	exports.requestFormReset = function(form) {
		Internals.d.r(form);
	};
	exports.unstable_batchedUpdates = function(fn, a) {
		return fn(a);
	};
	exports.useFormState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useFormState(action, initialState, permalink);
	};
	exports.useFormStatus = function() {
		return ReactSharedInternals.H.useHostTransitionStatus();
	};
	exports.version = "19.2.7";
}));
//#endregion
//#region node_modules/react-dom/index.js
var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_production();
}));
//#endregion
//#region node_modules/react-dom/cjs/react-dom-client.production.js
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_client_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Scheduler = require_scheduler();
	var React = require_react();
	var ReactDOM = require_react_dom();
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function isValidContainer(node) {
		return !(!node || 1 !== node.nodeType && 9 !== node.nodeType && 11 !== node.nodeType);
	}
	function getNearestMountedFiber(fiber) {
		var node = fiber, nearestMounted = fiber;
		if (fiber.alternate) for (; node.return;) node = node.return;
		else {
			fiber = node;
			do
				node = fiber, 0 !== (node.flags & 4098) && (nearestMounted = node.return), fiber = node.return;
			while (fiber);
		}
		return 3 === node.tag ? nearestMounted : null;
	}
	function getSuspenseInstanceFromFiber(fiber) {
		if (13 === fiber.tag) {
			var suspenseState = fiber.memoizedState;
			null === suspenseState && (fiber = fiber.alternate, null !== fiber && (suspenseState = fiber.memoizedState));
			if (null !== suspenseState) return suspenseState.dehydrated;
		}
		return null;
	}
	function getActivityInstanceFromFiber(fiber) {
		if (31 === fiber.tag) {
			var activityState = fiber.memoizedState;
			null === activityState && (fiber = fiber.alternate, null !== fiber && (activityState = fiber.memoizedState));
			if (null !== activityState) return activityState.dehydrated;
		}
		return null;
	}
	function assertIsMounted(fiber) {
		if (getNearestMountedFiber(fiber) !== fiber) throw Error(formatProdErrorMessage(188));
	}
	function findCurrentFiberUsingSlowPath(fiber) {
		var alternate = fiber.alternate;
		if (!alternate) {
			alternate = getNearestMountedFiber(fiber);
			if (null === alternate) throw Error(formatProdErrorMessage(188));
			return alternate !== fiber ? null : fiber;
		}
		for (var a = fiber, b = alternate;;) {
			var parentA = a.return;
			if (null === parentA) break;
			var parentB = parentA.alternate;
			if (null === parentB) {
				b = parentA.return;
				if (null !== b) {
					a = b;
					continue;
				}
				break;
			}
			if (parentA.child === parentB.child) {
				for (parentB = parentA.child; parentB;) {
					if (parentB === a) return assertIsMounted(parentA), fiber;
					if (parentB === b) return assertIsMounted(parentA), alternate;
					parentB = parentB.sibling;
				}
				throw Error(formatProdErrorMessage(188));
			}
			if (a.return !== b.return) a = parentA, b = parentB;
			else {
				for (var didFindChild = !1, child$0 = parentA.child; child$0;) {
					if (child$0 === a) {
						didFindChild = !0;
						a = parentA;
						b = parentB;
						break;
					}
					if (child$0 === b) {
						didFindChild = !0;
						b = parentA;
						a = parentB;
						break;
					}
					child$0 = child$0.sibling;
				}
				if (!didFindChild) {
					for (child$0 = parentB.child; child$0;) {
						if (child$0 === a) {
							didFindChild = !0;
							a = parentB;
							b = parentA;
							break;
						}
						if (child$0 === b) {
							didFindChild = !0;
							b = parentB;
							a = parentA;
							break;
						}
						child$0 = child$0.sibling;
					}
					if (!didFindChild) throw Error(formatProdErrorMessage(189));
				}
			}
			if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
		}
		if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
		return a.stateNode.current === a ? fiber : alternate;
	}
	function findCurrentHostFiberImpl(node) {
		var tag = node.tag;
		if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
		for (node = node.child; null !== node;) {
			tag = findCurrentHostFiberImpl(node);
			if (null !== tag) return tag;
			node = node.sibling;
		}
		return null;
	}
	var assign = Object.assign;
	var REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element");
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_PORTAL_TYPE = Symbol.for("react.portal");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
	var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
	var REACT_CONTEXT_TYPE = Symbol.for("react.context");
	var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
	var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
	var REACT_MEMO_TYPE = Symbol.for("react.memo");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
	var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	function getComponentNameFromType(type) {
		if (null == type) return null;
		if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
		if ("string" === typeof type) return type;
		switch (type) {
			case REACT_FRAGMENT_TYPE: return "Fragment";
			case REACT_PROFILER_TYPE: return "Profiler";
			case REACT_STRICT_MODE_TYPE: return "StrictMode";
			case REACT_SUSPENSE_TYPE: return "Suspense";
			case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
			case REACT_ACTIVITY_TYPE: return "Activity";
		}
		if ("object" === typeof type) switch (type.$$typeof) {
			case REACT_PORTAL_TYPE: return "Portal";
			case REACT_CONTEXT_TYPE: return type.displayName || "Context";
			case REACT_CONSUMER_TYPE: return (type._context.displayName || "Context") + ".Consumer";
			case REACT_FORWARD_REF_TYPE:
				var innerType = type.render;
				type = type.displayName;
				type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
				return type;
			case REACT_MEMO_TYPE: return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
			case REACT_LAZY_TYPE:
				innerType = type._payload;
				type = type._init;
				try {
					return getComponentNameFromType(type(innerType));
				} catch (x) {}
		}
		return null;
	}
	var isArrayImpl = Array.isArray;
	var ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	var ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	var sharedNotPendingObject = {
		pending: !1,
		data: null,
		method: null,
		action: null
	};
	var valueStack = [];
	var index = -1;
	function createCursor(defaultValue) {
		return { current: defaultValue };
	}
	function pop(cursor) {
		0 > index || (cursor.current = valueStack[index], valueStack[index] = null, index--);
	}
	function push(cursor, value) {
		index++;
		valueStack[index] = cursor.current;
		cursor.current = value;
	}
	var contextStackCursor = createCursor(null);
	var contextFiberStackCursor = createCursor(null);
	var rootInstanceStackCursor = createCursor(null);
	var hostTransitionProviderCursor = createCursor(null);
	function pushHostContainer(fiber, nextRootInstance) {
		push(rootInstanceStackCursor, nextRootInstance);
		push(contextFiberStackCursor, fiber);
		push(contextStackCursor, null);
		switch (nextRootInstance.nodeType) {
			case 9:
			case 11:
				fiber = (fiber = nextRootInstance.documentElement) ? (fiber = fiber.namespaceURI) ? getOwnHostContext(fiber) : 0 : 0;
				break;
			default: if (fiber = nextRootInstance.tagName, nextRootInstance = nextRootInstance.namespaceURI) nextRootInstance = getOwnHostContext(nextRootInstance), fiber = getChildHostContextProd(nextRootInstance, fiber);
			else switch (fiber) {
				case "svg":
					fiber = 1;
					break;
				case "math":
					fiber = 2;
					break;
				default: fiber = 0;
			}
		}
		pop(contextStackCursor);
		push(contextStackCursor, fiber);
	}
	function popHostContainer() {
		pop(contextStackCursor);
		pop(contextFiberStackCursor);
		pop(rootInstanceStackCursor);
	}
	function pushHostContext(fiber) {
		null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
		var context = contextStackCursor.current;
		var JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
		context !== JSCompiler_inline_result && (push(contextFiberStackCursor, fiber), push(contextStackCursor, JSCompiler_inline_result));
	}
	function popHostContext(fiber) {
		contextFiberStackCursor.current === fiber && (pop(contextStackCursor), pop(contextFiberStackCursor));
		hostTransitionProviderCursor.current === fiber && (pop(hostTransitionProviderCursor), HostTransitionContext._currentValue = sharedNotPendingObject);
	}
	var prefix;
	var suffix;
	function describeBuiltInComponentFrame(name) {
		if (void 0 === prefix) try {
			throw Error();
		} catch (x) {
			var match = x.stack.trim().match(/\n( *(at )?)/);
			prefix = match && match[1] || "";
			suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + prefix + name + suffix;
	}
	var reentry = !1;
	function describeNativeComponentFrame(fn, construct) {
		if (!fn || reentry) return "";
		reentry = !0;
		var previousPrepareStackTrace = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var RunInRootFrame = { DetermineComponentFrameRoot: function() {
				try {
					if (construct) {
						var Fake = function() {
							throw Error();
						};
						Object.defineProperty(Fake.prototype, "props", { set: function() {
							throw Error();
						} });
						if ("object" === typeof Reflect && Reflect.construct) {
							try {
								Reflect.construct(Fake, []);
							} catch (x) {
								var control = x;
							}
							Reflect.construct(fn, [], Fake);
						} else {
							try {
								Fake.call();
							} catch (x$1) {
								control = x$1;
							}
							fn.call(Fake.prototype);
						}
					} else {
						try {
							throw Error();
						} catch (x$2) {
							control = x$2;
						}
						(Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
					}
				} catch (sample) {
					if (sample && control && "string" === typeof sample.stack) return [sample.stack, control.stack];
				}
				return [null, null];
			} };
			RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
			namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
			if (sampleStack && controlStack) {
				var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
				for (namePropDescriptor = RunInRootFrame = 0; RunInRootFrame < sampleLines.length && !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot");) RunInRootFrame++;
				for (; namePropDescriptor < controlLines.length && !controlLines[namePropDescriptor].includes("DetermineComponentFrameRoot");) namePropDescriptor++;
				if (RunInRootFrame === sampleLines.length || namePropDescriptor === controlLines.length) for (RunInRootFrame = sampleLines.length - 1, namePropDescriptor = controlLines.length - 1; 1 <= RunInRootFrame && 0 <= namePropDescriptor && sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor];) namePropDescriptor--;
				for (; 1 <= RunInRootFrame && 0 <= namePropDescriptor; RunInRootFrame--, namePropDescriptor--) if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
					if (1 !== RunInRootFrame || 1 !== namePropDescriptor) do
						if (RunInRootFrame--, namePropDescriptor--, 0 > namePropDescriptor || sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
							var frame = "\n" + sampleLines[RunInRootFrame].replace(" at new ", " at ");
							fn.displayName && frame.includes("<anonymous>") && (frame = frame.replace("<anonymous>", fn.displayName));
							return frame;
						}
					while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
					break;
				}
			}
		} finally {
			reentry = !1, Error.prepareStackTrace = previousPrepareStackTrace;
		}
		return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(previousPrepareStackTrace) : "";
	}
	function describeFiber(fiber, childFiber) {
		switch (fiber.tag) {
			case 26:
			case 27:
			case 5: return describeBuiltInComponentFrame(fiber.type);
			case 16: return describeBuiltInComponentFrame("Lazy");
			case 13: return fiber.child !== childFiber && null !== childFiber ? describeBuiltInComponentFrame("Suspense Fallback") : describeBuiltInComponentFrame("Suspense");
			case 19: return describeBuiltInComponentFrame("SuspenseList");
			case 0:
			case 15: return describeNativeComponentFrame(fiber.type, !1);
			case 11: return describeNativeComponentFrame(fiber.type.render, !1);
			case 1: return describeNativeComponentFrame(fiber.type, !0);
			case 31: return describeBuiltInComponentFrame("Activity");
			default: return "";
		}
	}
	function getStackByFiberInDevAndProd(workInProgress) {
		try {
			var info = "", previous = null;
			do
				info += describeFiber(workInProgress, previous), previous = workInProgress, workInProgress = workInProgress.return;
			while (workInProgress);
			return info;
		} catch (x) {
			return "\nError generating stack: " + x.message + "\n" + x.stack;
		}
	}
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var scheduleCallback$3 = Scheduler.unstable_scheduleCallback;
	var cancelCallback$1 = Scheduler.unstable_cancelCallback;
	var shouldYield = Scheduler.unstable_shouldYield;
	var requestPaint = Scheduler.unstable_requestPaint;
	var now = Scheduler.unstable_now;
	var getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel;
	var ImmediatePriority = Scheduler.unstable_ImmediatePriority;
	var UserBlockingPriority = Scheduler.unstable_UserBlockingPriority;
	var NormalPriority$1 = Scheduler.unstable_NormalPriority;
	var LowPriority = Scheduler.unstable_LowPriority;
	var IdlePriority = Scheduler.unstable_IdlePriority;
	var log$1 = Scheduler.log;
	var unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue;
	var rendererID = null;
	var injectedHook = null;
	function setIsStrictModeForDevtools(newIsStrictMode) {
		"function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
		if (injectedHook && "function" === typeof injectedHook.setStrictMode) try {
			injectedHook.setStrictMode(rendererID, newIsStrictMode);
		} catch (err) {}
	}
	var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
	var log = Math.log;
	var LN2 = Math.LN2;
	function clz32Fallback(x) {
		x >>>= 0;
		return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
	}
	var nextTransitionUpdateLane = 256;
	var nextTransitionDeferredLane = 262144;
	var nextRetryLane = 4194304;
	function getHighestPriorityLanes(lanes) {
		var pendingSyncLanes = lanes & 42;
		if (0 !== pendingSyncLanes) return pendingSyncLanes;
		switch (lanes & -lanes) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return lanes & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return lanes & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return lanes & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return lanes;
		}
	}
	function getNextLanes(root, wipLanes, rootHasPendingCommit) {
		var pendingLanes = root.pendingLanes;
		if (0 === pendingLanes) return 0;
		var nextLanes = 0, suspendedLanes = root.suspendedLanes, pingedLanes = root.pingedLanes;
		root = root.warmLanes;
		var nonIdlePendingLanes = pendingLanes & 134217727;
		0 !== nonIdlePendingLanes ? (pendingLanes = nonIdlePendingLanes & ~suspendedLanes, 0 !== pendingLanes ? nextLanes = getHighestPriorityLanes(pendingLanes) : (pingedLanes &= nonIdlePendingLanes, 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = nonIdlePendingLanes & ~root, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))))) : (nonIdlePendingLanes = pendingLanes & ~suspendedLanes, 0 !== nonIdlePendingLanes ? nextLanes = getHighestPriorityLanes(nonIdlePendingLanes) : 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = pendingLanes & ~root, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))));
		return 0 === nextLanes ? 0 : 0 !== wipLanes && wipLanes !== nextLanes && 0 === (wipLanes & suspendedLanes) && (suspendedLanes = nextLanes & -nextLanes, rootHasPendingCommit = wipLanes & -wipLanes, suspendedLanes >= rootHasPendingCommit || 32 === suspendedLanes && 0 !== (rootHasPendingCommit & 4194048)) ? wipLanes : nextLanes;
	}
	function checkIfRootIsPrerendering(root, renderLanes) {
		return 0 === (root.pendingLanes & ~(root.suspendedLanes & ~root.pingedLanes) & renderLanes);
	}
	function computeExpirationTime(lane, currentTime) {
		switch (lane) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return currentTime + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return currentTime + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function claimNextRetryLane() {
		var lane = nextRetryLane;
		nextRetryLane <<= 1;
		0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
		return lane;
	}
	function createLaneMap(initial) {
		for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
		return laneMap;
	}
	function markRootUpdated$1(root, updateLane) {
		root.pendingLanes |= updateLane;
		268435456 !== updateLane && (root.suspendedLanes = 0, root.pingedLanes = 0, root.warmLanes = 0);
	}
	function markRootFinished(root, finishedLanes, remainingLanes, spawnedLane, updatedLanes, suspendedRetryLanes) {
		var previouslyPendingLanes = root.pendingLanes;
		root.pendingLanes = remainingLanes;
		root.suspendedLanes = 0;
		root.pingedLanes = 0;
		root.warmLanes = 0;
		root.expiredLanes &= remainingLanes;
		root.entangledLanes &= remainingLanes;
		root.errorRecoveryDisabledLanes &= remainingLanes;
		root.shellSuspendCounter = 0;
		var entanglements = root.entanglements, expirationTimes = root.expirationTimes, hiddenUpdates = root.hiddenUpdates;
		for (remainingLanes = previouslyPendingLanes & ~remainingLanes; 0 < remainingLanes;) {
			var index$7 = 31 - clz32(remainingLanes), lane = 1 << index$7;
			entanglements[index$7] = 0;
			expirationTimes[index$7] = -1;
			var hiddenUpdatesForLane = hiddenUpdates[index$7];
			if (null !== hiddenUpdatesForLane) for (hiddenUpdates[index$7] = null, index$7 = 0; index$7 < hiddenUpdatesForLane.length; index$7++) {
				var update = hiddenUpdatesForLane[index$7];
				null !== update && (update.lane &= -536870913);
			}
			remainingLanes &= ~lane;
		}
		0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, 0);
		0 !== suspendedRetryLanes && 0 === updatedLanes && 0 !== root.tag && (root.suspendedLanes |= suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
	}
	function markSpawnedDeferredLane(root, spawnedLane, entangledLanes) {
		root.pendingLanes |= spawnedLane;
		root.suspendedLanes &= ~spawnedLane;
		var spawnedLaneIndex = 31 - clz32(spawnedLane);
		root.entangledLanes |= spawnedLane;
		root.entanglements[spawnedLaneIndex] = root.entanglements[spawnedLaneIndex] | 1073741824 | entangledLanes & 261930;
	}
	function markRootEntangled(root, entangledLanes) {
		var rootEntangledLanes = root.entangledLanes |= entangledLanes;
		for (root = root.entanglements; rootEntangledLanes;) {
			var index$8 = 31 - clz32(rootEntangledLanes), lane = 1 << index$8;
			lane & entangledLanes | root[index$8] & entangledLanes && (root[index$8] |= entangledLanes);
			rootEntangledLanes &= ~lane;
		}
	}
	function getBumpedLaneForHydration(root, renderLanes) {
		var renderLane = renderLanes & -renderLanes;
		renderLane = 0 !== (renderLane & 42) ? 1 : getBumpedLaneForHydrationByLane(renderLane);
		return 0 !== (renderLane & (root.suspendedLanes | renderLanes)) ? 0 : renderLane;
	}
	function getBumpedLaneForHydrationByLane(lane) {
		switch (lane) {
			case 2:
				lane = 1;
				break;
			case 8:
				lane = 4;
				break;
			case 32:
				lane = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				lane = 128;
				break;
			case 268435456:
				lane = 134217728;
				break;
			default: lane = 0;
		}
		return lane;
	}
	function lanesToEventPriority(lanes) {
		lanes &= -lanes;
		return 2 < lanes ? 8 < lanes ? 0 !== (lanes & 134217727) ? 32 : 268435456 : 8 : 2;
	}
	function resolveUpdatePriority() {
		var updatePriority = ReactDOMSharedInternals.p;
		if (0 !== updatePriority) return updatePriority;
		updatePriority = window.event;
		return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
	}
	function runWithPriority(priority, fn) {
		var previousPriority = ReactDOMSharedInternals.p;
		try {
			return ReactDOMSharedInternals.p = priority, fn();
		} finally {
			ReactDOMSharedInternals.p = previousPriority;
		}
	}
	var randomKey = Math.random().toString(36).slice(2);
	var internalInstanceKey = "__reactFiber$" + randomKey;
	var internalPropsKey = "__reactProps$" + randomKey;
	var internalContainerInstanceKey = "__reactContainer$" + randomKey;
	var internalEventHandlersKey = "__reactEvents$" + randomKey;
	var internalEventHandlerListenersKey = "__reactListeners$" + randomKey;
	var internalEventHandlesSetKey = "__reactHandles$" + randomKey;
	var internalRootNodeResourcesKey = "__reactResources$" + randomKey;
	var internalHoistableMarker = "__reactMarker$" + randomKey;
	function detachDeletedInstance(node) {
		delete node[internalInstanceKey];
		delete node[internalPropsKey];
		delete node[internalEventHandlersKey];
		delete node[internalEventHandlerListenersKey];
		delete node[internalEventHandlesSetKey];
	}
	function getClosestInstanceFromNode(targetNode) {
		var targetInst = targetNode[internalInstanceKey];
		if (targetInst) return targetInst;
		for (var parentNode = targetNode.parentNode; parentNode;) {
			if (targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey]) {
				parentNode = targetInst.alternate;
				if (null !== targetInst.child || null !== parentNode && null !== parentNode.child) for (targetNode = getParentHydrationBoundary(targetNode); null !== targetNode;) {
					if (parentNode = targetNode[internalInstanceKey]) return parentNode;
					targetNode = getParentHydrationBoundary(targetNode);
				}
				return targetInst;
			}
			targetNode = parentNode;
			parentNode = targetNode.parentNode;
		}
		return null;
	}
	function getInstanceFromNode(node) {
		if (node = node[internalInstanceKey] || node[internalContainerInstanceKey]) {
			var tag = node.tag;
			if (5 === tag || 6 === tag || 13 === tag || 31 === tag || 26 === tag || 27 === tag || 3 === tag) return node;
		}
		return null;
	}
	function getNodeFromInstance(inst) {
		var tag = inst.tag;
		if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
		throw Error(formatProdErrorMessage(33));
	}
	function getResourcesFromRoot(root) {
		var resources = root[internalRootNodeResourcesKey];
		resources || (resources = root[internalRootNodeResourcesKey] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		});
		return resources;
	}
	function markNodeAsHoistable(node) {
		node[internalHoistableMarker] = !0;
	}
	var allNativeEvents = /* @__PURE__ */ new Set();
	var registrationNameDependencies = {};
	function registerTwoPhaseEvent(registrationName, dependencies) {
		registerDirectEvent(registrationName, dependencies);
		registerDirectEvent(registrationName + "Capture", dependencies);
	}
	function registerDirectEvent(registrationName, dependencies) {
		registrationNameDependencies[registrationName] = dependencies;
		for (registrationName = 0; registrationName < dependencies.length; registrationName++) allNativeEvents.add(dependencies[registrationName]);
	}
	var VALID_ATTRIBUTE_NAME_REGEX = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
	var illegalAttributeNameCache = {};
	var validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
		if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) return !0;
		if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return !1;
		if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) return validatedAttributeNameCache[attributeName] = !0;
		illegalAttributeNameCache[attributeName] = !0;
		return !1;
	}
	function setValueForAttribute(node, name, value) {
		if (isAttributeNameSafe(name)) if (null === value) node.removeAttribute(name);
		else {
			switch (typeof value) {
				case "undefined":
				case "function":
				case "symbol":
					node.removeAttribute(name);
					return;
				case "boolean":
					var prefix$10 = name.toLowerCase().slice(0, 5);
					if ("data-" !== prefix$10 && "aria-" !== prefix$10) {
						node.removeAttribute(name);
						return;
					}
			}
			node.setAttribute(name, "" + value);
		}
	}
	function setValueForKnownAttribute(node, name, value) {
		if (null === value) node.removeAttribute(name);
		else {
			switch (typeof value) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					node.removeAttribute(name);
					return;
			}
			node.setAttribute(name, "" + value);
		}
	}
	function setValueForNamespacedAttribute(node, namespace, name, value) {
		if (null === value) node.removeAttribute(name);
		else {
			switch (typeof value) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					node.removeAttribute(name);
					return;
			}
			node.setAttributeNS(namespace, name, "" + value);
		}
	}
	function getToStringValue(value) {
		switch (typeof value) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return value;
			case "object": return value;
			default: return "";
		}
	}
	function isCheckable(elem) {
		var type = elem.type;
		return (elem = elem.nodeName) && "input" === elem.toLowerCase() && ("checkbox" === type || "radio" === type);
	}
	function trackValueOnNode(node, valueField, currentValue) {
		var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);
		if (!node.hasOwnProperty(valueField) && "undefined" !== typeof descriptor && "function" === typeof descriptor.get && "function" === typeof descriptor.set) {
			var get = descriptor.get, set = descriptor.set;
			Object.defineProperty(node, valueField, {
				configurable: !0,
				get: function() {
					return get.call(this);
				},
				set: function(value) {
					currentValue = "" + value;
					set.call(this, value);
				}
			});
			Object.defineProperty(node, valueField, { enumerable: descriptor.enumerable });
			return {
				getValue: function() {
					return currentValue;
				},
				setValue: function(value) {
					currentValue = "" + value;
				},
				stopTracking: function() {
					node._valueTracker = null;
					delete node[valueField];
				}
			};
		}
	}
	function track(node) {
		if (!node._valueTracker) {
			var valueField = isCheckable(node) ? "checked" : "value";
			node._valueTracker = trackValueOnNode(node, valueField, "" + node[valueField]);
		}
	}
	function updateValueIfChanged(node) {
		if (!node) return !1;
		var tracker = node._valueTracker;
		if (!tracker) return !0;
		var lastValue = tracker.getValue();
		var value = "";
		node && (value = isCheckable(node) ? node.checked ? "true" : "false" : node.value);
		node = value;
		return node !== lastValue ? (tracker.setValue(node), !0) : !1;
	}
	function getActiveElement(doc) {
		doc = doc || ("undefined" !== typeof document ? document : void 0);
		if ("undefined" === typeof doc) return null;
		try {
			return doc.activeElement || doc.body;
		} catch (e) {
			return doc.body;
		}
	}
	var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
	function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
		return value.replace(escapeSelectorAttributeValueInsideDoubleQuotesRegex, function(ch) {
			return "\\" + ch.charCodeAt(0).toString(16) + " ";
		});
	}
	function updateInput(element, value, defaultValue, lastDefaultValue, checked, defaultChecked, type, name) {
		element.name = "";
		null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type ? element.type = type : element.removeAttribute("type");
		if (null != value) if ("number" === type) {
			if (0 === value && "" === element.value || element.value != value) element.value = "" + getToStringValue(value);
		} else element.value !== "" + getToStringValue(value) && (element.value = "" + getToStringValue(value));
		else "submit" !== type && "reset" !== type || element.removeAttribute("value");
		null != value ? setDefaultValue(element, type, getToStringValue(value)) : null != defaultValue ? setDefaultValue(element, type, getToStringValue(defaultValue)) : null != lastDefaultValue && element.removeAttribute("value");
		null == checked && null != defaultChecked && (element.defaultChecked = !!defaultChecked);
		null != checked && (element.checked = checked && "function" !== typeof checked && "symbol" !== typeof checked);
		null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name ? element.name = "" + getToStringValue(name) : element.removeAttribute("name");
	}
	function initInput(element, value, defaultValue, checked, defaultChecked, type, name, isHydrating) {
		null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type && (element.type = type);
		if (null != value || null != defaultValue) {
			if (!("submit" !== type && "reset" !== type || void 0 !== value && null !== value)) {
				track(element);
				return;
			}
			defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
			value = null != value ? "" + getToStringValue(value) : defaultValue;
			isHydrating || value === element.value || (element.value = value);
			element.defaultValue = value;
		}
		checked = null != checked ? checked : defaultChecked;
		checked = "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
		element.checked = isHydrating ? element.checked : !!checked;
		element.defaultChecked = !!checked;
		null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name && (element.name = name);
		track(element);
	}
	function setDefaultValue(node, type, value) {
		"number" === type && getActiveElement(node.ownerDocument) === node || node.defaultValue === "" + value || (node.defaultValue = "" + value);
	}
	function updateOptions(node, multiple, propValue, setDefaultSelected) {
		node = node.options;
		if (multiple) {
			multiple = {};
			for (var i = 0; i < propValue.length; i++) multiple["$" + propValue[i]] = !0;
			for (propValue = 0; propValue < node.length; propValue++) i = multiple.hasOwnProperty("$" + node[propValue].value), node[propValue].selected !== i && (node[propValue].selected = i), i && setDefaultSelected && (node[propValue].defaultSelected = !0);
		} else {
			propValue = "" + getToStringValue(propValue);
			multiple = null;
			for (i = 0; i < node.length; i++) {
				if (node[i].value === propValue) {
					node[i].selected = !0;
					setDefaultSelected && (node[i].defaultSelected = !0);
					return;
				}
				null !== multiple || node[i].disabled || (multiple = node[i]);
			}
			null !== multiple && (multiple.selected = !0);
		}
	}
	function updateTextarea(element, value, defaultValue) {
		if (null != value && (value = "" + getToStringValue(value), value !== element.value && (element.value = value), null == defaultValue)) {
			element.defaultValue !== value && (element.defaultValue = value);
			return;
		}
		element.defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
	}
	function initTextarea(element, value, defaultValue, children) {
		if (null == value) {
			if (null != children) {
				if (null != defaultValue) throw Error(formatProdErrorMessage(92));
				if (isArrayImpl(children)) {
					if (1 < children.length) throw Error(formatProdErrorMessage(93));
					children = children[0];
				}
				defaultValue = children;
			}
			defaultValue ??= "";
			value = defaultValue;
		}
		defaultValue = getToStringValue(value);
		element.defaultValue = defaultValue;
		children = element.textContent;
		children === defaultValue && "" !== children && null !== children && (element.value = children);
		track(element);
	}
	function setTextContent(node, text) {
		if (text) {
			var firstChild = node.firstChild;
			if (firstChild && firstChild === node.lastChild && 3 === firstChild.nodeType) {
				firstChild.nodeValue = text;
				return;
			}
		}
		node.textContent = text;
	}
	var unitlessNumbers = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function setValueForStyle(style, styleName, value) {
		var isCustomProperty = 0 === styleName.indexOf("--");
		null == value || "boolean" === typeof value || "" === value ? isCustomProperty ? style.setProperty(styleName, "") : "float" === styleName ? style.cssFloat = "" : style[styleName] = "" : isCustomProperty ? style.setProperty(styleName, value) : "number" !== typeof value || 0 === value || unitlessNumbers.has(styleName) ? "float" === styleName ? style.cssFloat = value : style[styleName] = ("" + value).trim() : style[styleName] = value + "px";
	}
	function setValueForStyles(node, styles, prevStyles) {
		if (null != styles && "object" !== typeof styles) throw Error(formatProdErrorMessage(62));
		node = node.style;
		if (null != prevStyles) {
			for (var styleName in prevStyles) !prevStyles.hasOwnProperty(styleName) || null != styles && styles.hasOwnProperty(styleName) || (0 === styleName.indexOf("--") ? node.setProperty(styleName, "") : "float" === styleName ? node.cssFloat = "" : node[styleName] = "");
			for (var styleName$16 in styles) styleName = styles[styleName$16], styles.hasOwnProperty(styleName$16) && prevStyles[styleName$16] !== styleName && setValueForStyle(node, styleName$16, styleName);
		} else for (var styleName$17 in styles) styles.hasOwnProperty(styleName$17) && setValueForStyle(node, styleName$17, styles[styleName$17]);
	}
	function isCustomElement(tagName) {
		if (-1 === tagName.indexOf("-")) return !1;
		switch (tagName) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var aliases = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]);
	var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function sanitizeURL(url) {
		return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
	}
	function noop$1() {}
	var currentReplayingEvent = null;
	function getEventTarget(nativeEvent) {
		nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
		nativeEvent.correspondingUseElement && (nativeEvent = nativeEvent.correspondingUseElement);
		return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
	}
	var restoreTarget = null;
	var restoreQueue = null;
	function restoreStateOfTarget(target) {
		var internalInstance = getInstanceFromNode(target);
		if (internalInstance && (target = internalInstance.stateNode)) {
			var props = target[internalPropsKey] || null;
			a: switch (target = internalInstance.stateNode, internalInstance.type) {
				case "input":
					updateInput(target, props.value, props.defaultValue, props.defaultValue, props.checked, props.defaultChecked, props.type, props.name);
					internalInstance = props.name;
					if ("radio" === props.type && null != internalInstance) {
						for (props = target; props.parentNode;) props = props.parentNode;
						props = props.querySelectorAll("input[name=\"" + escapeSelectorAttributeValueInsideDoubleQuotes("" + internalInstance) + "\"][type=\"radio\"]");
						for (internalInstance = 0; internalInstance < props.length; internalInstance++) {
							var otherNode = props[internalInstance];
							if (otherNode !== target && otherNode.form === target.form) {
								var otherProps = otherNode[internalPropsKey] || null;
								if (!otherProps) throw Error(formatProdErrorMessage(90));
								updateInput(otherNode, otherProps.value, otherProps.defaultValue, otherProps.defaultValue, otherProps.checked, otherProps.defaultChecked, otherProps.type, otherProps.name);
							}
						}
						for (internalInstance = 0; internalInstance < props.length; internalInstance++) otherNode = props[internalInstance], otherNode.form === target.form && updateValueIfChanged(otherNode);
					}
					break a;
				case "textarea":
					updateTextarea(target, props.value, props.defaultValue);
					break a;
				case "select": internalInstance = props.value, null != internalInstance && updateOptions(target, !!props.multiple, internalInstance, !1);
			}
		}
	}
	var isInsideEventHandler = !1;
	function batchedUpdates$1(fn, a, b) {
		if (isInsideEventHandler) return fn(a, b);
		isInsideEventHandler = !0;
		try {
			return fn(a);
		} finally {
			if (isInsideEventHandler = !1, null !== restoreTarget || null !== restoreQueue) {
				if (flushSyncWork$1(), restoreTarget && (a = restoreTarget, fn = restoreQueue, restoreQueue = restoreTarget = null, restoreStateOfTarget(a), fn)) for (a = 0; a < fn.length; a++) restoreStateOfTarget(fn[a]);
			}
		}
	}
	function getListener(inst, registrationName) {
		var stateNode = inst.stateNode;
		if (null === stateNode) return null;
		var props = stateNode[internalPropsKey] || null;
		if (null === props) return null;
		stateNode = props[registrationName];
		a: switch (registrationName) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(props = !props.disabled) || (inst = inst.type, props = !("button" === inst || "input" === inst || "select" === inst || "textarea" === inst));
				inst = !props;
				break a;
			default: inst = !1;
		}
		if (inst) return null;
		if (stateNode && "function" !== typeof stateNode) throw Error(formatProdErrorMessage(231, registrationName, typeof stateNode));
		return stateNode;
	}
	var canUseDOM = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
	var passiveBrowserEventsSupported = !1;
	if (canUseDOM) try {
		var options = {};
		Object.defineProperty(options, "passive", { get: function() {
			passiveBrowserEventsSupported = !0;
		} });
		window.addEventListener("test", options, options);
		window.removeEventListener("test", options, options);
	} catch (e) {
		passiveBrowserEventsSupported = !1;
	}
	var root = null;
	var startText = null;
	var fallbackText = null;
	function getData() {
		if (fallbackText) return fallbackText;
		var start, startValue = startText, startLength = startValue.length, end, endValue = "value" in root ? root.value : root.textContent, endLength = endValue.length;
		for (start = 0; start < startLength && startValue[start] === endValue[start]; start++);
		var minEnd = startLength - start;
		for (end = 1; end <= minEnd && startValue[startLength - end] === endValue[endLength - end]; end++);
		return fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0);
	}
	function getEventCharCode(nativeEvent) {
		var keyCode = nativeEvent.keyCode;
		"charCode" in nativeEvent ? (nativeEvent = nativeEvent.charCode, 0 === nativeEvent && 13 === keyCode && (nativeEvent = 13)) : nativeEvent = keyCode;
		10 === nativeEvent && (nativeEvent = 13);
		return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
	}
	function functionThatReturnsTrue() {
		return !0;
	}
	function functionThatReturnsFalse() {
		return !1;
	}
	function createSyntheticEvent(Interface) {
		function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
			this._reactName = reactName;
			this._targetInst = targetInst;
			this.type = reactEventType;
			this.nativeEvent = nativeEvent;
			this.target = nativeEventTarget;
			this.currentTarget = null;
			for (var propName in Interface) Interface.hasOwnProperty(propName) && (reactName = Interface[propName], this[propName] = reactName ? reactName(nativeEvent) : nativeEvent[propName]);
			this.isDefaultPrevented = (null != nativeEvent.defaultPrevented ? nativeEvent.defaultPrevented : !1 === nativeEvent.returnValue) ? functionThatReturnsTrue : functionThatReturnsFalse;
			this.isPropagationStopped = functionThatReturnsFalse;
			return this;
		}
		assign(SyntheticBaseEvent.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var event = this.nativeEvent;
				event && (event.preventDefault ? event.preventDefault() : "unknown" !== typeof event.returnValue && (event.returnValue = !1), this.isDefaultPrevented = functionThatReturnsTrue);
			},
			stopPropagation: function() {
				var event = this.nativeEvent;
				event && (event.stopPropagation ? event.stopPropagation() : "unknown" !== typeof event.cancelBubble && (event.cancelBubble = !0), this.isPropagationStopped = functionThatReturnsTrue);
			},
			persist: function() {},
			isPersistent: functionThatReturnsTrue
		});
		return SyntheticBaseEvent;
	}
	var EventInterface = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(event) {
			return event.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	};
	var SyntheticEvent = createSyntheticEvent(EventInterface);
	var UIEventInterface = assign({}, EventInterface, {
		view: 0,
		detail: 0
	});
	var SyntheticUIEvent = createSyntheticEvent(UIEventInterface);
	var lastMovementX;
	var lastMovementY;
	var lastMouseEvent;
	var MouseEventInterface = assign({}, UIEventInterface, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: getEventModifierState,
		button: 0,
		buttons: 0,
		relatedTarget: function(event) {
			return void 0 === event.relatedTarget ? event.fromElement === event.srcElement ? event.toElement : event.fromElement : event.relatedTarget;
		},
		movementX: function(event) {
			if ("movementX" in event) return event.movementX;
			event !== lastMouseEvent && (lastMouseEvent && "mousemove" === event.type ? (lastMovementX = event.screenX - lastMouseEvent.screenX, lastMovementY = event.screenY - lastMouseEvent.screenY) : lastMovementY = lastMovementX = 0, lastMouseEvent = event);
			return lastMovementX;
		},
		movementY: function(event) {
			return "movementY" in event ? event.movementY : lastMovementY;
		}
	});
	var SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface);
	var SyntheticDragEvent = createSyntheticEvent(assign({}, MouseEventInterface, { dataTransfer: 0 }));
	var SyntheticFocusEvent = createSyntheticEvent(assign({}, UIEventInterface, { relatedTarget: 0 }));
	var SyntheticAnimationEvent = createSyntheticEvent(assign({}, EventInterface, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}));
	var SyntheticClipboardEvent = createSyntheticEvent(assign({}, EventInterface, { clipboardData: function(event) {
		return "clipboardData" in event ? event.clipboardData : window.clipboardData;
	} }));
	var SyntheticCompositionEvent = createSyntheticEvent(assign({}, EventInterface, { data: 0 }));
	var normalizeKey = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	};
	var translateToKey = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	};
	var modifierKeyToProp = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function modifierStateGetter(keyArg) {
		var nativeEvent = this.nativeEvent;
		return nativeEvent.getModifierState ? nativeEvent.getModifierState(keyArg) : (keyArg = modifierKeyToProp[keyArg]) ? !!nativeEvent[keyArg] : !1;
	}
	function getEventModifierState() {
		return modifierStateGetter;
	}
	var SyntheticKeyboardEvent = createSyntheticEvent(assign({}, UIEventInterface, {
		key: function(nativeEvent) {
			if (nativeEvent.key) {
				var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
				if ("Unidentified" !== key) return key;
			}
			return "keypress" === nativeEvent.type ? (nativeEvent = getEventCharCode(nativeEvent), 13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent)) : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type ? translateToKey[nativeEvent.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: getEventModifierState,
		charCode: function(event) {
			return "keypress" === event.type ? getEventCharCode(event) : 0;
		},
		keyCode: function(event) {
			return "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
		},
		which: function(event) {
			return "keypress" === event.type ? getEventCharCode(event) : "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
		}
	}));
	var SyntheticPointerEvent = createSyntheticEvent(assign({}, MouseEventInterface, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	}));
	var SyntheticTouchEvent = createSyntheticEvent(assign({}, UIEventInterface, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: getEventModifierState
	}));
	var SyntheticTransitionEvent = createSyntheticEvent(assign({}, EventInterface, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}));
	var SyntheticWheelEvent = createSyntheticEvent(assign({}, MouseEventInterface, {
		deltaX: function(event) {
			return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
		},
		deltaY: function(event) {
			return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	}));
	var SyntheticToggleEvent = createSyntheticEvent(assign({}, EventInterface, {
		newState: 0,
		oldState: 0
	}));
	var END_KEYCODES = [
		9,
		13,
		27,
		32
	];
	var canUseCompositionEvent = canUseDOM && "CompositionEvent" in window;
	var documentMode = null;
	canUseDOM && "documentMode" in document && (documentMode = document.documentMode);
	var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode;
	var useFallbackCompositionData = canUseDOM && (!canUseCompositionEvent || documentMode && 8 < documentMode && 11 >= documentMode);
	var SPACEBAR_CHAR = String.fromCharCode(32);
	var hasSpaceKeypress = !1;
	function isFallbackCompositionEnd(domEventName, nativeEvent) {
		switch (domEventName) {
			case "keyup": return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
			case "keydown": return 229 !== nativeEvent.keyCode;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function getDataFromCustomEvent(nativeEvent) {
		nativeEvent = nativeEvent.detail;
		return "object" === typeof nativeEvent && "data" in nativeEvent ? nativeEvent.data : null;
	}
	var isComposing = !1;
	function getNativeBeforeInputChars(domEventName, nativeEvent) {
		switch (domEventName) {
			case "compositionend": return getDataFromCustomEvent(nativeEvent);
			case "keypress":
				if (32 !== nativeEvent.which) return null;
				hasSpaceKeypress = !0;
				return SPACEBAR_CHAR;
			case "textInput": return domEventName = nativeEvent.data, domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName;
			default: return null;
		}
	}
	function getFallbackBeforeInputChars(domEventName, nativeEvent) {
		if (isComposing) return "compositionend" === domEventName || !canUseCompositionEvent && isFallbackCompositionEnd(domEventName, nativeEvent) ? (domEventName = getData(), fallbackText = startText = root = null, isComposing = !1, domEventName) : null;
		switch (domEventName) {
			case "paste": return null;
			case "keypress":
				if (!(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) || nativeEvent.ctrlKey && nativeEvent.altKey) {
					if (nativeEvent.char && 1 < nativeEvent.char.length) return nativeEvent.char;
					if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
				}
				return null;
			case "compositionend": return useFallbackCompositionData && "ko" !== nativeEvent.locale ? null : nativeEvent.data;
			default: return null;
		}
	}
	var supportedInputTypes = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function isTextInputElement(elem) {
		var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
		return "input" === nodeName ? !!supportedInputTypes[elem.type] : "textarea" === nodeName ? !0 : !1;
	}
	function createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, target) {
		restoreTarget ? restoreQueue ? restoreQueue.push(target) : restoreQueue = [target] : restoreTarget = target;
		inst = accumulateTwoPhaseListeners(inst, "onChange");
		0 < inst.length && (nativeEvent = new SyntheticEvent("onChange", "change", null, nativeEvent, target), dispatchQueue.push({
			event: nativeEvent,
			listeners: inst
		}));
	}
	var activeElement$1 = null;
	var activeElementInst$1 = null;
	function runEventInBatch(dispatchQueue) {
		processDispatchQueue(dispatchQueue, 0);
	}
	function getInstIfValueChanged(targetInst) {
		if (updateValueIfChanged(getNodeFromInstance(targetInst))) return targetInst;
	}
	function getTargetInstForChangeEvent(domEventName, targetInst) {
		if ("change" === domEventName) return targetInst;
	}
	var isInputEventSupported = !1;
	if (canUseDOM) {
		var JSCompiler_inline_result$jscomp$286;
		if (canUseDOM) {
			var isSupported$jscomp$inline_427 = "oninput" in document;
			if (!isSupported$jscomp$inline_427) {
				var element$jscomp$inline_428 = document.createElement("div");
				element$jscomp$inline_428.setAttribute("oninput", "return;");
				isSupported$jscomp$inline_427 = "function" === typeof element$jscomp$inline_428.oninput;
			}
			JSCompiler_inline_result$jscomp$286 = isSupported$jscomp$inline_427;
		} else JSCompiler_inline_result$jscomp$286 = !1;
		isInputEventSupported = JSCompiler_inline_result$jscomp$286 && (!document.documentMode || 9 < document.documentMode);
	}
	function stopWatchingForValueChange() {
		activeElement$1 && (activeElement$1.detachEvent("onpropertychange", handlePropertyChange), activeElementInst$1 = activeElement$1 = null);
	}
	function handlePropertyChange(nativeEvent) {
		if ("value" === nativeEvent.propertyName && getInstIfValueChanged(activeElementInst$1)) {
			var dispatchQueue = [];
			createAndAccumulateChangeEvent(dispatchQueue, activeElementInst$1, nativeEvent, getEventTarget(nativeEvent));
			batchedUpdates$1(runEventInBatch, dispatchQueue);
		}
	}
	function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
		"focusin" === domEventName ? (stopWatchingForValueChange(), activeElement$1 = target, activeElementInst$1 = targetInst, activeElement$1.attachEvent("onpropertychange", handlePropertyChange)) : "focusout" === domEventName && stopWatchingForValueChange();
	}
	function getTargetInstForInputEventPolyfill(domEventName) {
		if ("selectionchange" === domEventName || "keyup" === domEventName || "keydown" === domEventName) return getInstIfValueChanged(activeElementInst$1);
	}
	function getTargetInstForClickEvent(domEventName, targetInst) {
		if ("click" === domEventName) return getInstIfValueChanged(targetInst);
	}
	function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
		if ("input" === domEventName || "change" === domEventName) return getInstIfValueChanged(targetInst);
	}
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	function shallowEqual(objA, objB) {
		if (objectIs(objA, objB)) return !0;
		if ("object" !== typeof objA || null === objA || "object" !== typeof objB || null === objB) return !1;
		var keysA = Object.keys(objA), keysB = Object.keys(objB);
		if (keysA.length !== keysB.length) return !1;
		for (keysB = 0; keysB < keysA.length; keysB++) {
			var currentKey = keysA[keysB];
			if (!hasOwnProperty.call(objB, currentKey) || !objectIs(objA[currentKey], objB[currentKey])) return !1;
		}
		return !0;
	}
	function getLeafNode(node) {
		for (; node && node.firstChild;) node = node.firstChild;
		return node;
	}
	function getNodeForCharacterOffset(root, offset) {
		var node = getLeafNode(root);
		root = 0;
		for (var nodeEnd; node;) {
			if (3 === node.nodeType) {
				nodeEnd = root + node.textContent.length;
				if (root <= offset && nodeEnd >= offset) return {
					node,
					offset: offset - root
				};
				root = nodeEnd;
			}
			a: {
				for (; node;) {
					if (node.nextSibling) {
						node = node.nextSibling;
						break a;
					}
					node = node.parentNode;
				}
				node = void 0;
			}
			node = getLeafNode(node);
		}
	}
	function containsNode(outerNode, innerNode) {
		return outerNode && innerNode ? outerNode === innerNode ? !0 : outerNode && 3 === outerNode.nodeType ? !1 : innerNode && 3 === innerNode.nodeType ? containsNode(outerNode, innerNode.parentNode) : "contains" in outerNode ? outerNode.contains(innerNode) : outerNode.compareDocumentPosition ? !!(outerNode.compareDocumentPosition(innerNode) & 16) : !1 : !1;
	}
	function getActiveElementDeep(containerInfo) {
		containerInfo = null != containerInfo && null != containerInfo.ownerDocument && null != containerInfo.ownerDocument.defaultView ? containerInfo.ownerDocument.defaultView : window;
		for (var element = getActiveElement(containerInfo.document); element instanceof containerInfo.HTMLIFrameElement;) {
			try {
				var JSCompiler_inline_result = "string" === typeof element.contentWindow.location.href;
			} catch (err) {
				JSCompiler_inline_result = !1;
			}
			if (JSCompiler_inline_result) containerInfo = element.contentWindow;
			else break;
			element = getActiveElement(containerInfo.document);
		}
		return element;
	}
	function hasSelectionCapabilities(elem) {
		var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
		return nodeName && ("input" === nodeName && ("text" === elem.type || "search" === elem.type || "tel" === elem.type || "url" === elem.type || "password" === elem.type) || "textarea" === nodeName || "true" === elem.contentEditable);
	}
	var skipSelectionChangeEvent = canUseDOM && "documentMode" in document && 11 >= document.documentMode;
	var activeElement = null;
	var activeElementInst = null;
	var lastSelection = null;
	var mouseDown = !1;
	function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
		var doc = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget.document : 9 === nativeEventTarget.nodeType ? nativeEventTarget : nativeEventTarget.ownerDocument;
		mouseDown || null == activeElement || activeElement !== getActiveElement(doc) || (doc = activeElement, "selectionStart" in doc && hasSelectionCapabilities(doc) ? doc = {
			start: doc.selectionStart,
			end: doc.selectionEnd
		} : (doc = (doc.ownerDocument && doc.ownerDocument.defaultView || window).getSelection(), doc = {
			anchorNode: doc.anchorNode,
			anchorOffset: doc.anchorOffset,
			focusNode: doc.focusNode,
			focusOffset: doc.focusOffset
		}), lastSelection && shallowEqual(lastSelection, doc) || (lastSelection = doc, doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect"), 0 < doc.length && (nativeEvent = new SyntheticEvent("onSelect", "select", null, nativeEvent, nativeEventTarget), dispatchQueue.push({
			event: nativeEvent,
			listeners: doc
		}), nativeEvent.target = activeElement)));
	}
	function makePrefixMap(styleProp, eventName) {
		var prefixes = {};
		prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
		prefixes["Webkit" + styleProp] = "webkit" + eventName;
		prefixes["Moz" + styleProp] = "moz" + eventName;
		return prefixes;
	}
	var vendorPrefixes = {
		animationend: makePrefixMap("Animation", "AnimationEnd"),
		animationiteration: makePrefixMap("Animation", "AnimationIteration"),
		animationstart: makePrefixMap("Animation", "AnimationStart"),
		transitionrun: makePrefixMap("Transition", "TransitionRun"),
		transitionstart: makePrefixMap("Transition", "TransitionStart"),
		transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
		transitionend: makePrefixMap("Transition", "TransitionEnd")
	};
	var prefixedEventNames = {};
	var style = {};
	canUseDOM && (style = document.createElement("div").style, "AnimationEvent" in window || (delete vendorPrefixes.animationend.animation, delete vendorPrefixes.animationiteration.animation, delete vendorPrefixes.animationstart.animation), "TransitionEvent" in window || delete vendorPrefixes.transitionend.transition);
	function getVendorPrefixedEventName(eventName) {
		if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
		if (!vendorPrefixes[eventName]) return eventName;
		var prefixMap = vendorPrefixes[eventName], styleProp;
		for (styleProp in prefixMap) if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) return prefixedEventNames[eventName] = prefixMap[styleProp];
		return eventName;
	}
	var ANIMATION_END = getVendorPrefixedEventName("animationend");
	var ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration");
	var ANIMATION_START = getVendorPrefixedEventName("animationstart");
	var TRANSITION_RUN = getVendorPrefixedEventName("transitionrun");
	var TRANSITION_START = getVendorPrefixedEventName("transitionstart");
	var TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel");
	var TRANSITION_END = getVendorPrefixedEventName("transitionend");
	var topLevelEventsToReactNames = /* @__PURE__ */ new Map();
	var simpleEventPluginEvents = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	simpleEventPluginEvents.push("scrollEnd");
	function registerSimpleEvent(domEventName, reactName) {
		topLevelEventsToReactNames.set(domEventName, reactName);
		registerTwoPhaseEvent(reactName, [domEventName]);
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
		if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
			var event = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
				error
			});
			if (!window.dispatchEvent(event)) return;
		} else if ("object" === typeof process && "function" === typeof process.emit) {
			process.emit("uncaughtException", error);
			return;
		}
		console.error(error);
	};
	var concurrentQueues = [];
	var concurrentQueuesIndex = 0;
	var concurrentlyUpdatedLanes = 0;
	function finishQueueingConcurrentUpdates() {
		for (var endIndex = concurrentQueuesIndex, i = concurrentlyUpdatedLanes = concurrentQueuesIndex = 0; i < endIndex;) {
			var fiber = concurrentQueues[i];
			concurrentQueues[i++] = null;
			var queue = concurrentQueues[i];
			concurrentQueues[i++] = null;
			var update = concurrentQueues[i];
			concurrentQueues[i++] = null;
			var lane = concurrentQueues[i];
			concurrentQueues[i++] = null;
			if (null !== queue && null !== update) {
				var pending = queue.pending;
				null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
				queue.pending = update;
			}
			0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
		}
	}
	function enqueueUpdate$1(fiber, queue, update, lane) {
		concurrentQueues[concurrentQueuesIndex++] = fiber;
		concurrentQueues[concurrentQueuesIndex++] = queue;
		concurrentQueues[concurrentQueuesIndex++] = update;
		concurrentQueues[concurrentQueuesIndex++] = lane;
		concurrentlyUpdatedLanes |= lane;
		fiber.lanes |= lane;
		fiber = fiber.alternate;
		null !== fiber && (fiber.lanes |= lane);
	}
	function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
		enqueueUpdate$1(fiber, queue, update, lane);
		return getRootForUpdatedFiber(fiber);
	}
	function enqueueConcurrentRenderForLane(fiber, lane) {
		enqueueUpdate$1(fiber, null, null, lane);
		return getRootForUpdatedFiber(fiber);
	}
	function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
		sourceFiber.lanes |= lane;
		var alternate = sourceFiber.alternate;
		null !== alternate && (alternate.lanes |= lane);
		for (var isHidden = !1, parent = sourceFiber.return; null !== parent;) parent.childLanes |= lane, alternate = parent.alternate, null !== alternate && (alternate.childLanes |= lane), 22 === parent.tag && (sourceFiber = parent.stateNode, null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = !0)), sourceFiber = parent, parent = parent.return;
		return 3 === sourceFiber.tag ? (parent = sourceFiber.stateNode, isHidden && null !== update && (isHidden = 31 - clz32(lane), sourceFiber = parent.hiddenUpdates, alternate = sourceFiber[isHidden], null === alternate ? sourceFiber[isHidden] = [update] : alternate.push(update), update.lane = lane | 536870912), parent) : null;
	}
	function getRootForUpdatedFiber(sourceFiber) {
		if (50 < nestedUpdateCount) throw nestedUpdateCount = 0, rootWithNestedUpdates = null, Error(formatProdErrorMessage(185));
		for (var parent = sourceFiber.return; null !== parent;) sourceFiber = parent, parent = sourceFiber.return;
		return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
	}
	var emptyContextObject = {};
	function FiberNode(tag, pendingProps, key, mode) {
		this.tag = tag;
		this.key = key;
		this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
		this.index = 0;
		this.refCleanup = this.ref = null;
		this.pendingProps = pendingProps;
		this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
		this.mode = mode;
		this.subtreeFlags = this.flags = 0;
		this.deletions = null;
		this.childLanes = this.lanes = 0;
		this.alternate = null;
	}
	function createFiberImplClass(tag, pendingProps, key, mode) {
		return new FiberNode(tag, pendingProps, key, mode);
	}
	function shouldConstruct(Component) {
		Component = Component.prototype;
		return !(!Component || !Component.isReactComponent);
	}
	function createWorkInProgress(current, pendingProps) {
		var workInProgress = current.alternate;
		null === workInProgress ? (workInProgress = createFiberImplClass(current.tag, pendingProps, current.key, current.mode), workInProgress.elementType = current.elementType, workInProgress.type = current.type, workInProgress.stateNode = current.stateNode, workInProgress.alternate = current, current.alternate = workInProgress) : (workInProgress.pendingProps = pendingProps, workInProgress.type = current.type, workInProgress.flags = 0, workInProgress.subtreeFlags = 0, workInProgress.deletions = null);
		workInProgress.flags = current.flags & 65011712;
		workInProgress.childLanes = current.childLanes;
		workInProgress.lanes = current.lanes;
		workInProgress.child = current.child;
		workInProgress.memoizedProps = current.memoizedProps;
		workInProgress.memoizedState = current.memoizedState;
		workInProgress.updateQueue = current.updateQueue;
		pendingProps = current.dependencies;
		workInProgress.dependencies = null === pendingProps ? null : {
			lanes: pendingProps.lanes,
			firstContext: pendingProps.firstContext
		};
		workInProgress.sibling = current.sibling;
		workInProgress.index = current.index;
		workInProgress.ref = current.ref;
		workInProgress.refCleanup = current.refCleanup;
		return workInProgress;
	}
	function resetWorkInProgress(workInProgress, renderLanes) {
		workInProgress.flags &= 65011714;
		var current = workInProgress.alternate;
		null === current ? (workInProgress.childLanes = 0, workInProgress.lanes = renderLanes, workInProgress.child = null, workInProgress.subtreeFlags = 0, workInProgress.memoizedProps = null, workInProgress.memoizedState = null, workInProgress.updateQueue = null, workInProgress.dependencies = null, workInProgress.stateNode = null) : (workInProgress.childLanes = current.childLanes, workInProgress.lanes = current.lanes, workInProgress.child = current.child, workInProgress.subtreeFlags = 0, workInProgress.deletions = null, workInProgress.memoizedProps = current.memoizedProps, workInProgress.memoizedState = current.memoizedState, workInProgress.updateQueue = current.updateQueue, workInProgress.type = current.type, renderLanes = current.dependencies, workInProgress.dependencies = null === renderLanes ? null : {
			lanes: renderLanes.lanes,
			firstContext: renderLanes.firstContext
		});
		return workInProgress;
	}
	function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
		var fiberTag = 0;
		owner = type;
		if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
		else if ("string" === typeof type) fiberTag = isHostHoistableType(type, pendingProps, contextStackCursor.current) ? 26 : "html" === type || "head" === type || "body" === type ? 27 : 5;
		else a: switch (type) {
			case REACT_ACTIVITY_TYPE: return type = createFiberImplClass(31, pendingProps, key, mode), type.elementType = REACT_ACTIVITY_TYPE, type.lanes = lanes, type;
			case REACT_FRAGMENT_TYPE: return createFiberFromFragment(pendingProps.children, mode, lanes, key);
			case REACT_STRICT_MODE_TYPE:
				fiberTag = 8;
				mode |= 24;
				break;
			case REACT_PROFILER_TYPE: return type = createFiberImplClass(12, pendingProps, key, mode | 2), type.elementType = REACT_PROFILER_TYPE, type.lanes = lanes, type;
			case REACT_SUSPENSE_TYPE: return type = createFiberImplClass(13, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_TYPE, type.lanes = lanes, type;
			case REACT_SUSPENSE_LIST_TYPE: return type = createFiberImplClass(19, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_LIST_TYPE, type.lanes = lanes, type;
			default:
				if ("object" === typeof type && null !== type) switch (type.$$typeof) {
					case REACT_CONTEXT_TYPE:
						fiberTag = 10;
						break a;
					case REACT_CONSUMER_TYPE:
						fiberTag = 9;
						break a;
					case REACT_FORWARD_REF_TYPE:
						fiberTag = 11;
						break a;
					case REACT_MEMO_TYPE:
						fiberTag = 14;
						break a;
					case REACT_LAZY_TYPE:
						fiberTag = 16;
						owner = null;
						break a;
				}
				fiberTag = 29;
				pendingProps = Error(formatProdErrorMessage(130, null === type ? "null" : typeof type, ""));
				owner = null;
		}
		key = createFiberImplClass(fiberTag, pendingProps, key, mode);
		key.elementType = type;
		key.type = owner;
		key.lanes = lanes;
		return key;
	}
	function createFiberFromFragment(elements, mode, lanes, key) {
		elements = createFiberImplClass(7, elements, key, mode);
		elements.lanes = lanes;
		return elements;
	}
	function createFiberFromText(content, mode, lanes) {
		content = createFiberImplClass(6, content, null, mode);
		content.lanes = lanes;
		return content;
	}
	function createFiberFromDehydratedFragment(dehydratedNode) {
		var fiber = createFiberImplClass(18, null, null, 0);
		fiber.stateNode = dehydratedNode;
		return fiber;
	}
	function createFiberFromPortal(portal, mode, lanes) {
		mode = createFiberImplClass(4, null !== portal.children ? portal.children : [], portal.key, mode);
		mode.lanes = lanes;
		mode.stateNode = {
			containerInfo: portal.containerInfo,
			pendingChildren: null,
			implementation: portal.implementation
		};
		return mode;
	}
	var CapturedStacks = /* @__PURE__ */ new WeakMap();
	function createCapturedValueAtFiber(value, source) {
		if ("object" === typeof value && null !== value) {
			var existing = CapturedStacks.get(value);
			if (void 0 !== existing) return existing;
			source = {
				value,
				source,
				stack: getStackByFiberInDevAndProd(source)
			};
			CapturedStacks.set(value, source);
			return source;
		}
		return {
			value,
			source,
			stack: getStackByFiberInDevAndProd(source)
		};
	}
	var forkStack = [];
	var forkStackIndex = 0;
	var treeForkProvider = null;
	var treeForkCount = 0;
	var idStack = [];
	var idStackIndex = 0;
	var treeContextProvider = null;
	var treeContextId = 1;
	var treeContextOverflow = "";
	function pushTreeFork(workInProgress, totalChildren) {
		forkStack[forkStackIndex++] = treeForkCount;
		forkStack[forkStackIndex++] = treeForkProvider;
		treeForkProvider = workInProgress;
		treeForkCount = totalChildren;
	}
	function pushTreeId(workInProgress, totalChildren, index) {
		idStack[idStackIndex++] = treeContextId;
		idStack[idStackIndex++] = treeContextOverflow;
		idStack[idStackIndex++] = treeContextProvider;
		treeContextProvider = workInProgress;
		var baseIdWithLeadingBit = treeContextId;
		workInProgress = treeContextOverflow;
		var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
		baseIdWithLeadingBit &= ~(1 << baseLength);
		index += 1;
		var length = 32 - clz32(totalChildren) + baseLength;
		if (30 < length) {
			var numberOfOverflowBits = baseLength - baseLength % 5;
			length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
			baseIdWithLeadingBit >>= numberOfOverflowBits;
			baseLength -= numberOfOverflowBits;
			treeContextId = 1 << 32 - clz32(totalChildren) + baseLength | index << baseLength | baseIdWithLeadingBit;
			treeContextOverflow = length + workInProgress;
		} else treeContextId = 1 << length | index << baseLength | baseIdWithLeadingBit, treeContextOverflow = workInProgress;
	}
	function pushMaterializedTreeId(workInProgress) {
		null !== workInProgress.return && (pushTreeFork(workInProgress, 1), pushTreeId(workInProgress, 1, 0));
	}
	function popTreeContext(workInProgress) {
		for (; workInProgress === treeForkProvider;) treeForkProvider = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null, treeForkCount = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null;
		for (; workInProgress === treeContextProvider;) treeContextProvider = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextOverflow = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextId = idStack[--idStackIndex], idStack[idStackIndex] = null;
	}
	function restoreSuspendedTreeContext(workInProgress, suspendedContext) {
		idStack[idStackIndex++] = treeContextId;
		idStack[idStackIndex++] = treeContextOverflow;
		idStack[idStackIndex++] = treeContextProvider;
		treeContextId = suspendedContext.id;
		treeContextOverflow = suspendedContext.overflow;
		treeContextProvider = workInProgress;
	}
	var hydrationParentFiber = null;
	var nextHydratableInstance = null;
	var isHydrating = !1;
	var hydrationErrors = null;
	var rootOrSingletonContext = !1;
	var HydrationMismatchException = Error(formatProdErrorMessage(519));
	function throwOnHydrationMismatch(fiber) {
		queueHydrationError(createCapturedValueAtFiber(Error(formatProdErrorMessage(418, 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? "text" : "HTML", "")), fiber));
		throw HydrationMismatchException;
	}
	function prepareToHydrateHostInstance(fiber) {
		var instance = fiber.stateNode, type = fiber.type, props = fiber.memoizedProps;
		instance[internalInstanceKey] = fiber;
		instance[internalPropsKey] = props;
		switch (type) {
			case "dialog":
				listenToNonDelegatedEvent("cancel", instance);
				listenToNonDelegatedEvent("close", instance);
				break;
			case "iframe":
			case "object":
			case "embed":
				listenToNonDelegatedEvent("load", instance);
				break;
			case "video":
			case "audio":
				for (type = 0; type < mediaEventTypes.length; type++) listenToNonDelegatedEvent(mediaEventTypes[type], instance);
				break;
			case "source":
				listenToNonDelegatedEvent("error", instance);
				break;
			case "img":
			case "image":
			case "link":
				listenToNonDelegatedEvent("error", instance);
				listenToNonDelegatedEvent("load", instance);
				break;
			case "details":
				listenToNonDelegatedEvent("toggle", instance);
				break;
			case "input":
				listenToNonDelegatedEvent("invalid", instance);
				initInput(instance, props.value, props.defaultValue, props.checked, props.defaultChecked, props.type, props.name, !0);
				break;
			case "select":
				listenToNonDelegatedEvent("invalid", instance);
				break;
			case "textarea": listenToNonDelegatedEvent("invalid", instance), initTextarea(instance, props.value, props.defaultValue, props.children);
		}
		type = props.children;
		"string" !== typeof type && "number" !== typeof type && "bigint" !== typeof type || instance.textContent === "" + type || !0 === props.suppressHydrationWarning || checkForUnmatchedText(instance.textContent, type) ? (null != props.popover && (listenToNonDelegatedEvent("beforetoggle", instance), listenToNonDelegatedEvent("toggle", instance)), null != props.onScroll && listenToNonDelegatedEvent("scroll", instance), null != props.onScrollEnd && listenToNonDelegatedEvent("scrollend", instance), null != props.onClick && (instance.onclick = noop$1), instance = !0) : instance = !1;
		instance || throwOnHydrationMismatch(fiber, !0);
	}
	function popToNextHostParent(fiber) {
		for (hydrationParentFiber = fiber.return; hydrationParentFiber;) switch (hydrationParentFiber.tag) {
			case 5:
			case 31:
			case 13:
				rootOrSingletonContext = !1;
				return;
			case 27:
			case 3:
				rootOrSingletonContext = !0;
				return;
			default: hydrationParentFiber = hydrationParentFiber.return;
		}
	}
	function popHydrationState(fiber) {
		if (fiber !== hydrationParentFiber) return !1;
		if (!isHydrating) return popToNextHostParent(fiber), isHydrating = !0, !1;
		var tag = fiber.tag, JSCompiler_temp;
		if (JSCompiler_temp = 3 !== tag && 27 !== tag) {
			if (JSCompiler_temp = 5 === tag) JSCompiler_temp = fiber.type, JSCompiler_temp = !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) || shouldSetTextContent(fiber.type, fiber.memoizedProps);
			JSCompiler_temp = !JSCompiler_temp;
		}
		JSCompiler_temp && nextHydratableInstance && throwOnHydrationMismatch(fiber);
		popToNextHostParent(fiber);
		if (13 === tag) {
			fiber = fiber.memoizedState;
			fiber = null !== fiber ? fiber.dehydrated : null;
			if (!fiber) throw Error(formatProdErrorMessage(317));
			nextHydratableInstance = getNextHydratableInstanceAfterHydrationBoundary(fiber);
		} else if (31 === tag) {
			fiber = fiber.memoizedState;
			fiber = null !== fiber ? fiber.dehydrated : null;
			if (!fiber) throw Error(formatProdErrorMessage(317));
			nextHydratableInstance = getNextHydratableInstanceAfterHydrationBoundary(fiber);
		} else 27 === tag ? (tag = nextHydratableInstance, isSingletonScope(fiber.type) ? (fiber = previousHydratableOnEnteringScopedSingleton, previousHydratableOnEnteringScopedSingleton = null, nextHydratableInstance = fiber) : nextHydratableInstance = tag) : nextHydratableInstance = hydrationParentFiber ? getNextHydratable(fiber.stateNode.nextSibling) : null;
		return !0;
	}
	function resetHydrationState() {
		nextHydratableInstance = hydrationParentFiber = null;
		isHydrating = !1;
	}
	function upgradeHydrationErrorsToRecoverable() {
		var queuedErrors = hydrationErrors;
		null !== queuedErrors && (null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = queuedErrors : workInProgressRootRecoverableErrors.push.apply(workInProgressRootRecoverableErrors, queuedErrors), hydrationErrors = null);
		return queuedErrors;
	}
	function queueHydrationError(error) {
		null === hydrationErrors ? hydrationErrors = [error] : hydrationErrors.push(error);
	}
	var valueCursor = createCursor(null);
	var currentlyRenderingFiber$1 = null;
	var lastContextDependency = null;
	function pushProvider(providerFiber, context, nextValue) {
		push(valueCursor, context._currentValue);
		context._currentValue = nextValue;
	}
	function popProvider(context) {
		context._currentValue = valueCursor.current;
		pop(valueCursor);
	}
	function scheduleContextWorkOnParentPath(parent, renderLanes, propagationRoot) {
		for (; null !== parent;) {
			var alternate = parent.alternate;
			(parent.childLanes & renderLanes) !== renderLanes ? (parent.childLanes |= renderLanes, null !== alternate && (alternate.childLanes |= renderLanes)) : null !== alternate && (alternate.childLanes & renderLanes) !== renderLanes && (alternate.childLanes |= renderLanes);
			if (parent === propagationRoot) break;
			parent = parent.return;
		}
	}
	function propagateContextChanges(workInProgress, contexts, renderLanes, forcePropagateEntireTree) {
		var fiber = workInProgress.child;
		null !== fiber && (fiber.return = workInProgress);
		for (; null !== fiber;) {
			var list = fiber.dependencies;
			if (null !== list) {
				var nextFiber = fiber.child;
				list = list.firstContext;
				a: for (; null !== list;) {
					var dependency = list;
					list = fiber;
					for (var i = 0; i < contexts.length; i++) if (dependency.context === contexts[i]) {
						list.lanes |= renderLanes;
						dependency = list.alternate;
						null !== dependency && (dependency.lanes |= renderLanes);
						scheduleContextWorkOnParentPath(list.return, renderLanes, workInProgress);
						forcePropagateEntireTree || (nextFiber = null);
						break a;
					}
					list = dependency.next;
				}
			} else if (18 === fiber.tag) {
				nextFiber = fiber.return;
				if (null === nextFiber) throw Error(formatProdErrorMessage(341));
				nextFiber.lanes |= renderLanes;
				list = nextFiber.alternate;
				null !== list && (list.lanes |= renderLanes);
				scheduleContextWorkOnParentPath(nextFiber, renderLanes, workInProgress);
				nextFiber = null;
			} else nextFiber = fiber.child;
			if (null !== nextFiber) nextFiber.return = fiber;
			else for (nextFiber = fiber; null !== nextFiber;) {
				if (nextFiber === workInProgress) {
					nextFiber = null;
					break;
				}
				fiber = nextFiber.sibling;
				if (null !== fiber) {
					fiber.return = nextFiber.return;
					nextFiber = fiber;
					break;
				}
				nextFiber = nextFiber.return;
			}
			fiber = nextFiber;
		}
	}
	function propagateParentContextChanges(current, workInProgress, renderLanes, forcePropagateEntireTree) {
		current = null;
		for (var parent = workInProgress, isInsidePropagationBailout = !1; null !== parent;) {
			if (!isInsidePropagationBailout) {
				if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = !0;
				else if (0 !== (parent.flags & 262144)) break;
			}
			if (10 === parent.tag) {
				var currentParent = parent.alternate;
				if (null === currentParent) throw Error(formatProdErrorMessage(387));
				currentParent = currentParent.memoizedProps;
				if (null !== currentParent) {
					var context = parent.type;
					objectIs(parent.pendingProps.value, currentParent.value) || (null !== current ? current.push(context) : current = [context]);
				}
			} else if (parent === hostTransitionProviderCursor.current) {
				currentParent = parent.alternate;
				if (null === currentParent) throw Error(formatProdErrorMessage(387));
				currentParent.memoizedState.memoizedState !== parent.memoizedState.memoizedState && (null !== current ? current.push(HostTransitionContext) : current = [HostTransitionContext]);
			}
			parent = parent.return;
		}
		null !== current && propagateContextChanges(workInProgress, current, renderLanes, forcePropagateEntireTree);
		workInProgress.flags |= 262144;
	}
	function checkIfContextChanged(currentDependencies) {
		for (currentDependencies = currentDependencies.firstContext; null !== currentDependencies;) {
			if (!objectIs(currentDependencies.context._currentValue, currentDependencies.memoizedValue)) return !0;
			currentDependencies = currentDependencies.next;
		}
		return !1;
	}
	function prepareToReadContext(workInProgress) {
		currentlyRenderingFiber$1 = workInProgress;
		lastContextDependency = null;
		workInProgress = workInProgress.dependencies;
		null !== workInProgress && (workInProgress.firstContext = null);
	}
	function readContext(context) {
		return readContextForConsumer(currentlyRenderingFiber$1, context);
	}
	function readContextDuringReconciliation(consumer, context) {
		null === currentlyRenderingFiber$1 && prepareToReadContext(consumer);
		return readContextForConsumer(consumer, context);
	}
	function readContextForConsumer(consumer, context) {
		var value = context._currentValue;
		context = {
			context,
			memoizedValue: value,
			next: null
		};
		if (null === lastContextDependency) {
			if (null === consumer) throw Error(formatProdErrorMessage(308));
			lastContextDependency = context;
			consumer.dependencies = {
				lanes: 0,
				firstContext: context
			};
			consumer.flags |= 524288;
		} else lastContextDependency = lastContextDependency.next = context;
		return value;
	}
	var AbortControllerLocal = "undefined" !== typeof AbortController ? AbortController : function() {
		var listeners = [], signal = this.signal = {
			aborted: !1,
			addEventListener: function(type, listener) {
				listeners.push(listener);
			}
		};
		this.abort = function() {
			signal.aborted = !0;
			listeners.forEach(function(listener) {
				return listener();
			});
		};
	};
	var scheduleCallback$2 = Scheduler.unstable_scheduleCallback;
	var NormalPriority = Scheduler.unstable_NormalPriority;
	var CacheContext = {
		$$typeof: REACT_CONTEXT_TYPE,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function createCache() {
		return {
			controller: new AbortControllerLocal(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function releaseCache(cache) {
		cache.refCount--;
		0 === cache.refCount && scheduleCallback$2(NormalPriority, function() {
			cache.controller.abort();
		});
	}
	var currentEntangledListeners = null;
	var currentEntangledPendingCount = 0;
	var currentEntangledLane = 0;
	var currentEntangledActionThenable = null;
	function entangleAsyncAction(transition, thenable) {
		if (null === currentEntangledListeners) {
			var entangledListeners = currentEntangledListeners = [];
			currentEntangledPendingCount = 0;
			currentEntangledLane = requestTransitionLane();
			currentEntangledActionThenable = {
				status: "pending",
				value: void 0,
				then: function(resolve) {
					entangledListeners.push(resolve);
				}
			};
		}
		currentEntangledPendingCount++;
		thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
		return thenable;
	}
	function pingEngtangledActionScope() {
		if (0 === --currentEntangledPendingCount && null !== currentEntangledListeners) {
			null !== currentEntangledActionThenable && (currentEntangledActionThenable.status = "fulfilled");
			var listeners = currentEntangledListeners;
			currentEntangledListeners = null;
			currentEntangledLane = 0;
			currentEntangledActionThenable = null;
			for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
		}
	}
	function chainThenableValue(thenable, result) {
		var listeners = [], thenableWithOverride = {
			status: "pending",
			value: null,
			reason: null,
			then: function(resolve) {
				listeners.push(resolve);
			}
		};
		thenable.then(function() {
			thenableWithOverride.status = "fulfilled";
			thenableWithOverride.value = result;
			for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
		}, function(error) {
			thenableWithOverride.status = "rejected";
			thenableWithOverride.reason = error;
			for (error = 0; error < listeners.length; error++) (0, listeners[error])(void 0);
		});
		return thenableWithOverride;
	}
	var prevOnStartTransitionFinish = ReactSharedInternals.S;
	ReactSharedInternals.S = function(transition, returnValue) {
		globalMostRecentTransitionTime = now();
		"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && entangleAsyncAction(transition, returnValue);
		null !== prevOnStartTransitionFinish && prevOnStartTransitionFinish(transition, returnValue);
	};
	var resumedCache = createCursor(null);
	function peekCacheFromPool() {
		var cacheResumedFromPreviousRender = resumedCache.current;
		return null !== cacheResumedFromPreviousRender ? cacheResumedFromPreviousRender : workInProgressRoot.pooledCache;
	}
	function pushTransition(offscreenWorkInProgress, prevCachePool) {
		null === prevCachePool ? push(resumedCache, resumedCache.current) : push(resumedCache, prevCachePool.pool);
	}
	function getSuspendedCache() {
		var cacheFromPool = peekCacheFromPool();
		return null === cacheFromPool ? null : {
			parent: CacheContext._currentValue,
			pool: cacheFromPool
		};
	}
	var SuspenseException = Error(formatProdErrorMessage(460));
	var SuspenseyCommitException = Error(formatProdErrorMessage(474));
	var SuspenseActionException = Error(formatProdErrorMessage(542));
	var noopSuspenseyCommitThenable = { then: function() {} };
	function isThenableResolved(thenable) {
		thenable = thenable.status;
		return "fulfilled" === thenable || "rejected" === thenable;
	}
	function trackUsedThenable(thenableState, thenable, index) {
		index = thenableState[index];
		void 0 === index ? thenableState.push(thenable) : index !== thenable && (thenable.then(noop$1, noop$1), thenable = index);
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenableState = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState), thenableState;
			default:
				if ("string" === typeof thenable.status) thenable.then(noop$1, noop$1);
				else {
					thenableState = workInProgressRoot;
					if (null !== thenableState && 100 < thenableState.shellSuspendCounter) throw Error(formatProdErrorMessage(482));
					thenableState = thenable;
					thenableState.status = "pending";
					thenableState.then(function(fulfilledValue) {
						if ("pending" === thenable.status) {
							var fulfilledThenable = thenable;
							fulfilledThenable.status = "fulfilled";
							fulfilledThenable.value = fulfilledValue;
						}
					}, function(error) {
						if ("pending" === thenable.status) {
							var rejectedThenable = thenable;
							rejectedThenable.status = "rejected";
							rejectedThenable.reason = error;
						}
					});
				}
				switch (thenable.status) {
					case "fulfilled": return thenable.value;
					case "rejected": throw thenableState = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState), thenableState;
				}
				suspendedThenable = thenable;
				throw SuspenseException;
		}
	}
	function resolveLazy(lazyType) {
		try {
			var init = lazyType._init;
			return init(lazyType._payload);
		} catch (x) {
			if (null !== x && "object" === typeof x && "function" === typeof x.then) throw suspendedThenable = x, SuspenseException;
			throw x;
		}
	}
	var suspendedThenable = null;
	function getSuspendedThenable() {
		if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
		var thenable = suspendedThenable;
		suspendedThenable = null;
		return thenable;
	}
	function checkIfUseWrappedInAsyncCatch(rejectedReason) {
		if (rejectedReason === SuspenseException || rejectedReason === SuspenseActionException) throw Error(formatProdErrorMessage(483));
	}
	var thenableState$1 = null;
	var thenableIndexCounter$1 = 0;
	function unwrapThenable(thenable) {
		var index = thenableIndexCounter$1;
		thenableIndexCounter$1 += 1;
		null === thenableState$1 && (thenableState$1 = []);
		return trackUsedThenable(thenableState$1, thenable, index);
	}
	function coerceRef(workInProgress, element) {
		element = element.props.ref;
		workInProgress.ref = void 0 !== element ? element : null;
	}
	function throwOnInvalidObjectTypeImpl(returnFiber, newChild) {
		if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE) throw Error(formatProdErrorMessage(525));
		returnFiber = Object.prototype.toString.call(newChild);
		throw Error(formatProdErrorMessage(31, "[object Object]" === returnFiber ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : returnFiber));
	}
	function createChildReconciler(shouldTrackSideEffects) {
		function deleteChild(returnFiber, childToDelete) {
			if (shouldTrackSideEffects) {
				var deletions = returnFiber.deletions;
				null === deletions ? (returnFiber.deletions = [childToDelete], returnFiber.flags |= 16) : deletions.push(childToDelete);
			}
		}
		function deleteRemainingChildren(returnFiber, currentFirstChild) {
			if (!shouldTrackSideEffects) return null;
			for (; null !== currentFirstChild;) deleteChild(returnFiber, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
			return null;
		}
		function mapRemainingChildren(currentFirstChild) {
			for (var existingChildren = /* @__PURE__ */ new Map(); null !== currentFirstChild;) null !== currentFirstChild.key ? existingChildren.set(currentFirstChild.key, currentFirstChild) : existingChildren.set(currentFirstChild.index, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
			return existingChildren;
		}
		function useFiber(fiber, pendingProps) {
			fiber = createWorkInProgress(fiber, pendingProps);
			fiber.index = 0;
			fiber.sibling = null;
			return fiber;
		}
		function placeChild(newFiber, lastPlacedIndex, newIndex) {
			newFiber.index = newIndex;
			if (!shouldTrackSideEffects) return newFiber.flags |= 1048576, lastPlacedIndex;
			newIndex = newFiber.alternate;
			if (null !== newIndex) return newIndex = newIndex.index, newIndex < lastPlacedIndex ? (newFiber.flags |= 67108866, lastPlacedIndex) : newIndex;
			newFiber.flags |= 67108866;
			return lastPlacedIndex;
		}
		function placeSingleChild(newFiber) {
			shouldTrackSideEffects && null === newFiber.alternate && (newFiber.flags |= 67108866);
			return newFiber;
		}
		function updateTextNode(returnFiber, current, textContent, lanes) {
			if (null === current || 6 !== current.tag) return current = createFiberFromText(textContent, returnFiber.mode, lanes), current.return = returnFiber, current;
			current = useFiber(current, textContent);
			current.return = returnFiber;
			return current;
		}
		function updateElement(returnFiber, current, element, lanes) {
			var elementType = element.type;
			if (elementType === REACT_FRAGMENT_TYPE) return updateFragment(returnFiber, current, element.props.children, lanes, element.key);
			if (null !== current && (current.elementType === elementType || "object" === typeof elementType && null !== elementType && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === current.type)) return current = useFiber(current, element.props), coerceRef(current, element), current.return = returnFiber, current;
			current = createFiberFromTypeAndProps(element.type, element.key, element.props, null, returnFiber.mode, lanes);
			coerceRef(current, element);
			current.return = returnFiber;
			return current;
		}
		function updatePortal(returnFiber, current, portal, lanes) {
			if (null === current || 4 !== current.tag || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation) return current = createFiberFromPortal(portal, returnFiber.mode, lanes), current.return = returnFiber, current;
			current = useFiber(current, portal.children || []);
			current.return = returnFiber;
			return current;
		}
		function updateFragment(returnFiber, current, fragment, lanes, key) {
			if (null === current || 7 !== current.tag) return current = createFiberFromFragment(fragment, returnFiber.mode, lanes, key), current.return = returnFiber, current;
			current = useFiber(current, fragment);
			current.return = returnFiber;
			return current;
		}
		function createChild(returnFiber, newChild, lanes) {
			if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild) return newChild = createFiberFromText("" + newChild, returnFiber.mode, lanes), newChild.return = returnFiber, newChild;
			if ("object" === typeof newChild && null !== newChild) {
				switch (newChild.$$typeof) {
					case REACT_ELEMENT_TYPE: return lanes = createFiberFromTypeAndProps(newChild.type, newChild.key, newChild.props, null, returnFiber.mode, lanes), coerceRef(lanes, newChild), lanes.return = returnFiber, lanes;
					case REACT_PORTAL_TYPE: return newChild = createFiberFromPortal(newChild, returnFiber.mode, lanes), newChild.return = returnFiber, newChild;
					case REACT_LAZY_TYPE: return newChild = resolveLazy(newChild), createChild(returnFiber, newChild, lanes);
				}
				if (isArrayImpl(newChild) || getIteratorFn(newChild)) return newChild = createFiberFromFragment(newChild, returnFiber.mode, lanes, null), newChild.return = returnFiber, newChild;
				if ("function" === typeof newChild.then) return createChild(returnFiber, unwrapThenable(newChild), lanes);
				if (newChild.$$typeof === REACT_CONTEXT_TYPE) return createChild(returnFiber, readContextDuringReconciliation(returnFiber, newChild), lanes);
				throwOnInvalidObjectTypeImpl(returnFiber, newChild);
			}
			return null;
		}
		function updateSlot(returnFiber, oldFiber, newChild, lanes) {
			var key = null !== oldFiber ? oldFiber.key : null;
			if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild) return null !== key ? null : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
			if ("object" === typeof newChild && null !== newChild) {
				switch (newChild.$$typeof) {
					case REACT_ELEMENT_TYPE: return newChild.key === key ? updateElement(returnFiber, oldFiber, newChild, lanes) : null;
					case REACT_PORTAL_TYPE: return newChild.key === key ? updatePortal(returnFiber, oldFiber, newChild, lanes) : null;
					case REACT_LAZY_TYPE: return newChild = resolveLazy(newChild), updateSlot(returnFiber, oldFiber, newChild, lanes);
				}
				if (isArrayImpl(newChild) || getIteratorFn(newChild)) return null !== key ? null : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
				if ("function" === typeof newChild.then) return updateSlot(returnFiber, oldFiber, unwrapThenable(newChild), lanes);
				if (newChild.$$typeof === REACT_CONTEXT_TYPE) return updateSlot(returnFiber, oldFiber, readContextDuringReconciliation(returnFiber, newChild), lanes);
				throwOnInvalidObjectTypeImpl(returnFiber, newChild);
			}
			return null;
		}
		function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
			if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild) return existingChildren = existingChildren.get(newIdx) || null, updateTextNode(returnFiber, existingChildren, "" + newChild, lanes);
			if ("object" === typeof newChild && null !== newChild) {
				switch (newChild.$$typeof) {
					case REACT_ELEMENT_TYPE: return existingChildren = existingChildren.get(null === newChild.key ? newIdx : newChild.key) || null, updateElement(returnFiber, existingChildren, newChild, lanes);
					case REACT_PORTAL_TYPE: return existingChildren = existingChildren.get(null === newChild.key ? newIdx : newChild.key) || null, updatePortal(returnFiber, existingChildren, newChild, lanes);
					case REACT_LAZY_TYPE: return newChild = resolveLazy(newChild), updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes);
				}
				if (isArrayImpl(newChild) || getIteratorFn(newChild)) return existingChildren = existingChildren.get(newIdx) || null, updateFragment(returnFiber, existingChildren, newChild, lanes, null);
				if ("function" === typeof newChild.then) return updateFromMap(existingChildren, returnFiber, newIdx, unwrapThenable(newChild), lanes);
				if (newChild.$$typeof === REACT_CONTEXT_TYPE) return updateFromMap(existingChildren, returnFiber, newIdx, readContextDuringReconciliation(returnFiber, newChild), lanes);
				throwOnInvalidObjectTypeImpl(returnFiber, newChild);
			}
			return null;
		}
		function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
			for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null; null !== oldFiber && newIdx < newChildren.length; newIdx++) {
				oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
				var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], lanes);
				if (null === newFiber) {
					null === oldFiber && (oldFiber = nextOldFiber);
					break;
				}
				shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
				currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
				null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
				previousNewFiber = newFiber;
				oldFiber = nextOldFiber;
			}
			if (newIdx === newChildren.length) return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
			if (null === oldFiber) {
				for (; newIdx < newChildren.length; newIdx++) oldFiber = createChild(returnFiber, newChildren[newIdx], lanes), null !== oldFiber && (currentFirstChild = placeChild(oldFiber, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = oldFiber : previousNewFiber.sibling = oldFiber, previousNewFiber = oldFiber);
				isHydrating && pushTreeFork(returnFiber, newIdx);
				return resultingFirstChild;
			}
			for (oldFiber = mapRemainingChildren(oldFiber); newIdx < newChildren.length; newIdx++) nextOldFiber = updateFromMap(oldFiber, returnFiber, newIdx, newChildren[newIdx], lanes), null !== nextOldFiber && (shouldTrackSideEffects && null !== nextOldFiber.alternate && oldFiber.delete(null === nextOldFiber.key ? newIdx : nextOldFiber.key), currentFirstChild = placeChild(nextOldFiber, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = nextOldFiber : previousNewFiber.sibling = nextOldFiber, previousNewFiber = nextOldFiber);
			shouldTrackSideEffects && oldFiber.forEach(function(child) {
				return deleteChild(returnFiber, child);
			});
			isHydrating && pushTreeFork(returnFiber, newIdx);
			return resultingFirstChild;
		}
		function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildren, lanes) {
			if (null == newChildren) throw Error(formatProdErrorMessage(151));
			for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null, step = newChildren.next(); null !== oldFiber && !step.done; newIdx++, step = newChildren.next()) {
				oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
				var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
				if (null === newFiber) {
					null === oldFiber && (oldFiber = nextOldFiber);
					break;
				}
				shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
				currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
				null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
				previousNewFiber = newFiber;
				oldFiber = nextOldFiber;
			}
			if (step.done) return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
			if (null === oldFiber) {
				for (; !step.done; newIdx++, step = newChildren.next()) step = createChild(returnFiber, step.value, lanes), null !== step && (currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
				isHydrating && pushTreeFork(returnFiber, newIdx);
				return resultingFirstChild;
			}
			for (oldFiber = mapRemainingChildren(oldFiber); !step.done; newIdx++, step = newChildren.next()) step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes), null !== step && (shouldTrackSideEffects && null !== step.alternate && oldFiber.delete(null === step.key ? newIdx : step.key), currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
			shouldTrackSideEffects && oldFiber.forEach(function(child) {
				return deleteChild(returnFiber, child);
			});
			isHydrating && pushTreeFork(returnFiber, newIdx);
			return resultingFirstChild;
		}
		function reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes) {
			"object" === typeof newChild && null !== newChild && newChild.type === REACT_FRAGMENT_TYPE && null === newChild.key && (newChild = newChild.props.children);
			if ("object" === typeof newChild && null !== newChild) {
				switch (newChild.$$typeof) {
					case REACT_ELEMENT_TYPE:
						a: {
							for (var key = newChild.key; null !== currentFirstChild;) {
								if (currentFirstChild.key === key) {
									key = newChild.type;
									if (key === REACT_FRAGMENT_TYPE) {
										if (7 === currentFirstChild.tag) {
											deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
											lanes = useFiber(currentFirstChild, newChild.props.children);
											lanes.return = returnFiber;
											returnFiber = lanes;
											break a;
										}
									} else if (currentFirstChild.elementType === key || "object" === typeof key && null !== key && key.$$typeof === REACT_LAZY_TYPE && resolveLazy(key) === currentFirstChild.type) {
										deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
										lanes = useFiber(currentFirstChild, newChild.props);
										coerceRef(lanes, newChild);
										lanes.return = returnFiber;
										returnFiber = lanes;
										break a;
									}
									deleteRemainingChildren(returnFiber, currentFirstChild);
									break;
								} else deleteChild(returnFiber, currentFirstChild);
								currentFirstChild = currentFirstChild.sibling;
							}
							newChild.type === REACT_FRAGMENT_TYPE ? (lanes = createFiberFromFragment(newChild.props.children, returnFiber.mode, lanes, newChild.key), lanes.return = returnFiber, returnFiber = lanes) : (lanes = createFiberFromTypeAndProps(newChild.type, newChild.key, newChild.props, null, returnFiber.mode, lanes), coerceRef(lanes, newChild), lanes.return = returnFiber, returnFiber = lanes);
						}
						return placeSingleChild(returnFiber);
					case REACT_PORTAL_TYPE:
						a: {
							for (key = newChild.key; null !== currentFirstChild;) {
								if (currentFirstChild.key === key) if (4 === currentFirstChild.tag && currentFirstChild.stateNode.containerInfo === newChild.containerInfo && currentFirstChild.stateNode.implementation === newChild.implementation) {
									deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
									lanes = useFiber(currentFirstChild, newChild.children || []);
									lanes.return = returnFiber;
									returnFiber = lanes;
									break a;
								} else {
									deleteRemainingChildren(returnFiber, currentFirstChild);
									break;
								}
								else deleteChild(returnFiber, currentFirstChild);
								currentFirstChild = currentFirstChild.sibling;
							}
							lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
							lanes.return = returnFiber;
							returnFiber = lanes;
						}
						return placeSingleChild(returnFiber);
					case REACT_LAZY_TYPE: return newChild = resolveLazy(newChild), reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes);
				}
				if (isArrayImpl(newChild)) return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, lanes);
				if (getIteratorFn(newChild)) {
					key = getIteratorFn(newChild);
					if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
					newChild = key.call(newChild);
					return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, lanes);
				}
				if ("function" === typeof newChild.then) return reconcileChildFibersImpl(returnFiber, currentFirstChild, unwrapThenable(newChild), lanes);
				if (newChild.$$typeof === REACT_CONTEXT_TYPE) return reconcileChildFibersImpl(returnFiber, currentFirstChild, readContextDuringReconciliation(returnFiber, newChild), lanes);
				throwOnInvalidObjectTypeImpl(returnFiber, newChild);
			}
			return "string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild ? (newChild = "" + newChild, null !== currentFirstChild && 6 === currentFirstChild.tag ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling), lanes = useFiber(currentFirstChild, newChild), lanes.return = returnFiber, returnFiber = lanes) : (deleteRemainingChildren(returnFiber, currentFirstChild), lanes = createFiberFromText(newChild, returnFiber.mode, lanes), lanes.return = returnFiber, returnFiber = lanes), placeSingleChild(returnFiber)) : deleteRemainingChildren(returnFiber, currentFirstChild);
		}
		return function(returnFiber, currentFirstChild, newChild, lanes) {
			try {
				thenableIndexCounter$1 = 0;
				var firstChildFiber = reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes);
				thenableState$1 = null;
				return firstChildFiber;
			} catch (x) {
				if (x === SuspenseException || x === SuspenseActionException) throw x;
				var fiber = createFiberImplClass(29, x, null, returnFiber.mode);
				fiber.lanes = lanes;
				fiber.return = returnFiber;
				return fiber;
			}
		};
	}
	var reconcileChildFibers = createChildReconciler(!0);
	var mountChildFibers = createChildReconciler(!1);
	var hasForceUpdate = !1;
	function initializeUpdateQueue(fiber) {
		fiber.updateQueue = {
			baseState: fiber.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function cloneUpdateQueue(current, workInProgress) {
		current = current.updateQueue;
		workInProgress.updateQueue === current && (workInProgress.updateQueue = {
			baseState: current.baseState,
			firstBaseUpdate: current.firstBaseUpdate,
			lastBaseUpdate: current.lastBaseUpdate,
			shared: current.shared,
			callbacks: null
		});
	}
	function createUpdate(lane) {
		return {
			lane,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function enqueueUpdate(fiber, update, lane) {
		var updateQueue = fiber.updateQueue;
		if (null === updateQueue) return null;
		updateQueue = updateQueue.shared;
		if (0 !== (executionContext & 2)) {
			var pending = updateQueue.pending;
			null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
			updateQueue.pending = update;
			update = getRootForUpdatedFiber(fiber);
			markUpdateLaneFromFiberToRoot(fiber, null, lane);
			return update;
		}
		enqueueUpdate$1(fiber, updateQueue, update, lane);
		return getRootForUpdatedFiber(fiber);
	}
	function entangleTransitions(root, fiber, lane) {
		fiber = fiber.updateQueue;
		if (null !== fiber && (fiber = fiber.shared, 0 !== (lane & 4194048))) {
			var queueLanes = fiber.lanes;
			queueLanes &= root.pendingLanes;
			lane |= queueLanes;
			fiber.lanes = lane;
			markRootEntangled(root, lane);
		}
	}
	function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
		var queue = workInProgress.updateQueue, current = workInProgress.alternate;
		if (null !== current && (current = current.updateQueue, queue === current)) {
			var newFirst = null, newLast = null;
			queue = queue.firstBaseUpdate;
			if (null !== queue) {
				do {
					var clone = {
						lane: queue.lane,
						tag: queue.tag,
						payload: queue.payload,
						callback: null,
						next: null
					};
					null === newLast ? newFirst = newLast = clone : newLast = newLast.next = clone;
					queue = queue.next;
				} while (null !== queue);
				null === newLast ? newFirst = newLast = capturedUpdate : newLast = newLast.next = capturedUpdate;
			} else newFirst = newLast = capturedUpdate;
			queue = {
				baseState: current.baseState,
				firstBaseUpdate: newFirst,
				lastBaseUpdate: newLast,
				shared: current.shared,
				callbacks: current.callbacks
			};
			workInProgress.updateQueue = queue;
			return;
		}
		workInProgress = queue.lastBaseUpdate;
		null === workInProgress ? queue.firstBaseUpdate = capturedUpdate : workInProgress.next = capturedUpdate;
		queue.lastBaseUpdate = capturedUpdate;
	}
	var didReadFromEntangledAsyncAction = !1;
	function suspendIfUpdateReadFromEntangledAsyncAction() {
		if (didReadFromEntangledAsyncAction) {
			var entangledActionThenable = currentEntangledActionThenable;
			if (null !== entangledActionThenable) throw entangledActionThenable;
		}
	}
	function processUpdateQueue(workInProgress$jscomp$0, props, instance$jscomp$0, renderLanes) {
		didReadFromEntangledAsyncAction = !1;
		var queue = workInProgress$jscomp$0.updateQueue;
		hasForceUpdate = !1;
		var firstBaseUpdate = queue.firstBaseUpdate, lastBaseUpdate = queue.lastBaseUpdate, pendingQueue = queue.shared.pending;
		if (null !== pendingQueue) {
			queue.shared.pending = null;
			var lastPendingUpdate = pendingQueue, firstPendingUpdate = lastPendingUpdate.next;
			lastPendingUpdate.next = null;
			null === lastBaseUpdate ? firstBaseUpdate = firstPendingUpdate : lastBaseUpdate.next = firstPendingUpdate;
			lastBaseUpdate = lastPendingUpdate;
			var current = workInProgress$jscomp$0.alternate;
			null !== current && (current = current.updateQueue, pendingQueue = current.lastBaseUpdate, pendingQueue !== lastBaseUpdate && (null === pendingQueue ? current.firstBaseUpdate = firstPendingUpdate : pendingQueue.next = firstPendingUpdate, current.lastBaseUpdate = lastPendingUpdate));
		}
		if (null !== firstBaseUpdate) {
			var newState = queue.baseState;
			lastBaseUpdate = 0;
			current = firstPendingUpdate = lastPendingUpdate = null;
			pendingQueue = firstBaseUpdate;
			do {
				var updateLane = pendingQueue.lane & -536870913, isHiddenUpdate = updateLane !== pendingQueue.lane;
				if (isHiddenUpdate ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes & updateLane) === updateLane) {
					0 !== updateLane && updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction = !0);
					null !== current && (current = current.next = {
						lane: 0,
						tag: pendingQueue.tag,
						payload: pendingQueue.payload,
						callback: null,
						next: null
					});
					a: {
						var workInProgress = workInProgress$jscomp$0, update = pendingQueue;
						updateLane = props;
						var instance = instance$jscomp$0;
						switch (update.tag) {
							case 1:
								workInProgress = update.payload;
								if ("function" === typeof workInProgress) {
									newState = workInProgress.call(instance, newState, updateLane);
									break a;
								}
								newState = workInProgress;
								break a;
							case 3: workInProgress.flags = workInProgress.flags & -65537 | 128;
							case 0:
								workInProgress = update.payload;
								updateLane = "function" === typeof workInProgress ? workInProgress.call(instance, newState, updateLane) : workInProgress;
								if (null === updateLane || void 0 === updateLane) break a;
								newState = assign({}, newState, updateLane);
								break a;
							case 2: hasForceUpdate = !0;
						}
					}
					updateLane = pendingQueue.callback;
					null !== updateLane && (workInProgress$jscomp$0.flags |= 64, isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192), isHiddenUpdate = queue.callbacks, null === isHiddenUpdate ? queue.callbacks = [updateLane] : isHiddenUpdate.push(updateLane));
				} else isHiddenUpdate = {
					lane: updateLane,
					tag: pendingQueue.tag,
					payload: pendingQueue.payload,
					callback: pendingQueue.callback,
					next: null
				}, null === current ? (firstPendingUpdate = current = isHiddenUpdate, lastPendingUpdate = newState) : current = current.next = isHiddenUpdate, lastBaseUpdate |= updateLane;
				pendingQueue = pendingQueue.next;
				if (null === pendingQueue) if (pendingQueue = queue.shared.pending, null === pendingQueue) break;
				else isHiddenUpdate = pendingQueue, pendingQueue = isHiddenUpdate.next, isHiddenUpdate.next = null, queue.lastBaseUpdate = isHiddenUpdate, queue.shared.pending = null;
			} while (1);
			null === current && (lastPendingUpdate = newState);
			queue.baseState = lastPendingUpdate;
			queue.firstBaseUpdate = firstPendingUpdate;
			queue.lastBaseUpdate = current;
			null === firstBaseUpdate && (queue.shared.lanes = 0);
			workInProgressRootSkippedLanes |= lastBaseUpdate;
			workInProgress$jscomp$0.lanes = lastBaseUpdate;
			workInProgress$jscomp$0.memoizedState = newState;
		}
	}
	function callCallback(callback, context) {
		if ("function" !== typeof callback) throw Error(formatProdErrorMessage(191, callback));
		callback.call(context);
	}
	function commitCallbacks(updateQueue, context) {
		var callbacks = updateQueue.callbacks;
		if (null !== callbacks) for (updateQueue.callbacks = null, updateQueue = 0; updateQueue < callbacks.length; updateQueue++) callCallback(callbacks[updateQueue], context);
	}
	var currentTreeHiddenStackCursor = createCursor(null);
	var prevEntangledRenderLanesCursor = createCursor(0);
	function pushHiddenContext(fiber, context) {
		fiber = entangledRenderLanes;
		push(prevEntangledRenderLanesCursor, fiber);
		push(currentTreeHiddenStackCursor, context);
		entangledRenderLanes = fiber | context.baseLanes;
	}
	function reuseHiddenContextOnStack() {
		push(prevEntangledRenderLanesCursor, entangledRenderLanes);
		push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
	}
	function popHiddenContext() {
		entangledRenderLanes = prevEntangledRenderLanesCursor.current;
		pop(currentTreeHiddenStackCursor);
		pop(prevEntangledRenderLanesCursor);
	}
	var suspenseHandlerStackCursor = createCursor(null);
	var shellBoundary = null;
	function pushPrimaryTreeSuspenseHandler(handler) {
		var current = handler.alternate;
		push(suspenseStackCursor, suspenseStackCursor.current & 1);
		push(suspenseHandlerStackCursor, handler);
		null === shellBoundary && (null === current || null !== currentTreeHiddenStackCursor.current ? shellBoundary = handler : null !== current.memoizedState && (shellBoundary = handler));
	}
	function pushDehydratedActivitySuspenseHandler(fiber) {
		push(suspenseStackCursor, suspenseStackCursor.current);
		push(suspenseHandlerStackCursor, fiber);
		null === shellBoundary && (shellBoundary = fiber);
	}
	function pushOffscreenSuspenseHandler(fiber) {
		22 === fiber.tag ? (push(suspenseStackCursor, suspenseStackCursor.current), push(suspenseHandlerStackCursor, fiber), null === shellBoundary && (shellBoundary = fiber)) : reuseSuspenseHandlerOnStack(fiber);
	}
	function reuseSuspenseHandlerOnStack() {
		push(suspenseStackCursor, suspenseStackCursor.current);
		push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
	}
	function popSuspenseHandler(fiber) {
		pop(suspenseHandlerStackCursor);
		shellBoundary === fiber && (shellBoundary = null);
		pop(suspenseStackCursor);
	}
	var suspenseStackCursor = createCursor(0);
	function findFirstSuspended(row) {
		for (var node = row; null !== node;) {
			if (13 === node.tag) {
				var state = node.memoizedState;
				if (null !== state && (state = state.dehydrated, null === state || isSuspenseInstancePending(state) || isSuspenseInstanceFallback(state))) return node;
			} else if (19 === node.tag && ("forwards" === node.memoizedProps.revealOrder || "backwards" === node.memoizedProps.revealOrder || "unstable_legacy-backwards" === node.memoizedProps.revealOrder || "together" === node.memoizedProps.revealOrder)) {
				if (0 !== (node.flags & 128)) return node;
			} else if (null !== node.child) {
				node.child.return = node;
				node = node.child;
				continue;
			}
			if (node === row) break;
			for (; null === node.sibling;) {
				if (null === node.return || node.return === row) return null;
				node = node.return;
			}
			node.sibling.return = node.return;
			node = node.sibling;
		}
		return null;
	}
	var renderLanes = 0;
	var currentlyRenderingFiber = null;
	var currentHook = null;
	var workInProgressHook = null;
	var didScheduleRenderPhaseUpdate = !1;
	var didScheduleRenderPhaseUpdateDuringThisPass = !1;
	var shouldDoubleInvokeUserFnsInHooksDEV = !1;
	var localIdCounter = 0;
	var thenableIndexCounter = 0;
	var thenableState = null;
	var globalClientIdCounter = 0;
	function throwInvalidHookError() {
		throw Error(formatProdErrorMessage(321));
	}
	function areHookInputsEqual(nextDeps, prevDeps) {
		if (null === prevDeps) return !1;
		for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) if (!objectIs(nextDeps[i], prevDeps[i])) return !1;
		return !0;
	}
	function renderWithHooks(current, workInProgress, Component, props, secondArg, nextRenderLanes) {
		renderLanes = nextRenderLanes;
		currentlyRenderingFiber = workInProgress;
		workInProgress.memoizedState = null;
		workInProgress.updateQueue = null;
		workInProgress.lanes = 0;
		ReactSharedInternals.H = null === current || null === current.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate;
		shouldDoubleInvokeUserFnsInHooksDEV = !1;
		nextRenderLanes = Component(props, secondArg);
		shouldDoubleInvokeUserFnsInHooksDEV = !1;
		didScheduleRenderPhaseUpdateDuringThisPass && (nextRenderLanes = renderWithHooksAgain(workInProgress, Component, props, secondArg));
		finishRenderingHooks(current);
		return nextRenderLanes;
	}
	function finishRenderingHooks(current) {
		ReactSharedInternals.H = ContextOnlyDispatcher;
		var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
		renderLanes = 0;
		workInProgressHook = currentHook = currentlyRenderingFiber = null;
		didScheduleRenderPhaseUpdate = !1;
		thenableIndexCounter = 0;
		thenableState = null;
		if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
		null === current || didReceiveUpdate || (current = current.dependencies, null !== current && checkIfContextChanged(current) && (didReceiveUpdate = !0));
	}
	function renderWithHooksAgain(workInProgress, Component, props, secondArg) {
		currentlyRenderingFiber = workInProgress;
		var numberOfReRenders = 0;
		do {
			didScheduleRenderPhaseUpdateDuringThisPass && (thenableState = null);
			thenableIndexCounter = 0;
			didScheduleRenderPhaseUpdateDuringThisPass = !1;
			if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
			numberOfReRenders += 1;
			workInProgressHook = currentHook = null;
			if (null != workInProgress.updateQueue) {
				var children = workInProgress.updateQueue;
				children.lastEffect = null;
				children.events = null;
				children.stores = null;
				null != children.memoCache && (children.memoCache.index = 0);
			}
			ReactSharedInternals.H = HooksDispatcherOnRerender;
			children = Component(props, secondArg);
		} while (didScheduleRenderPhaseUpdateDuringThisPass);
		return children;
	}
	function TransitionAwareHostComponent() {
		var dispatcher = ReactSharedInternals.H, maybeThenable = dispatcher.useState()[0];
		maybeThenable = "function" === typeof maybeThenable.then ? useThenable(maybeThenable) : maybeThenable;
		dispatcher = dispatcher.useState()[0];
		(null !== currentHook ? currentHook.memoizedState : null) !== dispatcher && (currentlyRenderingFiber.flags |= 1024);
		return maybeThenable;
	}
	function checkDidRenderIdHook() {
		var didRenderIdHook = 0 !== localIdCounter;
		localIdCounter = 0;
		return didRenderIdHook;
	}
	function bailoutHooks(current, workInProgress, lanes) {
		workInProgress.updateQueue = current.updateQueue;
		workInProgress.flags &= -2053;
		current.lanes &= ~lanes;
	}
	function resetHooksOnUnwind(workInProgress) {
		if (didScheduleRenderPhaseUpdate) {
			for (workInProgress = workInProgress.memoizedState; null !== workInProgress;) {
				var queue = workInProgress.queue;
				null !== queue && (queue.pending = null);
				workInProgress = workInProgress.next;
			}
			didScheduleRenderPhaseUpdate = !1;
		}
		renderLanes = 0;
		workInProgressHook = currentHook = currentlyRenderingFiber = null;
		didScheduleRenderPhaseUpdateDuringThisPass = !1;
		thenableIndexCounter = localIdCounter = 0;
		thenableState = null;
	}
	function mountWorkInProgressHook() {
		var hook = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = hook : workInProgressHook = workInProgressHook.next = hook;
		return workInProgressHook;
	}
	function updateWorkInProgressHook() {
		if (null === currentHook) {
			var nextCurrentHook = currentlyRenderingFiber.alternate;
			nextCurrentHook = null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
		} else nextCurrentHook = currentHook.next;
		var nextWorkInProgressHook = null === workInProgressHook ? currentlyRenderingFiber.memoizedState : workInProgressHook.next;
		if (null !== nextWorkInProgressHook) workInProgressHook = nextWorkInProgressHook, currentHook = nextCurrentHook;
		else {
			if (null === nextCurrentHook) {
				if (null === currentlyRenderingFiber.alternate) throw Error(formatProdErrorMessage(467));
				throw Error(formatProdErrorMessage(310));
			}
			currentHook = nextCurrentHook;
			nextCurrentHook = {
				memoizedState: currentHook.memoizedState,
				baseState: currentHook.baseState,
				baseQueue: currentHook.baseQueue,
				queue: currentHook.queue,
				next: null
			};
			null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = nextCurrentHook : workInProgressHook = workInProgressHook.next = nextCurrentHook;
		}
		return workInProgressHook;
	}
	function createFunctionComponentUpdateQueue() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function useThenable(thenable) {
		var index = thenableIndexCounter;
		thenableIndexCounter += 1;
		null === thenableState && (thenableState = []);
		thenable = trackUsedThenable(thenableState, thenable, index);
		index = currentlyRenderingFiber;
		null === (null === workInProgressHook ? index.memoizedState : workInProgressHook.next) && (index = index.alternate, ReactSharedInternals.H = null === index || null === index.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate);
		return thenable;
	}
	function use(usable) {
		if (null !== usable && "object" === typeof usable) {
			if ("function" === typeof usable.then) return useThenable(usable);
			if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
		}
		throw Error(formatProdErrorMessage(438, String(usable)));
	}
	function useMemoCache(size) {
		var memoCache = null, updateQueue = currentlyRenderingFiber.updateQueue;
		null !== updateQueue && (memoCache = updateQueue.memoCache);
		if (null == memoCache) {
			var current = currentlyRenderingFiber.alternate;
			null !== current && (current = current.updateQueue, null !== current && (current = current.memoCache, null != current && (memoCache = {
				data: current.data.map(function(array) {
					return array.slice();
				}),
				index: 0
			})));
		}
		memoCache ??= {
			data: [],
			index: 0
		};
		null === updateQueue && (updateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = updateQueue);
		updateQueue.memoCache = memoCache;
		updateQueue = memoCache.data[memoCache.index];
		if (void 0 === updateQueue) for (updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0; current < size; current++) updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
		memoCache.index++;
		return updateQueue;
	}
	function basicStateReducer(state, action) {
		return "function" === typeof action ? action(state) : action;
	}
	function updateReducer(reducer) {
		return updateReducerImpl(updateWorkInProgressHook(), currentHook, reducer);
	}
	function updateReducerImpl(hook, current, reducer) {
		var queue = hook.queue;
		if (null === queue) throw Error(formatProdErrorMessage(311));
		queue.lastRenderedReducer = reducer;
		var baseQueue = hook.baseQueue, pendingQueue = queue.pending;
		if (null !== pendingQueue) {
			if (null !== baseQueue) {
				var baseFirst = baseQueue.next;
				baseQueue.next = pendingQueue.next;
				pendingQueue.next = baseFirst;
			}
			current.baseQueue = baseQueue = pendingQueue;
			queue.pending = null;
		}
		pendingQueue = hook.baseState;
		if (null === baseQueue) hook.memoizedState = pendingQueue;
		else {
			current = baseQueue.next;
			var newBaseQueueFirst = baseFirst = null, newBaseQueueLast = null, update = current, didReadFromEntangledAsyncAction$60 = !1;
			do {
				var updateLane = update.lane & -536870913;
				if (updateLane !== update.lane ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes & updateLane) === updateLane) {
					var revertLane = update.revertLane;
					if (0 === revertLane) null !== newBaseQueueLast && (newBaseQueueLast = newBaseQueueLast.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: update.action,
						hasEagerState: update.hasEagerState,
						eagerState: update.eagerState,
						next: null
					}), updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction$60 = !0);
					else if ((renderLanes & revertLane) === revertLane) {
						update = update.next;
						revertLane === currentEntangledLane && (didReadFromEntangledAsyncAction$60 = !0);
						continue;
					} else updateLane = {
						lane: 0,
						revertLane: update.revertLane,
						gesture: null,
						action: update.action,
						hasEagerState: update.hasEagerState,
						eagerState: update.eagerState,
						next: null
					}, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = updateLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = updateLane, currentlyRenderingFiber.lanes |= revertLane, workInProgressRootSkippedLanes |= revertLane;
					updateLane = update.action;
					shouldDoubleInvokeUserFnsInHooksDEV && reducer(pendingQueue, updateLane);
					pendingQueue = update.hasEagerState ? update.eagerState : reducer(pendingQueue, updateLane);
				} else revertLane = {
					lane: updateLane,
					revertLane: update.revertLane,
					gesture: update.gesture,
					action: update.action,
					hasEagerState: update.hasEagerState,
					eagerState: update.eagerState,
					next: null
				}, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = revertLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = revertLane, currentlyRenderingFiber.lanes |= updateLane, workInProgressRootSkippedLanes |= updateLane;
				update = update.next;
			} while (null !== update && update !== current);
			null === newBaseQueueLast ? baseFirst = pendingQueue : newBaseQueueLast.next = newBaseQueueFirst;
			if (!objectIs(pendingQueue, hook.memoizedState) && (didReceiveUpdate = !0, didReadFromEntangledAsyncAction$60 && (reducer = currentEntangledActionThenable, null !== reducer))) throw reducer;
			hook.memoizedState = pendingQueue;
			hook.baseState = baseFirst;
			hook.baseQueue = newBaseQueueLast;
			queue.lastRenderedState = pendingQueue;
		}
		null === baseQueue && (queue.lanes = 0);
		return [hook.memoizedState, queue.dispatch];
	}
	function rerenderReducer(reducer) {
		var hook = updateWorkInProgressHook(), queue = hook.queue;
		if (null === queue) throw Error(formatProdErrorMessage(311));
		queue.lastRenderedReducer = reducer;
		var dispatch = queue.dispatch, lastRenderPhaseUpdate = queue.pending, newState = hook.memoizedState;
		if (null !== lastRenderPhaseUpdate) {
			queue.pending = null;
			var update = lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
			do
				newState = reducer(newState, update.action), update = update.next;
			while (update !== lastRenderPhaseUpdate);
			objectIs(newState, hook.memoizedState) || (didReceiveUpdate = !0);
			hook.memoizedState = newState;
			null === hook.baseQueue && (hook.baseState = newState);
			queue.lastRenderedState = newState;
		}
		return [newState, dispatch];
	}
	function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
		var fiber = currentlyRenderingFiber, hook = updateWorkInProgressHook(), isHydrating$jscomp$0 = isHydrating;
		if (isHydrating$jscomp$0) {
			if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
			getServerSnapshot = getServerSnapshot();
		} else getServerSnapshot = getSnapshot();
		var snapshotChanged = !objectIs((currentHook || hook).memoizedState, getServerSnapshot);
		snapshotChanged && (hook.memoizedState = getServerSnapshot, didReceiveUpdate = !0);
		hook = hook.queue;
		updateEffect(subscribeToStore.bind(null, fiber, hook, subscribe), [subscribe]);
		if (hook.getSnapshot !== getSnapshot || snapshotChanged || null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1) {
			fiber.flags |= 2048;
			pushSimpleEffect(9, { destroy: void 0 }, updateStoreInstance.bind(null, fiber, hook, getServerSnapshot, getSnapshot), null);
			if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
			isHydrating$jscomp$0 || 0 !== (renderLanes & 127) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
		}
		return getServerSnapshot;
	}
	function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
		fiber.flags |= 16384;
		fiber = {
			getSnapshot,
			value: renderedSnapshot
		};
		getSnapshot = currentlyRenderingFiber.updateQueue;
		null === getSnapshot ? (getSnapshot = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = getSnapshot, getSnapshot.stores = [fiber]) : (renderedSnapshot = getSnapshot.stores, null === renderedSnapshot ? getSnapshot.stores = [fiber] : renderedSnapshot.push(fiber));
	}
	function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
		inst.value = nextSnapshot;
		inst.getSnapshot = getSnapshot;
		checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
	}
	function subscribeToStore(fiber, inst, subscribe) {
		return subscribe(function() {
			checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
		});
	}
	function checkIfSnapshotChanged(inst) {
		var latestGetSnapshot = inst.getSnapshot;
		inst = inst.value;
		try {
			var nextValue = latestGetSnapshot();
			return !objectIs(inst, nextValue);
		} catch (error) {
			return !0;
		}
	}
	function forceStoreRerender(fiber) {
		var root = enqueueConcurrentRenderForLane(fiber, 2);
		null !== root && scheduleUpdateOnFiber(root, fiber, 2);
	}
	function mountStateImpl(initialState) {
		var hook = mountWorkInProgressHook();
		if ("function" === typeof initialState) {
			var initialStateInitializer = initialState;
			initialState = initialStateInitializer();
			if (shouldDoubleInvokeUserFnsInHooksDEV) {
				setIsStrictModeForDevtools(!0);
				try {
					initialStateInitializer();
				} finally {
					setIsStrictModeForDevtools(!1);
				}
			}
		}
		hook.memoizedState = hook.baseState = initialState;
		hook.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: basicStateReducer,
			lastRenderedState: initialState
		};
		return hook;
	}
	function updateOptimisticImpl(hook, current, passthrough, reducer) {
		hook.baseState = passthrough;
		return updateReducerImpl(hook, currentHook, "function" === typeof reducer ? reducer : basicStateReducer);
	}
	function dispatchActionState(fiber, actionQueue, setPendingState, setState, payload) {
		if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
		fiber = actionQueue.action;
		if (null !== fiber) {
			var actionNode = {
				payload,
				action: fiber,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(listener) {
					actionNode.listeners.push(listener);
				}
			};
			null !== ReactSharedInternals.T ? setPendingState(!0) : actionNode.isTransition = !1;
			setState(actionNode);
			setPendingState = actionQueue.pending;
			null === setPendingState ? (actionNode.next = actionQueue.pending = actionNode, runActionStateAction(actionQueue, actionNode)) : (actionNode.next = setPendingState.next, actionQueue.pending = setPendingState.next = actionNode);
		}
	}
	function runActionStateAction(actionQueue, node) {
		var action = node.action, payload = node.payload, prevState = actionQueue.state;
		if (node.isTransition) {
			var prevTransition = ReactSharedInternals.T, currentTransition = {};
			ReactSharedInternals.T = currentTransition;
			try {
				var returnValue = action(prevState, payload), onStartTransitionFinish = ReactSharedInternals.S;
				null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
				handleActionReturnValue(actionQueue, node, returnValue);
			} catch (error) {
				onActionError(actionQueue, node, error);
			} finally {
				null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
			}
		} else try {
			prevTransition = action(prevState, payload), handleActionReturnValue(actionQueue, node, prevTransition);
		} catch (error$66) {
			onActionError(actionQueue, node, error$66);
		}
	}
	function handleActionReturnValue(actionQueue, node, returnValue) {
		null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then ? returnValue.then(function(nextState) {
			onActionSuccess(actionQueue, node, nextState);
		}, function(error) {
			return onActionError(actionQueue, node, error);
		}) : onActionSuccess(actionQueue, node, returnValue);
	}
	function onActionSuccess(actionQueue, actionNode, nextState) {
		actionNode.status = "fulfilled";
		actionNode.value = nextState;
		notifyActionListeners(actionNode);
		actionQueue.state = nextState;
		actionNode = actionQueue.pending;
		null !== actionNode && (nextState = actionNode.next, nextState === actionNode ? actionQueue.pending = null : (nextState = nextState.next, actionNode.next = nextState, runActionStateAction(actionQueue, nextState)));
	}
	function onActionError(actionQueue, actionNode, error) {
		var last = actionQueue.pending;
		actionQueue.pending = null;
		if (null !== last) {
			last = last.next;
			do
				actionNode.status = "rejected", actionNode.reason = error, notifyActionListeners(actionNode), actionNode = actionNode.next;
			while (actionNode !== last);
		}
		actionQueue.action = null;
	}
	function notifyActionListeners(actionNode) {
		actionNode = actionNode.listeners;
		for (var i = 0; i < actionNode.length; i++) (0, actionNode[i])();
	}
	function actionStateReducer(oldState, newState) {
		return newState;
	}
	function mountActionState(action, initialStateProp) {
		if (isHydrating) {
			var ssrFormState = workInProgressRoot.formState;
			if (null !== ssrFormState) {
				a: {
					var JSCompiler_inline_result = currentlyRenderingFiber;
					if (isHydrating) {
						if (nextHydratableInstance) {
							b: {
								var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
								for (var inRootOrSingleton = rootOrSingletonContext; 8 !== JSCompiler_inline_result$jscomp$0.nodeType;) {
									if (!inRootOrSingleton) {
										JSCompiler_inline_result$jscomp$0 = null;
										break b;
									}
									JSCompiler_inline_result$jscomp$0 = getNextHydratable(JSCompiler_inline_result$jscomp$0.nextSibling);
									if (null === JSCompiler_inline_result$jscomp$0) {
										JSCompiler_inline_result$jscomp$0 = null;
										break b;
									}
								}
								inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
								JSCompiler_inline_result$jscomp$0 = "F!" === inRootOrSingleton || "F" === inRootOrSingleton ? JSCompiler_inline_result$jscomp$0 : null;
							}
							if (JSCompiler_inline_result$jscomp$0) {
								nextHydratableInstance = getNextHydratable(JSCompiler_inline_result$jscomp$0.nextSibling);
								JSCompiler_inline_result = "F!" === JSCompiler_inline_result$jscomp$0.data;
								break a;
							}
						}
						throwOnHydrationMismatch(JSCompiler_inline_result);
					}
					JSCompiler_inline_result = !1;
				}
				JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
			}
		}
		ssrFormState = mountWorkInProgressHook();
		ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
		JSCompiler_inline_result = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: actionStateReducer,
			lastRenderedState: initialStateProp
		};
		ssrFormState.queue = JSCompiler_inline_result;
		ssrFormState = dispatchSetState.bind(null, currentlyRenderingFiber, JSCompiler_inline_result);
		JSCompiler_inline_result.dispatch = ssrFormState;
		JSCompiler_inline_result = mountStateImpl(!1);
		inRootOrSingleton = dispatchOptimisticSetState.bind(null, currentlyRenderingFiber, !1, JSCompiler_inline_result.queue);
		JSCompiler_inline_result = mountWorkInProgressHook();
		JSCompiler_inline_result$jscomp$0 = {
			state: initialStateProp,
			dispatch: null,
			action,
			pending: null
		};
		JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
		ssrFormState = dispatchActionState.bind(null, currentlyRenderingFiber, JSCompiler_inline_result$jscomp$0, inRootOrSingleton, ssrFormState);
		JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
		JSCompiler_inline_result.memoizedState = action;
		return [
			initialStateProp,
			ssrFormState,
			!1
		];
	}
	function updateActionState(action) {
		return updateActionStateImpl(updateWorkInProgressHook(), currentHook, action);
	}
	function updateActionStateImpl(stateHook, currentStateHook, action) {
		currentStateHook = updateReducerImpl(stateHook, currentStateHook, actionStateReducer)[0];
		stateHook = updateReducer(basicStateReducer)[0];
		if ("object" === typeof currentStateHook && null !== currentStateHook && "function" === typeof currentStateHook.then) try {
			var state = useThenable(currentStateHook);
		} catch (x) {
			if (x === SuspenseException) throw SuspenseActionException;
			throw x;
		}
		else state = currentStateHook;
		currentStateHook = updateWorkInProgressHook();
		var actionQueue = currentStateHook.queue, dispatch = actionQueue.dispatch;
		action !== currentStateHook.memoizedState && (currentlyRenderingFiber.flags |= 2048, pushSimpleEffect(9, { destroy: void 0 }, actionStateActionEffect.bind(null, actionQueue, action), null));
		return [
			state,
			dispatch,
			stateHook
		];
	}
	function actionStateActionEffect(actionQueue, action) {
		actionQueue.action = action;
	}
	function rerenderActionState(action) {
		var stateHook = updateWorkInProgressHook(), currentStateHook = currentHook;
		if (null !== currentStateHook) return updateActionStateImpl(stateHook, currentStateHook, action);
		updateWorkInProgressHook();
		stateHook = stateHook.memoizedState;
		currentStateHook = updateWorkInProgressHook();
		var dispatch = currentStateHook.queue.dispatch;
		currentStateHook.memoizedState = action;
		return [
			stateHook,
			dispatch,
			!1
		];
	}
	function pushSimpleEffect(tag, inst, create, deps) {
		tag = {
			tag,
			create,
			deps,
			inst,
			next: null
		};
		inst = currentlyRenderingFiber.updateQueue;
		null === inst && (inst = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = inst);
		create = inst.lastEffect;
		null === create ? inst.lastEffect = tag.next = tag : (deps = create.next, create.next = tag, tag.next = deps, inst.lastEffect = tag);
		return tag;
	}
	function updateRef() {
		return updateWorkInProgressHook().memoizedState;
	}
	function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
		var hook = mountWorkInProgressHook();
		currentlyRenderingFiber.flags |= fiberFlags;
		hook.memoizedState = pushSimpleEffect(1 | hookFlags, { destroy: void 0 }, create, void 0 === deps ? null : deps);
	}
	function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
		var hook = updateWorkInProgressHook();
		deps = void 0 === deps ? null : deps;
		var inst = hook.memoizedState.inst;
		null !== currentHook && null !== deps && areHookInputsEqual(deps, currentHook.memoizedState.deps) ? hook.memoizedState = pushSimpleEffect(hookFlags, inst, create, deps) : (currentlyRenderingFiber.flags |= fiberFlags, hook.memoizedState = pushSimpleEffect(1 | hookFlags, inst, create, deps));
	}
	function mountEffect(create, deps) {
		mountEffectImpl(8390656, 8, create, deps);
	}
	function updateEffect(create, deps) {
		updateEffectImpl(2048, 8, create, deps);
	}
	function useEffectEventImpl(payload) {
		currentlyRenderingFiber.flags |= 4;
		var componentUpdateQueue = currentlyRenderingFiber.updateQueue;
		if (null === componentUpdateQueue) componentUpdateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = componentUpdateQueue, componentUpdateQueue.events = [payload];
		else {
			var events = componentUpdateQueue.events;
			null === events ? componentUpdateQueue.events = [payload] : events.push(payload);
		}
	}
	function updateEvent(callback) {
		var ref = updateWorkInProgressHook().memoizedState;
		useEffectEventImpl({
			ref,
			nextImpl: callback
		});
		return function() {
			if (0 !== (executionContext & 2)) throw Error(formatProdErrorMessage(440));
			return ref.impl.apply(void 0, arguments);
		};
	}
	function updateInsertionEffect(create, deps) {
		return updateEffectImpl(4, 2, create, deps);
	}
	function updateLayoutEffect(create, deps) {
		return updateEffectImpl(4, 4, create, deps);
	}
	function imperativeHandleEffect(create, ref) {
		if ("function" === typeof ref) {
			create = create();
			var refCleanup = ref(create);
			return function() {
				"function" === typeof refCleanup ? refCleanup() : ref(null);
			};
		}
		if (null !== ref && void 0 !== ref) return create = create(), ref.current = create, function() {
			ref.current = null;
		};
	}
	function updateImperativeHandle(ref, create, deps) {
		deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
		updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
	}
	function mountDebugValue() {}
	function updateCallback(callback, deps) {
		var hook = updateWorkInProgressHook();
		deps = void 0 === deps ? null : deps;
		var prevState = hook.memoizedState;
		if (null !== deps && areHookInputsEqual(deps, prevState[1])) return prevState[0];
		hook.memoizedState = [callback, deps];
		return callback;
	}
	function updateMemo(nextCreate, deps) {
		var hook = updateWorkInProgressHook();
		deps = void 0 === deps ? null : deps;
		var prevState = hook.memoizedState;
		if (null !== deps && areHookInputsEqual(deps, prevState[1])) return prevState[0];
		prevState = nextCreate();
		if (shouldDoubleInvokeUserFnsInHooksDEV) {
			setIsStrictModeForDevtools(!0);
			try {
				nextCreate();
			} finally {
				setIsStrictModeForDevtools(!1);
			}
		}
		hook.memoizedState = [prevState, deps];
		return prevState;
	}
	function mountDeferredValueImpl(hook, value, initialValue) {
		if (void 0 === initialValue || 0 !== (renderLanes & 1073741824) && 0 === (workInProgressRootRenderLanes & 261930)) return hook.memoizedState = value;
		hook.memoizedState = initialValue;
		hook = requestDeferredLane();
		currentlyRenderingFiber.lanes |= hook;
		workInProgressRootSkippedLanes |= hook;
		return initialValue;
	}
	function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
		if (objectIs(value, prevValue)) return value;
		if (null !== currentTreeHiddenStackCursor.current) return hook = mountDeferredValueImpl(hook, value, initialValue), objectIs(hook, prevValue) || (didReceiveUpdate = !0), hook;
		if (0 === (renderLanes & 42) || 0 !== (renderLanes & 1073741824) && 0 === (workInProgressRootRenderLanes & 261930)) return didReceiveUpdate = !0, hook.memoizedState = value;
		hook = requestDeferredLane();
		currentlyRenderingFiber.lanes |= hook;
		workInProgressRootSkippedLanes |= hook;
		return prevValue;
	}
	function startTransition(fiber, queue, pendingState, finishedState, callback) {
		var previousPriority = ReactDOMSharedInternals.p;
		ReactDOMSharedInternals.p = 0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
		var prevTransition = ReactSharedInternals.T, currentTransition = {};
		ReactSharedInternals.T = currentTransition;
		dispatchOptimisticSetState(fiber, !1, queue, pendingState);
		try {
			var returnValue = callback(), onStartTransitionFinish = ReactSharedInternals.S;
			null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
			if (null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then) dispatchSetStateInternal(fiber, queue, chainThenableValue(returnValue, finishedState), requestUpdateLane(fiber));
			else dispatchSetStateInternal(fiber, queue, finishedState, requestUpdateLane(fiber));
		} catch (error) {
			dispatchSetStateInternal(fiber, queue, {
				then: function() {},
				status: "rejected",
				reason: error
			}, requestUpdateLane());
		} finally {
			ReactDOMSharedInternals.p = previousPriority, null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
		}
	}
	function noop() {}
	function startHostTransition(formFiber, pendingState, action, formData) {
		if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
		var queue = ensureFormComponentIsStateful(formFiber).queue;
		startTransition(formFiber, queue, pendingState, sharedNotPendingObject, null === action ? noop : function() {
			requestFormReset$1(formFiber);
			return action(formData);
		});
	}
	function ensureFormComponentIsStateful(formFiber) {
		var existingStateHook = formFiber.memoizedState;
		if (null !== existingStateHook) return existingStateHook;
		existingStateHook = {
			memoizedState: sharedNotPendingObject,
			baseState: sharedNotPendingObject,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: basicStateReducer,
				lastRenderedState: sharedNotPendingObject
			},
			next: null
		};
		var initialResetState = {};
		existingStateHook.next = {
			memoizedState: initialResetState,
			baseState: initialResetState,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: basicStateReducer,
				lastRenderedState: initialResetState
			},
			next: null
		};
		formFiber.memoizedState = existingStateHook;
		formFiber = formFiber.alternate;
		null !== formFiber && (formFiber.memoizedState = existingStateHook);
		return existingStateHook;
	}
	function requestFormReset$1(formFiber) {
		var stateHook = ensureFormComponentIsStateful(formFiber);
		null === stateHook.next && (stateHook = formFiber.alternate.memoizedState);
		dispatchSetStateInternal(formFiber, stateHook.next.queue, {}, requestUpdateLane());
	}
	function useHostTransitionStatus() {
		return readContext(HostTransitionContext);
	}
	function updateId() {
		return updateWorkInProgressHook().memoizedState;
	}
	function updateRefresh() {
		return updateWorkInProgressHook().memoizedState;
	}
	function refreshCache(fiber) {
		for (var provider = fiber.return; null !== provider;) {
			switch (provider.tag) {
				case 24:
				case 3:
					var lane = requestUpdateLane();
					fiber = createUpdate(lane);
					var root$69 = enqueueUpdate(provider, fiber, lane);
					null !== root$69 && (scheduleUpdateOnFiber(root$69, provider, lane), entangleTransitions(root$69, provider, lane));
					provider = { cache: createCache() };
					fiber.payload = provider;
					return;
			}
			provider = provider.return;
		}
	}
	function dispatchReducerAction(fiber, queue, action) {
		var lane = requestUpdateLane();
		action = {
			lane,
			revertLane: 0,
			gesture: null,
			action,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		isRenderPhaseUpdate(fiber) ? enqueueRenderPhaseUpdate(queue, action) : (action = enqueueConcurrentHookUpdate(fiber, queue, action, lane), null !== action && (scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane)));
	}
	function dispatchSetState(fiber, queue, action) {
		dispatchSetStateInternal(fiber, queue, action, requestUpdateLane());
	}
	function dispatchSetStateInternal(fiber, queue, action, lane) {
		var update = {
			lane,
			revertLane: 0,
			gesture: null,
			action,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
		else {
			var alternate = fiber.alternate;
			if (0 === fiber.lanes && (null === alternate || 0 === alternate.lanes) && (alternate = queue.lastRenderedReducer, null !== alternate)) try {
				var currentState = queue.lastRenderedState, eagerState = alternate(currentState, action);
				update.hasEagerState = !0;
				update.eagerState = eagerState;
				if (objectIs(eagerState, currentState)) return enqueueUpdate$1(fiber, queue, update, 0), null === workInProgressRoot && finishQueueingConcurrentUpdates(), !1;
			} catch (error) {}
			action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
			if (null !== action) return scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane), !0;
		}
		return !1;
	}
	function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
		action = {
			lane: 2,
			revertLane: requestTransitionLane(),
			gesture: null,
			action,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (isRenderPhaseUpdate(fiber)) {
			if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
		} else throwIfDuringRender = enqueueConcurrentHookUpdate(fiber, queue, action, 2), null !== throwIfDuringRender && scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
	}
	function isRenderPhaseUpdate(fiber) {
		var alternate = fiber.alternate;
		return fiber === currentlyRenderingFiber || null !== alternate && alternate === currentlyRenderingFiber;
	}
	function enqueueRenderPhaseUpdate(queue, update) {
		didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = !0;
		var pending = queue.pending;
		null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
		queue.pending = update;
	}
	function entangleTransitionUpdate(root, queue, lane) {
		if (0 !== (lane & 4194048)) {
			var queueLanes = queue.lanes;
			queueLanes &= root.pendingLanes;
			lane |= queueLanes;
			queue.lanes = lane;
			markRootEntangled(root, lane);
		}
	}
	var ContextOnlyDispatcher = {
		readContext,
		use,
		useCallback: throwInvalidHookError,
		useContext: throwInvalidHookError,
		useEffect: throwInvalidHookError,
		useImperativeHandle: throwInvalidHookError,
		useLayoutEffect: throwInvalidHookError,
		useInsertionEffect: throwInvalidHookError,
		useMemo: throwInvalidHookError,
		useReducer: throwInvalidHookError,
		useRef: throwInvalidHookError,
		useState: throwInvalidHookError,
		useDebugValue: throwInvalidHookError,
		useDeferredValue: throwInvalidHookError,
		useTransition: throwInvalidHookError,
		useSyncExternalStore: throwInvalidHookError,
		useId: throwInvalidHookError,
		useHostTransitionStatus: throwInvalidHookError,
		useFormState: throwInvalidHookError,
		useActionState: throwInvalidHookError,
		useOptimistic: throwInvalidHookError,
		useMemoCache: throwInvalidHookError,
		useCacheRefresh: throwInvalidHookError
	};
	ContextOnlyDispatcher.useEffectEvent = throwInvalidHookError;
	var HooksDispatcherOnMount = {
		readContext,
		use,
		useCallback: function(callback, deps) {
			mountWorkInProgressHook().memoizedState = [callback, void 0 === deps ? null : deps];
			return callback;
		},
		useContext: readContext,
		useEffect: mountEffect,
		useImperativeHandle: function(ref, create, deps) {
			deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
			mountEffectImpl(4194308, 4, imperativeHandleEffect.bind(null, create, ref), deps);
		},
		useLayoutEffect: function(create, deps) {
			return mountEffectImpl(4194308, 4, create, deps);
		},
		useInsertionEffect: function(create, deps) {
			mountEffectImpl(4, 2, create, deps);
		},
		useMemo: function(nextCreate, deps) {
			var hook = mountWorkInProgressHook();
			deps = void 0 === deps ? null : deps;
			var nextValue = nextCreate();
			if (shouldDoubleInvokeUserFnsInHooksDEV) {
				setIsStrictModeForDevtools(!0);
				try {
					nextCreate();
				} finally {
					setIsStrictModeForDevtools(!1);
				}
			}
			hook.memoizedState = [nextValue, deps];
			return nextValue;
		},
		useReducer: function(reducer, initialArg, init) {
			var hook = mountWorkInProgressHook();
			if (void 0 !== init) {
				var initialState = init(initialArg);
				if (shouldDoubleInvokeUserFnsInHooksDEV) {
					setIsStrictModeForDevtools(!0);
					try {
						init(initialArg);
					} finally {
						setIsStrictModeForDevtools(!1);
					}
				}
			} else initialState = initialArg;
			hook.memoizedState = hook.baseState = initialState;
			reducer = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: reducer,
				lastRenderedState: initialState
			};
			hook.queue = reducer;
			reducer = reducer.dispatch = dispatchReducerAction.bind(null, currentlyRenderingFiber, reducer);
			return [hook.memoizedState, reducer];
		},
		useRef: function(initialValue) {
			var hook = mountWorkInProgressHook();
			initialValue = { current: initialValue };
			return hook.memoizedState = initialValue;
		},
		useState: function(initialState) {
			initialState = mountStateImpl(initialState);
			var queue = initialState.queue, dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
			queue.dispatch = dispatch;
			return [initialState.memoizedState, dispatch];
		},
		useDebugValue: mountDebugValue,
		useDeferredValue: function(value, initialValue) {
			return mountDeferredValueImpl(mountWorkInProgressHook(), value, initialValue);
		},
		useTransition: function() {
			var stateHook = mountStateImpl(!1);
			stateHook = startTransition.bind(null, currentlyRenderingFiber, stateHook.queue, !0, !1);
			mountWorkInProgressHook().memoizedState = stateHook;
			return [!1, stateHook];
		},
		useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
			var fiber = currentlyRenderingFiber, hook = mountWorkInProgressHook();
			if (isHydrating) {
				if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
				getServerSnapshot = getServerSnapshot();
			} else {
				getServerSnapshot = getSnapshot();
				if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
				0 !== (workInProgressRootRenderLanes & 127) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
			}
			hook.memoizedState = getServerSnapshot;
			var inst = {
				value: getServerSnapshot,
				getSnapshot
			};
			hook.queue = inst;
			mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [subscribe]);
			fiber.flags |= 2048;
			pushSimpleEffect(9, { destroy: void 0 }, updateStoreInstance.bind(null, fiber, inst, getServerSnapshot, getSnapshot), null);
			return getServerSnapshot;
		},
		useId: function() {
			var hook = mountWorkInProgressHook(), identifierPrefix = workInProgressRoot.identifierPrefix;
			if (isHydrating) {
				var JSCompiler_inline_result = treeContextOverflow;
				var idWithLeadingBit = treeContextId;
				JSCompiler_inline_result = (idWithLeadingBit & ~(1 << 32 - clz32(idWithLeadingBit) - 1)).toString(32) + JSCompiler_inline_result;
				identifierPrefix = "_" + identifierPrefix + "R_" + JSCompiler_inline_result;
				JSCompiler_inline_result = localIdCounter++;
				0 < JSCompiler_inline_result && (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
				identifierPrefix += "_";
			} else JSCompiler_inline_result = globalClientIdCounter++, identifierPrefix = "_" + identifierPrefix + "r_" + JSCompiler_inline_result.toString(32) + "_";
			return hook.memoizedState = identifierPrefix;
		},
		useHostTransitionStatus,
		useFormState: mountActionState,
		useActionState: mountActionState,
		useOptimistic: function(passthrough) {
			var hook = mountWorkInProgressHook();
			hook.memoizedState = hook.baseState = passthrough;
			var queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			hook.queue = queue;
			hook = dispatchOptimisticSetState.bind(null, currentlyRenderingFiber, !0, queue);
			queue.dispatch = hook;
			return [passthrough, hook];
		},
		useMemoCache,
		useCacheRefresh: function() {
			return mountWorkInProgressHook().memoizedState = refreshCache.bind(null, currentlyRenderingFiber);
		},
		useEffectEvent: function(callback) {
			var hook = mountWorkInProgressHook(), ref = { impl: callback };
			hook.memoizedState = ref;
			return function() {
				if (0 !== (executionContext & 2)) throw Error(formatProdErrorMessage(440));
				return ref.impl.apply(void 0, arguments);
			};
		}
	};
	var HooksDispatcherOnUpdate = {
		readContext,
		use,
		useCallback: updateCallback,
		useContext: readContext,
		useEffect: updateEffect,
		useImperativeHandle: updateImperativeHandle,
		useInsertionEffect: updateInsertionEffect,
		useLayoutEffect: updateLayoutEffect,
		useMemo: updateMemo,
		useReducer: updateReducer,
		useRef: updateRef,
		useState: function() {
			return updateReducer(basicStateReducer);
		},
		useDebugValue: mountDebugValue,
		useDeferredValue: function(value, initialValue) {
			return updateDeferredValueImpl(updateWorkInProgressHook(), currentHook.memoizedState, value, initialValue);
		},
		useTransition: function() {
			var booleanOrThenable = updateReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
			return ["boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable), start];
		},
		useSyncExternalStore: updateSyncExternalStore,
		useId: updateId,
		useHostTransitionStatus,
		useFormState: updateActionState,
		useActionState: updateActionState,
		useOptimistic: function(passthrough, reducer) {
			return updateOptimisticImpl(updateWorkInProgressHook(), currentHook, passthrough, reducer);
		},
		useMemoCache,
		useCacheRefresh: updateRefresh
	};
	HooksDispatcherOnUpdate.useEffectEvent = updateEvent;
	var HooksDispatcherOnRerender = {
		readContext,
		use,
		useCallback: updateCallback,
		useContext: readContext,
		useEffect: updateEffect,
		useImperativeHandle: updateImperativeHandle,
		useInsertionEffect: updateInsertionEffect,
		useLayoutEffect: updateLayoutEffect,
		useMemo: updateMemo,
		useReducer: rerenderReducer,
		useRef: updateRef,
		useState: function() {
			return rerenderReducer(basicStateReducer);
		},
		useDebugValue: mountDebugValue,
		useDeferredValue: function(value, initialValue) {
			var hook = updateWorkInProgressHook();
			return null === currentHook ? mountDeferredValueImpl(hook, value, initialValue) : updateDeferredValueImpl(hook, currentHook.memoizedState, value, initialValue);
		},
		useTransition: function() {
			var booleanOrThenable = rerenderReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
			return ["boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable), start];
		},
		useSyncExternalStore: updateSyncExternalStore,
		useId: updateId,
		useHostTransitionStatus,
		useFormState: rerenderActionState,
		useActionState: rerenderActionState,
		useOptimistic: function(passthrough, reducer) {
			var hook = updateWorkInProgressHook();
			if (null !== currentHook) return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
			hook.baseState = passthrough;
			return [passthrough, hook.queue.dispatch];
		},
		useMemoCache,
		useCacheRefresh: updateRefresh
	};
	HooksDispatcherOnRerender.useEffectEvent = updateEvent;
	function applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, nextProps) {
		ctor = workInProgress.memoizedState;
		getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
		getDerivedStateFromProps = null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps ? ctor : assign({}, ctor, getDerivedStateFromProps);
		workInProgress.memoizedState = getDerivedStateFromProps;
		0 === workInProgress.lanes && (workInProgress.updateQueue.baseState = getDerivedStateFromProps);
	}
	var classComponentUpdater = {
		enqueueSetState: function(inst, payload, callback) {
			inst = inst._reactInternals;
			var lane = requestUpdateLane(), update = createUpdate(lane);
			update.payload = payload;
			void 0 !== callback && null !== callback && (update.callback = callback);
			payload = enqueueUpdate(inst, update, lane);
			null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
		},
		enqueueReplaceState: function(inst, payload, callback) {
			inst = inst._reactInternals;
			var lane = requestUpdateLane(), update = createUpdate(lane);
			update.tag = 1;
			update.payload = payload;
			void 0 !== callback && null !== callback && (update.callback = callback);
			payload = enqueueUpdate(inst, update, lane);
			null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
		},
		enqueueForceUpdate: function(inst, callback) {
			inst = inst._reactInternals;
			var lane = requestUpdateLane(), update = createUpdate(lane);
			update.tag = 2;
			void 0 !== callback && null !== callback && (update.callback = callback);
			callback = enqueueUpdate(inst, update, lane);
			null !== callback && (scheduleUpdateOnFiber(callback, inst, lane), entangleTransitions(callback, inst, lane));
		}
	};
	function checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext) {
		workInProgress = workInProgress.stateNode;
		return "function" === typeof workInProgress.shouldComponentUpdate ? workInProgress.shouldComponentUpdate(newProps, newState, nextContext) : ctor.prototype && ctor.prototype.isPureReactComponent ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState) : !0;
	}
	function callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext) {
		workInProgress = instance.state;
		"function" === typeof instance.componentWillReceiveProps && instance.componentWillReceiveProps(newProps, nextContext);
		"function" === typeof instance.UNSAFE_componentWillReceiveProps && instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
		instance.state !== workInProgress && classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
	}
	function resolveClassComponentProps(Component, baseProps) {
		var newProps = baseProps;
		if ("ref" in baseProps) {
			newProps = {};
			for (var propName in baseProps) "ref" !== propName && (newProps[propName] = baseProps[propName]);
		}
		if (Component = Component.defaultProps) {
			newProps === baseProps && (newProps = assign({}, newProps));
			for (var propName$73 in Component) void 0 === newProps[propName$73] && (newProps[propName$73] = Component[propName$73]);
		}
		return newProps;
	}
	function defaultOnUncaughtError(error) {
		reportGlobalError(error);
	}
	function defaultOnCaughtError(error) {
		console.error(error);
	}
	function defaultOnRecoverableError(error) {
		reportGlobalError(error);
	}
	function logUncaughtError(root, errorInfo) {
		try {
			var onUncaughtError = root.onUncaughtError;
			onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
		} catch (e$74) {
			setTimeout(function() {
				throw e$74;
			});
		}
	}
	function logCaughtError(root, boundary, errorInfo) {
		try {
			var onCaughtError = root.onCaughtError;
			onCaughtError(errorInfo.value, {
				componentStack: errorInfo.stack,
				errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
			});
		} catch (e$75) {
			setTimeout(function() {
				throw e$75;
			});
		}
	}
	function createRootErrorUpdate(root, errorInfo, lane) {
		lane = createUpdate(lane);
		lane.tag = 3;
		lane.payload = { element: null };
		lane.callback = function() {
			logUncaughtError(root, errorInfo);
		};
		return lane;
	}
	function createClassErrorUpdate(lane) {
		lane = createUpdate(lane);
		lane.tag = 3;
		return lane;
	}
	function initializeClassErrorUpdate(update, root, fiber, errorInfo) {
		var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
		if ("function" === typeof getDerivedStateFromError) {
			var error = errorInfo.value;
			update.payload = function() {
				return getDerivedStateFromError(error);
			};
			update.callback = function() {
				logCaughtError(root, fiber, errorInfo);
			};
		}
		var inst = fiber.stateNode;
		null !== inst && "function" === typeof inst.componentDidCatch && (update.callback = function() {
			logCaughtError(root, fiber, errorInfo);
			"function" !== typeof getDerivedStateFromError && (null === legacyErrorBoundariesThatAlreadyFailed ? legacyErrorBoundariesThatAlreadyFailed = /* @__PURE__ */ new Set([this]) : legacyErrorBoundariesThatAlreadyFailed.add(this));
			var stack = errorInfo.stack;
			this.componentDidCatch(errorInfo.value, { componentStack: null !== stack ? stack : "" });
		});
	}
	function throwException(root, returnFiber, sourceFiber, value, rootRenderLanes) {
		sourceFiber.flags |= 32768;
		if (null !== value && "object" === typeof value && "function" === typeof value.then) {
			returnFiber = sourceFiber.alternate;
			null !== returnFiber && propagateParentContextChanges(returnFiber, sourceFiber, rootRenderLanes, !0);
			sourceFiber = suspenseHandlerStackCursor.current;
			if (null !== sourceFiber) {
				switch (sourceFiber.tag) {
					case 31:
					case 13: return null === shellBoundary ? renderDidSuspendDelayIfPossible() : null === sourceFiber.alternate && 0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 3), sourceFiber.flags &= -257, sourceFiber.flags |= 65536, sourceFiber.lanes = rootRenderLanes, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? sourceFiber.updateQueue = /* @__PURE__ */ new Set([value]) : returnFiber.add(value), attachPingListener(root, value, rootRenderLanes)), !1;
					case 22: return sourceFiber.flags |= 65536, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? (returnFiber = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([value])
					}, sourceFiber.updateQueue = returnFiber) : (sourceFiber = returnFiber.retryQueue, null === sourceFiber ? returnFiber.retryQueue = /* @__PURE__ */ new Set([value]) : sourceFiber.add(value)), attachPingListener(root, value, rootRenderLanes)), !1;
				}
				throw Error(formatProdErrorMessage(435, sourceFiber.tag));
			}
			attachPingListener(root, value, rootRenderLanes);
			renderDidSuspendDelayIfPossible();
			return !1;
		}
		if (isHydrating) return returnFiber = suspenseHandlerStackCursor.current, null !== returnFiber ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256), returnFiber.flags |= 65536, returnFiber.lanes = rootRenderLanes, value !== HydrationMismatchException && (root = Error(formatProdErrorMessage(422), { cause: value }), queueHydrationError(createCapturedValueAtFiber(root, sourceFiber)))) : (value !== HydrationMismatchException && (returnFiber = Error(formatProdErrorMessage(423), { cause: value }), queueHydrationError(createCapturedValueAtFiber(returnFiber, sourceFiber))), root = root.current.alternate, root.flags |= 65536, rootRenderLanes &= -rootRenderLanes, root.lanes |= rootRenderLanes, value = createCapturedValueAtFiber(value, sourceFiber), rootRenderLanes = createRootErrorUpdate(root.stateNode, value, rootRenderLanes), enqueueCapturedUpdate(root, rootRenderLanes), 4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2)), !1;
		var wrapperError = Error(formatProdErrorMessage(520), { cause: value });
		wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
		null === workInProgressRootConcurrentErrors ? workInProgressRootConcurrentErrors = [wrapperError] : workInProgressRootConcurrentErrors.push(wrapperError);
		4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
		if (null === returnFiber) return !0;
		value = createCapturedValueAtFiber(value, sourceFiber);
		sourceFiber = returnFiber;
		do {
			switch (sourceFiber.tag) {
				case 3: return sourceFiber.flags |= 65536, root = rootRenderLanes & -rootRenderLanes, sourceFiber.lanes |= root, root = createRootErrorUpdate(sourceFiber.stateNode, value, root), enqueueCapturedUpdate(sourceFiber, root), !1;
				case 1: if (returnFiber = sourceFiber.type, wrapperError = sourceFiber.stateNode, 0 === (sourceFiber.flags & 128) && ("function" === typeof returnFiber.getDerivedStateFromError || null !== wrapperError && "function" === typeof wrapperError.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError)))) return sourceFiber.flags |= 65536, rootRenderLanes &= -rootRenderLanes, sourceFiber.lanes |= rootRenderLanes, rootRenderLanes = createClassErrorUpdate(rootRenderLanes), initializeClassErrorUpdate(rootRenderLanes, root, sourceFiber, value), enqueueCapturedUpdate(sourceFiber, rootRenderLanes), !1;
			}
			sourceFiber = sourceFiber.return;
		} while (null !== sourceFiber);
		return !1;
	}
	var SelectiveHydrationException = Error(formatProdErrorMessage(461));
	var didReceiveUpdate = !1;
	function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
		workInProgress.child = null === current ? mountChildFibers(workInProgress, null, nextChildren, renderLanes) : reconcileChildFibers(workInProgress, current.child, nextChildren, renderLanes);
	}
	function updateForwardRef(current, workInProgress, Component, nextProps, renderLanes) {
		Component = Component.render;
		var ref = workInProgress.ref;
		if ("ref" in nextProps) {
			var propsWithoutRef = {};
			for (var key in nextProps) "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
		} else propsWithoutRef = nextProps;
		prepareToReadContext(workInProgress);
		nextProps = renderWithHooks(current, workInProgress, Component, propsWithoutRef, ref, renderLanes);
		key = checkDidRenderIdHook();
		if (null !== current && !didReceiveUpdate) return bailoutHooks(current, workInProgress, renderLanes), bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		isHydrating && key && pushMaterializedTreeId(workInProgress);
		workInProgress.flags |= 1;
		reconcileChildren(current, workInProgress, nextProps, renderLanes);
		return workInProgress.child;
	}
	function updateMemoComponent(current, workInProgress, Component, nextProps, renderLanes) {
		if (null === current) {
			var type = Component.type;
			if ("function" === typeof type && !shouldConstruct(type) && void 0 === type.defaultProps && null === Component.compare) return workInProgress.tag = 15, workInProgress.type = type, updateSimpleMemoComponent(current, workInProgress, type, nextProps, renderLanes);
			current = createFiberFromTypeAndProps(Component.type, null, nextProps, workInProgress, workInProgress.mode, renderLanes);
			current.ref = workInProgress.ref;
			current.return = workInProgress;
			return workInProgress.child = current;
		}
		type = current.child;
		if (!checkScheduledUpdateOrContext(current, renderLanes)) {
			var prevProps = type.memoizedProps;
			Component = Component.compare;
			Component = null !== Component ? Component : shallowEqual;
			if (Component(prevProps, nextProps) && current.ref === workInProgress.ref) return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		}
		workInProgress.flags |= 1;
		current = createWorkInProgress(type, nextProps);
		current.ref = workInProgress.ref;
		current.return = workInProgress;
		return workInProgress.child = current;
	}
	function updateSimpleMemoComponent(current, workInProgress, Component, nextProps, renderLanes) {
		if (null !== current) {
			var prevProps = current.memoizedProps;
			if (shallowEqual(prevProps, nextProps) && current.ref === workInProgress.ref) if (didReceiveUpdate = !1, workInProgress.pendingProps = nextProps = prevProps, checkScheduledUpdateOrContext(current, renderLanes)) 0 !== (current.flags & 131072) && (didReceiveUpdate = !0);
			else return workInProgress.lanes = current.lanes, bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		}
		return updateFunctionComponent(current, workInProgress, Component, nextProps, renderLanes);
	}
	function updateOffscreenComponent(current, workInProgress, renderLanes, nextProps) {
		var nextChildren = nextProps.children, prevState = null !== current ? current.memoizedState : null;
		null === current && null === workInProgress.stateNode && (workInProgress.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		});
		if ("hidden" === nextProps.mode) {
			if (0 !== (workInProgress.flags & 128)) {
				prevState = null !== prevState ? prevState.baseLanes | renderLanes : renderLanes;
				if (null !== current) {
					nextProps = workInProgress.child = current.child;
					for (nextChildren = 0; null !== nextProps;) nextChildren = nextChildren | nextProps.lanes | nextProps.childLanes, nextProps = nextProps.sibling;
					nextProps = nextChildren & ~prevState;
				} else nextProps = 0, workInProgress.child = null;
				return deferHiddenOffscreenComponent(current, workInProgress, prevState, renderLanes, nextProps);
			}
			if (0 !== (renderLanes & 536870912)) workInProgress.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, null !== current && pushTransition(workInProgress, null !== prevState ? prevState.cachePool : null), null !== prevState ? pushHiddenContext(workInProgress, prevState) : reuseHiddenContextOnStack(), pushOffscreenSuspenseHandler(workInProgress);
			else return nextProps = workInProgress.lanes = 536870912, deferHiddenOffscreenComponent(current, workInProgress, null !== prevState ? prevState.baseLanes | renderLanes : renderLanes, renderLanes, nextProps);
		} else null !== prevState ? (pushTransition(workInProgress, prevState.cachePool), pushHiddenContext(workInProgress, prevState), reuseSuspenseHandlerOnStack(workInProgress), workInProgress.memoizedState = null) : (null !== current && pushTransition(workInProgress, null), reuseHiddenContextOnStack(), reuseSuspenseHandlerOnStack(workInProgress));
		reconcileChildren(current, workInProgress, nextChildren, renderLanes);
		return workInProgress.child;
	}
	function bailoutOffscreenComponent(current, workInProgress) {
		null !== current && 22 === current.tag || null !== workInProgress.stateNode || (workInProgress.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		});
		return workInProgress.sibling;
	}
	function deferHiddenOffscreenComponent(current, workInProgress, nextBaseLanes, renderLanes, remainingChildLanes) {
		var JSCompiler_inline_result = peekCacheFromPool();
		JSCompiler_inline_result = null === JSCompiler_inline_result ? null : {
			parent: CacheContext._currentValue,
			pool: JSCompiler_inline_result
		};
		workInProgress.memoizedState = {
			baseLanes: nextBaseLanes,
			cachePool: JSCompiler_inline_result
		};
		null !== current && pushTransition(workInProgress, null);
		reuseHiddenContextOnStack();
		pushOffscreenSuspenseHandler(workInProgress);
		null !== current && propagateParentContextChanges(current, workInProgress, renderLanes, !0);
		workInProgress.childLanes = remainingChildLanes;
		return null;
	}
	function mountActivityChildren(workInProgress, nextProps) {
		nextProps = mountWorkInProgressOffscreenFiber({
			mode: nextProps.mode,
			children: nextProps.children
		}, workInProgress.mode);
		nextProps.ref = workInProgress.ref;
		workInProgress.child = nextProps;
		nextProps.return = workInProgress;
		return nextProps;
	}
	function retryActivityComponentWithoutHydrating(current, workInProgress, renderLanes) {
		reconcileChildFibers(workInProgress, current.child, null, renderLanes);
		current = mountActivityChildren(workInProgress, workInProgress.pendingProps);
		current.flags |= 2;
		popSuspenseHandler(workInProgress);
		workInProgress.memoizedState = null;
		return current;
	}
	function updateActivityComponent(current, workInProgress, renderLanes) {
		var nextProps = workInProgress.pendingProps, didSuspend = 0 !== (workInProgress.flags & 128);
		workInProgress.flags &= -129;
		if (null === current) {
			if (isHydrating) {
				if ("hidden" === nextProps.mode) return current = mountActivityChildren(workInProgress, nextProps), workInProgress.lanes = 536870912, bailoutOffscreenComponent(null, current);
				pushDehydratedActivitySuspenseHandler(workInProgress);
				(current = nextHydratableInstance) ? (current = canHydrateHydrationBoundary(current, rootOrSingletonContext), current = null !== current && "&" === current.data ? current : null, null !== current && (workInProgress.memoizedState = {
					dehydrated: current,
					treeContext: null !== treeContextProvider ? {
						id: treeContextId,
						overflow: treeContextOverflow
					} : null,
					retryLane: 536870912,
					hydrationErrors: null
				}, renderLanes = createFiberFromDehydratedFragment(current), renderLanes.return = workInProgress, workInProgress.child = renderLanes, hydrationParentFiber = workInProgress, nextHydratableInstance = null)) : current = null;
				if (null === current) throw throwOnHydrationMismatch(workInProgress);
				workInProgress.lanes = 536870912;
				return null;
			}
			return mountActivityChildren(workInProgress, nextProps);
		}
		var prevState = current.memoizedState;
		if (null !== prevState) {
			var dehydrated = prevState.dehydrated;
			pushDehydratedActivitySuspenseHandler(workInProgress);
			if (didSuspend) if (workInProgress.flags & 256) workInProgress.flags &= -257, workInProgress = retryActivityComponentWithoutHydrating(current, workInProgress, renderLanes);
			else if (null !== workInProgress.memoizedState) workInProgress.child = current.child, workInProgress.flags |= 128, workInProgress = null;
			else throw Error(formatProdErrorMessage(558));
			else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress, renderLanes, !1), didSuspend = 0 !== (renderLanes & current.childLanes), didReceiveUpdate || didSuspend) {
				nextProps = workInProgressRoot;
				if (null !== nextProps && (dehydrated = getBumpedLaneForHydration(nextProps, renderLanes), 0 !== dehydrated && dehydrated !== prevState.retryLane)) throw prevState.retryLane = dehydrated, enqueueConcurrentRenderForLane(current, dehydrated), scheduleUpdateOnFiber(nextProps, current, dehydrated), SelectiveHydrationException;
				renderDidSuspendDelayIfPossible();
				workInProgress = retryActivityComponentWithoutHydrating(current, workInProgress, renderLanes);
			} else current = prevState.treeContext, nextHydratableInstance = getNextHydratable(dehydrated.nextSibling), hydrationParentFiber = workInProgress, isHydrating = !0, hydrationErrors = null, rootOrSingletonContext = !1, null !== current && restoreSuspendedTreeContext(workInProgress, current), workInProgress = mountActivityChildren(workInProgress, nextProps), workInProgress.flags |= 4096;
			return workInProgress;
		}
		current = createWorkInProgress(current.child, {
			mode: nextProps.mode,
			children: nextProps.children
		});
		current.ref = workInProgress.ref;
		workInProgress.child = current;
		current.return = workInProgress;
		return current;
	}
	function markRef(current, workInProgress) {
		var ref = workInProgress.ref;
		if (null === ref) null !== current && null !== current.ref && (workInProgress.flags |= 4194816);
		else {
			if ("function" !== typeof ref && "object" !== typeof ref) throw Error(formatProdErrorMessage(284));
			if (null === current || current.ref !== ref) workInProgress.flags |= 4194816;
		}
	}
	function updateFunctionComponent(current, workInProgress, Component, nextProps, renderLanes) {
		prepareToReadContext(workInProgress);
		Component = renderWithHooks(current, workInProgress, Component, nextProps, void 0, renderLanes);
		nextProps = checkDidRenderIdHook();
		if (null !== current && !didReceiveUpdate) return bailoutHooks(current, workInProgress, renderLanes), bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		isHydrating && nextProps && pushMaterializedTreeId(workInProgress);
		workInProgress.flags |= 1;
		reconcileChildren(current, workInProgress, Component, renderLanes);
		return workInProgress.child;
	}
	function replayFunctionComponent(current, workInProgress, nextProps, Component, secondArg, renderLanes) {
		prepareToReadContext(workInProgress);
		workInProgress.updateQueue = null;
		nextProps = renderWithHooksAgain(workInProgress, Component, nextProps, secondArg);
		finishRenderingHooks(current);
		Component = checkDidRenderIdHook();
		if (null !== current && !didReceiveUpdate) return bailoutHooks(current, workInProgress, renderLanes), bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		isHydrating && Component && pushMaterializedTreeId(workInProgress);
		workInProgress.flags |= 1;
		reconcileChildren(current, workInProgress, nextProps, renderLanes);
		return workInProgress.child;
	}
	function updateClassComponent(current, workInProgress, Component, nextProps, renderLanes) {
		prepareToReadContext(workInProgress);
		if (null === workInProgress.stateNode) {
			var context = emptyContextObject, contextType = Component.contextType;
			"object" === typeof contextType && null !== contextType && (context = readContext(contextType));
			context = new Component(nextProps, context);
			workInProgress.memoizedState = null !== context.state && void 0 !== context.state ? context.state : null;
			context.updater = classComponentUpdater;
			workInProgress.stateNode = context;
			context._reactInternals = workInProgress;
			context = workInProgress.stateNode;
			context.props = nextProps;
			context.state = workInProgress.memoizedState;
			context.refs = {};
			initializeUpdateQueue(workInProgress);
			contextType = Component.contextType;
			context.context = "object" === typeof contextType && null !== contextType ? readContext(contextType) : emptyContextObject;
			context.state = workInProgress.memoizedState;
			contextType = Component.getDerivedStateFromProps;
			"function" === typeof contextType && (applyDerivedStateFromProps(workInProgress, Component, contextType, nextProps), context.state = workInProgress.memoizedState);
			"function" === typeof Component.getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || (contextType = context.state, "function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount(), contextType !== context.state && classComponentUpdater.enqueueReplaceState(context, context.state, null), processUpdateQueue(workInProgress, nextProps, context, renderLanes), suspendIfUpdateReadFromEntangledAsyncAction(), context.state = workInProgress.memoizedState);
			"function" === typeof context.componentDidMount && (workInProgress.flags |= 4194308);
			nextProps = !0;
		} else if (null === current) {
			context = workInProgress.stateNode;
			var unresolvedOldProps = workInProgress.memoizedProps, oldProps = resolveClassComponentProps(Component, unresolvedOldProps);
			context.props = oldProps;
			var oldContext = context.context, contextType$jscomp$0 = Component.contextType;
			contextType = emptyContextObject;
			"object" === typeof contextType$jscomp$0 && null !== contextType$jscomp$0 && (contextType = readContext(contextType$jscomp$0));
			var getDerivedStateFromProps = Component.getDerivedStateFromProps;
			contextType$jscomp$0 = "function" === typeof getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate;
			unresolvedOldProps = workInProgress.pendingProps !== unresolvedOldProps;
			contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (unresolvedOldProps || oldContext !== contextType) && callComponentWillReceiveProps(workInProgress, context, nextProps, contextType);
			hasForceUpdate = !1;
			var oldState = workInProgress.memoizedState;
			context.state = oldState;
			processUpdateQueue(workInProgress, nextProps, context, renderLanes);
			suspendIfUpdateReadFromEntangledAsyncAction();
			oldContext = workInProgress.memoizedState;
			unresolvedOldProps || oldState !== oldContext || hasForceUpdate ? ("function" === typeof getDerivedStateFromProps && (applyDerivedStateFromProps(workInProgress, Component, getDerivedStateFromProps, nextProps), oldContext = workInProgress.memoizedState), (oldProps = hasForceUpdate || checkShouldComponentUpdate(workInProgress, Component, oldProps, nextProps, oldState, oldContext, contextType)) ? (contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || ("function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount()), "function" === typeof context.componentDidMount && (workInProgress.flags |= 4194308)) : ("function" === typeof context.componentDidMount && (workInProgress.flags |= 4194308), workInProgress.memoizedProps = nextProps, workInProgress.memoizedState = oldContext), context.props = nextProps, context.state = oldContext, context.context = contextType, nextProps = oldProps) : ("function" === typeof context.componentDidMount && (workInProgress.flags |= 4194308), nextProps = !1);
		} else {
			context = workInProgress.stateNode;
			cloneUpdateQueue(current, workInProgress);
			contextType = workInProgress.memoizedProps;
			contextType$jscomp$0 = resolveClassComponentProps(Component, contextType);
			context.props = contextType$jscomp$0;
			getDerivedStateFromProps = workInProgress.pendingProps;
			oldState = context.context;
			oldContext = Component.contextType;
			oldProps = emptyContextObject;
			"object" === typeof oldContext && null !== oldContext && (oldProps = readContext(oldContext));
			unresolvedOldProps = Component.getDerivedStateFromProps;
			(oldContext = "function" === typeof unresolvedOldProps || "function" === typeof context.getSnapshotBeforeUpdate) || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (contextType !== getDerivedStateFromProps || oldState !== oldProps) && callComponentWillReceiveProps(workInProgress, context, nextProps, oldProps);
			hasForceUpdate = !1;
			oldState = workInProgress.memoizedState;
			context.state = oldState;
			processUpdateQueue(workInProgress, nextProps, context, renderLanes);
			suspendIfUpdateReadFromEntangledAsyncAction();
			var newState = workInProgress.memoizedState;
			contextType !== getDerivedStateFromProps || oldState !== newState || hasForceUpdate || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies) ? ("function" === typeof unresolvedOldProps && (applyDerivedStateFromProps(workInProgress, Component, unresolvedOldProps, nextProps), newState = workInProgress.memoizedState), (contextType$jscomp$0 = hasForceUpdate || checkShouldComponentUpdate(workInProgress, Component, contextType$jscomp$0, nextProps, oldState, newState, oldProps) || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies)) ? (oldContext || "function" !== typeof context.UNSAFE_componentWillUpdate && "function" !== typeof context.componentWillUpdate || ("function" === typeof context.componentWillUpdate && context.componentWillUpdate(nextProps, newState, oldProps), "function" === typeof context.UNSAFE_componentWillUpdate && context.UNSAFE_componentWillUpdate(nextProps, newState, oldProps)), "function" === typeof context.componentDidUpdate && (workInProgress.flags |= 4), "function" === typeof context.getSnapshotBeforeUpdate && (workInProgress.flags |= 1024)) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress.flags |= 1024), workInProgress.memoizedProps = nextProps, workInProgress.memoizedState = newState), context.props = nextProps, context.state = newState, context.context = oldProps, nextProps = contextType$jscomp$0) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress.flags |= 1024), nextProps = !1);
		}
		context = nextProps;
		markRef(current, workInProgress);
		nextProps = 0 !== (workInProgress.flags & 128);
		context || nextProps ? (context = workInProgress.stateNode, Component = nextProps && "function" !== typeof Component.getDerivedStateFromError ? null : context.render(), workInProgress.flags |= 1, null !== current && nextProps ? (workInProgress.child = reconcileChildFibers(workInProgress, current.child, null, renderLanes), workInProgress.child = reconcileChildFibers(workInProgress, null, Component, renderLanes)) : reconcileChildren(current, workInProgress, Component, renderLanes), workInProgress.memoizedState = context.state, current = workInProgress.child) : current = bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		return current;
	}
	function mountHostRootWithoutHydrating(current, workInProgress, nextChildren, renderLanes) {
		resetHydrationState();
		workInProgress.flags |= 256;
		reconcileChildren(current, workInProgress, nextChildren, renderLanes);
		return workInProgress.child;
	}
	var SUSPENDED_MARKER = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function mountSuspenseOffscreenState(renderLanes) {
		return {
			baseLanes: renderLanes,
			cachePool: getSuspendedCache()
		};
	}
	function getRemainingWorkInPrimaryTree(current, primaryTreeDidDefer, renderLanes) {
		current = null !== current ? current.childLanes & ~renderLanes : 0;
		primaryTreeDidDefer && (current |= workInProgressDeferredLane);
		return current;
	}
	function updateSuspenseComponent(current, workInProgress, renderLanes) {
		var nextProps = workInProgress.pendingProps, showFallback = !1, didSuspend = 0 !== (workInProgress.flags & 128), JSCompiler_temp;
		(JSCompiler_temp = didSuspend) || (JSCompiler_temp = null !== current && null === current.memoizedState ? !1 : 0 !== (suspenseStackCursor.current & 2));
		JSCompiler_temp && (showFallback = !0, workInProgress.flags &= -129);
		JSCompiler_temp = 0 !== (workInProgress.flags & 32);
		workInProgress.flags &= -33;
		if (null === current) {
			if (isHydrating) {
				showFallback ? pushPrimaryTreeSuspenseHandler(workInProgress) : reuseSuspenseHandlerOnStack(workInProgress);
				(current = nextHydratableInstance) ? (current = canHydrateHydrationBoundary(current, rootOrSingletonContext), current = null !== current && "&" !== current.data ? current : null, null !== current && (workInProgress.memoizedState = {
					dehydrated: current,
					treeContext: null !== treeContextProvider ? {
						id: treeContextId,
						overflow: treeContextOverflow
					} : null,
					retryLane: 536870912,
					hydrationErrors: null
				}, renderLanes = createFiberFromDehydratedFragment(current), renderLanes.return = workInProgress, workInProgress.child = renderLanes, hydrationParentFiber = workInProgress, nextHydratableInstance = null)) : current = null;
				if (null === current) throw throwOnHydrationMismatch(workInProgress);
				isSuspenseInstanceFallback(current) ? workInProgress.lanes = 32 : workInProgress.lanes = 536870912;
				return null;
			}
			var nextPrimaryChildren = nextProps.children;
			nextProps = nextProps.fallback;
			if (showFallback) return reuseSuspenseHandlerOnStack(workInProgress), showFallback = workInProgress.mode, nextPrimaryChildren = mountWorkInProgressOffscreenFiber({
				mode: "hidden",
				children: nextPrimaryChildren
			}, showFallback), nextProps = createFiberFromFragment(nextProps, showFallback, renderLanes, null), nextPrimaryChildren.return = workInProgress, nextProps.return = workInProgress, nextPrimaryChildren.sibling = nextProps, workInProgress.child = nextPrimaryChildren, nextProps = workInProgress.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes), nextProps.childLanes = getRemainingWorkInPrimaryTree(current, JSCompiler_temp, renderLanes), workInProgress.memoizedState = SUSPENDED_MARKER, bailoutOffscreenComponent(null, nextProps);
			pushPrimaryTreeSuspenseHandler(workInProgress);
			return mountSuspensePrimaryChildren(workInProgress, nextPrimaryChildren);
		}
		var prevState = current.memoizedState;
		if (null !== prevState && (nextPrimaryChildren = prevState.dehydrated, null !== nextPrimaryChildren)) {
			if (didSuspend) workInProgress.flags & 256 ? (pushPrimaryTreeSuspenseHandler(workInProgress), workInProgress.flags &= -257, workInProgress = retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes)) : null !== workInProgress.memoizedState ? (reuseSuspenseHandlerOnStack(workInProgress), workInProgress.child = current.child, workInProgress.flags |= 128, workInProgress = null) : (reuseSuspenseHandlerOnStack(workInProgress), nextPrimaryChildren = nextProps.fallback, showFallback = workInProgress.mode, nextProps = mountWorkInProgressOffscreenFiber({
				mode: "visible",
				children: nextProps.children
			}, showFallback), nextPrimaryChildren = createFiberFromFragment(nextPrimaryChildren, showFallback, renderLanes, null), nextPrimaryChildren.flags |= 2, nextProps.return = workInProgress, nextPrimaryChildren.return = workInProgress, nextProps.sibling = nextPrimaryChildren, workInProgress.child = nextProps, reconcileChildFibers(workInProgress, current.child, null, renderLanes), nextProps = workInProgress.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes), nextProps.childLanes = getRemainingWorkInPrimaryTree(current, JSCompiler_temp, renderLanes), workInProgress.memoizedState = SUSPENDED_MARKER, workInProgress = bailoutOffscreenComponent(null, nextProps));
			else if (pushPrimaryTreeSuspenseHandler(workInProgress), isSuspenseInstanceFallback(nextPrimaryChildren)) {
				JSCompiler_temp = nextPrimaryChildren.nextSibling && nextPrimaryChildren.nextSibling.dataset;
				if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
				JSCompiler_temp = digest;
				nextProps = Error(formatProdErrorMessage(419));
				nextProps.stack = "";
				nextProps.digest = JSCompiler_temp;
				queueHydrationError({
					value: nextProps,
					source: null,
					stack: null
				});
				workInProgress = retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes);
			} else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress, renderLanes, !1), JSCompiler_temp = 0 !== (renderLanes & current.childLanes), didReceiveUpdate || JSCompiler_temp) {
				JSCompiler_temp = workInProgressRoot;
				if (null !== JSCompiler_temp && (nextProps = getBumpedLaneForHydration(JSCompiler_temp, renderLanes), 0 !== nextProps && nextProps !== prevState.retryLane)) throw prevState.retryLane = nextProps, enqueueConcurrentRenderForLane(current, nextProps), scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps), SelectiveHydrationException;
				isSuspenseInstancePending(nextPrimaryChildren) || renderDidSuspendDelayIfPossible();
				workInProgress = retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes);
			} else isSuspenseInstancePending(nextPrimaryChildren) ? (workInProgress.flags |= 192, workInProgress.child = current.child, workInProgress = null) : (current = prevState.treeContext, nextHydratableInstance = getNextHydratable(nextPrimaryChildren.nextSibling), hydrationParentFiber = workInProgress, isHydrating = !0, hydrationErrors = null, rootOrSingletonContext = !1, null !== current && restoreSuspendedTreeContext(workInProgress, current), workInProgress = mountSuspensePrimaryChildren(workInProgress, nextProps.children), workInProgress.flags |= 4096);
			return workInProgress;
		}
		if (showFallback) return reuseSuspenseHandlerOnStack(workInProgress), nextPrimaryChildren = nextProps.fallback, showFallback = workInProgress.mode, prevState = current.child, digest = prevState.sibling, nextProps = createWorkInProgress(prevState, {
			mode: "hidden",
			children: nextProps.children
		}), nextProps.subtreeFlags = prevState.subtreeFlags & 65011712, null !== digest ? nextPrimaryChildren = createWorkInProgress(digest, nextPrimaryChildren) : (nextPrimaryChildren = createFiberFromFragment(nextPrimaryChildren, showFallback, renderLanes, null), nextPrimaryChildren.flags |= 2), nextPrimaryChildren.return = workInProgress, nextProps.return = workInProgress, nextProps.sibling = nextPrimaryChildren, workInProgress.child = nextProps, bailoutOffscreenComponent(null, nextProps), nextProps = workInProgress.child, nextPrimaryChildren = current.child.memoizedState, null === nextPrimaryChildren ? nextPrimaryChildren = mountSuspenseOffscreenState(renderLanes) : (showFallback = nextPrimaryChildren.cachePool, null !== showFallback ? (prevState = CacheContext._currentValue, showFallback = showFallback.parent !== prevState ? {
			parent: prevState,
			pool: prevState
		} : showFallback) : showFallback = getSuspendedCache(), nextPrimaryChildren = {
			baseLanes: nextPrimaryChildren.baseLanes | renderLanes,
			cachePool: showFallback
		}), nextProps.memoizedState = nextPrimaryChildren, nextProps.childLanes = getRemainingWorkInPrimaryTree(current, JSCompiler_temp, renderLanes), workInProgress.memoizedState = SUSPENDED_MARKER, bailoutOffscreenComponent(current.child, nextProps);
		pushPrimaryTreeSuspenseHandler(workInProgress);
		renderLanes = current.child;
		current = renderLanes.sibling;
		renderLanes = createWorkInProgress(renderLanes, {
			mode: "visible",
			children: nextProps.children
		});
		renderLanes.return = workInProgress;
		renderLanes.sibling = null;
		null !== current && (JSCompiler_temp = workInProgress.deletions, null === JSCompiler_temp ? (workInProgress.deletions = [current], workInProgress.flags |= 16) : JSCompiler_temp.push(current));
		workInProgress.child = renderLanes;
		workInProgress.memoizedState = null;
		return renderLanes;
	}
	function mountSuspensePrimaryChildren(workInProgress, primaryChildren) {
		primaryChildren = mountWorkInProgressOffscreenFiber({
			mode: "visible",
			children: primaryChildren
		}, workInProgress.mode);
		primaryChildren.return = workInProgress;
		return workInProgress.child = primaryChildren;
	}
	function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
		offscreenProps = createFiberImplClass(22, offscreenProps, null, mode);
		offscreenProps.lanes = 0;
		return offscreenProps;
	}
	function retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes) {
		reconcileChildFibers(workInProgress, current.child, null, renderLanes);
		current = mountSuspensePrimaryChildren(workInProgress, workInProgress.pendingProps.children);
		current.flags |= 2;
		workInProgress.memoizedState = null;
		return current;
	}
	function scheduleSuspenseWorkOnFiber(fiber, renderLanes, propagationRoot) {
		fiber.lanes |= renderLanes;
		var alternate = fiber.alternate;
		null !== alternate && (alternate.lanes |= renderLanes);
		scheduleContextWorkOnParentPath(fiber.return, renderLanes, propagationRoot);
	}
	function initSuspenseListRenderState(workInProgress, isBackwards, tail, lastContentRow, tailMode, treeForkCount) {
		var renderState = workInProgress.memoizedState;
		null === renderState ? workInProgress.memoizedState = {
			isBackwards,
			rendering: null,
			renderingStartTime: 0,
			last: lastContentRow,
			tail,
			tailMode,
			treeForkCount
		} : (renderState.isBackwards = isBackwards, renderState.rendering = null, renderState.renderingStartTime = 0, renderState.last = lastContentRow, renderState.tail = tail, renderState.tailMode = tailMode, renderState.treeForkCount = treeForkCount);
	}
	function updateSuspenseListComponent(current, workInProgress, renderLanes) {
		var nextProps = workInProgress.pendingProps, revealOrder = nextProps.revealOrder, tailMode = nextProps.tail;
		nextProps = nextProps.children;
		var suspenseContext = suspenseStackCursor.current, shouldForceFallback = 0 !== (suspenseContext & 2);
		shouldForceFallback ? (suspenseContext = suspenseContext & 1 | 2, workInProgress.flags |= 128) : suspenseContext &= 1;
		push(suspenseStackCursor, suspenseContext);
		reconcileChildren(current, workInProgress, nextProps, renderLanes);
		nextProps = isHydrating ? treeForkCount : 0;
		if (!shouldForceFallback && null !== current && 0 !== (current.flags & 128)) a: for (current = workInProgress.child; null !== current;) {
			if (13 === current.tag) null !== current.memoizedState && scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
			else if (19 === current.tag) scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
			else if (null !== current.child) {
				current.child.return = current;
				current = current.child;
				continue;
			}
			if (current === workInProgress) break a;
			for (; null === current.sibling;) {
				if (null === current.return || current.return === workInProgress) break a;
				current = current.return;
			}
			current.sibling.return = current.return;
			current = current.sibling;
		}
		switch (revealOrder) {
			case "forwards":
				renderLanes = workInProgress.child;
				for (revealOrder = null; null !== renderLanes;) current = renderLanes.alternate, null !== current && null === findFirstSuspended(current) && (revealOrder = renderLanes), renderLanes = renderLanes.sibling;
				renderLanes = revealOrder;
				null === renderLanes ? (revealOrder = workInProgress.child, workInProgress.child = null) : (revealOrder = renderLanes.sibling, renderLanes.sibling = null);
				initSuspenseListRenderState(workInProgress, !1, revealOrder, renderLanes, tailMode, nextProps);
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				renderLanes = null;
				revealOrder = workInProgress.child;
				for (workInProgress.child = null; null !== revealOrder;) {
					current = revealOrder.alternate;
					if (null !== current && null === findFirstSuspended(current)) {
						workInProgress.child = revealOrder;
						break;
					}
					current = revealOrder.sibling;
					revealOrder.sibling = renderLanes;
					renderLanes = revealOrder;
					revealOrder = current;
				}
				initSuspenseListRenderState(workInProgress, !0, renderLanes, null, tailMode, nextProps);
				break;
			case "together":
				initSuspenseListRenderState(workInProgress, !1, null, null, void 0, nextProps);
				break;
			default: workInProgress.memoizedState = null;
		}
		return workInProgress.child;
	}
	function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
		null !== current && (workInProgress.dependencies = current.dependencies);
		workInProgressRootSkippedLanes |= workInProgress.lanes;
		if (0 === (renderLanes & workInProgress.childLanes)) if (null !== current) {
			if (propagateParentContextChanges(current, workInProgress, renderLanes, !1), 0 === (renderLanes & workInProgress.childLanes)) return null;
		} else return null;
		if (null !== current && workInProgress.child !== current.child) throw Error(formatProdErrorMessage(153));
		if (null !== workInProgress.child) {
			current = workInProgress.child;
			renderLanes = createWorkInProgress(current, current.pendingProps);
			workInProgress.child = renderLanes;
			for (renderLanes.return = workInProgress; null !== current.sibling;) current = current.sibling, renderLanes = renderLanes.sibling = createWorkInProgress(current, current.pendingProps), renderLanes.return = workInProgress;
			renderLanes.sibling = null;
		}
		return workInProgress.child;
	}
	function checkScheduledUpdateOrContext(current, renderLanes) {
		if (0 !== (current.lanes & renderLanes)) return !0;
		current = current.dependencies;
		return null !== current && checkIfContextChanged(current) ? !0 : !1;
	}
	function attemptEarlyBailoutIfNoScheduledUpdate(current, workInProgress, renderLanes) {
		switch (workInProgress.tag) {
			case 3:
				pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
				pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
				resetHydrationState();
				break;
			case 27:
			case 5:
				pushHostContext(workInProgress);
				break;
			case 4:
				pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
				break;
			case 10:
				pushProvider(workInProgress, workInProgress.type, workInProgress.memoizedProps.value);
				break;
			case 31:
				if (null !== workInProgress.memoizedState) return workInProgress.flags |= 128, pushDehydratedActivitySuspenseHandler(workInProgress), null;
				break;
			case 13:
				var state$102 = workInProgress.memoizedState;
				if (null !== state$102) {
					if (null !== state$102.dehydrated) return pushPrimaryTreeSuspenseHandler(workInProgress), workInProgress.flags |= 128, null;
					if (0 !== (renderLanes & workInProgress.child.childLanes)) return updateSuspenseComponent(current, workInProgress, renderLanes);
					pushPrimaryTreeSuspenseHandler(workInProgress);
					current = bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
					return null !== current ? current.sibling : null;
				}
				pushPrimaryTreeSuspenseHandler(workInProgress);
				break;
			case 19:
				var didSuspendBefore = 0 !== (current.flags & 128);
				state$102 = 0 !== (renderLanes & workInProgress.childLanes);
				state$102 || (propagateParentContextChanges(current, workInProgress, renderLanes, !1), state$102 = 0 !== (renderLanes & workInProgress.childLanes));
				if (didSuspendBefore) {
					if (state$102) return updateSuspenseListComponent(current, workInProgress, renderLanes);
					workInProgress.flags |= 128;
				}
				didSuspendBefore = workInProgress.memoizedState;
				null !== didSuspendBefore && (didSuspendBefore.rendering = null, didSuspendBefore.tail = null, didSuspendBefore.lastEffect = null);
				push(suspenseStackCursor, suspenseStackCursor.current);
				if (state$102) break;
				else return null;
			case 22: return workInProgress.lanes = 0, updateOffscreenComponent(current, workInProgress, renderLanes, workInProgress.pendingProps);
			case 24: pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
		}
		return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
	}
	function beginWork(current, workInProgress, renderLanes) {
		if (null !== current) if (current.memoizedProps !== workInProgress.pendingProps) didReceiveUpdate = !0;
		else {
			if (!checkScheduledUpdateOrContext(current, renderLanes) && 0 === (workInProgress.flags & 128)) return didReceiveUpdate = !1, attemptEarlyBailoutIfNoScheduledUpdate(current, workInProgress, renderLanes);
			didReceiveUpdate = 0 !== (current.flags & 131072) ? !0 : !1;
		}
		else didReceiveUpdate = !1, isHydrating && 0 !== (workInProgress.flags & 1048576) && pushTreeId(workInProgress, treeForkCount, workInProgress.index);
		workInProgress.lanes = 0;
		switch (workInProgress.tag) {
			case 16:
				a: {
					var props = workInProgress.pendingProps;
					current = resolveLazy(workInProgress.elementType);
					workInProgress.type = current;
					if ("function" === typeof current) shouldConstruct(current) ? (props = resolveClassComponentProps(current, props), workInProgress.tag = 1, workInProgress = updateClassComponent(null, workInProgress, current, props, renderLanes)) : (workInProgress.tag = 0, workInProgress = updateFunctionComponent(null, workInProgress, current, props, renderLanes));
					else {
						if (void 0 !== current && null !== current) {
							var $$typeof = current.$$typeof;
							if ($$typeof === REACT_FORWARD_REF_TYPE) {
								workInProgress.tag = 11;
								workInProgress = updateForwardRef(null, workInProgress, current, props, renderLanes);
								break a;
							} else if ($$typeof === REACT_MEMO_TYPE) {
								workInProgress.tag = 14;
								workInProgress = updateMemoComponent(null, workInProgress, current, props, renderLanes);
								break a;
							}
						}
						workInProgress = getComponentNameFromType(current) || current;
						throw Error(formatProdErrorMessage(306, workInProgress, ""));
					}
				}
				return workInProgress;
			case 0: return updateFunctionComponent(current, workInProgress, workInProgress.type, workInProgress.pendingProps, renderLanes);
			case 1: return props = workInProgress.type, $$typeof = resolveClassComponentProps(props, workInProgress.pendingProps), updateClassComponent(current, workInProgress, props, $$typeof, renderLanes);
			case 3:
				a: {
					pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
					if (null === current) throw Error(formatProdErrorMessage(387));
					props = workInProgress.pendingProps;
					var prevState = workInProgress.memoizedState;
					$$typeof = prevState.element;
					cloneUpdateQueue(current, workInProgress);
					processUpdateQueue(workInProgress, props, null, renderLanes);
					var nextState = workInProgress.memoizedState;
					props = nextState.cache;
					pushProvider(workInProgress, CacheContext, props);
					props !== prevState.cache && propagateContextChanges(workInProgress, [CacheContext], renderLanes, !0);
					suspendIfUpdateReadFromEntangledAsyncAction();
					props = nextState.element;
					if (prevState.isDehydrated) if (prevState = {
						element: props,
						isDehydrated: !1,
						cache: nextState.cache
					}, workInProgress.updateQueue.baseState = prevState, workInProgress.memoizedState = prevState, workInProgress.flags & 256) {
						workInProgress = mountHostRootWithoutHydrating(current, workInProgress, props, renderLanes);
						break a;
					} else if (props !== $$typeof) {
						$$typeof = createCapturedValueAtFiber(Error(formatProdErrorMessage(424)), workInProgress);
						queueHydrationError($$typeof);
						workInProgress = mountHostRootWithoutHydrating(current, workInProgress, props, renderLanes);
						break a;
					} else {
						current = workInProgress.stateNode.containerInfo;
						switch (current.nodeType) {
							case 9:
								current = current.body;
								break;
							default: current = "HTML" === current.nodeName ? current.ownerDocument.body : current;
						}
						nextHydratableInstance = getNextHydratable(current.firstChild);
						hydrationParentFiber = workInProgress;
						isHydrating = !0;
						hydrationErrors = null;
						rootOrSingletonContext = !0;
						renderLanes = mountChildFibers(workInProgress, null, props, renderLanes);
						for (workInProgress.child = renderLanes; renderLanes;) renderLanes.flags = renderLanes.flags & -3 | 4096, renderLanes = renderLanes.sibling;
					}
					else {
						resetHydrationState();
						if (props === $$typeof) {
							workInProgress = bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
							break a;
						}
						reconcileChildren(current, workInProgress, props, renderLanes);
					}
					workInProgress = workInProgress.child;
				}
				return workInProgress;
			case 26: return markRef(current, workInProgress), null === current ? (renderLanes = getResource(workInProgress.type, null, workInProgress.pendingProps, null)) ? workInProgress.memoizedState = renderLanes : isHydrating || (renderLanes = workInProgress.type, current = workInProgress.pendingProps, props = getOwnerDocumentFromRootContainer(rootInstanceStackCursor.current).createElement(renderLanes), props[internalInstanceKey] = workInProgress, props[internalPropsKey] = current, setInitialProperties(props, renderLanes, current), markNodeAsHoistable(props), workInProgress.stateNode = props) : workInProgress.memoizedState = getResource(workInProgress.type, current.memoizedProps, workInProgress.pendingProps, current.memoizedState), null;
			case 27: return pushHostContext(workInProgress), null === current && isHydrating && (props = workInProgress.stateNode = resolveSingletonInstance(workInProgress.type, workInProgress.pendingProps, rootInstanceStackCursor.current), hydrationParentFiber = workInProgress, rootOrSingletonContext = !0, $$typeof = nextHydratableInstance, isSingletonScope(workInProgress.type) ? (previousHydratableOnEnteringScopedSingleton = $$typeof, nextHydratableInstance = getNextHydratable(props.firstChild)) : nextHydratableInstance = $$typeof), reconcileChildren(current, workInProgress, workInProgress.pendingProps.children, renderLanes), markRef(current, workInProgress), null === current && (workInProgress.flags |= 4194304), workInProgress.child;
			case 5:
				if (null === current && isHydrating) {
					if ($$typeof = props = nextHydratableInstance) props = canHydrateInstance(props, workInProgress.type, workInProgress.pendingProps, rootOrSingletonContext), null !== props ? (workInProgress.stateNode = props, hydrationParentFiber = workInProgress, nextHydratableInstance = getNextHydratable(props.firstChild), rootOrSingletonContext = !1, $$typeof = !0) : $$typeof = !1;
					$$typeof || throwOnHydrationMismatch(workInProgress);
				}
				pushHostContext(workInProgress);
				$$typeof = workInProgress.type;
				prevState = workInProgress.pendingProps;
				nextState = null !== current ? current.memoizedProps : null;
				props = prevState.children;
				shouldSetTextContent($$typeof, prevState) ? props = null : null !== nextState && shouldSetTextContent($$typeof, nextState) && (workInProgress.flags |= 32);
				null !== workInProgress.memoizedState && ($$typeof = renderWithHooks(current, workInProgress, TransitionAwareHostComponent, null, null, renderLanes), HostTransitionContext._currentValue = $$typeof);
				markRef(current, workInProgress);
				reconcileChildren(current, workInProgress, props, renderLanes);
				return workInProgress.child;
			case 6:
				if (null === current && isHydrating) {
					if (current = renderLanes = nextHydratableInstance) renderLanes = canHydrateTextInstance(renderLanes, workInProgress.pendingProps, rootOrSingletonContext), null !== renderLanes ? (workInProgress.stateNode = renderLanes, hydrationParentFiber = workInProgress, nextHydratableInstance = null, current = !0) : current = !1;
					current || throwOnHydrationMismatch(workInProgress);
				}
				return null;
			case 13: return updateSuspenseComponent(current, workInProgress, renderLanes);
			case 4: return pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo), props = workInProgress.pendingProps, null === current ? workInProgress.child = reconcileChildFibers(workInProgress, null, props, renderLanes) : reconcileChildren(current, workInProgress, props, renderLanes), workInProgress.child;
			case 11: return updateForwardRef(current, workInProgress, workInProgress.type, workInProgress.pendingProps, renderLanes);
			case 7: return reconcileChildren(current, workInProgress, workInProgress.pendingProps, renderLanes), workInProgress.child;
			case 8: return reconcileChildren(current, workInProgress, workInProgress.pendingProps.children, renderLanes), workInProgress.child;
			case 12: return reconcileChildren(current, workInProgress, workInProgress.pendingProps.children, renderLanes), workInProgress.child;
			case 10: return props = workInProgress.pendingProps, pushProvider(workInProgress, workInProgress.type, props.value), reconcileChildren(current, workInProgress, props.children, renderLanes), workInProgress.child;
			case 9: return $$typeof = workInProgress.type._context, props = workInProgress.pendingProps.children, prepareToReadContext(workInProgress), $$typeof = readContext($$typeof), props = props($$typeof), workInProgress.flags |= 1, reconcileChildren(current, workInProgress, props, renderLanes), workInProgress.child;
			case 14: return updateMemoComponent(current, workInProgress, workInProgress.type, workInProgress.pendingProps, renderLanes);
			case 15: return updateSimpleMemoComponent(current, workInProgress, workInProgress.type, workInProgress.pendingProps, renderLanes);
			case 19: return updateSuspenseListComponent(current, workInProgress, renderLanes);
			case 31: return updateActivityComponent(current, workInProgress, renderLanes);
			case 22: return updateOffscreenComponent(current, workInProgress, renderLanes, workInProgress.pendingProps);
			case 24: return prepareToReadContext(workInProgress), props = readContext(CacheContext), null === current ? ($$typeof = peekCacheFromPool(), null === $$typeof && ($$typeof = workInProgressRoot, prevState = createCache(), $$typeof.pooledCache = prevState, prevState.refCount++, null !== prevState && ($$typeof.pooledCacheLanes |= renderLanes), $$typeof = prevState), workInProgress.memoizedState = {
				parent: props,
				cache: $$typeof
			}, initializeUpdateQueue(workInProgress), pushProvider(workInProgress, CacheContext, $$typeof)) : (0 !== (current.lanes & renderLanes) && (cloneUpdateQueue(current, workInProgress), processUpdateQueue(workInProgress, null, null, renderLanes), suspendIfUpdateReadFromEntangledAsyncAction()), $$typeof = current.memoizedState, prevState = workInProgress.memoizedState, $$typeof.parent !== props ? ($$typeof = {
				parent: props,
				cache: props
			}, workInProgress.memoizedState = $$typeof, 0 === workInProgress.lanes && (workInProgress.memoizedState = workInProgress.updateQueue.baseState = $$typeof), pushProvider(workInProgress, CacheContext, props)) : (props = prevState.cache, pushProvider(workInProgress, CacheContext, props), props !== $$typeof.cache && propagateContextChanges(workInProgress, [CacheContext], renderLanes, !0))), reconcileChildren(current, workInProgress, workInProgress.pendingProps.children, renderLanes), workInProgress.child;
			case 29: throw workInProgress.pendingProps;
		}
		throw Error(formatProdErrorMessage(156, workInProgress.tag));
	}
	function markUpdate(workInProgress) {
		workInProgress.flags |= 4;
	}
	function preloadInstanceAndSuspendIfNeeded(workInProgress, type, oldProps, newProps, renderLanes) {
		if (type = 0 !== (workInProgress.mode & 32)) type = !1;
		if (type) {
			if (workInProgress.flags |= 16777216, (renderLanes & 335544128) === renderLanes) if (workInProgress.stateNode.complete) workInProgress.flags |= 8192;
			else if (shouldRemainOnPreviousScreen()) workInProgress.flags |= 8192;
			else throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
		} else workInProgress.flags &= -16777217;
	}
	function preloadResourceAndSuspendIfNeeded(workInProgress, resource) {
		if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4)) workInProgress.flags &= -16777217;
		else if (workInProgress.flags |= 16777216, !preloadResource(resource)) if (shouldRemainOnPreviousScreen()) workInProgress.flags |= 8192;
		else throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
	}
	function scheduleRetryEffect(workInProgress, retryQueue) {
		null !== retryQueue && (workInProgress.flags |= 4);
		workInProgress.flags & 16384 && (retryQueue = 22 !== workInProgress.tag ? claimNextRetryLane() : 536870912, workInProgress.lanes |= retryQueue, workInProgressSuspendedRetryLanes |= retryQueue);
	}
	function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
		if (!isHydrating) switch (renderState.tailMode) {
			case "hidden":
				hasRenderedATailFallback = renderState.tail;
				for (var lastTailNode = null; null !== hasRenderedATailFallback;) null !== hasRenderedATailFallback.alternate && (lastTailNode = hasRenderedATailFallback), hasRenderedATailFallback = hasRenderedATailFallback.sibling;
				null === lastTailNode ? renderState.tail = null : lastTailNode.sibling = null;
				break;
			case "collapsed":
				lastTailNode = renderState.tail;
				for (var lastTailNode$106 = null; null !== lastTailNode;) null !== lastTailNode.alternate && (lastTailNode$106 = lastTailNode), lastTailNode = lastTailNode.sibling;
				null === lastTailNode$106 ? hasRenderedATailFallback || null === renderState.tail ? renderState.tail = null : renderState.tail.sibling = null : lastTailNode$106.sibling = null;
		}
	}
	function bubbleProperties(completedWork) {
		var didBailout = null !== completedWork.alternate && completedWork.alternate.child === completedWork.child, newChildLanes = 0, subtreeFlags = 0;
		if (didBailout) for (var child$107 = completedWork.child; null !== child$107;) newChildLanes |= child$107.lanes | child$107.childLanes, subtreeFlags |= child$107.subtreeFlags & 65011712, subtreeFlags |= child$107.flags & 65011712, child$107.return = completedWork, child$107 = child$107.sibling;
		else for (child$107 = completedWork.child; null !== child$107;) newChildLanes |= child$107.lanes | child$107.childLanes, subtreeFlags |= child$107.subtreeFlags, subtreeFlags |= child$107.flags, child$107.return = completedWork, child$107 = child$107.sibling;
		completedWork.subtreeFlags |= subtreeFlags;
		completedWork.childLanes = newChildLanes;
		return didBailout;
	}
	function completeWork(current, workInProgress, renderLanes) {
		var newProps = workInProgress.pendingProps;
		popTreeContext(workInProgress);
		switch (workInProgress.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return bubbleProperties(workInProgress), null;
			case 1: return bubbleProperties(workInProgress), null;
			case 3:
				renderLanes = workInProgress.stateNode;
				newProps = null;
				null !== current && (newProps = current.memoizedState.cache);
				workInProgress.memoizedState.cache !== newProps && (workInProgress.flags |= 2048);
				popProvider(CacheContext);
				popHostContainer();
				renderLanes.pendingContext && (renderLanes.context = renderLanes.pendingContext, renderLanes.pendingContext = null);
				if (null === current || null === current.child) popHydrationState(workInProgress) ? markUpdate(workInProgress) : null === current || current.memoizedState.isDehydrated && 0 === (workInProgress.flags & 256) || (workInProgress.flags |= 1024, upgradeHydrationErrorsToRecoverable());
				bubbleProperties(workInProgress);
				return null;
			case 26:
				var type = workInProgress.type, nextResource = workInProgress.memoizedState;
				null === current ? (markUpdate(workInProgress), null !== nextResource ? (bubbleProperties(workInProgress), preloadResourceAndSuspendIfNeeded(workInProgress, nextResource)) : (bubbleProperties(workInProgress), preloadInstanceAndSuspendIfNeeded(workInProgress, type, null, newProps, renderLanes))) : nextResource ? nextResource !== current.memoizedState ? (markUpdate(workInProgress), bubbleProperties(workInProgress), preloadResourceAndSuspendIfNeeded(workInProgress, nextResource)) : (bubbleProperties(workInProgress), workInProgress.flags &= -16777217) : (current = current.memoizedProps, current !== newProps && markUpdate(workInProgress), bubbleProperties(workInProgress), preloadInstanceAndSuspendIfNeeded(workInProgress, type, current, newProps, renderLanes));
				return null;
			case 27:
				popHostContext(workInProgress);
				renderLanes = rootInstanceStackCursor.current;
				type = workInProgress.type;
				if (null !== current && null != workInProgress.stateNode) current.memoizedProps !== newProps && markUpdate(workInProgress);
				else {
					if (!newProps) {
						if (null === workInProgress.stateNode) throw Error(formatProdErrorMessage(166));
						bubbleProperties(workInProgress);
						return null;
					}
					current = contextStackCursor.current;
					popHydrationState(workInProgress) ? prepareToHydrateHostInstance(workInProgress, current) : (current = resolveSingletonInstance(type, newProps, renderLanes), workInProgress.stateNode = current, markUpdate(workInProgress));
				}
				bubbleProperties(workInProgress);
				return null;
			case 5:
				popHostContext(workInProgress);
				type = workInProgress.type;
				if (null !== current && null != workInProgress.stateNode) current.memoizedProps !== newProps && markUpdate(workInProgress);
				else {
					if (!newProps) {
						if (null === workInProgress.stateNode) throw Error(formatProdErrorMessage(166));
						bubbleProperties(workInProgress);
						return null;
					}
					nextResource = contextStackCursor.current;
					if (popHydrationState(workInProgress)) prepareToHydrateHostInstance(workInProgress, nextResource);
					else {
						var ownerDocument = getOwnerDocumentFromRootContainer(rootInstanceStackCursor.current);
						switch (nextResource) {
							case 1:
								nextResource = ownerDocument.createElementNS("http://www.w3.org/2000/svg", type);
								break;
							case 2:
								nextResource = ownerDocument.createElementNS("http://www.w3.org/1998/Math/MathML", type);
								break;
							default: switch (type) {
								case "svg":
									nextResource = ownerDocument.createElementNS("http://www.w3.org/2000/svg", type);
									break;
								case "math":
									nextResource = ownerDocument.createElementNS("http://www.w3.org/1998/Math/MathML", type);
									break;
								case "script":
									nextResource = ownerDocument.createElement("div");
									nextResource.innerHTML = "<script><\/script>";
									nextResource = nextResource.removeChild(nextResource.firstChild);
									break;
								case "select":
									nextResource = "string" === typeof newProps.is ? ownerDocument.createElement("select", { is: newProps.is }) : ownerDocument.createElement("select");
									newProps.multiple ? nextResource.multiple = !0 : newProps.size && (nextResource.size = newProps.size);
									break;
								default: nextResource = "string" === typeof newProps.is ? ownerDocument.createElement(type, { is: newProps.is }) : ownerDocument.createElement(type);
							}
						}
						nextResource[internalInstanceKey] = workInProgress;
						nextResource[internalPropsKey] = newProps;
						a: for (ownerDocument = workInProgress.child; null !== ownerDocument;) {
							if (5 === ownerDocument.tag || 6 === ownerDocument.tag) nextResource.appendChild(ownerDocument.stateNode);
							else if (4 !== ownerDocument.tag && 27 !== ownerDocument.tag && null !== ownerDocument.child) {
								ownerDocument.child.return = ownerDocument;
								ownerDocument = ownerDocument.child;
								continue;
							}
							if (ownerDocument === workInProgress) break a;
							for (; null === ownerDocument.sibling;) {
								if (null === ownerDocument.return || ownerDocument.return === workInProgress) break a;
								ownerDocument = ownerDocument.return;
							}
							ownerDocument.sibling.return = ownerDocument.return;
							ownerDocument = ownerDocument.sibling;
						}
						workInProgress.stateNode = nextResource;
						a: switch (setInitialProperties(nextResource, type, newProps), type) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								newProps = !!newProps.autoFocus;
								break a;
							case "img":
								newProps = !0;
								break a;
							default: newProps = !1;
						}
						newProps && markUpdate(workInProgress);
					}
				}
				bubbleProperties(workInProgress);
				preloadInstanceAndSuspendIfNeeded(workInProgress, workInProgress.type, null === current ? null : current.memoizedProps, workInProgress.pendingProps, renderLanes);
				return null;
			case 6:
				if (current && null != workInProgress.stateNode) current.memoizedProps !== newProps && markUpdate(workInProgress);
				else {
					if ("string" !== typeof newProps && null === workInProgress.stateNode) throw Error(formatProdErrorMessage(166));
					current = rootInstanceStackCursor.current;
					if (popHydrationState(workInProgress)) {
						current = workInProgress.stateNode;
						renderLanes = workInProgress.memoizedProps;
						newProps = null;
						type = hydrationParentFiber;
						if (null !== type) switch (type.tag) {
							case 27:
							case 5: newProps = type.memoizedProps;
						}
						current[internalInstanceKey] = workInProgress;
						current = current.nodeValue === renderLanes || null !== newProps && !0 === newProps.suppressHydrationWarning || checkForUnmatchedText(current.nodeValue, renderLanes) ? !0 : !1;
						current || throwOnHydrationMismatch(workInProgress, !0);
					} else current = getOwnerDocumentFromRootContainer(current).createTextNode(newProps), current[internalInstanceKey] = workInProgress, workInProgress.stateNode = current;
				}
				bubbleProperties(workInProgress);
				return null;
			case 31:
				renderLanes = workInProgress.memoizedState;
				if (null === current || null !== current.memoizedState) {
					newProps = popHydrationState(workInProgress);
					if (null !== renderLanes) {
						if (null === current) {
							if (!newProps) throw Error(formatProdErrorMessage(318));
							current = workInProgress.memoizedState;
							current = null !== current ? current.dehydrated : null;
							if (!current) throw Error(formatProdErrorMessage(557));
							current[internalInstanceKey] = workInProgress;
						} else resetHydrationState(), 0 === (workInProgress.flags & 128) && (workInProgress.memoizedState = null), workInProgress.flags |= 4;
						bubbleProperties(workInProgress);
						current = !1;
					} else renderLanes = upgradeHydrationErrorsToRecoverable(), null !== current && null !== current.memoizedState && (current.memoizedState.hydrationErrors = renderLanes), current = !0;
					if (!current) {
						if (workInProgress.flags & 256) return popSuspenseHandler(workInProgress), workInProgress;
						popSuspenseHandler(workInProgress);
						return null;
					}
					if (0 !== (workInProgress.flags & 128)) throw Error(formatProdErrorMessage(558));
				}
				bubbleProperties(workInProgress);
				return null;
			case 13:
				newProps = workInProgress.memoizedState;
				if (null === current || null !== current.memoizedState && null !== current.memoizedState.dehydrated) {
					type = popHydrationState(workInProgress);
					if (null !== newProps && null !== newProps.dehydrated) {
						if (null === current) {
							if (!type) throw Error(formatProdErrorMessage(318));
							type = workInProgress.memoizedState;
							type = null !== type ? type.dehydrated : null;
							if (!type) throw Error(formatProdErrorMessage(317));
							type[internalInstanceKey] = workInProgress;
						} else resetHydrationState(), 0 === (workInProgress.flags & 128) && (workInProgress.memoizedState = null), workInProgress.flags |= 4;
						bubbleProperties(workInProgress);
						type = !1;
					} else type = upgradeHydrationErrorsToRecoverable(), null !== current && null !== current.memoizedState && (current.memoizedState.hydrationErrors = type), type = !0;
					if (!type) {
						if (workInProgress.flags & 256) return popSuspenseHandler(workInProgress), workInProgress;
						popSuspenseHandler(workInProgress);
						return null;
					}
				}
				popSuspenseHandler(workInProgress);
				if (0 !== (workInProgress.flags & 128)) return workInProgress.lanes = renderLanes, workInProgress;
				renderLanes = null !== newProps;
				current = null !== current && null !== current.memoizedState;
				renderLanes && (newProps = workInProgress.child, type = null, null !== newProps.alternate && null !== newProps.alternate.memoizedState && null !== newProps.alternate.memoizedState.cachePool && (type = newProps.alternate.memoizedState.cachePool.pool), nextResource = null, null !== newProps.memoizedState && null !== newProps.memoizedState.cachePool && (nextResource = newProps.memoizedState.cachePool.pool), nextResource !== type && (newProps.flags |= 2048));
				renderLanes !== current && renderLanes && (workInProgress.child.flags |= 8192);
				scheduleRetryEffect(workInProgress, workInProgress.updateQueue);
				bubbleProperties(workInProgress);
				return null;
			case 4: return popHostContainer(), null === current && listenToAllSupportedEvents(workInProgress.stateNode.containerInfo), bubbleProperties(workInProgress), null;
			case 10: return popProvider(workInProgress.type), bubbleProperties(workInProgress), null;
			case 19:
				pop(suspenseStackCursor);
				newProps = workInProgress.memoizedState;
				if (null === newProps) return bubbleProperties(workInProgress), null;
				type = 0 !== (workInProgress.flags & 128);
				nextResource = newProps.rendering;
				if (null === nextResource) if (type) cutOffTailIfNeeded(newProps, !1);
				else {
					if (0 !== workInProgressRootExitStatus || null !== current && 0 !== (current.flags & 128)) for (current = workInProgress.child; null !== current;) {
						nextResource = findFirstSuspended(current);
						if (null !== nextResource) {
							workInProgress.flags |= 128;
							cutOffTailIfNeeded(newProps, !1);
							current = nextResource.updateQueue;
							workInProgress.updateQueue = current;
							scheduleRetryEffect(workInProgress, current);
							workInProgress.subtreeFlags = 0;
							current = renderLanes;
							for (renderLanes = workInProgress.child; null !== renderLanes;) resetWorkInProgress(renderLanes, current), renderLanes = renderLanes.sibling;
							push(suspenseStackCursor, suspenseStackCursor.current & 1 | 2);
							isHydrating && pushTreeFork(workInProgress, newProps.treeForkCount);
							return workInProgress.child;
						}
						current = current.sibling;
					}
					null !== newProps.tail && now() > workInProgressRootRenderTargetTime && (workInProgress.flags |= 128, type = !0, cutOffTailIfNeeded(newProps, !1), workInProgress.lanes = 4194304);
				}
				else {
					if (!type) if (current = findFirstSuspended(nextResource), null !== current) {
						if (workInProgress.flags |= 128, type = !0, current = current.updateQueue, workInProgress.updateQueue = current, scheduleRetryEffect(workInProgress, current), cutOffTailIfNeeded(newProps, !0), null === newProps.tail && "hidden" === newProps.tailMode && !nextResource.alternate && !isHydrating) return bubbleProperties(workInProgress), null;
					} else 2 * now() - newProps.renderingStartTime > workInProgressRootRenderTargetTime && 536870912 !== renderLanes && (workInProgress.flags |= 128, type = !0, cutOffTailIfNeeded(newProps, !1), workInProgress.lanes = 4194304);
					newProps.isBackwards ? (nextResource.sibling = workInProgress.child, workInProgress.child = nextResource) : (current = newProps.last, null !== current ? current.sibling = nextResource : workInProgress.child = nextResource, newProps.last = nextResource);
				}
				if (null !== newProps.tail) return current = newProps.tail, newProps.rendering = current, newProps.tail = current.sibling, newProps.renderingStartTime = now(), current.sibling = null, renderLanes = suspenseStackCursor.current, push(suspenseStackCursor, type ? renderLanes & 1 | 2 : renderLanes & 1), isHydrating && pushTreeFork(workInProgress, newProps.treeForkCount), current;
				bubbleProperties(workInProgress);
				return null;
			case 22:
			case 23: return popSuspenseHandler(workInProgress), popHiddenContext(), newProps = null !== workInProgress.memoizedState, null !== current ? null !== current.memoizedState !== newProps && (workInProgress.flags |= 8192) : newProps && (workInProgress.flags |= 8192), newProps ? 0 !== (renderLanes & 536870912) && 0 === (workInProgress.flags & 128) && (bubbleProperties(workInProgress), workInProgress.subtreeFlags & 6 && (workInProgress.flags |= 8192)) : bubbleProperties(workInProgress), renderLanes = workInProgress.updateQueue, null !== renderLanes && scheduleRetryEffect(workInProgress, renderLanes.retryQueue), renderLanes = null, null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (renderLanes = current.memoizedState.cachePool.pool), newProps = null, null !== workInProgress.memoizedState && null !== workInProgress.memoizedState.cachePool && (newProps = workInProgress.memoizedState.cachePool.pool), newProps !== renderLanes && (workInProgress.flags |= 2048), null !== current && pop(resumedCache), null;
			case 24: return renderLanes = null, null !== current && (renderLanes = current.memoizedState.cache), workInProgress.memoizedState.cache !== renderLanes && (workInProgress.flags |= 2048), popProvider(CacheContext), bubbleProperties(workInProgress), null;
			case 25: return null;
			case 30: return null;
		}
		throw Error(formatProdErrorMessage(156, workInProgress.tag));
	}
	function unwindWork(current, workInProgress) {
		popTreeContext(workInProgress);
		switch (workInProgress.tag) {
			case 1: return current = workInProgress.flags, current & 65536 ? (workInProgress.flags = current & -65537 | 128, workInProgress) : null;
			case 3: return popProvider(CacheContext), popHostContainer(), current = workInProgress.flags, 0 !== (current & 65536) && 0 === (current & 128) ? (workInProgress.flags = current & -65537 | 128, workInProgress) : null;
			case 26:
			case 27:
			case 5: return popHostContext(workInProgress), null;
			case 31:
				if (null !== workInProgress.memoizedState) {
					popSuspenseHandler(workInProgress);
					if (null === workInProgress.alternate) throw Error(formatProdErrorMessage(340));
					resetHydrationState();
				}
				current = workInProgress.flags;
				return current & 65536 ? (workInProgress.flags = current & -65537 | 128, workInProgress) : null;
			case 13:
				popSuspenseHandler(workInProgress);
				current = workInProgress.memoizedState;
				if (null !== current && null !== current.dehydrated) {
					if (null === workInProgress.alternate) throw Error(formatProdErrorMessage(340));
					resetHydrationState();
				}
				current = workInProgress.flags;
				return current & 65536 ? (workInProgress.flags = current & -65537 | 128, workInProgress) : null;
			case 19: return pop(suspenseStackCursor), null;
			case 4: return popHostContainer(), null;
			case 10: return popProvider(workInProgress.type), null;
			case 22:
			case 23: return popSuspenseHandler(workInProgress), popHiddenContext(), null !== current && pop(resumedCache), current = workInProgress.flags, current & 65536 ? (workInProgress.flags = current & -65537 | 128, workInProgress) : null;
			case 24: return popProvider(CacheContext), null;
			case 25: return null;
			default: return null;
		}
	}
	function unwindInterruptedWork(current, interruptedWork) {
		popTreeContext(interruptedWork);
		switch (interruptedWork.tag) {
			case 3:
				popProvider(CacheContext);
				popHostContainer();
				break;
			case 26:
			case 27:
			case 5:
				popHostContext(interruptedWork);
				break;
			case 4:
				popHostContainer();
				break;
			case 31:
				null !== interruptedWork.memoizedState && popSuspenseHandler(interruptedWork);
				break;
			case 13:
				popSuspenseHandler(interruptedWork);
				break;
			case 19:
				pop(suspenseStackCursor);
				break;
			case 10:
				popProvider(interruptedWork.type);
				break;
			case 22:
			case 23:
				popSuspenseHandler(interruptedWork);
				popHiddenContext();
				null !== current && pop(resumedCache);
				break;
			case 24: popProvider(CacheContext);
		}
	}
	function commitHookEffectListMount(flags, finishedWork) {
		try {
			var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
			if (null !== lastEffect) {
				var firstEffect = lastEffect.next;
				updateQueue = firstEffect;
				do {
					if ((updateQueue.tag & flags) === flags) {
						lastEffect = void 0;
						var create = updateQueue.create, inst = updateQueue.inst;
						lastEffect = create();
						inst.destroy = lastEffect;
					}
					updateQueue = updateQueue.next;
				} while (updateQueue !== firstEffect);
			}
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	function commitHookEffectListUnmount(flags, finishedWork, nearestMountedAncestor$jscomp$0) {
		try {
			var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
			if (null !== lastEffect) {
				var firstEffect = lastEffect.next;
				updateQueue = firstEffect;
				do {
					if ((updateQueue.tag & flags) === flags) {
						var inst = updateQueue.inst, destroy = inst.destroy;
						if (void 0 !== destroy) {
							inst.destroy = void 0;
							lastEffect = finishedWork;
							var nearestMountedAncestor = nearestMountedAncestor$jscomp$0, destroy_ = destroy;
							try {
								destroy_();
							} catch (error) {
								captureCommitPhaseError(lastEffect, nearestMountedAncestor, error);
							}
						}
					}
					updateQueue = updateQueue.next;
				} while (updateQueue !== firstEffect);
			}
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	function commitClassCallbacks(finishedWork) {
		var updateQueue = finishedWork.updateQueue;
		if (null !== updateQueue) {
			var instance = finishedWork.stateNode;
			try {
				commitCallbacks(updateQueue, instance);
			} catch (error) {
				captureCommitPhaseError(finishedWork, finishedWork.return, error);
			}
		}
	}
	function safelyCallComponentWillUnmount(current, nearestMountedAncestor, instance) {
		instance.props = resolveClassComponentProps(current.type, current.memoizedProps);
		instance.state = current.memoizedState;
		try {
			instance.componentWillUnmount();
		} catch (error) {
			captureCommitPhaseError(current, nearestMountedAncestor, error);
		}
	}
	function safelyAttachRef(current, nearestMountedAncestor) {
		try {
			var ref = current.ref;
			if (null !== ref) {
				switch (current.tag) {
					case 26:
					case 27:
					case 5:
						var instanceToUse = current.stateNode;
						break;
					case 30:
						instanceToUse = current.stateNode;
						break;
					default: instanceToUse = current.stateNode;
				}
				"function" === typeof ref ? current.refCleanup = ref(instanceToUse) : ref.current = instanceToUse;
			}
		} catch (error) {
			captureCommitPhaseError(current, nearestMountedAncestor, error);
		}
	}
	function safelyDetachRef(current, nearestMountedAncestor) {
		var ref = current.ref, refCleanup = current.refCleanup;
		if (null !== ref) if ("function" === typeof refCleanup) try {
			refCleanup();
		} catch (error) {
			captureCommitPhaseError(current, nearestMountedAncestor, error);
		} finally {
			current.refCleanup = null, current = current.alternate, null != current && (current.refCleanup = null);
		}
		else if ("function" === typeof ref) try {
			ref(null);
		} catch (error$140) {
			captureCommitPhaseError(current, nearestMountedAncestor, error$140);
		}
		else ref.current = null;
	}
	function commitHostMount(finishedWork) {
		var type = finishedWork.type, props = finishedWork.memoizedProps, instance = finishedWork.stateNode;
		try {
			a: switch (type) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					props.autoFocus && instance.focus();
					break a;
				case "img": props.src ? instance.src = props.src : props.srcSet && (instance.srcset = props.srcSet);
			}
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	function commitHostUpdate(finishedWork, newProps, oldProps) {
		try {
			var domElement = finishedWork.stateNode;
			updateProperties(domElement, finishedWork.type, oldProps, newProps);
			domElement[internalPropsKey] = newProps;
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	function isHostParent(fiber) {
		return 5 === fiber.tag || 3 === fiber.tag || 26 === fiber.tag || 27 === fiber.tag && isSingletonScope(fiber.type) || 4 === fiber.tag;
	}
	function getHostSibling(fiber) {
		a: for (;;) {
			for (; null === fiber.sibling;) {
				if (null === fiber.return || isHostParent(fiber.return)) return null;
				fiber = fiber.return;
			}
			fiber.sibling.return = fiber.return;
			for (fiber = fiber.sibling; 5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag;) {
				if (27 === fiber.tag && isSingletonScope(fiber.type)) continue a;
				if (fiber.flags & 2) continue a;
				if (null === fiber.child || 4 === fiber.tag) continue a;
				else fiber.child.return = fiber, fiber = fiber.child;
			}
			if (!(fiber.flags & 2)) return fiber.stateNode;
		}
	}
	function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
		var tag = node.tag;
		if (5 === tag || 6 === tag) node = node.stateNode, before ? (9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent).insertBefore(node, before) : (before = 9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent, before.appendChild(node), parent = parent._reactRootContainer, null !== parent && void 0 !== parent || null !== before.onclick || (before.onclick = noop$1));
		else if (4 !== tag && (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode, before = null), node = node.child, null !== node)) for (insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling; null !== node;) insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling;
	}
	function insertOrAppendPlacementNode(node, before, parent) {
		var tag = node.tag;
		if (5 === tag || 6 === tag) node = node.stateNode, before ? parent.insertBefore(node, before) : parent.appendChild(node);
		else if (4 !== tag && (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode), node = node.child, null !== node)) for (insertOrAppendPlacementNode(node, before, parent), node = node.sibling; null !== node;) insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
	}
	function commitHostSingletonAcquisition(finishedWork) {
		var singleton = finishedWork.stateNode, props = finishedWork.memoizedProps;
		try {
			for (var type = finishedWork.type, attributes = singleton.attributes; attributes.length;) singleton.removeAttributeNode(attributes[0]);
			setInitialProperties(singleton, type, props);
			singleton[internalInstanceKey] = finishedWork;
			singleton[internalPropsKey] = props;
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	var offscreenSubtreeIsHidden = !1;
	var offscreenSubtreeWasHidden = !1;
	var needsFormReset = !1;
	var PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set;
	var nextEffect = null;
	function commitBeforeMutationEffects(root, firstChild) {
		root = root.containerInfo;
		eventsEnabled = _enabled;
		root = getActiveElementDeep(root);
		if (hasSelectionCapabilities(root)) {
			if ("selectionStart" in root) var JSCompiler_temp = {
				start: root.selectionStart,
				end: root.selectionEnd
			};
			else a: {
				JSCompiler_temp = (JSCompiler_temp = root.ownerDocument) && JSCompiler_temp.defaultView || window;
				var selection = JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
				if (selection && 0 !== selection.rangeCount) {
					JSCompiler_temp = selection.anchorNode;
					var anchorOffset = selection.anchorOffset, focusNode = selection.focusNode;
					selection = selection.focusOffset;
					try {
						JSCompiler_temp.nodeType, focusNode.nodeType;
					} catch (e$20) {
						JSCompiler_temp = null;
						break a;
					}
					var length = 0, start = -1, end = -1, indexWithinAnchor = 0, indexWithinFocus = 0, node = root, parentNode = null;
					b: for (;;) {
						for (var next;;) {
							node !== JSCompiler_temp || 0 !== anchorOffset && 3 !== node.nodeType || (start = length + anchorOffset);
							node !== focusNode || 0 !== selection && 3 !== node.nodeType || (end = length + selection);
							3 === node.nodeType && (length += node.nodeValue.length);
							if (null === (next = node.firstChild)) break;
							parentNode = node;
							node = next;
						}
						for (;;) {
							if (node === root) break b;
							parentNode === JSCompiler_temp && ++indexWithinAnchor === anchorOffset && (start = length);
							parentNode === focusNode && ++indexWithinFocus === selection && (end = length);
							if (null !== (next = node.nextSibling)) break;
							node = parentNode;
							parentNode = node.parentNode;
						}
						node = next;
					}
					JSCompiler_temp = -1 === start || -1 === end ? null : {
						start,
						end
					};
				} else JSCompiler_temp = null;
			}
			JSCompiler_temp = JSCompiler_temp || {
				start: 0,
				end: 0
			};
		} else JSCompiler_temp = null;
		selectionInformation = {
			focusedElem: root,
			selectionRange: JSCompiler_temp
		};
		_enabled = !1;
		for (nextEffect = firstChild; null !== nextEffect;) if (firstChild = nextEffect, root = firstChild.child, 0 !== (firstChild.subtreeFlags & 1028) && null !== root) root.return = firstChild, nextEffect = root;
		else for (; null !== nextEffect;) {
			firstChild = nextEffect;
			focusNode = firstChild.alternate;
			root = firstChild.flags;
			switch (firstChild.tag) {
				case 0:
					if (0 !== (root & 4) && (root = firstChild.updateQueue, root = null !== root ? root.events : null, null !== root)) for (JSCompiler_temp = 0; JSCompiler_temp < root.length; JSCompiler_temp++) anchorOffset = root[JSCompiler_temp], anchorOffset.ref.impl = anchorOffset.nextImpl;
					break;
				case 11:
				case 15: break;
				case 1:
					if (0 !== (root & 1024) && null !== focusNode) {
						root = void 0;
						JSCompiler_temp = firstChild;
						anchorOffset = focusNode.memoizedProps;
						focusNode = focusNode.memoizedState;
						selection = JSCompiler_temp.stateNode;
						try {
							var resolvedPrevProps = resolveClassComponentProps(JSCompiler_temp.type, anchorOffset);
							root = selection.getSnapshotBeforeUpdate(resolvedPrevProps, focusNode);
							selection.__reactInternalSnapshotBeforeUpdate = root;
						} catch (error) {
							captureCommitPhaseError(JSCompiler_temp, JSCompiler_temp.return, error);
						}
					}
					break;
				case 3:
					if (0 !== (root & 1024)) {
						if (root = firstChild.stateNode.containerInfo, JSCompiler_temp = root.nodeType, 9 === JSCompiler_temp) clearContainerSparingly(root);
						else if (1 === JSCompiler_temp) switch (root.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								clearContainerSparingly(root);
								break;
							default: root.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				default: if (0 !== (root & 1024)) throw Error(formatProdErrorMessage(163));
			}
			root = firstChild.sibling;
			if (null !== root) {
				root.return = firstChild.return;
				nextEffect = root;
				break;
			}
			nextEffect = firstChild.return;
		}
	}
	function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
		var flags = finishedWork.flags;
		switch (finishedWork.tag) {
			case 0:
			case 11:
			case 15:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				flags & 4 && commitHookEffectListMount(5, finishedWork);
				break;
			case 1:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				if (flags & 4) if (finishedRoot = finishedWork.stateNode, null === current) try {
					finishedRoot.componentDidMount();
				} catch (error) {
					captureCommitPhaseError(finishedWork, finishedWork.return, error);
				}
				else {
					var prevProps = resolveClassComponentProps(finishedWork.type, current.memoizedProps);
					current = current.memoizedState;
					try {
						finishedRoot.componentDidUpdate(prevProps, current, finishedRoot.__reactInternalSnapshotBeforeUpdate);
					} catch (error$139) {
						captureCommitPhaseError(finishedWork, finishedWork.return, error$139);
					}
				}
				flags & 64 && commitClassCallbacks(finishedWork);
				flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
				break;
			case 3:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				if (flags & 64 && (finishedRoot = finishedWork.updateQueue, null !== finishedRoot)) {
					current = null;
					if (null !== finishedWork.child) switch (finishedWork.child.tag) {
						case 27:
						case 5:
							current = finishedWork.child.stateNode;
							break;
						case 1: current = finishedWork.child.stateNode;
					}
					try {
						commitCallbacks(finishedRoot, current);
					} catch (error) {
						captureCommitPhaseError(finishedWork, finishedWork.return, error);
					}
				}
				break;
			case 27: null === current && flags & 4 && commitHostSingletonAcquisition(finishedWork);
			case 26:
			case 5:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				null === current && flags & 4 && commitHostMount(finishedWork);
				flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
				break;
			case 12:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				break;
			case 31:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
				break;
			case 13:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
				flags & 64 && (finishedRoot = finishedWork.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot && (finishedWork = retryDehydratedSuspenseBoundary.bind(null, finishedWork), registerSuspenseInstanceRetry(finishedRoot, finishedWork))));
				break;
			case 22:
				flags = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
				if (!flags) {
					current = null !== current && null !== current.memoizedState || offscreenSubtreeWasHidden;
					prevProps = offscreenSubtreeIsHidden;
					var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
					offscreenSubtreeIsHidden = flags;
					(offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden ? recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, 0 !== (finishedWork.subtreeFlags & 8772)) : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
					offscreenSubtreeIsHidden = prevProps;
					offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
				}
				break;
			case 30: break;
			default: recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
		}
	}
	function detachFiberAfterEffects(fiber) {
		var alternate = fiber.alternate;
		null !== alternate && (fiber.alternate = null, detachFiberAfterEffects(alternate));
		fiber.child = null;
		fiber.deletions = null;
		fiber.sibling = null;
		5 === fiber.tag && (alternate = fiber.stateNode, null !== alternate && detachDeletedInstance(alternate));
		fiber.stateNode = null;
		fiber.return = null;
		fiber.dependencies = null;
		fiber.memoizedProps = null;
		fiber.memoizedState = null;
		fiber.pendingProps = null;
		fiber.stateNode = null;
		fiber.updateQueue = null;
	}
	var hostParent = null;
	var hostParentIsContainer = !1;
	function recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, parent) {
		for (parent = parent.child; null !== parent;) commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent), parent = parent.sibling;
	}
	function commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, deletedFiber) {
		if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount) try {
			injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
		} catch (err) {}
		switch (deletedFiber.tag) {
			case 26:
				offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				deletedFiber.memoizedState ? deletedFiber.memoizedState.count-- : deletedFiber.stateNode && (deletedFiber = deletedFiber.stateNode, deletedFiber.parentNode.removeChild(deletedFiber));
				break;
			case 27:
				offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
				var prevHostParent = hostParent, prevHostParentIsContainer = hostParentIsContainer;
				isSingletonScope(deletedFiber.type) && (hostParent = deletedFiber.stateNode, hostParentIsContainer = !1);
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				releaseSingletonInstance(deletedFiber.stateNode);
				hostParent = prevHostParent;
				hostParentIsContainer = prevHostParentIsContainer;
				break;
			case 5: offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
			case 6:
				prevHostParent = hostParent;
				prevHostParentIsContainer = hostParentIsContainer;
				hostParent = null;
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				hostParent = prevHostParent;
				hostParentIsContainer = prevHostParentIsContainer;
				if (null !== hostParent) if (hostParentIsContainer) try {
					(9 === hostParent.nodeType ? hostParent.body : "HTML" === hostParent.nodeName ? hostParent.ownerDocument.body : hostParent).removeChild(deletedFiber.stateNode);
				} catch (error) {
					captureCommitPhaseError(deletedFiber, nearestMountedAncestor, error);
				}
				else try {
					hostParent.removeChild(deletedFiber.stateNode);
				} catch (error) {
					captureCommitPhaseError(deletedFiber, nearestMountedAncestor, error);
				}
				break;
			case 18:
				null !== hostParent && (hostParentIsContainer ? (finishedRoot = hostParent, clearHydrationBoundary(9 === finishedRoot.nodeType ? finishedRoot.body : "HTML" === finishedRoot.nodeName ? finishedRoot.ownerDocument.body : finishedRoot, deletedFiber.stateNode), retryIfBlockedOn(finishedRoot)) : clearHydrationBoundary(hostParent, deletedFiber.stateNode));
				break;
			case 4:
				prevHostParent = hostParent;
				prevHostParentIsContainer = hostParentIsContainer;
				hostParent = deletedFiber.stateNode.containerInfo;
				hostParentIsContainer = !0;
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				hostParent = prevHostParent;
				hostParentIsContainer = prevHostParentIsContainer;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
				offscreenSubtreeWasHidden || commitHookEffectListUnmount(4, deletedFiber, nearestMountedAncestor);
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				break;
			case 1:
				offscreenSubtreeWasHidden || (safelyDetachRef(deletedFiber, nearestMountedAncestor), prevHostParent = deletedFiber.stateNode, "function" === typeof prevHostParent.componentWillUnmount && safelyCallComponentWillUnmount(deletedFiber, nearestMountedAncestor, prevHostParent));
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				break;
			case 21:
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				break;
			case 22:
				offscreenSubtreeWasHidden = (prevHostParent = offscreenSubtreeWasHidden) || null !== deletedFiber.memoizedState;
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				offscreenSubtreeWasHidden = prevHostParent;
				break;
			default: recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
		}
	}
	function commitActivityHydrationCallbacks(finishedRoot, finishedWork) {
		if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot))) {
			finishedRoot = finishedRoot.dehydrated;
			try {
				retryIfBlockedOn(finishedRoot);
			} catch (error) {
				captureCommitPhaseError(finishedWork, finishedWork.return, error);
			}
		}
	}
	function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
		if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot)))) try {
			retryIfBlockedOn(finishedRoot);
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	function getRetryCache(finishedWork) {
		switch (finishedWork.tag) {
			case 31:
			case 13:
			case 19:
				var retryCache = finishedWork.stateNode;
				null === retryCache && (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
				return retryCache;
			case 22: return finishedWork = finishedWork.stateNode, retryCache = finishedWork._retryCache, null === retryCache && (retryCache = finishedWork._retryCache = new PossiblyWeakSet()), retryCache;
			default: throw Error(formatProdErrorMessage(435, finishedWork.tag));
		}
	}
	function attachSuspenseRetryListeners(finishedWork, wakeables) {
		var retryCache = getRetryCache(finishedWork);
		wakeables.forEach(function(wakeable) {
			if (!retryCache.has(wakeable)) {
				retryCache.add(wakeable);
				var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
				wakeable.then(retry, retry);
			}
		});
	}
	function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
		var deletions = parentFiber.deletions;
		if (null !== deletions) for (var i = 0; i < deletions.length; i++) {
			var childToDelete = deletions[i], root = root$jscomp$0, returnFiber = parentFiber, parent = returnFiber;
			a: for (; null !== parent;) {
				switch (parent.tag) {
					case 27:
						if (isSingletonScope(parent.type)) {
							hostParent = parent.stateNode;
							hostParentIsContainer = !1;
							break a;
						}
						break;
					case 5:
						hostParent = parent.stateNode;
						hostParentIsContainer = !1;
						break a;
					case 3:
					case 4:
						hostParent = parent.stateNode.containerInfo;
						hostParentIsContainer = !0;
						break a;
				}
				parent = parent.return;
			}
			if (null === hostParent) throw Error(formatProdErrorMessage(160));
			commitDeletionEffectsOnFiber(root, returnFiber, childToDelete);
			hostParent = null;
			hostParentIsContainer = !1;
			root = childToDelete.alternate;
			null !== root && (root.return = null);
			childToDelete.return = null;
		}
		if (parentFiber.subtreeFlags & 13886) for (parentFiber = parentFiber.child; null !== parentFiber;) commitMutationEffectsOnFiber(parentFiber, root$jscomp$0), parentFiber = parentFiber.sibling;
	}
	var currentHoistableRoot = null;
	function commitMutationEffectsOnFiber(finishedWork, root) {
		var current = finishedWork.alternate, flags = finishedWork.flags;
		switch (finishedWork.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 4 && (commitHookEffectListUnmount(3, finishedWork, finishedWork.return), commitHookEffectListMount(3, finishedWork), commitHookEffectListUnmount(5, finishedWork, finishedWork.return));
				break;
			case 1:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
				flags & 64 && offscreenSubtreeIsHidden && (finishedWork = finishedWork.updateQueue, null !== finishedWork && (flags = finishedWork.callbacks, null !== flags && (current = finishedWork.shared.hiddenCallbacks, finishedWork.shared.hiddenCallbacks = null === current ? flags : current.concat(flags))));
				break;
			case 26:
				var hoistableRoot = currentHoistableRoot;
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
				if (flags & 4) {
					var currentResource = null !== current ? current.memoizedState : null;
					flags = finishedWork.memoizedState;
					if (null === current) if (null === flags) if (null === finishedWork.stateNode) {
						a: {
							flags = finishedWork.type;
							current = finishedWork.memoizedProps;
							hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
							b: switch (flags) {
								case "title":
									currentResource = hoistableRoot.getElementsByTagName("title")[0];
									if (!currentResource || currentResource[internalHoistableMarker] || currentResource[internalInstanceKey] || "http://www.w3.org/2000/svg" === currentResource.namespaceURI || currentResource.hasAttribute("itemprop")) currentResource = hoistableRoot.createElement(flags), hoistableRoot.head.insertBefore(currentResource, hoistableRoot.querySelector("head > title"));
									setInitialProperties(currentResource, flags, current);
									currentResource[internalInstanceKey] = finishedWork;
									markNodeAsHoistable(currentResource);
									flags = currentResource;
									break a;
								case "link":
									var maybeNodes = getHydratableHoistableCache("link", "href", hoistableRoot).get(flags + (current.href || ""));
									if (maybeNodes) {
										for (var i = 0; i < maybeNodes.length; i++) if (currentResource = maybeNodes[i], currentResource.getAttribute("href") === (null == current.href || "" === current.href ? null : current.href) && currentResource.getAttribute("rel") === (null == current.rel ? null : current.rel) && currentResource.getAttribute("title") === (null == current.title ? null : current.title) && currentResource.getAttribute("crossorigin") === (null == current.crossOrigin ? null : current.crossOrigin)) {
											maybeNodes.splice(i, 1);
											break b;
										}
									}
									currentResource = hoistableRoot.createElement(flags);
									setInitialProperties(currentResource, flags, current);
									hoistableRoot.head.appendChild(currentResource);
									break;
								case "meta":
									if (maybeNodes = getHydratableHoistableCache("meta", "content", hoistableRoot).get(flags + (current.content || ""))) {
										for (i = 0; i < maybeNodes.length; i++) if (currentResource = maybeNodes[i], currentResource.getAttribute("content") === (null == current.content ? null : "" + current.content) && currentResource.getAttribute("name") === (null == current.name ? null : current.name) && currentResource.getAttribute("property") === (null == current.property ? null : current.property) && currentResource.getAttribute("http-equiv") === (null == current.httpEquiv ? null : current.httpEquiv) && currentResource.getAttribute("charset") === (null == current.charSet ? null : current.charSet)) {
											maybeNodes.splice(i, 1);
											break b;
										}
									}
									currentResource = hoistableRoot.createElement(flags);
									setInitialProperties(currentResource, flags, current);
									hoistableRoot.head.appendChild(currentResource);
									break;
								default: throw Error(formatProdErrorMessage(468, flags));
							}
							currentResource[internalInstanceKey] = finishedWork;
							markNodeAsHoistable(currentResource);
							flags = currentResource;
						}
						finishedWork.stateNode = flags;
					} else mountHoistable(hoistableRoot, finishedWork.type, finishedWork.stateNode);
					else finishedWork.stateNode = acquireResource(hoistableRoot, flags, finishedWork.memoizedProps);
					else currentResource !== flags ? (null === currentResource ? null !== current.stateNode && (current = current.stateNode, current.parentNode.removeChild(current)) : currentResource.count--, null === flags ? mountHoistable(hoistableRoot, finishedWork.type, finishedWork.stateNode) : acquireResource(hoistableRoot, flags, finishedWork.memoizedProps)) : null === flags && null !== finishedWork.stateNode && commitHostUpdate(finishedWork, finishedWork.memoizedProps, current.memoizedProps);
				}
				break;
			case 27:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
				null !== current && flags & 4 && commitHostUpdate(finishedWork, finishedWork.memoizedProps, current.memoizedProps);
				break;
			case 5:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
				if (finishedWork.flags & 32) {
					hoistableRoot = finishedWork.stateNode;
					try {
						setTextContent(hoistableRoot, "");
					} catch (error) {
						captureCommitPhaseError(finishedWork, finishedWork.return, error);
					}
				}
				flags & 4 && null != finishedWork.stateNode && (hoistableRoot = finishedWork.memoizedProps, commitHostUpdate(finishedWork, hoistableRoot, null !== current ? current.memoizedProps : hoistableRoot));
				flags & 1024 && (needsFormReset = !0);
				break;
			case 6:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				if (flags & 4) {
					if (null === finishedWork.stateNode) throw Error(formatProdErrorMessage(162));
					flags = finishedWork.memoizedProps;
					current = finishedWork.stateNode;
					try {
						current.nodeValue = flags;
					} catch (error) {
						captureCommitPhaseError(finishedWork, finishedWork.return, error);
					}
				}
				break;
			case 3:
				tagCaches = null;
				hoistableRoot = currentHoistableRoot;
				currentHoistableRoot = getHoistableRoot(root.containerInfo);
				recursivelyTraverseMutationEffects(root, finishedWork);
				currentHoistableRoot = hoistableRoot;
				commitReconciliationEffects(finishedWork);
				if (flags & 4 && null !== current && current.memoizedState.isDehydrated) try {
					retryIfBlockedOn(root.containerInfo);
				} catch (error) {
					captureCommitPhaseError(finishedWork, finishedWork.return, error);
				}
				needsFormReset && (needsFormReset = !1, recursivelyResetForms(finishedWork));
				break;
			case 4:
				flags = currentHoistableRoot;
				currentHoistableRoot = getHoistableRoot(finishedWork.stateNode.containerInfo);
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				currentHoistableRoot = flags;
				break;
			case 12:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				break;
			case 31:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
				break;
			case 13:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				finishedWork.child.flags & 8192 && null !== finishedWork.memoizedState !== (null !== current && null !== current.memoizedState) && (globalMostRecentFallbackTime = now());
				flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
				break;
			case 22:
				hoistableRoot = null !== finishedWork.memoizedState;
				var wasHidden = null !== current && null !== current.memoizedState, prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden, prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
				offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden || hoistableRoot;
				offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
				recursivelyTraverseMutationEffects(root, finishedWork);
				offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
				offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
				commitReconciliationEffects(finishedWork);
				if (flags & 8192) a: for (root = finishedWork.stateNode, root._visibility = hoistableRoot ? root._visibility & -2 : root._visibility | 1, hoistableRoot && (null === current || wasHidden || offscreenSubtreeIsHidden || offscreenSubtreeWasHidden || recursivelyTraverseDisappearLayoutEffects(finishedWork)), current = null, root = finishedWork;;) {
					if (5 === root.tag || 26 === root.tag) {
						if (null === current) {
							wasHidden = current = root;
							try {
								if (currentResource = wasHidden.stateNode, hoistableRoot) maybeNodes = currentResource.style, "function" === typeof maybeNodes.setProperty ? maybeNodes.setProperty("display", "none", "important") : maybeNodes.display = "none";
								else {
									i = wasHidden.stateNode;
									var styleProp = wasHidden.memoizedProps.style, display = void 0 !== styleProp && null !== styleProp && styleProp.hasOwnProperty("display") ? styleProp.display : null;
									i.style.display = null == display || "boolean" === typeof display ? "" : ("" + display).trim();
								}
							} catch (error) {
								captureCommitPhaseError(wasHidden, wasHidden.return, error);
							}
						}
					} else if (6 === root.tag) {
						if (null === current) {
							wasHidden = root;
							try {
								wasHidden.stateNode.nodeValue = hoistableRoot ? "" : wasHidden.memoizedProps;
							} catch (error) {
								captureCommitPhaseError(wasHidden, wasHidden.return, error);
							}
						}
					} else if (18 === root.tag) {
						if (null === current) {
							wasHidden = root;
							try {
								var instance = wasHidden.stateNode;
								hoistableRoot ? hideOrUnhideDehydratedBoundary(instance, !0) : hideOrUnhideDehydratedBoundary(wasHidden.stateNode, !1);
							} catch (error) {
								captureCommitPhaseError(wasHidden, wasHidden.return, error);
							}
						}
					} else if ((22 !== root.tag && 23 !== root.tag || null === root.memoizedState || root === finishedWork) && null !== root.child) {
						root.child.return = root;
						root = root.child;
						continue;
					}
					if (root === finishedWork) break a;
					for (; null === root.sibling;) {
						if (null === root.return || root.return === finishedWork) break a;
						current === root && (current = null);
						root = root.return;
					}
					current === root && (current = null);
					root.sibling.return = root.return;
					root = root.sibling;
				}
				flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (current = flags.retryQueue, null !== current && (flags.retryQueue = null, attachSuspenseRetryListeners(finishedWork, current))));
				break;
			case 19:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
				break;
			case 30: break;
			case 21: break;
			default: recursivelyTraverseMutationEffects(root, finishedWork), commitReconciliationEffects(finishedWork);
		}
	}
	function commitReconciliationEffects(finishedWork) {
		var flags = finishedWork.flags;
		if (flags & 2) {
			try {
				for (var hostParentFiber, parentFiber = finishedWork.return; null !== parentFiber;) {
					if (isHostParent(parentFiber)) {
						hostParentFiber = parentFiber;
						break;
					}
					parentFiber = parentFiber.return;
				}
				if (null == hostParentFiber) throw Error(formatProdErrorMessage(160));
				switch (hostParentFiber.tag) {
					case 27:
						var parent = hostParentFiber.stateNode;
						insertOrAppendPlacementNode(finishedWork, getHostSibling(finishedWork), parent);
						break;
					case 5:
						var parent$141 = hostParentFiber.stateNode;
						hostParentFiber.flags & 32 && (setTextContent(parent$141, ""), hostParentFiber.flags &= -33);
						insertOrAppendPlacementNode(finishedWork, getHostSibling(finishedWork), parent$141);
						break;
					case 3:
					case 4:
						var parent$143 = hostParentFiber.stateNode.containerInfo;
						insertOrAppendPlacementNodeIntoContainer(finishedWork, getHostSibling(finishedWork), parent$143);
						break;
					default: throw Error(formatProdErrorMessage(161));
				}
			} catch (error) {
				captureCommitPhaseError(finishedWork, finishedWork.return, error);
			}
			finishedWork.flags &= -3;
		}
		flags & 4096 && (finishedWork.flags &= -4097);
	}
	function recursivelyResetForms(parentFiber) {
		if (parentFiber.subtreeFlags & 1024) for (parentFiber = parentFiber.child; null !== parentFiber;) {
			var fiber = parentFiber;
			recursivelyResetForms(fiber);
			5 === fiber.tag && fiber.flags & 1024 && fiber.stateNode.reset();
			parentFiber = parentFiber.sibling;
		}
	}
	function recursivelyTraverseLayoutEffects(root, parentFiber) {
		if (parentFiber.subtreeFlags & 8772) for (parentFiber = parentFiber.child; null !== parentFiber;) commitLayoutEffectOnFiber(root, parentFiber.alternate, parentFiber), parentFiber = parentFiber.sibling;
	}
	function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
		for (parentFiber = parentFiber.child; null !== parentFiber;) {
			var finishedWork = parentFiber;
			switch (finishedWork.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
					recursivelyTraverseDisappearLayoutEffects(finishedWork);
					break;
				case 1:
					safelyDetachRef(finishedWork, finishedWork.return);
					var instance = finishedWork.stateNode;
					"function" === typeof instance.componentWillUnmount && safelyCallComponentWillUnmount(finishedWork, finishedWork.return, instance);
					recursivelyTraverseDisappearLayoutEffects(finishedWork);
					break;
				case 27: releaseSingletonInstance(finishedWork.stateNode);
				case 26:
				case 5:
					safelyDetachRef(finishedWork, finishedWork.return);
					recursivelyTraverseDisappearLayoutEffects(finishedWork);
					break;
				case 22:
					null === finishedWork.memoizedState && recursivelyTraverseDisappearLayoutEffects(finishedWork);
					break;
				case 30:
					recursivelyTraverseDisappearLayoutEffects(finishedWork);
					break;
				default: recursivelyTraverseDisappearLayoutEffects(finishedWork);
			}
			parentFiber = parentFiber.sibling;
		}
	}
	function recursivelyTraverseReappearLayoutEffects(finishedRoot$jscomp$0, parentFiber, includeWorkInProgressEffects) {
		includeWorkInProgressEffects = includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
		for (parentFiber = parentFiber.child; null !== parentFiber;) {
			var current = parentFiber.alternate, finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
			switch (finishedWork.tag) {
				case 0:
				case 11:
				case 15:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					commitHookEffectListMount(4, finishedWork);
					break;
				case 1:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					current = finishedWork;
					finishedRoot = current.stateNode;
					if ("function" === typeof finishedRoot.componentDidMount) try {
						finishedRoot.componentDidMount();
					} catch (error) {
						captureCommitPhaseError(current, current.return, error);
					}
					current = finishedWork;
					finishedRoot = current.updateQueue;
					if (null !== finishedRoot) {
						var instance = current.stateNode;
						try {
							var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
							if (null !== hiddenCallbacks) for (finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0; finishedRoot < hiddenCallbacks.length; finishedRoot++) callCallback(hiddenCallbacks[finishedRoot], instance);
						} catch (error) {
							captureCommitPhaseError(current, current.return, error);
						}
					}
					includeWorkInProgressEffects && flags & 64 && commitClassCallbacks(finishedWork);
					safelyAttachRef(finishedWork, finishedWork.return);
					break;
				case 27: commitHostSingletonAcquisition(finishedWork);
				case 26:
				case 5:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					includeWorkInProgressEffects && null === current && flags & 4 && commitHostMount(finishedWork);
					safelyAttachRef(finishedWork, finishedWork.return);
					break;
				case 12:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					break;
				case 31:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					includeWorkInProgressEffects && flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
					break;
				case 13:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					includeWorkInProgressEffects && flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
					break;
				case 22:
					null === finishedWork.memoizedState && recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					safelyAttachRef(finishedWork, finishedWork.return);
					break;
				case 30: break;
				default: recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
			}
			parentFiber = parentFiber.sibling;
		}
	}
	function commitOffscreenPassiveMountEffects(current, finishedWork) {
		var previousCache = null;
		null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (previousCache = current.memoizedState.cachePool.pool);
		current = null;
		null !== finishedWork.memoizedState && null !== finishedWork.memoizedState.cachePool && (current = finishedWork.memoizedState.cachePool.pool);
		current !== previousCache && (null != current && current.refCount++, null != previousCache && releaseCache(previousCache));
	}
	function commitCachePassiveMountEffect(current, finishedWork) {
		current = null;
		null !== finishedWork.alternate && (current = finishedWork.alternate.memoizedState.cache);
		finishedWork = finishedWork.memoizedState.cache;
		finishedWork !== current && (finishedWork.refCount++, null != current && releaseCache(current));
	}
	function recursivelyTraversePassiveMountEffects(root, parentFiber, committedLanes, committedTransitions) {
		if (parentFiber.subtreeFlags & 10256) for (parentFiber = parentFiber.child; null !== parentFiber;) commitPassiveMountOnFiber(root, parentFiber, committedLanes, committedTransitions), parentFiber = parentFiber.sibling;
	}
	function commitPassiveMountOnFiber(finishedRoot, finishedWork, committedLanes, committedTransitions) {
		var flags = finishedWork.flags;
		switch (finishedWork.tag) {
			case 0:
			case 11:
			case 15:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				flags & 2048 && commitHookEffectListMount(9, finishedWork);
				break;
			case 1:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				break;
			case 3:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				flags & 2048 && (finishedRoot = null, null !== finishedWork.alternate && (finishedRoot = finishedWork.alternate.memoizedState.cache), finishedWork = finishedWork.memoizedState.cache, finishedWork !== finishedRoot && (finishedWork.refCount++, null != finishedRoot && releaseCache(finishedRoot)));
				break;
			case 12:
				if (flags & 2048) {
					recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
					finishedRoot = finishedWork.stateNode;
					try {
						var _finishedWork$memoize2 = finishedWork.memoizedProps, id = _finishedWork$memoize2.id, onPostCommit = _finishedWork$memoize2.onPostCommit;
						"function" === typeof onPostCommit && onPostCommit(id, null === finishedWork.alternate ? "mount" : "update", finishedRoot.passiveEffectDuration, -0);
					} catch (error) {
						captureCommitPhaseError(finishedWork, finishedWork.return, error);
					}
				} else recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				break;
			case 31:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				break;
			case 13:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				break;
			case 23: break;
			case 22:
				_finishedWork$memoize2 = finishedWork.stateNode;
				id = finishedWork.alternate;
				null !== finishedWork.memoizedState ? _finishedWork$memoize2._visibility & 2 ? recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions) : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork) : _finishedWork$memoize2._visibility & 2 ? recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions) : (_finishedWork$memoize2._visibility |= 2, recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, 0 !== (finishedWork.subtreeFlags & 10256) || !1));
				flags & 2048 && commitOffscreenPassiveMountEffects(id, finishedWork);
				break;
			case 24:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
				break;
			default: recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
		}
	}
	function recursivelyTraverseReconnectPassiveEffects(finishedRoot$jscomp$0, parentFiber, committedLanes$jscomp$0, committedTransitions$jscomp$0, includeWorkInProgressEffects) {
		includeWorkInProgressEffects = includeWorkInProgressEffects && (0 !== (parentFiber.subtreeFlags & 10256) || !1);
		for (parentFiber = parentFiber.child; null !== parentFiber;) {
			var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, committedLanes = committedLanes$jscomp$0, committedTransitions = committedTransitions$jscomp$0, flags = finishedWork.flags;
			switch (finishedWork.tag) {
				case 0:
				case 11:
				case 15:
					recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, includeWorkInProgressEffects);
					commitHookEffectListMount(8, finishedWork);
					break;
				case 23: break;
				case 22:
					var instance = finishedWork.stateNode;
					null !== finishedWork.memoizedState ? instance._visibility & 2 ? recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, includeWorkInProgressEffects) : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork) : (instance._visibility |= 2, recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, includeWorkInProgressEffects));
					includeWorkInProgressEffects && flags & 2048 && commitOffscreenPassiveMountEffects(finishedWork.alternate, finishedWork);
					break;
				case 24:
					recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, includeWorkInProgressEffects);
					includeWorkInProgressEffects && flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
					break;
				default: recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, includeWorkInProgressEffects);
			}
			parentFiber = parentFiber.sibling;
		}
	}
	function recursivelyTraverseAtomicPassiveEffects(finishedRoot$jscomp$0, parentFiber) {
		if (parentFiber.subtreeFlags & 10256) for (parentFiber = parentFiber.child; null !== parentFiber;) {
			var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
			switch (finishedWork.tag) {
				case 22:
					recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
					flags & 2048 && commitOffscreenPassiveMountEffects(finishedWork.alternate, finishedWork);
					break;
				case 24:
					recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
					flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
					break;
				default: recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
			}
			parentFiber = parentFiber.sibling;
		}
	}
	var suspenseyCommitFlag = 8192;
	function recursivelyAccumulateSuspenseyCommit(parentFiber, committedLanes, suspendedState) {
		if (parentFiber.subtreeFlags & suspenseyCommitFlag) for (parentFiber = parentFiber.child; null !== parentFiber;) accumulateSuspenseyCommitOnFiber(parentFiber, committedLanes, suspendedState), parentFiber = parentFiber.sibling;
	}
	function accumulateSuspenseyCommitOnFiber(fiber, committedLanes, suspendedState) {
		switch (fiber.tag) {
			case 26:
				recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState);
				fiber.flags & suspenseyCommitFlag && null !== fiber.memoizedState && suspendResource(suspendedState, currentHoistableRoot, fiber.memoizedState, fiber.memoizedProps);
				break;
			case 5:
				recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState);
				break;
			case 3:
			case 4:
				var previousHoistableRoot = currentHoistableRoot;
				currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
				recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState);
				currentHoistableRoot = previousHoistableRoot;
				break;
			case 22:
				null === fiber.memoizedState && (previousHoistableRoot = fiber.alternate, null !== previousHoistableRoot && null !== previousHoistableRoot.memoizedState ? (previousHoistableRoot = suspenseyCommitFlag, suspenseyCommitFlag = 16777216, recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState), suspenseyCommitFlag = previousHoistableRoot) : recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState));
				break;
			default: recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState);
		}
	}
	function detachAlternateSiblings(parentFiber) {
		var previousFiber = parentFiber.alternate;
		if (null !== previousFiber && (parentFiber = previousFiber.child, null !== parentFiber)) {
			previousFiber.child = null;
			do
				previousFiber = parentFiber.sibling, parentFiber.sibling = null, parentFiber = previousFiber;
			while (null !== parentFiber);
		}
	}
	function recursivelyTraversePassiveUnmountEffects(parentFiber) {
		var deletions = parentFiber.deletions;
		if (0 !== (parentFiber.flags & 16)) {
			if (null !== deletions) for (var i = 0; i < deletions.length; i++) {
				var childToDelete = deletions[i];
				nextEffect = childToDelete;
				commitPassiveUnmountEffectsInsideOfDeletedTree_begin(childToDelete, parentFiber);
			}
			detachAlternateSiblings(parentFiber);
		}
		if (parentFiber.subtreeFlags & 10256) for (parentFiber = parentFiber.child; null !== parentFiber;) commitPassiveUnmountOnFiber(parentFiber), parentFiber = parentFiber.sibling;
	}
	function commitPassiveUnmountOnFiber(finishedWork) {
		switch (finishedWork.tag) {
			case 0:
			case 11:
			case 15:
				recursivelyTraversePassiveUnmountEffects(finishedWork);
				finishedWork.flags & 2048 && commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
				break;
			case 3:
				recursivelyTraversePassiveUnmountEffects(finishedWork);
				break;
			case 12:
				recursivelyTraversePassiveUnmountEffects(finishedWork);
				break;
			case 22:
				var instance = finishedWork.stateNode;
				null !== finishedWork.memoizedState && instance._visibility & 2 && (null === finishedWork.return || 13 !== finishedWork.return.tag) ? (instance._visibility &= -3, recursivelyTraverseDisconnectPassiveEffects(finishedWork)) : recursivelyTraversePassiveUnmountEffects(finishedWork);
				break;
			default: recursivelyTraversePassiveUnmountEffects(finishedWork);
		}
	}
	function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
		var deletions = parentFiber.deletions;
		if (0 !== (parentFiber.flags & 16)) {
			if (null !== deletions) for (var i = 0; i < deletions.length; i++) {
				var childToDelete = deletions[i];
				nextEffect = childToDelete;
				commitPassiveUnmountEffectsInsideOfDeletedTree_begin(childToDelete, parentFiber);
			}
			detachAlternateSiblings(parentFiber);
		}
		for (parentFiber = parentFiber.child; null !== parentFiber;) {
			deletions = parentFiber;
			switch (deletions.tag) {
				case 0:
				case 11:
				case 15:
					commitHookEffectListUnmount(8, deletions, deletions.return);
					recursivelyTraverseDisconnectPassiveEffects(deletions);
					break;
				case 22:
					i = deletions.stateNode;
					i._visibility & 2 && (i._visibility &= -3, recursivelyTraverseDisconnectPassiveEffects(deletions));
					break;
				default: recursivelyTraverseDisconnectPassiveEffects(deletions);
			}
			parentFiber = parentFiber.sibling;
		}
	}
	function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(deletedSubtreeRoot, nearestMountedAncestor) {
		for (; null !== nextEffect;) {
			var fiber = nextEffect;
			switch (fiber.tag) {
				case 0:
				case 11:
				case 15:
					commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
					break;
				case 23:
				case 22:
					if (null !== fiber.memoizedState && null !== fiber.memoizedState.cachePool) {
						var cache = fiber.memoizedState.cachePool.pool;
						null != cache && cache.refCount++;
					}
					break;
				case 24: releaseCache(fiber.memoizedState.cache);
			}
			cache = fiber.child;
			if (null !== cache) cache.return = fiber, nextEffect = cache;
			else a: for (fiber = deletedSubtreeRoot; null !== nextEffect;) {
				cache = nextEffect;
				var sibling = cache.sibling, returnFiber = cache.return;
				detachFiberAfterEffects(cache);
				if (cache === fiber) {
					nextEffect = null;
					break a;
				}
				if (null !== sibling) {
					sibling.return = returnFiber;
					nextEffect = sibling;
					break a;
				}
				nextEffect = returnFiber;
			}
		}
	}
	var DefaultAsyncDispatcher = {
		getCacheForType: function(resourceType) {
			var cache = readContext(CacheContext), cacheForType = cache.data.get(resourceType);
			void 0 === cacheForType && (cacheForType = resourceType(), cache.data.set(resourceType, cacheForType));
			return cacheForType;
		},
		cacheSignal: function() {
			return readContext(CacheContext).controller.signal;
		}
	};
	var PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map;
	var executionContext = 0;
	var workInProgressRoot = null;
	var workInProgress = null;
	var workInProgressRootRenderLanes = 0;
	var workInProgressSuspendedReason = 0;
	var workInProgressThrownValue = null;
	var workInProgressRootDidSkipSuspendedSiblings = !1;
	var workInProgressRootIsPrerendering = !1;
	var workInProgressRootDidAttachPingListener = !1;
	var entangledRenderLanes = 0;
	var workInProgressRootExitStatus = 0;
	var workInProgressRootSkippedLanes = 0;
	var workInProgressRootInterleavedUpdatedLanes = 0;
	var workInProgressRootPingedLanes = 0;
	var workInProgressDeferredLane = 0;
	var workInProgressSuspendedRetryLanes = 0;
	var workInProgressRootConcurrentErrors = null;
	var workInProgressRootRecoverableErrors = null;
	var workInProgressRootDidIncludeRecursiveRenderUpdate = !1;
	var globalMostRecentFallbackTime = 0;
	var globalMostRecentTransitionTime = 0;
	var workInProgressRootRenderTargetTime = Infinity;
	var workInProgressTransitions = null;
	var legacyErrorBoundariesThatAlreadyFailed = null;
	var pendingEffectsStatus = 0;
	var pendingEffectsRoot = null;
	var pendingFinishedWork = null;
	var pendingEffectsLanes = 0;
	var pendingEffectsRemainingLanes = 0;
	var pendingPassiveTransitions = null;
	var pendingRecoverableErrors = null;
	var nestedUpdateCount = 0;
	var rootWithNestedUpdates = null;
	function requestUpdateLane() {
		return 0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes ? workInProgressRootRenderLanes & -workInProgressRootRenderLanes : null !== ReactSharedInternals.T ? requestTransitionLane() : resolveUpdatePriority();
	}
	function requestDeferredLane() {
		if (0 === workInProgressDeferredLane) if (0 === (workInProgressRootRenderLanes & 536870912) || isHydrating) {
			var lane = nextTransitionDeferredLane;
			nextTransitionDeferredLane <<= 1;
			0 === (nextTransitionDeferredLane & 3932160) && (nextTransitionDeferredLane = 262144);
			workInProgressDeferredLane = lane;
		} else workInProgressDeferredLane = 536870912;
		lane = suspenseHandlerStackCursor.current;
		null !== lane && (lane.flags |= 32);
		return workInProgressDeferredLane;
	}
	function scheduleUpdateOnFiber(root, fiber, lane) {
		if (root === workInProgressRoot && (2 === workInProgressSuspendedReason || 9 === workInProgressSuspendedReason) || null !== root.cancelPendingCommit) prepareFreshStack(root, 0), markRootSuspended(root, workInProgressRootRenderLanes, workInProgressDeferredLane, !1);
		markRootUpdated$1(root, lane);
		if (0 === (executionContext & 2) || root !== workInProgressRoot) root === workInProgressRoot && (0 === (executionContext & 2) && (workInProgressRootInterleavedUpdatedLanes |= lane), 4 === workInProgressRootExitStatus && markRootSuspended(root, workInProgressRootRenderLanes, workInProgressDeferredLane, !1)), ensureRootIsScheduled(root);
	}
	function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
		if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
		var shouldTimeSlice = !forceSync && 0 === (lanes & 127) && 0 === (lanes & root$jscomp$0.expiredLanes) || checkIfRootIsPrerendering(root$jscomp$0, lanes), exitStatus = shouldTimeSlice ? renderRootConcurrent(root$jscomp$0, lanes) : renderRootSync(root$jscomp$0, lanes, !0), renderWasConcurrent = shouldTimeSlice;
		do {
			if (0 === exitStatus) {
				workInProgressRootIsPrerendering && !shouldTimeSlice && markRootSuspended(root$jscomp$0, lanes, 0, !1);
				break;
			} else {
				forceSync = root$jscomp$0.current.alternate;
				if (renderWasConcurrent && !isRenderConsistentWithExternalStores(forceSync)) {
					exitStatus = renderRootSync(root$jscomp$0, lanes, !1);
					renderWasConcurrent = !1;
					continue;
				}
				if (2 === exitStatus) {
					renderWasConcurrent = lanes;
					if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent) var JSCompiler_inline_result = 0;
					else JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913, JSCompiler_inline_result = 0 !== JSCompiler_inline_result ? JSCompiler_inline_result : JSCompiler_inline_result & 536870912 ? 536870912 : 0;
					if (0 !== JSCompiler_inline_result) {
						lanes = JSCompiler_inline_result;
						a: {
							var root = root$jscomp$0;
							exitStatus = workInProgressRootConcurrentErrors;
							var wasRootDehydrated = root.current.memoizedState.isDehydrated;
							wasRootDehydrated && (prepareFreshStack(root, JSCompiler_inline_result).flags |= 256);
							JSCompiler_inline_result = renderRootSync(root, JSCompiler_inline_result, !1);
							if (2 !== JSCompiler_inline_result) {
								if (workInProgressRootDidAttachPingListener && !wasRootDehydrated) {
									root.errorRecoveryDisabledLanes |= renderWasConcurrent;
									workInProgressRootInterleavedUpdatedLanes |= renderWasConcurrent;
									exitStatus = 4;
									break a;
								}
								renderWasConcurrent = workInProgressRootRecoverableErrors;
								workInProgressRootRecoverableErrors = exitStatus;
								null !== renderWasConcurrent && (null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = renderWasConcurrent : workInProgressRootRecoverableErrors.push.apply(workInProgressRootRecoverableErrors, renderWasConcurrent));
							}
							exitStatus = JSCompiler_inline_result;
						}
						renderWasConcurrent = !1;
						if (2 !== exitStatus) continue;
					}
				}
				if (1 === exitStatus) {
					prepareFreshStack(root$jscomp$0, 0);
					markRootSuspended(root$jscomp$0, lanes, 0, !0);
					break;
				}
				a: {
					shouldTimeSlice = root$jscomp$0;
					renderWasConcurrent = exitStatus;
					switch (renderWasConcurrent) {
						case 0:
						case 1: throw Error(formatProdErrorMessage(345));
						case 4: if ((lanes & 4194048) !== lanes) break;
						case 6:
							markRootSuspended(shouldTimeSlice, lanes, workInProgressDeferredLane, !workInProgressRootDidSkipSuspendedSiblings);
							break a;
						case 2:
							workInProgressRootRecoverableErrors = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(formatProdErrorMessage(329));
					}
					if ((lanes & 62914560) === lanes && (exitStatus = globalMostRecentFallbackTime + 300 - now(), 10 < exitStatus)) {
						markRootSuspended(shouldTimeSlice, lanes, workInProgressDeferredLane, !workInProgressRootDidSkipSuspendedSiblings);
						if (0 !== getNextLanes(shouldTimeSlice, 0, !0)) break a;
						pendingEffectsLanes = lanes;
						shouldTimeSlice.timeoutHandle = scheduleTimeout(commitRootWhenReady.bind(null, shouldTimeSlice, forceSync, workInProgressRootRecoverableErrors, workInProgressTransitions, workInProgressRootDidIncludeRecursiveRenderUpdate, lanes, workInProgressDeferredLane, workInProgressRootInterleavedUpdatedLanes, workInProgressSuspendedRetryLanes, workInProgressRootDidSkipSuspendedSiblings, renderWasConcurrent, "Throttled", -0, 0), exitStatus);
						break a;
					}
					commitRootWhenReady(shouldTimeSlice, forceSync, workInProgressRootRecoverableErrors, workInProgressTransitions, workInProgressRootDidIncludeRecursiveRenderUpdate, lanes, workInProgressDeferredLane, workInProgressRootInterleavedUpdatedLanes, workInProgressSuspendedRetryLanes, workInProgressRootDidSkipSuspendedSiblings, renderWasConcurrent, null, -0, 0);
				}
			}
			break;
		} while (1);
		ensureRootIsScheduled(root$jscomp$0);
	}
	function commitRootWhenReady(root, finishedWork, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, lanes, spawnedLane, updatedLanes, suspendedRetryLanes, didSkipSuspendedSiblings, exitStatus, suspendedCommitReason, completedRenderStartTime, completedRenderEndTime) {
		root.timeoutHandle = -1;
		suspendedCommitReason = finishedWork.subtreeFlags;
		if (suspendedCommitReason & 8192 || 16785408 === (suspendedCommitReason & 16785408)) {
			suspendedCommitReason = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: noop$1
			};
			accumulateSuspenseyCommitOnFiber(finishedWork, lanes, suspendedCommitReason);
			var timeoutOffset = (lanes & 62914560) === lanes ? globalMostRecentFallbackTime - now() : (lanes & 4194048) === lanes ? globalMostRecentTransitionTime - now() : 0;
			timeoutOffset = waitForCommitToBeReady(suspendedCommitReason, timeoutOffset);
			if (null !== timeoutOffset) {
				pendingEffectsLanes = lanes;
				root.cancelPendingCommit = timeoutOffset(commitRoot.bind(null, root, finishedWork, lanes, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes, exitStatus, suspendedCommitReason, null, completedRenderStartTime, completedRenderEndTime));
				markRootSuspended(root, lanes, spawnedLane, !didSkipSuspendedSiblings);
				return;
			}
		}
		commitRoot(root, finishedWork, lanes, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes);
	}
	function isRenderConsistentWithExternalStores(finishedWork) {
		for (var node = finishedWork;;) {
			var tag = node.tag;
			if ((0 === tag || 11 === tag || 15 === tag) && node.flags & 16384 && (tag = node.updateQueue, null !== tag && (tag = tag.stores, null !== tag))) for (var i = 0; i < tag.length; i++) {
				var check = tag[i], getSnapshot = check.getSnapshot;
				check = check.value;
				try {
					if (!objectIs(getSnapshot(), check)) return !1;
				} catch (error) {
					return !1;
				}
			}
			tag = node.child;
			if (node.subtreeFlags & 16384 && null !== tag) tag.return = node, node = tag;
			else {
				if (node === finishedWork) break;
				for (; null === node.sibling;) {
					if (null === node.return || node.return === finishedWork) return !0;
					node = node.return;
				}
				node.sibling.return = node.return;
				node = node.sibling;
			}
		}
		return !0;
	}
	function markRootSuspended(root, suspendedLanes, spawnedLane, didAttemptEntireTree) {
		suspendedLanes &= ~workInProgressRootPingedLanes;
		suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
		root.suspendedLanes |= suspendedLanes;
		root.pingedLanes &= ~suspendedLanes;
		didAttemptEntireTree && (root.warmLanes |= suspendedLanes);
		didAttemptEntireTree = root.expirationTimes;
		for (var lanes = suspendedLanes; 0 < lanes;) {
			var index$6 = 31 - clz32(lanes), lane = 1 << index$6;
			didAttemptEntireTree[index$6] = -1;
			lanes &= ~lane;
		}
		0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, suspendedLanes);
	}
	function flushSyncWork$1() {
		return 0 === (executionContext & 6) ? (flushSyncWorkAcrossRoots_impl(0, !1), !1) : !0;
	}
	function resetWorkInProgressStack() {
		if (null !== workInProgress) {
			if (0 === workInProgressSuspendedReason) var interruptedWork = workInProgress.return;
			else interruptedWork = workInProgress, lastContextDependency = currentlyRenderingFiber$1 = null, resetHooksOnUnwind(interruptedWork), thenableState$1 = null, thenableIndexCounter$1 = 0, interruptedWork = workInProgress;
			for (; null !== interruptedWork;) unwindInterruptedWork(interruptedWork.alternate, interruptedWork), interruptedWork = interruptedWork.return;
			workInProgress = null;
		}
	}
	function prepareFreshStack(root, lanes) {
		var timeoutHandle = root.timeoutHandle;
		-1 !== timeoutHandle && (root.timeoutHandle = -1, cancelTimeout(timeoutHandle));
		timeoutHandle = root.cancelPendingCommit;
		null !== timeoutHandle && (root.cancelPendingCommit = null, timeoutHandle());
		pendingEffectsLanes = 0;
		resetWorkInProgressStack();
		workInProgressRoot = root;
		workInProgress = timeoutHandle = createWorkInProgress(root.current, null);
		workInProgressRootRenderLanes = lanes;
		workInProgressSuspendedReason = 0;
		workInProgressThrownValue = null;
		workInProgressRootDidSkipSuspendedSiblings = !1;
		workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root, lanes);
		workInProgressRootDidAttachPingListener = !1;
		workInProgressSuspendedRetryLanes = workInProgressDeferredLane = workInProgressRootPingedLanes = workInProgressRootInterleavedUpdatedLanes = workInProgressRootSkippedLanes = workInProgressRootExitStatus = 0;
		workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors = null;
		workInProgressRootDidIncludeRecursiveRenderUpdate = !1;
		0 !== (lanes & 8) && (lanes |= lanes & 32);
		var allEntangledLanes = root.entangledLanes;
		if (0 !== allEntangledLanes) for (root = root.entanglements, allEntangledLanes &= lanes; 0 < allEntangledLanes;) {
			var index$4 = 31 - clz32(allEntangledLanes), lane = 1 << index$4;
			lanes |= root[index$4];
			allEntangledLanes &= ~lane;
		}
		entangledRenderLanes = lanes;
		finishQueueingConcurrentUpdates();
		return timeoutHandle;
	}
	function handleThrow(root, thrownValue) {
		currentlyRenderingFiber = null;
		ReactSharedInternals.H = ContextOnlyDispatcher;
		thrownValue === SuspenseException || thrownValue === SuspenseActionException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 3) : thrownValue === SuspenseyCommitException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 4) : workInProgressSuspendedReason = thrownValue === SelectiveHydrationException ? 8 : null !== thrownValue && "object" === typeof thrownValue && "function" === typeof thrownValue.then ? 6 : 1;
		workInProgressThrownValue = thrownValue;
		null === workInProgress && (workInProgressRootExitStatus = 1, logUncaughtError(root, createCapturedValueAtFiber(thrownValue, root.current)));
	}
	function shouldRemainOnPreviousScreen() {
		var handler = suspenseHandlerStackCursor.current;
		return null === handler ? !0 : (workInProgressRootRenderLanes & 4194048) === workInProgressRootRenderLanes ? null === shellBoundary ? !0 : !1 : (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes || 0 !== (workInProgressRootRenderLanes & 536870912) ? handler === shellBoundary : !1;
	}
	function pushDispatcher() {
		var prevDispatcher = ReactSharedInternals.H;
		ReactSharedInternals.H = ContextOnlyDispatcher;
		return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
	}
	function pushAsyncDispatcher() {
		var prevAsyncDispatcher = ReactSharedInternals.A;
		ReactSharedInternals.A = DefaultAsyncDispatcher;
		return prevAsyncDispatcher;
	}
	function renderDidSuspendDelayIfPossible() {
		workInProgressRootExitStatus = 4;
		workInProgressRootDidSkipSuspendedSiblings || (workInProgressRootRenderLanes & 4194048) !== workInProgressRootRenderLanes && null !== suspenseHandlerStackCursor.current || (workInProgressRootIsPrerendering = !0);
		0 === (workInProgressRootSkippedLanes & 134217727) && 0 === (workInProgressRootInterleavedUpdatedLanes & 134217727) || null === workInProgressRoot || markRootSuspended(workInProgressRoot, workInProgressRootRenderLanes, workInProgressDeferredLane, !1);
	}
	function renderRootSync(root, lanes, shouldYieldForPrerendering) {
		var prevExecutionContext = executionContext;
		executionContext |= 2;
		var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
		if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) workInProgressTransitions = null, prepareFreshStack(root, lanes);
		lanes = !1;
		var exitStatus = workInProgressRootExitStatus;
		a: do
			try {
				if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
					var unitOfWork = workInProgress, thrownValue = workInProgressThrownValue;
					switch (workInProgressSuspendedReason) {
						case 8:
							resetWorkInProgressStack();
							exitStatus = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							null === suspenseHandlerStackCursor.current && (lanes = !0);
							var reason = workInProgressSuspendedReason;
							workInProgressSuspendedReason = 0;
							workInProgressThrownValue = null;
							throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
							if (shouldYieldForPrerendering && workInProgressRootIsPrerendering) {
								exitStatus = 0;
								break a;
							}
							break;
						default: reason = workInProgressSuspendedReason, workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
					}
				}
				workLoopSync();
				exitStatus = workInProgressRootExitStatus;
				break;
			} catch (thrownValue$165) {
				handleThrow(root, thrownValue$165);
			}
		while (1);
		lanes && root.shellSuspendCounter++;
		lastContextDependency = currentlyRenderingFiber$1 = null;
		executionContext = prevExecutionContext;
		ReactSharedInternals.H = prevDispatcher;
		ReactSharedInternals.A = prevAsyncDispatcher;
		null === workInProgress && (workInProgressRoot = null, workInProgressRootRenderLanes = 0, finishQueueingConcurrentUpdates());
		return exitStatus;
	}
	function workLoopSync() {
		for (; null !== workInProgress;) performUnitOfWork(workInProgress);
	}
	function renderRootConcurrent(root, lanes) {
		var prevExecutionContext = executionContext;
		executionContext |= 2;
		var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
		workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes ? (workInProgressTransitions = null, workInProgressRootRenderTargetTime = now() + 500, prepareFreshStack(root, lanes)) : workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root, lanes);
		a: do
			try {
				if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
					lanes = workInProgress;
					var thrownValue = workInProgressThrownValue;
					b: switch (workInProgressSuspendedReason) {
						case 1:
							workInProgressSuspendedReason = 0;
							workInProgressThrownValue = null;
							throwAndUnwindWorkLoop(root, lanes, thrownValue, 1);
							break;
						case 2:
						case 9:
							if (isThenableResolved(thrownValue)) {
								workInProgressSuspendedReason = 0;
								workInProgressThrownValue = null;
								replaySuspendedUnitOfWork(lanes);
								break;
							}
							lanes = function() {
								2 !== workInProgressSuspendedReason && 9 !== workInProgressSuspendedReason || workInProgressRoot !== root || (workInProgressSuspendedReason = 7);
								ensureRootIsScheduled(root);
							};
							thrownValue.then(lanes, lanes);
							break a;
						case 3:
							workInProgressSuspendedReason = 7;
							break a;
						case 4:
							workInProgressSuspendedReason = 5;
							break a;
						case 7:
							isThenableResolved(thrownValue) ? (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, replaySuspendedUnitOfWork(lanes)) : (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root, lanes, thrownValue, 7));
							break;
						case 5:
							var resource = null;
							switch (workInProgress.tag) {
								case 26: resource = workInProgress.memoizedState;
								case 5:
								case 27:
									var hostFiber = workInProgress;
									if (resource ? preloadResource(resource) : hostFiber.stateNode.complete) {
										workInProgressSuspendedReason = 0;
										workInProgressThrownValue = null;
										var sibling = hostFiber.sibling;
										if (null !== sibling) workInProgress = sibling;
										else {
											var returnFiber = hostFiber.return;
											null !== returnFiber ? (workInProgress = returnFiber, completeUnitOfWork(returnFiber)) : workInProgress = null;
										}
										break b;
									}
							}
							workInProgressSuspendedReason = 0;
							workInProgressThrownValue = null;
							throwAndUnwindWorkLoop(root, lanes, thrownValue, 5);
							break;
						case 6:
							workInProgressSuspendedReason = 0;
							workInProgressThrownValue = null;
							throwAndUnwindWorkLoop(root, lanes, thrownValue, 6);
							break;
						case 8:
							resetWorkInProgressStack();
							workInProgressRootExitStatus = 6;
							break a;
						default: throw Error(formatProdErrorMessage(462));
					}
				}
				workLoopConcurrentByScheduler();
				break;
			} catch (thrownValue$167) {
				handleThrow(root, thrownValue$167);
			}
		while (1);
		lastContextDependency = currentlyRenderingFiber$1 = null;
		ReactSharedInternals.H = prevDispatcher;
		ReactSharedInternals.A = prevAsyncDispatcher;
		executionContext = prevExecutionContext;
		if (null !== workInProgress) return 0;
		workInProgressRoot = null;
		workInProgressRootRenderLanes = 0;
		finishQueueingConcurrentUpdates();
		return workInProgressRootExitStatus;
	}
	function workLoopConcurrentByScheduler() {
		for (; null !== workInProgress && !shouldYield();) performUnitOfWork(workInProgress);
	}
	function performUnitOfWork(unitOfWork) {
		var next = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
		unitOfWork.memoizedProps = unitOfWork.pendingProps;
		null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
	}
	function replaySuspendedUnitOfWork(unitOfWork) {
		var next = unitOfWork;
		var current = next.alternate;
		switch (next.tag) {
			case 15:
			case 0:
				next = replayFunctionComponent(current, next, next.pendingProps, next.type, void 0, workInProgressRootRenderLanes);
				break;
			case 11:
				next = replayFunctionComponent(current, next, next.pendingProps, next.type.render, next.ref, workInProgressRootRenderLanes);
				break;
			case 5: resetHooksOnUnwind(next);
			default: unwindInterruptedWork(current, next), next = workInProgress = resetWorkInProgress(next, entangledRenderLanes), next = beginWork(current, next, entangledRenderLanes);
		}
		unitOfWork.memoizedProps = unitOfWork.pendingProps;
		null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
	}
	function throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, suspendedReason) {
		lastContextDependency = currentlyRenderingFiber$1 = null;
		resetHooksOnUnwind(unitOfWork);
		thenableState$1 = null;
		thenableIndexCounter$1 = 0;
		var returnFiber = unitOfWork.return;
		try {
			if (throwException(root, returnFiber, unitOfWork, thrownValue, workInProgressRootRenderLanes)) {
				workInProgressRootExitStatus = 1;
				logUncaughtError(root, createCapturedValueAtFiber(thrownValue, root.current));
				workInProgress = null;
				return;
			}
		} catch (error) {
			if (null !== returnFiber) throw workInProgress = returnFiber, error;
			workInProgressRootExitStatus = 1;
			logUncaughtError(root, createCapturedValueAtFiber(thrownValue, root.current));
			workInProgress = null;
			return;
		}
		if (unitOfWork.flags & 32768) {
			if (isHydrating || 1 === suspendedReason) root = !0;
			else if (workInProgressRootIsPrerendering || 0 !== (workInProgressRootRenderLanes & 536870912)) root = !1;
			else if (workInProgressRootDidSkipSuspendedSiblings = root = !0, 2 === suspendedReason || 9 === suspendedReason || 3 === suspendedReason || 6 === suspendedReason) suspendedReason = suspenseHandlerStackCursor.current, null !== suspendedReason && 13 === suspendedReason.tag && (suspendedReason.flags |= 16384);
			unwindUnitOfWork(unitOfWork, root);
		} else completeUnitOfWork(unitOfWork);
	}
	function completeUnitOfWork(unitOfWork) {
		var completedWork = unitOfWork;
		do {
			if (0 !== (completedWork.flags & 32768)) {
				unwindUnitOfWork(completedWork, workInProgressRootDidSkipSuspendedSiblings);
				return;
			}
			unitOfWork = completedWork.return;
			var next = completeWork(completedWork.alternate, completedWork, entangledRenderLanes);
			if (null !== next) {
				workInProgress = next;
				return;
			}
			completedWork = completedWork.sibling;
			if (null !== completedWork) {
				workInProgress = completedWork;
				return;
			}
			workInProgress = completedWork = unitOfWork;
		} while (null !== completedWork);
		0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
	}
	function unwindUnitOfWork(unitOfWork, skipSiblings) {
		do {
			var next = unwindWork(unitOfWork.alternate, unitOfWork);
			if (null !== next) {
				next.flags &= 32767;
				workInProgress = next;
				return;
			}
			next = unitOfWork.return;
			null !== next && (next.flags |= 32768, next.subtreeFlags = 0, next.deletions = null);
			if (!skipSiblings && (unitOfWork = unitOfWork.sibling, null !== unitOfWork)) {
				workInProgress = unitOfWork;
				return;
			}
			workInProgress = unitOfWork = next;
		} while (null !== unitOfWork);
		workInProgressRootExitStatus = 6;
		workInProgress = null;
	}
	function commitRoot(root, finishedWork, lanes, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes) {
		root.cancelPendingCommit = null;
		do
			flushPendingEffects();
		while (0 !== pendingEffectsStatus);
		if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
		if (null !== finishedWork) {
			if (finishedWork === root.current) throw Error(formatProdErrorMessage(177));
			didIncludeRenderPhaseUpdate = finishedWork.lanes | finishedWork.childLanes;
			didIncludeRenderPhaseUpdate |= concurrentlyUpdatedLanes;
			markRootFinished(root, lanes, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes);
			root === workInProgressRoot && (workInProgress = workInProgressRoot = null, workInProgressRootRenderLanes = 0);
			pendingFinishedWork = finishedWork;
			pendingEffectsRoot = root;
			pendingEffectsLanes = lanes;
			pendingEffectsRemainingLanes = didIncludeRenderPhaseUpdate;
			pendingPassiveTransitions = transitions;
			pendingRecoverableErrors = recoverableErrors;
			0 !== (finishedWork.subtreeFlags & 10256) || 0 !== (finishedWork.flags & 10256) ? (root.callbackNode = null, root.callbackPriority = 0, scheduleCallback$1(NormalPriority$1, function() {
				flushPassiveEffects();
				return null;
			})) : (root.callbackNode = null, root.callbackPriority = 0);
			recoverableErrors = 0 !== (finishedWork.flags & 13878);
			if (0 !== (finishedWork.subtreeFlags & 13878) || recoverableErrors) {
				recoverableErrors = ReactSharedInternals.T;
				ReactSharedInternals.T = null;
				transitions = ReactDOMSharedInternals.p;
				ReactDOMSharedInternals.p = 2;
				spawnedLane = executionContext;
				executionContext |= 4;
				try {
					commitBeforeMutationEffects(root, finishedWork, lanes);
				} finally {
					executionContext = spawnedLane, ReactDOMSharedInternals.p = transitions, ReactSharedInternals.T = recoverableErrors;
				}
			}
			pendingEffectsStatus = 1;
			flushMutationEffects();
			flushLayoutEffects();
			flushSpawnedWork();
		}
	}
	function flushMutationEffects() {
		if (1 === pendingEffectsStatus) {
			pendingEffectsStatus = 0;
			var root = pendingEffectsRoot, finishedWork = pendingFinishedWork, rootMutationHasEffect = 0 !== (finishedWork.flags & 13878);
			if (0 !== (finishedWork.subtreeFlags & 13878) || rootMutationHasEffect) {
				rootMutationHasEffect = ReactSharedInternals.T;
				ReactSharedInternals.T = null;
				var previousPriority = ReactDOMSharedInternals.p;
				ReactDOMSharedInternals.p = 2;
				var prevExecutionContext = executionContext;
				executionContext |= 4;
				try {
					commitMutationEffectsOnFiber(finishedWork, root);
					var priorSelectionInformation = selectionInformation, curFocusedElem = getActiveElementDeep(root.containerInfo), priorFocusedElem = priorSelectionInformation.focusedElem, priorSelectionRange = priorSelectionInformation.selectionRange;
					if (curFocusedElem !== priorFocusedElem && priorFocusedElem && priorFocusedElem.ownerDocument && containsNode(priorFocusedElem.ownerDocument.documentElement, priorFocusedElem)) {
						if (null !== priorSelectionRange && hasSelectionCapabilities(priorFocusedElem)) {
							var start = priorSelectionRange.start, end = priorSelectionRange.end;
							void 0 === end && (end = start);
							if ("selectionStart" in priorFocusedElem) priorFocusedElem.selectionStart = start, priorFocusedElem.selectionEnd = Math.min(end, priorFocusedElem.value.length);
							else {
								var doc = priorFocusedElem.ownerDocument || document, win = doc && doc.defaultView || window;
								if (win.getSelection) {
									var selection = win.getSelection(), length = priorFocusedElem.textContent.length, start$jscomp$0 = Math.min(priorSelectionRange.start, length), end$jscomp$0 = void 0 === priorSelectionRange.end ? start$jscomp$0 : Math.min(priorSelectionRange.end, length);
									!selection.extend && start$jscomp$0 > end$jscomp$0 && (curFocusedElem = end$jscomp$0, end$jscomp$0 = start$jscomp$0, start$jscomp$0 = curFocusedElem);
									var startMarker = getNodeForCharacterOffset(priorFocusedElem, start$jscomp$0), endMarker = getNodeForCharacterOffset(priorFocusedElem, end$jscomp$0);
									if (startMarker && endMarker && (1 !== selection.rangeCount || selection.anchorNode !== startMarker.node || selection.anchorOffset !== startMarker.offset || selection.focusNode !== endMarker.node || selection.focusOffset !== endMarker.offset)) {
										var range = doc.createRange();
										range.setStart(startMarker.node, startMarker.offset);
										selection.removeAllRanges();
										start$jscomp$0 > end$jscomp$0 ? (selection.addRange(range), selection.extend(endMarker.node, endMarker.offset)) : (range.setEnd(endMarker.node, endMarker.offset), selection.addRange(range));
									}
								}
							}
						}
						doc = [];
						for (selection = priorFocusedElem; selection = selection.parentNode;) 1 === selection.nodeType && doc.push({
							element: selection,
							left: selection.scrollLeft,
							top: selection.scrollTop
						});
						"function" === typeof priorFocusedElem.focus && priorFocusedElem.focus();
						for (priorFocusedElem = 0; priorFocusedElem < doc.length; priorFocusedElem++) {
							var info = doc[priorFocusedElem];
							info.element.scrollLeft = info.left;
							info.element.scrollTop = info.top;
						}
					}
					_enabled = !!eventsEnabled;
					selectionInformation = eventsEnabled = null;
				} finally {
					executionContext = prevExecutionContext, ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = rootMutationHasEffect;
				}
			}
			root.current = finishedWork;
			pendingEffectsStatus = 2;
		}
	}
	function flushLayoutEffects() {
		if (2 === pendingEffectsStatus) {
			pendingEffectsStatus = 0;
			var root = pendingEffectsRoot, finishedWork = pendingFinishedWork, rootHasLayoutEffect = 0 !== (finishedWork.flags & 8772);
			if (0 !== (finishedWork.subtreeFlags & 8772) || rootHasLayoutEffect) {
				rootHasLayoutEffect = ReactSharedInternals.T;
				ReactSharedInternals.T = null;
				var previousPriority = ReactDOMSharedInternals.p;
				ReactDOMSharedInternals.p = 2;
				var prevExecutionContext = executionContext;
				executionContext |= 4;
				try {
					commitLayoutEffectOnFiber(root, finishedWork.alternate, finishedWork);
				} finally {
					executionContext = prevExecutionContext, ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = rootHasLayoutEffect;
				}
			}
			pendingEffectsStatus = 3;
		}
	}
	function flushSpawnedWork() {
		if (4 === pendingEffectsStatus || 3 === pendingEffectsStatus) {
			pendingEffectsStatus = 0;
			requestPaint();
			var root = pendingEffectsRoot, finishedWork = pendingFinishedWork, lanes = pendingEffectsLanes, recoverableErrors = pendingRecoverableErrors;
			0 !== (finishedWork.subtreeFlags & 10256) || 0 !== (finishedWork.flags & 10256) ? pendingEffectsStatus = 5 : (pendingEffectsStatus = 0, pendingFinishedWork = pendingEffectsRoot = null, releaseRootPooledCache(root, root.pendingLanes));
			var remainingLanes = root.pendingLanes;
			0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
			lanesToEventPriority(lanes);
			finishedWork = finishedWork.stateNode;
			if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot) try {
				injectedHook.onCommitFiberRoot(rendererID, finishedWork, void 0, 128 === (finishedWork.current.flags & 128));
			} catch (err) {}
			if (null !== recoverableErrors) {
				finishedWork = ReactSharedInternals.T;
				remainingLanes = ReactDOMSharedInternals.p;
				ReactDOMSharedInternals.p = 2;
				ReactSharedInternals.T = null;
				try {
					for (var onRecoverableError = root.onRecoverableError, i = 0; i < recoverableErrors.length; i++) {
						var recoverableError = recoverableErrors[i];
						onRecoverableError(recoverableError.value, { componentStack: recoverableError.stack });
					}
				} finally {
					ReactSharedInternals.T = finishedWork, ReactDOMSharedInternals.p = remainingLanes;
				}
			}
			0 !== (pendingEffectsLanes & 3) && flushPendingEffects();
			ensureRootIsScheduled(root);
			remainingLanes = root.pendingLanes;
			0 !== (lanes & 261930) && 0 !== (remainingLanes & 42) ? root === rootWithNestedUpdates ? nestedUpdateCount++ : (nestedUpdateCount = 0, rootWithNestedUpdates = root) : nestedUpdateCount = 0;
			flushSyncWorkAcrossRoots_impl(0, !1);
		}
	}
	function releaseRootPooledCache(root, remainingLanes) {
		0 === (root.pooledCacheLanes &= remainingLanes) && (remainingLanes = root.pooledCache, null != remainingLanes && (root.pooledCache = null, releaseCache(remainingLanes)));
	}
	function flushPendingEffects() {
		flushMutationEffects();
		flushLayoutEffects();
		flushSpawnedWork();
		return flushPassiveEffects();
	}
	function flushPassiveEffects() {
		if (5 !== pendingEffectsStatus) return !1;
		var root = pendingEffectsRoot, remainingLanes = pendingEffectsRemainingLanes;
		pendingEffectsRemainingLanes = 0;
		var renderPriority = lanesToEventPriority(pendingEffectsLanes), prevTransition = ReactSharedInternals.T, previousPriority = ReactDOMSharedInternals.p;
		try {
			ReactDOMSharedInternals.p = 32 > renderPriority ? 32 : renderPriority;
			ReactSharedInternals.T = null;
			renderPriority = pendingPassiveTransitions;
			pendingPassiveTransitions = null;
			var root$jscomp$0 = pendingEffectsRoot, lanes = pendingEffectsLanes;
			pendingEffectsStatus = 0;
			pendingFinishedWork = pendingEffectsRoot = null;
			pendingEffectsLanes = 0;
			if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(331));
			var prevExecutionContext = executionContext;
			executionContext |= 4;
			commitPassiveUnmountOnFiber(root$jscomp$0.current);
			commitPassiveMountOnFiber(root$jscomp$0, root$jscomp$0.current, lanes, renderPriority);
			executionContext = prevExecutionContext;
			flushSyncWorkAcrossRoots_impl(0, !1);
			if (injectedHook && "function" === typeof injectedHook.onPostCommitFiberRoot) try {
				injectedHook.onPostCommitFiberRoot(rendererID, root$jscomp$0);
			} catch (err) {}
			return !0;
		} finally {
			ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition, releaseRootPooledCache(root, remainingLanes);
		}
	}
	function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
		sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
		sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
		rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
		null !== rootFiber && (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
	}
	function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
		if (3 === sourceFiber.tag) captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
		else for (; null !== nearestMountedAncestor;) {
			if (3 === nearestMountedAncestor.tag) {
				captureCommitPhaseErrorOnRoot(nearestMountedAncestor, sourceFiber, error);
				break;
			} else if (1 === nearestMountedAncestor.tag) {
				var instance = nearestMountedAncestor.stateNode;
				if ("function" === typeof nearestMountedAncestor.type.getDerivedStateFromError || "function" === typeof instance.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(instance))) {
					sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
					error = createClassErrorUpdate(2);
					instance = enqueueUpdate(nearestMountedAncestor, error, 2);
					null !== instance && (initializeClassErrorUpdate(error, instance, nearestMountedAncestor, sourceFiber), markRootUpdated$1(instance, 2), ensureRootIsScheduled(instance));
					break;
				}
			}
			nearestMountedAncestor = nearestMountedAncestor.return;
		}
	}
	function attachPingListener(root, wakeable, lanes) {
		var pingCache = root.pingCache;
		if (null === pingCache) {
			pingCache = root.pingCache = new PossiblyWeakMap();
			var threadIDs = /* @__PURE__ */ new Set();
			pingCache.set(wakeable, threadIDs);
		} else threadIDs = pingCache.get(wakeable), void 0 === threadIDs && (threadIDs = /* @__PURE__ */ new Set(), pingCache.set(wakeable, threadIDs));
		threadIDs.has(lanes) || (workInProgressRootDidAttachPingListener = !0, threadIDs.add(lanes), root = pingSuspendedRoot.bind(null, root, wakeable, lanes), wakeable.then(root, root));
	}
	function pingSuspendedRoot(root, wakeable, pingedLanes) {
		var pingCache = root.pingCache;
		null !== pingCache && pingCache.delete(wakeable);
		root.pingedLanes |= root.suspendedLanes & pingedLanes;
		root.warmLanes &= ~pingedLanes;
		workInProgressRoot === root && (workInProgressRootRenderLanes & pingedLanes) === pingedLanes && (4 === workInProgressRootExitStatus || 3 === workInProgressRootExitStatus && (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes && 300 > now() - globalMostRecentFallbackTime ? 0 === (executionContext & 2) && prepareFreshStack(root, 0) : workInProgressRootPingedLanes |= pingedLanes, workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes && (workInProgressSuspendedRetryLanes = 0));
		ensureRootIsScheduled(root);
	}
	function retryTimedOutBoundary(boundaryFiber, retryLane) {
		0 === retryLane && (retryLane = claimNextRetryLane());
		boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
		null !== boundaryFiber && (markRootUpdated$1(boundaryFiber, retryLane), ensureRootIsScheduled(boundaryFiber));
	}
	function retryDehydratedSuspenseBoundary(boundaryFiber) {
		var suspenseState = boundaryFiber.memoizedState, retryLane = 0;
		null !== suspenseState && (retryLane = suspenseState.retryLane);
		retryTimedOutBoundary(boundaryFiber, retryLane);
	}
	function resolveRetryWakeable(boundaryFiber, wakeable) {
		var retryLane = 0;
		switch (boundaryFiber.tag) {
			case 31:
			case 13:
				var retryCache = boundaryFiber.stateNode;
				var suspenseState = boundaryFiber.memoizedState;
				null !== suspenseState && (retryLane = suspenseState.retryLane);
				break;
			case 19:
				retryCache = boundaryFiber.stateNode;
				break;
			case 22:
				retryCache = boundaryFiber.stateNode._retryCache;
				break;
			default: throw Error(formatProdErrorMessage(314));
		}
		null !== retryCache && retryCache.delete(wakeable);
		retryTimedOutBoundary(boundaryFiber, retryLane);
	}
	function scheduleCallback$1(priorityLevel, callback) {
		return scheduleCallback$3(priorityLevel, callback);
	}
	var firstScheduledRoot = null;
	var lastScheduledRoot = null;
	var didScheduleMicrotask = !1;
	var mightHavePendingSyncWork = !1;
	var isFlushingWork = !1;
	var currentEventTransitionLane = 0;
	function ensureRootIsScheduled(root) {
		root !== lastScheduledRoot && null === root.next && (null === lastScheduledRoot ? firstScheduledRoot = lastScheduledRoot = root : lastScheduledRoot = lastScheduledRoot.next = root);
		mightHavePendingSyncWork = !0;
		didScheduleMicrotask || (didScheduleMicrotask = !0, scheduleImmediateRootScheduleTask());
	}
	function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
		if (!isFlushingWork && mightHavePendingSyncWork) {
			isFlushingWork = !0;
			do {
				var didPerformSomeWork = !1;
				for (var root$170 = firstScheduledRoot; null !== root$170;) {
					if (!onlyLegacy) if (0 !== syncTransitionLanes) {
						var pendingLanes = root$170.pendingLanes;
						if (0 === pendingLanes) var JSCompiler_inline_result = 0;
						else {
							var suspendedLanes = root$170.suspendedLanes, pingedLanes = root$170.pingedLanes;
							JSCompiler_inline_result = (1 << 31 - clz32(42 | syncTransitionLanes) + 1) - 1;
							JSCompiler_inline_result &= pendingLanes & ~(suspendedLanes & ~pingedLanes);
							JSCompiler_inline_result = JSCompiler_inline_result & 201326741 ? JSCompiler_inline_result & 201326741 | 1 : JSCompiler_inline_result ? JSCompiler_inline_result | 2 : 0;
						}
						0 !== JSCompiler_inline_result && (didPerformSomeWork = !0, performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
					} else JSCompiler_inline_result = workInProgressRootRenderLanes, JSCompiler_inline_result = getNextLanes(root$170, root$170 === workInProgressRoot ? JSCompiler_inline_result : 0, null !== root$170.cancelPendingCommit || -1 !== root$170.timeoutHandle), 0 === (JSCompiler_inline_result & 3) || checkIfRootIsPrerendering(root$170, JSCompiler_inline_result) || (didPerformSomeWork = !0, performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
					root$170 = root$170.next;
				}
			} while (didPerformSomeWork);
			isFlushingWork = !1;
		}
	}
	function processRootScheduleInImmediateTask() {
		processRootScheduleInMicrotask();
	}
	function processRootScheduleInMicrotask() {
		mightHavePendingSyncWork = didScheduleMicrotask = !1;
		var syncTransitionLanes = 0;
		0 !== currentEventTransitionLane && shouldAttemptEagerTransition() && (syncTransitionLanes = currentEventTransitionLane);
		for (var currentTime = now(), prev = null, root = firstScheduledRoot; null !== root;) {
			var next = root.next, nextLanes = scheduleTaskForRootDuringMicrotask(root, currentTime);
			if (0 === nextLanes) root.next = null, null === prev ? firstScheduledRoot = next : prev.next = next, null === next && (lastScheduledRoot = prev);
			else if (prev = root, 0 !== syncTransitionLanes || 0 !== (nextLanes & 3)) mightHavePendingSyncWork = !0;
			root = next;
		}
		0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus || flushSyncWorkAcrossRoots_impl(syncTransitionLanes, !1);
		0 !== currentEventTransitionLane && (currentEventTransitionLane = 0);
	}
	function scheduleTaskForRootDuringMicrotask(root, currentTime) {
		for (var suspendedLanes = root.suspendedLanes, pingedLanes = root.pingedLanes, expirationTimes = root.expirationTimes, lanes = root.pendingLanes & -62914561; 0 < lanes;) {
			var index$5 = 31 - clz32(lanes), lane = 1 << index$5, expirationTime = expirationTimes[index$5];
			if (-1 === expirationTime) {
				if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes)) expirationTimes[index$5] = computeExpirationTime(lane, currentTime);
			} else expirationTime <= currentTime && (root.expiredLanes |= lane);
			lanes &= ~lane;
		}
		currentTime = workInProgressRoot;
		suspendedLanes = workInProgressRootRenderLanes;
		suspendedLanes = getNextLanes(root, root === currentTime ? suspendedLanes : 0, null !== root.cancelPendingCommit || -1 !== root.timeoutHandle);
		pingedLanes = root.callbackNode;
		if (0 === suspendedLanes || root === currentTime && (2 === workInProgressSuspendedReason || 9 === workInProgressSuspendedReason) || null !== root.cancelPendingCommit) return null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes), root.callbackNode = null, root.callbackPriority = 0;
		if (0 === (suspendedLanes & 3) || checkIfRootIsPrerendering(root, suspendedLanes)) {
			currentTime = suspendedLanes & -suspendedLanes;
			if (currentTime === root.callbackPriority) return currentTime;
			null !== pingedLanes && cancelCallback$1(pingedLanes);
			switch (lanesToEventPriority(suspendedLanes)) {
				case 2:
				case 8:
					suspendedLanes = UserBlockingPriority;
					break;
				case 32:
					suspendedLanes = NormalPriority$1;
					break;
				case 268435456:
					suspendedLanes = IdlePriority;
					break;
				default: suspendedLanes = NormalPriority$1;
			}
			pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root);
			suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
			root.callbackPriority = currentTime;
			root.callbackNode = suspendedLanes;
			return currentTime;
		}
		null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes);
		root.callbackPriority = 2;
		root.callbackNode = null;
		return 2;
	}
	function performWorkOnRootViaSchedulerTask(root, didTimeout) {
		if (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus) return root.callbackNode = null, root.callbackPriority = 0, null;
		var originalCallbackNode = root.callbackNode;
		if (flushPendingEffects() && root.callbackNode !== originalCallbackNode) return null;
		var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
		workInProgressRootRenderLanes$jscomp$0 = getNextLanes(root, root === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0, null !== root.cancelPendingCommit || -1 !== root.timeoutHandle);
		if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
		performWorkOnRoot(root, workInProgressRootRenderLanes$jscomp$0, didTimeout);
		scheduleTaskForRootDuringMicrotask(root, now());
		return null != root.callbackNode && root.callbackNode === originalCallbackNode ? performWorkOnRootViaSchedulerTask.bind(null, root) : null;
	}
	function performSyncWorkOnRoot(root, lanes) {
		if (flushPendingEffects()) return null;
		performWorkOnRoot(root, lanes, !0);
	}
	function scheduleImmediateRootScheduleTask() {
		scheduleMicrotask(function() {
			0 !== (executionContext & 6) ? scheduleCallback$3(ImmediatePriority, processRootScheduleInImmediateTask) : processRootScheduleInMicrotask();
		});
	}
	function requestTransitionLane() {
		if (0 === currentEventTransitionLane) {
			var actionScopeLane = currentEntangledLane;
			0 === actionScopeLane && (actionScopeLane = nextTransitionUpdateLane, nextTransitionUpdateLane <<= 1, 0 === (nextTransitionUpdateLane & 261888) && (nextTransitionUpdateLane = 256));
			currentEventTransitionLane = actionScopeLane;
		}
		return currentEventTransitionLane;
	}
	function coerceFormActionProp(actionProp) {
		return null == actionProp || "symbol" === typeof actionProp || "boolean" === typeof actionProp ? null : "function" === typeof actionProp ? actionProp : sanitizeURL("" + actionProp);
	}
	function createFormDataWithSubmitter(form, submitter) {
		var temp = submitter.ownerDocument.createElement("input");
		temp.name = submitter.name;
		temp.value = submitter.value;
		form.id && temp.setAttribute("form", form.id);
		submitter.parentNode.insertBefore(temp, submitter);
		form = new FormData(form);
		temp.parentNode.removeChild(temp);
		return form;
	}
	function extractEvents$1(dispatchQueue, domEventName, maybeTargetInst, nativeEvent, nativeEventTarget) {
		if ("submit" === domEventName && maybeTargetInst && maybeTargetInst.stateNode === nativeEventTarget) {
			var action = coerceFormActionProp((nativeEventTarget[internalPropsKey] || null).action), submitter = nativeEvent.submitter;
			submitter && (domEventName = (domEventName = submitter[internalPropsKey] || null) ? coerceFormActionProp(domEventName.formAction) : submitter.getAttribute("formAction"), null !== domEventName && (action = domEventName, submitter = null));
			var event = new SyntheticEvent("action", "action", null, nativeEvent, nativeEventTarget);
			dispatchQueue.push({
				event,
				listeners: [{
					instance: null,
					listener: function() {
						if (nativeEvent.defaultPrevented) {
							if (0 !== currentEventTransitionLane) {
								var formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget);
								startHostTransition(maybeTargetInst, {
									pending: !0,
									data: formData,
									method: nativeEventTarget.method,
									action
								}, null, formData);
							}
						} else "function" === typeof action && (event.preventDefault(), formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget), startHostTransition(maybeTargetInst, {
							pending: !0,
							data: formData,
							method: nativeEventTarget.method,
							action
						}, action, formData));
					},
					currentTarget: nativeEventTarget
				}]
			});
		}
	}
	for (var i$jscomp$inline_1577 = 0; i$jscomp$inline_1577 < simpleEventPluginEvents.length; i$jscomp$inline_1577++) {
		var eventName$jscomp$inline_1578 = simpleEventPluginEvents[i$jscomp$inline_1577];
		registerSimpleEvent(eventName$jscomp$inline_1578.toLowerCase(), "on" + (eventName$jscomp$inline_1578[0].toUpperCase() + eventName$jscomp$inline_1578.slice(1)));
	}
	registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
	registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
	registerSimpleEvent(ANIMATION_START, "onAnimationStart");
	registerSimpleEvent("dblclick", "onDoubleClick");
	registerSimpleEvent("focusin", "onFocus");
	registerSimpleEvent("focusout", "onBlur");
	registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
	registerSimpleEvent(TRANSITION_START, "onTransitionStart");
	registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
	registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
	registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
	registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
	registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
	registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
	registerTwoPhaseEvent("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	registerTwoPhaseEvent("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	registerTwoPhaseEvent("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]);
	registerTwoPhaseEvent("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	registerTwoPhaseEvent("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	registerTwoPhaseEvent("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var mediaEventTypes = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
	var nonDelegatedEvents = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mediaEventTypes));
	function processDispatchQueue(dispatchQueue, eventSystemFlags) {
		eventSystemFlags = 0 !== (eventSystemFlags & 4);
		for (var i = 0; i < dispatchQueue.length; i++) {
			var _dispatchQueue$i = dispatchQueue[i], event = _dispatchQueue$i.event;
			_dispatchQueue$i = _dispatchQueue$i.listeners;
			a: {
				var previousInstance = void 0;
				if (eventSystemFlags) for (var i$jscomp$0 = _dispatchQueue$i.length - 1; 0 <= i$jscomp$0; i$jscomp$0--) {
					var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0], instance = _dispatchListeners$i.instance, currentTarget = _dispatchListeners$i.currentTarget;
					_dispatchListeners$i = _dispatchListeners$i.listener;
					if (instance !== previousInstance && event.isPropagationStopped()) break a;
					previousInstance = _dispatchListeners$i;
					event.currentTarget = currentTarget;
					try {
						previousInstance(event);
					} catch (error) {
						reportGlobalError(error);
					}
					event.currentTarget = null;
					previousInstance = instance;
				}
				else for (i$jscomp$0 = 0; i$jscomp$0 < _dispatchQueue$i.length; i$jscomp$0++) {
					_dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
					instance = _dispatchListeners$i.instance;
					currentTarget = _dispatchListeners$i.currentTarget;
					_dispatchListeners$i = _dispatchListeners$i.listener;
					if (instance !== previousInstance && event.isPropagationStopped()) break a;
					previousInstance = _dispatchListeners$i;
					event.currentTarget = currentTarget;
					try {
						previousInstance(event);
					} catch (error) {
						reportGlobalError(error);
					}
					event.currentTarget = null;
					previousInstance = instance;
				}
			}
		}
	}
	function listenToNonDelegatedEvent(domEventName, targetElement) {
		var JSCompiler_inline_result = targetElement[internalEventHandlersKey];
		void 0 === JSCompiler_inline_result && (JSCompiler_inline_result = targetElement[internalEventHandlersKey] = /* @__PURE__ */ new Set());
		var listenerSetKey = domEventName + "__bubble";
		JSCompiler_inline_result.has(listenerSetKey) || (addTrappedEventListener(targetElement, domEventName, 2, !1), JSCompiler_inline_result.add(listenerSetKey));
	}
	function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
		var eventSystemFlags = 0;
		isCapturePhaseListener && (eventSystemFlags |= 4);
		addTrappedEventListener(target, domEventName, eventSystemFlags, isCapturePhaseListener);
	}
	var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
	function listenToAllSupportedEvents(rootContainerElement) {
		if (!rootContainerElement[listeningMarker]) {
			rootContainerElement[listeningMarker] = !0;
			allNativeEvents.forEach(function(domEventName) {
				"selectionchange" !== domEventName && (nonDelegatedEvents.has(domEventName) || listenToNativeEvent(domEventName, !1, rootContainerElement), listenToNativeEvent(domEventName, !0, rootContainerElement));
			});
			var ownerDocument = 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
			null === ownerDocument || ownerDocument[listeningMarker] || (ownerDocument[listeningMarker] = !0, listenToNativeEvent("selectionchange", !1, ownerDocument));
		}
	}
	function addTrappedEventListener(targetContainer, domEventName, eventSystemFlags, isCapturePhaseListener) {
		switch (getEventPriority(domEventName)) {
			case 2:
				var listenerWrapper = dispatchDiscreteEvent;
				break;
			case 8:
				listenerWrapper = dispatchContinuousEvent;
				break;
			default: listenerWrapper = dispatchEvent;
		}
		eventSystemFlags = listenerWrapper.bind(null, domEventName, eventSystemFlags, targetContainer);
		listenerWrapper = void 0;
		!passiveBrowserEventsSupported || "touchstart" !== domEventName && "touchmove" !== domEventName && "wheel" !== domEventName || (listenerWrapper = !0);
		isCapturePhaseListener ? void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
			capture: !0,
			passive: listenerWrapper
		}) : targetContainer.addEventListener(domEventName, eventSystemFlags, !0) : void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, { passive: listenerWrapper }) : targetContainer.addEventListener(domEventName, eventSystemFlags, !1);
	}
	function dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst$jscomp$0, targetContainer) {
		var ancestorInst = targetInst$jscomp$0;
		if (0 === (eventSystemFlags & 1) && 0 === (eventSystemFlags & 2) && null !== targetInst$jscomp$0) a: for (;;) {
			if (null === targetInst$jscomp$0) return;
			var nodeTag = targetInst$jscomp$0.tag;
			if (3 === nodeTag || 4 === nodeTag) {
				var container = targetInst$jscomp$0.stateNode.containerInfo;
				if (container === targetContainer) break;
				if (4 === nodeTag) for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag;) {
					var grandTag = nodeTag.tag;
					if ((3 === grandTag || 4 === grandTag) && nodeTag.stateNode.containerInfo === targetContainer) return;
					nodeTag = nodeTag.return;
				}
				for (; null !== container;) {
					nodeTag = getClosestInstanceFromNode(container);
					if (null === nodeTag) return;
					grandTag = nodeTag.tag;
					if (5 === grandTag || 6 === grandTag || 26 === grandTag || 27 === grandTag) {
						targetInst$jscomp$0 = ancestorInst = nodeTag;
						continue a;
					}
					container = container.parentNode;
				}
			}
			targetInst$jscomp$0 = targetInst$jscomp$0.return;
		}
		batchedUpdates$1(function() {
			var targetInst = ancestorInst, nativeEventTarget = getEventTarget(nativeEvent), dispatchQueue = [];
			a: {
				var reactName = topLevelEventsToReactNames.get(domEventName);
				if (void 0 !== reactName) {
					var SyntheticEventCtor = SyntheticEvent, reactEventType = domEventName;
					switch (domEventName) {
						case "keypress": if (0 === getEventCharCode(nativeEvent)) break a;
						case "keydown":
						case "keyup":
							SyntheticEventCtor = SyntheticKeyboardEvent;
							break;
						case "focusin":
							reactEventType = "focus";
							SyntheticEventCtor = SyntheticFocusEvent;
							break;
						case "focusout":
							reactEventType = "blur";
							SyntheticEventCtor = SyntheticFocusEvent;
							break;
						case "beforeblur":
						case "afterblur":
							SyntheticEventCtor = SyntheticFocusEvent;
							break;
						case "click": if (2 === nativeEvent.button) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							SyntheticEventCtor = SyntheticMouseEvent;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							SyntheticEventCtor = SyntheticDragEvent;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							SyntheticEventCtor = SyntheticTouchEvent;
							break;
						case ANIMATION_END:
						case ANIMATION_ITERATION:
						case ANIMATION_START:
							SyntheticEventCtor = SyntheticAnimationEvent;
							break;
						case TRANSITION_END:
							SyntheticEventCtor = SyntheticTransitionEvent;
							break;
						case "scroll":
						case "scrollend":
							SyntheticEventCtor = SyntheticUIEvent;
							break;
						case "wheel":
							SyntheticEventCtor = SyntheticWheelEvent;
							break;
						case "copy":
						case "cut":
						case "paste":
							SyntheticEventCtor = SyntheticClipboardEvent;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							SyntheticEventCtor = SyntheticPointerEvent;
							break;
						case "toggle":
						case "beforetoggle": SyntheticEventCtor = SyntheticToggleEvent;
					}
					var inCapturePhase = 0 !== (eventSystemFlags & 4), accumulateTargetOnly = !inCapturePhase && ("scroll" === domEventName || "scrollend" === domEventName), reactEventName = inCapturePhase ? null !== reactName ? reactName + "Capture" : null : reactName;
					inCapturePhase = [];
					for (var instance = targetInst, lastHostComponent; null !== instance;) {
						var _instance = instance;
						lastHostComponent = _instance.stateNode;
						_instance = _instance.tag;
						5 !== _instance && 26 !== _instance && 27 !== _instance || null === lastHostComponent || null === reactEventName || (_instance = getListener(instance, reactEventName), null != _instance && inCapturePhase.push(createDispatchListener(instance, _instance, lastHostComponent)));
						if (accumulateTargetOnly) break;
						instance = instance.return;
					}
					0 < inCapturePhase.length && (reactName = new SyntheticEventCtor(reactName, reactEventType, null, nativeEvent, nativeEventTarget), dispatchQueue.push({
						event: reactName,
						listeners: inCapturePhase
					}));
				}
			}
			if (0 === (eventSystemFlags & 7)) {
				a: {
					reactName = "mouseover" === domEventName || "pointerover" === domEventName;
					SyntheticEventCtor = "mouseout" === domEventName || "pointerout" === domEventName;
					if (reactName && nativeEvent !== currentReplayingEvent && (reactEventType = nativeEvent.relatedTarget || nativeEvent.fromElement) && (getClosestInstanceFromNode(reactEventType) || reactEventType[internalContainerInstanceKey])) break a;
					if (SyntheticEventCtor || reactName) {
						reactName = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget : (reactName = nativeEventTarget.ownerDocument) ? reactName.defaultView || reactName.parentWindow : window;
						if (SyntheticEventCtor) {
							if (reactEventType = nativeEvent.relatedTarget || nativeEvent.toElement, SyntheticEventCtor = targetInst, reactEventType = reactEventType ? getClosestInstanceFromNode(reactEventType) : null, null !== reactEventType && (accumulateTargetOnly = getNearestMountedFiber(reactEventType), inCapturePhase = reactEventType.tag, reactEventType !== accumulateTargetOnly || 5 !== inCapturePhase && 27 !== inCapturePhase && 6 !== inCapturePhase)) reactEventType = null;
						} else SyntheticEventCtor = null, reactEventType = targetInst;
						if (SyntheticEventCtor !== reactEventType) {
							inCapturePhase = SyntheticMouseEvent;
							_instance = "onMouseLeave";
							reactEventName = "onMouseEnter";
							instance = "mouse";
							if ("pointerout" === domEventName || "pointerover" === domEventName) inCapturePhase = SyntheticPointerEvent, _instance = "onPointerLeave", reactEventName = "onPointerEnter", instance = "pointer";
							accumulateTargetOnly = null == SyntheticEventCtor ? reactName : getNodeFromInstance(SyntheticEventCtor);
							lastHostComponent = null == reactEventType ? reactName : getNodeFromInstance(reactEventType);
							reactName = new inCapturePhase(_instance, instance + "leave", SyntheticEventCtor, nativeEvent, nativeEventTarget);
							reactName.target = accumulateTargetOnly;
							reactName.relatedTarget = lastHostComponent;
							_instance = null;
							getClosestInstanceFromNode(nativeEventTarget) === targetInst && (inCapturePhase = new inCapturePhase(reactEventName, instance + "enter", reactEventType, nativeEvent, nativeEventTarget), inCapturePhase.target = lastHostComponent, inCapturePhase.relatedTarget = accumulateTargetOnly, _instance = inCapturePhase);
							accumulateTargetOnly = _instance;
							if (SyntheticEventCtor && reactEventType) b: {
								inCapturePhase = getParent;
								reactEventName = SyntheticEventCtor;
								instance = reactEventType;
								lastHostComponent = 0;
								for (_instance = reactEventName; _instance; _instance = inCapturePhase(_instance)) lastHostComponent++;
								_instance = 0;
								for (var tempB = instance; tempB; tempB = inCapturePhase(tempB)) _instance++;
								for (; 0 < lastHostComponent - _instance;) reactEventName = inCapturePhase(reactEventName), lastHostComponent--;
								for (; 0 < _instance - lastHostComponent;) instance = inCapturePhase(instance), _instance--;
								for (; lastHostComponent--;) {
									if (reactEventName === instance || null !== instance && reactEventName === instance.alternate) {
										inCapturePhase = reactEventName;
										break b;
									}
									reactEventName = inCapturePhase(reactEventName);
									instance = inCapturePhase(instance);
								}
								inCapturePhase = null;
							}
							else inCapturePhase = null;
							null !== SyntheticEventCtor && accumulateEnterLeaveListenersForEvent(dispatchQueue, reactName, SyntheticEventCtor, inCapturePhase, !1);
							null !== reactEventType && null !== accumulateTargetOnly && accumulateEnterLeaveListenersForEvent(dispatchQueue, accumulateTargetOnly, reactEventType, inCapturePhase, !0);
						}
					}
				}
				a: {
					reactName = targetInst ? getNodeFromInstance(targetInst) : window;
					SyntheticEventCtor = reactName.nodeName && reactName.nodeName.toLowerCase();
					if ("select" === SyntheticEventCtor || "input" === SyntheticEventCtor && "file" === reactName.type) var getTargetInstFunc = getTargetInstForChangeEvent;
					else if (isTextInputElement(reactName)) if (isInputEventSupported) getTargetInstFunc = getTargetInstForInputOrChangeEvent;
					else {
						getTargetInstFunc = getTargetInstForInputEventPolyfill;
						var handleEventFunc = handleEventsForInputEventPolyfill;
					}
					else SyntheticEventCtor = reactName.nodeName, !SyntheticEventCtor || "input" !== SyntheticEventCtor.toLowerCase() || "checkbox" !== reactName.type && "radio" !== reactName.type ? targetInst && isCustomElement(targetInst.elementType) && (getTargetInstFunc = getTargetInstForChangeEvent) : getTargetInstFunc = getTargetInstForClickEvent;
					if (getTargetInstFunc && (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))) {
						createAndAccumulateChangeEvent(dispatchQueue, getTargetInstFunc, nativeEvent, nativeEventTarget);
						break a;
					}
					handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
					"focusout" === domEventName && targetInst && "number" === reactName.type && null != targetInst.memoizedProps.value && setDefaultValue(reactName, "number", reactName.value);
				}
				handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
				switch (domEventName) {
					case "focusin":
						if (isTextInputElement(handleEventFunc) || "true" === handleEventFunc.contentEditable) activeElement = handleEventFunc, activeElementInst = targetInst, lastSelection = null;
						break;
					case "focusout":
						lastSelection = activeElementInst = activeElement = null;
						break;
					case "mousedown":
						mouseDown = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						mouseDown = !1;
						constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
						break;
					case "selectionchange": if (skipSelectionChangeEvent) break;
					case "keydown":
					case "keyup": constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
				}
				var fallbackData;
				if (canUseCompositionEvent) b: {
					switch (domEventName) {
						case "compositionstart":
							var eventType = "onCompositionStart";
							break b;
						case "compositionend":
							eventType = "onCompositionEnd";
							break b;
						case "compositionupdate":
							eventType = "onCompositionUpdate";
							break b;
					}
					eventType = void 0;
				}
				else isComposing ? isFallbackCompositionEnd(domEventName, nativeEvent) && (eventType = "onCompositionEnd") : "keydown" === domEventName && 229 === nativeEvent.keyCode && (eventType = "onCompositionStart");
				eventType && (useFallbackCompositionData && "ko" !== nativeEvent.locale && (isComposing || "onCompositionStart" !== eventType ? "onCompositionEnd" === eventType && isComposing && (fallbackData = getData()) : (root = nativeEventTarget, startText = "value" in root ? root.value : root.textContent, isComposing = !0)), handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType), 0 < handleEventFunc.length && (eventType = new SyntheticCompositionEvent(eventType, domEventName, null, nativeEvent, nativeEventTarget), dispatchQueue.push({
					event: eventType,
					listeners: handleEventFunc
				}), fallbackData ? eventType.data = fallbackData : (fallbackData = getDataFromCustomEvent(nativeEvent), null !== fallbackData && (eventType.data = fallbackData))));
				if (fallbackData = canUseTextInputEvent ? getNativeBeforeInputChars(domEventName, nativeEvent) : getFallbackBeforeInputChars(domEventName, nativeEvent)) eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput"), 0 < eventType.length && (handleEventFunc = new SyntheticCompositionEvent("onBeforeInput", "beforeinput", null, nativeEvent, nativeEventTarget), dispatchQueue.push({
					event: handleEventFunc,
					listeners: eventType
				}), handleEventFunc.data = fallbackData);
				extractEvents$1(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
			}
			processDispatchQueue(dispatchQueue, eventSystemFlags);
		});
	}
	function createDispatchListener(instance, listener, currentTarget) {
		return {
			instance,
			listener,
			currentTarget
		};
	}
	function accumulateTwoPhaseListeners(targetFiber, reactName) {
		for (var captureName = reactName + "Capture", listeners = []; null !== targetFiber;) {
			var _instance2 = targetFiber, stateNode = _instance2.stateNode;
			_instance2 = _instance2.tag;
			5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2 || null === stateNode || (_instance2 = getListener(targetFiber, captureName), null != _instance2 && listeners.unshift(createDispatchListener(targetFiber, _instance2, stateNode)), _instance2 = getListener(targetFiber, reactName), null != _instance2 && listeners.push(createDispatchListener(targetFiber, _instance2, stateNode)));
			if (3 === targetFiber.tag) return listeners;
			targetFiber = targetFiber.return;
		}
		return [];
	}
	function getParent(inst) {
		if (null === inst) return null;
		do
			inst = inst.return;
		while (inst && 5 !== inst.tag && 27 !== inst.tag);
		return inst ? inst : null;
	}
	function accumulateEnterLeaveListenersForEvent(dispatchQueue, event, target, common, inCapturePhase) {
		for (var registrationName = event._reactName, listeners = []; null !== target && target !== common;) {
			var _instance3 = target, alternate = _instance3.alternate, stateNode = _instance3.stateNode;
			_instance3 = _instance3.tag;
			if (null !== alternate && alternate === common) break;
			5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3 || null === stateNode || (alternate = stateNode, inCapturePhase ? (stateNode = getListener(target, registrationName), null != stateNode && listeners.unshift(createDispatchListener(target, stateNode, alternate))) : inCapturePhase || (stateNode = getListener(target, registrationName), null != stateNode && listeners.push(createDispatchListener(target, stateNode, alternate))));
			target = target.return;
		}
		0 !== listeners.length && dispatchQueue.push({
			event,
			listeners
		});
	}
	var NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
	var NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
	function normalizeMarkupForTextOrAttribute(markup) {
		return ("string" === typeof markup ? markup : "" + markup).replace(NORMALIZE_NEWLINES_REGEX, "\n").replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
	}
	function checkForUnmatchedText(serverText, clientText) {
		clientText = normalizeMarkupForTextOrAttribute(clientText);
		return normalizeMarkupForTextOrAttribute(serverText) === clientText ? !0 : !1;
	}
	function setProp(domElement, tag, key, value, props, prevValue) {
		switch (key) {
			case "children":
				"string" === typeof value ? "body" === tag || "textarea" === tag && "" === value || setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && "body" !== tag && setTextContent(domElement, "" + value);
				break;
			case "className":
				setValueForKnownAttribute(domElement, "class", value);
				break;
			case "tabIndex":
				setValueForKnownAttribute(domElement, "tabindex", value);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				setValueForKnownAttribute(domElement, key, value);
				break;
			case "style":
				setValueForStyles(domElement, value, prevValue);
				break;
			case "data": if ("object" !== tag) {
				setValueForKnownAttribute(domElement, "data", value);
				break;
			}
			case "src":
			case "href":
				if ("" === value && ("a" !== tag || "href" !== key)) {
					domElement.removeAttribute(key);
					break;
				}
				if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) {
					domElement.removeAttribute(key);
					break;
				}
				value = sanitizeURL("" + value);
				domElement.setAttribute(key, value);
				break;
			case "action":
			case "formAction":
				if ("function" === typeof value) {
					domElement.setAttribute(key, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				} else "function" === typeof prevValue && ("formAction" === key ? ("input" !== tag && setProp(domElement, tag, "name", props.name, props, null), setProp(domElement, tag, "formEncType", props.formEncType, props, null), setProp(domElement, tag, "formMethod", props.formMethod, props, null), setProp(domElement, tag, "formTarget", props.formTarget, props, null)) : (setProp(domElement, tag, "encType", props.encType, props, null), setProp(domElement, tag, "method", props.method, props, null), setProp(domElement, tag, "target", props.target, props, null)));
				if (null == value || "symbol" === typeof value || "boolean" === typeof value) {
					domElement.removeAttribute(key);
					break;
				}
				value = sanitizeURL("" + value);
				domElement.setAttribute(key, value);
				break;
			case "onClick":
				null != value && (domElement.onclick = noop$1);
				break;
			case "onScroll":
				null != value && listenToNonDelegatedEvent("scroll", domElement);
				break;
			case "onScrollEnd":
				null != value && listenToNonDelegatedEvent("scrollend", domElement);
				break;
			case "dangerouslySetInnerHTML":
				if (null != value) {
					if ("object" !== typeof value || !("__html" in value)) throw Error(formatProdErrorMessage(61));
					key = value.__html;
					if (null != key) {
						if (null != props.children) throw Error(formatProdErrorMessage(60));
						domElement.innerHTML = key;
					}
				}
				break;
			case "multiple":
				domElement.multiple = value && "function" !== typeof value && "symbol" !== typeof value;
				break;
			case "muted":
				domElement.muted = value && "function" !== typeof value && "symbol" !== typeof value;
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (null == value || "function" === typeof value || "boolean" === typeof value || "symbol" === typeof value) {
					domElement.removeAttribute("xlink:href");
					break;
				}
				key = sanitizeURL("" + value);
				domElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", key);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "" + value) : domElement.removeAttribute(key);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "") : domElement.removeAttribute(key);
				break;
			case "capture":
			case "download":
				!0 === value ? domElement.setAttribute(key, "") : !1 !== value && null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				null != value && "function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
				break;
			case "rowSpan":
			case "start":
				null == value || "function" === typeof value || "symbol" === typeof value || isNaN(value) ? domElement.removeAttribute(key) : domElement.setAttribute(key, value);
				break;
			case "popover":
				listenToNonDelegatedEvent("beforetoggle", domElement);
				listenToNonDelegatedEvent("toggle", domElement);
				setValueForAttribute(domElement, "popover", value);
				break;
			case "xlinkActuate":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:actuate", value);
				break;
			case "xlinkArcrole":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:arcrole", value);
				break;
			case "xlinkRole":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:role", value);
				break;
			case "xlinkShow":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:show", value);
				break;
			case "xlinkTitle":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:title", value);
				break;
			case "xlinkType":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:type", value);
				break;
			case "xmlBase":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/XML/1998/namespace", "xml:base", value);
				break;
			case "xmlLang":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/XML/1998/namespace", "xml:lang", value);
				break;
			case "xmlSpace":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/XML/1998/namespace", "xml:space", value);
				break;
			case "is":
				setValueForAttribute(domElement, "is", value);
				break;
			case "innerText":
			case "textContent": break;
			default: if (!(2 < key.length) || "o" !== key[0] && "O" !== key[0] || "n" !== key[1] && "N" !== key[1]) key = aliases.get(key) || key, setValueForAttribute(domElement, key, value);
		}
	}
	function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
		switch (key) {
			case "style":
				setValueForStyles(domElement, value, prevValue);
				break;
			case "dangerouslySetInnerHTML":
				if (null != value) {
					if ("object" !== typeof value || !("__html" in value)) throw Error(formatProdErrorMessage(61));
					key = value.__html;
					if (null != key) {
						if (null != props.children) throw Error(formatProdErrorMessage(60));
						domElement.innerHTML = key;
					}
				}
				break;
			case "children":
				"string" === typeof value ? setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && setTextContent(domElement, "" + value);
				break;
			case "onScroll":
				null != value && listenToNonDelegatedEvent("scroll", domElement);
				break;
			case "onScrollEnd":
				null != value && listenToNonDelegatedEvent("scrollend", domElement);
				break;
			case "onClick":
				null != value && (domElement.onclick = noop$1);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": break;
			case "innerText":
			case "textContent": break;
			default: if (!registrationNameDependencies.hasOwnProperty(key)) a: {
				if ("o" === key[0] && "n" === key[1] && (props = key.endsWith("Capture"), tag = key.slice(2, props ? key.length - 7 : void 0), prevValue = domElement[internalPropsKey] || null, prevValue = null != prevValue ? prevValue[key] : null, "function" === typeof prevValue && domElement.removeEventListener(tag, prevValue, props), "function" === typeof value)) {
					"function" !== typeof prevValue && null !== prevValue && (key in domElement ? domElement[key] = null : domElement.hasAttribute(key) && domElement.removeAttribute(key));
					domElement.addEventListener(tag, value, props);
					break a;
				}
				key in domElement ? domElement[key] = value : !0 === value ? domElement.setAttribute(key, "") : setValueForAttribute(domElement, key, value);
			}
		}
	}
	function setInitialProperties(domElement, tag, props) {
		switch (tag) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				listenToNonDelegatedEvent("error", domElement);
				listenToNonDelegatedEvent("load", domElement);
				var hasSrc = !1, hasSrcSet = !1, propKey;
				for (propKey in props) if (props.hasOwnProperty(propKey)) {
					var propValue = props[propKey];
					if (null != propValue) switch (propKey) {
						case "src":
							hasSrc = !0;
							break;
						case "srcSet":
							hasSrcSet = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(137, tag));
						default: setProp(domElement, tag, propKey, propValue, props, null);
					}
				}
				hasSrcSet && setProp(domElement, tag, "srcSet", props.srcSet, props, null);
				hasSrc && setProp(domElement, tag, "src", props.src, props, null);
				return;
			case "input":
				listenToNonDelegatedEvent("invalid", domElement);
				var defaultValue = propKey = propValue = hasSrcSet = null, checked = null, defaultChecked = null;
				for (hasSrc in props) if (props.hasOwnProperty(hasSrc)) {
					var propValue$184 = props[hasSrc];
					if (null != propValue$184) switch (hasSrc) {
						case "name":
							hasSrcSet = propValue$184;
							break;
						case "type":
							propValue = propValue$184;
							break;
						case "checked":
							checked = propValue$184;
							break;
						case "defaultChecked":
							defaultChecked = propValue$184;
							break;
						case "value":
							propKey = propValue$184;
							break;
						case "defaultValue":
							defaultValue = propValue$184;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (null != propValue$184) throw Error(formatProdErrorMessage(137, tag));
							break;
						default: setProp(domElement, tag, hasSrc, propValue$184, props, null);
					}
				}
				initInput(domElement, propKey, defaultValue, checked, defaultChecked, propValue, hasSrcSet, !1);
				return;
			case "select":
				listenToNonDelegatedEvent("invalid", domElement);
				hasSrc = propValue = propKey = null;
				for (hasSrcSet in props) if (props.hasOwnProperty(hasSrcSet) && (defaultValue = props[hasSrcSet], null != defaultValue)) switch (hasSrcSet) {
					case "value":
						propKey = defaultValue;
						break;
					case "defaultValue":
						propValue = defaultValue;
						break;
					case "multiple": hasSrc = defaultValue;
					default: setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
				}
				tag = propKey;
				props = propValue;
				domElement.multiple = !!hasSrc;
				null != tag ? updateOptions(domElement, !!hasSrc, tag, !1) : null != props && updateOptions(domElement, !!hasSrc, props, !0);
				return;
			case "textarea":
				listenToNonDelegatedEvent("invalid", domElement);
				propKey = hasSrcSet = hasSrc = null;
				for (propValue in props) if (props.hasOwnProperty(propValue) && (defaultValue = props[propValue], null != defaultValue)) switch (propValue) {
					case "value":
						hasSrc = defaultValue;
						break;
					case "defaultValue":
						hasSrcSet = defaultValue;
						break;
					case "children":
						propKey = defaultValue;
						break;
					case "dangerouslySetInnerHTML":
						if (null != defaultValue) throw Error(formatProdErrorMessage(91));
						break;
					default: setProp(domElement, tag, propValue, defaultValue, props, null);
				}
				initTextarea(domElement, hasSrc, hasSrcSet, propKey);
				return;
			case "option":
				for (checked in props) if (props.hasOwnProperty(checked) && (hasSrc = props[checked], null != hasSrc)) switch (checked) {
					case "selected":
						domElement.selected = hasSrc && "function" !== typeof hasSrc && "symbol" !== typeof hasSrc;
						break;
					default: setProp(domElement, tag, checked, hasSrc, props, null);
				}
				return;
			case "dialog":
				listenToNonDelegatedEvent("beforetoggle", domElement);
				listenToNonDelegatedEvent("toggle", domElement);
				listenToNonDelegatedEvent("cancel", domElement);
				listenToNonDelegatedEvent("close", domElement);
				break;
			case "iframe":
			case "object":
				listenToNonDelegatedEvent("load", domElement);
				break;
			case "video":
			case "audio":
				for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++) listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
				break;
			case "image":
				listenToNonDelegatedEvent("error", domElement);
				listenToNonDelegatedEvent("load", domElement);
				break;
			case "details":
				listenToNonDelegatedEvent("toggle", domElement);
				break;
			case "embed":
			case "source":
			case "link": listenToNonDelegatedEvent("error", domElement), listenToNonDelegatedEvent("load", domElement);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (defaultChecked in props) if (props.hasOwnProperty(defaultChecked) && (hasSrc = props[defaultChecked], null != hasSrc)) switch (defaultChecked) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(137, tag));
					default: setProp(domElement, tag, defaultChecked, hasSrc, props, null);
				}
				return;
			default: if (isCustomElement(tag)) {
				for (propValue$184 in props) props.hasOwnProperty(propValue$184) && (hasSrc = props[propValue$184], void 0 !== hasSrc && setPropOnCustomElement(domElement, tag, propValue$184, hasSrc, props, void 0));
				return;
			}
		}
		for (defaultValue in props) props.hasOwnProperty(defaultValue) && (hasSrc = props[defaultValue], null != hasSrc && setProp(domElement, tag, defaultValue, hasSrc, props, null));
	}
	function updateProperties(domElement, tag, lastProps, nextProps) {
		switch (tag) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var name = null, type = null, value = null, defaultValue = null, lastDefaultValue = null, checked = null, defaultChecked = null;
				for (propKey in lastProps) {
					var lastProp = lastProps[propKey];
					if (lastProps.hasOwnProperty(propKey) && null != lastProp) switch (propKey) {
						case "checked": break;
						case "value": break;
						case "defaultValue": lastDefaultValue = lastProp;
						default: nextProps.hasOwnProperty(propKey) || setProp(domElement, tag, propKey, null, nextProps, lastProp);
					}
				}
				for (var propKey$201 in nextProps) {
					var propKey = nextProps[propKey$201];
					lastProp = lastProps[propKey$201];
					if (nextProps.hasOwnProperty(propKey$201) && (null != propKey || null != lastProp)) switch (propKey$201) {
						case "type":
							type = propKey;
							break;
						case "name":
							name = propKey;
							break;
						case "checked":
							checked = propKey;
							break;
						case "defaultChecked":
							defaultChecked = propKey;
							break;
						case "value":
							value = propKey;
							break;
						case "defaultValue":
							defaultValue = propKey;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (null != propKey) throw Error(formatProdErrorMessage(137, tag));
							break;
						default: propKey !== lastProp && setProp(domElement, tag, propKey$201, propKey, nextProps, lastProp);
					}
				}
				updateInput(domElement, value, defaultValue, lastDefaultValue, checked, defaultChecked, type, name);
				return;
			case "select":
				propKey = value = defaultValue = propKey$201 = null;
				for (type in lastProps) if (lastDefaultValue = lastProps[type], lastProps.hasOwnProperty(type) && null != lastDefaultValue) switch (type) {
					case "value": break;
					case "multiple": propKey = lastDefaultValue;
					default: nextProps.hasOwnProperty(type) || setProp(domElement, tag, type, null, nextProps, lastDefaultValue);
				}
				for (name in nextProps) if (type = nextProps[name], lastDefaultValue = lastProps[name], nextProps.hasOwnProperty(name) && (null != type || null != lastDefaultValue)) switch (name) {
					case "value":
						propKey$201 = type;
						break;
					case "defaultValue":
						defaultValue = type;
						break;
					case "multiple": value = type;
					default: type !== lastDefaultValue && setProp(domElement, tag, name, type, nextProps, lastDefaultValue);
				}
				tag = defaultValue;
				lastProps = value;
				nextProps = propKey;
				null != propKey$201 ? updateOptions(domElement, !!lastProps, propKey$201, !1) : !!nextProps !== !!lastProps && (null != tag ? updateOptions(domElement, !!lastProps, tag, !0) : updateOptions(domElement, !!lastProps, lastProps ? [] : "", !1));
				return;
			case "textarea":
				propKey = propKey$201 = null;
				for (defaultValue in lastProps) if (name = lastProps[defaultValue], lastProps.hasOwnProperty(defaultValue) && null != name && !nextProps.hasOwnProperty(defaultValue)) switch (defaultValue) {
					case "value": break;
					case "children": break;
					default: setProp(domElement, tag, defaultValue, null, nextProps, name);
				}
				for (value in nextProps) if (name = nextProps[value], type = lastProps[value], nextProps.hasOwnProperty(value) && (null != name || null != type)) switch (value) {
					case "value":
						propKey$201 = name;
						break;
					case "defaultValue":
						propKey = name;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (null != name) throw Error(formatProdErrorMessage(91));
						break;
					default: name !== type && setProp(domElement, tag, value, name, nextProps, type);
				}
				updateTextarea(domElement, propKey$201, propKey);
				return;
			case "option":
				for (var propKey$217 in lastProps) if (propKey$201 = lastProps[propKey$217], lastProps.hasOwnProperty(propKey$217) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$217)) switch (propKey$217) {
					case "selected":
						domElement.selected = !1;
						break;
					default: setProp(domElement, tag, propKey$217, null, nextProps, propKey$201);
				}
				for (lastDefaultValue in nextProps) if (propKey$201 = nextProps[lastDefaultValue], propKey = lastProps[lastDefaultValue], nextProps.hasOwnProperty(lastDefaultValue) && propKey$201 !== propKey && (null != propKey$201 || null != propKey)) switch (lastDefaultValue) {
					case "selected":
						domElement.selected = propKey$201 && "function" !== typeof propKey$201 && "symbol" !== typeof propKey$201;
						break;
					default: setProp(domElement, tag, lastDefaultValue, propKey$201, nextProps, propKey);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var propKey$222 in lastProps) propKey$201 = lastProps[propKey$222], lastProps.hasOwnProperty(propKey$222) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$222) && setProp(domElement, tag, propKey$222, null, nextProps, propKey$201);
				for (checked in nextProps) if (propKey$201 = nextProps[checked], propKey = lastProps[checked], nextProps.hasOwnProperty(checked) && propKey$201 !== propKey && (null != propKey$201 || null != propKey)) switch (checked) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (null != propKey$201) throw Error(formatProdErrorMessage(137, tag));
						break;
					default: setProp(domElement, tag, checked, propKey$201, nextProps, propKey);
				}
				return;
			default: if (isCustomElement(tag)) {
				for (var propKey$227 in lastProps) propKey$201 = lastProps[propKey$227], lastProps.hasOwnProperty(propKey$227) && void 0 !== propKey$201 && !nextProps.hasOwnProperty(propKey$227) && setPropOnCustomElement(domElement, tag, propKey$227, void 0, nextProps, propKey$201);
				for (defaultChecked in nextProps) propKey$201 = nextProps[defaultChecked], propKey = lastProps[defaultChecked], !nextProps.hasOwnProperty(defaultChecked) || propKey$201 === propKey || void 0 === propKey$201 && void 0 === propKey || setPropOnCustomElement(domElement, tag, defaultChecked, propKey$201, nextProps, propKey);
				return;
			}
		}
		for (var propKey$232 in lastProps) propKey$201 = lastProps[propKey$232], lastProps.hasOwnProperty(propKey$232) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$232) && setProp(domElement, tag, propKey$232, null, nextProps, propKey$201);
		for (lastProp in nextProps) propKey$201 = nextProps[lastProp], propKey = lastProps[lastProp], !nextProps.hasOwnProperty(lastProp) || propKey$201 === propKey || null == propKey$201 && null == propKey || setProp(domElement, tag, lastProp, propKey$201, nextProps, propKey);
	}
	function isLikelyStaticResource(initiatorType) {
		switch (initiatorType) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function estimateBandwidth() {
		if ("function" === typeof performance.getEntriesByType) {
			for (var count = 0, bits = 0, resourceEntries = performance.getEntriesByType("resource"), i = 0; i < resourceEntries.length; i++) {
				var entry = resourceEntries[i], transferSize = entry.transferSize, initiatorType = entry.initiatorType, duration = entry.duration;
				if (transferSize && duration && isLikelyStaticResource(initiatorType)) {
					initiatorType = 0;
					duration = entry.responseEnd;
					for (i += 1; i < resourceEntries.length; i++) {
						var overlapEntry = resourceEntries[i], overlapStartTime = overlapEntry.startTime;
						if (overlapStartTime > duration) break;
						var overlapTransferSize = overlapEntry.transferSize, overlapInitiatorType = overlapEntry.initiatorType;
						overlapTransferSize && isLikelyStaticResource(overlapInitiatorType) && (overlapEntry = overlapEntry.responseEnd, initiatorType += overlapTransferSize * (overlapEntry < duration ? 1 : (duration - overlapStartTime) / (overlapEntry - overlapStartTime)));
					}
					--i;
					bits += 8 * (transferSize + initiatorType) / (entry.duration / 1e3);
					count++;
					if (10 < count) break;
				}
			}
			if (0 < count) return bits / count / 1e6;
		}
		return navigator.connection && (count = navigator.connection.downlink, "number" === typeof count) ? count : 5;
	}
	var eventsEnabled = null;
	var selectionInformation = null;
	function getOwnerDocumentFromRootContainer(rootContainerElement) {
		return 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
	}
	function getOwnHostContext(namespaceURI) {
		switch (namespaceURI) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function getChildHostContextProd(parentNamespace, type) {
		if (0 === parentNamespace) switch (type) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return 1 === parentNamespace && "foreignObject" === type ? 0 : parentNamespace;
	}
	function shouldSetTextContent(type, props) {
		return "textarea" === type || "noscript" === type || "string" === typeof props.children || "number" === typeof props.children || "bigint" === typeof props.children || "object" === typeof props.dangerouslySetInnerHTML && null !== props.dangerouslySetInnerHTML && null != props.dangerouslySetInnerHTML.__html;
	}
	var currentPopstateTransitionEvent = null;
	function shouldAttemptEagerTransition() {
		var event = window.event;
		if (event && "popstate" === event.type) {
			if (event === currentPopstateTransitionEvent) return !1;
			currentPopstateTransitionEvent = event;
			return !0;
		}
		currentPopstateTransitionEvent = null;
		return !1;
	}
	var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0;
	var cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0;
	var localPromise = "function" === typeof Promise ? Promise : void 0;
	var scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof localPromise ? function(callback) {
		return localPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
	} : scheduleTimeout;
	function handleErrorInNextTick(error) {
		setTimeout(function() {
			throw error;
		});
	}
	function isSingletonScope(type) {
		return "head" === type;
	}
	function clearHydrationBoundary(parentInstance, hydrationInstance) {
		var node = hydrationInstance, depth = 0;
		do {
			var nextNode = node.nextSibling;
			parentInstance.removeChild(node);
			if (nextNode && 8 === nextNode.nodeType) if (node = nextNode.data, "/$" === node || "/&" === node) {
				if (0 === depth) {
					parentInstance.removeChild(nextNode);
					retryIfBlockedOn(hydrationInstance);
					return;
				}
				depth--;
			} else if ("$" === node || "$?" === node || "$~" === node || "$!" === node || "&" === node) depth++;
			else if ("html" === node) releaseSingletonInstance(parentInstance.ownerDocument.documentElement);
			else if ("head" === node) {
				node = parentInstance.ownerDocument.head;
				releaseSingletonInstance(node);
				for (var node$jscomp$0 = node.firstChild; node$jscomp$0;) {
					var nextNode$jscomp$0 = node$jscomp$0.nextSibling, nodeName = node$jscomp$0.nodeName;
					node$jscomp$0[internalHoistableMarker] || "SCRIPT" === nodeName || "STYLE" === nodeName || "LINK" === nodeName && "stylesheet" === node$jscomp$0.rel.toLowerCase() || node.removeChild(node$jscomp$0);
					node$jscomp$0 = nextNode$jscomp$0;
				}
			} else "body" === node && releaseSingletonInstance(parentInstance.ownerDocument.body);
			node = nextNode;
		} while (node);
		retryIfBlockedOn(hydrationInstance);
	}
	function hideOrUnhideDehydratedBoundary(suspenseInstance, isHidden) {
		var node = suspenseInstance;
		suspenseInstance = 0;
		do {
			var nextNode = node.nextSibling;
			1 === node.nodeType ? isHidden ? (node._stashedDisplay = node.style.display, node.style.display = "none") : (node.style.display = node._stashedDisplay || "", "" === node.getAttribute("style") && node.removeAttribute("style")) : 3 === node.nodeType && (isHidden ? (node._stashedText = node.nodeValue, node.nodeValue = "") : node.nodeValue = node._stashedText || "");
			if (nextNode && 8 === nextNode.nodeType) if (node = nextNode.data, "/$" === node) if (0 === suspenseInstance) break;
			else suspenseInstance--;
			else "$" !== node && "$?" !== node && "$~" !== node && "$!" !== node || suspenseInstance++;
			node = nextNode;
		} while (node);
	}
	function clearContainerSparingly(container) {
		var nextNode = container.firstChild;
		nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
		for (; nextNode;) {
			var node = nextNode;
			nextNode = nextNode.nextSibling;
			switch (node.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					clearContainerSparingly(node);
					detachDeletedInstance(node);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if ("stylesheet" === node.rel.toLowerCase()) continue;
			}
			container.removeChild(node);
		}
	}
	function canHydrateInstance(instance, type, props, inRootOrSingleton) {
		for (; 1 === instance.nodeType;) {
			var anyProps = props;
			if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
				if (!inRootOrSingleton && ("INPUT" !== instance.nodeName || "hidden" !== instance.type)) break;
			} else if (!inRootOrSingleton) if ("input" === type && "hidden" === instance.type) {
				var name = null == anyProps.name ? null : "" + anyProps.name;
				if ("hidden" === anyProps.type && instance.getAttribute("name") === name) return instance;
			} else return instance;
			else if (!instance[internalHoistableMarker]) switch (type) {
				case "meta":
					if (!instance.hasAttribute("itemprop")) break;
					return instance;
				case "link":
					name = instance.getAttribute("rel");
					if ("stylesheet" === name && instance.hasAttribute("data-precedence")) break;
					else if (name !== anyProps.rel || instance.getAttribute("href") !== (null == anyProps.href || "" === anyProps.href ? null : anyProps.href) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) || instance.getAttribute("title") !== (null == anyProps.title ? null : anyProps.title)) break;
					return instance;
				case "style":
					if (instance.hasAttribute("data-precedence")) break;
					return instance;
				case "script":
					name = instance.getAttribute("src");
					if ((name !== (null == anyProps.src ? null : anyProps.src) || instance.getAttribute("type") !== (null == anyProps.type ? null : anyProps.type) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) && name && instance.hasAttribute("async") && !instance.hasAttribute("itemprop")) break;
					return instance;
				default: return instance;
			}
			instance = getNextHydratable(instance.nextSibling);
			if (null === instance) break;
		}
		return null;
	}
	function canHydrateTextInstance(instance, text, inRootOrSingleton) {
		if ("" === text) return null;
		for (; 3 !== instance.nodeType;) {
			if ((1 !== instance.nodeType || "INPUT" !== instance.nodeName || "hidden" !== instance.type) && !inRootOrSingleton) return null;
			instance = getNextHydratable(instance.nextSibling);
			if (null === instance) return null;
		}
		return instance;
	}
	function canHydrateHydrationBoundary(instance, inRootOrSingleton) {
		for (; 8 !== instance.nodeType;) {
			if ((1 !== instance.nodeType || "INPUT" !== instance.nodeName || "hidden" !== instance.type) && !inRootOrSingleton) return null;
			instance = getNextHydratable(instance.nextSibling);
			if (null === instance) return null;
		}
		return instance;
	}
	function isSuspenseInstancePending(instance) {
		return "$?" === instance.data || "$~" === instance.data;
	}
	function isSuspenseInstanceFallback(instance) {
		return "$!" === instance.data || "$?" === instance.data && "loading" !== instance.ownerDocument.readyState;
	}
	function registerSuspenseInstanceRetry(instance, callback) {
		var ownerDocument = instance.ownerDocument;
		if ("$~" === instance.data) instance._reactRetry = callback;
		else if ("$?" !== instance.data || "loading" !== ownerDocument.readyState) callback();
		else {
			var listener = function() {
				callback();
				ownerDocument.removeEventListener("DOMContentLoaded", listener);
			};
			ownerDocument.addEventListener("DOMContentLoaded", listener);
			instance._reactRetry = listener;
		}
	}
	function getNextHydratable(node) {
		for (; null != node; node = node.nextSibling) {
			var nodeType = node.nodeType;
			if (1 === nodeType || 3 === nodeType) break;
			if (8 === nodeType) {
				nodeType = node.data;
				if ("$" === nodeType || "$!" === nodeType || "$?" === nodeType || "$~" === nodeType || "&" === nodeType || "F!" === nodeType || "F" === nodeType) break;
				if ("/$" === nodeType || "/&" === nodeType) return null;
			}
		}
		return node;
	}
	var previousHydratableOnEnteringScopedSingleton = null;
	function getNextHydratableInstanceAfterHydrationBoundary(hydrationInstance) {
		hydrationInstance = hydrationInstance.nextSibling;
		for (var depth = 0; hydrationInstance;) {
			if (8 === hydrationInstance.nodeType) {
				var data = hydrationInstance.data;
				if ("/$" === data || "/&" === data) {
					if (0 === depth) return getNextHydratable(hydrationInstance.nextSibling);
					depth--;
				} else "$" !== data && "$!" !== data && "$?" !== data && "$~" !== data && "&" !== data || depth++;
			}
			hydrationInstance = hydrationInstance.nextSibling;
		}
		return null;
	}
	function getParentHydrationBoundary(targetInstance) {
		targetInstance = targetInstance.previousSibling;
		for (var depth = 0; targetInstance;) {
			if (8 === targetInstance.nodeType) {
				var data = targetInstance.data;
				if ("$" === data || "$!" === data || "$?" === data || "$~" === data || "&" === data) {
					if (0 === depth) return targetInstance;
					depth--;
				} else "/$" !== data && "/&" !== data || depth++;
			}
			targetInstance = targetInstance.previousSibling;
		}
		return null;
	}
	function resolveSingletonInstance(type, props, rootContainerInstance) {
		props = getOwnerDocumentFromRootContainer(rootContainerInstance);
		switch (type) {
			case "html":
				type = props.documentElement;
				if (!type) throw Error(formatProdErrorMessage(452));
				return type;
			case "head":
				type = props.head;
				if (!type) throw Error(formatProdErrorMessage(453));
				return type;
			case "body":
				type = props.body;
				if (!type) throw Error(formatProdErrorMessage(454));
				return type;
			default: throw Error(formatProdErrorMessage(451));
		}
	}
	function releaseSingletonInstance(instance) {
		for (var attributes = instance.attributes; attributes.length;) instance.removeAttributeNode(attributes[0]);
		detachDeletedInstance(instance);
	}
	var preloadPropsMap = /* @__PURE__ */ new Map();
	var preconnectsSet = /* @__PURE__ */ new Set();
	function getHoistableRoot(container) {
		return "function" === typeof container.getRootNode ? container.getRootNode() : 9 === container.nodeType ? container : container.ownerDocument;
	}
	var previousDispatcher = ReactDOMSharedInternals.d;
	ReactDOMSharedInternals.d = {
		f: flushSyncWork,
		r: requestFormReset,
		D: prefetchDNS,
		C: preconnect,
		L: preload,
		m: preloadModule,
		X: preinitScript,
		S: preinitStyle,
		M: preinitModuleScript
	};
	function flushSyncWork() {
		var previousWasRendering = previousDispatcher.f(), wasRendering = flushSyncWork$1();
		return previousWasRendering || wasRendering;
	}
	function requestFormReset(form) {
		var formInst = getInstanceFromNode(form);
		null !== formInst && 5 === formInst.tag && "form" === formInst.type ? requestFormReset$1(formInst) : previousDispatcher.r(form);
	}
	var globalDocument = "undefined" === typeof document ? null : document;
	function preconnectAs(rel, href, crossOrigin) {
		var ownerDocument = globalDocument;
		if (ownerDocument && "string" === typeof href && href) {
			var limitedEscapedHref = escapeSelectorAttributeValueInsideDoubleQuotes(href);
			limitedEscapedHref = "link[rel=\"" + rel + "\"][href=\"" + limitedEscapedHref + "\"]";
			"string" === typeof crossOrigin && (limitedEscapedHref += "[crossorigin=\"" + crossOrigin + "\"]");
			preconnectsSet.has(limitedEscapedHref) || (preconnectsSet.add(limitedEscapedHref), rel = {
				rel,
				crossOrigin,
				href
			}, null === ownerDocument.querySelector(limitedEscapedHref) && (href = ownerDocument.createElement("link"), setInitialProperties(href, "link", rel), markNodeAsHoistable(href), ownerDocument.head.appendChild(href)));
		}
	}
	function prefetchDNS(href) {
		previousDispatcher.D(href);
		preconnectAs("dns-prefetch", href, null);
	}
	function preconnect(href, crossOrigin) {
		previousDispatcher.C(href, crossOrigin);
		preconnectAs("preconnect", href, crossOrigin);
	}
	function preload(href, as, options) {
		previousDispatcher.L(href, as, options);
		var ownerDocument = globalDocument;
		if (ownerDocument && href && as) {
			var preloadSelector = "link[rel=\"preload\"][as=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(as) + "\"]";
			"image" === as ? options && options.imageSrcSet ? (preloadSelector += "[imagesrcset=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(options.imageSrcSet) + "\"]", "string" === typeof options.imageSizes && (preloadSelector += "[imagesizes=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(options.imageSizes) + "\"]")) : preloadSelector += "[href=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(href) + "\"]" : preloadSelector += "[href=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(href) + "\"]";
			var key = preloadSelector;
			switch (as) {
				case "style":
					key = getStyleKey(href);
					break;
				case "script": key = getScriptKey(href);
			}
			preloadPropsMap.has(key) || (href = assign({
				rel: "preload",
				href: "image" === as && options && options.imageSrcSet ? void 0 : href,
				as
			}, options), preloadPropsMap.set(key, href), null !== ownerDocument.querySelector(preloadSelector) || "style" === as && ownerDocument.querySelector(getStylesheetSelectorFromKey(key)) || "script" === as && ownerDocument.querySelector(getScriptSelectorFromKey(key)) || (as = ownerDocument.createElement("link"), setInitialProperties(as, "link", href), markNodeAsHoistable(as), ownerDocument.head.appendChild(as)));
		}
	}
	function preloadModule(href, options) {
		previousDispatcher.m(href, options);
		var ownerDocument = globalDocument;
		if (ownerDocument && href) {
			var as = options && "string" === typeof options.as ? options.as : "script", preloadSelector = "link[rel=\"modulepreload\"][as=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(as) + "\"][href=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(href) + "\"]", key = preloadSelector;
			switch (as) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": key = getScriptKey(href);
			}
			if (!preloadPropsMap.has(key) && (href = assign({
				rel: "modulepreload",
				href
			}, options), preloadPropsMap.set(key, href), null === ownerDocument.querySelector(preloadSelector))) {
				switch (as) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (ownerDocument.querySelector(getScriptSelectorFromKey(key))) return;
				}
				as = ownerDocument.createElement("link");
				setInitialProperties(as, "link", href);
				markNodeAsHoistable(as);
				ownerDocument.head.appendChild(as);
			}
		}
	}
	function preinitStyle(href, precedence, options) {
		previousDispatcher.S(href, precedence, options);
		var ownerDocument = globalDocument;
		if (ownerDocument && href) {
			var styles = getResourcesFromRoot(ownerDocument).hoistableStyles, key = getStyleKey(href);
			precedence = precedence || "default";
			var resource = styles.get(key);
			if (!resource) {
				var state = {
					loading: 0,
					preload: null
				};
				if (resource = ownerDocument.querySelector(getStylesheetSelectorFromKey(key))) state.loading = 5;
				else {
					href = assign({
						rel: "stylesheet",
						href,
						"data-precedence": precedence
					}, options);
					(options = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(href, options);
					var link = resource = ownerDocument.createElement("link");
					markNodeAsHoistable(link);
					setInitialProperties(link, "link", href);
					link._p = new Promise(function(resolve, reject) {
						link.onload = resolve;
						link.onerror = reject;
					});
					link.addEventListener("load", function() {
						state.loading |= 1;
					});
					link.addEventListener("error", function() {
						state.loading |= 2;
					});
					state.loading |= 4;
					insertStylesheet(resource, precedence, ownerDocument);
				}
				resource = {
					type: "stylesheet",
					instance: resource,
					count: 1,
					state
				};
				styles.set(key, resource);
			}
		}
	}
	function preinitScript(src, options) {
		previousDispatcher.X(src, options);
		var ownerDocument = globalDocument;
		if (ownerDocument && src) {
			var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
			resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({
				src,
				async: !0
			}, options), (options = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
				type: "script",
				instance: resource,
				count: 1,
				state: null
			}, scripts.set(key, resource));
		}
	}
	function preinitModuleScript(src, options) {
		previousDispatcher.M(src, options);
		var ownerDocument = globalDocument;
		if (ownerDocument && src) {
			var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
			resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({
				src,
				async: !0,
				type: "module"
			}, options), (options = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
				type: "script",
				instance: resource,
				count: 1,
				state: null
			}, scripts.set(key, resource));
		}
	}
	function getResource(type, currentProps, pendingProps, currentResource) {
		var JSCompiler_inline_result = (JSCompiler_inline_result = rootInstanceStackCursor.current) ? getHoistableRoot(JSCompiler_inline_result) : null;
		if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
		switch (type) {
			case "meta":
			case "title": return null;
			case "style": return "string" === typeof pendingProps.precedence && "string" === typeof pendingProps.href ? (currentProps = getStyleKey(pendingProps.href), pendingProps = getResourcesFromRoot(JSCompiler_inline_result).hoistableStyles, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, pendingProps.set(currentProps, currentResource)), currentResource) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if ("stylesheet" === pendingProps.rel && "string" === typeof pendingProps.href && "string" === typeof pendingProps.precedence) {
					type = getStyleKey(pendingProps.href);
					var styles$243 = getResourcesFromRoot(JSCompiler_inline_result).hoistableStyles, resource$244 = styles$243.get(type);
					resource$244 || (JSCompiler_inline_result = JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result, resource$244 = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, styles$243.set(type, resource$244), (styles$243 = JSCompiler_inline_result.querySelector(getStylesheetSelectorFromKey(type))) && !styles$243._p && (resource$244.instance = styles$243, resource$244.state.loading = 5), preloadPropsMap.has(type) || (pendingProps = {
						rel: "preload",
						as: "style",
						href: pendingProps.href,
						crossOrigin: pendingProps.crossOrigin,
						integrity: pendingProps.integrity,
						media: pendingProps.media,
						hrefLang: pendingProps.hrefLang,
						referrerPolicy: pendingProps.referrerPolicy
					}, preloadPropsMap.set(type, pendingProps), styles$243 || preloadStylesheet(JSCompiler_inline_result, type, pendingProps, resource$244.state)));
					if (currentProps && null === currentResource) throw Error(formatProdErrorMessage(528, ""));
					return resource$244;
				}
				if (currentProps && null !== currentResource) throw Error(formatProdErrorMessage(529, ""));
				return null;
			case "script": return currentProps = pendingProps.async, pendingProps = pendingProps.src, "string" === typeof pendingProps && currentProps && "function" !== typeof currentProps && "symbol" !== typeof currentProps ? (currentProps = getScriptKey(pendingProps), pendingProps = getResourcesFromRoot(JSCompiler_inline_result).hoistableScripts, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, pendingProps.set(currentProps, currentResource)), currentResource) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(formatProdErrorMessage(444, type));
		}
	}
	function getStyleKey(href) {
		return "href=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(href) + "\"";
	}
	function getStylesheetSelectorFromKey(key) {
		return "link[rel=\"stylesheet\"][" + key + "]";
	}
	function stylesheetPropsFromRawProps(rawProps) {
		return assign({}, rawProps, {
			"data-precedence": rawProps.precedence,
			precedence: null
		});
	}
	function preloadStylesheet(ownerDocument, key, preloadProps, state) {
		ownerDocument.querySelector("link[rel=\"preload\"][as=\"style\"][" + key + "]") ? state.loading = 1 : (key = ownerDocument.createElement("link"), state.preload = key, key.addEventListener("load", function() {
			return state.loading |= 1;
		}), key.addEventListener("error", function() {
			return state.loading |= 2;
		}), setInitialProperties(key, "link", preloadProps), markNodeAsHoistable(key), ownerDocument.head.appendChild(key));
	}
	function getScriptKey(src) {
		return "[src=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(src) + "\"]";
	}
	function getScriptSelectorFromKey(key) {
		return "script[async]" + key;
	}
	function acquireResource(hoistableRoot, resource, props) {
		resource.count++;
		if (null === resource.instance) switch (resource.type) {
			case "style":
				var instance = hoistableRoot.querySelector("style[data-href~=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(props.href) + "\"]");
				if (instance) return resource.instance = instance, markNodeAsHoistable(instance), instance;
				var styleProps = assign({}, props, {
					"data-href": props.href,
					"data-precedence": props.precedence,
					href: null,
					precedence: null
				});
				instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement("style");
				markNodeAsHoistable(instance);
				setInitialProperties(instance, "style", styleProps);
				insertStylesheet(instance, props.precedence, hoistableRoot);
				return resource.instance = instance;
			case "stylesheet":
				styleProps = getStyleKey(props.href);
				var instance$249 = hoistableRoot.querySelector(getStylesheetSelectorFromKey(styleProps));
				if (instance$249) return resource.state.loading |= 4, resource.instance = instance$249, markNodeAsHoistable(instance$249), instance$249;
				instance = stylesheetPropsFromRawProps(props);
				(styleProps = preloadPropsMap.get(styleProps)) && adoptPreloadPropsForStylesheet(instance, styleProps);
				instance$249 = (hoistableRoot.ownerDocument || hoistableRoot).createElement("link");
				markNodeAsHoistable(instance$249);
				var linkInstance = instance$249;
				linkInstance._p = new Promise(function(resolve, reject) {
					linkInstance.onload = resolve;
					linkInstance.onerror = reject;
				});
				setInitialProperties(instance$249, "link", instance);
				resource.state.loading |= 4;
				insertStylesheet(instance$249, props.precedence, hoistableRoot);
				return resource.instance = instance$249;
			case "script":
				instance$249 = getScriptKey(props.src);
				if (styleProps = hoistableRoot.querySelector(getScriptSelectorFromKey(instance$249))) return resource.instance = styleProps, markNodeAsHoistable(styleProps), styleProps;
				instance = props;
				if (styleProps = preloadPropsMap.get(instance$249)) instance = assign({}, props), adoptPreloadPropsForScript(instance, styleProps);
				hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
				styleProps = hoistableRoot.createElement("script");
				markNodeAsHoistable(styleProps);
				setInitialProperties(styleProps, "link", instance);
				hoistableRoot.head.appendChild(styleProps);
				return resource.instance = styleProps;
			case "void": return null;
			default: throw Error(formatProdErrorMessage(443, resource.type));
		}
		else "stylesheet" === resource.type && 0 === (resource.state.loading & 4) && (instance = resource.instance, resource.state.loading |= 4, insertStylesheet(instance, props.precedence, hoistableRoot));
		return resource.instance;
	}
	function insertStylesheet(instance, precedence, root) {
		for (var nodes = root.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), last = nodes.length ? nodes[nodes.length - 1] : null, prior = last, i = 0; i < nodes.length; i++) {
			var node = nodes[i];
			if (node.dataset.precedence === precedence) prior = node;
			else if (prior !== last) break;
		}
		prior ? prior.parentNode.insertBefore(instance, prior.nextSibling) : (precedence = 9 === root.nodeType ? root.head : root, precedence.insertBefore(instance, precedence.firstChild));
	}
	function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
		stylesheetProps.crossOrigin ??= preloadProps.crossOrigin;
		stylesheetProps.referrerPolicy ??= preloadProps.referrerPolicy;
		stylesheetProps.title ??= preloadProps.title;
	}
	function adoptPreloadPropsForScript(scriptProps, preloadProps) {
		scriptProps.crossOrigin ??= preloadProps.crossOrigin;
		scriptProps.referrerPolicy ??= preloadProps.referrerPolicy;
		scriptProps.integrity ??= preloadProps.integrity;
	}
	var tagCaches = null;
	function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
		if (null === tagCaches) {
			var cache = /* @__PURE__ */ new Map();
			var caches = tagCaches = /* @__PURE__ */ new Map();
			caches.set(ownerDocument, cache);
		} else caches = tagCaches, cache = caches.get(ownerDocument), cache || (cache = /* @__PURE__ */ new Map(), caches.set(ownerDocument, cache));
		if (cache.has(type)) return cache;
		cache.set(type, null);
		ownerDocument = ownerDocument.getElementsByTagName(type);
		for (caches = 0; caches < ownerDocument.length; caches++) {
			var node = ownerDocument[caches];
			if (!(node[internalHoistableMarker] || node[internalInstanceKey] || "link" === type && "stylesheet" === node.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== node.namespaceURI) {
				var nodeKey = node.getAttribute(keyAttribute) || "";
				nodeKey = type + nodeKey;
				var existing = cache.get(nodeKey);
				existing ? existing.push(node) : cache.set(nodeKey, [node]);
			}
		}
		return cache;
	}
	function mountHoistable(hoistableRoot, type, instance) {
		hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
		hoistableRoot.head.insertBefore(instance, "title" === type ? hoistableRoot.querySelector("head > title") : null);
	}
	function isHostHoistableType(type, props, hostContext) {
		if (1 === hostContext || null != props.itemProp) return !1;
		switch (type) {
			case "meta":
			case "title": return !0;
			case "style":
				if ("string" !== typeof props.precedence || "string" !== typeof props.href || "" === props.href) break;
				return !0;
			case "link":
				if ("string" !== typeof props.rel || "string" !== typeof props.href || "" === props.href || props.onLoad || props.onError) break;
				switch (props.rel) {
					case "stylesheet": return type = props.disabled, "string" === typeof props.precedence && null == type;
					default: return !0;
				}
			case "script": if (props.async && "function" !== typeof props.async && "symbol" !== typeof props.async && !props.onLoad && !props.onError && props.src && "string" === typeof props.src) return !0;
		}
		return !1;
	}
	function preloadResource(resource) {
		return "stylesheet" === resource.type && 0 === (resource.state.loading & 3) ? !1 : !0;
	}
	function suspendResource(state, hoistableRoot, resource, props) {
		if ("stylesheet" === resource.type && ("string" !== typeof props.media || !1 !== matchMedia(props.media).matches) && 0 === (resource.state.loading & 4)) {
			if (null === resource.instance) {
				var key = getStyleKey(props.href), instance = hoistableRoot.querySelector(getStylesheetSelectorFromKey(key));
				if (instance) {
					hoistableRoot = instance._p;
					null !== hoistableRoot && "object" === typeof hoistableRoot && "function" === typeof hoistableRoot.then && (state.count++, state = onUnsuspend.bind(state), hoistableRoot.then(state, state));
					resource.state.loading |= 4;
					resource.instance = instance;
					markNodeAsHoistable(instance);
					return;
				}
				instance = hoistableRoot.ownerDocument || hoistableRoot;
				props = stylesheetPropsFromRawProps(props);
				(key = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(props, key);
				instance = instance.createElement("link");
				markNodeAsHoistable(instance);
				var linkInstance = instance;
				linkInstance._p = new Promise(function(resolve, reject) {
					linkInstance.onload = resolve;
					linkInstance.onerror = reject;
				});
				setInitialProperties(instance, "link", props);
				resource.instance = instance;
			}
			null === state.stylesheets && (state.stylesheets = /* @__PURE__ */ new Map());
			state.stylesheets.set(resource, hoistableRoot);
			(hoistableRoot = resource.state.preload) && 0 === (resource.state.loading & 3) && (state.count++, resource = onUnsuspend.bind(state), hoistableRoot.addEventListener("load", resource), hoistableRoot.addEventListener("error", resource));
		}
	}
	var estimatedBytesWithinLimit = 0;
	function waitForCommitToBeReady(state, timeoutOffset) {
		state.stylesheets && 0 === state.count && insertSuspendedStylesheets(state, state.stylesheets);
		return 0 < state.count || 0 < state.imgCount ? function(commit) {
			var stylesheetTimer = setTimeout(function() {
				state.stylesheets && insertSuspendedStylesheets(state, state.stylesheets);
				if (state.unsuspend) {
					var unsuspend = state.unsuspend;
					state.unsuspend = null;
					unsuspend();
				}
			}, 6e4 + timeoutOffset);
			0 < state.imgBytes && 0 === estimatedBytesWithinLimit && (estimatedBytesWithinLimit = 62500 * estimateBandwidth());
			var imgTimer = setTimeout(function() {
				state.waitingForImages = !1;
				if (0 === state.count && (state.stylesheets && insertSuspendedStylesheets(state, state.stylesheets), state.unsuspend)) {
					var unsuspend = state.unsuspend;
					state.unsuspend = null;
					unsuspend();
				}
			}, (state.imgBytes > estimatedBytesWithinLimit ? 50 : 800) + timeoutOffset);
			state.unsuspend = commit;
			return function() {
				state.unsuspend = null;
				clearTimeout(stylesheetTimer);
				clearTimeout(imgTimer);
			};
		} : null;
	}
	function onUnsuspend() {
		this.count--;
		if (0 === this.count && (0 === this.imgCount || !this.waitingForImages)) {
			if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
			else if (this.unsuspend) {
				var unsuspend = this.unsuspend;
				this.unsuspend = null;
				unsuspend();
			}
		}
	}
	var precedencesByRoot = null;
	function insertSuspendedStylesheets(state, resources) {
		state.stylesheets = null;
		null !== state.unsuspend && (state.count++, precedencesByRoot = /* @__PURE__ */ new Map(), resources.forEach(insertStylesheetIntoRoot, state), precedencesByRoot = null, onUnsuspend.call(state));
	}
	function insertStylesheetIntoRoot(root, resource) {
		if (!(resource.state.loading & 4)) {
			var precedences = precedencesByRoot.get(root);
			if (precedences) var last = precedences.get(null);
			else {
				precedences = /* @__PURE__ */ new Map();
				precedencesByRoot.set(root, precedences);
				for (var nodes = root.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < nodes.length; i++) {
					var node = nodes[i];
					if ("LINK" === node.nodeName || "not all" !== node.getAttribute("media")) precedences.set(node.dataset.precedence, node), last = node;
				}
				last && precedences.set(null, last);
			}
			nodes = resource.instance;
			node = nodes.getAttribute("data-precedence");
			i = precedences.get(node) || last;
			i === last && precedences.set(null, nodes);
			precedences.set(node, nodes);
			this.count++;
			last = onUnsuspend.bind(this);
			nodes.addEventListener("load", last);
			nodes.addEventListener("error", last);
			i ? i.parentNode.insertBefore(nodes, i.nextSibling) : (root = 9 === root.nodeType ? root.head : root, root.insertBefore(nodes, root.firstChild));
			resource.state.loading |= 4;
		}
	}
	var HostTransitionContext = {
		$$typeof: REACT_CONTEXT_TYPE,
		Provider: null,
		Consumer: null,
		_currentValue: sharedNotPendingObject,
		_currentValue2: sharedNotPendingObject,
		_threadCount: 0
	};
	function FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, onDefaultTransitionIndicator, formState) {
		this.tag = 1;
		this.containerInfo = containerInfo;
		this.pingCache = this.current = this.pendingChildren = null;
		this.timeoutHandle = -1;
		this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null;
		this.callbackPriority = 0;
		this.expirationTimes = createLaneMap(-1);
		this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
		this.entanglements = createLaneMap(0);
		this.hiddenUpdates = createLaneMap(null);
		this.identifierPrefix = identifierPrefix;
		this.onUncaughtError = onUncaughtError;
		this.onCaughtError = onCaughtError;
		this.onRecoverableError = onRecoverableError;
		this.pooledCache = null;
		this.pooledCacheLanes = 0;
		this.formState = formState;
		this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, identifierPrefix, formState, onUncaughtError, onCaughtError, onRecoverableError, onDefaultTransitionIndicator) {
		containerInfo = new FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, onDefaultTransitionIndicator, formState);
		tag = 1;
		!0 === isStrictMode && (tag |= 24);
		isStrictMode = createFiberImplClass(3, null, null, tag);
		containerInfo.current = isStrictMode;
		isStrictMode.stateNode = containerInfo;
		tag = createCache();
		tag.refCount++;
		containerInfo.pooledCache = tag;
		tag.refCount++;
		isStrictMode.memoizedState = {
			element: initialChildren,
			isDehydrated: hydrate,
			cache: tag
		};
		initializeUpdateQueue(isStrictMode);
		return containerInfo;
	}
	function getContextForSubtree(parentComponent) {
		if (!parentComponent) return emptyContextObject;
		parentComponent = emptyContextObject;
		return parentComponent;
	}
	function updateContainerImpl(rootFiber, lane, element, container, parentComponent, callback) {
		parentComponent = getContextForSubtree(parentComponent);
		null === container.context ? container.context = parentComponent : container.pendingContext = parentComponent;
		container = createUpdate(lane);
		container.payload = { element };
		callback = void 0 === callback ? null : callback;
		null !== callback && (container.callback = callback);
		element = enqueueUpdate(rootFiber, container, lane);
		null !== element && (scheduleUpdateOnFiber(element, rootFiber, lane), entangleTransitions(element, rootFiber, lane));
	}
	function markRetryLaneImpl(fiber, retryLane) {
		fiber = fiber.memoizedState;
		if (null !== fiber && null !== fiber.dehydrated) {
			var a = fiber.retryLane;
			fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
		}
	}
	function markRetryLaneIfNotHydrated(fiber, retryLane) {
		markRetryLaneImpl(fiber, retryLane);
		(fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
	}
	function attemptContinuousHydration(fiber) {
		if (13 === fiber.tag || 31 === fiber.tag) {
			var root = enqueueConcurrentRenderForLane(fiber, 67108864);
			null !== root && scheduleUpdateOnFiber(root, fiber, 67108864);
			markRetryLaneIfNotHydrated(fiber, 67108864);
		}
	}
	function attemptHydrationAtCurrentPriority(fiber) {
		if (13 === fiber.tag || 31 === fiber.tag) {
			var lane = requestUpdateLane();
			lane = getBumpedLaneForHydrationByLane(lane);
			var root = enqueueConcurrentRenderForLane(fiber, lane);
			null !== root && scheduleUpdateOnFiber(root, fiber, lane);
			markRetryLaneIfNotHydrated(fiber, lane);
		}
	}
	var _enabled = !0;
	function dispatchDiscreteEvent(domEventName, eventSystemFlags, container, nativeEvent) {
		var prevTransition = ReactSharedInternals.T;
		ReactSharedInternals.T = null;
		var previousPriority = ReactDOMSharedInternals.p;
		try {
			ReactDOMSharedInternals.p = 2, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
		} finally {
			ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
		}
	}
	function dispatchContinuousEvent(domEventName, eventSystemFlags, container, nativeEvent) {
		var prevTransition = ReactSharedInternals.T;
		ReactSharedInternals.T = null;
		var previousPriority = ReactDOMSharedInternals.p;
		try {
			ReactDOMSharedInternals.p = 8, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
		} finally {
			ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
		}
	}
	function dispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
		if (_enabled) {
			var blockedOn = findInstanceBlockingEvent(nativeEvent);
			if (null === blockedOn) dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, return_targetInst, targetContainer), clearIfContinuousEvent(domEventName, nativeEvent);
			else if (queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent)) nativeEvent.stopPropagation();
			else if (clearIfContinuousEvent(domEventName, nativeEvent), eventSystemFlags & 4 && -1 < discreteReplayableEvents.indexOf(domEventName)) {
				for (; null !== blockedOn;) {
					var fiber = getInstanceFromNode(blockedOn);
					if (null !== fiber) switch (fiber.tag) {
						case 3:
							fiber = fiber.stateNode;
							if (fiber.current.memoizedState.isDehydrated) {
								var lanes = getHighestPriorityLanes(fiber.pendingLanes);
								if (0 !== lanes) {
									var root = fiber;
									root.pendingLanes |= 2;
									for (root.entangledLanes |= 2; lanes;) {
										var lane = 1 << 31 - clz32(lanes);
										root.entanglements[1] |= lane;
										lanes &= ~lane;
									}
									ensureRootIsScheduled(fiber);
									0 === (executionContext & 6) && (workInProgressRootRenderTargetTime = now() + 500, flushSyncWorkAcrossRoots_impl(0, !1));
								}
							}
							break;
						case 31:
						case 13: root = enqueueConcurrentRenderForLane(fiber, 2), null !== root && scheduleUpdateOnFiber(root, fiber, 2), flushSyncWork$1(), markRetryLaneIfNotHydrated(fiber, 2);
					}
					fiber = findInstanceBlockingEvent(nativeEvent);
					null === fiber && dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, return_targetInst, targetContainer);
					if (fiber === blockedOn) break;
					blockedOn = fiber;
				}
				null !== blockedOn && nativeEvent.stopPropagation();
			} else dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, null, targetContainer);
		}
	}
	function findInstanceBlockingEvent(nativeEvent) {
		nativeEvent = getEventTarget(nativeEvent);
		return findInstanceBlockingTarget(nativeEvent);
	}
	var return_targetInst = null;
	function findInstanceBlockingTarget(targetNode) {
		return_targetInst = null;
		targetNode = getClosestInstanceFromNode(targetNode);
		if (null !== targetNode) {
			var nearestMounted = getNearestMountedFiber(targetNode);
			if (null === nearestMounted) targetNode = null;
			else {
				var tag = nearestMounted.tag;
				if (13 === tag) {
					targetNode = getSuspenseInstanceFromFiber(nearestMounted);
					if (null !== targetNode) return targetNode;
					targetNode = null;
				} else if (31 === tag) {
					targetNode = getActivityInstanceFromFiber(nearestMounted);
					if (null !== targetNode) return targetNode;
					targetNode = null;
				} else if (3 === tag) {
					if (nearestMounted.stateNode.current.memoizedState.isDehydrated) return 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
					targetNode = null;
				} else nearestMounted !== targetNode && (targetNode = null);
			}
		}
		return_targetInst = targetNode;
		return null;
	}
	function getEventPriority(domEventName) {
		switch (domEventName) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (getCurrentPriorityLevel()) {
				case ImmediatePriority: return 2;
				case UserBlockingPriority: return 8;
				case NormalPriority$1:
				case LowPriority: return 32;
				case IdlePriority: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var hasScheduledReplayAttempt = !1;
	var queuedFocus = null;
	var queuedDrag = null;
	var queuedMouse = null;
	var queuedPointers = /* @__PURE__ */ new Map();
	var queuedPointerCaptures = /* @__PURE__ */ new Map();
	var queuedExplicitHydrationTargets = [];
	var discreteReplayableEvents = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function clearIfContinuousEvent(domEventName, nativeEvent) {
		switch (domEventName) {
			case "focusin":
			case "focusout":
				queuedFocus = null;
				break;
			case "dragenter":
			case "dragleave":
				queuedDrag = null;
				break;
			case "mouseover":
			case "mouseout":
				queuedMouse = null;
				break;
			case "pointerover":
			case "pointerout":
				queuedPointers.delete(nativeEvent.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": queuedPointerCaptures.delete(nativeEvent.pointerId);
		}
	}
	function accumulateOrCreateContinuousQueuedReplayableEvent(existingQueuedEvent, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
		if (null === existingQueuedEvent || existingQueuedEvent.nativeEvent !== nativeEvent) return existingQueuedEvent = {
			blockedOn,
			domEventName,
			eventSystemFlags,
			nativeEvent,
			targetContainers: [targetContainer]
		}, null !== blockedOn && (blockedOn = getInstanceFromNode(blockedOn), null !== blockedOn && attemptContinuousHydration(blockedOn)), existingQueuedEvent;
		existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
		blockedOn = existingQueuedEvent.targetContainers;
		null !== targetContainer && -1 === blockedOn.indexOf(targetContainer) && blockedOn.push(targetContainer);
		return existingQueuedEvent;
	}
	function queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
		switch (domEventName) {
			case "focusin": return queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(queuedFocus, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent), !0;
			case "dragenter": return queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(queuedDrag, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent), !0;
			case "mouseover": return queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(queuedMouse, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent), !0;
			case "pointerover":
				var pointerId = nativeEvent.pointerId;
				queuedPointers.set(pointerId, accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointers.get(pointerId) || null, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent));
				return !0;
			case "gotpointercapture": return pointerId = nativeEvent.pointerId, queuedPointerCaptures.set(pointerId, accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointerCaptures.get(pointerId) || null, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent)), !0;
		}
		return !1;
	}
	function attemptExplicitHydrationTarget(queuedTarget) {
		var targetInst = getClosestInstanceFromNode(queuedTarget.target);
		if (null !== targetInst) {
			var nearestMounted = getNearestMountedFiber(targetInst);
			if (null !== nearestMounted) {
				if (targetInst = nearestMounted.tag, 13 === targetInst) {
					if (targetInst = getSuspenseInstanceFromFiber(nearestMounted), null !== targetInst) {
						queuedTarget.blockedOn = targetInst;
						runWithPriority(queuedTarget.priority, function() {
							attemptHydrationAtCurrentPriority(nearestMounted);
						});
						return;
					}
				} else if (31 === targetInst) {
					if (targetInst = getActivityInstanceFromFiber(nearestMounted), null !== targetInst) {
						queuedTarget.blockedOn = targetInst;
						runWithPriority(queuedTarget.priority, function() {
							attemptHydrationAtCurrentPriority(nearestMounted);
						});
						return;
					}
				} else if (3 === targetInst && nearestMounted.stateNode.current.memoizedState.isDehydrated) {
					queuedTarget.blockedOn = 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
					return;
				}
			}
		}
		queuedTarget.blockedOn = null;
	}
	function attemptReplayContinuousQueuedEvent(queuedEvent) {
		if (null !== queuedEvent.blockedOn) return !1;
		for (var targetContainers = queuedEvent.targetContainers; 0 < targetContainers.length;) {
			var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
			if (null === nextBlockedOn) {
				nextBlockedOn = queuedEvent.nativeEvent;
				var nativeEventClone = new nextBlockedOn.constructor(nextBlockedOn.type, nextBlockedOn);
				currentReplayingEvent = nativeEventClone;
				nextBlockedOn.target.dispatchEvent(nativeEventClone);
				currentReplayingEvent = null;
			} else return targetContainers = getInstanceFromNode(nextBlockedOn), null !== targetContainers && attemptContinuousHydration(targetContainers), queuedEvent.blockedOn = nextBlockedOn, !1;
			targetContainers.shift();
		}
		return !0;
	}
	function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
		attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
	}
	function replayUnblockedEvents() {
		hasScheduledReplayAttempt = !1;
		null !== queuedFocus && attemptReplayContinuousQueuedEvent(queuedFocus) && (queuedFocus = null);
		null !== queuedDrag && attemptReplayContinuousQueuedEvent(queuedDrag) && (queuedDrag = null);
		null !== queuedMouse && attemptReplayContinuousQueuedEvent(queuedMouse) && (queuedMouse = null);
		queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
		queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
	}
	function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
		queuedEvent.blockedOn === unblocked && (queuedEvent.blockedOn = null, hasScheduledReplayAttempt || (hasScheduledReplayAttempt = !0, Scheduler.unstable_scheduleCallback(Scheduler.unstable_NormalPriority, replayUnblockedEvents)));
	}
	var lastScheduledReplayQueue = null;
	function scheduleReplayQueueIfNeeded(formReplayingQueue) {
		lastScheduledReplayQueue !== formReplayingQueue && (lastScheduledReplayQueue = formReplayingQueue, Scheduler.unstable_scheduleCallback(Scheduler.unstable_NormalPriority, function() {
			lastScheduledReplayQueue === formReplayingQueue && (lastScheduledReplayQueue = null);
			for (var i = 0; i < formReplayingQueue.length; i += 3) {
				var form = formReplayingQueue[i], submitterOrAction = formReplayingQueue[i + 1], formData = formReplayingQueue[i + 2];
				if ("function" !== typeof submitterOrAction) if (null === findInstanceBlockingTarget(submitterOrAction || form)) continue;
				else break;
				var formInst = getInstanceFromNode(form);
				null !== formInst && (formReplayingQueue.splice(i, 3), i -= 3, startHostTransition(formInst, {
					pending: !0,
					data: formData,
					method: form.method,
					action: submitterOrAction
				}, submitterOrAction, formData));
			}
		}));
	}
	function retryIfBlockedOn(unblocked) {
		function unblock(queuedEvent) {
			return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
		}
		null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
		null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
		null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
		queuedPointers.forEach(unblock);
		queuedPointerCaptures.forEach(unblock);
		for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
			var queuedTarget = queuedExplicitHydrationTargets[i];
			queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
		}
		for (; 0 < queuedExplicitHydrationTargets.length && (i = queuedExplicitHydrationTargets[0], null === i.blockedOn);) attemptExplicitHydrationTarget(i), null === i.blockedOn && queuedExplicitHydrationTargets.shift();
		i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
		if (null != i) for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
			var form = i[queuedTarget], submitterOrAction = i[queuedTarget + 1], formProps = form[internalPropsKey] || null;
			if ("function" === typeof submitterOrAction) formProps || scheduleReplayQueueIfNeeded(i);
			else if (formProps) {
				var action = null;
				if (submitterOrAction && submitterOrAction.hasAttribute("formAction")) {
					if (form = submitterOrAction, formProps = submitterOrAction[internalPropsKey] || null) action = formProps.formAction;
					else if (null !== findInstanceBlockingTarget(form)) continue;
				} else action = formProps.action;
				"function" === typeof action ? i[queuedTarget + 1] = action : (i.splice(queuedTarget, 3), queuedTarget -= 3);
				scheduleReplayQueueIfNeeded(i);
			}
		}
	}
	function defaultOnDefaultTransitionIndicator() {
		function handleNavigate(event) {
			event.canIntercept && "react-transition" === event.info && event.intercept({
				handler: function() {
					return new Promise(function(resolve) {
						return pendingResolve = resolve;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function handleNavigateComplete() {
			null !== pendingResolve && (pendingResolve(), pendingResolve = null);
			isCancelled || setTimeout(startFakeNavigation, 20);
		}
		function startFakeNavigation() {
			if (!isCancelled && !navigation.transition) {
				var currentEntry = navigation.currentEntry;
				currentEntry && null != currentEntry.url && navigation.navigate(currentEntry.url, {
					state: currentEntry.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if ("object" === typeof navigation) {
			var isCancelled = !1, pendingResolve = null;
			navigation.addEventListener("navigate", handleNavigate);
			navigation.addEventListener("navigatesuccess", handleNavigateComplete);
			navigation.addEventListener("navigateerror", handleNavigateComplete);
			setTimeout(startFakeNavigation, 100);
			return function() {
				isCancelled = !0;
				navigation.removeEventListener("navigate", handleNavigate);
				navigation.removeEventListener("navigatesuccess", handleNavigateComplete);
				navigation.removeEventListener("navigateerror", handleNavigateComplete);
				null !== pendingResolve && (pendingResolve(), pendingResolve = null);
			};
		}
	}
	function ReactDOMRoot(internalRoot) {
		this._internalRoot = internalRoot;
	}
	ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render = function(children) {
		var root = this._internalRoot;
		if (null === root) throw Error(formatProdErrorMessage(409));
		var current = root.current;
		updateContainerImpl(current, requestUpdateLane(), children, root, null, null);
	};
	ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount = function() {
		var root = this._internalRoot;
		if (null !== root) {
			this._internalRoot = null;
			var container = root.containerInfo;
			updateContainerImpl(root.current, 2, null, root, null, null);
			flushSyncWork$1();
			container[internalContainerInstanceKey] = null;
		}
	};
	function ReactDOMHydrationRoot(internalRoot) {
		this._internalRoot = internalRoot;
	}
	ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function(target) {
		if (target) {
			var updatePriority = resolveUpdatePriority();
			target = {
				blockedOn: null,
				target,
				priority: updatePriority
			};
			for (var i = 0; i < queuedExplicitHydrationTargets.length && 0 !== updatePriority && updatePriority < queuedExplicitHydrationTargets[i].priority; i++);
			queuedExplicitHydrationTargets.splice(i, 0, target);
			0 === i && attemptExplicitHydrationTarget(target);
		}
	};
	var isomorphicReactPackageVersion$jscomp$inline_1840 = React.version;
	if ("19.2.7" !== isomorphicReactPackageVersion$jscomp$inline_1840) throw Error(formatProdErrorMessage(527, isomorphicReactPackageVersion$jscomp$inline_1840, "19.2.7"));
	ReactDOMSharedInternals.findDOMNode = function(componentOrElement) {
		var fiber = componentOrElement._reactInternals;
		if (void 0 === fiber) {
			if ("function" === typeof componentOrElement.render) throw Error(formatProdErrorMessage(188));
			componentOrElement = Object.keys(componentOrElement).join(",");
			throw Error(formatProdErrorMessage(268, componentOrElement));
		}
		componentOrElement = findCurrentFiberUsingSlowPath(fiber);
		componentOrElement = null !== componentOrElement ? findCurrentHostFiberImpl(componentOrElement) : null;
		componentOrElement = null === componentOrElement ? null : componentOrElement.stateNode;
		return componentOrElement;
	};
	var internals$jscomp$inline_2347 = {
		bundleType: 0,
		version: "19.2.7",
		rendererPackageName: "react-dom",
		currentDispatcherRef: ReactSharedInternals,
		reconcilerVersion: "19.2.7"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
		var hook$jscomp$inline_2348 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!hook$jscomp$inline_2348.isDisabled && hook$jscomp$inline_2348.supportsFiber) try {
			rendererID = hook$jscomp$inline_2348.inject(internals$jscomp$inline_2347), injectedHook = hook$jscomp$inline_2348;
		} catch (err) {}
	}
	exports.createRoot = function(container, options) {
		if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
		var isStrictMode = !1, identifierPrefix = "", onUncaughtError = defaultOnUncaughtError, onCaughtError = defaultOnCaughtError, onRecoverableError = defaultOnRecoverableError;
		null !== options && void 0 !== options && (!0 === options.unstable_strictMode && (isStrictMode = !0), void 0 !== options.identifierPrefix && (identifierPrefix = options.identifierPrefix), void 0 !== options.onUncaughtError && (onUncaughtError = options.onUncaughtError), void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError), void 0 !== options.onRecoverableError && (onRecoverableError = options.onRecoverableError));
		options = createFiberRoot(container, 1, !1, null, null, isStrictMode, identifierPrefix, null, onUncaughtError, onCaughtError, onRecoverableError, defaultOnDefaultTransitionIndicator);
		container[internalContainerInstanceKey] = options.current;
		listenToAllSupportedEvents(container);
		return new ReactDOMRoot(options);
	};
}));
//#endregion
//#region node_modules/react-dom/client.js
var require_client = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_client_production();
}));
//#endregion
//#region src/model/constants.ts
var import_react = require_react();
var import_client = require_client();
var METHOD_VALUES = ["standard", "extended"];
var PERIOD_TYPE_VALUES = [
	"hour",
	"day",
	"week",
	"month",
	"year",
	"decade"
];
var APPEARANCE_VALUES = [
	"system",
	"light",
	"dark"
];
var NUMERIC_CONSTRAINTS = {
	axisRange: {
		minimum: 1,
		maximum: 365,
		step: 1,
		integer: true
	},
	historicalPeriods: {
		minimum: 2,
		maximum: 365,
		step: 1,
		integer: true
	},
	referenceDebtAmount: {
		minimum: .01,
		maximum: 1e9,
		step: .01,
		integer: false
	},
	halfLife: {
		minimum: 1,
		maximum: 365,
		step: 1,
		integer: true
	}
};
var DEFAULT_SCENARIO = {
	method: "standard",
	axisRange: 52,
	periodType: "week",
	historicalPeriods: 26,
	referenceDebtAmount: 1e3,
	halfLife: 12,
	appearance: "system"
};
//#endregion
//#region src/model/formatting.ts
var REFERENCE_DEBT_FORMATTER = new Intl.NumberFormat("en-US", {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
	useGrouping: true
});
function formatBiasWeight(biasWeight) {
	if (biasWeight === 0) return "0.0000";
	if (biasWeight > 0 && biasWeight < 1e-4) return biasWeight.toExponential(2);
	return biasWeight.toFixed(4);
}
function formatDecayConstant(decayConstant) {
	return decayConstant.toFixed(4);
}
function formatReferenceDebtAmount(referenceDebtAmount) {
	return REFERENCE_DEBT_FORMATTER.format(referenceDebtAmount);
}
//#endregion
//#region src/model/validation.ts
var NUMERIC_SCENARIO_FIELDS = [
	"axisRange",
	"historicalPeriods",
	"referenceDebtAmount",
	"halfLife"
];
function createValidationError(field, code, value) {
	const constraint = NUMERIC_CONSTRAINTS[field];
	return {
		field,
		code,
		value,
		minimum: constraint.minimum,
		maximum: constraint.maximum
	};
}
function validateNumericValue(field, value) {
	const constraint = NUMERIC_CONSTRAINTS[field];
	if (!Number.isFinite(value)) return {
		isValid: false,
		errors: [createValidationError(field, "not-finite", value)]
	};
	if (constraint.integer && !Number.isInteger(value)) return {
		isValid: false,
		errors: [createValidationError(field, "not-integer", value)]
	};
	if (value < constraint.minimum || value > constraint.maximum) return {
		isValid: false,
		errors: [createValidationError(field, "out-of-range", value)]
	};
	return {
		isValid: true,
		errors: []
	};
}
function validateScenario(scenario) {
	const errors = [];
	for (const field of NUMERIC_SCENARIO_FIELDS) {
		const result = validateNumericValue(field, scenario[field]);
		if (!result.isValid) errors.push(...result.errors);
	}
	if (errors.length > 0) return {
		isValid: false,
		errors
	};
	return {
		isValid: true,
		errors: []
	};
}
//#endregion
//#region src/model/formulas.ts
function deriveDecayConstant(halfLife) {
	return Math.LN2 / halfLife;
}
function calculateStandardBiasWeight(periodIndex, decayConstant) {
	return Math.exp(-decayConstant * (periodIndex - 1));
}
function calculateExtendedBiasWeight(periodIndex, decayConstant, historicalPeriods) {
	if (periodIndex >= historicalPeriods) return 0;
	if (periodIndex === 1) return 1;
	const elapsedPeriods = periodIndex - 1;
	const remainingPeriods = historicalPeriods - periodIndex;
	const activeSegmentDecay = Math.exp(-decayConstant * elapsedPeriods);
	const remainingDecayDistance = -Math.expm1(-decayConstant * remainingPeriods);
	const completeDecayDistance = -Math.expm1(-decayConstant * (historicalPeriods - 1));
	return activeSegmentDecay * remainingDecayDistance / completeDecayDistance;
}
function generateCurvePoints(scenario) {
	if (!validateScenario(scenario).isValid) throw new RangeError("Cannot generate curve points from an invalid scenario.");
	const decayConstant = deriveDecayConstant(scenario.halfLife);
	const curvePoints = [];
	for (let periodIndex = 1; periodIndex <= scenario.axisRange; periodIndex++) {
		const biasWeight = scenario.method === "standard" ? calculateStandardBiasWeight(periodIndex, decayConstant) : calculateExtendedBiasWeight(periodIndex, decayConstant, scenario.historicalPeriods);
		curvePoints.push({
			periodIndex,
			biasWeight
		});
	}
	return curvePoints;
}
//#endregion
//#region src/state/scenarioControls.ts
var NUMERIC_FIELD_LABELS = {
	axisRange: "axis range",
	historicalPeriods: "historical period count",
	referenceDebtAmount: "reference debt amount",
	halfLife: "half-life"
};
var INTEGER_INPUT_PATTERN = /^[+-]?\d+$/;
var REFERENCE_DEBT_INPUT_PATTERN = /^[+-]?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{0,2})?$/;
var PERIOD_LABELS = {
	hour: ["hour", "hours"],
	day: ["day", "days"],
	week: ["week", "weeks"],
	month: ["month", "months"],
	year: ["year", "years"],
	decade: ["decade", "decades"]
};
function createNumericInputText(scenario) {
	return {
		axisRange: scenario.axisRange.toString(),
		historicalPeriods: scenario.historicalPeriods.toString(),
		referenceDebtAmount: formatReferenceDebtAmount(scenario.referenceDebtAmount),
		halfLife: formatEditableNumericValue("halfLife", scenario.halfLife)
	};
}
function formatEditableNumericValue(field, value) {
	const constraint = NUMERIC_CONSTRAINTS[field];
	if (field === "referenceDebtAmount") return formatReferenceDebtAmount(value);
	if (constraint.integer) return value.toFixed(0);
	return value.toFixed(2);
}
function parseNumericInput(field, text) {
	const fieldLabel = NUMERIC_FIELD_LABELS[field];
	if (text.trim() === "") return {
		isValid: false,
		message: `Enter the ${fieldLabel}.`
	};
	const constraint = NUMERIC_CONSTRAINTS[field];
	const trimmedText = text.trim();
	if (field === "referenceDebtAmount" && !REFERENCE_DEBT_INPUT_PATTERN.test(trimmedText)) return {
		isValid: false,
		message: "Use standard comma grouping and no more than two decimal places."
	};
	const normalizedText = field === "referenceDebtAmount" ? trimmedText.replaceAll(",", "") : trimmedText;
	if (constraint.integer && !INTEGER_INPUT_PATTERN.test(normalizedText)) return {
		isValid: false,
		message: `Enter a whole-number ${fieldLabel}.`
	};
	const value = Number(normalizedText);
	const validationResult = validateNumericValue(field, value);
	if (!validationResult.isValid) {
		const firstError = validationResult.errors[0];
		if (firstError?.code === "not-finite") return {
			isValid: false,
			message: `Enter a numeric ${fieldLabel}.`
		};
		if (firstError?.code === "not-integer") return {
			isValid: false,
			message: `Enter a whole-number ${fieldLabel}.`
		};
		return {
			isValid: false,
			message: `Enter a value from ${constraint.minimum.toLocaleString("en-US")} to ${constraint.maximum.toLocaleString("en-US")}.`
		};
	}
	const stepPosition = (value - constraint.minimum) / constraint.step;
	if (Math.abs(stepPosition - Math.round(stepPosition)) > 1e-8) return {
		isValid: false,
		message: `Use increments of ${constraint.step}.`
	};
	return {
		isValid: true,
		value
	};
}
function formatPeriodCount(count, periodType, fractionDigits = 0) {
	const labels = PERIOD_LABELS[periodType];
	const label = count === 1 ? labels[0] : labels[1];
	return `${count.toFixed(fractionDigits)} ${label}`;
}
function isMethod(value) {
	return METHOD_VALUES.some((method) => method === value);
}
function isPeriodType(value) {
	return PERIOD_TYPE_VALUES.some((periodType) => periodType === value);
}
function isAppearance(value) {
	return APPEARANCE_VALUES.some((appearance) => appearance === value);
}
//#endregion
//#region node_modules/@kurkle/color/dist/color.esm.js
/*!
* @kurkle/color v0.3.4
* https://github.com/kurkle/color#readme
* (c) 2024 Jukka Kurkela
* Released under the MIT License
*/
function round(v) {
	return v + .5 | 0;
}
var lim = (v, l, h) => Math.max(Math.min(v, h), l);
function p2b(v) {
	return lim(round(v * 2.55), 0, 255);
}
function n2b(v) {
	return lim(round(v * 255), 0, 255);
}
function b2n(v) {
	return lim(round(v / 2.55) / 100, 0, 1);
}
function n2p(v) {
	return lim(round(v * 100), 0, 100);
}
var map$1 = {
	0: 0,
	1: 1,
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	A: 10,
	B: 11,
	C: 12,
	D: 13,
	E: 14,
	F: 15,
	a: 10,
	b: 11,
	c: 12,
	d: 13,
	e: 14,
	f: 15
};
var hex = [..."0123456789ABCDEF"];
var h1 = (b) => hex[b & 15];
var h2 = (b) => hex[(b & 240) >> 4] + hex[b & 15];
var eq = (b) => (b & 240) >> 4 === (b & 15);
var isShort = (v) => eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
function hexParse(str) {
	var len = str.length;
	var ret;
	if (str[0] === "#") {
		if (len === 4 || len === 5) ret = {
			r: 255 & map$1[str[1]] * 17,
			g: 255 & map$1[str[2]] * 17,
			b: 255 & map$1[str[3]] * 17,
			a: len === 5 ? map$1[str[4]] * 17 : 255
		};
		else if (len === 7 || len === 9) ret = {
			r: map$1[str[1]] << 4 | map$1[str[2]],
			g: map$1[str[3]] << 4 | map$1[str[4]],
			b: map$1[str[5]] << 4 | map$1[str[6]],
			a: len === 9 ? map$1[str[7]] << 4 | map$1[str[8]] : 255
		};
	}
	return ret;
}
var alpha = (a, f) => a < 255 ? f(a) : "";
function hexString(v) {
	var f = isShort(v) ? h1 : h2;
	return v ? "#" + f(v.r) + f(v.g) + f(v.b) + alpha(v.a, f) : void 0;
}
var HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function hsl2rgbn(h, s, l) {
	const a = s * Math.min(l, 1 - l);
	const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
	return [
		f(0),
		f(8),
		f(4)
	];
}
function hsv2rgbn(h, s, v) {
	const f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
	return [
		f(5),
		f(3),
		f(1)
	];
}
function hwb2rgbn(h, w, b) {
	const rgb = hsl2rgbn(h, 1, .5);
	let i;
	if (w + b > 1) {
		i = 1 / (w + b);
		w *= i;
		b *= i;
	}
	for (i = 0; i < 3; i++) {
		rgb[i] *= 1 - w - b;
		rgb[i] += w;
	}
	return rgb;
}
function hueValue(r, g, b, d, max) {
	if (r === max) return (g - b) / d + (g < b ? 6 : 0);
	if (g === max) return (b - r) / d + 2;
	return (r - g) / d + 4;
}
function rgb2hsl(v) {
	const range = 255;
	const r = v.r / range;
	const g = v.g / range;
	const b = v.b / range;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const l = (max + min) / 2;
	let h, s, d;
	if (max !== min) {
		d = max - min;
		s = l > .5 ? d / (2 - max - min) : d / (max + min);
		h = hueValue(r, g, b, d, max);
		h = h * 60 + .5;
	}
	return [
		h | 0,
		s || 0,
		l
	];
}
function calln(f, a, b, c) {
	return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
}
function hsl2rgb(h, s, l) {
	return calln(hsl2rgbn, h, s, l);
}
function hwb2rgb(h, w, b) {
	return calln(hwb2rgbn, h, w, b);
}
function hsv2rgb(h, s, v) {
	return calln(hsv2rgbn, h, s, v);
}
function hue(h) {
	return (h % 360 + 360) % 360;
}
function hueParse(str) {
	const m = HUE_RE.exec(str);
	let a = 255;
	let v;
	if (!m) return;
	if (m[5] !== v) a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
	const h = hue(+m[2]);
	const p1 = +m[3] / 100;
	const p2 = +m[4] / 100;
	if (m[1] === "hwb") v = hwb2rgb(h, p1, p2);
	else if (m[1] === "hsv") v = hsv2rgb(h, p1, p2);
	else v = hsl2rgb(h, p1, p2);
	return {
		r: v[0],
		g: v[1],
		b: v[2],
		a
	};
}
function rotate(v, deg) {
	var h = rgb2hsl(v);
	h[0] = hue(h[0] + deg);
	h = hsl2rgb(h);
	v.r = h[0];
	v.g = h[1];
	v.b = h[2];
}
function hslString(v) {
	if (!v) return;
	const a = rgb2hsl(v);
	const h = a[0];
	const s = n2p(a[1]);
	const l = n2p(a[2]);
	return v.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})` : `hsl(${h}, ${s}%, ${l}%)`;
}
var map = {
	x: "dark",
	Z: "light",
	Y: "re",
	X: "blu",
	W: "gr",
	V: "medium",
	U: "slate",
	A: "ee",
	T: "ol",
	S: "or",
	B: "ra",
	C: "lateg",
	D: "ights",
	R: "in",
	Q: "turquois",
	E: "hi",
	P: "ro",
	O: "al",
	N: "le",
	M: "de",
	L: "yello",
	F: "en",
	K: "ch",
	G: "arks",
	H: "ea",
	I: "ightg",
	J: "wh"
};
var names$1 = {
	OiceXe: "f0f8ff",
	antiquewEte: "faebd7",
	aqua: "ffff",
	aquamarRe: "7fffd4",
	azuY: "f0ffff",
	beige: "f5f5dc",
	bisque: "ffe4c4",
	black: "0",
	blanKedOmond: "ffebcd",
	Xe: "ff",
	XeviTet: "8a2be2",
	bPwn: "a52a2a",
	burlywood: "deb887",
	caMtXe: "5f9ea0",
	KartYuse: "7fff00",
	KocTate: "d2691e",
	cSO: "ff7f50",
	cSnflowerXe: "6495ed",
	cSnsilk: "fff8dc",
	crimson: "dc143c",
	cyan: "ffff",
	xXe: "8b",
	xcyan: "8b8b",
	xgTMnPd: "b8860b",
	xWay: "a9a9a9",
	xgYF: "6400",
	xgYy: "a9a9a9",
	xkhaki: "bdb76b",
	xmagFta: "8b008b",
	xTivegYF: "556b2f",
	xSange: "ff8c00",
	xScEd: "9932cc",
	xYd: "8b0000",
	xsOmon: "e9967a",
	xsHgYF: "8fbc8f",
	xUXe: "483d8b",
	xUWay: "2f4f4f",
	xUgYy: "2f4f4f",
	xQe: "ced1",
	xviTet: "9400d3",
	dAppRk: "ff1493",
	dApskyXe: "bfff",
	dimWay: "696969",
	dimgYy: "696969",
	dodgerXe: "1e90ff",
	fiYbrick: "b22222",
	flSOwEte: "fffaf0",
	foYstWAn: "228b22",
	fuKsia: "ff00ff",
	gaRsbSo: "dcdcdc",
	ghostwEte: "f8f8ff",
	gTd: "ffd700",
	gTMnPd: "daa520",
	Way: "808080",
	gYF: "8000",
	gYFLw: "adff2f",
	gYy: "808080",
	honeyMw: "f0fff0",
	hotpRk: "ff69b4",
	RdianYd: "cd5c5c",
	Rdigo: "4b0082",
	ivSy: "fffff0",
	khaki: "f0e68c",
	lavFMr: "e6e6fa",
	lavFMrXsh: "fff0f5",
	lawngYF: "7cfc00",
	NmoncEffon: "fffacd",
	ZXe: "add8e6",
	ZcSO: "f08080",
	Zcyan: "e0ffff",
	ZgTMnPdLw: "fafad2",
	ZWay: "d3d3d3",
	ZgYF: "90ee90",
	ZgYy: "d3d3d3",
	ZpRk: "ffb6c1",
	ZsOmon: "ffa07a",
	ZsHgYF: "20b2aa",
	ZskyXe: "87cefa",
	ZUWay: "778899",
	ZUgYy: "778899",
	ZstAlXe: "b0c4de",
	ZLw: "ffffe0",
	lime: "ff00",
	limegYF: "32cd32",
	lRF: "faf0e6",
	magFta: "ff00ff",
	maPon: "800000",
	VaquamarRe: "66cdaa",
	VXe: "cd",
	VScEd: "ba55d3",
	VpurpN: "9370db",
	VsHgYF: "3cb371",
	VUXe: "7b68ee",
	VsprRggYF: "fa9a",
	VQe: "48d1cc",
	VviTetYd: "c71585",
	midnightXe: "191970",
	mRtcYam: "f5fffa",
	mistyPse: "ffe4e1",
	moccasR: "ffe4b5",
	navajowEte: "ffdead",
	navy: "80",
	Tdlace: "fdf5e6",
	Tive: "808000",
	TivedBb: "6b8e23",
	Sange: "ffa500",
	SangeYd: "ff4500",
	ScEd: "da70d6",
	pOegTMnPd: "eee8aa",
	pOegYF: "98fb98",
	pOeQe: "afeeee",
	pOeviTetYd: "db7093",
	papayawEp: "ffefd5",
	pHKpuff: "ffdab9",
	peru: "cd853f",
	pRk: "ffc0cb",
	plum: "dda0dd",
	powMrXe: "b0e0e6",
	purpN: "800080",
	YbeccapurpN: "663399",
	Yd: "ff0000",
	Psybrown: "bc8f8f",
	PyOXe: "4169e1",
	saddNbPwn: "8b4513",
	sOmon: "fa8072",
	sandybPwn: "f4a460",
	sHgYF: "2e8b57",
	sHshell: "fff5ee",
	siFna: "a0522d",
	silver: "c0c0c0",
	skyXe: "87ceeb",
	UXe: "6a5acd",
	UWay: "708090",
	UgYy: "708090",
	snow: "fffafa",
	sprRggYF: "ff7f",
	stAlXe: "4682b4",
	tan: "d2b48c",
	teO: "8080",
	tEstN: "d8bfd8",
	tomato: "ff6347",
	Qe: "40e0d0",
	viTet: "ee82ee",
	JHt: "f5deb3",
	wEte: "ffffff",
	wEtesmoke: "f5f5f5",
	Lw: "ffff00",
	LwgYF: "9acd32"
};
function unpack() {
	const unpacked = {};
	const keys = Object.keys(names$1);
	const tkeys = Object.keys(map);
	let i, j, k, ok, nk;
	for (i = 0; i < keys.length; i++) {
		ok = nk = keys[i];
		for (j = 0; j < tkeys.length; j++) {
			k = tkeys[j];
			nk = nk.replace(k, map[k]);
		}
		k = parseInt(names$1[ok], 16);
		unpacked[nk] = [
			k >> 16 & 255,
			k >> 8 & 255,
			k & 255
		];
	}
	return unpacked;
}
var names;
function nameParse(str) {
	if (!names) {
		names = unpack();
		names.transparent = [
			0,
			0,
			0,
			0
		];
	}
	const a = names[str.toLowerCase()];
	return a && {
		r: a[0],
		g: a[1],
		b: a[2],
		a: a.length === 4 ? a[3] : 255
	};
}
var RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function rgbParse(str) {
	const m = RGB_RE.exec(str);
	let a = 255;
	let r, g, b;
	if (!m) return;
	if (m[7] !== r) {
		const v = +m[7];
		a = m[8] ? p2b(v) : lim(v * 255, 0, 255);
	}
	r = +m[1];
	g = +m[3];
	b = +m[5];
	r = 255 & (m[2] ? p2b(r) : lim(r, 0, 255));
	g = 255 & (m[4] ? p2b(g) : lim(g, 0, 255));
	b = 255 & (m[6] ? p2b(b) : lim(b, 0, 255));
	return {
		r,
		g,
		b,
		a
	};
}
function rgbString(v) {
	return v && (v.a < 255 ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})` : `rgb(${v.r}, ${v.g}, ${v.b})`);
}
var to = (v) => v <= .0031308 ? v * 12.92 : Math.pow(v, 1 / 2.4) * 1.055 - .055;
var from = (v) => v <= .04045 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4);
function interpolate$1(rgb1, rgb2, t) {
	const r = from(b2n(rgb1.r));
	const g = from(b2n(rgb1.g));
	const b = from(b2n(rgb1.b));
	return {
		r: n2b(to(r + t * (from(b2n(rgb2.r)) - r))),
		g: n2b(to(g + t * (from(b2n(rgb2.g)) - g))),
		b: n2b(to(b + t * (from(b2n(rgb2.b)) - b))),
		a: rgb1.a + t * (rgb2.a - rgb1.a)
	};
}
function modHSL(v, i, ratio) {
	if (v) {
		let tmp = rgb2hsl(v);
		tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
		tmp = hsl2rgb(tmp);
		v.r = tmp[0];
		v.g = tmp[1];
		v.b = tmp[2];
	}
}
function clone$1(v, proto) {
	return v ? Object.assign(proto || {}, v) : v;
}
function fromObject(input) {
	var v = {
		r: 0,
		g: 0,
		b: 0,
		a: 255
	};
	if (Array.isArray(input)) {
		if (input.length >= 3) {
			v = {
				r: input[0],
				g: input[1],
				b: input[2],
				a: 255
			};
			if (input.length > 3) v.a = n2b(input[3]);
		}
	} else {
		v = clone$1(input, {
			r: 0,
			g: 0,
			b: 0,
			a: 1
		});
		v.a = n2b(v.a);
	}
	return v;
}
function functionParse(str) {
	if (str.charAt(0) === "r") return rgbParse(str);
	return hueParse(str);
}
var Color = class Color {
	constructor(input) {
		if (input instanceof Color) return input;
		const type = typeof input;
		let v;
		if (type === "object") v = fromObject(input);
		else if (type === "string") v = hexParse(input) || nameParse(input) || functionParse(input);
		this._rgb = v;
		this._valid = !!v;
	}
	get valid() {
		return this._valid;
	}
	get rgb() {
		var v = clone$1(this._rgb);
		if (v) v.a = b2n(v.a);
		return v;
	}
	set rgb(obj) {
		this._rgb = fromObject(obj);
	}
	rgbString() {
		return this._valid ? rgbString(this._rgb) : void 0;
	}
	hexString() {
		return this._valid ? hexString(this._rgb) : void 0;
	}
	hslString() {
		return this._valid ? hslString(this._rgb) : void 0;
	}
	mix(color, weight) {
		if (color) {
			const c1 = this.rgb;
			const c2 = color.rgb;
			let w2;
			const p = weight === w2 ? .5 : weight;
			const w = 2 * p - 1;
			const a = c1.a - c2.a;
			const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
			w2 = 1 - w1;
			c1.r = 255 & w1 * c1.r + w2 * c2.r + .5;
			c1.g = 255 & w1 * c1.g + w2 * c2.g + .5;
			c1.b = 255 & w1 * c1.b + w2 * c2.b + .5;
			c1.a = p * c1.a + (1 - p) * c2.a;
			this.rgb = c1;
		}
		return this;
	}
	interpolate(color, t) {
		if (color) this._rgb = interpolate$1(this._rgb, color._rgb, t);
		return this;
	}
	clone() {
		return new Color(this.rgb);
	}
	alpha(a) {
		this._rgb.a = n2b(a);
		return this;
	}
	clearer(ratio) {
		const rgb = this._rgb;
		rgb.a *= 1 - ratio;
		return this;
	}
	greyscale() {
		const rgb = this._rgb;
		rgb.r = rgb.g = rgb.b = round(rgb.r * .3 + rgb.g * .59 + rgb.b * .11);
		return this;
	}
	opaquer(ratio) {
		const rgb = this._rgb;
		rgb.a *= 1 + ratio;
		return this;
	}
	negate() {
		const v = this._rgb;
		v.r = 255 - v.r;
		v.g = 255 - v.g;
		v.b = 255 - v.b;
		return this;
	}
	lighten(ratio) {
		modHSL(this._rgb, 2, ratio);
		return this;
	}
	darken(ratio) {
		modHSL(this._rgb, 2, -ratio);
		return this;
	}
	saturate(ratio) {
		modHSL(this._rgb, 1, ratio);
		return this;
	}
	desaturate(ratio) {
		modHSL(this._rgb, 1, -ratio);
		return this;
	}
	rotate(deg) {
		rotate(this._rgb, deg);
		return this;
	}
};
//#endregion
//#region node_modules/chart.js/dist/chunks/helpers.dataset.js
/*!
* Chart.js v4.5.1
* https://www.chartjs.org
* (c) 2025 Chart.js Contributors
* Released under the MIT License
*/
/**
* @namespace Chart.helpers
*/ /**
* An empty function that can be used, for example, for optional callback.
*/ function noop() {}
/**
* Returns a unique id, sequentially generated from a global variable.
*/ var uid = (() => {
	let id = 0;
	return () => id++;
})();
/**
* Returns true if `value` is neither null nor undefined, else returns false.
* @param value - The value to test.
* @since 2.7.0
*/ function isNullOrUndef(value) {
	return value === null || value === void 0;
}
/**
* Returns true if `value` is an array (including typed arrays), else returns false.
* @param value - The value to test.
* @function
*/ function isArray(value) {
	if (Array.isArray && Array.isArray(value)) return true;
	const type = Object.prototype.toString.call(value);
	if (type.slice(0, 7) === "[object" && type.slice(-6) === "Array]") return true;
	return false;
}
/**
* Returns true if `value` is an object (excluding null), else returns false.
* @param value - The value to test.
* @since 2.7.0
*/ function isObject(value) {
	return value !== null && Object.prototype.toString.call(value) === "[object Object]";
}
/**
* Returns true if `value` is a finite number, else returns false
* @param value  - The value to test.
*/ function isNumberFinite(value) {
	return (typeof value === "number" || value instanceof Number) && isFinite(+value);
}
/**
* Returns `value` if finite, else returns `defaultValue`.
* @param value - The value to return if defined.
* @param defaultValue - The value to return if `value` is not finite.
*/ function finiteOrDefault(value, defaultValue) {
	return isNumberFinite(value) ? value : defaultValue;
}
/**
* Returns `value` if defined, else returns `defaultValue`.
* @param value - The value to return if defined.
* @param defaultValue - The value to return if `value` is undefined.
*/ function valueOrDefault(value, defaultValue) {
	return typeof value === "undefined" ? defaultValue : value;
}
var toDimension = (value, dimension) => typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 * dimension : +value;
/**
* Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
* value returned by `fn`. If `fn` is not a function, this method returns undefined.
* @param fn - The function to call.
* @param args - The arguments with which `fn` should be called.
* @param [thisArg] - The value of `this` provided for the call to `fn`.
*/ function callback(fn, args, thisArg) {
	if (fn && typeof fn.call === "function") return fn.apply(thisArg, args);
}
function each(loopable, fn, thisArg, reverse) {
	let i, len, keys;
	if (isArray(loopable)) {
		len = loopable.length;
		if (reverse) for (i = len - 1; i >= 0; i--) fn.call(thisArg, loopable[i], i);
		else for (i = 0; i < len; i++) fn.call(thisArg, loopable[i], i);
	} else if (isObject(loopable)) {
		keys = Object.keys(loopable);
		len = keys.length;
		for (i = 0; i < len; i++) fn.call(thisArg, loopable[keys[i]], keys[i]);
	}
}
/**
* Returns true if the `a0` and `a1` arrays have the same content, else returns false.
* @param a0 - The array to compare
* @param a1 - The array to compare
* @private
*/ function _elementsEqual(a0, a1) {
	let i, ilen, v0, v1;
	if (!a0 || !a1 || a0.length !== a1.length) return false;
	for (i = 0, ilen = a0.length; i < ilen; ++i) {
		v0 = a0[i];
		v1 = a1[i];
		if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) return false;
	}
	return true;
}
/**
* Returns a deep copy of `source` without keeping references on objects and arrays.
* @param source - The value to clone.
*/ function clone(source) {
	if (isArray(source)) return source.map(clone);
	if (isObject(source)) {
		const target = Object.create(null);
		const keys = Object.keys(source);
		const klen = keys.length;
		let k = 0;
		for (; k < klen; ++k) target[keys[k]] = clone(source[keys[k]]);
		return target;
	}
	return source;
}
function isValidKey(key) {
	return [
		"__proto__",
		"prototype",
		"constructor"
	].indexOf(key) === -1;
}
/**
* The default merger when Chart.helpers.merge is called without merger option.
* Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
* @private
*/ function _merger(key, target, source, options) {
	if (!isValidKey(key)) return;
	const tval = target[key];
	const sval = source[key];
	if (isObject(tval) && isObject(sval)) merge(tval, sval, options);
	else target[key] = clone(sval);
}
function merge(target, source, options) {
	const sources = isArray(source) ? source : [source];
	const ilen = sources.length;
	if (!isObject(target)) return target;
	options = options || {};
	const merger = options.merger || _merger;
	let current;
	for (let i = 0; i < ilen; ++i) {
		current = sources[i];
		if (!isObject(current)) continue;
		const keys = Object.keys(current);
		for (let k = 0, klen = keys.length; k < klen; ++k) merger(keys[k], target, current, options);
	}
	return target;
}
function mergeIf(target, source) {
	return merge(target, source, { merger: _mergerIf });
}
/**
* Merges source[key] in target[key] only if target[key] is undefined.
* @private
*/ function _mergerIf(key, target, source) {
	if (!isValidKey(key)) return;
	const tval = target[key];
	const sval = source[key];
	if (isObject(tval) && isObject(sval)) mergeIf(tval, sval);
	else if (!Object.prototype.hasOwnProperty.call(target, key)) target[key] = clone(sval);
}
var keyResolvers = {
	"": (v) => v,
	x: (o) => o.x,
	y: (o) => o.y
};
/**
* @private
*/ function _splitKey(key) {
	const parts = key.split(".");
	const keys = [];
	let tmp = "";
	for (const part of parts) {
		tmp += part;
		if (tmp.endsWith("\\")) tmp = tmp.slice(0, -1) + ".";
		else {
			keys.push(tmp);
			tmp = "";
		}
	}
	return keys;
}
function _getKeyResolver(key) {
	const keys = _splitKey(key);
	return (obj) => {
		for (const k of keys) {
			if (k === "") break;
			obj = obj && obj[k];
		}
		return obj;
	};
}
function resolveObjectKey(obj, key) {
	return (keyResolvers[key] || (keyResolvers[key] = _getKeyResolver(key)))(obj);
}
/**
* @private
*/ function _capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
var defined = (value) => typeof value !== "undefined";
var isFunction = (value) => typeof value === "function";
var setsEqual = (a, b) => {
	if (a.size !== b.size) return false;
	for (const item of a) if (!b.has(item)) return false;
	return true;
};
/**
* @param e - The event
* @private
*/ function _isClickEvent(e) {
	return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
/**
* @alias Chart.helpers.math
* @namespace
*/ var PI = Math.PI;
var TAU = 2 * PI;
var PITAU = TAU + PI;
var INFINITY = Number.POSITIVE_INFINITY;
var RAD_PER_DEG = PI / 180;
var HALF_PI = PI / 2;
var QUARTER_PI = PI / 4;
var TWO_THIRDS_PI = PI * 2 / 3;
var log10 = Math.log10;
var sign = Math.sign;
function almostEquals(x, y, epsilon) {
	return Math.abs(x - y) < epsilon;
}
/**
* Implementation of the nice number algorithm used in determining where axis labels will go
*/ function niceNum(range) {
	const roundedRange = Math.round(range);
	range = almostEquals(range, roundedRange, range / 1e3) ? roundedRange : range;
	const niceRange = Math.pow(10, Math.floor(log10(range)));
	const fraction = range / niceRange;
	return (fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10) * niceRange;
}
/**
* Returns an array of factors sorted from 1 to sqrt(value)
* @private
*/ function _factorize(value) {
	const result = [];
	const sqrt = Math.sqrt(value);
	let i;
	for (i = 1; i < sqrt; i++) if (value % i === 0) {
		result.push(i);
		result.push(value / i);
	}
	if (sqrt === (sqrt | 0)) result.push(sqrt);
	result.sort((a, b) => a - b).pop();
	return result;
}
/**
* Verifies that attempting to coerce n to string or number won't throw a TypeError.
*/ function isNonPrimitive(n) {
	return typeof n === "symbol" || typeof n === "object" && n !== null && !(Symbol.toPrimitive in n || "toString" in n || "valueOf" in n);
}
function isNumber(n) {
	return !isNonPrimitive(n) && !isNaN(parseFloat(n)) && isFinite(n);
}
function almostWhole(x, epsilon) {
	const rounded = Math.round(x);
	return rounded - epsilon <= x && rounded + epsilon >= x;
}
/**
* @private
*/ function _setMinAndMaxByKey(array, target, property) {
	let i, ilen, value;
	for (i = 0, ilen = array.length; i < ilen; i++) {
		value = array[i][property];
		if (!isNaN(value)) {
			target.min = Math.min(target.min, value);
			target.max = Math.max(target.max, value);
		}
	}
}
function toRadians(degrees) {
	return degrees * (PI / 180);
}
function toDegrees(radians) {
	return radians * (180 / PI);
}
/**
* Returns the number of decimal places
* i.e. the number of digits after the decimal point, of the value of this Number.
* @param x - A number.
* @returns The number of decimal places.
* @private
*/ function _decimalPlaces(x) {
	if (!isNumberFinite(x)) return;
	let e = 1;
	let p = 0;
	while (Math.round(x * e) / e !== x) {
		e *= 10;
		p++;
	}
	return p;
}
function getAngleFromPoint(centrePoint, anglePoint) {
	const distanceFromXCenter = anglePoint.x - centrePoint.x;
	const distanceFromYCenter = anglePoint.y - centrePoint.y;
	const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
	let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
	if (angle < -.5 * PI) angle += TAU;
	return {
		angle,
		distance: radialDistanceFromCenter
	};
}
function distanceBetweenPoints(pt1, pt2) {
	return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
/**
* Shortest distance between angles, in either direction.
* @private
*/ function _angleDiff(a, b) {
	return (a - b + PITAU) % TAU - PI;
}
/**
* Normalize angle to be between 0 and 2*PI
* @private
*/ function _normalizeAngle(a) {
	return (a % TAU + TAU) % TAU;
}
/**
* @private
*/ function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
	const a = _normalizeAngle(angle);
	const s = _normalizeAngle(start);
	const e = _normalizeAngle(end);
	const angleToStart = _normalizeAngle(s - a);
	const angleToEnd = _normalizeAngle(e - a);
	const startToAngle = _normalizeAngle(a - s);
	const endToAngle = _normalizeAngle(a - e);
	return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
}
/**
* Limit `value` between `min` and `max`
* @param value
* @param min
* @param max
* @private
*/ function _limitValue(value, min, max) {
	return Math.max(min, Math.min(max, value));
}
/**
* @param {number} value
* @private
*/ function _int16Range(value) {
	return _limitValue(value, -32768, 32767);
}
/**
* @param value
* @param start
* @param end
* @param [epsilon]
* @private
*/ function _isBetween(value, start, end, epsilon = 1e-6) {
	return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
}
function _lookup(table, value, cmp) {
	cmp = cmp || ((index) => table[index] < value);
	let hi = table.length - 1;
	let lo = 0;
	let mid;
	while (hi - lo > 1) {
		mid = lo + hi >> 1;
		if (cmp(mid)) lo = mid;
		else hi = mid;
	}
	return {
		lo,
		hi
	};
}
/**
* Binary search
* @param table - the table search. must be sorted!
* @param key - property name for the value in each entry
* @param value - value to find
* @param last - lookup last index
* @private
*/ var _lookupByKey = (table, key, value, last) => _lookup(table, value, last ? (index) => {
	const ti = table[index][key];
	return ti < value || ti === value && table[index + 1][key] === value;
} : (index) => table[index][key] < value);
/**
* Reverse binary search
* @param table - the table search. must be sorted!
* @param key - property name for the value in each entry
* @param value - value to find
* @private
*/ var _rlookupByKey = (table, key, value) => _lookup(table, value, (index) => table[index][key] >= value);
/**
* Return subset of `values` between `min` and `max` inclusive.
* Values are assumed to be in sorted order.
* @param values - sorted array of values
* @param min - min value
* @param max - max value
*/ function _filterBetween(values, min, max) {
	let start = 0;
	let end = values.length;
	while (start < end && values[start] < min) start++;
	while (end > start && values[end - 1] > max) end--;
	return start > 0 || end < values.length ? values.slice(start, end) : values;
}
var arrayEvents = [
	"push",
	"pop",
	"shift",
	"splice",
	"unshift"
];
function listenArrayEvents(array, listener) {
	if (array._chartjs) {
		array._chartjs.listeners.push(listener);
		return;
	}
	Object.defineProperty(array, "_chartjs", {
		configurable: true,
		enumerable: false,
		value: { listeners: [listener] }
	});
	arrayEvents.forEach((key) => {
		const method = "_onData" + _capitalize(key);
		const base = array[key];
		Object.defineProperty(array, key, {
			configurable: true,
			enumerable: false,
			value(...args) {
				const res = base.apply(this, args);
				array._chartjs.listeners.forEach((object) => {
					if (typeof object[method] === "function") object[method](...args);
				});
				return res;
			}
		});
	});
}
function unlistenArrayEvents(array, listener) {
	const stub = array._chartjs;
	if (!stub) return;
	const listeners = stub.listeners;
	const index = listeners.indexOf(listener);
	if (index !== -1) listeners.splice(index, 1);
	if (listeners.length > 0) return;
	arrayEvents.forEach((key) => {
		delete array[key];
	});
	delete array._chartjs;
}
/**
* @param items
*/ function _arrayUnique(items) {
	const set = new Set(items);
	if (set.size === items.length) return items;
	return Array.from(set);
}
/**
* Request animation polyfill
*/ var requestAnimFrame = function() {
	if (typeof window === "undefined") return function(callback) {
		return callback();
	};
	return window.requestAnimationFrame;
}();
/**
* Throttles calling `fn` once per animation frame
* Latest arguments are used on the actual call
*/ function throttled(fn, thisArg) {
	let argsToUse = [];
	let ticking = false;
	return function(...args) {
		argsToUse = args;
		if (!ticking) {
			ticking = true;
			requestAnimFrame.call(window, () => {
				ticking = false;
				fn.apply(thisArg, argsToUse);
			});
		}
	};
}
/**
* Debounces calling `fn` for `delay` ms
*/ function debounce(fn, delay) {
	let timeout;
	return function(...args) {
		if (delay) {
			clearTimeout(timeout);
			timeout = setTimeout(fn, delay, args);
		} else fn.apply(this, args);
		return delay;
	};
}
/**
* Converts 'start' to 'left', 'end' to 'right' and others to 'center'
* @private
*/ var _toLeftRightCenter = (align) => align === "start" ? "left" : align === "end" ? "right" : "center";
/**
* Returns `start`, `end` or `(start + end) / 2` depending on `align`. Defaults to `center`
* @private
*/ var _alignStartEnd = (align, start, end) => align === "start" ? start : align === "end" ? end : (start + end) / 2;
/**
* Returns `left`, `right` or `(left + right) / 2` depending on `align`. Defaults to `left`
* @private
*/ var _textX = (align, left, right, rtl) => {
	return align === (rtl ? "left" : "right") ? right : align === "center" ? (left + right) / 2 : left;
};
/**
* Return start and count of visible points.
* @private
*/ function _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
	const pointCount = points.length;
	let start = 0;
	let count = pointCount;
	if (meta._sorted) {
		const { iScale, vScale, _parsed } = meta;
		const spanGaps = meta.dataset ? meta.dataset.options ? meta.dataset.options.spanGaps : null : null;
		const axis = iScale.axis;
		const { min, max, minDefined, maxDefined } = iScale.getUserBounds();
		if (minDefined) {
			start = Math.min(_lookupByKey(_parsed, axis, min).lo, animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo);
			if (spanGaps) {
				const distanceToDefinedLo = _parsed.slice(0, start + 1).reverse().findIndex((point) => !isNullOrUndef(point[vScale.axis]));
				start -= Math.max(0, distanceToDefinedLo);
			}
			start = _limitValue(start, 0, pointCount - 1);
		}
		if (maxDefined) {
			let end = Math.max(_lookupByKey(_parsed, iScale.axis, max, true).hi + 1, animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max), true).hi + 1);
			if (spanGaps) {
				const distanceToDefinedHi = _parsed.slice(end - 1).findIndex((point) => !isNullOrUndef(point[vScale.axis]));
				end += Math.max(0, distanceToDefinedHi);
			}
			count = _limitValue(end, start, pointCount) - start;
		} else count = pointCount - start;
	}
	return {
		start,
		count
	};
}
/**
* Checks if the scale ranges have changed.
* @param {object} meta - dataset meta.
* @returns {boolean}
* @private
*/ function _scaleRangesChanged(meta) {
	const { xScale, yScale, _scaleRanges } = meta;
	const newRanges = {
		xmin: xScale.min,
		xmax: xScale.max,
		ymin: yScale.min,
		ymax: yScale.max
	};
	if (!_scaleRanges) {
		meta._scaleRanges = newRanges;
		return true;
	}
	const changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
	Object.assign(_scaleRanges, newRanges);
	return changed;
}
var atEdge = (t) => t === 0 || t === 1;
var elasticIn = (t, s, p) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
var elasticOut = (t, s, p) => Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
/**
* Easing functions adapted from Robert Penner's easing equations.
* @namespace Chart.helpers.easing.effects
* @see http://www.robertpenner.com/easing/
*/ var effects = {
	linear: (t) => t,
	easeInQuad: (t) => t * t,
	easeOutQuad: (t) => -t * (t - 2),
	easeInOutQuad: (t) => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
	easeInCubic: (t) => t * t * t,
	easeOutCubic: (t) => (t -= 1) * t * t + 1,
	easeInOutCubic: (t) => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
	easeInQuart: (t) => t * t * t * t,
	easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
	easeInOutQuart: (t) => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
	easeInQuint: (t) => t * t * t * t * t,
	easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
	easeInOutQuint: (t) => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
	easeInSine: (t) => -Math.cos(t * HALF_PI) + 1,
	easeOutSine: (t) => Math.sin(t * HALF_PI),
	easeInOutSine: (t) => -.5 * (Math.cos(PI * t) - 1),
	easeInExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
	easeOutExpo: (t) => t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
	easeInOutExpo: (t) => atEdge(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (t * 2 - 1)) : .5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
	easeInCirc: (t) => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
	easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
	easeInOutCirc: (t) => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
	easeInElastic: (t) => atEdge(t) ? t : elasticIn(t, .075, .3),
	easeOutElastic: (t) => atEdge(t) ? t : elasticOut(t, .075, .3),
	easeInOutElastic(t) {
		const s = .1125;
		const p = .45;
		return atEdge(t) ? t : t < .5 ? .5 * elasticIn(t * 2, s, p) : .5 + .5 * elasticOut(t * 2 - 1, s, p);
	},
	easeInBack(t) {
		return t * t * (2.70158 * t - 1.70158);
	},
	easeOutBack(t) {
		return (t -= 1) * t * (2.70158 * t + 1.70158) + 1;
	},
	easeInOutBack(t) {
		let s = 1.70158;
		if ((t /= .5) < 1) return .5 * (t * t * (((s *= 1.525) + 1) * t - s));
		return .5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
	},
	easeInBounce: (t) => 1 - effects.easeOutBounce(1 - t),
	easeOutBounce(t) {
		const m = 7.5625;
		const d = 2.75;
		if (t < 1 / d) return m * t * t;
		if (t < 2 / d) return m * (t -= 1.5 / d) * t + .75;
		if (t < 2.5 / d) return m * (t -= 2.25 / d) * t + .9375;
		return m * (t -= 2.625 / d) * t + .984375;
	},
	easeInOutBounce: (t) => t < .5 ? effects.easeInBounce(t * 2) * .5 : effects.easeOutBounce(t * 2 - 1) * .5 + .5
};
function isPatternOrGradient(value) {
	if (value && typeof value === "object") {
		const type = value.toString();
		return type === "[object CanvasPattern]" || type === "[object CanvasGradient]";
	}
	return false;
}
function color(value) {
	return isPatternOrGradient(value) ? value : new Color(value);
}
function getHoverColor(value) {
	return isPatternOrGradient(value) ? value : new Color(value).saturate(.5).darken(.1).hexString();
}
var numbers = [
	"x",
	"y",
	"borderWidth",
	"radius",
	"tension"
];
var colors = [
	"color",
	"borderColor",
	"backgroundColor"
];
function applyAnimationsDefaults(defaults) {
	defaults.set("animation", {
		delay: void 0,
		duration: 1e3,
		easing: "easeOutQuart",
		fn: void 0,
		from: void 0,
		loop: void 0,
		to: void 0,
		type: void 0
	});
	defaults.describe("animation", {
		_fallback: false,
		_indexable: false,
		_scriptable: (name) => name !== "onProgress" && name !== "onComplete" && name !== "fn"
	});
	defaults.set("animations", {
		colors: {
			type: "color",
			properties: colors
		},
		numbers: {
			type: "number",
			properties: numbers
		}
	});
	defaults.describe("animations", { _fallback: "animation" });
	defaults.set("transitions", {
		active: { animation: { duration: 400 } },
		resize: { animation: { duration: 0 } },
		show: { animations: {
			colors: { from: "transparent" },
			visible: {
				type: "boolean",
				duration: 0
			}
		} },
		hide: { animations: {
			colors: { to: "transparent" },
			visible: {
				type: "boolean",
				easing: "linear",
				fn: (v) => v | 0
			}
		} }
	});
}
function applyLayoutsDefaults(defaults) {
	defaults.set("layout", {
		autoPadding: true,
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}
	});
}
var intlCache = /* @__PURE__ */ new Map();
function getNumberFormat(locale, options) {
	options = options || {};
	const cacheKey = locale + JSON.stringify(options);
	let formatter = intlCache.get(cacheKey);
	if (!formatter) {
		formatter = new Intl.NumberFormat(locale, options);
		intlCache.set(cacheKey, formatter);
	}
	return formatter;
}
function formatNumber(num, locale, options) {
	return getNumberFormat(locale, options).format(num);
}
var formatters = {
	values(value) {
		return isArray(value) ? value : "" + value;
	},
	numeric(tickValue, index, ticks) {
		if (tickValue === 0) return "0";
		const locale = this.chart.options.locale;
		let notation;
		let delta = tickValue;
		if (ticks.length > 1) {
			const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
			if (maxTick < 1e-4 || maxTick > 0x38d7ea4c68000) notation = "scientific";
			delta = calculateDelta(tickValue, ticks);
		}
		const logDelta = log10(Math.abs(delta));
		const numDecimal = isNaN(logDelta) ? 1 : Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
		const options = {
			notation,
			minimumFractionDigits: numDecimal,
			maximumFractionDigits: numDecimal
		};
		Object.assign(options, this.options.ticks.format);
		return formatNumber(tickValue, locale, options);
	},
	logarithmic(tickValue, index, ticks) {
		if (tickValue === 0) return "0";
		const remain = ticks[index].significand || tickValue / Math.pow(10, Math.floor(log10(tickValue)));
		if ([
			1,
			2,
			3,
			5,
			10,
			15
		].includes(remain) || index > .8 * ticks.length) return formatters.numeric.call(this, tickValue, index, ticks);
		return "";
	}
};
function calculateDelta(tickValue, ticks) {
	let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
	if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) delta = tickValue - Math.floor(tickValue);
	return delta;
}
var Ticks = { formatters };
function applyScaleDefaults(defaults) {
	defaults.set("scale", {
		display: true,
		offset: false,
		reverse: false,
		beginAtZero: false,
		bounds: "ticks",
		clip: true,
		grace: 0,
		grid: {
			display: true,
			lineWidth: 1,
			drawOnChartArea: true,
			drawTicks: true,
			tickLength: 8,
			tickWidth: (_ctx, options) => options.lineWidth,
			tickColor: (_ctx, options) => options.color,
			offset: false
		},
		border: {
			display: true,
			dash: [],
			dashOffset: 0,
			width: 1
		},
		title: {
			display: false,
			text: "",
			padding: {
				top: 4,
				bottom: 4
			}
		},
		ticks: {
			minRotation: 0,
			maxRotation: 50,
			mirror: false,
			textStrokeWidth: 0,
			textStrokeColor: "",
			padding: 3,
			display: true,
			autoSkip: true,
			autoSkipPadding: 3,
			labelOffset: 0,
			callback: Ticks.formatters.values,
			minor: {},
			major: {},
			align: "center",
			crossAlign: "near",
			showLabelBackdrop: false,
			backdropColor: "rgba(255, 255, 255, 0.75)",
			backdropPadding: 2
		}
	});
	defaults.route("scale.ticks", "color", "", "color");
	defaults.route("scale.grid", "color", "", "borderColor");
	defaults.route("scale.border", "color", "", "borderColor");
	defaults.route("scale.title", "color", "", "color");
	defaults.describe("scale", {
		_fallback: false,
		_scriptable: (name) => !name.startsWith("before") && !name.startsWith("after") && name !== "callback" && name !== "parser",
		_indexable: (name) => name !== "borderDash" && name !== "tickBorderDash" && name !== "dash"
	});
	defaults.describe("scales", { _fallback: "scale" });
	defaults.describe("scale.ticks", {
		_scriptable: (name) => name !== "backdropPadding" && name !== "callback",
		_indexable: (name) => name !== "backdropPadding"
	});
}
var overrides = Object.create(null);
var descriptors = Object.create(null);
function getScope$1(node, key) {
	if (!key) return node;
	const keys = key.split(".");
	for (let i = 0, n = keys.length; i < n; ++i) {
		const k = keys[i];
		node = node[k] || (node[k] = Object.create(null));
	}
	return node;
}
function set(root, scope, values) {
	if (typeof scope === "string") return merge(getScope$1(root, scope), values);
	return merge(getScope$1(root, ""), scope);
}
var Defaults = class {
	constructor(_descriptors, _appliers) {
		this.animation = void 0;
		this.backgroundColor = "rgba(0,0,0,0.1)";
		this.borderColor = "rgba(0,0,0,0.1)";
		this.color = "#666";
		this.datasets = {};
		this.devicePixelRatio = (context) => context.chart.platform.getDevicePixelRatio();
		this.elements = {};
		this.events = [
			"mousemove",
			"mouseout",
			"click",
			"touchstart",
			"touchmove"
		];
		this.font = {
			family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
			size: 12,
			style: "normal",
			lineHeight: 1.2,
			weight: null
		};
		this.hover = {};
		this.hoverBackgroundColor = (ctx, options) => getHoverColor(options.backgroundColor);
		this.hoverBorderColor = (ctx, options) => getHoverColor(options.borderColor);
		this.hoverColor = (ctx, options) => getHoverColor(options.color);
		this.indexAxis = "x";
		this.interaction = {
			mode: "nearest",
			intersect: true,
			includeInvisible: false
		};
		this.maintainAspectRatio = true;
		this.onHover = null;
		this.onClick = null;
		this.parsing = true;
		this.plugins = {};
		this.responsive = true;
		this.scale = void 0;
		this.scales = {};
		this.showLine = true;
		this.drawActiveElementsOnTop = true;
		this.describe(_descriptors);
		this.apply(_appliers);
	}
	set(scope, values) {
		return set(this, scope, values);
	}
	get(scope) {
		return getScope$1(this, scope);
	}
	describe(scope, values) {
		return set(descriptors, scope, values);
	}
	override(scope, values) {
		return set(overrides, scope, values);
	}
	route(scope, name, targetScope, targetName) {
		const scopeObject = getScope$1(this, scope);
		const targetScopeObject = getScope$1(this, targetScope);
		const privateName = "_" + name;
		Object.defineProperties(scopeObject, {
			[privateName]: {
				value: scopeObject[name],
				writable: true
			},
			[name]: {
				enumerable: true,
				get() {
					const local = this[privateName];
					const target = targetScopeObject[targetName];
					if (isObject(local)) return Object.assign({}, target, local);
					return valueOrDefault(local, target);
				},
				set(value) {
					this[privateName] = value;
				}
			}
		});
	}
	apply(appliers) {
		appliers.forEach((apply) => apply(this));
	}
};
var defaults = /* #__PURE__ */ new Defaults({
	_scriptable: (name) => !name.startsWith("on"),
	_indexable: (name) => name !== "events",
	hover: { _fallback: "interaction" },
	interaction: {
		_scriptable: false,
		_indexable: false
	}
}, [
	applyAnimationsDefaults,
	applyLayoutsDefaults,
	applyScaleDefaults
]);
/**
* Converts the given font object into a CSS font string.
* @param font - A font object.
* @return The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
* @private
*/ function toFontString(font) {
	if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) return null;
	return (font.style ? font.style + " " : "") + (font.weight ? font.weight + " " : "") + font.size + "px " + font.family;
}
/**
* @private
*/ function _measureText(ctx, data, gc, longest, string) {
	let textWidth = data[string];
	if (!textWidth) {
		textWidth = data[string] = ctx.measureText(string).width;
		gc.push(string);
	}
	if (textWidth > longest) longest = textWidth;
	return longest;
}
/**
* @private
*/ function _longestText(ctx, font, arrayOfThings, cache) {
	cache = cache || {};
	let data = cache.data = cache.data || {};
	let gc = cache.garbageCollect = cache.garbageCollect || [];
	if (cache.font !== font) {
		data = cache.data = {};
		gc = cache.garbageCollect = [];
		cache.font = font;
	}
	ctx.save();
	ctx.font = font;
	let longest = 0;
	const ilen = arrayOfThings.length;
	let i, j, jlen, thing, nestedThing;
	for (i = 0; i < ilen; i++) {
		thing = arrayOfThings[i];
		if (thing !== void 0 && thing !== null && !isArray(thing)) longest = _measureText(ctx, data, gc, longest, thing);
		else if (isArray(thing)) for (j = 0, jlen = thing.length; j < jlen; j++) {
			nestedThing = thing[j];
			if (nestedThing !== void 0 && nestedThing !== null && !isArray(nestedThing)) longest = _measureText(ctx, data, gc, longest, nestedThing);
		}
	}
	ctx.restore();
	const gcLen = gc.length / 2;
	if (gcLen > arrayOfThings.length) {
		for (i = 0; i < gcLen; i++) delete data[gc[i]];
		gc.splice(0, gcLen);
	}
	return longest;
}
/**
* Returns the aligned pixel value to avoid anti-aliasing blur
* @param chart - The chart instance.
* @param pixel - A pixel value.
* @param width - The width of the element.
* @returns The aligned pixel value.
* @private
*/ function _alignPixel(chart, pixel, width) {
	const devicePixelRatio = chart.currentDevicePixelRatio;
	const halfWidth = width !== 0 ? Math.max(width / 2, .5) : 0;
	return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}
/**
* Clears the entire canvas.
*/ function clearCanvas(canvas, ctx) {
	if (!ctx && !canvas) return;
	ctx = ctx || canvas.getContext("2d");
	ctx.save();
	ctx.resetTransform();
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.restore();
}
function drawPoint(ctx, options, x, y) {
	drawPointLegend(ctx, options, x, y, null);
}
function drawPointLegend(ctx, options, x, y, w) {
	let type, xOffset, yOffset, size, cornerRadius, width, xOffsetW, yOffsetW;
	const style = options.pointStyle;
	const rotation = options.rotation;
	const radius = options.radius;
	let rad = (rotation || 0) * RAD_PER_DEG;
	if (style && typeof style === "object") {
		type = style.toString();
		if (type === "[object HTMLImageElement]" || type === "[object HTMLCanvasElement]") {
			ctx.save();
			ctx.translate(x, y);
			ctx.rotate(rad);
			ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
			ctx.restore();
			return;
		}
	}
	if (isNaN(radius) || radius <= 0) return;
	ctx.beginPath();
	switch (style) {
		default:
			if (w) ctx.ellipse(x, y, w / 2, radius, 0, 0, TAU);
			else ctx.arc(x, y, radius, 0, TAU);
			ctx.closePath();
			break;
		case "triangle":
			width = w ? w / 2 : radius;
			ctx.moveTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
			rad += TWO_THIRDS_PI;
			ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
			rad += TWO_THIRDS_PI;
			ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
			ctx.closePath();
			break;
		case "rectRounded":
			cornerRadius = radius * .516;
			size = radius - cornerRadius;
			xOffset = Math.cos(rad + QUARTER_PI) * size;
			xOffsetW = Math.cos(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
			yOffset = Math.sin(rad + QUARTER_PI) * size;
			yOffsetW = Math.sin(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
			ctx.arc(x - xOffsetW, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
			ctx.arc(x + yOffsetW, y - xOffset, cornerRadius, rad - HALF_PI, rad);
			ctx.arc(x + xOffsetW, y + yOffset, cornerRadius, rad, rad + HALF_PI);
			ctx.arc(x - yOffsetW, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
			ctx.closePath();
			break;
		case "rect":
			if (!rotation) {
				size = Math.SQRT1_2 * radius;
				width = w ? w / 2 : size;
				ctx.rect(x - width, y - size, 2 * width, 2 * size);
				break;
			}
			rad += QUARTER_PI;
		case "rectRot":
			xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
			ctx.moveTo(x - xOffsetW, y - yOffset);
			ctx.lineTo(x + yOffsetW, y - xOffset);
			ctx.lineTo(x + xOffsetW, y + yOffset);
			ctx.lineTo(x - yOffsetW, y + xOffset);
			ctx.closePath();
			break;
		case "crossRot": rad += QUARTER_PI;
		case "cross":
			xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
			ctx.moveTo(x - xOffsetW, y - yOffset);
			ctx.lineTo(x + xOffsetW, y + yOffset);
			ctx.moveTo(x + yOffsetW, y - xOffset);
			ctx.lineTo(x - yOffsetW, y + xOffset);
			break;
		case "star":
			xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
			ctx.moveTo(x - xOffsetW, y - yOffset);
			ctx.lineTo(x + xOffsetW, y + yOffset);
			ctx.moveTo(x + yOffsetW, y - xOffset);
			ctx.lineTo(x - yOffsetW, y + xOffset);
			rad += QUARTER_PI;
			xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
			ctx.moveTo(x - xOffsetW, y - yOffset);
			ctx.lineTo(x + xOffsetW, y + yOffset);
			ctx.moveTo(x + yOffsetW, y - xOffset);
			ctx.lineTo(x - yOffsetW, y + xOffset);
			break;
		case "line":
			xOffset = w ? w / 2 : Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			break;
		case "dash":
			ctx.moveTo(x, y);
			ctx.lineTo(x + Math.cos(rad) * (w ? w / 2 : radius), y + Math.sin(rad) * radius);
			break;
		case false:
			ctx.closePath();
			break;
	}
	ctx.fill();
	if (options.borderWidth > 0) ctx.stroke();
}
/**
* Returns true if the point is inside the rectangle
* @param point - The point to test
* @param area - The rectangle
* @param margin - allowed margin
* @private
*/ function _isPointInArea(point, area, margin) {
	margin = margin || .5;
	return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
}
function clipArea(ctx, area) {
	ctx.save();
	ctx.beginPath();
	ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
	ctx.clip();
}
function unclipArea(ctx) {
	ctx.restore();
}
/**
* @private
*/ function _steppedLineTo(ctx, previous, target, flip, mode) {
	if (!previous) return ctx.lineTo(target.x, target.y);
	if (mode === "middle") {
		const midpoint = (previous.x + target.x) / 2;
		ctx.lineTo(midpoint, previous.y);
		ctx.lineTo(midpoint, target.y);
	} else if (mode === "after" !== !!flip) ctx.lineTo(previous.x, target.y);
	else ctx.lineTo(target.x, previous.y);
	ctx.lineTo(target.x, target.y);
}
/**
* @private
*/ function _bezierCurveTo(ctx, previous, target, flip) {
	if (!previous) return ctx.lineTo(target.x, target.y);
	ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
}
function setRenderOpts(ctx, opts) {
	if (opts.translation) ctx.translate(opts.translation[0], opts.translation[1]);
	if (!isNullOrUndef(opts.rotation)) ctx.rotate(opts.rotation);
	if (opts.color) ctx.fillStyle = opts.color;
	if (opts.textAlign) ctx.textAlign = opts.textAlign;
	if (opts.textBaseline) ctx.textBaseline = opts.textBaseline;
}
function decorateText(ctx, x, y, line, opts) {
	if (opts.strikethrough || opts.underline) {
		/**
		* Now that IE11 support has been dropped, we can use more
		* of the TextMetrics object. The actual bounding boxes
		* are unflagged in Chrome, Firefox, Edge, and Safari so they
		* can be safely used.
		* See https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics#Browser_compatibility
		*/ const metrics = ctx.measureText(line);
		const left = x - metrics.actualBoundingBoxLeft;
		const right = x + metrics.actualBoundingBoxRight;
		const top = y - metrics.actualBoundingBoxAscent;
		const bottom = y + metrics.actualBoundingBoxDescent;
		const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
		ctx.strokeStyle = ctx.fillStyle;
		ctx.beginPath();
		ctx.lineWidth = opts.decorationWidth || 2;
		ctx.moveTo(left, yDecoration);
		ctx.lineTo(right, yDecoration);
		ctx.stroke();
	}
}
function drawBackdrop(ctx, opts) {
	const oldColor = ctx.fillStyle;
	ctx.fillStyle = opts.color;
	ctx.fillRect(opts.left, opts.top, opts.width, opts.height);
	ctx.fillStyle = oldColor;
}
/**
* Render text onto the canvas
*/ function renderText(ctx, text, x, y, font, opts = {}) {
	const lines = isArray(text) ? text : [text];
	const stroke = opts.strokeWidth > 0 && opts.strokeColor !== "";
	let i, line;
	ctx.save();
	ctx.font = font.string;
	setRenderOpts(ctx, opts);
	for (i = 0; i < lines.length; ++i) {
		line = lines[i];
		if (opts.backdrop) drawBackdrop(ctx, opts.backdrop);
		if (stroke) {
			if (opts.strokeColor) ctx.strokeStyle = opts.strokeColor;
			if (!isNullOrUndef(opts.strokeWidth)) ctx.lineWidth = opts.strokeWidth;
			ctx.strokeText(line, x, y, opts.maxWidth);
		}
		ctx.fillText(line, x, y, opts.maxWidth);
		decorateText(ctx, x, y, line, opts);
		y += Number(font.lineHeight);
	}
	ctx.restore();
}
/**
* Add a path of a rectangle with rounded corners to the current sub-path
* @param ctx - Context
* @param rect - Bounding rect
*/ function addRoundedRectPath(ctx, rect) {
	const { x, y, w, h, radius } = rect;
	ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, 1.5 * PI, PI, true);
	ctx.lineTo(x, y + h - radius.bottomLeft);
	ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
	ctx.lineTo(x + w - radius.bottomRight, y + h);
	ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
	ctx.lineTo(x + w, y + radius.topRight);
	ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
	ctx.lineTo(x + radius.topLeft, y);
}
var LINE_HEIGHT = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
var FONT_STYLE = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
/**
* @alias Chart.helpers.options
* @namespace
*/ /**
* Converts the given line height `value` in pixels for a specific font `size`.
* @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
* @param size - The font size (in pixels) used to resolve relative `value`.
* @returns The effective line height in pixels (size * 1.2 if value is invalid).
* @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
* @since 2.7.0
*/ function toLineHeight(value, size) {
	const matches = ("" + value).match(LINE_HEIGHT);
	if (!matches || matches[1] === "normal") return size * 1.2;
	value = +matches[2];
	switch (matches[3]) {
		case "px": return value;
		case "%":
			value /= 100;
			break;
	}
	return size * value;
}
var numberOrZero = (v) => +v || 0;
function _readValueToProps(value, props) {
	const ret = {};
	const objProps = isObject(props);
	const keys = objProps ? Object.keys(props) : props;
	const read = isObject(value) ? objProps ? (prop) => valueOrDefault(value[prop], value[props[prop]]) : (prop) => value[prop] : () => value;
	for (const prop of keys) ret[prop] = numberOrZero(read(prop));
	return ret;
}
/**
* Converts the given value into a TRBL object.
* @param value - If a number, set the value to all TRBL component,
*  else, if an object, use defined properties and sets undefined ones to 0.
*  x / y are shorthands for same value for left/right and top/bottom.
* @returns The padding values (top, right, bottom, left)
* @since 3.0.0
*/ function toTRBL(value) {
	return _readValueToProps(value, {
		top: "y",
		right: "x",
		bottom: "y",
		left: "x"
	});
}
/**
* Converts the given value into a TRBL corners object (similar with css border-radius).
* @param value - If a number, set the value to all TRBL corner components,
*  else, if an object, use defined properties and sets undefined ones to 0.
* @returns The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
* @since 3.0.0
*/ function toTRBLCorners(value) {
	return _readValueToProps(value, [
		"topLeft",
		"topRight",
		"bottomLeft",
		"bottomRight"
	]);
}
/**
* Converts the given value into a padding object with pre-computed width/height.
* @param value - If a number, set the value to all TRBL component,
*  else, if an object, use defined properties and sets undefined ones to 0.
*  x / y are shorthands for same value for left/right and top/bottom.
* @returns The padding values (top, right, bottom, left, width, height)
* @since 2.7.0
*/ function toPadding(value) {
	const obj = toTRBL(value);
	obj.width = obj.left + obj.right;
	obj.height = obj.top + obj.bottom;
	return obj;
}
/**
* Parses font options and returns the font object.
* @param options - A object that contains font options to be parsed.
* @param fallback - A object that contains fallback font options.
* @return The font object.
* @private
*/ function toFont(options, fallback) {
	options = options || {};
	fallback = fallback || defaults.font;
	let size = valueOrDefault(options.size, fallback.size);
	if (typeof size === "string") size = parseInt(size, 10);
	let style = valueOrDefault(options.style, fallback.style);
	if (style && !("" + style).match(FONT_STYLE)) {
		console.warn("Invalid font style specified: \"" + style + "\"");
		style = void 0;
	}
	const font = {
		family: valueOrDefault(options.family, fallback.family),
		lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
		size,
		style,
		weight: valueOrDefault(options.weight, fallback.weight),
		string: ""
	};
	font.string = toFontString(font);
	return font;
}
/**
* Evaluates the given `inputs` sequentially and returns the first defined value.
* @param inputs - An array of values, falling back to the last value.
* @param context - If defined and the current value is a function, the value
* is called with `context` as first argument and the result becomes the new input.
* @param index - If defined and the current value is an array, the value
* at `index` become the new input.
* @param info - object to return information about resolution in
* @param info.cacheable - Will be set to `false` if option is not cacheable.
* @since 2.7.0
*/ function resolve(inputs, context, index, info) {
	let cacheable = true;
	let i, ilen, value;
	for (i = 0, ilen = inputs.length; i < ilen; ++i) {
		value = inputs[i];
		if (value === void 0) continue;
		if (context !== void 0 && typeof value === "function") {
			value = value(context);
			cacheable = false;
		}
		if (index !== void 0 && isArray(value)) {
			value = value[index % value.length];
			cacheable = false;
		}
		if (value !== void 0) {
			if (info && !cacheable) info.cacheable = false;
			return value;
		}
	}
}
/**
* @param minmax
* @param grace
* @param beginAtZero
* @private
*/ function _addGrace(minmax, grace, beginAtZero) {
	const { min, max } = minmax;
	const change = toDimension(grace, (max - min) / 2);
	const keepZero = (value, add) => beginAtZero && value === 0 ? 0 : value + add;
	return {
		min: keepZero(min, -Math.abs(change)),
		max: keepZero(max, change)
	};
}
function createContext(parentContext, context) {
	return Object.assign(Object.create(parentContext), context);
}
/**
* Creates a Proxy for resolving raw values for options.
* @param scopes - The option scopes to look for values, in resolution order
* @param prefixes - The prefixes for values, in resolution order.
* @param rootScopes - The root option scopes
* @param fallback - Parent scopes fallback
* @param getTarget - callback for getting the target for changed values
* @returns Proxy
* @private
*/ function _createResolver(scopes, prefixes = [""], rootScopes, fallback, getTarget = () => scopes[0]) {
	const finalRootScopes = rootScopes || scopes;
	if (typeof fallback === "undefined") fallback = _resolve("_fallback", scopes);
	return new Proxy({
		[Symbol.toStringTag]: "Object",
		_cacheable: true,
		_scopes: scopes,
		_rootScopes: finalRootScopes,
		_fallback: fallback,
		_getTarget: getTarget,
		override: (scope) => _createResolver([scope, ...scopes], prefixes, finalRootScopes, fallback)
	}, {
		/**
		* A trap for the delete operator.
		*/ deleteProperty(target, prop) {
			delete target[prop];
			delete target._keys;
			delete scopes[0][prop];
			return true;
		},
		/**
		* A trap for getting property values.
		*/ get(target, prop) {
			return _cached(target, prop, () => _resolveWithPrefixes(prop, prefixes, scopes, target));
		},
		/**
		* A trap for Object.getOwnPropertyDescriptor.
		* Also used by Object.hasOwnProperty.
		*/ getOwnPropertyDescriptor(target, prop) {
			return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
		},
		/**
		* A trap for Object.getPrototypeOf.
		*/ getPrototypeOf() {
			return Reflect.getPrototypeOf(scopes[0]);
		},
		/**
		* A trap for the in operator.
		*/ has(target, prop) {
			return getKeysFromAllScopes(target).includes(prop);
		},
		/**
		* A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
		*/ ownKeys(target) {
			return getKeysFromAllScopes(target);
		},
		/**
		* A trap for setting property values.
		*/ set(target, prop, value) {
			const storage = target._storage || (target._storage = getTarget());
			target[prop] = storage[prop] = value;
			delete target._keys;
			return true;
		}
	});
}
/**
* Returns an Proxy for resolving option values with context.
* @param proxy - The Proxy returned by `_createResolver`
* @param context - Context object for scriptable/indexable options
* @param subProxy - The proxy provided for scriptable options
* @param descriptorDefaults - Defaults for descriptors
* @private
*/ function _attachContext(proxy, context, subProxy, descriptorDefaults) {
	const cache = {
		_cacheable: false,
		_proxy: proxy,
		_context: context,
		_subProxy: subProxy,
		_stack: /* @__PURE__ */ new Set(),
		_descriptors: _descriptors(proxy, descriptorDefaults),
		setContext: (ctx) => _attachContext(proxy, ctx, subProxy, descriptorDefaults),
		override: (scope) => _attachContext(proxy.override(scope), context, subProxy, descriptorDefaults)
	};
	return new Proxy(cache, {
		/**
		* A trap for the delete operator.
		*/ deleteProperty(target, prop) {
			delete target[prop];
			delete proxy[prop];
			return true;
		},
		/**
		* A trap for getting property values.
		*/ get(target, prop, receiver) {
			return _cached(target, prop, () => _resolveWithContext(target, prop, receiver));
		},
		/**
		* A trap for Object.getOwnPropertyDescriptor.
		* Also used by Object.hasOwnProperty.
		*/ getOwnPropertyDescriptor(target, prop) {
			return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
				enumerable: true,
				configurable: true
			} : void 0 : Reflect.getOwnPropertyDescriptor(proxy, prop);
		},
		/**
		* A trap for Object.getPrototypeOf.
		*/ getPrototypeOf() {
			return Reflect.getPrototypeOf(proxy);
		},
		/**
		* A trap for the in operator.
		*/ has(target, prop) {
			return Reflect.has(proxy, prop);
		},
		/**
		* A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
		*/ ownKeys() {
			return Reflect.ownKeys(proxy);
		},
		/**
		* A trap for setting property values.
		*/ set(target, prop, value) {
			proxy[prop] = value;
			delete target[prop];
			return true;
		}
	});
}
/**
* @private
*/ function _descriptors(proxy, defaults = {
	scriptable: true,
	indexable: true
}) {
	const { _scriptable = defaults.scriptable, _indexable = defaults.indexable, _allKeys = defaults.allKeys } = proxy;
	return {
		allKeys: _allKeys,
		scriptable: _scriptable,
		indexable: _indexable,
		isScriptable: isFunction(_scriptable) ? _scriptable : () => _scriptable,
		isIndexable: isFunction(_indexable) ? _indexable : () => _indexable
	};
}
var readKey = (prefix, name) => prefix ? prefix + _capitalize(name) : name;
var needsSubResolver = (prop, value) => isObject(value) && prop !== "adapters" && (Object.getPrototypeOf(value) === null || value.constructor === Object);
function _cached(target, prop, resolve) {
	if (Object.prototype.hasOwnProperty.call(target, prop) || prop === "constructor") return target[prop];
	const value = resolve();
	target[prop] = value;
	return value;
}
function _resolveWithContext(target, prop, receiver) {
	const { _proxy, _context, _subProxy, _descriptors: descriptors } = target;
	let value = _proxy[prop];
	if (isFunction(value) && descriptors.isScriptable(prop)) value = _resolveScriptable(prop, value, target, receiver);
	if (isArray(value) && value.length) value = _resolveArray(prop, value, target, descriptors.isIndexable);
	if (needsSubResolver(prop, value)) value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors);
	return value;
}
function _resolveScriptable(prop, getValue, target, receiver) {
	const { _proxy, _context, _subProxy, _stack } = target;
	if (_stack.has(prop)) throw new Error("Recursion detected: " + Array.from(_stack).join("->") + "->" + prop);
	_stack.add(prop);
	let value = getValue(_context, _subProxy || receiver);
	_stack.delete(prop);
	if (needsSubResolver(prop, value)) value = createSubResolver(_proxy._scopes, _proxy, prop, value);
	return value;
}
function _resolveArray(prop, value, target, isIndexable) {
	const { _proxy, _context, _subProxy, _descriptors: descriptors } = target;
	if (typeof _context.index !== "undefined" && isIndexable(prop)) return value[_context.index % value.length];
	else if (isObject(value[0])) {
		const arr = value;
		const scopes = _proxy._scopes.filter((s) => s !== arr);
		value = [];
		for (const item of arr) {
			const resolver = createSubResolver(scopes, _proxy, prop, item);
			value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors));
		}
	}
	return value;
}
function resolveFallback(fallback, prop, value) {
	return isFunction(fallback) ? fallback(prop, value) : fallback;
}
var getScope = (key, parent) => key === true ? parent : typeof key === "string" ? resolveObjectKey(parent, key) : void 0;
function addScopes(set, parentScopes, key, parentFallback, value) {
	for (const parent of parentScopes) {
		const scope = getScope(key, parent);
		if (scope) {
			set.add(scope);
			const fallback = resolveFallback(scope._fallback, key, value);
			if (typeof fallback !== "undefined" && fallback !== key && fallback !== parentFallback) return fallback;
		} else if (scope === false && typeof parentFallback !== "undefined" && key !== parentFallback) return null;
	}
	return false;
}
function createSubResolver(parentScopes, resolver, prop, value) {
	const rootScopes = resolver._rootScopes;
	const fallback = resolveFallback(resolver._fallback, prop, value);
	const allScopes = [...parentScopes, ...rootScopes];
	const set = /* @__PURE__ */ new Set();
	set.add(value);
	let key = addScopesFromKey(set, allScopes, prop, fallback || prop, value);
	if (key === null) return false;
	if (typeof fallback !== "undefined" && fallback !== prop) {
		key = addScopesFromKey(set, allScopes, fallback, key, value);
		if (key === null) return false;
	}
	return _createResolver(Array.from(set), [""], rootScopes, fallback, () => subGetTarget(resolver, prop, value));
}
function addScopesFromKey(set, allScopes, key, fallback, item) {
	while (key) key = addScopes(set, allScopes, key, fallback, item);
	return key;
}
function subGetTarget(resolver, prop, value) {
	const parent = resolver._getTarget();
	if (!(prop in parent)) parent[prop] = {};
	const target = parent[prop];
	if (isArray(target) && isObject(value)) return value;
	return target || {};
}
function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
	let value;
	for (const prefix of prefixes) {
		value = _resolve(readKey(prefix, prop), scopes);
		if (typeof value !== "undefined") return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
	}
}
function _resolve(key, scopes) {
	for (const scope of scopes) {
		if (!scope) continue;
		const value = scope[key];
		if (typeof value !== "undefined") return value;
	}
}
function getKeysFromAllScopes(target) {
	let keys = target._keys;
	if (!keys) keys = target._keys = resolveKeysFromAllScopes(target._scopes);
	return keys;
}
function resolveKeysFromAllScopes(scopes) {
	const set = /* @__PURE__ */ new Set();
	for (const scope of scopes) for (const key of Object.keys(scope).filter((k) => !k.startsWith("_"))) set.add(key);
	return Array.from(set);
}
var EPSILON = Number.EPSILON || 1e-14;
var getPoint = (points, i) => i < points.length && !points[i].skip && points[i];
var getValueAxis = (indexAxis) => indexAxis === "x" ? "y" : "x";
function splineCurve(firstPoint, middlePoint, afterPoint, t) {
	const previous = firstPoint.skip ? middlePoint : firstPoint;
	const current = middlePoint;
	const next = afterPoint.skip ? middlePoint : afterPoint;
	const d01 = distanceBetweenPoints(current, previous);
	const d12 = distanceBetweenPoints(next, current);
	let s01 = d01 / (d01 + d12);
	let s12 = d12 / (d01 + d12);
	s01 = isNaN(s01) ? 0 : s01;
	s12 = isNaN(s12) ? 0 : s12;
	const fa = t * s01;
	const fb = t * s12;
	return {
		previous: {
			x: current.x - fa * (next.x - previous.x),
			y: current.y - fa * (next.y - previous.y)
		},
		next: {
			x: current.x + fb * (next.x - previous.x),
			y: current.y + fb * (next.y - previous.y)
		}
	};
}
/**
* Adjust tangents to ensure monotonic properties
*/ function monotoneAdjust(points, deltaK, mK) {
	const pointsLen = points.length;
	let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
	let pointAfter = getPoint(points, 0);
	for (let i = 0; i < pointsLen - 1; ++i) {
		pointCurrent = pointAfter;
		pointAfter = getPoint(points, i + 1);
		if (!pointCurrent || !pointAfter) continue;
		if (almostEquals(deltaK[i], 0, EPSILON)) {
			mK[i] = mK[i + 1] = 0;
			continue;
		}
		alphaK = mK[i] / deltaK[i];
		betaK = mK[i + 1] / deltaK[i];
		squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
		if (squaredMagnitude <= 9) continue;
		tauK = 3 / Math.sqrt(squaredMagnitude);
		mK[i] = alphaK * tauK * deltaK[i];
		mK[i + 1] = betaK * tauK * deltaK[i];
	}
}
function monotoneCompute(points, mK, indexAxis = "x") {
	const valueAxis = getValueAxis(indexAxis);
	const pointsLen = points.length;
	let delta, pointBefore, pointCurrent;
	let pointAfter = getPoint(points, 0);
	for (let i = 0; i < pointsLen; ++i) {
		pointBefore = pointCurrent;
		pointCurrent = pointAfter;
		pointAfter = getPoint(points, i + 1);
		if (!pointCurrent) continue;
		const iPixel = pointCurrent[indexAxis];
		const vPixel = pointCurrent[valueAxis];
		if (pointBefore) {
			delta = (iPixel - pointBefore[indexAxis]) / 3;
			pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
			pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
		}
		if (pointAfter) {
			delta = (pointAfter[indexAxis] - iPixel) / 3;
			pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
			pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
		}
	}
}
/**
* This function calculates Bézier control points in a similar way than |splineCurve|,
* but preserves monotonicity of the provided data and ensures no local extremums are added
* between the dataset discrete points due to the interpolation.
* See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
*/ function splineCurveMonotone(points, indexAxis = "x") {
	const valueAxis = getValueAxis(indexAxis);
	const pointsLen = points.length;
	const deltaK = Array(pointsLen).fill(0);
	const mK = Array(pointsLen);
	let i, pointBefore, pointCurrent;
	let pointAfter = getPoint(points, 0);
	for (i = 0; i < pointsLen; ++i) {
		pointBefore = pointCurrent;
		pointCurrent = pointAfter;
		pointAfter = getPoint(points, i + 1);
		if (!pointCurrent) continue;
		if (pointAfter) {
			const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
			deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
		}
		mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : sign(deltaK[i - 1]) !== sign(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
	}
	monotoneAdjust(points, deltaK, mK);
	monotoneCompute(points, mK, indexAxis);
}
function capControlPoint(pt, min, max) {
	return Math.max(Math.min(pt, max), min);
}
function capBezierPoints(points, area) {
	let i, ilen, point, inArea, inAreaPrev;
	let inAreaNext = _isPointInArea(points[0], area);
	for (i = 0, ilen = points.length; i < ilen; ++i) {
		inAreaPrev = inArea;
		inArea = inAreaNext;
		inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);
		if (!inArea) continue;
		point = points[i];
		if (inAreaPrev) {
			point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
			point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
		}
		if (inAreaNext) {
			point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
			point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
		}
	}
}
/**
* @private
*/ function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
	let i, ilen, point, controlPoints;
	if (options.spanGaps) points = points.filter((pt) => !pt.skip);
	if (options.cubicInterpolationMode === "monotone") splineCurveMonotone(points, indexAxis);
	else {
		let prev = loop ? points[points.length - 1] : points[0];
		for (i = 0, ilen = points.length; i < ilen; ++i) {
			point = points[i];
			controlPoints = splineCurve(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
			point.cp1x = controlPoints.previous.x;
			point.cp1y = controlPoints.previous.y;
			point.cp2x = controlPoints.next.x;
			point.cp2y = controlPoints.next.y;
			prev = point;
		}
	}
	if (options.capBezierPoints) capBezierPoints(points, area);
}
/**
* @private
*/ function _isDomSupported() {
	return typeof window !== "undefined" && typeof document !== "undefined";
}
/**
* @private
*/ function _getParentNode(domNode) {
	let parent = domNode.parentNode;
	if (parent && parent.toString() === "[object ShadowRoot]") parent = parent.host;
	return parent;
}
/**
* convert max-width/max-height values that may be percentages into a number
* @private
*/ function parseMaxStyle(styleValue, node, parentProperty) {
	let valueInPixels;
	if (typeof styleValue === "string") {
		valueInPixels = parseInt(styleValue, 10);
		if (styleValue.indexOf("%") !== -1) valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
	} else valueInPixels = styleValue;
	return valueInPixels;
}
var getComputedStyle = (element) => element.ownerDocument.defaultView.getComputedStyle(element, null);
function getStyle(el, property) {
	return getComputedStyle(el).getPropertyValue(property);
}
var positions = [
	"top",
	"right",
	"bottom",
	"left"
];
function getPositionedStyle(styles, style, suffix) {
	const result = {};
	suffix = suffix ? "-" + suffix : "";
	for (let i = 0; i < 4; i++) {
		const pos = positions[i];
		result[pos] = parseFloat(styles[style + "-" + pos + suffix]) || 0;
	}
	result.width = result.left + result.right;
	result.height = result.top + result.bottom;
	return result;
}
var useOffsetPos = (x, y, target) => (x > 0 || y > 0) && (!target || !target.shadowRoot);
/**
* @param e
* @param canvas
* @returns Canvas position
*/ function getCanvasPosition(e, canvas) {
	const touches = e.touches;
	const source = touches && touches.length ? touches[0] : e;
	const { offsetX, offsetY } = source;
	let box = false;
	let x, y;
	if (useOffsetPos(offsetX, offsetY, e.target)) {
		x = offsetX;
		y = offsetY;
	} else {
		const rect = canvas.getBoundingClientRect();
		x = source.clientX - rect.left;
		y = source.clientY - rect.top;
		box = true;
	}
	return {
		x,
		y,
		box
	};
}
/**
* Gets an event's x, y coordinates, relative to the chart area
* @param event
* @param chart
* @returns x and y coordinates of the event
*/ function getRelativePosition(event, chart) {
	if ("native" in event) return event;
	const { canvas, currentDevicePixelRatio } = chart;
	const style = getComputedStyle(canvas);
	const borderBox = style.boxSizing === "border-box";
	const paddings = getPositionedStyle(style, "padding");
	const borders = getPositionedStyle(style, "border", "width");
	const { x, y, box } = getCanvasPosition(event, canvas);
	const xOffset = paddings.left + (box && borders.left);
	const yOffset = paddings.top + (box && borders.top);
	let { width, height } = chart;
	if (borderBox) {
		width -= paddings.width + borders.width;
		height -= paddings.height + borders.height;
	}
	return {
		x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
		y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
	};
}
function getContainerSize(canvas, width, height) {
	let maxWidth, maxHeight;
	if (width === void 0 || height === void 0) {
		const container = canvas && _getParentNode(canvas);
		if (!container) {
			width = canvas.clientWidth;
			height = canvas.clientHeight;
		} else {
			const rect = container.getBoundingClientRect();
			const containerStyle = getComputedStyle(container);
			const containerBorder = getPositionedStyle(containerStyle, "border", "width");
			const containerPadding = getPositionedStyle(containerStyle, "padding");
			width = rect.width - containerPadding.width - containerBorder.width;
			height = rect.height - containerPadding.height - containerBorder.height;
			maxWidth = parseMaxStyle(containerStyle.maxWidth, container, "clientWidth");
			maxHeight = parseMaxStyle(containerStyle.maxHeight, container, "clientHeight");
		}
	}
	return {
		width,
		height,
		maxWidth: maxWidth || INFINITY,
		maxHeight: maxHeight || INFINITY
	};
}
var round1 = (v) => Math.round(v * 10) / 10;
function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
	const style = getComputedStyle(canvas);
	const margins = getPositionedStyle(style, "margin");
	const maxWidth = parseMaxStyle(style.maxWidth, canvas, "clientWidth") || INFINITY;
	const maxHeight = parseMaxStyle(style.maxHeight, canvas, "clientHeight") || INFINITY;
	const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
	let { width, height } = containerSize;
	if (style.boxSizing === "content-box") {
		const borders = getPositionedStyle(style, "border", "width");
		const paddings = getPositionedStyle(style, "padding");
		width -= paddings.width + borders.width;
		height -= paddings.height + borders.height;
	}
	width = Math.max(0, width - margins.width);
	height = Math.max(0, aspectRatio ? width / aspectRatio : height - margins.height);
	width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
	height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
	if (width && !height) height = round1(width / 2);
	if ((bbWidth !== void 0 || bbHeight !== void 0) && aspectRatio && containerSize.height && height > containerSize.height) {
		height = containerSize.height;
		width = round1(Math.floor(height * aspectRatio));
	}
	return {
		width,
		height
	};
}
/**
* @param chart
* @param forceRatio
* @param forceStyle
* @returns True if the canvas context size or transformation has changed.
*/ function retinaScale(chart, forceRatio, forceStyle) {
	const pixelRatio = forceRatio || 1;
	const deviceHeight = round1(chart.height * pixelRatio);
	const deviceWidth = round1(chart.width * pixelRatio);
	chart.height = round1(chart.height);
	chart.width = round1(chart.width);
	const canvas = chart.canvas;
	if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
		canvas.style.height = `${chart.height}px`;
		canvas.style.width = `${chart.width}px`;
	}
	if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
		chart.currentDevicePixelRatio = pixelRatio;
		canvas.height = deviceHeight;
		canvas.width = deviceWidth;
		chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
		return true;
	}
	return false;
}
/**
* Detects support for options object argument in addEventListener.
* https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
* @private
*/ var supportsEventListenerOptions = function() {
	let passiveSupported = false;
	try {
		const options = { get passive() {
			passiveSupported = true;
			return false;
		} };
		if (_isDomSupported()) {
			window.addEventListener("test", null, options);
			window.removeEventListener("test", null, options);
		}
	} catch (e) {}
	return passiveSupported;
}();
/**
* The "used" size is the final value of a dimension property after all calculations have
* been performed. This method uses the computed style of `element` but returns undefined
* if the computed style is not expressed in pixels. That can happen in some cases where
* `element` has a size relative to its parent and this last one is not yet displayed,
* for example because of `display: none` on a parent node.
* @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
* @returns Size in pixels or undefined if unknown.
*/ function readUsedSize(element, property) {
	const value = getStyle(element, property);
	const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
	return matches ? +matches[1] : void 0;
}
/**
* @private
*/ function _pointInLine(p1, p2, t, mode) {
	return {
		x: p1.x + t * (p2.x - p1.x),
		y: p1.y + t * (p2.y - p1.y)
	};
}
/**
* @private
*/ function _steppedInterpolation(p1, p2, t, mode) {
	return {
		x: p1.x + t * (p2.x - p1.x),
		y: mode === "middle" ? t < .5 ? p1.y : p2.y : mode === "after" ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
	};
}
/**
* @private
*/ function _bezierInterpolation(p1, p2, t, mode) {
	const cp1 = {
		x: p1.cp2x,
		y: p1.cp2y
	};
	const cp2 = {
		x: p2.cp1x,
		y: p2.cp1y
	};
	const a = _pointInLine(p1, cp1, t);
	const b = _pointInLine(cp1, cp2, t);
	const c = _pointInLine(cp2, p2, t);
	return _pointInLine(_pointInLine(a, b, t), _pointInLine(b, c, t), t);
}
var getRightToLeftAdapter = function(rectX, width) {
	return {
		x(x) {
			return rectX + rectX + width - x;
		},
		setWidth(w) {
			width = w;
		},
		textAlign(align) {
			if (align === "center") return align;
			return align === "right" ? "left" : "right";
		},
		xPlus(x, value) {
			return x - value;
		},
		leftForLtr(x, itemWidth) {
			return x - itemWidth;
		}
	};
};
var getLeftToRightAdapter = function() {
	return {
		x(x) {
			return x;
		},
		setWidth(w) {},
		textAlign(align) {
			return align;
		},
		xPlus(x, value) {
			return x + value;
		},
		leftForLtr(x, _itemWidth) {
			return x;
		}
	};
};
function getRtlAdapter(rtl, rectX, width) {
	return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
}
function overrideTextDirection(ctx, direction) {
	let style, original;
	if (direction === "ltr" || direction === "rtl") {
		style = ctx.canvas.style;
		original = [style.getPropertyValue("direction"), style.getPropertyPriority("direction")];
		style.setProperty("direction", direction, "important");
		ctx.prevTextDirection = original;
	}
}
function restoreTextDirection(ctx, original) {
	if (original !== void 0) {
		delete ctx.prevTextDirection;
		ctx.canvas.style.setProperty("direction", original[0], original[1]);
	}
}
function propertyFn(property) {
	if (property === "angle") return {
		between: _angleBetween,
		compare: _angleDiff,
		normalize: _normalizeAngle
	};
	return {
		between: _isBetween,
		compare: (a, b) => a - b,
		normalize: (x) => x
	};
}
function normalizeSegment({ start, end, count, loop, style }) {
	return {
		start: start % count,
		end: end % count,
		loop: loop && (end - start + 1) % count === 0,
		style
	};
}
function getSegment(segment, points, bounds) {
	const { property, start: startBound, end: endBound } = bounds;
	const { between, normalize } = propertyFn(property);
	const count = points.length;
	let { start, end, loop } = segment;
	let i, ilen;
	if (loop) {
		start += count;
		end += count;
		for (i = 0, ilen = count; i < ilen; ++i) {
			if (!between(normalize(points[start % count][property]), startBound, endBound)) break;
			start--;
			end--;
		}
		start %= count;
		end %= count;
	}
	if (end < start) end += count;
	return {
		start,
		end,
		loop,
		style: segment.style
	};
}
function _boundSegment(segment, points, bounds) {
	if (!bounds) return [segment];
	const { property, start: startBound, end: endBound } = bounds;
	const count = points.length;
	const { compare, between, normalize } = propertyFn(property);
	const { start, end, loop, style } = getSegment(segment, points, bounds);
	const result = [];
	let inside = false;
	let subStart = null;
	let value, point, prevValue;
	const startIsBefore = () => between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
	const endIsBefore = () => compare(endBound, value) === 0 || between(endBound, prevValue, value);
	const shouldStart = () => inside || startIsBefore();
	const shouldStop = () => !inside || endIsBefore();
	for (let i = start, prev = start; i <= end; ++i) {
		point = points[i % count];
		if (point.skip) continue;
		value = normalize(point[property]);
		if (value === prevValue) continue;
		inside = between(value, startBound, endBound);
		if (subStart === null && shouldStart()) subStart = compare(value, startBound) === 0 ? i : prev;
		if (subStart !== null && shouldStop()) {
			result.push(normalizeSegment({
				start: subStart,
				end: i,
				loop,
				count,
				style
			}));
			subStart = null;
		}
		prev = i;
		prevValue = value;
	}
	if (subStart !== null) result.push(normalizeSegment({
		start: subStart,
		end,
		loop,
		count,
		style
	}));
	return result;
}
function _boundSegments(line, bounds) {
	const result = [];
	const segments = line.segments;
	for (let i = 0; i < segments.length; i++) {
		const sub = _boundSegment(segments[i], line.points, bounds);
		if (sub.length) result.push(...sub);
	}
	return result;
}
function findStartAndEnd(points, count, loop, spanGaps) {
	let start = 0;
	let end = count - 1;
	if (loop && !spanGaps) while (start < count && !points[start].skip) start++;
	while (start < count && points[start].skip) start++;
	start %= count;
	if (loop) end += start;
	while (end > start && points[end % count].skip) end--;
	end %= count;
	return {
		start,
		end
	};
}
function solidSegments(points, start, max, loop) {
	const count = points.length;
	const result = [];
	let last = start;
	let prev = points[start];
	let end;
	for (end = start + 1; end <= max; ++end) {
		const cur = points[end % count];
		if (cur.skip || cur.stop) {
			if (!prev.skip) {
				loop = false;
				result.push({
					start: start % count,
					end: (end - 1) % count,
					loop
				});
				start = last = cur.stop ? end : null;
			}
		} else {
			last = end;
			if (prev.skip) start = end;
		}
		prev = cur;
	}
	if (last !== null) result.push({
		start: start % count,
		end: last % count,
		loop
	});
	return result;
}
function _computeSegments(line, segmentOptions) {
	const points = line.points;
	const spanGaps = line.options.spanGaps;
	const count = points.length;
	if (!count) return [];
	const loop = !!line._loop;
	const { start, end } = findStartAndEnd(points, count, loop, spanGaps);
	if (spanGaps === true) return splitByStyles(line, [{
		start,
		end,
		loop
	}], points, segmentOptions);
	return splitByStyles(line, solidSegments(points, start, end < start ? end + count : end, !!line._fullLoop && start === 0 && end === count - 1), points, segmentOptions);
}
function splitByStyles(line, segments, points, segmentOptions) {
	if (!segmentOptions || !segmentOptions.setContext || !points) return segments;
	return doSplitByStyles(line, segments, points, segmentOptions);
}
function doSplitByStyles(line, segments, points, segmentOptions) {
	const chartContext = line._chart.getContext();
	const baseStyle = readStyle(line.options);
	const { _datasetIndex: datasetIndex, options: { spanGaps } } = line;
	const count = points.length;
	const result = [];
	let prevStyle = baseStyle;
	let start = segments[0].start;
	let i = start;
	function addStyle(s, e, l, st) {
		const dir = spanGaps ? -1 : 1;
		if (s === e) return;
		s += count;
		while (points[s % count].skip) s -= dir;
		while (points[e % count].skip) e += dir;
		if (s % count !== e % count) {
			result.push({
				start: s % count,
				end: e % count,
				loop: l,
				style: st
			});
			prevStyle = st;
			start = e % count;
		}
	}
	for (const segment of segments) {
		start = spanGaps ? start : segment.start;
		let prev = points[start % count];
		let style;
		for (i = start + 1; i <= segment.end; i++) {
			const pt = points[i % count];
			style = readStyle(segmentOptions.setContext(createContext(chartContext, {
				type: "segment",
				p0: prev,
				p1: pt,
				p0DataIndex: (i - 1) % count,
				p1DataIndex: i % count,
				datasetIndex
			})));
			if (styleChanged(style, prevStyle)) addStyle(start, i - 1, segment.loop, prevStyle);
			prev = pt;
			prevStyle = style;
		}
		if (start < i - 1) addStyle(start, i - 1, segment.loop, prevStyle);
	}
	return result;
}
function readStyle(options) {
	return {
		backgroundColor: options.backgroundColor,
		borderCapStyle: options.borderCapStyle,
		borderDash: options.borderDash,
		borderDashOffset: options.borderDashOffset,
		borderJoinStyle: options.borderJoinStyle,
		borderWidth: options.borderWidth,
		borderColor: options.borderColor
	};
}
function styleChanged(style, prevStyle) {
	if (!prevStyle) return false;
	const cache = [];
	const replacer = function(key, value) {
		if (!isPatternOrGradient(value)) return value;
		if (!cache.includes(value)) cache.push(value);
		return cache.indexOf(value);
	};
	return JSON.stringify(style, replacer) !== JSON.stringify(prevStyle, replacer);
}
function getSizeForArea(scale, chartArea, field) {
	return scale.options.clip ? scale[field] : chartArea[field];
}
function getDatasetArea(meta, chartArea) {
	const { xScale, yScale } = meta;
	if (xScale && yScale) return {
		left: getSizeForArea(xScale, chartArea, "left"),
		right: getSizeForArea(xScale, chartArea, "right"),
		top: getSizeForArea(yScale, chartArea, "top"),
		bottom: getSizeForArea(yScale, chartArea, "bottom")
	};
	return chartArea;
}
function getDatasetClipArea(chart, meta) {
	const clip = meta._clip;
	if (clip.disabled) return false;
	const area = getDatasetArea(meta, chart.chartArea);
	return {
		left: clip.left === false ? 0 : area.left - (clip.left === true ? 0 : clip.left),
		right: clip.right === false ? chart.width : area.right + (clip.right === true ? 0 : clip.right),
		top: clip.top === false ? 0 : area.top - (clip.top === true ? 0 : clip.top),
		bottom: clip.bottom === false ? chart.height : area.bottom + (clip.bottom === true ? 0 : clip.bottom)
	};
}
//#endregion
//#region node_modules/chart.js/dist/chart.js
/*!
* Chart.js v4.5.1
* https://www.chartjs.org
* (c) 2025 Chart.js Contributors
* Released under the MIT License
*/
var Animator = class {
	constructor() {
		this._request = null;
		this._charts = /* @__PURE__ */ new Map();
		this._running = false;
		this._lastDate = void 0;
	}
	_notify(chart, anims, date, type) {
		const callbacks = anims.listeners[type];
		const numSteps = anims.duration;
		callbacks.forEach((fn) => fn({
			chart,
			initial: anims.initial,
			numSteps,
			currentStep: Math.min(date - anims.start, numSteps)
		}));
	}
	_refresh() {
		if (this._request) return;
		this._running = true;
		this._request = requestAnimFrame.call(window, () => {
			this._update();
			this._request = null;
			if (this._running) this._refresh();
		});
	}
	_update(date = Date.now()) {
		let remaining = 0;
		this._charts.forEach((anims, chart) => {
			if (!anims.running || !anims.items.length) return;
			const items = anims.items;
			let i = items.length - 1;
			let draw = false;
			let item;
			for (; i >= 0; --i) {
				item = items[i];
				if (item._active) {
					if (item._total > anims.duration) anims.duration = item._total;
					item.tick(date);
					draw = true;
				} else {
					items[i] = items[items.length - 1];
					items.pop();
				}
			}
			if (draw) {
				chart.draw();
				this._notify(chart, anims, date, "progress");
			}
			if (!items.length) {
				anims.running = false;
				this._notify(chart, anims, date, "complete");
				anims.initial = false;
			}
			remaining += items.length;
		});
		this._lastDate = date;
		if (remaining === 0) this._running = false;
	}
	_getAnims(chart) {
		const charts = this._charts;
		let anims = charts.get(chart);
		if (!anims) {
			anims = {
				running: false,
				initial: true,
				items: [],
				listeners: {
					complete: [],
					progress: []
				}
			};
			charts.set(chart, anims);
		}
		return anims;
	}
	listen(chart, event, cb) {
		this._getAnims(chart).listeners[event].push(cb);
	}
	add(chart, items) {
		if (!items || !items.length) return;
		this._getAnims(chart).items.push(...items);
	}
	has(chart) {
		return this._getAnims(chart).items.length > 0;
	}
	start(chart) {
		const anims = this._charts.get(chart);
		if (!anims) return;
		anims.running = true;
		anims.start = Date.now();
		anims.duration = anims.items.reduce((acc, cur) => Math.max(acc, cur._duration), 0);
		this._refresh();
	}
	running(chart) {
		if (!this._running) return false;
		const anims = this._charts.get(chart);
		if (!anims || !anims.running || !anims.items.length) return false;
		return true;
	}
	stop(chart) {
		const anims = this._charts.get(chart);
		if (!anims || !anims.items.length) return;
		const items = anims.items;
		let i = items.length - 1;
		for (; i >= 0; --i) items[i].cancel();
		anims.items = [];
		this._notify(chart, anims, Date.now(), "complete");
	}
	remove(chart) {
		return this._charts.delete(chart);
	}
};
var animator = /* #__PURE__ */ new Animator();
var transparent = "transparent";
var interpolators = {
	boolean(from, to, factor) {
		return factor > .5 ? to : from;
	},
	color(from, to, factor) {
		const c0 = color(from || transparent);
		const c1 = c0.valid && color(to || transparent);
		return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
	},
	number(from, to, factor) {
		return from + (to - from) * factor;
	}
};
var Animation = class {
	constructor(cfg, target, prop, to) {
		const currentValue = target[prop];
		to = resolve([
			cfg.to,
			to,
			currentValue,
			cfg.from
		]);
		const from = resolve([
			cfg.from,
			currentValue,
			to
		]);
		this._active = true;
		this._fn = cfg.fn || interpolators[cfg.type || typeof from];
		this._easing = effects[cfg.easing] || effects.linear;
		this._start = Math.floor(Date.now() + (cfg.delay || 0));
		this._duration = this._total = Math.floor(cfg.duration);
		this._loop = !!cfg.loop;
		this._target = target;
		this._prop = prop;
		this._from = from;
		this._to = to;
		this._promises = void 0;
	}
	active() {
		return this._active;
	}
	update(cfg, to, date) {
		if (this._active) {
			this._notify(false);
			const currentValue = this._target[this._prop];
			const elapsed = date - this._start;
			const remain = this._duration - elapsed;
			this._start = date;
			this._duration = Math.floor(Math.max(remain, cfg.duration));
			this._total += elapsed;
			this._loop = !!cfg.loop;
			this._to = resolve([
				cfg.to,
				to,
				currentValue,
				cfg.from
			]);
			this._from = resolve([
				cfg.from,
				currentValue,
				to
			]);
		}
	}
	cancel() {
		if (this._active) {
			this.tick(Date.now());
			this._active = false;
			this._notify(false);
		}
	}
	tick(date) {
		const elapsed = date - this._start;
		const duration = this._duration;
		const prop = this._prop;
		const from = this._from;
		const loop = this._loop;
		const to = this._to;
		let factor;
		this._active = from !== to && (loop || elapsed < duration);
		if (!this._active) {
			this._target[prop] = to;
			this._notify(true);
			return;
		}
		if (elapsed < 0) {
			this._target[prop] = from;
			return;
		}
		factor = elapsed / duration % 2;
		factor = loop && factor > 1 ? 2 - factor : factor;
		factor = this._easing(Math.min(1, Math.max(0, factor)));
		this._target[prop] = this._fn(from, to, factor);
	}
	wait() {
		const promises = this._promises || (this._promises = []);
		return new Promise((res, rej) => {
			promises.push({
				res,
				rej
			});
		});
	}
	_notify(resolved) {
		const method = resolved ? "res" : "rej";
		const promises = this._promises || [];
		for (let i = 0; i < promises.length; i++) promises[i][method]();
	}
};
var Animations = class {
	constructor(chart, config) {
		this._chart = chart;
		this._properties = /* @__PURE__ */ new Map();
		this.configure(config);
	}
	configure(config) {
		if (!isObject(config)) return;
		const animationOptions = Object.keys(defaults.animation);
		const animatedProps = this._properties;
		Object.getOwnPropertyNames(config).forEach((key) => {
			const cfg = config[key];
			if (!isObject(cfg)) return;
			const resolved = {};
			for (const option of animationOptions) resolved[option] = cfg[option];
			(isArray(cfg.properties) && cfg.properties || [key]).forEach((prop) => {
				if (prop === key || !animatedProps.has(prop)) animatedProps.set(prop, resolved);
			});
		});
	}
	_animateOptions(target, values) {
		const newOptions = values.options;
		const options = resolveTargetOptions(target, newOptions);
		if (!options) return [];
		const animations = this._createAnimations(options, newOptions);
		if (newOptions.$shared) awaitAll(target.options.$animations, newOptions).then(() => {
			target.options = newOptions;
		}, () => {});
		return animations;
	}
	_createAnimations(target, values) {
		const animatedProps = this._properties;
		const animations = [];
		const running = target.$animations || (target.$animations = {});
		const props = Object.keys(values);
		const date = Date.now();
		let i;
		for (i = props.length - 1; i >= 0; --i) {
			const prop = props[i];
			if (prop.charAt(0) === "$") continue;
			if (prop === "options") {
				animations.push(...this._animateOptions(target, values));
				continue;
			}
			const value = values[prop];
			let animation = running[prop];
			const cfg = animatedProps.get(prop);
			if (animation) if (cfg && animation.active()) {
				animation.update(cfg, value, date);
				continue;
			} else animation.cancel();
			if (!cfg || !cfg.duration) {
				target[prop] = value;
				continue;
			}
			running[prop] = animation = new Animation(cfg, target, prop, value);
			animations.push(animation);
		}
		return animations;
	}
	update(target, values) {
		if (this._properties.size === 0) {
			Object.assign(target, values);
			return;
		}
		const animations = this._createAnimations(target, values);
		if (animations.length) {
			animator.add(this._chart, animations);
			return true;
		}
	}
};
function awaitAll(animations, properties) {
	const running = [];
	const keys = Object.keys(properties);
	for (let i = 0; i < keys.length; i++) {
		const anim = animations[keys[i]];
		if (anim && anim.active()) running.push(anim.wait());
	}
	return Promise.all(running);
}
function resolveTargetOptions(target, newOptions) {
	if (!newOptions) return;
	let options = target.options;
	if (!options) {
		target.options = newOptions;
		return;
	}
	if (options.$shared) target.options = options = Object.assign({}, options, {
		$shared: false,
		$animations: {}
	});
	return options;
}
function scaleClip(scale, allowedOverflow) {
	const opts = scale && scale.options || {};
	const reverse = opts.reverse;
	const min = opts.min === void 0 ? allowedOverflow : 0;
	const max = opts.max === void 0 ? allowedOverflow : 0;
	return {
		start: reverse ? max : min,
		end: reverse ? min : max
	};
}
function defaultClip(xScale, yScale, allowedOverflow) {
	if (allowedOverflow === false) return false;
	const x = scaleClip(xScale, allowedOverflow);
	const y = scaleClip(yScale, allowedOverflow);
	return {
		top: y.end,
		right: x.end,
		bottom: y.start,
		left: x.start
	};
}
function toClip(value) {
	let t, r, b, l;
	if (isObject(value)) {
		t = value.top;
		r = value.right;
		b = value.bottom;
		l = value.left;
	} else t = r = b = l = value;
	return {
		top: t,
		right: r,
		bottom: b,
		left: l,
		disabled: value === false
	};
}
function getSortedDatasetIndices(chart, filterVisible) {
	const keys = [];
	const metasets = chart._getSortedDatasetMetas(filterVisible);
	let i, ilen;
	for (i = 0, ilen = metasets.length; i < ilen; ++i) keys.push(metasets[i].index);
	return keys;
}
function applyStack(stack, value, dsIndex, options = {}) {
	const keys = stack.keys;
	const singleMode = options.mode === "single";
	let i, ilen, datasetIndex, otherValue;
	if (value === null) return;
	let found = false;
	for (i = 0, ilen = keys.length; i < ilen; ++i) {
		datasetIndex = +keys[i];
		if (datasetIndex === dsIndex) {
			found = true;
			if (options.all) continue;
			break;
		}
		otherValue = stack.values[datasetIndex];
		if (isNumberFinite(otherValue) && (singleMode || value === 0 || sign(value) === sign(otherValue))) value += otherValue;
	}
	if (!found && !options.all) return 0;
	return value;
}
function convertObjectDataToArray(data, meta) {
	const { iScale, vScale } = meta;
	const iAxisKey = iScale.axis === "x" ? "x" : "y";
	const vAxisKey = vScale.axis === "x" ? "x" : "y";
	const keys = Object.keys(data);
	const adata = new Array(keys.length);
	let i, ilen, key;
	for (i = 0, ilen = keys.length; i < ilen; ++i) {
		key = keys[i];
		adata[i] = {
			[iAxisKey]: key,
			[vAxisKey]: data[key]
		};
	}
	return adata;
}
function isStacked(scale, meta) {
	const stacked = scale && scale.options.stacked;
	return stacked || stacked === void 0 && meta.stack !== void 0;
}
function getStackKey(indexScale, valueScale, meta) {
	return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
}
function getUserBounds(scale) {
	const { min, max, minDefined, maxDefined } = scale.getUserBounds();
	return {
		min: minDefined ? min : Number.NEGATIVE_INFINITY,
		max: maxDefined ? max : Number.POSITIVE_INFINITY
	};
}
function getOrCreateStack(stacks, stackKey, indexValue) {
	const subStack = stacks[stackKey] || (stacks[stackKey] = {});
	return subStack[indexValue] || (subStack[indexValue] = {});
}
function getLastIndexInStack(stack, vScale, positive, type) {
	for (const meta of vScale.getMatchingVisibleMetas(type).reverse()) {
		const value = stack[meta.index];
		if (positive && value > 0 || !positive && value < 0) return meta.index;
	}
	return null;
}
function updateStacks(controller, parsed) {
	const { chart, _cachedMeta: meta } = controller;
	const stacks = chart._stacks || (chart._stacks = {});
	const { iScale, vScale, index: datasetIndex } = meta;
	const iAxis = iScale.axis;
	const vAxis = vScale.axis;
	const key = getStackKey(iScale, vScale, meta);
	const ilen = parsed.length;
	let stack;
	for (let i = 0; i < ilen; ++i) {
		const item = parsed[i];
		const { [iAxis]: index, [vAxis]: value } = item;
		const itemStacks = item._stacks || (item._stacks = {});
		stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
		stack[datasetIndex] = value;
		stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
		stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
		const visualValues = stack._visualValues || (stack._visualValues = {});
		visualValues[datasetIndex] = value;
	}
}
function getFirstScaleId(chart, axis) {
	const scales = chart.scales;
	return Object.keys(scales).filter((key) => scales[key].axis === axis).shift();
}
function createDatasetContext(parent, index) {
	return createContext(parent, {
		active: false,
		dataset: void 0,
		datasetIndex: index,
		index,
		mode: "default",
		type: "dataset"
	});
}
function createDataContext(parent, index, element) {
	return createContext(parent, {
		active: false,
		dataIndex: index,
		parsed: void 0,
		raw: void 0,
		element,
		index,
		mode: "default",
		type: "data"
	});
}
function clearStacks(meta, items) {
	const datasetIndex = meta.controller.index;
	const axis = meta.vScale && meta.vScale.axis;
	if (!axis) return;
	items = items || meta._parsed;
	for (const parsed of items) {
		const stacks = parsed._stacks;
		if (!stacks || stacks[axis] === void 0 || stacks[axis][datasetIndex] === void 0) return;
		delete stacks[axis][datasetIndex];
		if (stacks[axis]._visualValues !== void 0 && stacks[axis]._visualValues[datasetIndex] !== void 0) delete stacks[axis]._visualValues[datasetIndex];
	}
}
var isDirectUpdateMode = (mode) => mode === "reset" || mode === "none";
var cloneIfNotShared = (cached, shared) => shared ? cached : Object.assign({}, cached);
var createStack = (canStack, meta, chart) => canStack && !meta.hidden && meta._stacked && {
	keys: getSortedDatasetIndices(chart, true),
	values: null
};
var DatasetController = class {
	static defaults = {};
	static datasetElementType = null;
	static dataElementType = null;
	constructor(chart, datasetIndex) {
		this.chart = chart;
		this._ctx = chart.ctx;
		this.index = datasetIndex;
		this._cachedDataOpts = {};
		this._cachedMeta = this.getMeta();
		this._type = this._cachedMeta.type;
		this.options = void 0;
		this._parsing = false;
		this._data = void 0;
		this._objectData = void 0;
		this._sharedOptions = void 0;
		this._drawStart = void 0;
		this._drawCount = void 0;
		this.enableOptionSharing = false;
		this.supportsDecimation = false;
		this.$context = void 0;
		this._syncList = [];
		this.datasetElementType = new.target.datasetElementType;
		this.dataElementType = new.target.dataElementType;
		this.initialize();
	}
	initialize() {
		const meta = this._cachedMeta;
		this.configure();
		this.linkScales();
		meta._stacked = isStacked(meta.vScale, meta);
		this.addElements();
		if (this.options.fill && !this.chart.isPluginEnabled("filler")) console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
	}
	updateIndex(datasetIndex) {
		if (this.index !== datasetIndex) clearStacks(this._cachedMeta);
		this.index = datasetIndex;
	}
	linkScales() {
		const chart = this.chart;
		const meta = this._cachedMeta;
		const dataset = this.getDataset();
		const chooseId = (axis, x, y, r) => axis === "x" ? x : axis === "r" ? r : y;
		const xid = meta.xAxisID = valueOrDefault(dataset.xAxisID, getFirstScaleId(chart, "x"));
		const yid = meta.yAxisID = valueOrDefault(dataset.yAxisID, getFirstScaleId(chart, "y"));
		const rid = meta.rAxisID = valueOrDefault(dataset.rAxisID, getFirstScaleId(chart, "r"));
		const indexAxis = meta.indexAxis;
		const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
		const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
		meta.xScale = this.getScaleForId(xid);
		meta.yScale = this.getScaleForId(yid);
		meta.rScale = this.getScaleForId(rid);
		meta.iScale = this.getScaleForId(iid);
		meta.vScale = this.getScaleForId(vid);
	}
	getDataset() {
		return this.chart.data.datasets[this.index];
	}
	getMeta() {
		return this.chart.getDatasetMeta(this.index);
	}
	getScaleForId(scaleID) {
		return this.chart.scales[scaleID];
	}
	_getOtherScale(scale) {
		const meta = this._cachedMeta;
		return scale === meta.iScale ? meta.vScale : meta.iScale;
	}
	reset() {
		this._update("reset");
	}
	_destroy() {
		const meta = this._cachedMeta;
		if (this._data) unlistenArrayEvents(this._data, this);
		if (meta._stacked) clearStacks(meta);
	}
	_dataCheck() {
		const dataset = this.getDataset();
		const data = dataset.data || (dataset.data = []);
		const _data = this._data;
		if (isObject(data)) {
			const meta = this._cachedMeta;
			this._data = convertObjectDataToArray(data, meta);
		} else if (_data !== data) {
			if (_data) {
				unlistenArrayEvents(_data, this);
				const meta = this._cachedMeta;
				clearStacks(meta);
				meta._parsed = [];
			}
			if (data && Object.isExtensible(data)) listenArrayEvents(data, this);
			this._syncList = [];
			this._data = data;
		}
	}
	addElements() {
		const meta = this._cachedMeta;
		this._dataCheck();
		if (this.datasetElementType) meta.dataset = new this.datasetElementType();
	}
	buildOrUpdateElements(resetNewElements) {
		const meta = this._cachedMeta;
		const dataset = this.getDataset();
		let stackChanged = false;
		this._dataCheck();
		const oldStacked = meta._stacked;
		meta._stacked = isStacked(meta.vScale, meta);
		if (meta.stack !== dataset.stack) {
			stackChanged = true;
			clearStacks(meta);
			meta.stack = dataset.stack;
		}
		this._resyncElements(resetNewElements);
		if (stackChanged || oldStacked !== meta._stacked) {
			updateStacks(this, meta._parsed);
			meta._stacked = isStacked(meta.vScale, meta);
		}
	}
	configure() {
		const config = this.chart.config;
		const scopeKeys = config.datasetScopeKeys(this._type);
		const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
		this.options = config.createResolver(scopes, this.getContext());
		this._parsing = this.options.parsing;
		this._cachedDataOpts = {};
	}
	parse(start, count) {
		const { _cachedMeta: meta, _data: data } = this;
		const { iScale, _stacked } = meta;
		const iAxis = iScale.axis;
		let sorted = start === 0 && count === data.length ? true : meta._sorted;
		let prev = start > 0 && meta._parsed[start - 1];
		let i, cur, parsed;
		if (this._parsing === false) {
			meta._parsed = data;
			meta._sorted = true;
			parsed = data;
		} else {
			if (isArray(data[start])) parsed = this.parseArrayData(meta, data, start, count);
			else if (isObject(data[start])) parsed = this.parseObjectData(meta, data, start, count);
			else parsed = this.parsePrimitiveData(meta, data, start, count);
			const isNotInOrderComparedToPrev = () => cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
			for (i = 0; i < count; ++i) {
				meta._parsed[i + start] = cur = parsed[i];
				if (sorted) {
					if (isNotInOrderComparedToPrev()) sorted = false;
					prev = cur;
				}
			}
			meta._sorted = sorted;
		}
		if (_stacked) updateStacks(this, parsed);
	}
	parsePrimitiveData(meta, data, start, count) {
		const { iScale, vScale } = meta;
		const iAxis = iScale.axis;
		const vAxis = vScale.axis;
		const labels = iScale.getLabels();
		const singleScale = iScale === vScale;
		const parsed = new Array(count);
		let i, ilen, index;
		for (i = 0, ilen = count; i < ilen; ++i) {
			index = i + start;
			parsed[i] = {
				[iAxis]: singleScale || iScale.parse(labels[index], index),
				[vAxis]: vScale.parse(data[index], index)
			};
		}
		return parsed;
	}
	parseArrayData(meta, data, start, count) {
		const { xScale, yScale } = meta;
		const parsed = new Array(count);
		let i, ilen, index, item;
		for (i = 0, ilen = count; i < ilen; ++i) {
			index = i + start;
			item = data[index];
			parsed[i] = {
				x: xScale.parse(item[0], index),
				y: yScale.parse(item[1], index)
			};
		}
		return parsed;
	}
	parseObjectData(meta, data, start, count) {
		const { xScale, yScale } = meta;
		const { xAxisKey = "x", yAxisKey = "y" } = this._parsing;
		const parsed = new Array(count);
		let i, ilen, index, item;
		for (i = 0, ilen = count; i < ilen; ++i) {
			index = i + start;
			item = data[index];
			parsed[i] = {
				x: xScale.parse(resolveObjectKey(item, xAxisKey), index),
				y: yScale.parse(resolveObjectKey(item, yAxisKey), index)
			};
		}
		return parsed;
	}
	getParsed(index) {
		return this._cachedMeta._parsed[index];
	}
	getDataElement(index) {
		return this._cachedMeta.data[index];
	}
	applyStack(scale, parsed, mode) {
		const chart = this.chart;
		const meta = this._cachedMeta;
		const value = parsed[scale.axis];
		return applyStack({
			keys: getSortedDatasetIndices(chart, true),
			values: parsed._stacks[scale.axis]._visualValues
		}, value, meta.index, { mode });
	}
	updateRangeFromParsed(range, scale, parsed, stack) {
		const parsedValue = parsed[scale.axis];
		let value = parsedValue === null ? NaN : parsedValue;
		const values = stack && parsed._stacks[scale.axis];
		if (stack && values) {
			stack.values = values;
			value = applyStack(stack, parsedValue, this._cachedMeta.index);
		}
		range.min = Math.min(range.min, value);
		range.max = Math.max(range.max, value);
	}
	getMinMax(scale, canStack) {
		const meta = this._cachedMeta;
		const _parsed = meta._parsed;
		const sorted = meta._sorted && scale === meta.iScale;
		const ilen = _parsed.length;
		const otherScale = this._getOtherScale(scale);
		const stack = createStack(canStack, meta, this.chart);
		const range = {
			min: Number.POSITIVE_INFINITY,
			max: Number.NEGATIVE_INFINITY
		};
		const { min: otherMin, max: otherMax } = getUserBounds(otherScale);
		let i, parsed;
		function _skip() {
			parsed = _parsed[i];
			const otherValue = parsed[otherScale.axis];
			return !isNumberFinite(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
		}
		for (i = 0; i < ilen; ++i) {
			if (_skip()) continue;
			this.updateRangeFromParsed(range, scale, parsed, stack);
			if (sorted) break;
		}
		if (sorted) for (i = ilen - 1; i >= 0; --i) {
			if (_skip()) continue;
			this.updateRangeFromParsed(range, scale, parsed, stack);
			break;
		}
		return range;
	}
	getAllParsedValues(scale) {
		const parsed = this._cachedMeta._parsed;
		const values = [];
		let i, ilen, value;
		for (i = 0, ilen = parsed.length; i < ilen; ++i) {
			value = parsed[i][scale.axis];
			if (isNumberFinite(value)) values.push(value);
		}
		return values;
	}
	getMaxOverflow() {
		return false;
	}
	getLabelAndValue(index) {
		const meta = this._cachedMeta;
		const iScale = meta.iScale;
		const vScale = meta.vScale;
		const parsed = this.getParsed(index);
		return {
			label: iScale ? "" + iScale.getLabelForValue(parsed[iScale.axis]) : "",
			value: vScale ? "" + vScale.getLabelForValue(parsed[vScale.axis]) : ""
		};
	}
	_update(mode) {
		const meta = this._cachedMeta;
		this.update(mode || "default");
		meta._clip = toClip(valueOrDefault(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
	}
	update(mode) {}
	draw() {
		const ctx = this._ctx;
		const chart = this.chart;
		const meta = this._cachedMeta;
		const elements = meta.data || [];
		const area = chart.chartArea;
		const active = [];
		const start = this._drawStart || 0;
		const count = this._drawCount || elements.length - start;
		const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
		let i;
		if (meta.dataset) meta.dataset.draw(ctx, area, start, count);
		for (i = start; i < start + count; ++i) {
			const element = elements[i];
			if (element.hidden) continue;
			if (element.active && drawActiveElementsOnTop) active.push(element);
			else element.draw(ctx, area);
		}
		for (i = 0; i < active.length; ++i) active[i].draw(ctx, area);
	}
	getStyle(index, active) {
		const mode = active ? "active" : "default";
		return index === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index || 0, mode);
	}
	getContext(index, active, mode) {
		const dataset = this.getDataset();
		let context;
		if (index >= 0 && index < this._cachedMeta.data.length) {
			const element = this._cachedMeta.data[index];
			context = element.$context || (element.$context = createDataContext(this.getContext(), index, element));
			context.parsed = this.getParsed(index);
			context.raw = dataset.data[index];
			context.index = context.dataIndex = index;
		} else {
			context = this.$context || (this.$context = createDatasetContext(this.chart.getContext(), this.index));
			context.dataset = dataset;
			context.index = context.datasetIndex = this.index;
		}
		context.active = !!active;
		context.mode = mode;
		return context;
	}
	resolveDatasetElementOptions(mode) {
		return this._resolveElementOptions(this.datasetElementType.id, mode);
	}
	resolveDataElementOptions(index, mode) {
		return this._resolveElementOptions(this.dataElementType.id, mode, index);
	}
	_resolveElementOptions(elementType, mode = "default", index) {
		const active = mode === "active";
		const cache = this._cachedDataOpts;
		const cacheKey = elementType + "-" + mode;
		const cached = cache[cacheKey];
		const sharing = this.enableOptionSharing && defined(index);
		if (cached) return cloneIfNotShared(cached, sharing);
		const config = this.chart.config;
		const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
		const prefixes = active ? [
			`${elementType}Hover`,
			"hover",
			elementType,
			""
		] : [elementType, ""];
		const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
		const names = Object.keys(defaults.elements[elementType]);
		const context = () => this.getContext(index, active, mode);
		const values = config.resolveNamedOptions(scopes, names, context, prefixes);
		if (values.$shared) {
			values.$shared = sharing;
			cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
		}
		return values;
	}
	_resolveAnimations(index, transition, active) {
		const chart = this.chart;
		const cache = this._cachedDataOpts;
		const cacheKey = `animation-${transition}`;
		const cached = cache[cacheKey];
		if (cached) return cached;
		let options;
		if (chart.options.animation !== false) {
			const config = this.chart.config;
			const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
			const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
			options = config.createResolver(scopes, this.getContext(index, active, transition));
		}
		const animations = new Animations(chart, options && options.animations);
		if (options && options._cacheable) cache[cacheKey] = Object.freeze(animations);
		return animations;
	}
	getSharedOptions(options) {
		if (!options.$shared) return;
		return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
	}
	includeOptions(mode, sharedOptions) {
		return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
	}
	_getSharedOptions(start, mode) {
		const firstOpts = this.resolveDataElementOptions(start, mode);
		const previouslySharedOptions = this._sharedOptions;
		const sharedOptions = this.getSharedOptions(firstOpts);
		const includeOptions = this.includeOptions(mode, sharedOptions) || sharedOptions !== previouslySharedOptions;
		this.updateSharedOptions(sharedOptions, mode, firstOpts);
		return {
			sharedOptions,
			includeOptions
		};
	}
	updateElement(element, index, properties, mode) {
		if (isDirectUpdateMode(mode)) Object.assign(element, properties);
		else this._resolveAnimations(index, mode).update(element, properties);
	}
	updateSharedOptions(sharedOptions, mode, newOptions) {
		if (sharedOptions && !isDirectUpdateMode(mode)) this._resolveAnimations(void 0, mode).update(sharedOptions, newOptions);
	}
	_setStyle(element, index, mode, active) {
		element.active = active;
		const options = this.getStyle(index, active);
		this._resolveAnimations(index, mode, active).update(element, { options: !active && this.getSharedOptions(options) || options });
	}
	removeHoverStyle(element, datasetIndex, index) {
		this._setStyle(element, index, "active", false);
	}
	setHoverStyle(element, datasetIndex, index) {
		this._setStyle(element, index, "active", true);
	}
	_removeDatasetHoverStyle() {
		const element = this._cachedMeta.dataset;
		if (element) this._setStyle(element, void 0, "active", false);
	}
	_setDatasetHoverStyle() {
		const element = this._cachedMeta.dataset;
		if (element) this._setStyle(element, void 0, "active", true);
	}
	_resyncElements(resetNewElements) {
		const data = this._data;
		const elements = this._cachedMeta.data;
		for (const [method, arg1, arg2] of this._syncList) this[method](arg1, arg2);
		this._syncList = [];
		const numMeta = elements.length;
		const numData = data.length;
		const count = Math.min(numData, numMeta);
		if (count) this.parse(0, count);
		if (numData > numMeta) this._insertElements(numMeta, numData - numMeta, resetNewElements);
		else if (numData < numMeta) this._removeElements(numData, numMeta - numData);
	}
	_insertElements(start, count, resetNewElements = true) {
		const meta = this._cachedMeta;
		const data = meta.data;
		const end = start + count;
		let i;
		const move = (arr) => {
			arr.length += count;
			for (i = arr.length - 1; i >= end; i--) arr[i] = arr[i - count];
		};
		move(data);
		for (i = start; i < end; ++i) data[i] = new this.dataElementType();
		if (this._parsing) move(meta._parsed);
		this.parse(start, count);
		if (resetNewElements) this.updateElements(data, start, count, "reset");
	}
	updateElements(element, start, count, mode) {}
	_removeElements(start, count) {
		const meta = this._cachedMeta;
		if (this._parsing) {
			const removed = meta._parsed.splice(start, count);
			if (meta._stacked) clearStacks(meta, removed);
		}
		meta.data.splice(start, count);
	}
	_sync(args) {
		if (this._parsing) this._syncList.push(args);
		else {
			const [method, arg1, arg2] = args;
			this[method](arg1, arg2);
		}
		this.chart._dataChanges.push([this.index, ...args]);
	}
	_onDataPush() {
		const count = arguments.length;
		this._sync([
			"_insertElements",
			this.getDataset().data.length - count,
			count
		]);
	}
	_onDataPop() {
		this._sync([
			"_removeElements",
			this._cachedMeta.data.length - 1,
			1
		]);
	}
	_onDataShift() {
		this._sync([
			"_removeElements",
			0,
			1
		]);
	}
	_onDataSplice(start, count) {
		if (count) this._sync([
			"_removeElements",
			start,
			count
		]);
		const newCount = arguments.length - 2;
		if (newCount) this._sync([
			"_insertElements",
			start,
			newCount
		]);
	}
	_onDataUnshift() {
		this._sync([
			"_insertElements",
			0,
			arguments.length
		]);
	}
};
var LineController = class extends DatasetController {
	static id = "line";
	static defaults = {
		datasetElementType: "line",
		dataElementType: "point",
		showLine: true,
		spanGaps: false
	};
	static overrides = { scales: {
		_index_: { type: "category" },
		_value_: { type: "linear" }
	} };
	initialize() {
		this.enableOptionSharing = true;
		this.supportsDecimation = true;
		super.initialize();
	}
	update(mode) {
		const meta = this._cachedMeta;
		const { dataset: line, data: points = [], _dataset } = meta;
		const animationsDisabled = this.chart._animationsDisabled;
		let { start, count } = _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
		this._drawStart = start;
		this._drawCount = count;
		if (_scaleRangesChanged(meta)) {
			start = 0;
			count = points.length;
		}
		line._chart = this.chart;
		line._datasetIndex = this.index;
		line._decimated = !!_dataset._decimated;
		line.points = points;
		const options = this.resolveDatasetElementOptions(mode);
		if (!this.options.showLine) options.borderWidth = 0;
		options.segment = this.options.segment;
		this.updateElement(line, void 0, {
			animated: !animationsDisabled,
			options
		}, mode);
		this.updateElements(points, start, count, mode);
	}
	updateElements(points, start, count, mode) {
		const reset = mode === "reset";
		const { iScale, vScale, _stacked, _dataset } = this._cachedMeta;
		const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
		const iAxis = iScale.axis;
		const vAxis = vScale.axis;
		const { spanGaps, segment } = this.options;
		const maxGapLength = isNumber(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
		const directUpdate = this.chart._animationsDisabled || reset || mode === "none";
		const end = start + count;
		const pointsCount = points.length;
		let prevParsed = start > 0 && this.getParsed(start - 1);
		for (let i = 0; i < pointsCount; ++i) {
			const point = points[i];
			const properties = directUpdate ? point : {};
			if (i < start || i >= end) {
				properties.skip = true;
				continue;
			}
			const parsed = this.getParsed(i);
			const nullData = isNullOrUndef(parsed[vAxis]);
			const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
			const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
			properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
			properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
			if (segment) {
				properties.parsed = parsed;
				properties.raw = _dataset.data[i];
			}
			if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
			if (!directUpdate) this.updateElement(point, i, properties, mode);
			prevParsed = parsed;
		}
	}
	getMaxOverflow() {
		const meta = this._cachedMeta;
		const dataset = meta.dataset;
		const border = dataset.options && dataset.options.borderWidth || 0;
		const data = meta.data || [];
		if (!data.length) return border;
		const firstPoint = data[0].size(this.resolveDataElementOptions(0));
		const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
		return Math.max(border, firstPoint, lastPoint) / 2;
	}
	draw() {
		const meta = this._cachedMeta;
		meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
		super.draw();
	}
};
/**
* @namespace Chart._adapters
* @since 2.8.0
* @private
*/ function abstract() {
	throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
var adapters = { _date: class DateAdapterBase {
	/**
	* Override default date adapter methods.
	* Accepts type parameter to define options type.
	* @example
	* Chart._adapters._date.override<{myAdapterOption: string}>({
	*   init() {
	*     console.log(this.options.myAdapterOption);
	*   }
	* })
	*/ static override(members) {
		Object.assign(DateAdapterBase.prototype, members);
	}
	options;
	constructor(options) {
		this.options = options || {};
	}
	init() {}
	formats() {
		return abstract();
	}
	parse() {
		return abstract();
	}
	format() {
		return abstract();
	}
	add() {
		return abstract();
	}
	diff() {
		return abstract();
	}
	startOf() {
		return abstract();
	}
	endOf() {
		return abstract();
	}
} };
function binarySearch(metaset, axis, value, intersect) {
	const { controller, data, _sorted } = metaset;
	const iScale = controller._cachedMeta.iScale;
	const spanGaps = metaset.dataset ? metaset.dataset.options ? metaset.dataset.options.spanGaps : null : null;
	if (iScale && axis === iScale.axis && axis !== "r" && _sorted && data.length) {
		const lookupMethod = iScale._reversePixels ? _rlookupByKey : _lookupByKey;
		if (!intersect) {
			const result = lookupMethod(data, axis, value);
			if (spanGaps) {
				const { vScale } = controller._cachedMeta;
				const { _parsed } = metaset;
				const distanceToDefinedLo = _parsed.slice(0, result.lo + 1).reverse().findIndex((point) => !isNullOrUndef(point[vScale.axis]));
				result.lo -= Math.max(0, distanceToDefinedLo);
				const distanceToDefinedHi = _parsed.slice(result.hi).findIndex((point) => !isNullOrUndef(point[vScale.axis]));
				result.hi += Math.max(0, distanceToDefinedHi);
			}
			return result;
		} else if (controller._sharedOptions) {
			const el = data[0];
			const range = typeof el.getRange === "function" && el.getRange(axis);
			if (range) {
				const start = lookupMethod(data, axis, value - range);
				const end = lookupMethod(data, axis, value + range);
				return {
					lo: start.lo,
					hi: end.hi
				};
			}
		}
	}
	return {
		lo: 0,
		hi: data.length - 1
	};
}
function evaluateInteractionItems(chart, axis, position, handler, intersect) {
	const metasets = chart.getSortedVisibleDatasetMetas();
	const value = position[axis];
	for (let i = 0, ilen = metasets.length; i < ilen; ++i) {
		const { index, data } = metasets[i];
		const { lo, hi } = binarySearch(metasets[i], axis, value, intersect);
		for (let j = lo; j <= hi; ++j) {
			const element = data[j];
			if (!element.skip) handler(element, index, j);
		}
	}
}
function getDistanceMetricForAxis(axis) {
	const useX = axis.indexOf("x") !== -1;
	const useY = axis.indexOf("y") !== -1;
	return function(pt1, pt2) {
		const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
		const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
		return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	};
}
function getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
	const items = [];
	if (!includeInvisible && !chart.isPointInArea(position)) return items;
	const evaluationFunc = function(element, datasetIndex, index) {
		if (!includeInvisible && !_isPointInArea(element, chart.chartArea, 0)) return;
		if (element.inRange(position.x, position.y, useFinalPosition)) items.push({
			element,
			datasetIndex,
			index
		});
	};
	evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
	return items;
}
function getNearestRadialItems(chart, position, axis, useFinalPosition) {
	let items = [];
	function evaluationFunc(element, datasetIndex, index) {
		const { startAngle, endAngle } = element.getProps(["startAngle", "endAngle"], useFinalPosition);
		const { angle } = getAngleFromPoint(element, {
			x: position.x,
			y: position.y
		});
		if (_angleBetween(angle, startAngle, endAngle)) items.push({
			element,
			datasetIndex,
			index
		});
	}
	evaluateInteractionItems(chart, axis, position, evaluationFunc);
	return items;
}
function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
	let items = [];
	const distanceMetric = getDistanceMetricForAxis(axis);
	let minDistance = Number.POSITIVE_INFINITY;
	function evaluationFunc(element, datasetIndex, index) {
		const inRange = element.inRange(position.x, position.y, useFinalPosition);
		if (intersect && !inRange) return;
		const center = element.getCenterPoint(useFinalPosition);
		if (!(!!includeInvisible || chart.isPointInArea(center)) && !inRange) return;
		const distance = distanceMetric(position, center);
		if (distance < minDistance) {
			items = [{
				element,
				datasetIndex,
				index
			}];
			minDistance = distance;
		} else if (distance === minDistance) items.push({
			element,
			datasetIndex,
			index
		});
	}
	evaluateInteractionItems(chart, axis, position, evaluationFunc);
	return items;
}
function getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
	if (!includeInvisible && !chart.isPointInArea(position)) return [];
	return axis === "r" && !intersect ? getNearestRadialItems(chart, position, axis, useFinalPosition) : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
}
function getAxisItems(chart, position, axis, intersect, useFinalPosition) {
	const items = [];
	const rangeMethod = axis === "x" ? "inXRange" : "inYRange";
	let intersectsItem = false;
	evaluateInteractionItems(chart, axis, position, (element, datasetIndex, index) => {
		if (element[rangeMethod] && element[rangeMethod](position[axis], useFinalPosition)) {
			items.push({
				element,
				datasetIndex,
				index
			});
			intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
		}
	});
	if (intersect && !intersectsItem) return [];
	return items;
}
var Interaction = {
	evaluateInteractionItems,
	modes: {
		index(chart, e, options, useFinalPosition) {
			const position = getRelativePosition(e, chart);
			const axis = options.axis || "x";
			const includeInvisible = options.includeInvisible || false;
			const items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
			const elements = [];
			if (!items.length) return [];
			chart.getSortedVisibleDatasetMetas().forEach((meta) => {
				const index = items[0].index;
				const element = meta.data[index];
				if (element && !element.skip) elements.push({
					element,
					datasetIndex: meta.index,
					index
				});
			});
			return elements;
		},
		dataset(chart, e, options, useFinalPosition) {
			const position = getRelativePosition(e, chart);
			const axis = options.axis || "xy";
			const includeInvisible = options.includeInvisible || false;
			let items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
			if (items.length > 0) {
				const datasetIndex = items[0].datasetIndex;
				const data = chart.getDatasetMeta(datasetIndex).data;
				items = [];
				for (let i = 0; i < data.length; ++i) items.push({
					element: data[i],
					datasetIndex,
					index: i
				});
			}
			return items;
		},
		point(chart, e, options, useFinalPosition) {
			return getIntersectItems(chart, getRelativePosition(e, chart), options.axis || "xy", useFinalPosition, options.includeInvisible || false);
		},
		nearest(chart, e, options, useFinalPosition) {
			const position = getRelativePosition(e, chart);
			const axis = options.axis || "xy";
			const includeInvisible = options.includeInvisible || false;
			return getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
		},
		x(chart, e, options, useFinalPosition) {
			return getAxisItems(chart, getRelativePosition(e, chart), "x", options.intersect, useFinalPosition);
		},
		y(chart, e, options, useFinalPosition) {
			return getAxisItems(chart, getRelativePosition(e, chart), "y", options.intersect, useFinalPosition);
		}
	}
};
var STATIC_POSITIONS = [
	"left",
	"top",
	"right",
	"bottom"
];
function filterByPosition(array, position) {
	return array.filter((v) => v.pos === position);
}
function filterDynamicPositionByAxis(array, axis) {
	return array.filter((v) => STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
}
function sortByWeight(array, reverse) {
	return array.sort((a, b) => {
		const v0 = reverse ? b : a;
		const v1 = reverse ? a : b;
		return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
	});
}
function wrapBoxes(boxes) {
	const layoutBoxes = [];
	let i, ilen, box, pos, stack, stackWeight;
	for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
		box = boxes[i];
		({position: pos, options: {stack, stackWeight = 1}} = box);
		layoutBoxes.push({
			index: i,
			box,
			pos,
			horizontal: box.isHorizontal(),
			weight: box.weight,
			stack: stack && pos + stack,
			stackWeight
		});
	}
	return layoutBoxes;
}
function buildStacks(layouts) {
	const stacks = {};
	for (const wrap of layouts) {
		const { stack, pos, stackWeight } = wrap;
		if (!stack || !STATIC_POSITIONS.includes(pos)) continue;
		const _stack = stacks[stack] || (stacks[stack] = {
			count: 0,
			placed: 0,
			weight: 0,
			size: 0
		});
		_stack.count++;
		_stack.weight += stackWeight;
	}
	return stacks;
}
function setLayoutDims(layouts, params) {
	const stacks = buildStacks(layouts);
	const { vBoxMaxWidth, hBoxMaxHeight } = params;
	let i, ilen, layout;
	for (i = 0, ilen = layouts.length; i < ilen; ++i) {
		layout = layouts[i];
		const { fullSize } = layout.box;
		const stack = stacks[layout.stack];
		const factor = stack && layout.stackWeight / stack.weight;
		if (layout.horizontal) {
			layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
			layout.height = hBoxMaxHeight;
		} else {
			layout.width = vBoxMaxWidth;
			layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
		}
	}
	return stacks;
}
function buildLayoutBoxes(boxes) {
	const layoutBoxes = wrapBoxes(boxes);
	const fullSize = sortByWeight(layoutBoxes.filter((wrap) => wrap.box.fullSize), true);
	const left = sortByWeight(filterByPosition(layoutBoxes, "left"), true);
	const right = sortByWeight(filterByPosition(layoutBoxes, "right"));
	const top = sortByWeight(filterByPosition(layoutBoxes, "top"), true);
	const bottom = sortByWeight(filterByPosition(layoutBoxes, "bottom"));
	const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, "x");
	const centerVertical = filterDynamicPositionByAxis(layoutBoxes, "y");
	return {
		fullSize,
		leftAndTop: left.concat(top),
		rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
		chartArea: filterByPosition(layoutBoxes, "chartArea"),
		vertical: left.concat(right).concat(centerVertical),
		horizontal: top.concat(bottom).concat(centerHorizontal)
	};
}
function getCombinedMax(maxPadding, chartArea, a, b) {
	return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function updateMaxPadding(maxPadding, boxPadding) {
	maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
	maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
	maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
	maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}
function updateDims(chartArea, params, layout, stacks) {
	const { pos, box } = layout;
	const maxPadding = chartArea.maxPadding;
	if (!isObject(pos)) {
		if (layout.size) chartArea[pos] -= layout.size;
		const stack = stacks[layout.stack] || {
			size: 0,
			count: 1
		};
		stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
		layout.size = stack.size / stack.count;
		chartArea[pos] += layout.size;
	}
	if (box.getPadding) updateMaxPadding(maxPadding, box.getPadding());
	const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, "left", "right"));
	const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, "top", "bottom"));
	const widthChanged = newWidth !== chartArea.w;
	const heightChanged = newHeight !== chartArea.h;
	chartArea.w = newWidth;
	chartArea.h = newHeight;
	return layout.horizontal ? {
		same: widthChanged,
		other: heightChanged
	} : {
		same: heightChanged,
		other: widthChanged
	};
}
function handleMaxPadding(chartArea) {
	const maxPadding = chartArea.maxPadding;
	function updatePos(pos) {
		const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
		chartArea[pos] += change;
		return change;
	}
	chartArea.y += updatePos("top");
	chartArea.x += updatePos("left");
	updatePos("right");
	updatePos("bottom");
}
function getMargins(horizontal, chartArea) {
	const maxPadding = chartArea.maxPadding;
	function marginForPositions(positions) {
		const margin = {
			left: 0,
			top: 0,
			right: 0,
			bottom: 0
		};
		positions.forEach((pos) => {
			margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
		});
		return margin;
	}
	return horizontal ? marginForPositions(["left", "right"]) : marginForPositions(["top", "bottom"]);
}
function fitBoxes(boxes, chartArea, params, stacks) {
	const refitBoxes = [];
	let i, ilen, layout, box, refit, changed;
	for (i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i) {
		layout = boxes[i];
		box = layout.box;
		box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));
		const { same, other } = updateDims(chartArea, params, layout, stacks);
		refit |= same && refitBoxes.length;
		changed = changed || other;
		if (!box.fullSize) refitBoxes.push(layout);
	}
	return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
}
function setBoxDims(box, left, top, width, height) {
	box.top = top;
	box.left = left;
	box.right = left + width;
	box.bottom = top + height;
	box.width = width;
	box.height = height;
}
function placeBoxes(boxes, chartArea, params, stacks) {
	const userPadding = params.padding;
	let { x, y } = chartArea;
	for (const layout of boxes) {
		const box = layout.box;
		const stack = stacks[layout.stack] || {
			count: 1,
			placed: 0,
			weight: 1
		};
		const weight = layout.stackWeight / stack.weight || 1;
		if (layout.horizontal) {
			const width = chartArea.w * weight;
			const height = stack.size || box.height;
			if (defined(stack.start)) y = stack.start;
			if (box.fullSize) setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
			else setBoxDims(box, chartArea.left + stack.placed, y, width, height);
			stack.start = y;
			stack.placed += width;
			y = box.bottom;
		} else {
			const height = chartArea.h * weight;
			const width = stack.size || box.width;
			if (defined(stack.start)) x = stack.start;
			if (box.fullSize) setBoxDims(box, x, userPadding.top, width, params.outerHeight - userPadding.bottom - userPadding.top);
			else setBoxDims(box, x, chartArea.top + stack.placed, width, height);
			stack.start = x;
			stack.placed += height;
			x = box.right;
		}
	}
	chartArea.x = x;
	chartArea.y = y;
}
var layouts = {
	addBox(chart, item) {
		if (!chart.boxes) chart.boxes = [];
		item.fullSize = item.fullSize || false;
		item.position = item.position || "top";
		item.weight = item.weight || 0;
		item._layers = item._layers || function() {
			return [{
				z: 0,
				draw(chartArea) {
					item.draw(chartArea);
				}
			}];
		};
		chart.boxes.push(item);
	},
	removeBox(chart, layoutItem) {
		const index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
		if (index !== -1) chart.boxes.splice(index, 1);
	},
	configure(chart, item, options) {
		item.fullSize = options.fullSize;
		item.position = options.position;
		item.weight = options.weight;
	},
	update(chart, width, height, minPadding) {
		if (!chart) return;
		const padding = toPadding(chart.options.layout.padding);
		const availableWidth = Math.max(width - padding.width, 0);
		const availableHeight = Math.max(height - padding.height, 0);
		const boxes = buildLayoutBoxes(chart.boxes);
		const verticalBoxes = boxes.vertical;
		const horizontalBoxes = boxes.horizontal;
		each(chart.boxes, (box) => {
			if (typeof box.beforeLayout === "function") box.beforeLayout();
		});
		const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap) => wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
		const params = Object.freeze({
			outerWidth: width,
			outerHeight: height,
			padding,
			availableWidth,
			availableHeight,
			vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
			hBoxMaxHeight: availableHeight / 2
		});
		const maxPadding = Object.assign({}, padding);
		updateMaxPadding(maxPadding, toPadding(minPadding));
		const chartArea = Object.assign({
			maxPadding,
			w: availableWidth,
			h: availableHeight,
			x: padding.left,
			y: padding.top
		}, padding);
		const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
		fitBoxes(boxes.fullSize, chartArea, params, stacks);
		fitBoxes(verticalBoxes, chartArea, params, stacks);
		if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) fitBoxes(verticalBoxes, chartArea, params, stacks);
		handleMaxPadding(chartArea);
		placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
		chartArea.x += chartArea.w;
		chartArea.y += chartArea.h;
		placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
		chart.chartArea = {
			left: chartArea.left,
			top: chartArea.top,
			right: chartArea.left + chartArea.w,
			bottom: chartArea.top + chartArea.h,
			height: chartArea.h,
			width: chartArea.w
		};
		each(boxes.chartArea, (layout) => {
			const box = layout.box;
			Object.assign(box, chart.chartArea);
			box.update(chartArea.w, chartArea.h, {
				left: 0,
				top: 0,
				right: 0,
				bottom: 0
			});
		});
	}
};
var BasePlatform = class {
	acquireContext(canvas, aspectRatio) {}
	releaseContext(context) {
		return false;
	}
	addEventListener(chart, type, listener) {}
	removeEventListener(chart, type, listener) {}
	getDevicePixelRatio() {
		return 1;
	}
	getMaximumSize(element, width, height, aspectRatio) {
		width = Math.max(0, width || element.width);
		height = height || element.height;
		return {
			width,
			height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
		};
	}
	isAttached(canvas) {
		return true;
	}
	updateConfig(config) {}
};
var BasicPlatform = class extends BasePlatform {
	acquireContext(item) {
		return item && item.getContext && item.getContext("2d") || null;
	}
	updateConfig(config) {
		config.options.animation = false;
	}
};
var EXPANDO_KEY = "$chartjs";
var EVENT_TYPES = {
	touchstart: "mousedown",
	touchmove: "mousemove",
	touchend: "mouseup",
	pointerenter: "mouseenter",
	pointerdown: "mousedown",
	pointermove: "mousemove",
	pointerup: "mouseup",
	pointerleave: "mouseout",
	pointerout: "mouseout"
};
var isNullOrEmpty = (value) => value === null || value === "";
function initCanvas(canvas, aspectRatio) {
	const style = canvas.style;
	const renderHeight = canvas.getAttribute("height");
	const renderWidth = canvas.getAttribute("width");
	canvas[EXPANDO_KEY] = { initial: {
		height: renderHeight,
		width: renderWidth,
		style: {
			display: style.display,
			height: style.height,
			width: style.width
		}
	} };
	style.display = style.display || "block";
	style.boxSizing = style.boxSizing || "border-box";
	if (isNullOrEmpty(renderWidth)) {
		const displayWidth = readUsedSize(canvas, "width");
		if (displayWidth !== void 0) canvas.width = displayWidth;
	}
	if (isNullOrEmpty(renderHeight)) if (canvas.style.height === "") canvas.height = canvas.width / (aspectRatio || 2);
	else {
		const displayHeight = readUsedSize(canvas, "height");
		if (displayHeight !== void 0) canvas.height = displayHeight;
	}
	return canvas;
}
var eventListenerOptions = supportsEventListenerOptions ? { passive: true } : false;
function addListener(node, type, listener) {
	if (node) node.addEventListener(type, listener, eventListenerOptions);
}
function removeListener(chart, type, listener) {
	if (chart && chart.canvas) chart.canvas.removeEventListener(type, listener, eventListenerOptions);
}
function fromNativeEvent(event, chart) {
	const type = EVENT_TYPES[event.type] || event.type;
	const { x, y } = getRelativePosition(event, chart);
	return {
		type,
		chart,
		native: event,
		x: x !== void 0 ? x : null,
		y: y !== void 0 ? y : null
	};
}
function nodeListContains(nodeList, canvas) {
	for (const node of nodeList) if (node === canvas || node.contains(canvas)) return true;
}
function createAttachObserver(chart, type, listener) {
	const canvas = chart.canvas;
	const observer = new MutationObserver((entries) => {
		let trigger = false;
		for (const entry of entries) {
			trigger = trigger || nodeListContains(entry.addedNodes, canvas);
			trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
		}
		if (trigger) listener();
	});
	observer.observe(document, {
		childList: true,
		subtree: true
	});
	return observer;
}
function createDetachObserver(chart, type, listener) {
	const canvas = chart.canvas;
	const observer = new MutationObserver((entries) => {
		let trigger = false;
		for (const entry of entries) {
			trigger = trigger || nodeListContains(entry.removedNodes, canvas);
			trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
		}
		if (trigger) listener();
	});
	observer.observe(document, {
		childList: true,
		subtree: true
	});
	return observer;
}
var drpListeningCharts = /* @__PURE__ */ new Map();
var oldDevicePixelRatio = 0;
function onWindowResize() {
	const dpr = window.devicePixelRatio;
	if (dpr === oldDevicePixelRatio) return;
	oldDevicePixelRatio = dpr;
	drpListeningCharts.forEach((resize, chart) => {
		if (chart.currentDevicePixelRatio !== dpr) resize();
	});
}
function listenDevicePixelRatioChanges(chart, resize) {
	if (!drpListeningCharts.size) window.addEventListener("resize", onWindowResize);
	drpListeningCharts.set(chart, resize);
}
function unlistenDevicePixelRatioChanges(chart) {
	drpListeningCharts.delete(chart);
	if (!drpListeningCharts.size) window.removeEventListener("resize", onWindowResize);
}
function createResizeObserver(chart, type, listener) {
	const canvas = chart.canvas;
	const container = canvas && _getParentNode(canvas);
	if (!container) return;
	const resize = throttled((width, height) => {
		const w = container.clientWidth;
		listener(width, height);
		if (w < container.clientWidth) listener();
	}, window);
	const observer = new ResizeObserver((entries) => {
		const entry = entries[0];
		const width = entry.contentRect.width;
		const height = entry.contentRect.height;
		if (width === 0 && height === 0) return;
		resize(width, height);
	});
	observer.observe(container);
	listenDevicePixelRatioChanges(chart, resize);
	return observer;
}
function releaseObserver(chart, type, observer) {
	if (observer) observer.disconnect();
	if (type === "resize") unlistenDevicePixelRatioChanges(chart);
}
function createProxyAndListen(chart, type, listener) {
	const canvas = chart.canvas;
	const proxy = throttled((event) => {
		if (chart.ctx !== null) listener(fromNativeEvent(event, chart));
	}, chart);
	addListener(canvas, type, proxy);
	return proxy;
}
var DomPlatform = class extends BasePlatform {
	acquireContext(canvas, aspectRatio) {
		const context = canvas && canvas.getContext && canvas.getContext("2d");
		if (context && context.canvas === canvas) {
			initCanvas(canvas, aspectRatio);
			return context;
		}
		return null;
	}
	releaseContext(context) {
		const canvas = context.canvas;
		if (!canvas[EXPANDO_KEY]) return false;
		const initial = canvas[EXPANDO_KEY].initial;
		["height", "width"].forEach((prop) => {
			const value = initial[prop];
			if (isNullOrUndef(value)) canvas.removeAttribute(prop);
			else canvas.setAttribute(prop, value);
		});
		const style = initial.style || {};
		Object.keys(style).forEach((key) => {
			canvas.style[key] = style[key];
		});
		canvas.width = canvas.width;
		delete canvas[EXPANDO_KEY];
		return true;
	}
	addEventListener(chart, type, listener) {
		this.removeEventListener(chart, type);
		const proxies = chart.$proxies || (chart.$proxies = {});
		proxies[type] = ({
			attach: createAttachObserver,
			detach: createDetachObserver,
			resize: createResizeObserver
		}[type] || createProxyAndListen)(chart, type, listener);
	}
	removeEventListener(chart, type) {
		const proxies = chart.$proxies || (chart.$proxies = {});
		const proxy = proxies[type];
		if (!proxy) return;
		({
			attach: releaseObserver,
			detach: releaseObserver,
			resize: releaseObserver
		}[type] || removeListener)(chart, type, proxy);
		proxies[type] = void 0;
	}
	getDevicePixelRatio() {
		return window.devicePixelRatio;
	}
	getMaximumSize(canvas, width, height, aspectRatio) {
		return getMaximumSize(canvas, width, height, aspectRatio);
	}
	isAttached(canvas) {
		const container = canvas && _getParentNode(canvas);
		return !!(container && container.isConnected);
	}
};
function _detectPlatform(canvas) {
	if (!_isDomSupported() || typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas) return BasicPlatform;
	return DomPlatform;
}
var Element = class {
	static defaults = {};
	static defaultRoutes = void 0;
	x;
	y;
	active = false;
	options;
	$animations;
	tooltipPosition(useFinalPosition) {
		const { x, y } = this.getProps(["x", "y"], useFinalPosition);
		return {
			x,
			y
		};
	}
	hasValue() {
		return isNumber(this.x) && isNumber(this.y);
	}
	getProps(props, final) {
		const anims = this.$animations;
		if (!final || !anims) return this;
		const ret = {};
		props.forEach((prop) => {
			ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
		});
		return ret;
	}
};
function autoSkip(scale, ticks) {
	const tickOpts = scale.options.ticks;
	const determinedMaxTicks = determineMaxTicks(scale);
	const ticksLimit = Math.min(tickOpts.maxTicksLimit || determinedMaxTicks, determinedMaxTicks);
	const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
	const numMajorIndices = majorIndices.length;
	const first = majorIndices[0];
	const last = majorIndices[numMajorIndices - 1];
	const newTicks = [];
	if (numMajorIndices > ticksLimit) {
		skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
		return newTicks;
	}
	const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
	if (numMajorIndices > 0) {
		let i, ilen;
		const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
		skip(ticks, newTicks, spacing, isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
		for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
		skip(ticks, newTicks, spacing, last, isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
		return newTicks;
	}
	skip(ticks, newTicks, spacing);
	return newTicks;
}
function determineMaxTicks(scale) {
	const offset = scale.options.offset;
	const tickLength = scale._tickSize();
	const maxScale = scale._length / tickLength + (offset ? 0 : 1);
	const maxChart = scale._maxLength / tickLength;
	return Math.floor(Math.min(maxScale, maxChart));
}
function calculateSpacing(majorIndices, ticks, ticksLimit) {
	const evenMajorSpacing = getEvenSpacing(majorIndices);
	const spacing = ticks.length / ticksLimit;
	if (!evenMajorSpacing) return Math.max(spacing, 1);
	const factors = _factorize(evenMajorSpacing);
	for (let i = 0, ilen = factors.length - 1; i < ilen; i++) {
		const factor = factors[i];
		if (factor > spacing) return factor;
	}
	return Math.max(spacing, 1);
}
function getMajorIndices(ticks) {
	const result = [];
	let i, ilen;
	for (i = 0, ilen = ticks.length; i < ilen; i++) if (ticks[i].major) result.push(i);
	return result;
}
function skipMajors(ticks, newTicks, majorIndices, spacing) {
	let count = 0;
	let next = majorIndices[0];
	let i;
	spacing = Math.ceil(spacing);
	for (i = 0; i < ticks.length; i++) if (i === next) {
		newTicks.push(ticks[i]);
		count++;
		next = majorIndices[count * spacing];
	}
}
function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
	const start = valueOrDefault(majorStart, 0);
	const end = Math.min(valueOrDefault(majorEnd, ticks.length), ticks.length);
	let count = 0;
	let length, i, next;
	spacing = Math.ceil(spacing);
	if (majorEnd) {
		length = majorEnd - majorStart;
		spacing = length / Math.floor(length / spacing);
	}
	next = start;
	while (next < 0) {
		count++;
		next = Math.round(start + count * spacing);
	}
	for (i = Math.max(start, 0); i < end; i++) if (i === next) {
		newTicks.push(ticks[i]);
		count++;
		next = Math.round(start + count * spacing);
	}
}
function getEvenSpacing(arr) {
	const len = arr.length;
	let i, diff;
	if (len < 2) return false;
	for (diff = arr[0], i = 1; i < len; ++i) if (arr[i] - arr[i - 1] !== diff) return false;
	return diff;
}
var reverseAlign = (align) => align === "left" ? "right" : align === "right" ? "left" : align;
var offsetFromEdge = (scale, edge, offset) => edge === "top" || edge === "left" ? scale[edge] + offset : scale[edge] - offset;
var getTicksLimit = (ticksLength, maxTicksLimit) => Math.min(maxTicksLimit || ticksLength, ticksLength);
function sample(arr, numItems) {
	const result = [];
	const increment = arr.length / numItems;
	const len = arr.length;
	let i = 0;
	for (; i < len; i += increment) result.push(arr[Math.floor(i)]);
	return result;
}
function getPixelForGridLine(scale, index, offsetGridLines) {
	const length = scale.ticks.length;
	const validIndex = Math.min(index, length - 1);
	const start = scale._startPixel;
	const end = scale._endPixel;
	const epsilon = 1e-6;
	let lineValue = scale.getPixelForTick(validIndex);
	let offset;
	if (offsetGridLines) {
		if (length === 1) offset = Math.max(lineValue - start, end - lineValue);
		else if (index === 0) offset = (scale.getPixelForTick(1) - lineValue) / 2;
		else offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
		lineValue += validIndex < index ? offset : -offset;
		if (lineValue < start - epsilon || lineValue > end + epsilon) return;
	}
	return lineValue;
}
function garbageCollect(caches, length) {
	each(caches, (cache) => {
		const gc = cache.gc;
		const gcLen = gc.length / 2;
		let i;
		if (gcLen > length) {
			for (i = 0; i < gcLen; ++i) delete cache.data[gc[i]];
			gc.splice(0, gcLen);
		}
	});
}
function getTickMarkLength(options) {
	return options.drawTicks ? options.tickLength : 0;
}
function getTitleHeight(options, fallback) {
	if (!options.display) return 0;
	const font = toFont(options.font, fallback);
	const padding = toPadding(options.padding);
	return (isArray(options.text) ? options.text.length : 1) * font.lineHeight + padding.height;
}
function createScaleContext(parent, scale) {
	return createContext(parent, {
		scale,
		type: "scale"
	});
}
function createTickContext(parent, index, tick) {
	return createContext(parent, {
		tick,
		index,
		type: "tick"
	});
}
function titleAlign(align, position, reverse) {
	let ret = _toLeftRightCenter(align);
	if (reverse && position !== "right" || !reverse && position === "right") ret = reverseAlign(ret);
	return ret;
}
function titleArgs(scale, offset, position, align) {
	const { top, left, bottom, right, chart } = scale;
	const { chartArea, scales } = chart;
	let rotation = 0;
	let maxWidth, titleX, titleY;
	const height = bottom - top;
	const width = right - left;
	if (scale.isHorizontal()) {
		titleX = _alignStartEnd(align, left, right);
		if (isObject(position)) {
			const positionAxisID = Object.keys(position)[0];
			const value = position[positionAxisID];
			titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
		} else if (position === "center") titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
		else titleY = offsetFromEdge(scale, position, offset);
		maxWidth = right - left;
	} else {
		if (isObject(position)) {
			const positionAxisID = Object.keys(position)[0];
			const value = position[positionAxisID];
			titleX = scales[positionAxisID].getPixelForValue(value) - width + offset;
		} else if (position === "center") titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
		else titleX = offsetFromEdge(scale, position, offset);
		titleY = _alignStartEnd(align, bottom, top);
		rotation = position === "left" ? -HALF_PI : HALF_PI;
	}
	return {
		titleX,
		titleY,
		maxWidth,
		rotation
	};
}
var Scale = class Scale extends Element {
	constructor(cfg) {
		super();
		this.id = cfg.id;
		this.type = cfg.type;
		this.options = void 0;
		this.ctx = cfg.ctx;
		this.chart = cfg.chart;
		this.top = void 0;
		this.bottom = void 0;
		this.left = void 0;
		this.right = void 0;
		this.width = void 0;
		this.height = void 0;
		this._margins = {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		};
		this.maxWidth = void 0;
		this.maxHeight = void 0;
		this.paddingTop = void 0;
		this.paddingBottom = void 0;
		this.paddingLeft = void 0;
		this.paddingRight = void 0;
		this.axis = void 0;
		this.labelRotation = void 0;
		this.min = void 0;
		this.max = void 0;
		this._range = void 0;
		this.ticks = [];
		this._gridLineItems = null;
		this._labelItems = null;
		this._labelSizes = null;
		this._length = 0;
		this._maxLength = 0;
		this._longestTextCache = {};
		this._startPixel = void 0;
		this._endPixel = void 0;
		this._reversePixels = false;
		this._userMax = void 0;
		this._userMin = void 0;
		this._suggestedMax = void 0;
		this._suggestedMin = void 0;
		this._ticksLength = 0;
		this._borderValue = 0;
		this._cache = {};
		this._dataLimitsCached = false;
		this.$context = void 0;
	}
	init(options) {
		this.options = options.setContext(this.getContext());
		this.axis = options.axis;
		this._userMin = this.parse(options.min);
		this._userMax = this.parse(options.max);
		this._suggestedMin = this.parse(options.suggestedMin);
		this._suggestedMax = this.parse(options.suggestedMax);
	}
	parse(raw, index) {
		return raw;
	}
	getUserBounds() {
		let { _userMin, _userMax, _suggestedMin, _suggestedMax } = this;
		_userMin = finiteOrDefault(_userMin, Number.POSITIVE_INFINITY);
		_userMax = finiteOrDefault(_userMax, Number.NEGATIVE_INFINITY);
		_suggestedMin = finiteOrDefault(_suggestedMin, Number.POSITIVE_INFINITY);
		_suggestedMax = finiteOrDefault(_suggestedMax, Number.NEGATIVE_INFINITY);
		return {
			min: finiteOrDefault(_userMin, _suggestedMin),
			max: finiteOrDefault(_userMax, _suggestedMax),
			minDefined: isNumberFinite(_userMin),
			maxDefined: isNumberFinite(_userMax)
		};
	}
	getMinMax(canStack) {
		let { min, max, minDefined, maxDefined } = this.getUserBounds();
		let range;
		if (minDefined && maxDefined) return {
			min,
			max
		};
		const metas = this.getMatchingVisibleMetas();
		for (let i = 0, ilen = metas.length; i < ilen; ++i) {
			range = metas[i].controller.getMinMax(this, canStack);
			if (!minDefined) min = Math.min(min, range.min);
			if (!maxDefined) max = Math.max(max, range.max);
		}
		min = maxDefined && min > max ? max : min;
		max = minDefined && min > max ? min : max;
		return {
			min: finiteOrDefault(min, finiteOrDefault(max, min)),
			max: finiteOrDefault(max, finiteOrDefault(min, max))
		};
	}
	getPadding() {
		return {
			left: this.paddingLeft || 0,
			top: this.paddingTop || 0,
			right: this.paddingRight || 0,
			bottom: this.paddingBottom || 0
		};
	}
	getTicks() {
		return this.ticks;
	}
	getLabels() {
		const data = this.chart.data;
		return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
	}
	getLabelItems(chartArea = this.chart.chartArea) {
		return this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
	}
	beforeLayout() {
		this._cache = {};
		this._dataLimitsCached = false;
	}
	beforeUpdate() {
		callback(this.options.beforeUpdate, [this]);
	}
	update(maxWidth, maxHeight, margins) {
		const { beginAtZero, grace, ticks: tickOpts } = this.options;
		const sampleSize = tickOpts.sampleSize;
		this.beforeUpdate();
		this.maxWidth = maxWidth;
		this.maxHeight = maxHeight;
		this._margins = margins = Object.assign({
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		}, margins);
		this.ticks = null;
		this._labelSizes = null;
		this._gridLineItems = null;
		this._labelItems = null;
		this.beforeSetDimensions();
		this.setDimensions();
		this.afterSetDimensions();
		this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
		if (!this._dataLimitsCached) {
			this.beforeDataLimits();
			this.determineDataLimits();
			this.afterDataLimits();
			this._range = _addGrace(this, grace, beginAtZero);
			this._dataLimitsCached = true;
		}
		this.beforeBuildTicks();
		this.ticks = this.buildTicks() || [];
		this.afterBuildTicks();
		const samplingEnabled = sampleSize < this.ticks.length;
		this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
		this.configure();
		this.beforeCalculateLabelRotation();
		this.calculateLabelRotation();
		this.afterCalculateLabelRotation();
		if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === "auto")) {
			this.ticks = autoSkip(this, this.ticks);
			this._labelSizes = null;
			this.afterAutoSkip();
		}
		if (samplingEnabled) this._convertTicksToLabels(this.ticks);
		this.beforeFit();
		this.fit();
		this.afterFit();
		this.afterUpdate();
	}
	configure() {
		let reversePixels = this.options.reverse;
		let startPixel, endPixel;
		if (this.isHorizontal()) {
			startPixel = this.left;
			endPixel = this.right;
		} else {
			startPixel = this.top;
			endPixel = this.bottom;
			reversePixels = !reversePixels;
		}
		this._startPixel = startPixel;
		this._endPixel = endPixel;
		this._reversePixels = reversePixels;
		this._length = endPixel - startPixel;
		this._alignToPixels = this.options.alignToPixels;
	}
	afterUpdate() {
		callback(this.options.afterUpdate, [this]);
	}
	beforeSetDimensions() {
		callback(this.options.beforeSetDimensions, [this]);
	}
	setDimensions() {
		if (this.isHorizontal()) {
			this.width = this.maxWidth;
			this.left = 0;
			this.right = this.width;
		} else {
			this.height = this.maxHeight;
			this.top = 0;
			this.bottom = this.height;
		}
		this.paddingLeft = 0;
		this.paddingTop = 0;
		this.paddingRight = 0;
		this.paddingBottom = 0;
	}
	afterSetDimensions() {
		callback(this.options.afterSetDimensions, [this]);
	}
	_callHooks(name) {
		this.chart.notifyPlugins(name, this.getContext());
		callback(this.options[name], [this]);
	}
	beforeDataLimits() {
		this._callHooks("beforeDataLimits");
	}
	determineDataLimits() {}
	afterDataLimits() {
		this._callHooks("afterDataLimits");
	}
	beforeBuildTicks() {
		this._callHooks("beforeBuildTicks");
	}
	buildTicks() {
		return [];
	}
	afterBuildTicks() {
		this._callHooks("afterBuildTicks");
	}
	beforeTickToLabelConversion() {
		callback(this.options.beforeTickToLabelConversion, [this]);
	}
	generateTickLabels(ticks) {
		const tickOpts = this.options.ticks;
		let i, ilen, tick;
		for (i = 0, ilen = ticks.length; i < ilen; i++) {
			tick = ticks[i];
			tick.label = callback(tickOpts.callback, [
				tick.value,
				i,
				ticks
			], this);
		}
	}
	afterTickToLabelConversion() {
		callback(this.options.afterTickToLabelConversion, [this]);
	}
	beforeCalculateLabelRotation() {
		callback(this.options.beforeCalculateLabelRotation, [this]);
	}
	calculateLabelRotation() {
		const options = this.options;
		const tickOpts = options.ticks;
		const numTicks = getTicksLimit(this.ticks.length, options.ticks.maxTicksLimit);
		const minRotation = tickOpts.minRotation || 0;
		const maxRotation = tickOpts.maxRotation;
		let labelRotation = minRotation;
		let tickWidth, maxHeight, maxLabelDiagonal;
		if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
			this.labelRotation = minRotation;
			return;
		}
		const labelSizes = this._getLabelSizes();
		const maxLabelWidth = labelSizes.widest.width;
		const maxLabelHeight = labelSizes.highest.height;
		const maxWidth = _limitValue(this.chart.width - maxLabelWidth, 0, this.maxWidth);
		tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
		if (maxLabelWidth + 6 > tickWidth) {
			tickWidth = maxWidth / (numTicks - (options.offset ? .5 : 1));
			maxHeight = this.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
			maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
			labelRotation = toDegrees(Math.min(Math.asin(_limitValue((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin(_limitValue(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin(_limitValue(maxLabelHeight / maxLabelDiagonal, -1, 1))));
			labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
		}
		this.labelRotation = labelRotation;
	}
	afterCalculateLabelRotation() {
		callback(this.options.afterCalculateLabelRotation, [this]);
	}
	afterAutoSkip() {}
	beforeFit() {
		callback(this.options.beforeFit, [this]);
	}
	fit() {
		const minSize = {
			width: 0,
			height: 0
		};
		const { chart, options: { ticks: tickOpts, title: titleOpts, grid: gridOpts } } = this;
		const display = this._isVisible();
		const isHorizontal = this.isHorizontal();
		if (display) {
			const titleHeight = getTitleHeight(titleOpts, chart.options.font);
			if (isHorizontal) {
				minSize.width = this.maxWidth;
				minSize.height = getTickMarkLength(gridOpts) + titleHeight;
			} else {
				minSize.height = this.maxHeight;
				minSize.width = getTickMarkLength(gridOpts) + titleHeight;
			}
			if (tickOpts.display && this.ticks.length) {
				const { first, last, widest, highest } = this._getLabelSizes();
				const tickPadding = tickOpts.padding * 2;
				const angleRadians = toRadians(this.labelRotation);
				const cos = Math.cos(angleRadians);
				const sin = Math.sin(angleRadians);
				if (isHorizontal) {
					const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
					minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
				} else {
					const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
					minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
				}
				this._calculatePadding(first, last, sin, cos);
			}
		}
		this._handleMargins();
		if (isHorizontal) {
			this.width = this._length = chart.width - this._margins.left - this._margins.right;
			this.height = minSize.height;
		} else {
			this.width = minSize.width;
			this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
		}
	}
	_calculatePadding(first, last, sin, cos) {
		const { ticks: { align, padding }, position } = this.options;
		const isRotated = this.labelRotation !== 0;
		const labelsBelowTicks = position !== "top" && this.axis === "x";
		if (this.isHorizontal()) {
			const offsetLeft = this.getPixelForTick(0) - this.left;
			const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
			let paddingLeft = 0;
			let paddingRight = 0;
			if (isRotated) if (labelsBelowTicks) {
				paddingLeft = cos * first.width;
				paddingRight = sin * last.height;
			} else {
				paddingLeft = sin * first.height;
				paddingRight = cos * last.width;
			}
			else if (align === "start") paddingRight = last.width;
			else if (align === "end") paddingLeft = first.width;
			else if (align !== "inner") {
				paddingLeft = first.width / 2;
				paddingRight = last.width / 2;
			}
			this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
			this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
		} else {
			let paddingTop = last.height / 2;
			let paddingBottom = first.height / 2;
			if (align === "start") {
				paddingTop = 0;
				paddingBottom = first.height;
			} else if (align === "end") {
				paddingTop = last.height;
				paddingBottom = 0;
			}
			this.paddingTop = paddingTop + padding;
			this.paddingBottom = paddingBottom + padding;
		}
	}
	_handleMargins() {
		if (this._margins) {
			this._margins.left = Math.max(this.paddingLeft, this._margins.left);
			this._margins.top = Math.max(this.paddingTop, this._margins.top);
			this._margins.right = Math.max(this.paddingRight, this._margins.right);
			this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
		}
	}
	afterFit() {
		callback(this.options.afterFit, [this]);
	}
	isHorizontal() {
		const { axis, position } = this.options;
		return position === "top" || position === "bottom" || axis === "x";
	}
	isFullSize() {
		return this.options.fullSize;
	}
	_convertTicksToLabels(ticks) {
		this.beforeTickToLabelConversion();
		this.generateTickLabels(ticks);
		let i, ilen;
		for (i = 0, ilen = ticks.length; i < ilen; i++) if (isNullOrUndef(ticks[i].label)) {
			ticks.splice(i, 1);
			ilen--;
			i--;
		}
		this.afterTickToLabelConversion();
	}
	_getLabelSizes() {
		let labelSizes = this._labelSizes;
		if (!labelSizes) {
			const sampleSize = this.options.ticks.sampleSize;
			let ticks = this.ticks;
			if (sampleSize < ticks.length) ticks = sample(ticks, sampleSize);
			this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length, this.options.ticks.maxTicksLimit);
		}
		return labelSizes;
	}
	_computeLabelSizes(ticks, length, maxTicksLimit) {
		const { ctx, _longestTextCache: caches } = this;
		const widths = [];
		const heights = [];
		const increment = Math.floor(length / getTicksLimit(length, maxTicksLimit));
		let widestLabelSize = 0;
		let highestLabelSize = 0;
		let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
		for (i = 0; i < length; i += increment) {
			label = ticks[i].label;
			tickFont = this._resolveTickFontOptions(i);
			ctx.font = fontString = tickFont.string;
			cache = caches[fontString] = caches[fontString] || {
				data: {},
				gc: []
			};
			lineHeight = tickFont.lineHeight;
			width = height = 0;
			if (!isNullOrUndef(label) && !isArray(label)) {
				width = _measureText(ctx, cache.data, cache.gc, width, label);
				height = lineHeight;
			} else if (isArray(label)) for (j = 0, jlen = label.length; j < jlen; ++j) {
				nestedLabel = label[j];
				if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
					width = _measureText(ctx, cache.data, cache.gc, width, nestedLabel);
					height += lineHeight;
				}
			}
			widths.push(width);
			heights.push(height);
			widestLabelSize = Math.max(width, widestLabelSize);
			highestLabelSize = Math.max(height, highestLabelSize);
		}
		garbageCollect(caches, length);
		const widest = widths.indexOf(widestLabelSize);
		const highest = heights.indexOf(highestLabelSize);
		const valueAt = (idx) => ({
			width: widths[idx] || 0,
			height: heights[idx] || 0
		});
		return {
			first: valueAt(0),
			last: valueAt(length - 1),
			widest: valueAt(widest),
			highest: valueAt(highest),
			widths,
			heights
		};
	}
	getLabelForValue(value) {
		return value;
	}
	getPixelForValue(value, index) {
		return NaN;
	}
	getValueForPixel(pixel) {}
	getPixelForTick(index) {
		const ticks = this.ticks;
		if (index < 0 || index > ticks.length - 1) return null;
		return this.getPixelForValue(ticks[index].value);
	}
	getPixelForDecimal(decimal) {
		if (this._reversePixels) decimal = 1 - decimal;
		const pixel = this._startPixel + decimal * this._length;
		return _int16Range(this._alignToPixels ? _alignPixel(this.chart, pixel, 0) : pixel);
	}
	getDecimalForPixel(pixel) {
		const decimal = (pixel - this._startPixel) / this._length;
		return this._reversePixels ? 1 - decimal : decimal;
	}
	getBasePixel() {
		return this.getPixelForValue(this.getBaseValue());
	}
	getBaseValue() {
		const { min, max } = this;
		return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
	}
	getContext(index) {
		const ticks = this.ticks || [];
		if (index >= 0 && index < ticks.length) {
			const tick = ticks[index];
			return tick.$context || (tick.$context = createTickContext(this.getContext(), index, tick));
		}
		return this.$context || (this.$context = createScaleContext(this.chart.getContext(), this));
	}
	_tickSize() {
		const optionTicks = this.options.ticks;
		const rot = toRadians(this.labelRotation);
		const cos = Math.abs(Math.cos(rot));
		const sin = Math.abs(Math.sin(rot));
		const labelSizes = this._getLabelSizes();
		const padding = optionTicks.autoSkipPadding || 0;
		const w = labelSizes ? labelSizes.widest.width + padding : 0;
		const h = labelSizes ? labelSizes.highest.height + padding : 0;
		return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
	}
	_isVisible() {
		const display = this.options.display;
		if (display !== "auto") return !!display;
		return this.getMatchingVisibleMetas().length > 0;
	}
	_computeGridLineItems(chartArea) {
		const axis = this.axis;
		const chart = this.chart;
		const options = this.options;
		const { grid, position, border } = options;
		const offset = grid.offset;
		const isHorizontal = this.isHorizontal();
		const ticksLength = this.ticks.length + (offset ? 1 : 0);
		const tl = getTickMarkLength(grid);
		const items = [];
		const borderOpts = border.setContext(this.getContext());
		const axisWidth = borderOpts.display ? borderOpts.width : 0;
		const axisHalfWidth = axisWidth / 2;
		const alignBorderValue = function(pixel) {
			return _alignPixel(chart, pixel, axisWidth);
		};
		let borderValue, i, lineValue, alignedLineValue;
		let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
		if (position === "top") {
			borderValue = alignBorderValue(this.bottom);
			ty1 = this.bottom - tl;
			ty2 = borderValue - axisHalfWidth;
			y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
			y2 = chartArea.bottom;
		} else if (position === "bottom") {
			borderValue = alignBorderValue(this.top);
			y1 = chartArea.top;
			y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
			ty1 = borderValue + axisHalfWidth;
			ty2 = this.top + tl;
		} else if (position === "left") {
			borderValue = alignBorderValue(this.right);
			tx1 = this.right - tl;
			tx2 = borderValue - axisHalfWidth;
			x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
			x2 = chartArea.right;
		} else if (position === "right") {
			borderValue = alignBorderValue(this.left);
			x1 = chartArea.left;
			x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
			tx1 = borderValue + axisHalfWidth;
			tx2 = this.left + tl;
		} else if (axis === "x") {
			if (position === "center") borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + .5);
			else if (isObject(position)) {
				const positionAxisID = Object.keys(position)[0];
				const value = position[positionAxisID];
				borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
			}
			y1 = chartArea.top;
			y2 = chartArea.bottom;
			ty1 = borderValue + axisHalfWidth;
			ty2 = ty1 + tl;
		} else if (axis === "y") {
			if (position === "center") borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
			else if (isObject(position)) {
				const positionAxisID = Object.keys(position)[0];
				const value = position[positionAxisID];
				borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
			}
			tx1 = borderValue - axisHalfWidth;
			tx2 = tx1 - tl;
			x1 = chartArea.left;
			x2 = chartArea.right;
		}
		const limit = valueOrDefault(options.ticks.maxTicksLimit, ticksLength);
		const step = Math.max(1, Math.ceil(ticksLength / limit));
		for (i = 0; i < ticksLength; i += step) {
			const context = this.getContext(i);
			const optsAtIndex = grid.setContext(context);
			const optsAtIndexBorder = border.setContext(context);
			const lineWidth = optsAtIndex.lineWidth;
			const lineColor = optsAtIndex.color;
			const borderDash = optsAtIndexBorder.dash || [];
			const borderDashOffset = optsAtIndexBorder.dashOffset;
			const tickWidth = optsAtIndex.tickWidth;
			const tickColor = optsAtIndex.tickColor;
			const tickBorderDash = optsAtIndex.tickBorderDash || [];
			const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
			lineValue = getPixelForGridLine(this, i, offset);
			if (lineValue === void 0) continue;
			alignedLineValue = _alignPixel(chart, lineValue, lineWidth);
			if (isHorizontal) tx1 = tx2 = x1 = x2 = alignedLineValue;
			else ty1 = ty2 = y1 = y2 = alignedLineValue;
			items.push({
				tx1,
				ty1,
				tx2,
				ty2,
				x1,
				y1,
				x2,
				y2,
				width: lineWidth,
				color: lineColor,
				borderDash,
				borderDashOffset,
				tickWidth,
				tickColor,
				tickBorderDash,
				tickBorderDashOffset
			});
		}
		this._ticksLength = ticksLength;
		this._borderValue = borderValue;
		return items;
	}
	_computeLabelItems(chartArea) {
		const axis = this.axis;
		const options = this.options;
		const { position, ticks: optionTicks } = options;
		const isHorizontal = this.isHorizontal();
		const ticks = this.ticks;
		const { align, crossAlign, padding, mirror } = optionTicks;
		const tl = getTickMarkLength(options.grid);
		const tickAndPadding = tl + padding;
		const hTickAndPadding = mirror ? -padding : tickAndPadding;
		const rotation = -toRadians(this.labelRotation);
		const items = [];
		let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
		let textBaseline = "middle";
		if (position === "top") {
			y = this.bottom - hTickAndPadding;
			textAlign = this._getXAxisLabelAlignment();
		} else if (position === "bottom") {
			y = this.top + hTickAndPadding;
			textAlign = this._getXAxisLabelAlignment();
		} else if (position === "left") {
			const ret = this._getYAxisLabelAlignment(tl);
			textAlign = ret.textAlign;
			x = ret.x;
		} else if (position === "right") {
			const ret = this._getYAxisLabelAlignment(tl);
			textAlign = ret.textAlign;
			x = ret.x;
		} else if (axis === "x") {
			if (position === "center") y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
			else if (isObject(position)) {
				const positionAxisID = Object.keys(position)[0];
				const value = position[positionAxisID];
				y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
			}
			textAlign = this._getXAxisLabelAlignment();
		} else if (axis === "y") {
			if (position === "center") x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
			else if (isObject(position)) {
				const positionAxisID = Object.keys(position)[0];
				const value = position[positionAxisID];
				x = this.chart.scales[positionAxisID].getPixelForValue(value);
			}
			textAlign = this._getYAxisLabelAlignment(tl).textAlign;
		}
		if (axis === "y") {
			if (align === "start") textBaseline = "top";
			else if (align === "end") textBaseline = "bottom";
		}
		const labelSizes = this._getLabelSizes();
		for (i = 0, ilen = ticks.length; i < ilen; ++i) {
			tick = ticks[i];
			label = tick.label;
			const optsAtIndex = optionTicks.setContext(this.getContext(i));
			pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
			font = this._resolveTickFontOptions(i);
			lineHeight = font.lineHeight;
			lineCount = isArray(label) ? label.length : 1;
			const halfCount = lineCount / 2;
			const color = optsAtIndex.color;
			const strokeColor = optsAtIndex.textStrokeColor;
			const strokeWidth = optsAtIndex.textStrokeWidth;
			let tickTextAlign = textAlign;
			if (isHorizontal) {
				x = pixel;
				if (textAlign === "inner") if (i === ilen - 1) tickTextAlign = !this.options.reverse ? "right" : "left";
				else if (i === 0) tickTextAlign = !this.options.reverse ? "left" : "right";
				else tickTextAlign = "center";
				if (position === "top") if (crossAlign === "near" || rotation !== 0) textOffset = -lineCount * lineHeight + lineHeight / 2;
				else if (crossAlign === "center") textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
				else textOffset = -labelSizes.highest.height + lineHeight / 2;
				else if (crossAlign === "near" || rotation !== 0) textOffset = lineHeight / 2;
				else if (crossAlign === "center") textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
				else textOffset = labelSizes.highest.height - lineCount * lineHeight;
				if (mirror) textOffset *= -1;
				if (rotation !== 0 && !optsAtIndex.showLabelBackdrop) x += lineHeight / 2 * Math.sin(rotation);
			} else {
				y = pixel;
				textOffset = (1 - lineCount) * lineHeight / 2;
			}
			let backdrop;
			if (optsAtIndex.showLabelBackdrop) {
				const labelPadding = toPadding(optsAtIndex.backdropPadding);
				const height = labelSizes.heights[i];
				const width = labelSizes.widths[i];
				let top = textOffset - labelPadding.top;
				let left = 0 - labelPadding.left;
				switch (textBaseline) {
					case "middle":
						top -= height / 2;
						break;
					case "bottom":
						top -= height;
						break;
				}
				switch (textAlign) {
					case "center":
						left -= width / 2;
						break;
					case "right":
						left -= width;
						break;
					case "inner":
						if (i === ilen - 1) left -= width;
						else if (i > 0) left -= width / 2;
						break;
				}
				backdrop = {
					left,
					top,
					width: width + labelPadding.width,
					height: height + labelPadding.height,
					color: optsAtIndex.backdropColor
				};
			}
			items.push({
				label,
				font,
				textOffset,
				options: {
					rotation,
					color,
					strokeColor,
					strokeWidth,
					textAlign: tickTextAlign,
					textBaseline,
					translation: [x, y],
					backdrop
				}
			});
		}
		return items;
	}
	_getXAxisLabelAlignment() {
		const { position, ticks } = this.options;
		if (-toRadians(this.labelRotation)) return position === "top" ? "left" : "right";
		let align = "center";
		if (ticks.align === "start") align = "left";
		else if (ticks.align === "end") align = "right";
		else if (ticks.align === "inner") align = "inner";
		return align;
	}
	_getYAxisLabelAlignment(tl) {
		const { position, ticks: { crossAlign, mirror, padding } } = this.options;
		const labelSizes = this._getLabelSizes();
		const tickAndPadding = tl + padding;
		const widest = labelSizes.widest.width;
		let textAlign;
		let x;
		if (position === "left") if (mirror) {
			x = this.right + padding;
			if (crossAlign === "near") textAlign = "left";
			else if (crossAlign === "center") {
				textAlign = "center";
				x += widest / 2;
			} else {
				textAlign = "right";
				x += widest;
			}
		} else {
			x = this.right - tickAndPadding;
			if (crossAlign === "near") textAlign = "right";
			else if (crossAlign === "center") {
				textAlign = "center";
				x -= widest / 2;
			} else {
				textAlign = "left";
				x = this.left;
			}
		}
		else if (position === "right") if (mirror) {
			x = this.left + padding;
			if (crossAlign === "near") textAlign = "right";
			else if (crossAlign === "center") {
				textAlign = "center";
				x -= widest / 2;
			} else {
				textAlign = "left";
				x -= widest;
			}
		} else {
			x = this.left + tickAndPadding;
			if (crossAlign === "near") textAlign = "left";
			else if (crossAlign === "center") {
				textAlign = "center";
				x += widest / 2;
			} else {
				textAlign = "right";
				x = this.right;
			}
		}
		else textAlign = "right";
		return {
			textAlign,
			x
		};
	}
	_computeLabelArea() {
		if (this.options.ticks.mirror) return;
		const chart = this.chart;
		const position = this.options.position;
		if (position === "left" || position === "right") return {
			top: 0,
			left: this.left,
			bottom: chart.height,
			right: this.right
		};
		if (position === "top" || position === "bottom") return {
			top: this.top,
			left: 0,
			bottom: this.bottom,
			right: chart.width
		};
	}
	drawBackground() {
		const { ctx, options: { backgroundColor }, left, top, width, height } = this;
		if (backgroundColor) {
			ctx.save();
			ctx.fillStyle = backgroundColor;
			ctx.fillRect(left, top, width, height);
			ctx.restore();
		}
	}
	getLineWidthForValue(value) {
		const grid = this.options.grid;
		if (!this._isVisible() || !grid.display) return 0;
		const index = this.ticks.findIndex((t) => t.value === value);
		if (index >= 0) return grid.setContext(this.getContext(index)).lineWidth;
		return 0;
	}
	drawGrid(chartArea) {
		const grid = this.options.grid;
		const ctx = this.ctx;
		const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
		let i, ilen;
		const drawLine = (p1, p2, style) => {
			if (!style.width || !style.color) return;
			ctx.save();
			ctx.lineWidth = style.width;
			ctx.strokeStyle = style.color;
			ctx.setLineDash(style.borderDash || []);
			ctx.lineDashOffset = style.borderDashOffset;
			ctx.beginPath();
			ctx.moveTo(p1.x, p1.y);
			ctx.lineTo(p2.x, p2.y);
			ctx.stroke();
			ctx.restore();
		};
		if (grid.display) for (i = 0, ilen = items.length; i < ilen; ++i) {
			const item = items[i];
			if (grid.drawOnChartArea) drawLine({
				x: item.x1,
				y: item.y1
			}, {
				x: item.x2,
				y: item.y2
			}, item);
			if (grid.drawTicks) drawLine({
				x: item.tx1,
				y: item.ty1
			}, {
				x: item.tx2,
				y: item.ty2
			}, {
				color: item.tickColor,
				width: item.tickWidth,
				borderDash: item.tickBorderDash,
				borderDashOffset: item.tickBorderDashOffset
			});
		}
	}
	drawBorder() {
		const { chart, ctx, options: { border, grid } } = this;
		const borderOpts = border.setContext(this.getContext());
		const axisWidth = border.display ? borderOpts.width : 0;
		if (!axisWidth) return;
		const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
		const borderValue = this._borderValue;
		let x1, x2, y1, y2;
		if (this.isHorizontal()) {
			x1 = _alignPixel(chart, this.left, axisWidth) - axisWidth / 2;
			x2 = _alignPixel(chart, this.right, lastLineWidth) + lastLineWidth / 2;
			y1 = y2 = borderValue;
		} else {
			y1 = _alignPixel(chart, this.top, axisWidth) - axisWidth / 2;
			y2 = _alignPixel(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
			x1 = x2 = borderValue;
		}
		ctx.save();
		ctx.lineWidth = borderOpts.width;
		ctx.strokeStyle = borderOpts.color;
		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.stroke();
		ctx.restore();
	}
	drawLabels(chartArea) {
		if (!this.options.ticks.display) return;
		const ctx = this.ctx;
		const area = this._computeLabelArea();
		if (area) clipArea(ctx, area);
		const items = this.getLabelItems(chartArea);
		for (const item of items) {
			const renderTextOptions = item.options;
			const tickFont = item.font;
			const label = item.label;
			const y = item.textOffset;
			renderText(ctx, label, 0, y, tickFont, renderTextOptions);
		}
		if (area) unclipArea(ctx);
	}
	drawTitle() {
		const { ctx, options: { position, title, reverse } } = this;
		if (!title.display) return;
		const font = toFont(title.font);
		const padding = toPadding(title.padding);
		const align = title.align;
		let offset = font.lineHeight / 2;
		if (position === "bottom" || position === "center" || isObject(position)) {
			offset += padding.bottom;
			if (isArray(title.text)) offset += font.lineHeight * (title.text.length - 1);
		} else offset += padding.top;
		const { titleX, titleY, maxWidth, rotation } = titleArgs(this, offset, position, align);
		renderText(ctx, title.text, 0, 0, font, {
			color: title.color,
			maxWidth,
			rotation,
			textAlign: titleAlign(align, position, reverse),
			textBaseline: "middle",
			translation: [titleX, titleY]
		});
	}
	draw(chartArea) {
		if (!this._isVisible()) return;
		this.drawBackground();
		this.drawGrid(chartArea);
		this.drawBorder();
		this.drawTitle();
		this.drawLabels(chartArea);
	}
	_layers() {
		const opts = this.options;
		const tz = opts.ticks && opts.ticks.z || 0;
		const gz = valueOrDefault(opts.grid && opts.grid.z, -1);
		const bz = valueOrDefault(opts.border && opts.border.z, 0);
		if (!this._isVisible() || this.draw !== Scale.prototype.draw) return [{
			z: tz,
			draw: (chartArea) => {
				this.draw(chartArea);
			}
		}];
		return [
			{
				z: gz,
				draw: (chartArea) => {
					this.drawBackground();
					this.drawGrid(chartArea);
					this.drawTitle();
				}
			},
			{
				z: bz,
				draw: () => {
					this.drawBorder();
				}
			},
			{
				z: tz,
				draw: (chartArea) => {
					this.drawLabels(chartArea);
				}
			}
		];
	}
	getMatchingVisibleMetas(type) {
		const metas = this.chart.getSortedVisibleDatasetMetas();
		const axisID = this.axis + "AxisID";
		const result = [];
		let i, ilen;
		for (i = 0, ilen = metas.length; i < ilen; ++i) {
			const meta = metas[i];
			if (meta[axisID] === this.id && (!type || meta.type === type)) result.push(meta);
		}
		return result;
	}
	_resolveTickFontOptions(index) {
		return toFont(this.options.ticks.setContext(this.getContext(index)).font);
	}
	_maxDigits() {
		const fontSize = this._resolveTickFontOptions(0).lineHeight;
		return (this.isHorizontal() ? this.width : this.height) / fontSize;
	}
};
var TypedRegistry = class {
	constructor(type, scope, override) {
		this.type = type;
		this.scope = scope;
		this.override = override;
		this.items = Object.create(null);
	}
	isForType(type) {
		return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
	}
	register(item) {
		const proto = Object.getPrototypeOf(item);
		let parentScope;
		if (isIChartComponent(proto)) parentScope = this.register(proto);
		const items = this.items;
		const id = item.id;
		const scope = this.scope + "." + id;
		if (!id) throw new Error("class does not have id: " + item);
		if (id in items) return scope;
		items[id] = item;
		registerDefaults(item, scope, parentScope);
		if (this.override) defaults.override(item.id, item.overrides);
		return scope;
	}
	get(id) {
		return this.items[id];
	}
	unregister(item) {
		const items = this.items;
		const id = item.id;
		const scope = this.scope;
		if (id in items) delete items[id];
		if (scope && id in defaults[scope]) {
			delete defaults[scope][id];
			if (this.override) delete overrides[id];
		}
	}
};
function registerDefaults(item, scope, parentScope) {
	const itemDefaults = merge(Object.create(null), [
		parentScope ? defaults.get(parentScope) : {},
		defaults.get(scope),
		item.defaults
	]);
	defaults.set(scope, itemDefaults);
	if (item.defaultRoutes) routeDefaults(scope, item.defaultRoutes);
	if (item.descriptors) defaults.describe(scope, item.descriptors);
}
function routeDefaults(scope, routes) {
	Object.keys(routes).forEach((property) => {
		const propertyParts = property.split(".");
		const sourceName = propertyParts.pop();
		const sourceScope = [scope].concat(propertyParts).join(".");
		const parts = routes[property].split(".");
		const targetName = parts.pop();
		const targetScope = parts.join(".");
		defaults.route(sourceScope, sourceName, targetScope, targetName);
	});
}
function isIChartComponent(proto) {
	return "id" in proto && "defaults" in proto;
}
var Registry = class {
	constructor() {
		this.controllers = new TypedRegistry(DatasetController, "datasets", true);
		this.elements = new TypedRegistry(Element, "elements");
		this.plugins = new TypedRegistry(Object, "plugins");
		this.scales = new TypedRegistry(Scale, "scales");
		this._typedRegistries = [
			this.controllers,
			this.scales,
			this.elements
		];
	}
	add(...args) {
		this._each("register", args);
	}
	remove(...args) {
		this._each("unregister", args);
	}
	addControllers(...args) {
		this._each("register", args, this.controllers);
	}
	addElements(...args) {
		this._each("register", args, this.elements);
	}
	addPlugins(...args) {
		this._each("register", args, this.plugins);
	}
	addScales(...args) {
		this._each("register", args, this.scales);
	}
	getController(id) {
		return this._get(id, this.controllers, "controller");
	}
	getElement(id) {
		return this._get(id, this.elements, "element");
	}
	getPlugin(id) {
		return this._get(id, this.plugins, "plugin");
	}
	getScale(id) {
		return this._get(id, this.scales, "scale");
	}
	removeControllers(...args) {
		this._each("unregister", args, this.controllers);
	}
	removeElements(...args) {
		this._each("unregister", args, this.elements);
	}
	removePlugins(...args) {
		this._each("unregister", args, this.plugins);
	}
	removeScales(...args) {
		this._each("unregister", args, this.scales);
	}
	_each(method, args, typedRegistry) {
		[...args].forEach((arg) => {
			const reg = typedRegistry || this._getRegistryForType(arg);
			if (typedRegistry || reg.isForType(arg) || reg === this.plugins && arg.id) this._exec(method, reg, arg);
			else each(arg, (item) => {
				const itemReg = typedRegistry || this._getRegistryForType(item);
				this._exec(method, itemReg, item);
			});
		});
	}
	_exec(method, registry, component) {
		const camelMethod = _capitalize(method);
		callback(component["before" + camelMethod], [], component);
		registry[method](component);
		callback(component["after" + camelMethod], [], component);
	}
	_getRegistryForType(type) {
		for (let i = 0; i < this._typedRegistries.length; i++) {
			const reg = this._typedRegistries[i];
			if (reg.isForType(type)) return reg;
		}
		return this.plugins;
	}
	_get(id, typedRegistry, type) {
		const item = typedRegistry.get(id);
		if (item === void 0) throw new Error("\"" + id + "\" is not a registered " + type + ".");
		return item;
	}
};
var registry = /* #__PURE__ */ new Registry();
var PluginService = class {
	constructor() {
		this._init = void 0;
	}
	notify(chart, hook, args, filter) {
		if (hook === "beforeInit") {
			this._init = this._createDescriptors(chart, true);
			this._notify(this._init, chart, "install");
		}
		if (this._init === void 0) return;
		const descriptors = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
		const result = this._notify(descriptors, chart, hook, args);
		if (hook === "afterDestroy") {
			this._notify(descriptors, chart, "stop");
			this._notify(this._init, chart, "uninstall");
			this._init = void 0;
		}
		return result;
	}
	_notify(descriptors, chart, hook, args) {
		args = args || {};
		for (const descriptor of descriptors) {
			const plugin = descriptor.plugin;
			const method = plugin[hook];
			if (callback(method, [
				chart,
				args,
				descriptor.options
			], plugin) === false && args.cancelable) return false;
		}
		return true;
	}
	invalidate() {
		if (!isNullOrUndef(this._cache)) {
			this._oldCache = this._cache;
			this._cache = void 0;
		}
	}
	_descriptors(chart) {
		if (this._cache) return this._cache;
		const descriptors = this._cache = this._createDescriptors(chart);
		this._notifyStateChanges(chart);
		return descriptors;
	}
	_createDescriptors(chart, all) {
		const config = chart && chart.config;
		const options = valueOrDefault(config.options && config.options.plugins, {});
		const plugins = allPlugins(config);
		return options === false && !all ? [] : createDescriptors(chart, plugins, options, all);
	}
	_notifyStateChanges(chart) {
		const previousDescriptors = this._oldCache || [];
		const descriptors = this._cache;
		const diff = (a, b) => a.filter((x) => !b.some((y) => x.plugin.id === y.plugin.id));
		this._notify(diff(previousDescriptors, descriptors), chart, "stop");
		this._notify(diff(descriptors, previousDescriptors), chart, "start");
	}
};
function allPlugins(config) {
	const localIds = {};
	const plugins = [];
	const keys = Object.keys(registry.plugins.items);
	for (let i = 0; i < keys.length; i++) plugins.push(registry.getPlugin(keys[i]));
	const local = config.plugins || [];
	for (let i = 0; i < local.length; i++) {
		const plugin = local[i];
		if (plugins.indexOf(plugin) === -1) {
			plugins.push(plugin);
			localIds[plugin.id] = true;
		}
	}
	return {
		plugins,
		localIds
	};
}
function getOpts(options, all) {
	if (!all && options === false) return null;
	if (options === true) return {};
	return options;
}
function createDescriptors(chart, { plugins, localIds }, options, all) {
	const result = [];
	const context = chart.getContext();
	for (const plugin of plugins) {
		const id = plugin.id;
		const opts = getOpts(options[id], all);
		if (opts === null) continue;
		result.push({
			plugin,
			options: pluginOpts(chart.config, {
				plugin,
				local: localIds[id]
			}, opts, context)
		});
	}
	return result;
}
function pluginOpts(config, { plugin, local }, opts, context) {
	const keys = config.pluginScopeKeys(plugin);
	const scopes = config.getOptionScopes(opts, keys);
	if (local && plugin.defaults) scopes.push(plugin.defaults);
	return config.createResolver(scopes, context, [""], {
		scriptable: false,
		indexable: false,
		allKeys: true
	});
}
function getIndexAxis(type, options) {
	const datasetDefaults = defaults.datasets[type] || {};
	return ((options.datasets || {})[type] || {}).indexAxis || options.indexAxis || datasetDefaults.indexAxis || "x";
}
function getAxisFromDefaultScaleID(id, indexAxis) {
	let axis = id;
	if (id === "_index_") axis = indexAxis;
	else if (id === "_value_") axis = indexAxis === "x" ? "y" : "x";
	return axis;
}
function getDefaultScaleIDFromAxis(axis, indexAxis) {
	return axis === indexAxis ? "_index_" : "_value_";
}
function idMatchesAxis(id) {
	if (id === "x" || id === "y" || id === "r") return id;
}
function axisFromPosition(position) {
	if (position === "top" || position === "bottom") return "x";
	if (position === "left" || position === "right") return "y";
}
function determineAxis(id, ...scaleOptions) {
	if (idMatchesAxis(id)) return id;
	for (const opts of scaleOptions) {
		const axis = opts.axis || axisFromPosition(opts.position) || id.length > 1 && idMatchesAxis(id[0].toLowerCase());
		if (axis) return axis;
	}
	throw new Error(`Cannot determine type of '${id}' axis. Please provide 'axis' or 'position' option.`);
}
function getAxisFromDataset(id, axis, dataset) {
	if (dataset[axis + "AxisID"] === id) return { axis };
}
function retrieveAxisFromDatasets(id, config) {
	if (config.data && config.data.datasets) {
		const boundDs = config.data.datasets.filter((d) => d.xAxisID === id || d.yAxisID === id);
		if (boundDs.length) return getAxisFromDataset(id, "x", boundDs[0]) || getAxisFromDataset(id, "y", boundDs[0]);
	}
	return {};
}
function mergeScaleConfig(config, options) {
	const chartDefaults = overrides[config.type] || { scales: {} };
	const configScales = options.scales || {};
	const chartIndexAxis = getIndexAxis(config.type, options);
	const scales = Object.create(null);
	Object.keys(configScales).forEach((id) => {
		const scaleConf = configScales[id];
		if (!isObject(scaleConf)) return console.error(`Invalid scale configuration for scale: ${id}`);
		if (scaleConf._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
		const axis = determineAxis(id, scaleConf, retrieveAxisFromDatasets(id, config), defaults.scales[scaleConf.type]);
		const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
		const defaultScaleOptions = chartDefaults.scales || {};
		scales[id] = mergeIf(Object.create(null), [
			{ axis },
			scaleConf,
			defaultScaleOptions[axis],
			defaultScaleOptions[defaultId]
		]);
	});
	config.data.datasets.forEach((dataset) => {
		const type = dataset.type || config.type;
		const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
		const defaultScaleOptions = (overrides[type] || {}).scales || {};
		Object.keys(defaultScaleOptions).forEach((defaultID) => {
			const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
			const id = dataset[axis + "AxisID"] || axis;
			scales[id] = scales[id] || Object.create(null);
			mergeIf(scales[id], [
				{ axis },
				configScales[id],
				defaultScaleOptions[defaultID]
			]);
		});
	});
	Object.keys(scales).forEach((key) => {
		const scale = scales[key];
		mergeIf(scale, [defaults.scales[scale.type], defaults.scale]);
	});
	return scales;
}
function initOptions(config) {
	const options = config.options || (config.options = {});
	options.plugins = valueOrDefault(options.plugins, {});
	options.scales = mergeScaleConfig(config, options);
}
function initData(data) {
	data = data || {};
	data.datasets = data.datasets || [];
	data.labels = data.labels || [];
	return data;
}
function initConfig(config) {
	config = config || {};
	config.data = initData(config.data);
	initOptions(config);
	return config;
}
var keyCache = /* @__PURE__ */ new Map();
var keysCached = /* @__PURE__ */ new Set();
function cachedKeys(cacheKey, generate) {
	let keys = keyCache.get(cacheKey);
	if (!keys) {
		keys = generate();
		keyCache.set(cacheKey, keys);
		keysCached.add(keys);
	}
	return keys;
}
var addIfFound = (set, obj, key) => {
	const opts = resolveObjectKey(obj, key);
	if (opts !== void 0) set.add(opts);
};
var Config = class {
	constructor(config) {
		this._config = initConfig(config);
		this._scopeCache = /* @__PURE__ */ new Map();
		this._resolverCache = /* @__PURE__ */ new Map();
	}
	get platform() {
		return this._config.platform;
	}
	get type() {
		return this._config.type;
	}
	set type(type) {
		this._config.type = type;
	}
	get data() {
		return this._config.data;
	}
	set data(data) {
		this._config.data = initData(data);
	}
	get options() {
		return this._config.options;
	}
	set options(options) {
		this._config.options = options;
	}
	get plugins() {
		return this._config.plugins;
	}
	update() {
		const config = this._config;
		this.clearCache();
		initOptions(config);
	}
	clearCache() {
		this._scopeCache.clear();
		this._resolverCache.clear();
	}
	datasetScopeKeys(datasetType) {
		return cachedKeys(datasetType, () => [[`datasets.${datasetType}`, ""]]);
	}
	datasetAnimationScopeKeys(datasetType, transition) {
		return cachedKeys(`${datasetType}.transition.${transition}`, () => [[`datasets.${datasetType}.transitions.${transition}`, `transitions.${transition}`], [`datasets.${datasetType}`, ""]]);
	}
	datasetElementScopeKeys(datasetType, elementType) {
		return cachedKeys(`${datasetType}-${elementType}`, () => [[
			`datasets.${datasetType}.elements.${elementType}`,
			`datasets.${datasetType}`,
			`elements.${elementType}`,
			""
		]]);
	}
	pluginScopeKeys(plugin) {
		const id = plugin.id;
		const type = this.type;
		return cachedKeys(`${type}-plugin-${id}`, () => [[`plugins.${id}`, ...plugin.additionalOptionScopes || []]]);
	}
	_cachedScopes(mainScope, resetCache) {
		const _scopeCache = this._scopeCache;
		let cache = _scopeCache.get(mainScope);
		if (!cache || resetCache) {
			cache = /* @__PURE__ */ new Map();
			_scopeCache.set(mainScope, cache);
		}
		return cache;
	}
	getOptionScopes(mainScope, keyLists, resetCache) {
		const { options, type } = this;
		const cache = this._cachedScopes(mainScope, resetCache);
		const cached = cache.get(keyLists);
		if (cached) return cached;
		const scopes = /* @__PURE__ */ new Set();
		keyLists.forEach((keys) => {
			if (mainScope) {
				scopes.add(mainScope);
				keys.forEach((key) => addIfFound(scopes, mainScope, key));
			}
			keys.forEach((key) => addIfFound(scopes, options, key));
			keys.forEach((key) => addIfFound(scopes, overrides[type] || {}, key));
			keys.forEach((key) => addIfFound(scopes, defaults, key));
			keys.forEach((key) => addIfFound(scopes, descriptors, key));
		});
		const array = Array.from(scopes);
		if (array.length === 0) array.push(Object.create(null));
		if (keysCached.has(keyLists)) cache.set(keyLists, array);
		return array;
	}
	chartOptionScopes() {
		const { options, type } = this;
		return [
			options,
			overrides[type] || {},
			defaults.datasets[type] || {},
			{ type },
			defaults,
			descriptors
		];
	}
	resolveNamedOptions(scopes, names, context, prefixes = [""]) {
		const result = { $shared: true };
		const { resolver, subPrefixes } = getResolver(this._resolverCache, scopes, prefixes);
		let options = resolver;
		if (needContext(resolver, names)) {
			result.$shared = false;
			context = isFunction(context) ? context() : context;
			const subResolver = this.createResolver(scopes, context, subPrefixes);
			options = _attachContext(resolver, context, subResolver);
		}
		for (const prop of names) result[prop] = options[prop];
		return result;
	}
	createResolver(scopes, context, prefixes = [""], descriptorDefaults) {
		const { resolver } = getResolver(this._resolverCache, scopes, prefixes);
		return isObject(context) ? _attachContext(resolver, context, void 0, descriptorDefaults) : resolver;
	}
};
function getResolver(resolverCache, scopes, prefixes) {
	let cache = resolverCache.get(scopes);
	if (!cache) {
		cache = /* @__PURE__ */ new Map();
		resolverCache.set(scopes, cache);
	}
	const cacheKey = prefixes.join();
	let cached = cache.get(cacheKey);
	if (!cached) {
		cached = {
			resolver: _createResolver(scopes, prefixes),
			subPrefixes: prefixes.filter((p) => !p.toLowerCase().includes("hover"))
		};
		cache.set(cacheKey, cached);
	}
	return cached;
}
var hasFunction = (value) => isObject(value) && Object.getOwnPropertyNames(value).some((key) => isFunction(value[key]));
function needContext(proxy, names) {
	const { isScriptable, isIndexable } = _descriptors(proxy);
	for (const prop of names) {
		const scriptable = isScriptable(prop);
		const indexable = isIndexable(prop);
		const value = (indexable || scriptable) && proxy[prop];
		if (scriptable && (isFunction(value) || hasFunction(value)) || indexable && isArray(value)) return true;
	}
	return false;
}
var version = "4.5.1";
var KNOWN_POSITIONS = [
	"top",
	"bottom",
	"left",
	"right",
	"chartArea"
];
function positionIsHorizontal(position, axis) {
	return position === "top" || position === "bottom" || KNOWN_POSITIONS.indexOf(position) === -1 && axis === "x";
}
function compare2Level(l1, l2) {
	return function(a, b) {
		return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
	};
}
function onAnimationsComplete(context) {
	const chart = context.chart;
	const animationOptions = chart.options.animation;
	chart.notifyPlugins("afterRender");
	callback(animationOptions && animationOptions.onComplete, [context], chart);
}
function onAnimationProgress(context) {
	const chart = context.chart;
	const animationOptions = chart.options.animation;
	callback(animationOptions && animationOptions.onProgress, [context], chart);
}
function getCanvas(item) {
	if (_isDomSupported() && typeof item === "string") item = document.getElementById(item);
	else if (item && item.length) item = item[0];
	if (item && item.canvas) item = item.canvas;
	return item;
}
var instances = {};
var getChart = (key) => {
	const canvas = getCanvas(key);
	return Object.values(instances).filter((c) => c.canvas === canvas).pop();
};
function moveNumericKeys(obj, start, move) {
	const keys = Object.keys(obj);
	for (const key of keys) {
		const intKey = +key;
		if (intKey >= start) {
			const value = obj[key];
			delete obj[key];
			if (move > 0 || intKey > start) obj[intKey + move] = value;
		}
	}
}
function determineLastEvent(e, lastEvent, inChartArea, isClick) {
	if (!inChartArea || e.type === "mouseout") return null;
	if (isClick) return lastEvent;
	return e;
}
var Chart$1 = class {
	static defaults = defaults;
	static instances = instances;
	static overrides = overrides;
	static registry = registry;
	static version = version;
	static getChart = getChart;
	static register(...items) {
		registry.add(...items);
		invalidatePlugins();
	}
	static unregister(...items) {
		registry.remove(...items);
		invalidatePlugins();
	}
	constructor(item, userConfig) {
		const config = this.config = new Config(userConfig);
		const initialCanvas = getCanvas(item);
		const existingChart = getChart(initialCanvas);
		if (existingChart) throw new Error("Canvas is already in use. Chart with ID '" + existingChart.id + "' must be destroyed before the canvas with ID '" + existingChart.canvas.id + "' can be reused.");
		const options = config.createResolver(config.chartOptionScopes(), this.getContext());
		this.platform = new (config.platform || (_detectPlatform(initialCanvas)))();
		this.platform.updateConfig(config);
		const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
		const canvas = context && context.canvas;
		const height = canvas && canvas.height;
		const width = canvas && canvas.width;
		this.id = uid();
		this.ctx = context;
		this.canvas = canvas;
		this.width = width;
		this.height = height;
		this._options = options;
		this._aspectRatio = this.aspectRatio;
		this._layers = [];
		this._metasets = [];
		this._stacks = void 0;
		this.boxes = [];
		this.currentDevicePixelRatio = void 0;
		this.chartArea = void 0;
		this._active = [];
		this._lastEvent = void 0;
		this._listeners = {};
		this._responsiveListeners = void 0;
		this._sortedMetasets = [];
		this.scales = {};
		this._plugins = new PluginService();
		this.$proxies = {};
		this._hiddenIndices = {};
		this.attached = false;
		this._animationsDisabled = void 0;
		this.$context = void 0;
		this._doResize = debounce((mode) => this.update(mode), options.resizeDelay || 0);
		this._dataChanges = [];
		instances[this.id] = this;
		if (!context || !canvas) {
			console.error("Failed to create chart: can't acquire context from the given item");
			return;
		}
		animator.listen(this, "complete", onAnimationsComplete);
		animator.listen(this, "progress", onAnimationProgress);
		this._initialize();
		if (this.attached) this.update();
	}
	get aspectRatio() {
		const { options: { aspectRatio, maintainAspectRatio }, width, height, _aspectRatio } = this;
		if (!isNullOrUndef(aspectRatio)) return aspectRatio;
		if (maintainAspectRatio && _aspectRatio) return _aspectRatio;
		return height ? width / height : null;
	}
	get data() {
		return this.config.data;
	}
	set data(data) {
		this.config.data = data;
	}
	get options() {
		return this._options;
	}
	set options(options) {
		this.config.options = options;
	}
	get registry() {
		return registry;
	}
	_initialize() {
		this.notifyPlugins("beforeInit");
		if (this.options.responsive) this.resize();
		else retinaScale(this, this.options.devicePixelRatio);
		this.bindEvents();
		this.notifyPlugins("afterInit");
		return this;
	}
	clear() {
		clearCanvas(this.canvas, this.ctx);
		return this;
	}
	stop() {
		animator.stop(this);
		return this;
	}
	resize(width, height) {
		if (!animator.running(this)) this._resize(width, height);
		else this._resizeBeforeDraw = {
			width,
			height
		};
	}
	_resize(width, height) {
		const options = this.options;
		const canvas = this.canvas;
		const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
		const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
		const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
		const mode = this.width ? "resize" : "attach";
		this.width = newSize.width;
		this.height = newSize.height;
		this._aspectRatio = this.aspectRatio;
		if (!retinaScale(this, newRatio, true)) return;
		this.notifyPlugins("resize", { size: newSize });
		callback(options.onResize, [this, newSize], this);
		if (this.attached) {
			if (this._doResize(mode)) this.render();
		}
	}
	ensureScalesHaveIDs() {
		each(this.options.scales || {}, (axisOptions, axisID) => {
			axisOptions.id = axisID;
		});
	}
	buildOrUpdateScales() {
		const options = this.options;
		const scaleOpts = options.scales;
		const scales = this.scales;
		const updated = Object.keys(scales).reduce((obj, id) => {
			obj[id] = false;
			return obj;
		}, {});
		let items = [];
		if (scaleOpts) items = items.concat(Object.keys(scaleOpts).map((id) => {
			const scaleOptions = scaleOpts[id];
			const axis = determineAxis(id, scaleOptions);
			const isRadial = axis === "r";
			const isHorizontal = axis === "x";
			return {
				options: scaleOptions,
				dposition: isRadial ? "chartArea" : isHorizontal ? "bottom" : "left",
				dtype: isRadial ? "radialLinear" : isHorizontal ? "category" : "linear"
			};
		}));
		each(items, (item) => {
			const scaleOptions = item.options;
			const id = scaleOptions.id;
			const axis = determineAxis(id, scaleOptions);
			const scaleType = valueOrDefault(scaleOptions.type, item.dtype);
			if (scaleOptions.position === void 0 || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) scaleOptions.position = item.dposition;
			updated[id] = true;
			let scale = null;
			if (id in scales && scales[id].type === scaleType) scale = scales[id];
			else {
				scale = new (registry.getScale(scaleType))({
					id,
					type: scaleType,
					ctx: this.ctx,
					chart: this
				});
				scales[scale.id] = scale;
			}
			scale.init(scaleOptions, options);
		});
		each(updated, (hasUpdated, id) => {
			if (!hasUpdated) delete scales[id];
		});
		each(scales, (scale) => {
			layouts.configure(this, scale, scale.options);
			layouts.addBox(this, scale);
		});
	}
	_updateMetasets() {
		const metasets = this._metasets;
		const numData = this.data.datasets.length;
		const numMeta = metasets.length;
		metasets.sort((a, b) => a.index - b.index);
		if (numMeta > numData) {
			for (let i = numData; i < numMeta; ++i) this._destroyDatasetMeta(i);
			metasets.splice(numData, numMeta - numData);
		}
		this._sortedMetasets = metasets.slice(0).sort(compare2Level("order", "index"));
	}
	_removeUnreferencedMetasets() {
		const { _metasets: metasets, data: { datasets } } = this;
		if (metasets.length > datasets.length) delete this._stacks;
		metasets.forEach((meta, index) => {
			if (datasets.filter((x) => x === meta._dataset).length === 0) this._destroyDatasetMeta(index);
		});
	}
	buildOrUpdateControllers() {
		const newControllers = [];
		const datasets = this.data.datasets;
		let i, ilen;
		this._removeUnreferencedMetasets();
		for (i = 0, ilen = datasets.length; i < ilen; i++) {
			const dataset = datasets[i];
			let meta = this.getDatasetMeta(i);
			const type = dataset.type || this.config.type;
			if (meta.type && meta.type !== type) {
				this._destroyDatasetMeta(i);
				meta = this.getDatasetMeta(i);
			}
			meta.type = type;
			meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
			meta.order = dataset.order || 0;
			meta.index = i;
			meta.label = "" + dataset.label;
			meta.visible = this.isDatasetVisible(i);
			if (meta.controller) {
				meta.controller.updateIndex(i);
				meta.controller.linkScales();
			} else {
				const ControllerClass = registry.getController(type);
				const { datasetElementType, dataElementType } = defaults.datasets[type];
				Object.assign(ControllerClass, {
					dataElementType: registry.getElement(dataElementType),
					datasetElementType: datasetElementType && registry.getElement(datasetElementType)
				});
				meta.controller = new ControllerClass(this, i);
				newControllers.push(meta.controller);
			}
		}
		this._updateMetasets();
		return newControllers;
	}
	_resetElements() {
		each(this.data.datasets, (dataset, datasetIndex) => {
			this.getDatasetMeta(datasetIndex).controller.reset();
		}, this);
	}
	reset() {
		this._resetElements();
		this.notifyPlugins("reset");
	}
	update(mode) {
		const config = this.config;
		config.update();
		const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
		const animsDisabled = this._animationsDisabled = !options.animation;
		this._updateScales();
		this._checkEventBindings();
		this._updateHiddenIndices();
		this._plugins.invalidate();
		if (this.notifyPlugins("beforeUpdate", {
			mode,
			cancelable: true
		}) === false) return;
		const newControllers = this.buildOrUpdateControllers();
		this.notifyPlugins("beforeElementsUpdate");
		let minPadding = 0;
		for (let i = 0, ilen = this.data.datasets.length; i < ilen; i++) {
			const { controller } = this.getDatasetMeta(i);
			const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
			controller.buildOrUpdateElements(reset);
			minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
		}
		minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
		this._updateLayout(minPadding);
		if (!animsDisabled) each(newControllers, (controller) => {
			controller.reset();
		});
		this._updateDatasets(mode);
		this.notifyPlugins("afterUpdate", { mode });
		this._layers.sort(compare2Level("z", "_idx"));
		const { _active, _lastEvent } = this;
		if (_lastEvent) this._eventHandler(_lastEvent, true);
		else if (_active.length) this._updateHoverStyles(_active, _active, true);
		this.render();
	}
	_updateScales() {
		each(this.scales, (scale) => {
			layouts.removeBox(this, scale);
		});
		this.ensureScalesHaveIDs();
		this.buildOrUpdateScales();
	}
	_checkEventBindings() {
		const options = this.options;
		if (!setsEqual(new Set(Object.keys(this._listeners)), new Set(options.events)) || !!this._responsiveListeners !== options.responsive) {
			this.unbindEvents();
			this.bindEvents();
		}
	}
	_updateHiddenIndices() {
		const { _hiddenIndices } = this;
		const changes = this._getUniformDataChanges() || [];
		for (const { method, start, count } of changes) moveNumericKeys(_hiddenIndices, start, method === "_removeElements" ? -count : count);
	}
	_getUniformDataChanges() {
		const _dataChanges = this._dataChanges;
		if (!_dataChanges || !_dataChanges.length) return;
		this._dataChanges = [];
		const datasetCount = this.data.datasets.length;
		const makeSet = (idx) => new Set(_dataChanges.filter((c) => c[0] === idx).map((c, i) => i + "," + c.splice(1).join(",")));
		const changeSet = makeSet(0);
		for (let i = 1; i < datasetCount; i++) if (!setsEqual(changeSet, makeSet(i))) return;
		return Array.from(changeSet).map((c) => c.split(",")).map((a) => ({
			method: a[1],
			start: +a[2],
			count: +a[3]
		}));
	}
	_updateLayout(minPadding) {
		if (this.notifyPlugins("beforeLayout", { cancelable: true }) === false) return;
		layouts.update(this, this.width, this.height, minPadding);
		const area = this.chartArea;
		const noArea = area.width <= 0 || area.height <= 0;
		this._layers = [];
		each(this.boxes, (box) => {
			if (noArea && box.position === "chartArea") return;
			if (box.configure) box.configure();
			this._layers.push(...box._layers());
		}, this);
		this._layers.forEach((item, index) => {
			item._idx = index;
		});
		this.notifyPlugins("afterLayout");
	}
	_updateDatasets(mode) {
		if (this.notifyPlugins("beforeDatasetsUpdate", {
			mode,
			cancelable: true
		}) === false) return;
		for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) this.getDatasetMeta(i).controller.configure();
		for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) this._updateDataset(i, isFunction(mode) ? mode({ datasetIndex: i }) : mode);
		this.notifyPlugins("afterDatasetsUpdate", { mode });
	}
	_updateDataset(index, mode) {
		const meta = this.getDatasetMeta(index);
		const args = {
			meta,
			index,
			mode,
			cancelable: true
		};
		if (this.notifyPlugins("beforeDatasetUpdate", args) === false) return;
		meta.controller._update(mode);
		args.cancelable = false;
		this.notifyPlugins("afterDatasetUpdate", args);
	}
	render() {
		if (this.notifyPlugins("beforeRender", { cancelable: true }) === false) return;
		if (animator.has(this)) {
			if (this.attached && !animator.running(this)) animator.start(this);
		} else {
			this.draw();
			onAnimationsComplete({ chart: this });
		}
	}
	draw() {
		let i;
		if (this._resizeBeforeDraw) {
			const { width, height } = this._resizeBeforeDraw;
			this._resizeBeforeDraw = null;
			this._resize(width, height);
		}
		this.clear();
		if (this.width <= 0 || this.height <= 0) return;
		if (this.notifyPlugins("beforeDraw", { cancelable: true }) === false) return;
		const layers = this._layers;
		for (i = 0; i < layers.length && layers[i].z <= 0; ++i) layers[i].draw(this.chartArea);
		this._drawDatasets();
		for (; i < layers.length; ++i) layers[i].draw(this.chartArea);
		this.notifyPlugins("afterDraw");
	}
	_getSortedDatasetMetas(filterVisible) {
		const metasets = this._sortedMetasets;
		const result = [];
		let i, ilen;
		for (i = 0, ilen = metasets.length; i < ilen; ++i) {
			const meta = metasets[i];
			if (!filterVisible || meta.visible) result.push(meta);
		}
		return result;
	}
	getSortedVisibleDatasetMetas() {
		return this._getSortedDatasetMetas(true);
	}
	_drawDatasets() {
		if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: true }) === false) return;
		const metasets = this.getSortedVisibleDatasetMetas();
		for (let i = metasets.length - 1; i >= 0; --i) this._drawDataset(metasets[i]);
		this.notifyPlugins("afterDatasetsDraw");
	}
	_drawDataset(meta) {
		const ctx = this.ctx;
		const args = {
			meta,
			index: meta.index,
			cancelable: true
		};
		const clip = getDatasetClipArea(this, meta);
		if (this.notifyPlugins("beforeDatasetDraw", args) === false) return;
		if (clip) clipArea(ctx, clip);
		meta.controller.draw();
		if (clip) unclipArea(ctx);
		args.cancelable = false;
		this.notifyPlugins("afterDatasetDraw", args);
	}
	isPointInArea(point) {
		return _isPointInArea(point, this.chartArea, this._minPadding);
	}
	getElementsAtEventForMode(e, mode, options, useFinalPosition) {
		const method = Interaction.modes[mode];
		if (typeof method === "function") return method(this, e, options, useFinalPosition);
		return [];
	}
	getDatasetMeta(datasetIndex) {
		const dataset = this.data.datasets[datasetIndex];
		const metasets = this._metasets;
		let meta = metasets.filter((x) => x && x._dataset === dataset).pop();
		if (!meta) {
			meta = {
				type: null,
				data: [],
				dataset: null,
				controller: null,
				hidden: null,
				xAxisID: null,
				yAxisID: null,
				order: dataset && dataset.order || 0,
				index: datasetIndex,
				_dataset: dataset,
				_parsed: [],
				_sorted: false
			};
			metasets.push(meta);
		}
		return meta;
	}
	getContext() {
		return this.$context || (this.$context = createContext(null, {
			chart: this,
			type: "chart"
		}));
	}
	getVisibleDatasetCount() {
		return this.getSortedVisibleDatasetMetas().length;
	}
	isDatasetVisible(datasetIndex) {
		const dataset = this.data.datasets[datasetIndex];
		if (!dataset) return false;
		const meta = this.getDatasetMeta(datasetIndex);
		return typeof meta.hidden === "boolean" ? !meta.hidden : !dataset.hidden;
	}
	setDatasetVisibility(datasetIndex, visible) {
		const meta = this.getDatasetMeta(datasetIndex);
		meta.hidden = !visible;
	}
	toggleDataVisibility(index) {
		this._hiddenIndices[index] = !this._hiddenIndices[index];
	}
	getDataVisibility(index) {
		return !this._hiddenIndices[index];
	}
	_updateVisibility(datasetIndex, dataIndex, visible) {
		const mode = visible ? "show" : "hide";
		const meta = this.getDatasetMeta(datasetIndex);
		const anims = meta.controller._resolveAnimations(void 0, mode);
		if (defined(dataIndex)) {
			meta.data[dataIndex].hidden = !visible;
			this.update();
		} else {
			this.setDatasetVisibility(datasetIndex, visible);
			anims.update(meta, { visible });
			this.update((ctx) => ctx.datasetIndex === datasetIndex ? mode : void 0);
		}
	}
	hide(datasetIndex, dataIndex) {
		this._updateVisibility(datasetIndex, dataIndex, false);
	}
	show(datasetIndex, dataIndex) {
		this._updateVisibility(datasetIndex, dataIndex, true);
	}
	_destroyDatasetMeta(datasetIndex) {
		const meta = this._metasets[datasetIndex];
		if (meta && meta.controller) meta.controller._destroy();
		delete this._metasets[datasetIndex];
	}
	_stop() {
		let i, ilen;
		this.stop();
		animator.remove(this);
		for (i = 0, ilen = this.data.datasets.length; i < ilen; ++i) this._destroyDatasetMeta(i);
	}
	destroy() {
		this.notifyPlugins("beforeDestroy");
		const { canvas, ctx } = this;
		this._stop();
		this.config.clearCache();
		if (canvas) {
			this.unbindEvents();
			clearCanvas(canvas, ctx);
			this.platform.releaseContext(ctx);
			this.canvas = null;
			this.ctx = null;
		}
		delete instances[this.id];
		this.notifyPlugins("afterDestroy");
	}
	toBase64Image(...args) {
		return this.canvas.toDataURL(...args);
	}
	bindEvents() {
		this.bindUserEvents();
		if (this.options.responsive) this.bindResponsiveEvents();
		else this.attached = true;
	}
	bindUserEvents() {
		const listeners = this._listeners;
		const platform = this.platform;
		const _add = (type, listener) => {
			platform.addEventListener(this, type, listener);
			listeners[type] = listener;
		};
		const listener = (e, x, y) => {
			e.offsetX = x;
			e.offsetY = y;
			this._eventHandler(e);
		};
		each(this.options.events, (type) => _add(type, listener));
	}
	bindResponsiveEvents() {
		if (!this._responsiveListeners) this._responsiveListeners = {};
		const listeners = this._responsiveListeners;
		const platform = this.platform;
		const _add = (type, listener) => {
			platform.addEventListener(this, type, listener);
			listeners[type] = listener;
		};
		const _remove = (type, listener) => {
			if (listeners[type]) {
				platform.removeEventListener(this, type, listener);
				delete listeners[type];
			}
		};
		const listener = (width, height) => {
			if (this.canvas) this.resize(width, height);
		};
		let detached;
		const attached = () => {
			_remove("attach", attached);
			this.attached = true;
			this.resize();
			_add("resize", listener);
			_add("detach", detached);
		};
		detached = () => {
			this.attached = false;
			_remove("resize", listener);
			this._stop();
			this._resize(0, 0);
			_add("attach", attached);
		};
		if (platform.isAttached(this.canvas)) attached();
		else detached();
	}
	unbindEvents() {
		each(this._listeners, (listener, type) => {
			this.platform.removeEventListener(this, type, listener);
		});
		this._listeners = {};
		each(this._responsiveListeners, (listener, type) => {
			this.platform.removeEventListener(this, type, listener);
		});
		this._responsiveListeners = void 0;
	}
	updateHoverStyle(items, mode, enabled) {
		const prefix = enabled ? "set" : "remove";
		let meta, item, i, ilen;
		if (mode === "dataset") {
			meta = this.getDatasetMeta(items[0].datasetIndex);
			meta.controller["_" + prefix + "DatasetHoverStyle"]();
		}
		for (i = 0, ilen = items.length; i < ilen; ++i) {
			item = items[i];
			const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
			if (controller) controller[prefix + "HoverStyle"](item.element, item.datasetIndex, item.index);
		}
	}
	getActiveElements() {
		return this._active || [];
	}
	setActiveElements(activeElements) {
		const lastActive = this._active || [];
		const active = activeElements.map(({ datasetIndex, index }) => {
			const meta = this.getDatasetMeta(datasetIndex);
			if (!meta) throw new Error("No dataset found at index " + datasetIndex);
			return {
				datasetIndex,
				element: meta.data[index],
				index
			};
		});
		if (!_elementsEqual(active, lastActive)) {
			this._active = active;
			this._lastEvent = null;
			this._updateHoverStyles(active, lastActive);
		}
	}
	notifyPlugins(hook, args, filter) {
		return this._plugins.notify(this, hook, args, filter);
	}
	isPluginEnabled(pluginId) {
		return this._plugins._cache.filter((p) => p.plugin.id === pluginId).length === 1;
	}
	_updateHoverStyles(active, lastActive, replay) {
		const hoverOptions = this.options.hover;
		const diff = (a, b) => a.filter((x) => !b.some((y) => x.datasetIndex === y.datasetIndex && x.index === y.index));
		const deactivated = diff(lastActive, active);
		const activated = replay ? active : diff(active, lastActive);
		if (deactivated.length) this.updateHoverStyle(deactivated, hoverOptions.mode, false);
		if (activated.length && hoverOptions.mode) this.updateHoverStyle(activated, hoverOptions.mode, true);
	}
	_eventHandler(e, replay) {
		const args = {
			event: e,
			replay,
			cancelable: true,
			inChartArea: this.isPointInArea(e)
		};
		const eventFilter = (plugin) => (plugin.options.events || this.options.events).includes(e.native.type);
		if (this.notifyPlugins("beforeEvent", args, eventFilter) === false) return;
		const changed = this._handleEvent(e, replay, args.inChartArea);
		args.cancelable = false;
		this.notifyPlugins("afterEvent", args, eventFilter);
		if (changed || args.changed) this.render();
		return this;
	}
	_handleEvent(e, replay, inChartArea) {
		const { _active: lastActive = [], options } = this;
		const useFinalPosition = replay;
		const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
		const isClick = _isClickEvent(e);
		const lastEvent = determineLastEvent(e, this._lastEvent, inChartArea, isClick);
		if (inChartArea) {
			this._lastEvent = null;
			callback(options.onHover, [
				e,
				active,
				this
			], this);
			if (isClick) callback(options.onClick, [
				e,
				active,
				this
			], this);
		}
		const changed = !_elementsEqual(active, lastActive);
		if (changed || replay) {
			this._active = active;
			this._updateHoverStyles(active, lastActive, replay);
		}
		this._lastEvent = lastEvent;
		return changed;
	}
	_getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
		if (e.type === "mouseout") return [];
		if (!inChartArea) return lastActive;
		const hoverOptions = this.options.hover;
		return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
	}
};
function invalidatePlugins() {
	return each(Chart$1.instances, (chart) => chart._plugins.invalidate());
}
function setStyle(ctx, options, style = options) {
	ctx.lineCap = valueOrDefault(style.borderCapStyle, options.borderCapStyle);
	ctx.setLineDash(valueOrDefault(style.borderDash, options.borderDash));
	ctx.lineDashOffset = valueOrDefault(style.borderDashOffset, options.borderDashOffset);
	ctx.lineJoin = valueOrDefault(style.borderJoinStyle, options.borderJoinStyle);
	ctx.lineWidth = valueOrDefault(style.borderWidth, options.borderWidth);
	ctx.strokeStyle = valueOrDefault(style.borderColor, options.borderColor);
}
function lineTo(ctx, previous, target) {
	ctx.lineTo(target.x, target.y);
}
function getLineMethod(options) {
	if (options.stepped) return _steppedLineTo;
	if (options.tension || options.cubicInterpolationMode === "monotone") return _bezierCurveTo;
	return lineTo;
}
function pathVars(points, segment, params = {}) {
	const count = points.length;
	const { start: paramsStart = 0, end: paramsEnd = count - 1 } = params;
	const { start: segmentStart, end: segmentEnd } = segment;
	const start = Math.max(paramsStart, segmentStart);
	const end = Math.min(paramsEnd, segmentEnd);
	const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
	return {
		count,
		start,
		loop: segment.loop,
		ilen: end < start && !outside ? count + end - start : end - start
	};
}
function pathSegment(ctx, line, segment, params) {
	const { points, options } = line;
	const { count, start, loop, ilen } = pathVars(points, segment, params);
	const lineMethod = getLineMethod(options);
	let { move = true, reverse } = params || {};
	let i, point, prev;
	for (i = 0; i <= ilen; ++i) {
		point = points[(start + (reverse ? ilen - i : i)) % count];
		if (point.skip) continue;
		else if (move) {
			ctx.moveTo(point.x, point.y);
			move = false;
		} else lineMethod(ctx, prev, point, reverse, options.stepped);
		prev = point;
	}
	if (loop) {
		point = points[(start + (reverse ? ilen : 0)) % count];
		lineMethod(ctx, prev, point, reverse, options.stepped);
	}
	return !!loop;
}
function fastPathSegment(ctx, line, segment, params) {
	const points = line.points;
	const { count, start, ilen } = pathVars(points, segment, params);
	const { move = true, reverse } = params || {};
	let avgX = 0;
	let countX = 0;
	let i, point, prevX, minY, maxY, lastY;
	const pointIndex = (index) => (start + (reverse ? ilen - index : index)) % count;
	const drawX = () => {
		if (minY !== maxY) {
			ctx.lineTo(avgX, maxY);
			ctx.lineTo(avgX, minY);
			ctx.lineTo(avgX, lastY);
		}
	};
	if (move) {
		point = points[pointIndex(0)];
		ctx.moveTo(point.x, point.y);
	}
	for (i = 0; i <= ilen; ++i) {
		point = points[pointIndex(i)];
		if (point.skip) continue;
		const x = point.x;
		const y = point.y;
		const truncX = x | 0;
		if (truncX === prevX) {
			if (y < minY) minY = y;
			else if (y > maxY) maxY = y;
			avgX = (countX * avgX + x) / ++countX;
		} else {
			drawX();
			ctx.lineTo(x, y);
			prevX = truncX;
			countX = 0;
			minY = maxY = y;
		}
		lastY = y;
	}
	drawX();
}
function _getSegmentMethod(line) {
	const opts = line.options;
	const borderDash = opts.borderDash && opts.borderDash.length;
	return !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== "monotone" && !opts.stepped && !borderDash ? fastPathSegment : pathSegment;
}
function _getInterpolationMethod(options) {
	if (options.stepped) return _steppedInterpolation;
	if (options.tension || options.cubicInterpolationMode === "monotone") return _bezierInterpolation;
	return _pointInLine;
}
function strokePathWithCache(ctx, line, start, count) {
	let path = line._path;
	if (!path) {
		path = line._path = new Path2D();
		if (line.path(path, start, count)) path.closePath();
	}
	setStyle(ctx, line.options);
	ctx.stroke(path);
}
function strokePathDirect(ctx, line, start, count) {
	const { segments, options } = line;
	const segmentMethod = _getSegmentMethod(line);
	for (const segment of segments) {
		setStyle(ctx, options, segment.style);
		ctx.beginPath();
		if (segmentMethod(ctx, line, segment, {
			start,
			end: start + count - 1
		})) ctx.closePath();
		ctx.stroke();
	}
}
var usePath2D = typeof Path2D === "function";
function draw(ctx, line, start, count) {
	if (usePath2D && !line.options.segment) strokePathWithCache(ctx, line, start, count);
	else strokePathDirect(ctx, line, start, count);
}
var LineElement = class extends Element {
	static id = "line";
	static defaults = {
		borderCapStyle: "butt",
		borderDash: [],
		borderDashOffset: 0,
		borderJoinStyle: "miter",
		borderWidth: 3,
		capBezierPoints: true,
		cubicInterpolationMode: "default",
		fill: false,
		spanGaps: false,
		stepped: false,
		tension: 0
	};
	static defaultRoutes = {
		backgroundColor: "backgroundColor",
		borderColor: "borderColor"
	};
	static descriptors = {
		_scriptable: true,
		_indexable: (name) => name !== "borderDash" && name !== "fill"
	};
	constructor(cfg) {
		super();
		this.animated = true;
		this.options = void 0;
		this._chart = void 0;
		this._loop = void 0;
		this._fullLoop = void 0;
		this._path = void 0;
		this._points = void 0;
		this._segments = void 0;
		this._decimated = false;
		this._pointsUpdated = false;
		this._datasetIndex = void 0;
		if (cfg) Object.assign(this, cfg);
	}
	updateControlPoints(chartArea, indexAxis) {
		const options = this.options;
		if ((options.tension || options.cubicInterpolationMode === "monotone") && !options.stepped && !this._pointsUpdated) {
			const loop = options.spanGaps ? this._loop : this._fullLoop;
			_updateBezierControlPoints(this._points, options, chartArea, loop, indexAxis);
			this._pointsUpdated = true;
		}
	}
	set points(points) {
		this._points = points;
		delete this._segments;
		delete this._path;
		this._pointsUpdated = false;
	}
	get points() {
		return this._points;
	}
	get segments() {
		return this._segments || (this._segments = _computeSegments(this, this.options.segment));
	}
	first() {
		const segments = this.segments;
		const points = this.points;
		return segments.length && points[segments[0].start];
	}
	last() {
		const segments = this.segments;
		const points = this.points;
		const count = segments.length;
		return count && points[segments[count - 1].end];
	}
	interpolate(point, property) {
		const options = this.options;
		const value = point[property];
		const points = this.points;
		const segments = _boundSegments(this, {
			property,
			start: value,
			end: value
		});
		if (!segments.length) return;
		const result = [];
		const _interpolate = _getInterpolationMethod(options);
		let i, ilen;
		for (i = 0, ilen = segments.length; i < ilen; ++i) {
			const { start, end } = segments[i];
			const p1 = points[start];
			const p2 = points[end];
			if (p1 === p2) {
				result.push(p1);
				continue;
			}
			const interpolated = _interpolate(p1, p2, Math.abs((value - p1[property]) / (p2[property] - p1[property])), options.stepped);
			interpolated[property] = point[property];
			result.push(interpolated);
		}
		return result.length === 1 ? result[0] : result;
	}
	pathSegment(ctx, segment, params) {
		return _getSegmentMethod(this)(ctx, this, segment, params);
	}
	path(ctx, start, count) {
		const segments = this.segments;
		const segmentMethod = _getSegmentMethod(this);
		let loop = this._loop;
		start = start || 0;
		count = count || this.points.length - start;
		for (const segment of segments) loop &= segmentMethod(ctx, this, segment, {
			start,
			end: start + count - 1
		});
		return !!loop;
	}
	draw(ctx, chartArea, start, count) {
		const options = this.options || {};
		if ((this.points || []).length && options.borderWidth) {
			ctx.save();
			draw(ctx, this, start, count);
			ctx.restore();
		}
		if (this.animated) {
			this._pointsUpdated = false;
			this._path = void 0;
		}
	}
};
function inRange$1(el, pos, axis, useFinalPosition) {
	const options = el.options;
	const { [axis]: value } = el.getProps([axis], useFinalPosition);
	return Math.abs(pos - value) < options.radius + options.hitRadius;
}
var PointElement = class extends Element {
	static id = "point";
	parsed;
	skip;
	stop;
	/**
	* @type {any}
	*/ static defaults = {
		borderWidth: 1,
		hitRadius: 1,
		hoverBorderWidth: 1,
		hoverRadius: 4,
		pointStyle: "circle",
		radius: 3,
		rotation: 0
	};
	/**
	* @type {any}
	*/ static defaultRoutes = {
		backgroundColor: "backgroundColor",
		borderColor: "borderColor"
	};
	constructor(cfg) {
		super();
		this.options = void 0;
		this.parsed = void 0;
		this.skip = void 0;
		this.stop = void 0;
		if (cfg) Object.assign(this, cfg);
	}
	inRange(mouseX, mouseY, useFinalPosition) {
		const options = this.options;
		const { x, y } = this.getProps(["x", "y"], useFinalPosition);
		return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
	}
	inXRange(mouseX, useFinalPosition) {
		return inRange$1(this, mouseX, "x", useFinalPosition);
	}
	inYRange(mouseY, useFinalPosition) {
		return inRange$1(this, mouseY, "y", useFinalPosition);
	}
	getCenterPoint(useFinalPosition) {
		const { x, y } = this.getProps(["x", "y"], useFinalPosition);
		return {
			x,
			y
		};
	}
	size(options) {
		options = options || this.options || {};
		let radius = options.radius || 0;
		radius = Math.max(radius, radius && options.hoverRadius || 0);
		const borderWidth = radius && options.borderWidth || 0;
		return (radius + borderWidth) * 2;
	}
	draw(ctx, area) {
		const options = this.options;
		if (this.skip || options.radius < .1 || !_isPointInArea(this, area, this.size(options) / 2)) return;
		ctx.strokeStyle = options.borderColor;
		ctx.lineWidth = options.borderWidth;
		ctx.fillStyle = options.backgroundColor;
		drawPoint(ctx, options, this.x, this.y);
	}
	getRange() {
		const options = this.options || {};
		return options.radius + options.hitRadius;
	}
};
var getBoxSize = (labelOpts, fontSize) => {
	let { boxHeight = fontSize, boxWidth = fontSize } = labelOpts;
	if (labelOpts.usePointStyle) {
		boxHeight = Math.min(boxHeight, fontSize);
		boxWidth = labelOpts.pointStyleWidth || Math.min(boxWidth, fontSize);
	}
	return {
		boxWidth,
		boxHeight,
		itemHeight: Math.max(fontSize, boxHeight)
	};
};
var itemsEqual = (a, b) => a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
var Legend = class extends Element {
	constructor(config) {
		super();
		this._added = false;
		this.legendHitBoxes = [];
		this._hoveredItem = null;
		this.doughnutMode = false;
		this.chart = config.chart;
		this.options = config.options;
		this.ctx = config.ctx;
		this.legendItems = void 0;
		this.columnSizes = void 0;
		this.lineWidths = void 0;
		this.maxHeight = void 0;
		this.maxWidth = void 0;
		this.top = void 0;
		this.bottom = void 0;
		this.left = void 0;
		this.right = void 0;
		this.height = void 0;
		this.width = void 0;
		this._margins = void 0;
		this.position = void 0;
		this.weight = void 0;
		this.fullSize = void 0;
	}
	update(maxWidth, maxHeight, margins) {
		this.maxWidth = maxWidth;
		this.maxHeight = maxHeight;
		this._margins = margins;
		this.setDimensions();
		this.buildLabels();
		this.fit();
	}
	setDimensions() {
		if (this.isHorizontal()) {
			this.width = this.maxWidth;
			this.left = this._margins.left;
			this.right = this.width;
		} else {
			this.height = this.maxHeight;
			this.top = this._margins.top;
			this.bottom = this.height;
		}
	}
	buildLabels() {
		const labelOpts = this.options.labels || {};
		let legendItems = callback(labelOpts.generateLabels, [this.chart], this) || [];
		if (labelOpts.filter) legendItems = legendItems.filter((item) => labelOpts.filter(item, this.chart.data));
		if (labelOpts.sort) legendItems = legendItems.sort((a, b) => labelOpts.sort(a, b, this.chart.data));
		if (this.options.reverse) legendItems.reverse();
		this.legendItems = legendItems;
	}
	fit() {
		const { options, ctx } = this;
		if (!options.display) {
			this.width = this.height = 0;
			return;
		}
		const labelOpts = options.labels;
		const labelFont = toFont(labelOpts.font);
		const fontSize = labelFont.size;
		const titleHeight = this._computeTitleHeight();
		const { boxWidth, itemHeight } = getBoxSize(labelOpts, fontSize);
		let width, height;
		ctx.font = labelFont.string;
		if (this.isHorizontal()) {
			width = this.maxWidth;
			height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
		} else {
			height = this.maxHeight;
			width = this._fitCols(titleHeight, labelFont, boxWidth, itemHeight) + 10;
		}
		this.width = Math.min(width, options.maxWidth || this.maxWidth);
		this.height = Math.min(height, options.maxHeight || this.maxHeight);
	}
	_fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
		const { ctx, maxWidth, options: { labels: { padding } } } = this;
		const hitboxes = this.legendHitBoxes = [];
		const lineWidths = this.lineWidths = [0];
		const lineHeight = itemHeight + padding;
		let totalHeight = titleHeight;
		ctx.textAlign = "left";
		ctx.textBaseline = "middle";
		let row = -1;
		let top = -lineHeight;
		this.legendItems.forEach((legendItem, i) => {
			const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
			if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
				totalHeight += lineHeight;
				lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
				top += lineHeight;
				row++;
			}
			hitboxes[i] = {
				left: 0,
				top,
				row,
				width: itemWidth,
				height: itemHeight
			};
			lineWidths[lineWidths.length - 1] += itemWidth + padding;
		});
		return totalHeight;
	}
	_fitCols(titleHeight, labelFont, boxWidth, _itemHeight) {
		const { ctx, maxHeight, options: { labels: { padding } } } = this;
		const hitboxes = this.legendHitBoxes = [];
		const columnSizes = this.columnSizes = [];
		const heightLimit = maxHeight - titleHeight;
		let totalWidth = padding;
		let currentColWidth = 0;
		let currentColHeight = 0;
		let left = 0;
		let col = 0;
		this.legendItems.forEach((legendItem, i) => {
			const { itemWidth, itemHeight } = calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight);
			if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
				totalWidth += currentColWidth + padding;
				columnSizes.push({
					width: currentColWidth,
					height: currentColHeight
				});
				left += currentColWidth + padding;
				col++;
				currentColWidth = currentColHeight = 0;
			}
			hitboxes[i] = {
				left,
				top: currentColHeight,
				col,
				width: itemWidth,
				height: itemHeight
			};
			currentColWidth = Math.max(currentColWidth, itemWidth);
			currentColHeight += itemHeight + padding;
		});
		totalWidth += currentColWidth;
		columnSizes.push({
			width: currentColWidth,
			height: currentColHeight
		});
		return totalWidth;
	}
	adjustHitBoxes() {
		if (!this.options.display) return;
		const titleHeight = this._computeTitleHeight();
		const { legendHitBoxes: hitboxes, options: { align, labels: { padding }, rtl } } = this;
		const rtlHelper = getRtlAdapter(rtl, this.left, this.width);
		if (this.isHorizontal()) {
			let row = 0;
			let left = _alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
			for (const hitbox of hitboxes) {
				if (row !== hitbox.row) {
					row = hitbox.row;
					left = _alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
				}
				hitbox.top += this.top + titleHeight + padding;
				hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
				left += hitbox.width + padding;
			}
		} else {
			let col = 0;
			let top = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
			for (const hitbox of hitboxes) {
				if (hitbox.col !== col) {
					col = hitbox.col;
					top = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
				}
				hitbox.top = top;
				hitbox.left += this.left + padding;
				hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox.left), hitbox.width);
				top += hitbox.height + padding;
			}
		}
	}
	isHorizontal() {
		return this.options.position === "top" || this.options.position === "bottom";
	}
	draw() {
		if (this.options.display) {
			const ctx = this.ctx;
			clipArea(ctx, this);
			this._draw();
			unclipArea(ctx);
		}
	}
	_draw() {
		const { options: opts, columnSizes, lineWidths, ctx } = this;
		const { align, labels: labelOpts } = opts;
		const defaultColor = defaults.color;
		const rtlHelper = getRtlAdapter(opts.rtl, this.left, this.width);
		const labelFont = toFont(labelOpts.font);
		const { padding } = labelOpts;
		const fontSize = labelFont.size;
		const halfFontSize = fontSize / 2;
		let cursor;
		this.drawTitle();
		ctx.textAlign = rtlHelper.textAlign("left");
		ctx.textBaseline = "middle";
		ctx.lineWidth = .5;
		ctx.font = labelFont.string;
		const { boxWidth, boxHeight, itemHeight } = getBoxSize(labelOpts, fontSize);
		const drawLegendBox = function(x, y, legendItem) {
			if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) return;
			ctx.save();
			const lineWidth = valueOrDefault(legendItem.lineWidth, 1);
			ctx.fillStyle = valueOrDefault(legendItem.fillStyle, defaultColor);
			ctx.lineCap = valueOrDefault(legendItem.lineCap, "butt");
			ctx.lineDashOffset = valueOrDefault(legendItem.lineDashOffset, 0);
			ctx.lineJoin = valueOrDefault(legendItem.lineJoin, "miter");
			ctx.lineWidth = lineWidth;
			ctx.strokeStyle = valueOrDefault(legendItem.strokeStyle, defaultColor);
			ctx.setLineDash(valueOrDefault(legendItem.lineDash, []));
			if (labelOpts.usePointStyle) {
				const drawOptions = {
					radius: boxHeight * Math.SQRT2 / 2,
					pointStyle: legendItem.pointStyle,
					rotation: legendItem.rotation,
					borderWidth: lineWidth
				};
				const centerX = rtlHelper.xPlus(x, boxWidth / 2);
				const centerY = y + halfFontSize;
				drawPointLegend(ctx, drawOptions, centerX, centerY, labelOpts.pointStyleWidth && boxWidth);
			} else {
				const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
				const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
				const borderRadius = toTRBLCorners(legendItem.borderRadius);
				ctx.beginPath();
				if (Object.values(borderRadius).some((v) => v !== 0)) addRoundedRectPath(ctx, {
					x: xBoxLeft,
					y: yBoxTop,
					w: boxWidth,
					h: boxHeight,
					radius: borderRadius
				});
				else ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
				ctx.fill();
				if (lineWidth !== 0) ctx.stroke();
			}
			ctx.restore();
		};
		const fillText = function(x, y, legendItem) {
			renderText(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
				strikethrough: legendItem.hidden,
				textAlign: rtlHelper.textAlign(legendItem.textAlign)
			});
		};
		const isHorizontal = this.isHorizontal();
		const titleHeight = this._computeTitleHeight();
		if (isHorizontal) cursor = {
			x: _alignStartEnd(align, this.left + padding, this.right - lineWidths[0]),
			y: this.top + padding + titleHeight,
			line: 0
		};
		else cursor = {
			x: this.left + padding,
			y: _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
			line: 0
		};
		overrideTextDirection(this.ctx, opts.textDirection);
		const lineHeight = itemHeight + padding;
		this.legendItems.forEach((legendItem, i) => {
			ctx.strokeStyle = legendItem.fontColor;
			ctx.fillStyle = legendItem.fontColor;
			const textWidth = ctx.measureText(legendItem.text).width;
			const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
			const width = boxWidth + halfFontSize + textWidth;
			let x = cursor.x;
			let y = cursor.y;
			rtlHelper.setWidth(this.width);
			if (isHorizontal) {
				if (i > 0 && x + width + padding > this.right) {
					y = cursor.y += lineHeight;
					cursor.line++;
					x = cursor.x = _alignStartEnd(align, this.left + padding, this.right - lineWidths[cursor.line]);
				}
			} else if (i > 0 && y + lineHeight > this.bottom) {
				x = cursor.x = x + columnSizes[cursor.line].width + padding;
				cursor.line++;
				y = cursor.y = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
			}
			const realX = rtlHelper.x(x);
			drawLegendBox(realX, y, legendItem);
			x = _textX(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : this.right, opts.rtl);
			fillText(rtlHelper.x(x), y, legendItem);
			if (isHorizontal) cursor.x += width + padding;
			else if (typeof legendItem.text !== "string") {
				const fontLineHeight = labelFont.lineHeight;
				cursor.y += calculateLegendItemHeight(legendItem, fontLineHeight) + padding;
			} else cursor.y += lineHeight;
		});
		restoreTextDirection(this.ctx, opts.textDirection);
	}
	drawTitle() {
		const opts = this.options;
		const titleOpts = opts.title;
		const titleFont = toFont(titleOpts.font);
		const titlePadding = toPadding(titleOpts.padding);
		if (!titleOpts.display) return;
		const rtlHelper = getRtlAdapter(opts.rtl, this.left, this.width);
		const ctx = this.ctx;
		const position = titleOpts.position;
		const halfFontSize = titleFont.size / 2;
		const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
		let y;
		let left = this.left;
		let maxWidth = this.width;
		if (this.isHorizontal()) {
			maxWidth = Math.max(...this.lineWidths);
			y = this.top + topPaddingPlusHalfFontSize;
			left = _alignStartEnd(opts.align, left, this.right - maxWidth);
		} else {
			const maxHeight = this.columnSizes.reduce((acc, size) => Math.max(acc, size.height), 0);
			y = topPaddingPlusHalfFontSize + _alignStartEnd(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
		}
		const x = _alignStartEnd(position, left, left + maxWidth);
		ctx.textAlign = rtlHelper.textAlign(_toLeftRightCenter(position));
		ctx.textBaseline = "middle";
		ctx.strokeStyle = titleOpts.color;
		ctx.fillStyle = titleOpts.color;
		ctx.font = titleFont.string;
		renderText(ctx, titleOpts.text, x, y, titleFont);
	}
	_computeTitleHeight() {
		const titleOpts = this.options.title;
		const titleFont = toFont(titleOpts.font);
		const titlePadding = toPadding(titleOpts.padding);
		return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
	}
	_getLegendItemAt(x, y) {
		let i, hitBox, lh;
		if (_isBetween(x, this.left, this.right) && _isBetween(y, this.top, this.bottom)) {
			lh = this.legendHitBoxes;
			for (i = 0; i < lh.length; ++i) {
				hitBox = lh[i];
				if (_isBetween(x, hitBox.left, hitBox.left + hitBox.width) && _isBetween(y, hitBox.top, hitBox.top + hitBox.height)) return this.legendItems[i];
			}
		}
		return null;
	}
	handleEvent(e) {
		const opts = this.options;
		if (!isListened(e.type, opts)) return;
		const hoveredItem = this._getLegendItemAt(e.x, e.y);
		if (e.type === "mousemove" || e.type === "mouseout") {
			const previous = this._hoveredItem;
			const sameItem = itemsEqual(previous, hoveredItem);
			if (previous && !sameItem) callback(opts.onLeave, [
				e,
				previous,
				this
			], this);
			this._hoveredItem = hoveredItem;
			if (hoveredItem && !sameItem) callback(opts.onHover, [
				e,
				hoveredItem,
				this
			], this);
		} else if (hoveredItem) callback(opts.onClick, [
			e,
			hoveredItem,
			this
		], this);
	}
};
function calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight) {
	return {
		itemWidth: calculateItemWidth(legendItem, boxWidth, labelFont, ctx),
		itemHeight: calculateItemHeight(_itemHeight, legendItem, labelFont.lineHeight)
	};
}
function calculateItemWidth(legendItem, boxWidth, labelFont, ctx) {
	let legendItemText = legendItem.text;
	if (legendItemText && typeof legendItemText !== "string") legendItemText = legendItemText.reduce((a, b) => a.length > b.length ? a : b);
	return boxWidth + labelFont.size / 2 + ctx.measureText(legendItemText).width;
}
function calculateItemHeight(_itemHeight, legendItem, fontLineHeight) {
	let itemHeight = _itemHeight;
	if (typeof legendItem.text !== "string") itemHeight = calculateLegendItemHeight(legendItem, fontLineHeight);
	return itemHeight;
}
function calculateLegendItemHeight(legendItem, fontLineHeight) {
	return fontLineHeight * (legendItem.text ? legendItem.text.length : 0);
}
function isListened(type, opts) {
	if ((type === "mousemove" || type === "mouseout") && (opts.onHover || opts.onLeave)) return true;
	if (opts.onClick && (type === "click" || type === "mouseup")) return true;
	return false;
}
var plugin_legend = {
	id: "legend",
	_element: Legend,
	start(chart, _args, options) {
		const legend = chart.legend = new Legend({
			ctx: chart.ctx,
			options,
			chart
		});
		layouts.configure(chart, legend, options);
		layouts.addBox(chart, legend);
	},
	stop(chart) {
		layouts.removeBox(chart, chart.legend);
		delete chart.legend;
	},
	beforeUpdate(chart, _args, options) {
		const legend = chart.legend;
		layouts.configure(chart, legend, options);
		legend.options = options;
	},
	afterUpdate(chart) {
		const legend = chart.legend;
		legend.buildLabels();
		legend.adjustHitBoxes();
	},
	afterEvent(chart, args) {
		if (!args.replay) chart.legend.handleEvent(args.event);
	},
	defaults: {
		display: true,
		position: "top",
		align: "center",
		fullSize: true,
		reverse: false,
		weight: 1e3,
		onClick(e, legendItem, legend) {
			const index = legendItem.datasetIndex;
			const ci = legend.chart;
			if (ci.isDatasetVisible(index)) {
				ci.hide(index);
				legendItem.hidden = true;
			} else {
				ci.show(index);
				legendItem.hidden = false;
			}
		},
		onHover: null,
		onLeave: null,
		labels: {
			color: (ctx) => ctx.chart.options.color,
			boxWidth: 40,
			padding: 10,
			generateLabels(chart) {
				const datasets = chart.data.datasets;
				const { labels: { usePointStyle, pointStyle, textAlign, color, useBorderRadius, borderRadius } } = chart.legend.options;
				return chart._getSortedDatasetMetas().map((meta) => {
					const style = meta.controller.getStyle(usePointStyle ? 0 : void 0);
					const borderWidth = toPadding(style.borderWidth);
					return {
						text: datasets[meta.index].label,
						fillStyle: style.backgroundColor,
						fontColor: color,
						hidden: !meta.visible,
						lineCap: style.borderCapStyle,
						lineDash: style.borderDash,
						lineDashOffset: style.borderDashOffset,
						lineJoin: style.borderJoinStyle,
						lineWidth: (borderWidth.width + borderWidth.height) / 4,
						strokeStyle: style.borderColor,
						pointStyle: pointStyle || style.pointStyle,
						rotation: style.rotation,
						textAlign: textAlign || style.textAlign,
						borderRadius: useBorderRadius && (borderRadius || style.borderRadius),
						datasetIndex: meta.index
					};
				}, this);
			}
		},
		title: {
			color: (ctx) => ctx.chart.options.color,
			display: false,
			position: "center",
			text: ""
		}
	},
	descriptors: {
		_scriptable: (name) => !name.startsWith("on"),
		labels: { _scriptable: (name) => ![
			"generateLabels",
			"filter",
			"sort"
		].includes(name) }
	}
};
var positioners = {
	average(items) {
		if (!items.length) return false;
		let i, len;
		let xSet = /* @__PURE__ */ new Set();
		let y = 0;
		let count = 0;
		for (i = 0, len = items.length; i < len; ++i) {
			const el = items[i].element;
			if (el && el.hasValue()) {
				const pos = el.tooltipPosition();
				xSet.add(pos.x);
				y += pos.y;
				++count;
			}
		}
		if (count === 0 || xSet.size === 0) return false;
		return {
			x: [...xSet].reduce((a, b) => a + b) / xSet.size,
			y: y / count
		};
	},
	nearest(items, eventPosition) {
		if (!items.length) return false;
		let x = eventPosition.x;
		let y = eventPosition.y;
		let minDistance = Number.POSITIVE_INFINITY;
		let i, len, nearestElement;
		for (i = 0, len = items.length; i < len; ++i) {
			const el = items[i].element;
			if (el && el.hasValue()) {
				const d = distanceBetweenPoints(eventPosition, el.getCenterPoint());
				if (d < minDistance) {
					minDistance = d;
					nearestElement = el;
				}
			}
		}
		if (nearestElement) {
			const tp = nearestElement.tooltipPosition();
			x = tp.x;
			y = tp.y;
		}
		return {
			x,
			y
		};
	}
};
function pushOrConcat(base, toPush) {
	if (toPush) if (isArray(toPush)) Array.prototype.push.apply(base, toPush);
	else base.push(toPush);
	return base;
}
function splitNewlines(str) {
	if ((typeof str === "string" || str instanceof String) && str.indexOf("\n") > -1) return str.split("\n");
	return str;
}
function createTooltipItem(chart, item) {
	const { element, datasetIndex, index } = item;
	const controller = chart.getDatasetMeta(datasetIndex).controller;
	const { label, value } = controller.getLabelAndValue(index);
	return {
		chart,
		label,
		parsed: controller.getParsed(index),
		raw: chart.data.datasets[datasetIndex].data[index],
		formattedValue: value,
		dataset: controller.getDataset(),
		dataIndex: index,
		datasetIndex,
		element
	};
}
function getTooltipSize(tooltip, options) {
	const ctx = tooltip.chart.ctx;
	const { body, footer, title } = tooltip;
	const { boxWidth, boxHeight } = options;
	const bodyFont = toFont(options.bodyFont);
	const titleFont = toFont(options.titleFont);
	const footerFont = toFont(options.footerFont);
	const titleLineCount = title.length;
	const footerLineCount = footer.length;
	const bodyLineItemCount = body.length;
	const padding = toPadding(options.padding);
	let height = padding.height;
	let width = 0;
	let combinedBodyLength = body.reduce((count, bodyItem) => count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
	combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
	if (titleLineCount) height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
	if (combinedBodyLength) {
		const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
		height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
	}
	if (footerLineCount) height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
	let widthPadding = 0;
	const maxLineWidth = function(line) {
		width = Math.max(width, ctx.measureText(line).width + widthPadding);
	};
	ctx.save();
	ctx.font = titleFont.string;
	each(tooltip.title, maxLineWidth);
	ctx.font = bodyFont.string;
	each(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
	widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
	each(body, (bodyItem) => {
		each(bodyItem.before, maxLineWidth);
		each(bodyItem.lines, maxLineWidth);
		each(bodyItem.after, maxLineWidth);
	});
	widthPadding = 0;
	ctx.font = footerFont.string;
	each(tooltip.footer, maxLineWidth);
	ctx.restore();
	width += padding.width;
	return {
		width,
		height
	};
}
function determineYAlign(chart, size) {
	const { y, height } = size;
	if (y < height / 2) return "top";
	else if (y > chart.height - height / 2) return "bottom";
	return "center";
}
function doesNotFitWithAlign(xAlign, chart, options, size) {
	const { x, width } = size;
	const caret = options.caretSize + options.caretPadding;
	if (xAlign === "left" && x + width + caret > chart.width) return true;
	if (xAlign === "right" && x - width - caret < 0) return true;
}
function determineXAlign(chart, options, size, yAlign) {
	const { x, width } = size;
	const { width: chartWidth, chartArea: { left, right } } = chart;
	let xAlign = "center";
	if (yAlign === "center") xAlign = x <= (left + right) / 2 ? "left" : "right";
	else if (x <= width / 2) xAlign = "left";
	else if (x >= chartWidth - width / 2) xAlign = "right";
	if (doesNotFitWithAlign(xAlign, chart, options, size)) xAlign = "center";
	return xAlign;
}
function determineAlignment(chart, options, size) {
	const yAlign = size.yAlign || options.yAlign || determineYAlign(chart, size);
	return {
		xAlign: size.xAlign || options.xAlign || determineXAlign(chart, options, size, yAlign),
		yAlign
	};
}
function alignX(size, xAlign) {
	let { x, width } = size;
	if (xAlign === "right") x -= width;
	else if (xAlign === "center") x -= width / 2;
	return x;
}
function alignY(size, yAlign, paddingAndSize) {
	let { y, height } = size;
	if (yAlign === "top") y += paddingAndSize;
	else if (yAlign === "bottom") y -= height + paddingAndSize;
	else y -= height / 2;
	return y;
}
function getBackgroundPoint(options, size, alignment, chart) {
	const { caretSize, caretPadding, cornerRadius } = options;
	const { xAlign, yAlign } = alignment;
	const paddingAndSize = caretSize + caretPadding;
	const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(cornerRadius);
	let x = alignX(size, xAlign);
	const y = alignY(size, yAlign, paddingAndSize);
	if (yAlign === "center") {
		if (xAlign === "left") x += paddingAndSize;
		else if (xAlign === "right") x -= paddingAndSize;
	} else if (xAlign === "left") x -= Math.max(topLeft, bottomLeft) + caretSize;
	else if (xAlign === "right") x += Math.max(topRight, bottomRight) + caretSize;
	return {
		x: _limitValue(x, 0, chart.width - size.width),
		y: _limitValue(y, 0, chart.height - size.height)
	};
}
function getAlignedX(tooltip, align, options) {
	const padding = toPadding(options.padding);
	return align === "center" ? tooltip.x + tooltip.width / 2 : align === "right" ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
}
function getBeforeAfterBodyLines(callback) {
	return pushOrConcat([], splitNewlines(callback));
}
function createTooltipContext(parent, tooltip, tooltipItems) {
	return createContext(parent, {
		tooltip,
		tooltipItems,
		type: "tooltip"
	});
}
function overrideCallbacks(callbacks, context) {
	const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
	return override ? callbacks.override(override) : callbacks;
}
var defaultCallbacks = {
	beforeTitle: noop,
	title(tooltipItems) {
		if (tooltipItems.length > 0) {
			const item = tooltipItems[0];
			const labels = item.chart.data.labels;
			const labelCount = labels ? labels.length : 0;
			if (this && this.options && this.options.mode === "dataset") return item.dataset.label || "";
			else if (item.label) return item.label;
			else if (labelCount > 0 && item.dataIndex < labelCount) return labels[item.dataIndex];
		}
		return "";
	},
	afterTitle: noop,
	beforeBody: noop,
	beforeLabel: noop,
	label(tooltipItem) {
		if (this && this.options && this.options.mode === "dataset") return tooltipItem.label + ": " + tooltipItem.formattedValue || tooltipItem.formattedValue;
		let label = tooltipItem.dataset.label || "";
		if (label) label += ": ";
		const value = tooltipItem.formattedValue;
		if (!isNullOrUndef(value)) label += value;
		return label;
	},
	labelColor(tooltipItem) {
		const options = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex).controller.getStyle(tooltipItem.dataIndex);
		return {
			borderColor: options.borderColor,
			backgroundColor: options.backgroundColor,
			borderWidth: options.borderWidth,
			borderDash: options.borderDash,
			borderDashOffset: options.borderDashOffset,
			borderRadius: 0
		};
	},
	labelTextColor() {
		return this.options.bodyColor;
	},
	labelPointStyle(tooltipItem) {
		const options = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex).controller.getStyle(tooltipItem.dataIndex);
		return {
			pointStyle: options.pointStyle,
			rotation: options.rotation
		};
	},
	afterLabel: noop,
	afterBody: noop,
	beforeFooter: noop,
	footer: noop,
	afterFooter: noop
};
function invokeCallbackWithFallback(callbacks, name, ctx, arg) {
	const result = callbacks[name].call(ctx, arg);
	if (typeof result === "undefined") return defaultCallbacks[name].call(ctx, arg);
	return result;
}
var Tooltip = class extends Element {
	static positioners = positioners;
	constructor(config) {
		super();
		this.opacity = 0;
		this._active = [];
		this._eventPosition = void 0;
		this._size = void 0;
		this._cachedAnimations = void 0;
		this._tooltipItems = [];
		this.$animations = void 0;
		this.$context = void 0;
		this.chart = config.chart;
		this.options = config.options;
		this.dataPoints = void 0;
		this.title = void 0;
		this.beforeBody = void 0;
		this.body = void 0;
		this.afterBody = void 0;
		this.footer = void 0;
		this.xAlign = void 0;
		this.yAlign = void 0;
		this.x = void 0;
		this.y = void 0;
		this.height = void 0;
		this.width = void 0;
		this.caretX = void 0;
		this.caretY = void 0;
		this.labelColors = void 0;
		this.labelPointStyles = void 0;
		this.labelTextColors = void 0;
	}
	initialize(options) {
		this.options = options;
		this._cachedAnimations = void 0;
		this.$context = void 0;
	}
	_resolveAnimations() {
		const cached = this._cachedAnimations;
		if (cached) return cached;
		const chart = this.chart;
		const options = this.options.setContext(this.getContext());
		const opts = options.enabled && chart.options.animation && options.animations;
		const animations = new Animations(this.chart, opts);
		if (opts._cacheable) this._cachedAnimations = Object.freeze(animations);
		return animations;
	}
	getContext() {
		return this.$context || (this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
	}
	getTitle(context, options) {
		const { callbacks } = options;
		const beforeTitle = invokeCallbackWithFallback(callbacks, "beforeTitle", this, context);
		const title = invokeCallbackWithFallback(callbacks, "title", this, context);
		const afterTitle = invokeCallbackWithFallback(callbacks, "afterTitle", this, context);
		let lines = [];
		lines = pushOrConcat(lines, splitNewlines(beforeTitle));
		lines = pushOrConcat(lines, splitNewlines(title));
		lines = pushOrConcat(lines, splitNewlines(afterTitle));
		return lines;
	}
	getBeforeBody(tooltipItems, options) {
		return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, "beforeBody", this, tooltipItems));
	}
	getBody(tooltipItems, options) {
		const { callbacks } = options;
		const bodyItems = [];
		each(tooltipItems, (context) => {
			const bodyItem = {
				before: [],
				lines: [],
				after: []
			};
			const scoped = overrideCallbacks(callbacks, context);
			pushOrConcat(bodyItem.before, splitNewlines(invokeCallbackWithFallback(scoped, "beforeLabel", this, context)));
			pushOrConcat(bodyItem.lines, invokeCallbackWithFallback(scoped, "label", this, context));
			pushOrConcat(bodyItem.after, splitNewlines(invokeCallbackWithFallback(scoped, "afterLabel", this, context)));
			bodyItems.push(bodyItem);
		});
		return bodyItems;
	}
	getAfterBody(tooltipItems, options) {
		return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, "afterBody", this, tooltipItems));
	}
	getFooter(tooltipItems, options) {
		const { callbacks } = options;
		const beforeFooter = invokeCallbackWithFallback(callbacks, "beforeFooter", this, tooltipItems);
		const footer = invokeCallbackWithFallback(callbacks, "footer", this, tooltipItems);
		const afterFooter = invokeCallbackWithFallback(callbacks, "afterFooter", this, tooltipItems);
		let lines = [];
		lines = pushOrConcat(lines, splitNewlines(beforeFooter));
		lines = pushOrConcat(lines, splitNewlines(footer));
		lines = pushOrConcat(lines, splitNewlines(afterFooter));
		return lines;
	}
	_createItems(options) {
		const active = this._active;
		const data = this.chart.data;
		const labelColors = [];
		const labelPointStyles = [];
		const labelTextColors = [];
		let tooltipItems = [];
		let i, len;
		for (i = 0, len = active.length; i < len; ++i) tooltipItems.push(createTooltipItem(this.chart, active[i]));
		if (options.filter) tooltipItems = tooltipItems.filter((element, index, array) => options.filter(element, index, array, data));
		if (options.itemSort) tooltipItems = tooltipItems.sort((a, b) => options.itemSort(a, b, data));
		each(tooltipItems, (context) => {
			const scoped = overrideCallbacks(options.callbacks, context);
			labelColors.push(invokeCallbackWithFallback(scoped, "labelColor", this, context));
			labelPointStyles.push(invokeCallbackWithFallback(scoped, "labelPointStyle", this, context));
			labelTextColors.push(invokeCallbackWithFallback(scoped, "labelTextColor", this, context));
		});
		this.labelColors = labelColors;
		this.labelPointStyles = labelPointStyles;
		this.labelTextColors = labelTextColors;
		this.dataPoints = tooltipItems;
		return tooltipItems;
	}
	update(changed, replay) {
		const options = this.options.setContext(this.getContext());
		const active = this._active;
		let properties;
		let tooltipItems = [];
		if (!active.length) {
			if (this.opacity !== 0) properties = { opacity: 0 };
		} else {
			const position = positioners[options.position].call(this, active, this._eventPosition);
			tooltipItems = this._createItems(options);
			this.title = this.getTitle(tooltipItems, options);
			this.beforeBody = this.getBeforeBody(tooltipItems, options);
			this.body = this.getBody(tooltipItems, options);
			this.afterBody = this.getAfterBody(tooltipItems, options);
			this.footer = this.getFooter(tooltipItems, options);
			const size = this._size = getTooltipSize(this, options);
			const positionAndSize = Object.assign({}, position, size);
			const alignment = determineAlignment(this.chart, options, positionAndSize);
			const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
			this.xAlign = alignment.xAlign;
			this.yAlign = alignment.yAlign;
			properties = {
				opacity: 1,
				x: backgroundPoint.x,
				y: backgroundPoint.y,
				width: size.width,
				height: size.height,
				caretX: position.x,
				caretY: position.y
			};
		}
		this._tooltipItems = tooltipItems;
		this.$context = void 0;
		if (properties) this._resolveAnimations().update(this, properties);
		if (changed && options.external) options.external.call(this, {
			chart: this.chart,
			tooltip: this,
			replay
		});
	}
	drawCaret(tooltipPoint, ctx, size, options) {
		const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
		ctx.lineTo(caretPosition.x1, caretPosition.y1);
		ctx.lineTo(caretPosition.x2, caretPosition.y2);
		ctx.lineTo(caretPosition.x3, caretPosition.y3);
	}
	getCaretPosition(tooltipPoint, size, options) {
		const { xAlign, yAlign } = this;
		const { caretSize, cornerRadius } = options;
		const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(cornerRadius);
		const { x: ptX, y: ptY } = tooltipPoint;
		const { width, height } = size;
		let x1, x2, x3, y1, y2, y3;
		if (yAlign === "center") {
			y2 = ptY + height / 2;
			if (xAlign === "left") {
				x1 = ptX;
				x2 = x1 - caretSize;
				y1 = y2 + caretSize;
				y3 = y2 - caretSize;
			} else {
				x1 = ptX + width;
				x2 = x1 + caretSize;
				y1 = y2 - caretSize;
				y3 = y2 + caretSize;
			}
			x3 = x1;
		} else {
			if (xAlign === "left") x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
			else if (xAlign === "right") x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
			else x2 = this.caretX;
			if (yAlign === "top") {
				y1 = ptY;
				y2 = y1 - caretSize;
				x1 = x2 - caretSize;
				x3 = x2 + caretSize;
			} else {
				y1 = ptY + height;
				y2 = y1 + caretSize;
				x1 = x2 + caretSize;
				x3 = x2 - caretSize;
			}
			y3 = y1;
		}
		return {
			x1,
			x2,
			x3,
			y1,
			y2,
			y3
		};
	}
	drawTitle(pt, ctx, options) {
		const title = this.title;
		const length = title.length;
		let titleFont, titleSpacing, i;
		if (length) {
			const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
			pt.x = getAlignedX(this, options.titleAlign, options);
			ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
			ctx.textBaseline = "middle";
			titleFont = toFont(options.titleFont);
			titleSpacing = options.titleSpacing;
			ctx.fillStyle = options.titleColor;
			ctx.font = titleFont.string;
			for (i = 0; i < length; ++i) {
				ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
				pt.y += titleFont.lineHeight + titleSpacing;
				if (i + 1 === length) pt.y += options.titleMarginBottom - titleSpacing;
			}
		}
	}
	_drawColorBox(ctx, pt, i, rtlHelper, options) {
		const labelColor = this.labelColors[i];
		const labelPointStyle = this.labelPointStyles[i];
		const { boxHeight, boxWidth } = options;
		const bodyFont = toFont(options.bodyFont);
		const colorX = getAlignedX(this, "left", options);
		const rtlColorX = rtlHelper.x(colorX);
		const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
		const colorY = pt.y + yOffSet;
		if (options.usePointStyle) {
			const drawOptions = {
				radius: Math.min(boxWidth, boxHeight) / 2,
				pointStyle: labelPointStyle.pointStyle,
				rotation: labelPointStyle.rotation,
				borderWidth: 1
			};
			const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
			const centerY = colorY + boxHeight / 2;
			ctx.strokeStyle = options.multiKeyBackground;
			ctx.fillStyle = options.multiKeyBackground;
			drawPoint(ctx, drawOptions, centerX, centerY);
			ctx.strokeStyle = labelColor.borderColor;
			ctx.fillStyle = labelColor.backgroundColor;
			drawPoint(ctx, drawOptions, centerX, centerY);
		} else {
			ctx.lineWidth = isObject(labelColor.borderWidth) ? Math.max(...Object.values(labelColor.borderWidth)) : labelColor.borderWidth || 1;
			ctx.strokeStyle = labelColor.borderColor;
			ctx.setLineDash(labelColor.borderDash || []);
			ctx.lineDashOffset = labelColor.borderDashOffset || 0;
			const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth);
			const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - 2);
			const borderRadius = toTRBLCorners(labelColor.borderRadius);
			if (Object.values(borderRadius).some((v) => v !== 0)) {
				ctx.beginPath();
				ctx.fillStyle = options.multiKeyBackground;
				addRoundedRectPath(ctx, {
					x: outerX,
					y: colorY,
					w: boxWidth,
					h: boxHeight,
					radius: borderRadius
				});
				ctx.fill();
				ctx.stroke();
				ctx.fillStyle = labelColor.backgroundColor;
				ctx.beginPath();
				addRoundedRectPath(ctx, {
					x: innerX,
					y: colorY + 1,
					w: boxWidth - 2,
					h: boxHeight - 2,
					radius: borderRadius
				});
				ctx.fill();
			} else {
				ctx.fillStyle = options.multiKeyBackground;
				ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
				ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
				ctx.fillStyle = labelColor.backgroundColor;
				ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
			}
		}
		ctx.fillStyle = this.labelTextColors[i];
	}
	drawBody(pt, ctx, options) {
		const { body } = this;
		const { bodySpacing, bodyAlign, displayColors, boxHeight, boxWidth, boxPadding } = options;
		const bodyFont = toFont(options.bodyFont);
		let bodyLineHeight = bodyFont.lineHeight;
		let xLinePadding = 0;
		const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
		const fillLineOfText = function(line) {
			ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
			pt.y += bodyLineHeight + bodySpacing;
		};
		const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
		let bodyItem, textColor, lines, i, j, ilen, jlen;
		ctx.textAlign = bodyAlign;
		ctx.textBaseline = "middle";
		ctx.font = bodyFont.string;
		pt.x = getAlignedX(this, bodyAlignForCalculation, options);
		ctx.fillStyle = options.bodyColor;
		each(this.beforeBody, fillLineOfText);
		xLinePadding = displayColors && bodyAlignForCalculation !== "right" ? bodyAlign === "center" ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
		for (i = 0, ilen = body.length; i < ilen; ++i) {
			bodyItem = body[i];
			textColor = this.labelTextColors[i];
			ctx.fillStyle = textColor;
			each(bodyItem.before, fillLineOfText);
			lines = bodyItem.lines;
			if (displayColors && lines.length) {
				this._drawColorBox(ctx, pt, i, rtlHelper, options);
				bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
			}
			for (j = 0, jlen = lines.length; j < jlen; ++j) {
				fillLineOfText(lines[j]);
				bodyLineHeight = bodyFont.lineHeight;
			}
			each(bodyItem.after, fillLineOfText);
		}
		xLinePadding = 0;
		bodyLineHeight = bodyFont.lineHeight;
		each(this.afterBody, fillLineOfText);
		pt.y -= bodySpacing;
	}
	drawFooter(pt, ctx, options) {
		const footer = this.footer;
		const length = footer.length;
		let footerFont, i;
		if (length) {
			const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
			pt.x = getAlignedX(this, options.footerAlign, options);
			pt.y += options.footerMarginTop;
			ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
			ctx.textBaseline = "middle";
			footerFont = toFont(options.footerFont);
			ctx.fillStyle = options.footerColor;
			ctx.font = footerFont.string;
			for (i = 0; i < length; ++i) {
				ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
				pt.y += footerFont.lineHeight + options.footerSpacing;
			}
		}
	}
	drawBackground(pt, ctx, tooltipSize, options) {
		const { xAlign, yAlign } = this;
		const { x, y } = pt;
		const { width, height } = tooltipSize;
		const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(options.cornerRadius);
		ctx.fillStyle = options.backgroundColor;
		ctx.strokeStyle = options.borderColor;
		ctx.lineWidth = options.borderWidth;
		ctx.beginPath();
		ctx.moveTo(x + topLeft, y);
		if (yAlign === "top") this.drawCaret(pt, ctx, tooltipSize, options);
		ctx.lineTo(x + width - topRight, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
		if (yAlign === "center" && xAlign === "right") this.drawCaret(pt, ctx, tooltipSize, options);
		ctx.lineTo(x + width, y + height - bottomRight);
		ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
		if (yAlign === "bottom") this.drawCaret(pt, ctx, tooltipSize, options);
		ctx.lineTo(x + bottomLeft, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
		if (yAlign === "center" && xAlign === "left") this.drawCaret(pt, ctx, tooltipSize, options);
		ctx.lineTo(x, y + topLeft);
		ctx.quadraticCurveTo(x, y, x + topLeft, y);
		ctx.closePath();
		ctx.fill();
		if (options.borderWidth > 0) ctx.stroke();
	}
	_updateAnimationTarget(options) {
		const chart = this.chart;
		const anims = this.$animations;
		const animX = anims && anims.x;
		const animY = anims && anims.y;
		if (animX || animY) {
			const position = positioners[options.position].call(this, this._active, this._eventPosition);
			if (!position) return;
			const size = this._size = getTooltipSize(this, options);
			const positionAndSize = Object.assign({}, position, this._size);
			const alignment = determineAlignment(chart, options, positionAndSize);
			const point = getBackgroundPoint(options, positionAndSize, alignment, chart);
			if (animX._to !== point.x || animY._to !== point.y) {
				this.xAlign = alignment.xAlign;
				this.yAlign = alignment.yAlign;
				this.width = size.width;
				this.height = size.height;
				this.caretX = position.x;
				this.caretY = position.y;
				this._resolveAnimations().update(this, point);
			}
		}
	}
	_willRender() {
		return !!this.opacity;
	}
	draw(ctx) {
		const options = this.options.setContext(this.getContext());
		let opacity = this.opacity;
		if (!opacity) return;
		this._updateAnimationTarget(options);
		const tooltipSize = {
			width: this.width,
			height: this.height
		};
		const pt = {
			x: this.x,
			y: this.y
		};
		opacity = Math.abs(opacity) < .001 ? 0 : opacity;
		const padding = toPadding(options.padding);
		const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
		if (options.enabled && hasTooltipContent) {
			ctx.save();
			ctx.globalAlpha = opacity;
			this.drawBackground(pt, ctx, tooltipSize, options);
			overrideTextDirection(ctx, options.textDirection);
			pt.y += padding.top;
			this.drawTitle(pt, ctx, options);
			this.drawBody(pt, ctx, options);
			this.drawFooter(pt, ctx, options);
			restoreTextDirection(ctx, options.textDirection);
			ctx.restore();
		}
	}
	getActiveElements() {
		return this._active || [];
	}
	setActiveElements(activeElements, eventPosition) {
		const lastActive = this._active;
		const active = activeElements.map(({ datasetIndex, index }) => {
			const meta = this.chart.getDatasetMeta(datasetIndex);
			if (!meta) throw new Error("Cannot find a dataset at index " + datasetIndex);
			return {
				datasetIndex,
				element: meta.data[index],
				index
			};
		});
		const changed = !_elementsEqual(lastActive, active);
		const positionChanged = this._positionChanged(active, eventPosition);
		if (changed || positionChanged) {
			this._active = active;
			this._eventPosition = eventPosition;
			this._ignoreReplayEvents = true;
			this.update(true);
		}
	}
	handleEvent(e, replay, inChartArea = true) {
		if (replay && this._ignoreReplayEvents) return false;
		this._ignoreReplayEvents = false;
		const options = this.options;
		const lastActive = this._active || [];
		const active = this._getActiveElements(e, lastActive, replay, inChartArea);
		const positionChanged = this._positionChanged(active, e);
		const changed = replay || !_elementsEqual(active, lastActive) || positionChanged;
		if (changed) {
			this._active = active;
			if (options.enabled || options.external) {
				this._eventPosition = {
					x: e.x,
					y: e.y
				};
				this.update(true, replay);
			}
		}
		return changed;
	}
	_getActiveElements(e, lastActive, replay, inChartArea) {
		const options = this.options;
		if (e.type === "mouseout") return [];
		if (!inChartArea) return lastActive.filter((i) => this.chart.data.datasets[i.datasetIndex] && this.chart.getDatasetMeta(i.datasetIndex).controller.getParsed(i.index) !== void 0);
		const active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
		if (options.reverse) active.reverse();
		return active;
	}
	_positionChanged(active, e) {
		const { caretX, caretY, options } = this;
		const position = positioners[options.position].call(this, active, e);
		return position !== false && (caretX !== position.x || caretY !== position.y);
	}
};
var plugin_tooltip = {
	id: "tooltip",
	_element: Tooltip,
	positioners,
	afterInit(chart, _args, options) {
		if (options) chart.tooltip = new Tooltip({
			chart,
			options
		});
	},
	beforeUpdate(chart, _args, options) {
		if (chart.tooltip) chart.tooltip.initialize(options);
	},
	reset(chart, _args, options) {
		if (chart.tooltip) chart.tooltip.initialize(options);
	},
	afterDraw(chart) {
		const tooltip = chart.tooltip;
		if (tooltip && tooltip._willRender()) {
			const args = { tooltip };
			if (chart.notifyPlugins("beforeTooltipDraw", {
				...args,
				cancelable: true
			}) === false) return;
			tooltip.draw(chart.ctx);
			chart.notifyPlugins("afterTooltipDraw", args);
		}
	},
	afterEvent(chart, args) {
		if (chart.tooltip) {
			const useFinalPosition = args.replay;
			if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) args.changed = true;
		}
	},
	defaults: {
		enabled: true,
		external: null,
		position: "average",
		backgroundColor: "rgba(0,0,0,0.8)",
		titleColor: "#fff",
		titleFont: { weight: "bold" },
		titleSpacing: 2,
		titleMarginBottom: 6,
		titleAlign: "left",
		bodyColor: "#fff",
		bodySpacing: 2,
		bodyFont: {},
		bodyAlign: "left",
		footerColor: "#fff",
		footerSpacing: 2,
		footerMarginTop: 6,
		footerFont: { weight: "bold" },
		footerAlign: "left",
		padding: 6,
		caretPadding: 2,
		caretSize: 5,
		cornerRadius: 6,
		boxHeight: (ctx, opts) => opts.bodyFont.size,
		boxWidth: (ctx, opts) => opts.bodyFont.size,
		multiKeyBackground: "#fff",
		displayColors: true,
		boxPadding: 0,
		borderColor: "rgba(0,0,0,0)",
		borderWidth: 0,
		animation: {
			duration: 400,
			easing: "easeOutQuart"
		},
		animations: {
			numbers: {
				type: "number",
				properties: [
					"x",
					"y",
					"width",
					"height",
					"caretX",
					"caretY"
				]
			},
			opacity: {
				easing: "linear",
				duration: 200
			}
		},
		callbacks: defaultCallbacks
	},
	defaultRoutes: {
		bodyFont: "font",
		footerFont: "font",
		titleFont: "font"
	},
	descriptors: {
		_scriptable: (name) => name !== "filter" && name !== "itemSort" && name !== "external",
		_indexable: false,
		callbacks: {
			_scriptable: false,
			_indexable: false
		},
		animation: { _fallback: false },
		animations: { _fallback: "animation" }
	},
	additionalOptionScopes: ["interaction"]
};
var addIfString = (labels, raw, index, addedLabels) => {
	if (typeof raw === "string") {
		index = labels.push(raw) - 1;
		addedLabels.unshift({
			index,
			label: raw
		});
	} else if (isNaN(raw)) index = null;
	return index;
};
function findOrAddLabel(labels, raw, index, addedLabels) {
	const first = labels.indexOf(raw);
	if (first === -1) return addIfString(labels, raw, index, addedLabels);
	return first !== labels.lastIndexOf(raw) ? index : first;
}
var validIndex = (index, max) => index === null ? null : _limitValue(Math.round(index), 0, max);
function _getLabelForValue(value) {
	const labels = this.getLabels();
	if (value >= 0 && value < labels.length) return labels[value];
	return value;
}
var CategoryScale = class extends Scale {
	static id = "category";
	static defaults = { ticks: { callback: _getLabelForValue } };
	constructor(cfg) {
		super(cfg);
		this._startValue = void 0;
		this._valueRange = 0;
		this._addedLabels = [];
	}
	init(scaleOptions) {
		const added = this._addedLabels;
		if (added.length) {
			const labels = this.getLabels();
			for (const { index, label } of added) if (labels[index] === label) labels.splice(index, 1);
			this._addedLabels = [];
		}
		super.init(scaleOptions);
	}
	parse(raw, index) {
		if (isNullOrUndef(raw)) return null;
		const labels = this.getLabels();
		index = isFinite(index) && labels[index] === raw ? index : findOrAddLabel(labels, raw, valueOrDefault(index, raw), this._addedLabels);
		return validIndex(index, labels.length - 1);
	}
	determineDataLimits() {
		const { minDefined, maxDefined } = this.getUserBounds();
		let { min, max } = this.getMinMax(true);
		if (this.options.bounds === "ticks") {
			if (!minDefined) min = 0;
			if (!maxDefined) max = this.getLabels().length - 1;
		}
		this.min = min;
		this.max = max;
	}
	buildTicks() {
		const min = this.min;
		const max = this.max;
		const offset = this.options.offset;
		const ticks = [];
		let labels = this.getLabels();
		labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
		this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
		this._startValue = this.min - (offset ? .5 : 0);
		for (let value = min; value <= max; value++) ticks.push({ value });
		return ticks;
	}
	getLabelForValue(value) {
		return _getLabelForValue.call(this, value);
	}
	configure() {
		super.configure();
		if (!this.isHorizontal()) this._reversePixels = !this._reversePixels;
	}
	getPixelForValue(value) {
		if (typeof value !== "number") value = this.parse(value);
		return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
	}
	getPixelForTick(index) {
		const ticks = this.ticks;
		if (index < 0 || index > ticks.length - 1) return null;
		return this.getPixelForValue(ticks[index].value);
	}
	getValueForPixel(pixel) {
		return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
	}
	getBasePixel() {
		return this.bottom;
	}
};
function generateTicks$1(generationOptions, dataRange) {
	const ticks = [];
	const MIN_SPACING = 1e-14;
	const { bounds, step, min, max, precision, count, maxTicks, maxDigits, includeBounds } = generationOptions;
	const unit = step || 1;
	const maxSpaces = maxTicks - 1;
	const { min: rmin, max: rmax } = dataRange;
	const minDefined = !isNullOrUndef(min);
	const maxDefined = !isNullOrUndef(max);
	const countDefined = !isNullOrUndef(count);
	const minSpacing = (rmax - rmin) / (maxDigits + 1);
	let spacing = niceNum((rmax - rmin) / maxSpaces / unit) * unit;
	let factor, niceMin, niceMax, numSpaces;
	if (spacing < MIN_SPACING && !minDefined && !maxDefined) return [{ value: rmin }, { value: rmax }];
	numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
	if (numSpaces > maxSpaces) spacing = niceNum(numSpaces * spacing / maxSpaces / unit) * unit;
	if (!isNullOrUndef(precision)) {
		factor = Math.pow(10, precision);
		spacing = Math.ceil(spacing * factor) / factor;
	}
	if (bounds === "ticks") {
		niceMin = Math.floor(rmin / spacing) * spacing;
		niceMax = Math.ceil(rmax / spacing) * spacing;
	} else {
		niceMin = rmin;
		niceMax = rmax;
	}
	if (minDefined && maxDefined && step && almostWhole((max - min) / step, spacing / 1e3)) {
		numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
		spacing = (max - min) / numSpaces;
		niceMin = min;
		niceMax = max;
	} else if (countDefined) {
		niceMin = minDefined ? min : niceMin;
		niceMax = maxDefined ? max : niceMax;
		numSpaces = count - 1;
		spacing = (niceMax - niceMin) / numSpaces;
	} else {
		numSpaces = (niceMax - niceMin) / spacing;
		if (almostEquals(numSpaces, Math.round(numSpaces), spacing / 1e3)) numSpaces = Math.round(numSpaces);
		else numSpaces = Math.ceil(numSpaces);
	}
	const decimalPlaces = Math.max(_decimalPlaces(spacing), _decimalPlaces(niceMin));
	factor = Math.pow(10, isNullOrUndef(precision) ? decimalPlaces : precision);
	niceMin = Math.round(niceMin * factor) / factor;
	niceMax = Math.round(niceMax * factor) / factor;
	let j = 0;
	if (minDefined) {
		if (includeBounds && niceMin !== min) {
			ticks.push({ value: min });
			if (niceMin < min) j++;
			if (almostEquals(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) j++;
		} else if (niceMin < min) j++;
	}
	for (; j < numSpaces; ++j) {
		const tickValue = Math.round((niceMin + j * spacing) * factor) / factor;
		if (maxDefined && tickValue > max) break;
		ticks.push({ value: tickValue });
	}
	if (maxDefined && includeBounds && niceMax !== max) if (ticks.length && almostEquals(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) ticks[ticks.length - 1].value = max;
	else ticks.push({ value: max });
	else if (!maxDefined || niceMax === max) ticks.push({ value: niceMax });
	return ticks;
}
function relativeLabelSize(value, minSpacing, { horizontal, minRotation }) {
	const rad = toRadians(minRotation);
	const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || .001;
	const length = .75 * minSpacing * ("" + value).length;
	return Math.min(minSpacing / ratio, length);
}
var LinearScaleBase = class extends Scale {
	constructor(cfg) {
		super(cfg);
		this.start = void 0;
		this.end = void 0;
		this._startValue = void 0;
		this._endValue = void 0;
		this._valueRange = 0;
	}
	parse(raw, index) {
		if (isNullOrUndef(raw)) return null;
		if ((typeof raw === "number" || raw instanceof Number) && !isFinite(+raw)) return null;
		return +raw;
	}
	handleTickRangeOptions() {
		const { beginAtZero } = this.options;
		const { minDefined, maxDefined } = this.getUserBounds();
		let { min, max } = this;
		const setMin = (v) => min = minDefined ? min : v;
		const setMax = (v) => max = maxDefined ? max : v;
		if (beginAtZero) {
			const minSign = sign(min);
			const maxSign = sign(max);
			if (minSign < 0 && maxSign < 0) setMax(0);
			else if (minSign > 0 && maxSign > 0) setMin(0);
		}
		if (min === max) {
			let offset = max === 0 ? 1 : Math.abs(max * .05);
			setMax(max + offset);
			if (!beginAtZero) setMin(min - offset);
		}
		this.min = min;
		this.max = max;
	}
	getTickLimit() {
		let { maxTicksLimit, stepSize } = this.options.ticks;
		let maxTicks;
		if (stepSize) {
			maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
			if (maxTicks > 1e3) {
				console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
				maxTicks = 1e3;
			}
		} else {
			maxTicks = this.computeTickLimit();
			maxTicksLimit = maxTicksLimit || 11;
		}
		if (maxTicksLimit) maxTicks = Math.min(maxTicksLimit, maxTicks);
		return maxTicks;
	}
	computeTickLimit() {
		return Number.POSITIVE_INFINITY;
	}
	buildTicks() {
		const opts = this.options;
		const tickOpts = opts.ticks;
		let maxTicks = this.getTickLimit();
		maxTicks = Math.max(2, maxTicks);
		const ticks = generateTicks$1({
			maxTicks,
			bounds: opts.bounds,
			min: opts.min,
			max: opts.max,
			precision: tickOpts.precision,
			step: tickOpts.stepSize,
			count: tickOpts.count,
			maxDigits: this._maxDigits(),
			horizontal: this.isHorizontal(),
			minRotation: tickOpts.minRotation || 0,
			includeBounds: tickOpts.includeBounds !== false
		}, this._range || this);
		if (opts.bounds === "ticks") _setMinAndMaxByKey(ticks, this, "value");
		if (opts.reverse) {
			ticks.reverse();
			this.start = this.max;
			this.end = this.min;
		} else {
			this.start = this.min;
			this.end = this.max;
		}
		return ticks;
	}
	configure() {
		const ticks = this.ticks;
		let start = this.min;
		let end = this.max;
		super.configure();
		if (this.options.offset && ticks.length) {
			const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
			start -= offset;
			end += offset;
		}
		this._startValue = start;
		this._endValue = end;
		this._valueRange = end - start;
	}
	getLabelForValue(value) {
		return formatNumber(value, this.chart.options.locale, this.options.ticks.format);
	}
};
var LinearScale = class extends LinearScaleBase {
	static id = "linear";
	static defaults = { ticks: { callback: Ticks.formatters.numeric } };
	determineDataLimits() {
		const { min, max } = this.getMinMax(true);
		this.min = isNumberFinite(min) ? min : 0;
		this.max = isNumberFinite(max) ? max : 1;
		this.handleTickRangeOptions();
	}
	computeTickLimit() {
		const horizontal = this.isHorizontal();
		const length = horizontal ? this.width : this.height;
		const minRotation = toRadians(this.options.ticks.minRotation);
		const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || .001;
		const tickFont = this._resolveTickFontOptions(0);
		return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
	}
	getPixelForValue(value) {
		return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
	}
	getValueForPixel(pixel) {
		return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
	}
};
var log10Floor = (v) => Math.floor(log10(v));
var changeExponent = (v, m) => Math.pow(10, log10Floor(v) + m);
function isMajor(tickVal) {
	return tickVal / Math.pow(10, log10Floor(tickVal)) === 1;
}
function steps(min, max, rangeExp) {
	const rangeStep = Math.pow(10, rangeExp);
	const start = Math.floor(min / rangeStep);
	return Math.ceil(max / rangeStep) - start;
}
function startExp(min, max) {
	let rangeExp = log10Floor(max - min);
	while (steps(min, max, rangeExp) > 10) rangeExp++;
	while (steps(min, max, rangeExp) < 10) rangeExp--;
	return Math.min(rangeExp, log10Floor(min));
}
function generateTicks(generationOptions, { min, max }) {
	min = finiteOrDefault(generationOptions.min, min);
	const ticks = [];
	const minExp = log10Floor(min);
	let exp = startExp(min, max);
	let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
	const stepSize = Math.pow(10, exp);
	const base = minExp > exp ? Math.pow(10, minExp) : 0;
	const start = Math.round((min - base) * precision) / precision;
	const offset = Math.floor((min - base) / stepSize / 10) * stepSize * 10;
	let significand = Math.floor((start - offset) / Math.pow(10, exp));
	let value = finiteOrDefault(generationOptions.min, Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision);
	while (value < max) {
		ticks.push({
			value,
			major: isMajor(value),
			significand
		});
		if (significand >= 10) significand = significand < 15 ? 15 : 20;
		else significand++;
		if (significand >= 20) {
			exp++;
			significand = 2;
			precision = exp >= 0 ? 1 : precision;
		}
		value = Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision;
	}
	const lastTick = finiteOrDefault(generationOptions.max, value);
	ticks.push({
		value: lastTick,
		major: isMajor(lastTick),
		significand
	});
	return ticks;
}
(class extends Scale {
	static id = "logarithmic";
	static defaults = { ticks: {
		callback: Ticks.formatters.logarithmic,
		major: { enabled: true }
	} };
	constructor(cfg) {
		super(cfg);
		this.start = void 0;
		this.end = void 0;
		this._startValue = void 0;
		this._valueRange = 0;
	}
	parse(raw, index) {
		const value = LinearScaleBase.prototype.parse.apply(this, [raw, index]);
		if (value === 0) {
			this._zero = true;
			return;
		}
		return isNumberFinite(value) && value > 0 ? value : null;
	}
	determineDataLimits() {
		const { min, max } = this.getMinMax(true);
		this.min = isNumberFinite(min) ? Math.max(0, min) : null;
		this.max = isNumberFinite(max) ? Math.max(0, max) : null;
		if (this.options.beginAtZero) this._zero = true;
		if (this._zero && this.min !== this._suggestedMin && !isNumberFinite(this._userMin)) this.min = min === changeExponent(this.min, 0) ? changeExponent(this.min, -1) : changeExponent(this.min, 0);
		this.handleTickRangeOptions();
	}
	handleTickRangeOptions() {
		const { minDefined, maxDefined } = this.getUserBounds();
		let min = this.min;
		let max = this.max;
		const setMin = (v) => min = minDefined ? min : v;
		const setMax = (v) => max = maxDefined ? max : v;
		if (min === max) if (min <= 0) {
			setMin(1);
			setMax(10);
		} else {
			setMin(changeExponent(min, -1));
			setMax(changeExponent(max, 1));
		}
		if (min <= 0) setMin(changeExponent(max, -1));
		if (max <= 0) setMax(changeExponent(min, 1));
		this.min = min;
		this.max = max;
	}
	buildTicks() {
		const opts = this.options;
		const ticks = generateTicks({
			min: this._userMin,
			max: this._userMax
		}, this);
		if (opts.bounds === "ticks") _setMinAndMaxByKey(ticks, this, "value");
		if (opts.reverse) {
			ticks.reverse();
			this.start = this.max;
			this.end = this.min;
		} else {
			this.start = this.min;
			this.end = this.max;
		}
		return ticks;
	}
	getLabelForValue(value) {
		return value === void 0 ? "0" : formatNumber(value, this.chart.options.locale, this.options.ticks.format);
	}
	configure() {
		const start = this.min;
		super.configure();
		this._startValue = log10(start);
		this._valueRange = log10(this.max) - log10(start);
	}
	getPixelForValue(value) {
		if (value === void 0 || value === 0) value = this.min;
		if (value === null || isNaN(value)) return NaN;
		return this.getPixelForDecimal(value === this.min ? 0 : (log10(value) - this._startValue) / this._valueRange);
	}
	getValueForPixel(pixel) {
		const decimal = this.getDecimalForPixel(pixel);
		return Math.pow(10, this._startValue + decimal * this._valueRange);
	}
});
function getTickBackdropHeight(opts) {
	const tickOpts = opts.ticks;
	if (tickOpts.display && opts.display) {
		const padding = toPadding(tickOpts.backdropPadding);
		return valueOrDefault(tickOpts.font && tickOpts.font.size, defaults.font.size) + padding.height;
	}
	return 0;
}
function measureLabelSize(ctx, font, label) {
	label = isArray(label) ? label : [label];
	return {
		w: _longestText(ctx, font.string, label),
		h: label.length * font.lineHeight
	};
}
function determineLimits(angle, pos, size, min, max) {
	if (angle === min || angle === max) return {
		start: pos - size / 2,
		end: pos + size / 2
	};
	else if (angle < min || angle > max) return {
		start: pos - size,
		end: pos
	};
	return {
		start: pos,
		end: pos + size
	};
}
function fitWithPointLabels(scale) {
	const orig = {
		l: scale.left + scale._padding.left,
		r: scale.right - scale._padding.right,
		t: scale.top + scale._padding.top,
		b: scale.bottom - scale._padding.bottom
	};
	const limits = Object.assign({}, orig);
	const labelSizes = [];
	const padding = [];
	const valueCount = scale._pointLabels.length;
	const pointLabelOpts = scale.options.pointLabels;
	const additionalAngle = pointLabelOpts.centerPointLabels ? PI / valueCount : 0;
	for (let i = 0; i < valueCount; i++) {
		const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
		padding[i] = opts.padding;
		const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
		const plFont = toFont(opts.font);
		const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
		labelSizes[i] = textSize;
		const angleRadians = _normalizeAngle(scale.getIndexAngle(i) + additionalAngle);
		const angle = Math.round(toDegrees(angleRadians));
		updateLimits(limits, orig, angleRadians, determineLimits(angle, pointPosition.x, textSize.w, 0, 180), determineLimits(angle, pointPosition.y, textSize.h, 90, 270));
	}
	scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
	scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
}
function updateLimits(limits, orig, angle, hLimits, vLimits) {
	const sin = Math.abs(Math.sin(angle));
	const cos = Math.abs(Math.cos(angle));
	let x = 0;
	let y = 0;
	if (hLimits.start < orig.l) {
		x = (orig.l - hLimits.start) / sin;
		limits.l = Math.min(limits.l, orig.l - x);
	} else if (hLimits.end > orig.r) {
		x = (hLimits.end - orig.r) / sin;
		limits.r = Math.max(limits.r, orig.r + x);
	}
	if (vLimits.start < orig.t) {
		y = (orig.t - vLimits.start) / cos;
		limits.t = Math.min(limits.t, orig.t - y);
	} else if (vLimits.end > orig.b) {
		y = (vLimits.end - orig.b) / cos;
		limits.b = Math.max(limits.b, orig.b + y);
	}
}
function createPointLabelItem(scale, index, itemOpts) {
	const outerDistance = scale.drawingArea;
	const { extra, additionalAngle, padding, size } = itemOpts;
	const pointLabelPosition = scale.getPointPosition(index, outerDistance + extra + padding, additionalAngle);
	const angle = Math.round(toDegrees(_normalizeAngle(pointLabelPosition.angle + HALF_PI)));
	const y = yForAngle(pointLabelPosition.y, size.h, angle);
	const textAlign = getTextAlignForAngle(angle);
	const left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
	return {
		visible: true,
		x: pointLabelPosition.x,
		y,
		textAlign,
		left,
		top: y,
		right: left + size.w,
		bottom: y + size.h
	};
}
function isNotOverlapped(item, area) {
	if (!area) return true;
	const { left, top, right, bottom } = item;
	return !(_isPointInArea({
		x: left,
		y: top
	}, area) || _isPointInArea({
		x: left,
		y: bottom
	}, area) || _isPointInArea({
		x: right,
		y: top
	}, area) || _isPointInArea({
		x: right,
		y: bottom
	}, area));
}
function buildPointLabelItems(scale, labelSizes, padding) {
	const items = [];
	const valueCount = scale._pointLabels.length;
	const opts = scale.options;
	const { centerPointLabels, display } = opts.pointLabels;
	const itemOpts = {
		extra: getTickBackdropHeight(opts) / 2,
		additionalAngle: centerPointLabels ? PI / valueCount : 0
	};
	let area;
	for (let i = 0; i < valueCount; i++) {
		itemOpts.padding = padding[i];
		itemOpts.size = labelSizes[i];
		const item = createPointLabelItem(scale, i, itemOpts);
		items.push(item);
		if (display === "auto") {
			item.visible = isNotOverlapped(item, area);
			if (item.visible) area = item;
		}
	}
	return items;
}
function getTextAlignForAngle(angle) {
	if (angle === 0 || angle === 180) return "center";
	else if (angle < 180) return "left";
	return "right";
}
function leftForTextAlign(x, w, align) {
	if (align === "right") x -= w;
	else if (align === "center") x -= w / 2;
	return x;
}
function yForAngle(y, h, angle) {
	if (angle === 90 || angle === 270) y -= h / 2;
	else if (angle > 270 || angle < 90) y -= h;
	return y;
}
function drawPointLabelBox(ctx, opts, item) {
	const { left, top, right, bottom } = item;
	const { backdropColor } = opts;
	if (!isNullOrUndef(backdropColor)) {
		const borderRadius = toTRBLCorners(opts.borderRadius);
		const padding = toPadding(opts.backdropPadding);
		ctx.fillStyle = backdropColor;
		const backdropLeft = left - padding.left;
		const backdropTop = top - padding.top;
		const backdropWidth = right - left + padding.width;
		const backdropHeight = bottom - top + padding.height;
		if (Object.values(borderRadius).some((v) => v !== 0)) {
			ctx.beginPath();
			addRoundedRectPath(ctx, {
				x: backdropLeft,
				y: backdropTop,
				w: backdropWidth,
				h: backdropHeight,
				radius: borderRadius
			});
			ctx.fill();
		} else ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
	}
}
function drawPointLabels(scale, labelCount) {
	const { ctx, options: { pointLabels } } = scale;
	for (let i = labelCount - 1; i >= 0; i--) {
		const item = scale._pointLabelItems[i];
		if (!item.visible) continue;
		const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
		drawPointLabelBox(ctx, optsAtIndex, item);
		const plFont = toFont(optsAtIndex.font);
		const { x, y, textAlign } = item;
		renderText(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
			color: optsAtIndex.color,
			textAlign,
			textBaseline: "middle"
		});
	}
}
function pathRadiusLine(scale, radius, circular, labelCount) {
	const { ctx } = scale;
	if (circular) ctx.arc(scale.xCenter, scale.yCenter, radius, 0, TAU);
	else {
		let pointPosition = scale.getPointPosition(0, radius);
		ctx.moveTo(pointPosition.x, pointPosition.y);
		for (let i = 1; i < labelCount; i++) {
			pointPosition = scale.getPointPosition(i, radius);
			ctx.lineTo(pointPosition.x, pointPosition.y);
		}
	}
}
function drawRadiusLine(scale, gridLineOpts, radius, labelCount, borderOpts) {
	const ctx = scale.ctx;
	const circular = gridLineOpts.circular;
	const { color, lineWidth } = gridLineOpts;
	if (!circular && !labelCount || !color || !lineWidth || radius < 0) return;
	ctx.save();
	ctx.strokeStyle = color;
	ctx.lineWidth = lineWidth;
	ctx.setLineDash(borderOpts.dash || []);
	ctx.lineDashOffset = borderOpts.dashOffset;
	ctx.beginPath();
	pathRadiusLine(scale, radius, circular, labelCount);
	ctx.closePath();
	ctx.stroke();
	ctx.restore();
}
function createPointLabelContext(parent, index, label) {
	return createContext(parent, {
		label,
		index,
		type: "pointLabel"
	});
}
(class extends LinearScaleBase {
	static id = "radialLinear";
	static defaults = {
		display: true,
		animate: true,
		position: "chartArea",
		angleLines: {
			display: true,
			lineWidth: 1,
			borderDash: [],
			borderDashOffset: 0
		},
		grid: { circular: false },
		startAngle: 0,
		ticks: {
			showLabelBackdrop: true,
			callback: Ticks.formatters.numeric
		},
		pointLabels: {
			backdropColor: void 0,
			backdropPadding: 2,
			display: true,
			font: { size: 10 },
			callback(label) {
				return label;
			},
			padding: 5,
			centerPointLabels: false
		}
	};
	static defaultRoutes = {
		"angleLines.color": "borderColor",
		"pointLabels.color": "color",
		"ticks.color": "color"
	};
	static descriptors = { angleLines: { _fallback: "grid" } };
	constructor(cfg) {
		super(cfg);
		this.xCenter = void 0;
		this.yCenter = void 0;
		this.drawingArea = void 0;
		this._pointLabels = [];
		this._pointLabelItems = [];
	}
	setDimensions() {
		const padding = this._padding = toPadding(getTickBackdropHeight(this.options) / 2);
		const w = this.width = this.maxWidth - padding.width;
		const h = this.height = this.maxHeight - padding.height;
		this.xCenter = Math.floor(this.left + w / 2 + padding.left);
		this.yCenter = Math.floor(this.top + h / 2 + padding.top);
		this.drawingArea = Math.floor(Math.min(w, h) / 2);
	}
	determineDataLimits() {
		const { min, max } = this.getMinMax(false);
		this.min = isNumberFinite(min) && !isNaN(min) ? min : 0;
		this.max = isNumberFinite(max) && !isNaN(max) ? max : 0;
		this.handleTickRangeOptions();
	}
	computeTickLimit() {
		return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
	}
	generateTickLabels(ticks) {
		LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
		this._pointLabels = this.getLabels().map((value, index) => {
			const label = callback(this.options.pointLabels.callback, [value, index], this);
			return label || label === 0 ? label : "";
		}).filter((v, i) => this.chart.getDataVisibility(i));
	}
	fit() {
		const opts = this.options;
		if (opts.display && opts.pointLabels.display) fitWithPointLabels(this);
		else this.setCenterPoint(0, 0, 0, 0);
	}
	setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
		this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
		this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
		this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
	}
	getIndexAngle(index) {
		const angleMultiplier = TAU / (this._pointLabels.length || 1);
		const startAngle = this.options.startAngle || 0;
		return _normalizeAngle(index * angleMultiplier + toRadians(startAngle));
	}
	getDistanceFromCenterForValue(value) {
		if (isNullOrUndef(value)) return NaN;
		const scalingFactor = this.drawingArea / (this.max - this.min);
		if (this.options.reverse) return (this.max - value) * scalingFactor;
		return (value - this.min) * scalingFactor;
	}
	getValueForDistanceFromCenter(distance) {
		if (isNullOrUndef(distance)) return NaN;
		const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
		return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
	}
	getPointLabelContext(index) {
		const pointLabels = this._pointLabels || [];
		if (index >= 0 && index < pointLabels.length) {
			const pointLabel = pointLabels[index];
			return createPointLabelContext(this.getContext(), index, pointLabel);
		}
	}
	getPointPosition(index, distanceFromCenter, additionalAngle = 0) {
		const angle = this.getIndexAngle(index) - HALF_PI + additionalAngle;
		return {
			x: Math.cos(angle) * distanceFromCenter + this.xCenter,
			y: Math.sin(angle) * distanceFromCenter + this.yCenter,
			angle
		};
	}
	getPointPositionForValue(index, value) {
		return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
	}
	getBasePosition(index) {
		return this.getPointPositionForValue(index || 0, this.getBaseValue());
	}
	getPointLabelPosition(index) {
		const { left, top, right, bottom } = this._pointLabelItems[index];
		return {
			left,
			top,
			right,
			bottom
		};
	}
	drawBackground() {
		const { backgroundColor, grid: { circular } } = this.options;
		if (backgroundColor) {
			const ctx = this.ctx;
			ctx.save();
			ctx.beginPath();
			pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
			ctx.closePath();
			ctx.fillStyle = backgroundColor;
			ctx.fill();
			ctx.restore();
		}
	}
	drawGrid() {
		const ctx = this.ctx;
		const opts = this.options;
		const { angleLines, grid, border } = opts;
		const labelCount = this._pointLabels.length;
		let i, offset, position;
		if (opts.pointLabels.display) drawPointLabels(this, labelCount);
		if (grid.display) this.ticks.forEach((tick, index) => {
			if (index !== 0 || index === 0 && this.min < 0) {
				offset = this.getDistanceFromCenterForValue(tick.value);
				const context = this.getContext(index);
				const optsAtIndex = grid.setContext(context);
				const optsAtIndexBorder = border.setContext(context);
				drawRadiusLine(this, optsAtIndex, offset, labelCount, optsAtIndexBorder);
			}
		});
		if (angleLines.display) {
			ctx.save();
			for (i = labelCount - 1; i >= 0; i--) {
				const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
				const { color, lineWidth } = optsAtIndex;
				if (!lineWidth || !color) continue;
				ctx.lineWidth = lineWidth;
				ctx.strokeStyle = color;
				ctx.setLineDash(optsAtIndex.borderDash);
				ctx.lineDashOffset = optsAtIndex.borderDashOffset;
				offset = this.getDistanceFromCenterForValue(opts.reverse ? this.min : this.max);
				position = this.getPointPosition(i, offset);
				ctx.beginPath();
				ctx.moveTo(this.xCenter, this.yCenter);
				ctx.lineTo(position.x, position.y);
				ctx.stroke();
			}
			ctx.restore();
		}
	}
	drawBorder() {}
	drawLabels() {
		const ctx = this.ctx;
		const opts = this.options;
		const tickOpts = opts.ticks;
		if (!tickOpts.display) return;
		const startAngle = this.getIndexAngle(0);
		let offset, width;
		ctx.save();
		ctx.translate(this.xCenter, this.yCenter);
		ctx.rotate(startAngle);
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		this.ticks.forEach((tick, index) => {
			if (index === 0 && this.min >= 0 && !opts.reverse) return;
			const optsAtIndex = tickOpts.setContext(this.getContext(index));
			const tickFont = toFont(optsAtIndex.font);
			offset = this.getDistanceFromCenterForValue(this.ticks[index].value);
			if (optsAtIndex.showLabelBackdrop) {
				ctx.font = tickFont.string;
				width = ctx.measureText(tick.label).width;
				ctx.fillStyle = optsAtIndex.backdropColor;
				const padding = toPadding(optsAtIndex.backdropPadding);
				ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
			}
			renderText(ctx, tick.label, 0, -offset, tickFont, {
				color: optsAtIndex.color,
				strokeColor: optsAtIndex.textStrokeColor,
				strokeWidth: optsAtIndex.textStrokeWidth
			});
		});
		ctx.restore();
	}
	drawTitle() {}
});
var INTERVALS = {
	millisecond: {
		common: true,
		size: 1,
		steps: 1e3
	},
	second: {
		common: true,
		size: 1e3,
		steps: 60
	},
	minute: {
		common: true,
		size: 6e4,
		steps: 60
	},
	hour: {
		common: true,
		size: 36e5,
		steps: 24
	},
	day: {
		common: true,
		size: 864e5,
		steps: 30
	},
	week: {
		common: false,
		size: 6048e5,
		steps: 4
	},
	month: {
		common: true,
		size: 2628e6,
		steps: 12
	},
	quarter: {
		common: false,
		size: 7884e6,
		steps: 4
	},
	year: {
		common: true,
		size: 3154e7
	}
};
var UNITS = /* #__PURE__ */ Object.keys(INTERVALS);
function sorter(a, b) {
	return a - b;
}
function parse(scale, input) {
	if (isNullOrUndef(input)) return null;
	const adapter = scale._adapter;
	const { parser, round, isoWeekday } = scale._parseOpts;
	let value = input;
	if (typeof parser === "function") value = parser(value);
	if (!isNumberFinite(value)) value = typeof parser === "string" ? adapter.parse(value, parser) : adapter.parse(value);
	if (value === null) return null;
	if (round) value = round === "week" && (isNumber(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, "isoWeek", isoWeekday) : adapter.startOf(value, round);
	return +value;
}
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
	const ilen = UNITS.length;
	for (let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
		const interval = INTERVALS[UNITS[i]];
		const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
		if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) return UNITS[i];
	}
	return UNITS[ilen - 1];
}
function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
	for (let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
		const unit = UNITS[i];
		if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) return unit;
	}
	return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}
function determineMajorUnit(unit) {
	for (let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) if (INTERVALS[UNITS[i]].common) return UNITS[i];
}
function addTick(ticks, time, timestamps) {
	if (!timestamps) ticks[time] = true;
	else if (timestamps.length) {
		const { lo, hi } = _lookup(timestamps, time);
		const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
		ticks[timestamp] = true;
	}
}
function setMajorTicks(scale, ticks, map, majorUnit) {
	const adapter = scale._adapter;
	const first = +adapter.startOf(ticks[0].value, majorUnit);
	const last = ticks[ticks.length - 1].value;
	let major, index;
	for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
		index = map[major];
		if (index >= 0) ticks[index].major = true;
	}
	return ticks;
}
function ticksFromTimestamps(scale, values, majorUnit) {
	const ticks = [];
	const map = {};
	const ilen = values.length;
	let i, value;
	for (i = 0; i < ilen; ++i) {
		value = values[i];
		map[value] = i;
		ticks.push({
			value,
			major: false
		});
	}
	return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}
var TimeScale = class extends Scale {
	static id = "time";
	static defaults = {
		bounds: "data",
		adapters: {},
		time: {
			parser: false,
			unit: false,
			round: false,
			isoWeekday: false,
			minUnit: "millisecond",
			displayFormats: {}
		},
		ticks: {
			source: "auto",
			callback: false,
			major: { enabled: false }
		}
	};
	constructor(props) {
		super(props);
		this._cache = {
			data: [],
			labels: [],
			all: []
		};
		this._unit = "day";
		this._majorUnit = void 0;
		this._offsets = {};
		this._normalized = false;
		this._parseOpts = void 0;
	}
	init(scaleOpts, opts = {}) {
		const time = scaleOpts.time || (scaleOpts.time = {});
		const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
		adapter.init(opts);
		mergeIf(time.displayFormats, adapter.formats());
		this._parseOpts = {
			parser: time.parser,
			round: time.round,
			isoWeekday: time.isoWeekday
		};
		super.init(scaleOpts);
		this._normalized = opts.normalized;
	}
	parse(raw, index) {
		if (raw === void 0) return null;
		return parse(this, raw);
	}
	beforeLayout() {
		super.beforeLayout();
		this._cache = {
			data: [],
			labels: [],
			all: []
		};
	}
	determineDataLimits() {
		const options = this.options;
		const adapter = this._adapter;
		const unit = options.time.unit || "day";
		let { min, max, minDefined, maxDefined } = this.getUserBounds();
		function _applyBounds(bounds) {
			if (!minDefined && !isNaN(bounds.min)) min = Math.min(min, bounds.min);
			if (!maxDefined && !isNaN(bounds.max)) max = Math.max(max, bounds.max);
		}
		if (!minDefined || !maxDefined) {
			_applyBounds(this._getLabelBounds());
			if (options.bounds !== "ticks" || options.ticks.source !== "labels") _applyBounds(this.getMinMax(false));
		}
		min = isNumberFinite(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
		max = isNumberFinite(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
		this.min = Math.min(min, max - 1);
		this.max = Math.max(min + 1, max);
	}
	_getLabelBounds() {
		const arr = this.getLabelTimestamps();
		let min = Number.POSITIVE_INFINITY;
		let max = Number.NEGATIVE_INFINITY;
		if (arr.length) {
			min = arr[0];
			max = arr[arr.length - 1];
		}
		return {
			min,
			max
		};
	}
	buildTicks() {
		const options = this.options;
		const timeOpts = options.time;
		const tickOpts = options.ticks;
		const timestamps = tickOpts.source === "labels" ? this.getLabelTimestamps() : this._generate();
		if (options.bounds === "ticks" && timestamps.length) {
			this.min = this._userMin || timestamps[0];
			this.max = this._userMax || timestamps[timestamps.length - 1];
		}
		const min = this.min;
		const max = this.max;
		const ticks = _filterBetween(timestamps, min, max);
		this._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
		this._majorUnit = !tickOpts.major.enabled || this._unit === "year" ? void 0 : determineMajorUnit(this._unit);
		this.initOffsets(timestamps);
		if (options.reverse) ticks.reverse();
		return ticksFromTimestamps(this, ticks, this._majorUnit);
	}
	afterAutoSkip() {
		if (this.options.offsetAfterAutoskip) this.initOffsets(this.ticks.map((tick) => +tick.value));
	}
	initOffsets(timestamps = []) {
		let start = 0;
		let end = 0;
		let first, last;
		if (this.options.offset && timestamps.length) {
			first = this.getDecimalForValue(timestamps[0]);
			if (timestamps.length === 1) start = 1 - first;
			else start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
			last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
			if (timestamps.length === 1) end = last;
			else end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
		}
		const limit = timestamps.length < 3 ? .5 : .25;
		start = _limitValue(start, 0, limit);
		end = _limitValue(end, 0, limit);
		this._offsets = {
			start,
			end,
			factor: 1 / (start + 1 + end)
		};
	}
	_generate() {
		const adapter = this._adapter;
		const min = this.min;
		const max = this.max;
		const options = this.options;
		const timeOpts = options.time;
		const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
		const stepSize = valueOrDefault(options.ticks.stepSize, 1);
		const weekday = minor === "week" ? timeOpts.isoWeekday : false;
		const hasWeekday = isNumber(weekday) || weekday === true;
		const ticks = {};
		let first = min;
		let time, count;
		if (hasWeekday) first = +adapter.startOf(first, "isoWeek", weekday);
		first = +adapter.startOf(first, hasWeekday ? "day" : minor);
		if (adapter.diff(max, min, minor) > 1e5 * stepSize) throw new Error(min + " and " + max + " are too far apart with stepSize of " + stepSize + " " + minor);
		const timestamps = options.ticks.source === "data" && this.getDataTimestamps();
		for (time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++) addTick(ticks, time, timestamps);
		if (time === max || options.bounds === "ticks" || count === 1) addTick(ticks, time, timestamps);
		return Object.keys(ticks).sort(sorter).map((x) => +x);
	}
	getLabelForValue(value) {
		const adapter = this._adapter;
		const timeOpts = this.options.time;
		if (timeOpts.tooltipFormat) return adapter.format(value, timeOpts.tooltipFormat);
		return adapter.format(value, timeOpts.displayFormats.datetime);
	}
	format(value, format) {
		const formats = this.options.time.displayFormats;
		const unit = this._unit;
		const fmt = format || formats[unit];
		return this._adapter.format(value, fmt);
	}
	_tickFormatFunction(time, index, ticks, format) {
		const options = this.options;
		const formatter = options.ticks.callback;
		if (formatter) return callback(formatter, [
			time,
			index,
			ticks
		], this);
		const formats = options.time.displayFormats;
		const unit = this._unit;
		const majorUnit = this._majorUnit;
		const minorFormat = unit && formats[unit];
		const majorFormat = majorUnit && formats[majorUnit];
		const tick = ticks[index];
		const major = majorUnit && majorFormat && tick && tick.major;
		return this._adapter.format(time, format || (major ? majorFormat : minorFormat));
	}
	generateTickLabels(ticks) {
		let i, ilen, tick;
		for (i = 0, ilen = ticks.length; i < ilen; ++i) {
			tick = ticks[i];
			tick.label = this._tickFormatFunction(tick.value, i, ticks);
		}
	}
	getDecimalForValue(value) {
		return value === null ? NaN : (value - this.min) / (this.max - this.min);
	}
	getPixelForValue(value) {
		const offsets = this._offsets;
		const pos = this.getDecimalForValue(value);
		return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
	}
	getValueForPixel(pixel) {
		const offsets = this._offsets;
		const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
		return this.min + pos * (this.max - this.min);
	}
	_getLabelSize(label) {
		const ticksOpts = this.options.ticks;
		const tickLabelWidth = this.ctx.measureText(label).width;
		const angle = toRadians(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
		const cosRotation = Math.cos(angle);
		const sinRotation = Math.sin(angle);
		const tickFontSize = this._resolveTickFontOptions(0).size;
		return {
			w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
			h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
		};
	}
	_getLabelCapacity(exampleTime) {
		const timeOpts = this.options.time;
		const displayFormats = timeOpts.displayFormats;
		const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
		const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [exampleTime], this._majorUnit), format);
		const size = this._getLabelSize(exampleLabel);
		const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
		return capacity > 0 ? capacity : 1;
	}
	getDataTimestamps() {
		let timestamps = this._cache.data || [];
		let i, ilen;
		if (timestamps.length) return timestamps;
		const metas = this.getMatchingVisibleMetas();
		if (this._normalized && metas.length) return this._cache.data = metas[0].controller.getAllParsedValues(this);
		for (i = 0, ilen = metas.length; i < ilen; ++i) timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
		return this._cache.data = this.normalize(timestamps);
	}
	getLabelTimestamps() {
		const timestamps = this._cache.labels || [];
		let i, ilen;
		if (timestamps.length) return timestamps;
		const labels = this.getLabels();
		for (i = 0, ilen = labels.length; i < ilen; ++i) timestamps.push(parse(this, labels[i]));
		return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
	}
	normalize(values) {
		return _arrayUnique(values.sort(sorter));
	}
};
function interpolate(table, val, reverse) {
	let lo = 0;
	let hi = table.length - 1;
	let prevSource, nextSource, prevTarget, nextTarget;
	if (reverse) {
		if (val >= table[lo].pos && val <= table[hi].pos) ({lo, hi} = _lookupByKey(table, "pos", val));
		({pos: prevSource, time: prevTarget} = table[lo]);
		({pos: nextSource, time: nextTarget} = table[hi]);
	} else {
		if (val >= table[lo].time && val <= table[hi].time) ({lo, hi} = _lookupByKey(table, "time", val));
		({time: prevSource, pos: prevTarget} = table[lo]);
		({time: nextSource, pos: nextTarget} = table[hi]);
	}
	const span = nextSource - prevSource;
	return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}
(class extends TimeScale {
	static id = "timeseries";
	static defaults = TimeScale.defaults;
	constructor(props) {
		super(props);
		this._table = [];
		this._minPos = void 0;
		this._tableRange = void 0;
	}
	initOffsets() {
		const timestamps = this._getTimestampsForTable();
		const table = this._table = this.buildLookupTable(timestamps);
		this._minPos = interpolate(table, this.min);
		this._tableRange = interpolate(table, this.max) - this._minPos;
		super.initOffsets(timestamps);
	}
	buildLookupTable(timestamps) {
		const { min, max } = this;
		const items = [];
		const table = [];
		let i, ilen, prev, curr, next;
		for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
			curr = timestamps[i];
			if (curr >= min && curr <= max) items.push(curr);
		}
		if (items.length < 2) return [{
			time: min,
			pos: 0
		}, {
			time: max,
			pos: 1
		}];
		for (i = 0, ilen = items.length; i < ilen; ++i) {
			next = items[i + 1];
			prev = items[i - 1];
			curr = items[i];
			if (Math.round((next + prev) / 2) !== curr) table.push({
				time: curr,
				pos: i / (ilen - 1)
			});
		}
		return table;
	}
	_generate() {
		const min = this.min;
		const max = this.max;
		let timestamps = super.getDataTimestamps();
		if (!timestamps.includes(min) || !timestamps.length) timestamps.splice(0, 0, min);
		if (!timestamps.includes(max) || timestamps.length === 1) timestamps.push(max);
		return timestamps.sort((a, b) => a - b);
	}
	_getTimestampsForTable() {
		let timestamps = this._cache.all || [];
		if (timestamps.length) return timestamps;
		const data = this.getDataTimestamps();
		const label = this.getLabelTimestamps();
		if (data.length && label.length) timestamps = this.normalize(data.concat(label));
		else timestamps = data.length ? data : label;
		timestamps = this._cache.all = timestamps;
		return timestamps;
	}
	getDecimalForValue(value) {
		return (interpolate(this._table, value) - this._minPos) / this._tableRange;
	}
	getValueForPixel(pixel) {
		const offsets = this._offsets;
		const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
		return interpolate(this._table, decimal * this._tableRange + this._minPos, true);
	}
});
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region node_modules/react-chartjs-2/dist/index.js
var import_jsx_runtime = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production();
})))();
var defaultDatasetIdKey = "label";
function reforwardRef(ref, value) {
	if (typeof ref === "function") ref(value);
	else if (ref) ref.current = value;
}
function setOptions(chart, nextOptions) {
	const options = chart.options;
	if (options && nextOptions) Object.assign(options, nextOptions);
}
function setLabels(currentData, nextLabels) {
	currentData.labels = nextLabels;
}
function setDatasets(currentData, nextDatasets, datasetIdKey = defaultDatasetIdKey) {
	const addedDatasets = [];
	currentData.datasets = nextDatasets.map((nextDataset) => {
		const currentDataset = currentData.datasets.find((dataset) => dataset[datasetIdKey] === nextDataset[datasetIdKey]);
		if (!currentDataset || !nextDataset.data || addedDatasets.includes(currentDataset)) return { ...nextDataset };
		addedDatasets.push(currentDataset);
		Object.assign(currentDataset, nextDataset);
		return currentDataset;
	});
}
function cloneData(data, datasetIdKey = defaultDatasetIdKey) {
	const nextData = {
		labels: [],
		datasets: []
	};
	setLabels(nextData, data.labels);
	setDatasets(nextData, data.datasets, datasetIdKey);
	return nextData;
}
function ChartComponent(props, ref) {
	const { height = 150, width = 300, redraw = false, datasetIdKey, type, data, options, plugins = [], fallbackContent, updateMode, ...canvasProps } = props;
	const canvasRef = (0, import_react.useRef)(null);
	const chartRef = (0, import_react.useRef)(null);
	const renderChart = () => {
		if (!canvasRef.current) return;
		chartRef.current = new Chart$1(canvasRef.current, {
			type,
			data: cloneData(data, datasetIdKey),
			options: options && { ...options },
			plugins
		});
		reforwardRef(ref, chartRef.current);
	};
	const destroyChart = () => {
		reforwardRef(ref, null);
		if (chartRef.current) {
			chartRef.current.destroy();
			chartRef.current = null;
		}
	};
	(0, import_react.useEffect)(() => {
		if (!redraw && chartRef.current && options) setOptions(chartRef.current, options);
	}, [redraw, options]);
	(0, import_react.useEffect)(() => {
		if (!redraw && chartRef.current) setLabels(chartRef.current.config.data, data.labels);
	}, [redraw, data.labels]);
	(0, import_react.useEffect)(() => {
		if (!redraw && chartRef.current && data.datasets) setDatasets(chartRef.current.config.data, data.datasets, datasetIdKey);
	}, [redraw, data.datasets]);
	(0, import_react.useEffect)(() => {
		if (!chartRef.current) return;
		if (redraw) {
			destroyChart();
			setTimeout(renderChart);
		} else chartRef.current.update(updateMode);
	}, [
		redraw,
		options,
		data.labels,
		data.datasets,
		updateMode
	]);
	(0, import_react.useEffect)(() => {
		if (!chartRef.current) return;
		destroyChart();
		setTimeout(renderChart);
	}, [type]);
	(0, import_react.useEffect)(() => {
		renderChart();
		return () => destroyChart();
	}, []);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		role: "img",
		height,
		width,
		...canvasProps,
		children: fallbackContent
	});
}
var Chart = /*#__PURE__*/ (0, import_react.forwardRef)(ChartComponent);
function createTypedChart(type, registerables) {
	Chart$1.register(registerables);
	return /*#__PURE__*/ (0, import_react.forwardRef)((props, ref) => /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Chart, {
		...props,
		ref,
		type
	}));
}
var Line = /* #__PURE__ */ createTypedChart("line", LineController);
//#endregion
//#region src/components/chartConfiguration.ts
var CHART_PALETTES = {
	light: {
		axisColor: "#616161",
		cutoffColor: "#c50f1f",
		gridColor: "#d1d1d1",
		seriesColor: "#0f6cbd",
		tooltipBackgroundColor: "#242424",
		tooltipTextColor: "#ffffff"
	},
	dark: {
		axisColor: "#d2d0ce",
		cutoffColor: "#ff99a4",
		gridColor: "#605e5c",
		seriesColor: "#62abf5",
		tooltipBackgroundColor: "#f3f2f1",
		tooltipTextColor: "#242424"
	}
};
function getHorizontalTickLimit(axisRange) {
	if (axisRange <= 12) return axisRange + 1;
	if (axisRange <= 50) return 10;
	return 12;
}
function getPointRadius(axisRange) {
	return axisRange <= 24 ? 2.5 : 0;
}
function isHistoricalPeriodsMarkerVisible(scenario) {
	return scenario.historicalPeriods <= scenario.axisRange;
}
function createChartData(scenario, palette) {
	const chartPoints = generateCurvePoints(scenario).map((curvePoint) => ({
		x: curvePoint.periodIndex,
		y: curvePoint.biasWeight
	}));
	const methodLabel = scenario.method === "standard" ? "Standard" : "Extended";
	return { datasets: [{
		borderColor: palette.seriesColor,
		borderWidth: 2.5,
		cubicInterpolationMode: "monotone",
		data: chartPoints,
		label: `${methodLabel} bias weight`,
		pointBackgroundColor: palette.seriesColor,
		pointBorderColor: palette.seriesColor,
		pointHoverRadius: 4,
		pointRadius: getPointRadius(scenario.axisRange),
		tension: .2
	}] };
}
function createChartOptions(scenario, palette) {
	return {
		animation: false,
		maintainAspectRatio: false,
		normalized: true,
		parsing: false,
		responsive: true,
		interaction: {
			intersect: false,
			mode: "nearest"
		},
		plugins: {
			legend: { display: false },
			tooltip: {
				backgroundColor: palette.tooltipBackgroundColor,
				bodyColor: palette.tooltipTextColor,
				displayColors: false,
				titleColor: palette.tooltipTextColor,
				callbacks: {
					title: (tooltipItems) => {
						const periodIndex = tooltipItems[0]?.parsed.x;
						return periodIndex === void 0 || periodIndex === null ? "" : `i = ${formatPeriodCount(periodIndex, scenario.periodType)}`;
					},
					label: (tooltipItem) => {
						const biasWeight = tooltipItem.parsed.y;
						return biasWeight === null ? "b = unavailable" : `b = ${formatBiasWeight(biasWeight)}`;
					}
				}
			}
		},
		scales: {
			x: {
				type: "linear",
				min: 0,
				max: scenario.axisRange,
				border: { color: palette.axisColor },
				grid: { color: palette.gridColor },
				title: {
					color: palette.axisColor,
					display: true,
					text: `i (${getPluralPeriodLabel(scenario.periodType)})`
				},
				ticks: {
					autoSkip: true,
					color: palette.axisColor,
					maxTicksLimit: getHorizontalTickLimit(scenario.axisRange),
					precision: 0,
					callback: (value) => {
						const numericValue = Number(value);
						return Number.isInteger(numericValue) && numericValue >= 0 && numericValue <= scenario.axisRange ? numericValue.toString() : "";
					}
				}
			},
			y: {
				min: 0,
				max: 1,
				border: { color: palette.axisColor },
				grid: { color: palette.gridColor },
				title: {
					color: palette.axisColor,
					display: false
				},
				ticks: {
					color: palette.axisColor,
					maxTicksLimit: 5,
					callback: (value) => Number(value).toFixed(2)
				}
			}
		}
	};
}
function createChartAccessibleLabel(scenario) {
	const curvePoints = generateCurvePoints(scenario);
	const methodLabel = scenario.method === "standard" ? "Standard" : "Extended";
	const finalBiasWeight = curvePoints[curvePoints.length - 1]?.biasWeight ?? 0;
	const markerDescription = isHistoricalPeriodsMarkerVisible(scenario) ? scenario.method === "extended" ? ` A dashed Historical Periods cutoff marker is visible at i = ${scenario.historicalPeriods}.` : ` A dashed Historical Periods reference marker is visible at i = ${scenario.historicalPeriods}.` : "";
	return `Bias weight b by reverse-time index i in ${getPluralPeriodLabel(scenario.periodType)}. ${methodLabel} method with ${curvePoints.length} plotted ${curvePoints.length === 1 ? "point" : "points"}, starting at b = 1.0000 and ending at b = ${formatBiasWeight(finalBiasWeight)}.` + markerDescription;
}
function getPluralPeriodLabel(periodType) {
	return `${periodType}s`;
}
//#endregion
//#region src/components/MethodEquation.tsx
var STANDARD_EQUATION_LABEL = "Standard method equation: b equals e to the power of negative k times i minus 1.";
var EXTENDED_EQUATION_LABEL = "Extended method equation: y equals e to the k over e to the k minus e to the k n, plus e to the k n over e to the k n minus e to the k, times e to the negative k times x minus 1.";
var MINUS_SIGN = "−";
var MULTIPLICATION_DOT = "·";
function MethodEquation(properties) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-label": properties.method === "standard" ? STANDARD_EQUATION_LABEL : EXTENDED_EQUATION_LABEL,
		className: "method-equation",
		"data-method": properties.method,
		"data-testid": "method-equation",
		role: "math",
		children: properties.method === "standard" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StandardEquation, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtendedEquation, {})
	});
}
function StandardEquation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("math", {
		"aria-hidden": "true",
		display: "block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mrow", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "b" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mo", { children: "=" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("msup", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "e" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mrow", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mo", { children: MINUS_SIGN }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "k" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mo", { children: "(" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "i" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mo", { children: MINUS_SIGN }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mn", { children: "1" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mo", { children: ")" })
			] })] })
		] })
	});
}
function ExtendedEquation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("math", {
		"aria-hidden": "true",
		display: "block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mrow", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "y" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mo", { children: "=" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mfrac", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("msup", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "e" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "k" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mrow", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("msup", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "e" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "k" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mo", { children: MINUS_SIGN }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("msup", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "e" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mrow", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "k" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "n" })] })] })
			] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mo", { children: "+" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mfrac", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("msup", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "e" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mrow", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "k" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "n" })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mrow", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("msup", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "e" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mrow", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "k" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "n" })] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mo", { children: MINUS_SIGN }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("msup", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "e" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "k" })] })
			] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mo", { children: MULTIPLICATION_DOT }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("msup", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "e" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mrow", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mo", { children: MINUS_SIGN }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "k" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mo", { children: "(" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mi", { children: "x" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mo", { children: MINUS_SIGN }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mn", { children: "1" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mo", { children: ")" })
			] })] })
		] })
	});
}
//#endregion
//#region src/components/BiasWeightChart.tsx
var HISTORICAL_PERIODS_LABEL_HORIZONTAL_OFFSET = 10;
var HISTORICAL_PERIODS_LABEL_VERTICAL_OFFSET = 10;
Chart$1.register(CategoryScale, plugin_legend, LineElement, LinearScale, PointElement, plugin_tooltip);
function BiasWeightChart(properties) {
	const { scenario } = properties;
	const systemAppearance = useSystemAppearance();
	const palette = CHART_PALETTES[scenario.appearance === "system" ? systemAppearance : scenario.appearance];
	const historicalPeriodsMarkerState = (0, import_react.useRef)({
		scenario,
		palette
	});
	historicalPeriodsMarkerState.current = {
		scenario,
		palette
	};
	const chartData = (0, import_react.useMemo)(() => createChartData(scenario, palette), [scenario, palette]);
	const chartOptions = (0, import_react.useMemo)(() => createChartOptions(scenario, palette), [scenario, palette]);
	const plugins = (0, import_react.useMemo)(() => [createHistoricalPeriodsMarkerPlugin(() => historicalPeriodsMarkerState.current)], []);
	const accessibleLabel = createChartAccessibleLabel(scenario);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "bias-chart",
		"data-historical-periods-marker-visible": isHistoricalPeriodsMarkerVisible(scenario) ? "true" : "false",
		"data-method": scenario.method,
		"data-testid": "bias-chart",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bias-chart-canvas",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "vertical-axis-label",
					"data-testid": "vertical-axis-label",
					children: "b"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
					"aria-label": accessibleLabel,
					data: chartData,
					options: chartOptions,
					plugins,
					role: "img"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodEquation, { method: scenario.method }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "visually-hidden",
				children: accessibleLabel
			})
		]
	});
}
function useSystemAppearance() {
	const [systemAppearance, setSystemAppearance] = (0, import_react.useState)(() => getSystemAppearance());
	(0, import_react.useEffect)(() => {
		if (typeof window.matchMedia !== "function") return;
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const updateSystemAppearance = () => {
			setSystemAppearance(mediaQuery.matches ? "dark" : "light");
		};
		mediaQuery.addEventListener("change", updateSystemAppearance);
		return () => mediaQuery.removeEventListener("change", updateSystemAppearance);
	}, []);
	return systemAppearance;
}
function getSystemAppearance() {
	return typeof window.matchMedia === "function" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function createHistoricalPeriodsMarkerPlugin(getHistoricalPeriodsMarkerState) {
	return {
		id: "historical-periods-marker",
		afterDatasetsDraw: (chart) => {
			const { scenario, palette } = getHistoricalPeriodsMarkerState();
			if (!isHistoricalPeriodsMarkerVisible(scenario)) return;
			drawHistoricalPeriodsMarker(chart, scenario.historicalPeriods, palette.cutoffColor);
		}
	};
}
function drawHistoricalPeriodsMarker(chart, historicalPeriods, markerColor) {
	const intersectionPoint = getHistoricalPeriodsMarkerIntersection(chart, historicalPeriods);
	if (intersectionPoint === null) return;
	const { horizontalPosition, verticalPosition } = intersectionPoint;
	const { ctx: context, chartArea } = chart;
	context.save();
	context.beginPath();
	context.setLineDash([6, 4]);
	context.strokeStyle = markerColor;
	context.lineWidth = 2;
	context.moveTo(horizontalPosition, chartArea.top);
	context.lineTo(horizontalPosition, chartArea.bottom);
	context.stroke();
	context.setLineDash([]);
	context.fillStyle = markerColor;
	context.font = "600 12px \"Segoe UI\", sans-serif";
	context.textAlign = "left";
	context.textBaseline = "bottom";
	context.fillText(`n = ${historicalPeriods}`, horizontalPosition + HISTORICAL_PERIODS_LABEL_HORIZONTAL_OFFSET, verticalPosition - HISTORICAL_PERIODS_LABEL_VERTICAL_OFFSET);
	context.restore();
}
function getHistoricalPeriodsMarkerIntersection(chart, historicalPeriods) {
	const pointElement = chart.getDatasetMeta(0).data[historicalPeriods - 1];
	return pointElement === void 0 ? null : {
		horizontalPosition: pointElement.x,
		verticalPosition: pointElement.y
	};
}
//#endregion
//#region src/components/Explorer.tsx
var METHOD_LABELS = {
	standard: "Standard",
	extended: "Extended"
};
var APPEARANCE_LABELS = {
	system: "System",
	light: "Light",
	dark: "Dark"
};
var GITHUB_REPOSITORY_URL = "https://github.com/rohingosling/exponentially-biased-debt-repayment-weight";
var TECHNICAL_NOTE_URL = "https://github.com/rohingosling/exponentially-biased-debt-repayment-weight/blob/main/docs/paper/exponentially-biased-debt-repayment-weight.pdf";
function NumericControl(properties) {
	const constraint = NUMERIC_CONSTRAINTS[properties.field];
	const descriptionElementId = `${properties.field}-description`;
	const errorElementId = `${properties.field}-error`;
	const describedBy = properties.errorMessage === void 0 ? descriptionElementId : `${descriptionElementId} ${errorElementId}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "control-group",
		"data-control": properties.field,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", { children: [properties.label, properties.symbol === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "control-symbol",
				children: properties.symbol
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "control-description",
				id: descriptionElementId,
				children: properties.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: properties.hasSlider ? "numeric-inputs" : "numeric-inputs numeric-inputs-single",
				children: [properties.hasSlider ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "range-field",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						"aria-describedby": descriptionElementId,
						"aria-invalid": "false",
						"aria-label": `${properties.label} slider`,
						max: constraint.maximum,
						min: constraint.minimum,
						onChange: (event) => properties.onRangeChange(properties.field, event.target.value),
						step: constraint.step,
						type: "range",
						value: properties.rangeValue
					})
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "value-field",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						"aria-describedby": describedBy,
						"aria-invalid": properties.errorMessage === void 0 ? "false" : "true",
						"aria-label": `${properties.label} value`,
						inputMode: constraint.integer ? "numeric" : "decimal",
						max: constraint.maximum,
						min: constraint.minimum,
						onChange: (event) => properties.onTextChange(properties.field, event.target.value),
						"data-mode": properties.isEditing ? "edit" : "display",
						onBlur: () => properties.onTextBlur(properties.field),
						onFocus: () => properties.onTextFocus(properties.field),
						onKeyDown: (event) => {
							if (event.key === "Enter") event.currentTarget.blur();
						},
						step: constraint.step,
						type: properties.field === "referenceDebtAmount" ? "text" : "number",
						value: properties.textValue
					})
				})]
			}),
			properties.errorMessage === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "control-error",
				id: errorElementId,
				role: "alert",
				children: properties.errorMessage
			})
		]
	});
}
function Explorer() {
	const [scenario, setScenario] = (0, import_react.useState)({ ...DEFAULT_SCENARIO });
	const [numericInputText, setNumericInputText] = (0, import_react.useState)(() => createNumericInputText(DEFAULT_SCENARIO));
	const [numericErrors, setNumericErrors] = (0, import_react.useState)({});
	const [editingField, setEditingField] = (0, import_react.useState)(null);
	function updateNumericText(field, text) {
		const parsedInput = parseNumericInput(field, text);
		setNumericInputText((currentText) => ({
			...currentText,
			[field]: text
		}));
		setNumericErrors((currentErrors) => ({
			...currentErrors,
			[field]: parsedInput.message
		}));
		if (parsedInput.isValid && parsedInput.value !== void 0 && field !== "referenceDebtAmount") setScenario((currentScenario) => ({
			...currentScenario,
			[field]: parsedInput.value
		}));
	}
	function beginNumericTextEdit(field) {
		setEditingField(field);
	}
	function normalizeNumericText(field) {
		const parsedInput = parseNumericInput(field, numericInputText[field]);
		setEditingField((currentField) => currentField === field ? null : currentField);
		if (!parsedInput.isValid || parsedInput.value === void 0) return;
		const value = parsedInput.value;
		setScenario((currentScenario) => ({
			...currentScenario,
			[field]: value
		}));
		setNumericInputText((currentText) => ({
			...currentText,
			[field]: formatEditableNumericValue(field, value)
		}));
	}
	function updateNumericRange(field, text) {
		const value = Number(text);
		setScenario((currentScenario) => ({
			...currentScenario,
			[field]: value
		}));
		setNumericInputText((currentText) => ({
			...currentText,
			[field]: formatEditableNumericValue(field, value)
		}));
		setNumericErrors((currentErrors) => ({
			...currentErrors,
			[field]: void 0
		}));
	}
	function updateMethod(value) {
		setScenario((currentScenario) => ({
			...currentScenario,
			method: isMethod(value) ? value : DEFAULT_SCENARIO.method
		}));
	}
	function updatePeriodType(value) {
		setScenario((currentScenario) => ({
			...currentScenario,
			periodType: isPeriodType(value) ? value : DEFAULT_SCENARIO.periodType
		}));
	}
	function updateAppearance(value) {
		setScenario((currentScenario) => ({
			...currentScenario,
			appearance: isAppearance(value) ? value : DEFAULT_SCENARIO.appearance
		}));
	}
	function resetScenario() {
		setScenario({ ...DEFAULT_SCENARIO });
		setNumericInputText(createNumericInputText(DEFAULT_SCENARIO));
		setNumericErrors({});
		setEditingField(null);
	}
	function getRangeValue(field) {
		return Number(formatEditableNumericValue(field, scenario[field]));
	}
	const decayConstant = deriveDecayConstant(scenario.halfLife);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "application-shell",
		"data-appearance": scenario.appearance,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			"aria-labelledby": "application-title",
			className: "explorer-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "card-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						id: "application-title",
						children: "Exponentially Biased Debt Repayment Weight Explorer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "introduction",
						children: "Explore how reverse-time periods and half-life shape the repayment bias weight."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"aria-labelledby": "appearance-label",
						className: "appearance-selector",
						role: "group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "appearance-label",
							id: "appearance-label",
							children: "Appearance"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "appearance-options",
							children: APPEARANCE_VALUES.map((appearance) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								checked: scenario.appearance === appearance,
								name: "appearance",
								onChange: (event) => updateAppearance(event.target.value),
								type: "radio",
								value: appearance
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: APPEARANCE_LABELS[appearance] })] }, appearance))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					"aria-labelledby": "scenario-heading",
					className: "scenario-panel",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BiasWeightChart, { scenario }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "scenario-readout",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "scenario-heading",
							children: "Current Scenario"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Method" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								"data-testid": "method-readout",
								children: METHOD_LABELS[scenario.method]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Axis Range" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								"data-testid": "axis-range-readout",
								children: formatPeriodCount(scenario.axisRange, scenario.periodType)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Period type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								"data-testid": "period-type-readout",
								children: scenario.periodType
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", { children: ["Historical periods, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("var", { children: "n" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								"data-testid": "historical-periods-readout",
								children: formatPeriodCount(scenario.historicalPeriods, scenario.periodType)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", { children: ["Reference debt, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("var", { children: "L" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								"data-testid": "reference-debt-readout",
								children: formatReferenceDebtAmount(scenario.referenceDebtAmount)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", { children: ["Half-life, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("var", { children: "h" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								"data-testid": "half-life-readout",
								children: formatPeriodCount(scenario.halfLife, scenario.periodType)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", { children: ["Decay rate, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("var", { children: "k" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								"data-testid": "decay-constant-readout",
								children: formatDecayConstant(decayConstant)
							})] })
						] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					"aria-labelledby": "controls-heading",
					className: "controls-section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "controls-heading",
						children: "Model controls"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "control-list",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "control-group",
								"data-control": "method",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: "Method" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "control-description",
										id: "method-description",
										children: "Choose asymptotic decay or a normalized decay-to-zero cutoff."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "select-field",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											"aria-describedby": "method-description",
											"aria-label": "Method",
											onChange: (event) => updateMethod(event.target.value),
											value: scenario.method,
											children: METHOD_VALUES.map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: method,
												children: METHOD_LABELS[method]
											}, method))
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumericControl, {
								description: "Set the final reverse-time period shown on the horizontal axis.",
								errorMessage: numericErrors.axisRange,
								field: "axisRange",
								hasSlider: true,
								label: "Axis Range",
								onRangeChange: updateNumericRange,
								isEditing: editingField === "axisRange",
								onTextChange: updateNumericText,
								onTextBlur: normalizeNumericText,
								rangeValue: getRangeValue("axisRange"),
								textValue: numericInputText.axisRange,
								onTextFocus: beginNumericTextEdit
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "control-group",
								"data-control": "periodType",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: "Period Type" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "control-description",
										id: "period-type-description",
										children: "Give the stored period counts their time-unit meaning."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "select-field",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											"aria-describedby": "period-type-description",
											"aria-label": "Period Type",
											onChange: (event) => updatePeriodType(event.target.value),
											value: scenario.periodType,
											children: PERIOD_TYPE_VALUES.map((periodType) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: periodType,
												children: periodType
											}, periodType))
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumericControl, {
								description: "Set the historical-window length and Extended-method cutoff.",
								errorMessage: numericErrors.historicalPeriods,
								field: "historicalPeriods",
								hasSlider: true,
								label: "Historical Periods",
								symbol: "n",
								isEditing: editingField === "historicalPeriods",
								onRangeChange: updateNumericRange,
								onTextChange: updateNumericText,
								onTextBlur: normalizeNumericText,
								rangeValue: getRangeValue("historicalPeriods"),
								textValue: numericInputText.historicalPeriods,
								onTextFocus: beginNumericTextEdit
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumericControl, {
								description: "Set the reference amount used by repayment normalization.",
								errorMessage: numericErrors.referenceDebtAmount,
								field: "referenceDebtAmount",
								hasSlider: false,
								label: "Reference Debt",
								symbol: "L",
								isEditing: editingField === "referenceDebtAmount",
								onRangeChange: updateNumericRange,
								onTextChange: updateNumericText,
								onTextBlur: normalizeNumericText,
								rangeValue: scenario.referenceDebtAmount,
								textValue: numericInputText.referenceDebtAmount,
								onTextFocus: beginNumericTextEdit
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumericControl, {
								description: "Set the number of periods required for the bias weight to halve.",
								errorMessage: numericErrors.halfLife,
								field: "halfLife",
								hasSlider: true,
								label: "Half-life",
								symbol: "h",
								isEditing: editingField === "halfLife",
								onRangeChange: updateNumericRange,
								onTextChange: updateNumericText,
								onTextBlur: normalizeNumericText,
								rangeValue: getRangeValue("halfLife"),
								textValue: numericInputText.halfLife,
								onTextFocus: beginNumericTextEdit
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "supporting-note",
					children: [
						"This graph shows only the bias-weighting curve; it is not a live example of a debtor's repayments. If per-period repayment amounts ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("var", { children: ["P", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i" })] }),
						" were supplied, reference debt ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("var", { children: "L" }),
						" would normalize each amount as",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("var", { children: ["d", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i" })] }),
						" = ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("var", { children: ["P", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i" })] }),
						" / ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("var", { children: "L" }),
						" before the curve weights it.",
						" ",
						"No repayment series is entered here."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Project links",
						className: "project-links",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: GITHUB_REPOSITORY_URL,
							rel: "noreferrer",
							target: "_blank",
							children: "GitHub"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: TECHNICAL_NOTE_URL,
							rel: "noreferrer",
							target: "_blank",
							children: "Technical Note"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "reset-button",
						onClick: resetScenario,
						type: "button",
						children: "Reset"
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/App.tsx
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Explorer, {});
}
//#endregion
//#region src/main.tsx
var rootElement = document.getElementById("root");
if (rootElement === null) throw new Error("The application root element is missing.");
(0, import_client.createRoot)(rootElement).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {}) }));
//#endregion
