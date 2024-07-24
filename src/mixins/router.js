export default {
  methods: {
    /**
     *路由跳转
     * @param {String} routerName
     * @param {Object} query
     * @param {Object} params
     * @returns undefined
     */
    routerPush (routerName, query, params) {
      const curRouterName = this.$route.routerName
      if (curRouterName === routerName) {
        return
      }
      this.$router.push({
        name: routerName,
        query: query,
        params: params
      }, () => {})
    }
  }
}
