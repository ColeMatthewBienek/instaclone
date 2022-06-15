
module.exports = {
  content: ['./src/**/*.js', './src/**/**/*.js'],
  theme: {
    container:{
      center: true
    },
    fill: (theme) => ({
      red: theme('colors.red.primary')
    }),
    colors:{
      white: '#ffffff',
      blue: {
        medium: '#005c98'
      },
      black: {
        light: '#005c98',
        faded: '#00000059'
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb'
      },
      red: {
        primary: '#ed4956'
      }

    }
  }
}

//bg-blue-medium
//text-gray-base
//text-red-primary
//border-gray-primary
//text-blue-medium