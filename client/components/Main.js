import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import '../styles/App.css';

//import Page from '../containers/Page';
//import Footer from './Footer';

/* params = /{params}
 * FIXME Admin page should differ
 */
const Main = ({ match: {params} }) => (
	<Text>Hello world!</Text>
);


/*--app content
<Page param={params.place || ''} sub={params.subplace}/>
<Footer />
*/
export default Main;
