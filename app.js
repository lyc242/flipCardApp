const cards = [
	{
		front: '历史上第一位“程序员”',
		back: '奥古斯塔·阿达·金',
		flipped: false
	},
	{
		front: '发明了克拉克计算机',
		back: '艾迪斯·克拉克',
		flipped: false
	},
	{
		front: '计算机科学与人工智能之父',
		back: '艾伦·图灵',
		flipped: false
	},
	{
		front: 'JavaScript主要创造者与架构师',
		back: '布兰登·艾克',
		flipped: false
	}
];

new Vue({
	el: '#flashcard-app',
	data: {
		cards: cards,
		error: false,
		newFront: '',
		newBack: ''
	},
	methods: {
		addCard: function() {
			const data = { front: this.newFront, back: this.newBack, flipped: false };
			if (this.newFront && this.newBack) {
				this.error = false;
				this.cards.push(data);
				this.newFront = '';
				this.newBack = '';
			} else {
				this.error = true;
			}
		},
		deleteCard: function(index) {
			cards.splice(index, 1);
		}
	}
});
