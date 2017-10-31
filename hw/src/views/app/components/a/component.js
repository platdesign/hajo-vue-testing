/**
 * Vue component class.
 *
 * @name 			a
 * @project 	hw
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 31st 2017, 1:24:37 pm
 */



export default {

	name: 'a',


	props: {
		a: {
			type: String,
			required: true
		},
		b: true
	},

	computed: {

		_a: {
			get() {
				return this.a;
			},
			set(val) {
				this.$emit('update:a', val);
			}
		}

	}

}
