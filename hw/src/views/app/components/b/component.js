/**
 * Vue component class.
 *
 * @name 			b
 * @project 	hw
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 31st 2017, 1:24:41 pm
 */



export default {

	name: 'b',

	props: {
		a: true
	},


	// data() {
	// 	return {
	// 		b: this.a
	// 	}
	// }

	computed: {
		b() {
			return this.a;
		}
	}

}
