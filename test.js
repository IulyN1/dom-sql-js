let value = 0;

const count = QDOM.select('#main').count('.item');
const sum = QDOM.select('#main').sum('*');
console.log(count, sum);

QDOM.insert('<div style="color:red">New content</div>').into('#insertEl');
QDOM.insert('<div>Test content</div>').into('.el');

QDOM.update('#updateEl').set({ text: 'Updated' });
QDOM.update('#updateEl').set({ html: '<div>Updated with color</div>', color: 'blue' });
QDOM.update('#insertEl div').set({ color: 'green' });

QDOM.delete('p').from('#deleteEl');
QDOM.drop('#dropEl');

QDOM.createTrigger('click')
	.on('#counter')
	.execute(() => {
		value++;
		QDOM.update('#counterValue').set({ text: value });
	});
QDOM.executeTrigger('click').on('#counter');
