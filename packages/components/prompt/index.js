// 命令式创建组件

import Prompt from "./prompt";
import Vue from "vue";

const promptItemArr = [];
let promptItemId = 0;
const PromptConstruct = Vue.extend(Prompt);

const Xprompt = function transform(params) {
	const options = params || {};
	const itemClose = options.onClose;
	const itemId = promptItemId++;
	options.onClose = function() {
		Xprompt.close(itemId, itemClose);
	};
	if (!options.title) {
		options.title = "默认标题";
	}
	if (!options.desc) {
		options.desc = "默认文本默认文本默认文本";
	}
	const promptItem = new PromptConstruct({
		el: document.createElement("div"),
		data: options
	});
	promptItem.id = itemId;
	promptItemArr.push(promptItem);
	document.body.appendChild(promptItem.$el);
	promptItem.show = true;
	return promptItem;
};
Xprompt.close = function(itemId, itemClose) {
	console.log(promptItemArr);
	for (let i = 0, len = promptItemArr.length; i < len; i++) {
		if (promptItemArr[i].id === itemId) {
			if (typeof itemClose === "function") {
				itemClose(promptItemArr[i]);
			}
			promptItemArr[i] === "";
			promptItemArr.splice(itemId, 1);
		}
	}
};

export default Xprompt;
