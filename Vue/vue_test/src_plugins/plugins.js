export default {
	install(Vue){
		// 定义混入
		Vue.mixin({
			data() {
				return {
					x:100
				}
			}
		})
	}
}