module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      [
        'next/babel',
        {
          'class-properties': { loose: true },
        },
      ],
    ],
    plugins: [
      ['import', { libraryName: 'antd', style: true }],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
    ],
  }
}
