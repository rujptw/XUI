module.exports = {
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        preventExtract: true,
        use:[
            require("markdown-it-container"),
            'example-code',
            {
                validate:function(params) {
                    return params.trim().match(/^demo\s+(.*)/);
                },
                render:function(tokens,idx) {
                    let {nesting,info} = tokens[idx]
                    if (nesting ===1 ){
                    let  content = info.trim().match(/^demo\s+(.*)/) || [];
                    let description = content.length>1? content[1]:'';
                    let md = require('markdown-it')()
                    if(description){
                        description = md.render(description)
                    }
                    let code = tokens[index+1].content;
                    return `
                        <x-example-code>
                        <div class="source" slot="source">${code}</div>
                        ${description}
                        </x-example-code>
                    `
                    }else{
                        `
                        </div>
                        </x-example-code>
                        `
                    }
                }
            }
        ]
      })
  }
}
