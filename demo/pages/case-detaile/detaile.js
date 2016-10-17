Page( {
    data: {
       
    },
    onReady: function() {
        //初始化数据
        var self=this;
      
    },
    //数据处理
    dataFormat:function(d){
        console.log( d.data );
        if(d.data.status=="1"){
            if(d.data.data){
                var datas=this.data.data.concat(d.data.data),flag=d.data.data.length<10;
                this.setData({
                    hidden: true,
                    data:datas,
                    disabled:flag?true:false,
                    moreTxt:flag?"已加载全部数据":"加载更多"
                });
            }else{
                this.setData({
                    disabled: true,
                    hidden:true,
                    moreTxt:"已加载全部数据"
                });  
            }
        }else{
            console.log('接口异常！')
        }
    },
    //加载数据
    getData:function(callback){
        var self = this;
        self.setData( {
            hidden: false
        });
        wx.request( {
            url: 'http://m.jiajuol.com/api/subject/subject_list.php',
            data: {
                page:self.data.page,
                house_type:4,
                house_style:0,
                house_area:1
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function( res ) {
                callback(res)
                // self.dataFormat(res);
            }
        })
    }
})