const DOM = {
	insert(content) {
		return {
			into(selector) {
				const elem = document.querySelector(selector);
				if (!elem) {
					console.error(`No element with ${selector} selector!`);
					return;
				}
				elem.innerHTML += content;
			}
		};
	},
	update(selector) {
		return {
			set(content) {
				const elem = document.querySelector(selector);
				if (!elem) {
					console.error(`No element with ${selector} selector!`);
					return;
				}
				if (typeof content === 'object') {
					Object.entries(content).forEach((entry) => {
						const [key, value] = entry;
						if (key === 'style') {
							Object.entries(value).forEach((style) => {
								const [styleKey, styleValue] = style;
								elem.style[styleKey] = styleValue;
							});
							return;
						} else {
							elem[key] = value;
						}
					});
				} else if (typeof content === 'string' || typeof content === 'number') {
					elem.innerHTML = content;
				} else {
					console.error('Invalid content type! Expected string, number or object');
				}
			}
		};
	},
	delete(contentSelector = '*') {
		return {
			from(selector) {
				const elem = document.querySelector(selector);
				if (!elem) {
					console.error(`No element with ${selector} selector!`);
					return;
				}

				if (!contentSelector || contentSelector === '*') {
					elem.innerHTML = '';
				} else {
					const child = elem.querySelector(contentSelector);
					if (!child) {
						console.error(`No element with ${selector} selector!`);
						return;
					}
					child.innerHTML = '';
				}
			}
		};
	},
	drop(selector) {
		const elem = document.querySelector(selector);
		if (!elem) {
			console.error(`No element with ${selector} selector!`);
			return;
		}
		elem.remove();
	},
	createTrigger(event) {
		return {
			on(selector) {
				const elem = document.querySelector(selector);
				if (!elem) {
					console.error(`No element with ${selector} selector!`);
					return;
				}
				return {
					execute(callback) {
						elem.addEventListener(event, callback);
					}
				};
			}
		};
	},
	trigger(event) {
		return {
			on(selector) {
				const elem = document.querySelector(selector);
				if (!elem) {
					console.error(`No element with ${selector} selector!`);
					return;
				}
				const ev = new Event(event);
				elem.dispatchEvent(ev);
			}
		};
	}
};
