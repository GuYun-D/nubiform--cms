module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    'import',
    {
      libraryName: 'element-plus',
      customStyleName: (name) => {
        return `element/lib/theme-chalk/${name}.css`
      },
    },
  ],
}
