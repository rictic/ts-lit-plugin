import { SimpleType, SimpleTypeKind, SimpleTypeStringLiteral } from "ts-simple-type";

const HTML_5_ATTR_TYPES: { [key: string]: string | string[] } = {
	onafterprint: "string",
	onbeforeprint: "string",
	onbeforeunload: "string",
	onhashchange: "string",
	onlanguagechange: "string",
	onmessage: "string",
	onoffline: "string",
	ononline: "string",
	onpagehide: "string",
	onpageshow: "string",
	onpopstate: "string",
	onstorage: "string",
	onunload: "string",
	"aria-activedescendant": "",
	"aria-colcount": "",
	"aria-colindex": "",
	"aria-colspan": "",
	"aria-controls": "",
	"aria-describedat": "",
	"aria-describedby": "",
	"aria-errormessage": "",
	"aria-flowto": "",
	"aria-kbdshortcuts": "",
	"aria-label": "",
	"aria-labelledby": "",
	"aria-level": "",
	"aria-owns": "",
	"aria-placeholder": "",
	"aria-posinset": "",
	"aria-roledescription": "",
	"aria-rowcount": "",
	"aria-rowindex": "",
	"aria-rowspan": "",
	"aria-setsize": "",
	"aria-valuemax": "",
	"aria-valuemin": "",
	"aria-valuenow": "",
	"aria-valuetext": "",
	accesskey: "string",
	class: "string",
	contextmenu: "string",
	dropzone: ["copy", "move", "link"],
	id: "string",
	itemid: "",
	itemprop: "",
	itemref: "",
	itemtype: "",
	lang: "string",
	style: "string",
	tabindex: "number",
	title: "string",
	manifest: "",
	href: "string",
	target: ["_blank", "_parent", "_self", "_top"],
	rel: "",
	media: "",
	hreflang: "",
	type: "",
	sizes: "",
	name: "string",
	"http-equiv": "",
	content: "",
	charset: "",
	nonce: "",
	cite: "",
	start: "",
	value: "string",
	download: "boolean|string",
	ping: "",
	datetime: "",
	alt: "string",
	src: "string",
	srcset: "",
	usemap: "",
	width: "number|string",
	height: "number|string",
	srcdoc: "",
	data: "",
	form: "string",
	poster: "string",
	mediagroup: "",
	label: "string",
	srclang: "string",
	coords: "string",
	border: ["0", "1"],
	span: "number",
	colspan: "number",
	rowspan: "number",
	headers: "string",
	sorted: "",
	abbr: "string",
	"accept-charset": "string",
	action: "string",
	for: "string",
	accept: "string",
	dirname: "string",
	formaction: "string",
	formtarget: ["_self", "_blank", "_parent", "_top"],
	list: "string",
	max: "number",
	maxlength: "number",
	min: "number",
	minlength: "number",
	pattern: "string",
	placeholder: "string",
	size: "number",
	step: "number",
	cols: "number",
	rows: "number",
	low: "number",
	high: "number",
	optimum: "number"
};

export function hasTypeForAttrName(attrName: string): boolean {
	return HTML_5_ATTR_TYPES[attrName] != null && HTML_5_ATTR_TYPES[attrName].length > 0;
}

export function html5TagAttrType(attrName: string): SimpleType {
	return stringToSimpleType(HTML_5_ATTR_TYPES[attrName] || "", attrName);
}

function stringToSimpleType(typeString: string | string[], name?: string): SimpleType {
	if (Array.isArray(typeString)) {
		return {
			kind: SimpleTypeKind.UNION,
			types: typeString.map(value => ({ kind: SimpleTypeKind.STRING_LITERAL, value } as SimpleTypeStringLiteral))
		};
	}

	if (typeString.includes("|")) {
		return {
			kind: SimpleTypeKind.UNION,
			types: typeString.split("|").map(typeStr => stringToSimpleType(typeStr))
		};
	}

	switch (typeString) {
		case "number":
			return { kind: SimpleTypeKind.NUMBER, name };
		case "boolean":
			return { kind: SimpleTypeKind.BOOLEAN, name };
		case "string":
			return { kind: SimpleTypeKind.STRING, name };
		default:
			return { kind: SimpleTypeKind.ANY, name };
	}
}

