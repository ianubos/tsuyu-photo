const withTM = require('next-transpile-modules')(['three', '@react-three/drei', '@react-three/fiber'])

module.exports = withTM({
    webpack5: false, // you want to keep using Webpack 4
})
