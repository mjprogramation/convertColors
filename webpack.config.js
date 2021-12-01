var config = {
    watch : true,
    watchOptions: {
        ignored: '/node_modules/',
      },
   /* externals: {
        react : 'React',
        'react-dom' : "ReactDOM"
    },*/
    module: {
        rules :[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.png$/,
                use : {
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }
            }
        ]
    },
}

var core = Object.assign({}, config,{

    entry : {
        
        
       
    },
   
    output : {
        filename: '[name].js',
        path: __dirname + '/public/assets/js'
    },
})





module.exports = [core];