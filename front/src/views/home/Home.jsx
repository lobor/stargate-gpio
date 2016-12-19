import CreateViews from './../logics/Create';
import ListViews from './../logics/List';

class Home extends React.Component{
	render(){
		return (
      <div style={{ display: 'flex' }}>
				<Ui.List style={{ borderRight: '1px solid ' + Colors.grey300 }}>
					<Ui.Subheader>Menu Gpio</Ui.Subheader>
					<ReactRouter.Link to="/gpio/create">
						{
							({isActive, location, href, onClick, transition}) => <Ui.ListItem onClick={ onClick } href={ href } primaryText="Create logics" />
						}
					</ReactRouter.Link>
					<ReactRouter.Link to="/gpio/list">
						{
							({isActive, location, href, onClick, transition}) => <Ui.ListItem onClick={ onClick } href={ href } primaryText="List logics" />
						}
					</ReactRouter.Link>
		    </Ui.List>
				<div style={{ flex: 1, padding: '0px 10px' }}>
					<ReactRouter.Match pattern="/gpio/create" exactly component={ CreateViews } />
					<ReactRouter.Match pattern="/gpio/list" exactly component={ ListViews } />
				</div>
      </div>
		);
	}
}

export default Home;
