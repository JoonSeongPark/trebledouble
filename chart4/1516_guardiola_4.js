
var name1 = ["Guardiola","double","treble"];

var myConfig = {
    type: "hbar",
    "title":{
        "text":"　　ATTACK (Total Shot)",
        "position":"50% 2%",
        "margin-top":5,
        "margin-right":0,
        "margin-left":0,
        "margin-bottom":10,
        fontWeight : "bold",
        // fontStyle : 'italic',
        fontColor : "white",
        fontSize : 35
    },
    legend:{'layout':'1x3',
        'x':'33%',
        "y":"80%",
        backgroundColor:"black",
        'border-color':"black",
        "item":{
                fontColor:"White",
                fontSize : "10"
          },
     },
    backgroundColor: "black",
    plot:{
        stacked:true,
        barsSpaceLeft : "20px",
        barsSpaceRight : "20px",
        // valueBox : {
        //     visible : true,
        //     text : "%v %",
        //     fontColor : "white",
        //     fontSize: 30,
        //     placement: "middle",
        // },
        tooltip : {
            // borderWidth : 2,
            // borderRadius : 2
            alpha: 0.7,
            borderRadius: 5,
            borderWidth: 1,
            fontFamily: 'Roboto',
            fontSize: 25,
            fontWeight: 'bold',
            padding: '5 10',
            text:"%v %",
            textAlpha: 1,
            backgroundColor: '#000',

        },
        // animation:{
        //     effect:1,
        //     sequence:0,
        //     method:3
        // },
    // graphset:[{
    //     height: "100%",
    //     width : "100%"
    // }
    // ],
    },
    plotarea:{
        marginLeft:"200",
        marginRight:"100"


    },
    // series : [
    //     {//off shot - 아래 에서 위 순서로 반영됨
    //         values : [off_target1[2],0,0],
    //         borderRadius : "0px 0px 0px 0px",
    //         backgroundColor : "#f3b61b",
    //         text : "Treble_off_target",
    //     },
    //     {//off shot - 아래 에서 위 순서로 반영됨
    //         values : [0,off_target1[1],0],
    //         borderRadius : "0px 0px 0px 0px",
    //         backgroundColor : "#137d3f",
    //         text : "Double_off_target",
    //     },
    //     {//off shot - 아래 에서 위 순서로 반영됨
    //         values : [0,0,off_target1[0]],
    //         borderRadius : "0px 0px 0px 0px",
    //         backgroundColor : "#0d4c88",
    //         text : name1[0]+"off_target",
    //     },
    //
    //     //////////////////////////////
    //     {//on_shot
    //         values : [on_target1[2],0,0],
    //         borderRadius : "0px 0px 0px 0px",
    //         backgroundColor : "#edc54e",
    //         text : "Treble_on_target"
    //         //alpha : 0.8,
    //     },
    //     {//on_shot
    //         values : [0,on_target1[1],0],
    //         borderRadius : "0px 0px 0px 0px",
    //         backgroundColor : "#3e9945",
    //         text : "Double_on_target"
    //         //alpha : 0.8,
    //     },
    //     {//on_shot
    //         values : [0,0,on_target1[0]],
    //         borderRadius : "0px 0px 0px 0px",
    //         backgroundColor : "#0f71b2",
    //         text : name1[0]+"on_target"
    //         //alpha : 0.8,
    //     },
    //     /////////////////////////////////////////
    //
    //     {//goal
    //         values : [goal1[2],0,0],
    //         borderRadius : "0px 0px 0px 0px",
    //         backgroundColor : "#e7d02e",
    //         text : "Treble_goal"
    //         //alpha : 0.8,
    //
    //     },
    //     {//goal
    //         values : [0,goal1[1],0],
    //         borderRadius : "0px 0px 0px 0px",
    //         backgroundColor : "#49b74a",
    //         text : "Double_goal"
    //         //alpha : 0.8,
    //     },
    //     {//goal
    //         values : [0,0,goal1[0]],
    //         borderRadius : "0px 0px 0px 0px",
    //         backgroundColor : "#2491bf",
    //         text : name1[0]+"goal"
    //         //alpha : 0.8,
    //     }
    // ],

    series : [
            {//off shot - 아래 에서 위 순서로 반영됨
                values : [43,0,0],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#f3b61b",
                text : "Treble_off_target",
                // tooltip: {
                //     backgroundColor: '#000',
                //     borderColor: '#C2185B',
                //     fontColor: '#fff',
                //     lineStyle: 'dotted'
                // }
            },
            {//off shot - 아래 에서 위 순서로 반영됨
                values : [0,47,0],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#137d3f",
                text : "Double_off_target",
            },
            {//off shot - 아래 에서 위 순서로 반영됨
                values : [0,0,44],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#0d4c88",
                text : name1[0]+"_off_target",
            },

            //////////////////////////////
            {//on_shot
                values : [35,0,0],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#edc54e",
                text : "Treble_on_target"
                //alpha : 0.8,
            },
            {//on_shot
                values : [0,34,0],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#3e9945",
                text : "Double_on_target"
                //alpha : 0.8,
            },
            {//on_shot
                values : [0,0,40],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#0f71b2",
                text : name1[0]+"_on_target"
                //alpha : 0.8,
            },
            /////////////////////////////////////////

            {//goal22
                values : [22,0,0],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#e7d02e",
                text : "Treble_goal"
                //alpha : 0.8,

            },
            {//goal
                values : [0,19,0],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#49b74a",
                text : "Double_goal"
                //alpha : 0.8,
            },
            {//goal
                values : [0,0,16],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#2491bf",
                text : name1[0]+"_goal"
                //alpha : 0.8,
            },

        ],



    // series: [
    //     {
    //         values:[45,37,18,0,0,0,0,0,0],
    //         stack:1
    //     },
    //     {
    //         values:[0,0,0,47,34,19,0,0,0],
    //         stack:1
    //     },
    //     {
    //         values:[0,0,0,0,0,0,43,35,22],
    //         stack:1
    //     }
    // ],
    scaleY :{
        visible : false,
        lineColor : "white",

        guide : {
            visible : false
        },
        tick : {
            visible : false
        },
        item: {
            // fontFamily: "Roboto",
            fontSize: 30,
            fontColor: "white"
        },
    },
    scaleX : {
        visible: true,
        lineColor: "transparent",
        guide: {
            visible: false
        },
        tick: {
            visible: false
        },
        labels: ['Treble','Double', name1[0]],
        item: {
            // fontFamily: "Roboto",
            fontSize: 15,
            fontColor: "white",
            padding: "5"
        },
    }
};
//
zingchart.render({
    id : 'myChart_28_4',
    data : myConfig,
    height: "100%",
    width: "100%"
});