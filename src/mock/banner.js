import Mock from 'mockjs'
Mock.mock('/api/banner', 'get', {
  code: 1,
  msg: '请求失败',
  data: [
    {
      id: '1',
      midImg: '',
      bigImg: '',
      title: '凛冬将至',
      description: '人唯有恐惧方能勇敢'
    },
    {
      id: '2',
      midImg: '',
      bigImg: '',
      title: '血火同源',
      description: '如果我回头，一切都完了'
    },
    {
      id: '3',
      midImg: '',
      bigImg: '',
      title: '听我怒吼',
      description: '兰博斯特有债必尝'
    }
  ]
})
