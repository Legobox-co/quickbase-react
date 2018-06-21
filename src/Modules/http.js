import axios from 'axios'
import env from '../../env'

class Http {
	/**
	 * Class constructor
	 * @param {object} options Keys include ajaxEvents (bool), axios (object) and globalCatch (function)
	 */
	constructor(options = {}) {
		this.axios = axios.create(options)
		this.emitAjaxEvents = true
		this.working = 0
		this.useGlobalCatch = true
	}

	delete() {
		return this._send('delete', arguments)
	}

	get() {
		return this._send('get', arguments)
	}

	head() {
		return this._send('head', arguments)
	}

	options() {
		return this._send('options', arguments)
	}

	patch() {
		return this._send('patch', arguments)
	}

	post() {
		return this._send('post', arguments)
	}

	put() {
		return this._send('put', arguments)
	}

	request() {
		return this._send('request', arguments)
	}

	emitEvents(bool) {
		this.emitAjaxEvents = bool
		return this
	}

	setGlobalCatch(func) {
		this.globalCatch = func
		return this
	}

	setHeader(key, value) {
		this.axios.defaults.headers.common[key] = value
		return this
	}

	setVue($vue) {
		this.$vue = $vue
		return this
	}

	skipGlobalCatch() {
		this.useGlobalCatch = false
	}

	_send(type, args) {
		if (!this.working && this.emitAjaxEvents) {
			// this.$vue.$emit('ajax.started')
		}
		this.working++
			const self = this
			const responseParams = resp => {
				try {
					return [
						resp.data,
						resp.status,
						resp.headers,
						resp
					]
				} catch (e) {
					console.error(e)
				}
			}
			const beforeResponse = () => {
				self.working--
					if (!self.working && self.emitAjaxEvents) {
						this.$vue.$emit('ajax.ended')
					}
			}
			let promise = new Promise(function (resolve, reject) {
				this.axios[type](...args)
					.then(resp => {
						try {
							beforeResponse()
							resolve(...responseParams(resp))
						} catch (e) {
							console.error(e)
						}
					})
					.catch(error => {
						let resp = error.response
						try {
							beforeResponse()
							reject(...responseParams(resp))
						} catch (e) {
							console.error(e)
						}
					})
			}.bind(this))

			if (this.useGlobalCatch && typeof this.globalCatch === 'function') {
				promise.catch(this.globalCatch)
			}

			this.useGlobalCatch = true

			return promise
		}
}


let $http = new Http({
	baseURL: env.API_URL
})

$http.setHeader('accept', 'application/json')

export default $http;
