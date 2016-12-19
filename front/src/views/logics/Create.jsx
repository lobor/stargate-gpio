import SelectPin from './../../components/form/SelectPin';

class Create extends React.Component{
	constructor(){
		super();

		this.state = {
			form: {
				returnState: false,
				readWrite: 'read',
				typeSwitch: null,
			},
			modelController: null
		};
		this.submit = this.submit.bind(this);
	}

	selectedController(e, index, value){
		this.setState({ modelController: value });
	}

	setReturnState(e, value){
		let form = this.state.form;
		form.returnState = value;
		this.setState({ form: form });
	}

	selectedReadWrite(e, index, value){
		let form = this.state.form;
		form.readWrite = value;
		this.setState({ form: form });
	}

	selectedSwitch(e, index, value){
		let form = this.state.form;
		form.typeSwitch = value;
		this.setState({ form: form });
	}

	submit(e){
		e.stopPropagation();
		e.preventDefault();
		this.context.io.run('gpio:logic:create', this.state.form, (data) => {
			console.log(data);
      // this.setState({model: data, render: true});
    });
	}

	setLabel(e, value){
		let form = this.state.form;
		form.label = value;
		this.setState({ form: form });
	}

	render(){
		let formReturnState;

		if(this.state.form.returnState){
			formReturnState = (
				<SelectPin controller={this.state.modelController} />
			);
		}

		return (
      <div>
				<form onSubmit={this.submit}>
					<Ui.TextField floatingLabelText="Logic name" onChange={ this.setLabel.bind(this) } />
					<br />
					<Ui.SelectField floatingLabelText="Select model micro-controller" value={this.state.modelController} onChange={ this.selectedController.bind(this) }>
		        <Ui.MenuItem value={1} primaryText="RPI zero" />
						<Ui.MenuItem value={2} primaryText="RPI 1 model A" />
		        <Ui.MenuItem value={3} primaryText="RPI 1 model B" />
						<Ui.MenuItem value={4} primaryText="RPI 2 model A" />
		        <Ui.MenuItem value={5} primaryText="RPI 2 model B" />
		        <Ui.MenuItem value={6} primaryText="RPI 3 model A" />
		        <Ui.MenuItem value={7} primaryText="RPI 3 model B" />
		      </Ui.SelectField>
					<br />
					<Ui.SelectField floatingLabelText="Input/Output" value={this.state.form.readWrite} onChange={ this.selectedReadWrite.bind(this) } >
		        <Ui.MenuItem value="read" primaryText="Input" />
						<Ui.MenuItem value="write" primaryText="Output" />
		      </Ui.SelectField>
					<br />
					<Ui.SelectField floatingLabelText="Type of switch" value={this.state.form.typeSwitch} disabled={ (this.state.form.readWrite === 'write') ? false : true } onChange={ this.selectedSwitch.bind(this) } >
		        <Ui.MenuItem value="switch" primaryText="Simple switch" />
						<Ui.MenuItem value="push" primaryText="Push-button switch" />
		      </Ui.SelectField>
					<br />
					<SelectPin controller={this.state.modelController} />
					<Ui.Toggle label="Return State" onToggle={ this.setReturnState.bind(this) } value={ this.state.form.returnState } />
					{formReturnState}
					<Ui.RaisedButton label={Lang.save} primary={true} style={ {marginTop: '20px', float: 'right'} } type="submit" />
				</form>
      </div>
		);
	}
}


Create.contextTypes = {
	io: React.PropTypes.object
};

export default Create;
