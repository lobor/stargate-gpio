import Loading from 'components/loading/Loading';

class List extends React.Component{
	constructor(){
		super();
		this.state = {
			logics: [],
			render: false
		}
	}
	componentWillMount(){
		this.context.io.run('gpio:logic:list', {}, (data) => {
			this.setState({ render: true, logics: data })
		});
	}

	render(){
		return (
			<Loading render={this.state.render}>
				<Ui.Table>
			    <Ui.TableHeader>
			      <Ui.TableRow>
			        <Ui.TableHeaderColumn>Label</Ui.TableHeaderColumn>
			        <Ui.TableHeaderColumn>Action</Ui.TableHeaderColumn>
			      </Ui.TableRow>
			    </Ui.TableHeader>
			    <Ui.TableBody>
						{this.state.logics.map((item, i) => {
							return (
								<Ui.TableRow key={i}>
									<Ui.TableRowColumn>{item.label}</Ui.TableRowColumn>
									<Ui.TableRowColumn>Employed</Ui.TableRowColumn>
								</Ui.TableRow>
							);
						})}
					</Ui.TableBody>
				</Ui.Table>
			</Loading>
		);
	}
}

List.contextTypes = {
	io: React.PropTypes.object
};

export default List;
