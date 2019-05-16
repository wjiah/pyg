export default {
  name: 'Home',
  data () {
    return {
        iscollapse: false,
        menus: []
    }
  },
  mounted () {
    this.menu()
  },
  methods: {
    logout () {
      sessionStorage.removeItem('token')
      this.$router.push('/login')
    },
    menuchange () {
      this.iscollapse = !this.iscollapse
    },
    async menu () {
      const {data: {data, meta}} = await this.$http.get('menus')
      if (meta.status !==200) return this.$message.error(meta.msg || '获取菜单失败')
      this.menus = data
    }
  }
}