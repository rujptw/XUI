// 引入各种组件
import ClickSlider from "./components/click-slider";
import Button from "./components/button";
import DataPanel from "./components/data-panel";
import DateSwitcher from "./components/date-switcher";
import ShowPanel from "./components/show-panel";
import XPrompt from "./components/prompt";
import XCPrompt from "./components/cprompt";
const components = [ClickSlider, Button, DataPanel, DateSwitcher, ShowPanel];

const install = function(Vue) {
	if (install.installed) return;
	components.map(component => {
		Vue.component(component.name, component);
	});
	Vue.prototype.$xprompt = XPrompt;
	Vue.prototype.$xcprompt = XCPrompt;
};

if (typeof window !== "undefined" && window.Vue) {
	install(window.Vue);
}
export default {
	install,
	...components
};
