import React from 'react';
import { connect } from 'react-redux';
import Inicio from './Inicio';
import Dashboard from '../components/private/Dashboard';

const RootComponent = ({ usuario }) => {
	return <>{usuario.ok === true ? <Dashboard /> : <Inicio />}</>;
};

const mapStateToProps = (state) => ({
	usuario: state.usuario,
});

// export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
export default connect(mapStateToProps)(RootComponent);
