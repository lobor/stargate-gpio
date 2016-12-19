const options = {
  rpi0: [
    { value: 1, label: 'pin1' },
    { value: 2, label: 'pin2' },
    { value: 3, label: 'pin3' }
  ],
  rpi1a: [
    { value: 1, label: 'pin1' },
    { value: 2, label: 'pin2' },
    { value: 3, label: 'pin3' }
  ],
  rpi1b: [
    { value: 1, label: 'pin1' },
    { value: 2, label: 'pin2' },
    { value: 3, label: 'pin3' }
  ],
  rpi2a: [
    { value: 1, label: 'pin1' },
    { value: 2, label: 'pin2' },
    { value: 3, label: 'pin3' }
  ],
  rpi2b: [
    { value: 1, label: 'pin1' },
    { value: 2, label: 'pin2' },
    { value: 3, label: 'pin3' }
  ],
  rpi3a: [
    { value: 1, label: 'pin1' },
    { value: 2, label: 'pin2' },
    { value: 3, label: 'pin3' }
  ],
  rpi3b: [
    { value: 1, label: 'pin1' },
    { value: 2, label: 'pin2' },
    { value: 3, label: 'pin3' }
  ],
  arduino: [
    { value: 1, label: 'pin1' },
    { value: 2, label: 'pin2' },
    { value: 3, label: 'pin3' }
  ]
};

class SelectPin extends React.Component{
  constructor(...args){
    super(...args);

    this.state = {
      options: []
    }
  }

  componentWillReceiveProps(props){
    let optionsSelect = [];
    switch (props.controller) {
      case 1:
        optionsSelect = options.rpi0;
        break;
      case 2:
        optionsSelect = options.rpi1a;
        break;
      case 3:
        optionsSelect = options.rpi1b;
        break;
      case 4:
        optionsSelect = options.rpi2a;
        break;
      case 5:
        optionsSelect = options.rpi2b;
        break;
      case 6:
        optionsSelect = options.rpi3a;
        break;
      case 7:
        optionsSelect = options.rpi3b;
        break;
      case 7:
        optionsSelect = options.arduino;
        break;
      default:

    }
    this.setState({ options: optionsSelect });
  }

  render(){
    return (
      <Ui.SelectField floatingLabelText="Pin" disabled={ (this.state.options.length) ? false : true } >
        {this.state.options.map((item, i)=>{
          return (<Ui.MenuItem key={i} value={item.value} primaryText={item.label} />)
        })}
      </Ui.SelectField>
    );
  }
}

export default SelectPin;
