
var name1 = ["Klopp","double","treble"];

var myConfig = {
    type: "hbar",
    "title":{
        "text":"　　Defense (Opponent Total Shot)",
        "position":"50% 2%",
        "margin-top":5,
        "margin-right":0,
        "margin-left":0,
        "margin-bottom":15,
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
        tooltip : {
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
    },
    plotarea:{
        marginLeft:"200",
        marginRight:"100"


    },
    series : [
            {//off shot - 아래 에서 위 순서로 반영됨
                values : [51,0,0],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#f3b61b",
                text : "Treble_o_off_target",

            },
            {//off shot - 아래 에서 위 순서로 반영됨
                values : [0,54,0],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#137d3f",
                text : "Double_o_off_target",
            },
            {//off shot - 아래 에서 위 순서로 반영됨
                values : [0,0,49],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#0d4c88",
                text : name1[0]+"_o_off_target",
            },

            //////////////////////////////
            {//on_shot
                values : [40,0,0],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#edc54e",
                text : "Treble_o_on_target"
                //alpha : 0.8,
            },
            {//on_shot
                values : [0,34,0],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#3e9945",
                text : "Double_o_on_target"
                //alpha : 0.8,
            },
            {//on_shot
                values : [0,0,39],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#0f71b2",
                text : name1[0]+"_o_on_target"
                //alpha : 0.8,
            },
            /////////////////////////////////////////

            {//goal22
                values : [9,0,0],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#e7d02e",
                text : "Treble_o_goal"
                //alpha : 0.8,

            },
            {//goal
                values : [0,12,0],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#49b74a",
                text : "Double_o_goal"
                //alpha : 0.8,
            },
            {//goal
                values : [0,0,12],
                borderRadius : "0px 0px 0px 0px",
                backgroundColor : "#2491bf",
                text : name1[0]+"_goal"
                //alpha : 0.8,
            },

        ],

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
    id : 'myChart_22_5',
    data : myConfig,
    height: "100%",
    width: "100%"
});