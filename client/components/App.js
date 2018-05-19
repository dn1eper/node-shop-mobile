import React from 'react';
import {Container, Content} from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
//import '../styles/App.css';

import Page from '../containers/Page';
import Footer from './Footer';

/* params = /{params}
 * FIXME Admin page should differ
 */
const App = ({ match: {params} }) => (
	<Container>
			<Text>Hello world!</Text>
	</Container>
);


/*--app content
<Page param={params.place || ''} sub={params.subplace}/>
<Footer />
*/
export default App;