/**
 * Data from vscode-html-languageservice
 */
export const EXTRA_HTML5_EVENTS = [
	{
		name: "onabort",
		description: "The loading of a resource has been aborted."
	},
	{
		name: "onabort",
		description: "Progression has been terminated (not due to an error)."
	},
	{
		name: "onabort",
		description: "A transaction has been aborted."
	},
	{
		name: "onafterprint",
		description: "The associated document has started printing or the print preview has been closed."
	},
	{
		name: "onanimationend",
		description: "A CSS animation has completed."
	},
	{
		name: "onanimationiteration",
		description: "A CSS animation is repeated."
	},
	{
		name: "onanimationstart",
		description: "A CSS animation has started."
	},
	{
		name: "onappinstalled",
		description: "A web application is successfully installed as a progressive web app."
	},
	{
		name: "onaudioprocess",
		description: "The input buffer of a ScriptProcessorNode is ready to be processed."
	},
	{
		name: "onaudioend",
		description: "The user agent has finished capturing audio for speech recognition."
	},
	{
		name: "onaudiostart",
		description: "The user agent has started to capture audio for speech recognition."
	},
	{
		name: "onbeforeprint",
		description: "The associated document is about to be printed or previewed for printing."
	},
	{
		name: "onbeforeunload",
		description: "The window, the document and its resources are about to be unloaded."
	},
	{
		name: "onbeginEvent",
		description: "A SMIL animation element begins."
	},
	{
		name: "onblocked",
		description: "An open connection to a database is blocking a versionchange transaction on the same database."
	},
	{
		name: "onblur",
		description: "An element has lost focus (does not bubble)."
	},
	{
		name: "onboundary",
		description: "The spoken utterance reaches a word or sentence boundary"
	},
	{
		name: "oncached",
		description: "The resources listed in the manifest have been downloaded, and the application is now cached."
	},
	{
		name: "oncanplay",
		description: "The user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content."
	},
	{
		name: "oncanplaythrough",
		description: "The user agent can play the media up to its end without having to stop for further buffering of content."
	},
	{
		name: "onchange",
		description: "The change event is fired for <input>, <select>, and <textarea> elements when a change to the element's value is committed by the user."
	},
	{
		name: "onchargingchange",
		description: "The battery begins or stops charging."
	},
	{
		name: "onchargingtimechange",
		description: "The chargingTime attribute has been updated."
	},
	{
		name: "onchecking",
		description: "The user agent is checking for an update, or attempting to download the cache manifest for the first time."
	},
	{
		name: "onclick",
		description: "A pointing device button has been pressed and released on an element."
	},
	{
		name: "onclose",
		description: "A WebSocket connection has been closed."
	},
	{
		name: "oncomplete",
		description: "A transaction successfully completed."
	},
	{
		name: "oncomplete",
		description: "The rendering of an OfflineAudioContext is terminated."
	},
	{
		name: "oncompositionend",
		description: "The composition of a passage of text has been completed or canceled."
	},
	{
		name: "oncompositionstart",
		description: "The composition of a passage of text is prepared (similar to keydown for a keyboard input, but works with other inputs such as speech recognition)."
	},
	{
		name: "oncompositionupdate",
		description: "A character is added to a passage of text being composed."
	},
	{
		name: "oncontextmenu",
		description: "The right button of the mouse is clicked (before the context menu is displayed)."
	},
	{
		name: "oncopy",
		description: "The text selection has been added to the clipboard."
	},
	{
		name: "oncut",
		description: "The text selection has been removed from the document and added to the clipboard."
	},
	{
		name: "ondblclick",
		description: "A pointing device button is clicked twice on an element."
	},
	{
		name: "ondevicechange",
		description: "A media device such as a camera, microphone, or speaker is connected or removed from the system."
	},
	{
		name: "ondevicelight",
		description: "Fresh data is available from a light sensor."
	},
	{
		name: "ondevicemotion",
		description: "Fresh data is available from a motion sensor."
	},
	{
		name: "ondeviceorientation",
		description: "Fresh data is available from an orientation sensor."
	},
	{
		name: "ondeviceproximity",
		description: "Fresh data is available from a proximity sensor (indicates an approximated distance between the device and a nearby object)."
	},
	{
		name: "ondischargingtimechange",
		description: "The dischargingTime attribute has been updated."
	},
	{
		name: "onDOMActivate",
		description: "A button, link or state changing element is activated (use click instead)."
	},
	{
		name: "onDOMAttributeNameChanged",
		description: "The name of an attribute changed (use mutation observers instead)."
	},
	{
		name: "onDOMAttrModified",
		description: "The value of an attribute has been modified (use mutation observers instead)."
	},
	{
		name: "onDOMCharacterDataModified",
		description: "A text or another CharacterData has changed (use mutation observers instead)."
	},
	{
		name: "onDOMContentLoaded",
		description: "The document has finished loading (but not its dependent resources)."
	},
	{
		name: "onDOMElementNameChanged",
		description: "The name of an element changed (use mutation observers instead)."
	},
	{
		name: "onDOMFocusIn",
		description: "An element has received focus (use focus or focusin instead)."
	},
	{
		name: "onDOMFocusOut",
		description: "An element has lost focus (use blur or focusout instead)."
	},
	{
		name: "onDOMNodeInserted",
		description: "A node has been added as a child of another node (use mutation observers instead)."
	},
	{
		name: "onDOMNodeInsertedIntoDocument",
		description: "A node has been inserted into the document (use mutation observers instead)."
	},
	{
		name: "onDOMNodeRemoved",
		description: "A node has been removed from its parent node (use mutation observers instead)."
	},
	{
		name: "onDOMNodeRemovedFromDocument",
		description: "A node has been removed from the document (use mutation observers instead)."
	},
	{
		name: "onDOMSubtreeModified",
		description: "A change happened in the document (use mutation observers instead)."
	},
	{
		name: "ondownloading",
		description: "The user agent has found an update and is fetching it, or is downloading the resources listed by the cache manifest for the first time."
	},
	{
		name: "ondrag",
		description: "An element or text selection is being dragged (every 350ms)."
	},
	{
		name: "ondragend",
		description: "A drag operation is being ended (by releasing a mouse button or hitting the escape key)."
	},
	{
		name: "ondragenter",
		description: "A dragged element or text selection enters a valid drop target."
	},
	{
		name: "ondragleave",
		description: "A dragged element or text selection leaves a valid drop target."
	},
	{
		name: "ondragover",
		description: "An element or text selection is being dragged over a valid drop target (every 350ms)."
	},
	{
		name: "ondragstart",
		description: "The user starts dragging an element or text selection."
	},
	{
		name: "ondrop",
		description: "An element is dropped on a valid drop target."
	},
	{
		name: "ondurationchange",
		description: "The duration attribute has been updated."
	},
	{
		name: "onemptied",
		description: "The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it."
	},
	{
		name: "onend",
		description: "The speech recognition service has disconnected."
	},
	{
		name: "onend",
		description: "The utterance has finished being spoken."
	},
	{
		name: "onended",
		description: "Playback has stopped because the end of the media was reached."
	},
	{
		name: "onended",
		description: "Playback has stopped because the end of the media was reached."
	},
	{
		name: "onendEvent",
		description: "A SMIL animation element ends."
	},
	{
		name: "onerror",
		description: "A resource failed to load."
	},
	{
		name: "onerror",
		description: "Progression has failed."
	},
	{
		name: "onerror",
		description: "An error occurred while downloading the cache manifest or updating the content of the application."
	},
	{
		name: "onerror",
		description: "A WebSocket connection has been closed with prejudice (some data couldn't be sent for example)."
	},
	{
		name: "onerror",
		description: "An event source connection has been failed."
	},
	{
		name: "onerror",
		description: "A request caused an error and failed."
	},
	{
		name: "onerror",
		description: "A speech recognition error occurs."
	},
	{
		name: "onerror",
		description: "An error occurs that prevents the utterance from being successfully spoken."
	},
	{
		name: "onfocus",
		description: "An element has received focus (does not bubble)."
	},
	{
		name: "onfocusin",
		description: "An element is about to receive focus (bubbles)."
	},
	{
		name: "onfocusout",
		description: "An element is about to lose focus (bubbles)."
	},
	{
		name: "onfullscreenchange",
		description: "An element was turned to fullscreen mode or back to normal mode."
	},
	{
		name: "onfullscreenerror",
		description: "It was impossible to switch to fullscreen mode for technical reasons or because the permission was denied."
	},
	{
		name: "ongamepadconnected",
		description: "A gamepad has been connected."
	},
	{
		name: "ongamepaddisconnected",
		description: "A gamepad has been disconnected."
	},
	{
		name: "ongotpointercapture",
		description: "Element receives pointer capture."
	},
	{
		name: "onhashchange",
		description: "The fragment identifier of the URL has changed (the part of the URL after the #)."
	},
	{
		name: "onlostpointercapture",
		description: "Element lost pointer capture."
	},
	{
		name: "oninput",
		description: "The value of an element changes or the content of an element with the attribute contenteditable is modified."
	},
	{
		name: "oninvalid",
		description: "A submittable element has been checked and doesn't satisfy its constraints."
	},
	{
		name: "onkeydown",
		description: "A key is pressed down."
	},
	{
		name: "onkeypress",
		description: "A key is pressed down and that key normally produces a character value (use input instead)."
	},
	{
		name: "onkeyup",
		description: "A key is released."
	},
	{
		name: "onlanguagechange",
		description: "The user's preferred languages have changed."
	},
	{
		name: "onlevelchange",
		description: "The level attribute has been updated."
	},
	{
		name: "onload",
		description: "A resource and its dependent resources have finished loading."
	},
	{
		name: "onload",
		description: "Progression has been successful."
	},
	{
		name: "onloadeddata",
		description: "The first frame of the media has finished loading."
	},
	{
		name: "onloadedmetadata",
		description: "The metadata has been loaded."
	},
	{
		name: "onloadend",
		description: 'Progress has stopped (after "error", "abort" or "load" have been dispatched).'
	},
	{
		name: "onloadstart",
		description: "Progress has begun."
	},
	{
		name: "onmark",
		description: 'The spoken utterance reaches a named SSML "mark" tag.'
	},
	{
		name: "onmessage",
		description: "A message is received through a WebSocket."
	},
	{
		name: "onmessage",
		description: "A message is received from a Web Worker."
	},
	{
		name: "onmessage",
		description: "A message is received from a child (i)frame or a parent window."
	},
	{
		name: "onmessage",
		description: "A message is received through an event source."
	},
	{
		name: "onmessageerror",
		description: "A message error is raised when a message is received by an object."
	},
	{
		name: "onmessage",
		description: "A message is received from a service worker, or a message is received in a service worker from another context."
	},
	{
		name: "onmousedown",
		description: "A pointing device button (usually a mouse) is pressed on an element."
	},
	{
		name: "onmouseenter",
		description: "A pointing device is moved onto the element that has the listener attached."
	},
	{
		name: "onmouseleave",
		description: "A pointing device is moved off the element that has the listener attached."
	},
	{
		name: "onmousemove",
		description: "A pointing device is moved over an element."
	},
	{
		name: "onmouseout",
		description: "A pointing device is moved off the element that has the listener attached or off one of its children."
	},
	{
		name: "onmouseover",
		description: "A pointing device is moved onto the element that has the listener attached or onto one of its children."
	},
	{
		name: "onmouseup",
		description: "A pointing device button is released over an element."
	},
	{
		name: "onnomatch",
		description: "The speech recognition service returns a final result with no significant recognition."
	},
	{
		name: "onnotificationclick",
		description: "A system notification spawned by ServiceWorkerRegistration.showNotification() has been clicked."
	},
	{
		name: "onnoupdate",
		description: "The manifest hadn't changed."
	},
	{
		name: "onobsolete",
		description: "The manifest was found to have become a 404 or 410 page, so the application cache is being deleted."
	},
	{
		name: "onoffline",
		description: "The browser has lost access to the network."
	},
	{
		name: "ononline",
		description: "The browser has gained access to the network (but particular websites might be unreachable)."
	},
	{
		name: "onopen",
		description: "A WebSocket connection has been established."
	},
	{
		name: "onopen",
		description: "An event source connection has been established."
	},
	{
		name: "onorientationchange",
		description: "The orientation of the device (portrait/landscape) has changed"
	},
	{
		name: "onpagehide",
		description: "A session history entry is being traversed from."
	},
	{
		name: "onpageshow",
		description: "A session history entry is being traversed to."
	},
	{
		name: "onpaste",
		description: "Data has been transferred from the system clipboard to the document."
	},
	{
		name: "onpause",
		description: "Playback has been paused."
	},
	{
		name: "onpause",
		description: "The utterance is paused part way through."
	},
	{
		name: "onpointercancel",
		description: "The pointer is unlikely to produce any more events."
	},
	{
		name: "onpointerdown",
		description: "The pointer enters the active buttons state."
	},
	{
		name: "onpointerenter",
		description: "Pointing device is moved inside the hit-testing boundary."
	},
	{
		name: "onpointerleave",
		description: "Pointing device is moved out of the hit-testing boundary."
	},
	{
		name: "onpointerlockchange",
		description: "The pointer was locked or released."
	},
	{
		name: "onpointerlockerror",
		description: "It was impossible to lock the pointer for technical reasons or because the permission was denied."
	},
	{
		name: "onpointermove",
		description: "The pointer changed coordinates."
	},
	{
		name: "onpointerout",
		description: "The pointing device moved out of hit-testing boundary or leaves detectable hover range."
	},
	{
		name: "onpointerover",
		description: "The pointing device is moved into the hit-testing boundary."
	},
	{
		name: "onpointerup",
		description: "The pointer leaves the active buttons state."
	},
	{
		name: "onplay",
		description: "Playback has begun."
	},
	{
		name: "onplaying",
		description: "Playback is ready to start after having been paused or delayed due to lack of data."
	},
	{
		name: "onpopstate",
		description: "A session history entry is being navigated to (in certain cases)."
	},
	{
		name: "onprogress",
		description: "In progress."
	},
	{
		name: "onprogress",
		description: "The user agent is downloading resources listed by the manifest."
	},
	{
		name: "onpush",
		description: "A Service Worker has received a push message."
	},
	{
		name: "onpushsubscriptionchange",
		description: "A PushSubscription has expired."
	},
	{
		name: "onratechange",
		description: "The playback rate has changed."
	},
	{
		name: "onreadystatechange",
		description: "The readyState attribute of a document has changed."
	},
	{
		name: "onrepeatEvent",
		description: "A SMIL animation element is repeated."
	},
	{
		name: "onreset",
		description: "A form is reset."
	},
	{
		name: "onresize",
		description: "The document view has been resized."
	},
	{
		name: "onresourcetimingbufferfull",
		description: "The browser's resource timing buffer is full."
	},
	{
		name: "onresult",
		description: "The speech recognition service returns a result — a word or phrase has been positively recognized and this has been communicated back to the app."
	},
	{
		name: "onresume",
		description: "A paused utterance is resumed."
	},
	{
		name: "onscroll",
		description: "The document view or an element has been scrolled."
	},
	{
		name: "onseeked",
		description: "A seek operation completed."
	},
	{
		name: "onseeking",
		description: "A seek operation began."
	},
	{
		name: "onselect",
		description: "Some text is being selected."
	},
	{
		name: "onselectstart",
		description: "A selection just started."
	},
	{
		name: "onselectionchange",
		description: "The selection in the document has been changed."
	},
	{
		name: "onshow",
		description: "A contextmenu event was fired on/bubbled to an element that has a contextmenu attribute"
	},
	{
		name: "onslotchange",
		description: "The node contents of a HTMLSlotElement (<slot>) have changed."
	},
	{
		name: "onsoundend",
		description: "Any sound — recognisable speech or not — has stopped being detected."
	},
	{
		name: "onsoundstart",
		description: "Any sound — recognisable speech or not — has been detected."
	},
	{
		name: "onspeechend",
		description: "Speech recognised by the speech recognition service has stopped being detected."
	},
	{
		name: "onspeechstart",
		description: "Sound that is recognised by the speech recognition service as speech has been detected."
	},
	{
		name: "onstalled",
		description: "The user agent is trying to fetch media data, but data is unexpectedly not forthcoming."
	},
	{
		name: "onstart",
		description: "The speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition."
	},
	{
		name: "onstart",
		description: "The utterance has begun to be spoken."
	},
	{
		name: "onstorage",
		description: "A storage area (localStorage or sessionStorage) has changed."
	},
	{
		name: "onsubmit",
		description: "A form is submitted."
	},
	{
		name: "onsuccess",
		description: "A request successfully completed."
	},
	{
		name: "onsuspend",
		description: "Media data loading has been suspended."
	},
	{
		name: "onSVGAbort",
		description: "Page loading has been stopped before the SVG was loaded."
	},
	{
		name: "onSVGError",
		description: "An error has occurred before the SVG was loaded."
	},
	{
		name: "onSVGLoad",
		description: "An SVG document has been loaded and parsed."
	},
	{
		name: "onSVGResize",
		description: "An SVG document is being resized."
	},
	{
		name: "onSVGScroll",
		description: "An SVG document is being scrolled."
	},
	{
		name: "onSVGUnload",
		description: "An SVG document has been removed from a window or frame."
	},
	{
		name: "onSVGZoom",
		description: "An SVG document is being zoomed."
	},
	{
		name: "ontimeout",
		description: ""
	},
	{
		name: "ontimeupdate",
		description: "The time indicated by the currentTime attribute has been updated."
	},
	{
		name: "ontouchcancel",
		description: "A touch point has been disrupted in an implementation-specific manners (too many touch points for example)."
	},
	{
		name: "ontouchend",
		description: "A touch point is removed from the touch surface."
	},
	{
		name: "ontouchmove",
		description: "A touch point is moved along the touch surface."
	},
	{
		name: "ontouchstart",
		description: "A touch point is placed on the touch surface."
	},
	{
		name: "ontransitionend",
		description: "A CSS transition has completed."
	},
	{
		name: "onunload",
		description: "The document or a dependent resource is being unloaded."
	},
	{
		name: "onupdateready",
		description: "The resources listed in the manifest have been newly redownloaded, and the script can use swapCache() to switch to the new cache."
	},
	{
		name: "onupgradeneeded",
		description: "An attempt was made to open a database with a version number higher than its current version. A versionchange transaction has been created."
	},
	{
		name: "onuserproximity",
		description: "Fresh data is available from a proximity sensor (indicates whether the nearby object is near the device or not)."
	},
	{
		name: "onvoiceschanged",
		description: "The list of SpeechSynthesisVoice objects that would be returned by the SpeechSynthesis.getVoices() method has changed (when the voiceschanged event fires.)"
	},
	{
		name: "onversionchange",
		description: "A versionchange transaction completed."
	},
	{
		name: "onvisibilitychange",
		description: "The content of a tab has become visible or has been hidden."
	},
	{
		name: "onvolumechange",
		description: "The volume has changed."
	},
	{
		name: "onwaiting",
		description: "Playback has stopped because of a temporary lack of data."
	},
	{
		name: "onwheel",
		description: "A wheel button of a pointing device is rotated in any direction."
	},
	{ name: "onforminput" },
	{ name: "onformchange" },
	{ name: "onmousewheel" }
];
