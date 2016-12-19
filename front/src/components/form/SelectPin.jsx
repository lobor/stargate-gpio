const options = {
  rpi: [
    { value: 3, label: 'BCM 2 (SDA)' },
    { value: 5, label: 'BCM 3 (SCL)' },
    { value: 7, label: 'BCM 4 (GPCLK0)' },
    { value: 8, label: 'BCM 14 (TXD)' },
    { value: 10, label: 'BCM 15 (RXD)' },
    { value: 11, label: 'BCM 17' },
    { value: 12, label: 'BCM 18 (PWM0)' },
    { value: 13, label: 'BCM 27' },
    { value: 15, label: 'BCM 22' },
    { value: 16, label: 'BCM 23' },
    { value: 18, label: 'BCM 24' },
    { value: 19, label: 'BCM 10 (MOSI)' },
    { value: 21, label: 'BCM 9 (MISO)' },
    { value: 22, label: 'BCM 25' },
    { value: 23, label: 'BCM 11 (SCLK)' },
    { value: 24, label: 'BCM 8 (CE0)' },
    { value: 26, label: 'BCM 7 (CE1)' },
    { value: 27, label: 'BCM 0 (ID_SD)' },
    { value: 28, label: 'BCM 1 (ID_SC)' },
    { value: 29, label: 'BCM 5' },
    { value: 31, label: 'BCM 6' },
    { value: 32, label: 'BCM 12 (PWM0)' },
    { value: 33, label: 'BCM 13 (PWM1)' },
    { value: 35, label: 'BCM 19 (MISO)' },
    { value: 36, label: 'BCM 16' },
    { value: 37, label: 'BCM 26' },
    { value: 38, label: 'BCM 20 (MOSI)' },
    { value: 40, label: 'BCM 21 (SCLK)' },
  ],
  arduino: [
    { value: 1, label: 'pin1' },
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
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        optionsSelect = options.rpi;
        break;
      case 8:
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
          return (<Ui.MenuItem key={i} value={item.value} primaryText={item.label + ' (physical ' + item.value + ')'} />)
        })}
      </Ui.SelectField>
    );
  }
}

export default SelectPin;
