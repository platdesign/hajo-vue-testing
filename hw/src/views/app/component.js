/**
 * Vue component class.
 *
 * @name 			app
 * @project 	hw
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 31st 2017, 1:15:43 pm
 */

import AComp from './components/a';
import BComp from './components/b';


export default {

	name: 'app',

  components: {
    AComp,
    BComp
  },


  data() {
  	return {
  		test: 'Hajo',
      color: 'red'
  	}
  }
}
