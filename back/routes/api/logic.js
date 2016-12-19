
export default [
	{
		'name': 'gpio:logic:create',
		'depPlugin': ['tableLogic'],
		'call': function(data, fc){

			this.tableLogic.push(data);
			this.tableLogic.save();
			// console.log(data, fc);
			fc(data);
		}
	}
];
