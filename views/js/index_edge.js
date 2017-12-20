/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'PAREJA_salud_alta-15',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '0px', '900px', '550px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PAREJA%20salud%20alta-15.png",'0px','0px']
                        },
                        {
                            id: 'PAREJA_salud_alta-16',
                            type: 'image',
                            rect: ['0px', '0%', '900px', '550px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PAREJA%20salud%20alta-16.png",'0px','0px']
                        },
                        {
                            id: 'PAREJA_salud_alta-02',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '900px', '550px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PAREJA%20salud%20alta-02.png",'0px','0px']
                        },
                        {
                            id: 'menu-piel',
                            type: 'rect',
                            rect: ['236px', '281px', '44px', '75px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'PAREJA_salud_alta-03',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '900px', '550px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PAREJA%20salud%20alta-03.png",'0px','0px']
                        },
                        {
                            id: 'menu-diabetes',
                            type: 'rect',
                            rect: ['163px', '239px', '44px', '75px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'PAREJA_salud_alta-04',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '900px', '550px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PAREJA%20salud%20alta-04.png",'0px','0px']
                        },
                        {
                            id: 'menu-aterosclerosis',
                            type: 'rect',
                            rect: ['163px', '324px', '44px', '75px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'PAREJA_salud_alta-05',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '900px', '550px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PAREJA%20salud%20alta-05.png",'0px','0px']
                        },
                        {
                            id: 'menu-lupus',
                            type: 'rect',
                            rect: ['88px', '196px', '44px', '75px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'PAREJA_salud_alta-06',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '900px', '550px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PAREJA%20salud%20alta-06.png",'0px','0px']
                        },
                        {
                            id: 'menu-alzheimer',
                            type: 'rect',
                            rect: ['88px', '281px', '44px', '75px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'PAREJA_salud_alta-07',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '900px', '550px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PAREJA%20salud%20alta-07.png",'0px','0px']
                        },
                        {
                            id: 'menu-parkinson',
                            type: 'rect',
                            rect: ['88px', '367px', '44px', '75px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'PAREJA_salud_alta-08',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '900px', '550px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PAREJA%20salud%20alta-08.png",'0px','0px']
                        },
                        {
                            id: 'menu-epoc',
                            type: 'rect',
                            rect: ['590px', '214px', '44px', '75px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'PAREJA_salud_alta-09',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '900px', '550px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PAREJA%20salud%20alta-09.png",'0px','0px']
                        },
                        {
                            id: 'menu-acne',
                            type: 'rect',
                            rect: ['662px', '173px', '44px', '75px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'PAREJA_salud_alta-10',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '900px', '550px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PAREJA%20salud%20alta-10.png",'0px','0px']
                        },
                        /*{
                            id: 'menu-artritis',
                            type: 'rect',
                            rect: ['662px', '258px', '44px', '75px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },*/
                        {
                            id: 'PAREJA_salud_alta-11',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '900px', '550px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PAREJA%20salud%20alta-11.png",'0px','0px']
                        },
                        {
                            id: 'menu-envejecimiento',
                            type: 'rect',
                            rect: ['737px', '130px', '44px', '75px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'PAREJA_salud_alta-12',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '900px', '550px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PAREJA%20salud%20alta-12.png",'0px','0px']
                        },
                        {
                            id: 'menu-cancer',
                            type: 'rect',
                            rect: ['737px', '215px', '44px', '75px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'PAREJA_salud_alta-13',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '900px', '550px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PAREJA%20salud%20alta-13.png",'0px','0px']
                        },
                        {
                            id: 'menu-higado',
                            type: 'rect',
                            rect: ['737px', '300px', '44px', '75px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'PAREJA_salud_alta-14',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '900px', '550px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PAREJA%20salud%20alta-14.png",'0px','0px']
                        },
                        {
                            id: 'menu-hipertension',
                            type: 'rect',
                            rect: ['812px', '173px', '44px', '75px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '900px', '550px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    labels: {
                        "off": 0,
                        "piel": 500,
                        "diabetes": 1000,
                        "aterosclerosis": 1500,
                        "lupus": 2000,
                        "alzheimer": 2500,
                        "parkinson": 3000,
                        "epoc": 3500,
                        "acne": 4000,
                        "artritis": 4500,
                        "envejecimiento": 5000,
                        "cancer": 5500,
                        "higado": 6000,
                        "hipertension": 6500
                    },
                    data: [
                        [
                            "eid32",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid33",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid26",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid27",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid34",
                            "display",
                            0,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-15}",
                            'block',
                            'block'
                        ],
                        [
                            "eid35",
                            "display",
                            500,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid31",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-08}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-08}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21",
                            "height",
                            3840,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-08}",
                            '550px',
                            '550px'
                        ],
                        [
                            "eid7",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid8",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-07}",
                            'none',
                            'block'
                        ],
                        [
                            "eid15",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-07}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20",
                            "width",
                            3840,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-08}",
                            '900px',
                            '900px'
                        ],
                        [
                            "eid24",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid25",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid28",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid29",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3",
                            "display",
                            500,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid22",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-09}",
                            'none',
                            'block'
                        ],
                        [
                            "eid23",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-09}",
                            'block',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${PAREJA_salud_alta-06}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-15343319");
