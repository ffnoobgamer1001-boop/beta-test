const batchName = "Electronics Engg (6th Sem)";
const subjects = [
  {
    id: "product-design",
    name: "Product Design",
    icon: "🎨",
    units: [
      {
        name: "Definition of a product",
        lectures: [
          {
            title: "Intro of Product Design",
            screenpalId: "cOVv2rn3xL9",
            pdfId: "1VfmbvLpqaDa2ZqEb4MC9eiRppOpNddhT"
          },
          {
            title: "Lec-01: Product",
            screenpalId: "cOVvocn3ycO",
            pdfId: "1OHHPESrTp2CU9sQYnwqjlk5FEukcHL3H"
          },
          {
            title: "Lec-02: Level of product",
            screenpalId: "cOVvDun3yFp",
            pdfId: "1Z9NYt-sXYJ5zgKEqxuB6kmOJsvcMHd9s"
          },
          {
            title: "Lec-03: Product Market Mix",
            screenpalId: "cOVvDgn3yY8",
            pdfId: "1BHXaK3Gstw4uX7meRiQeLmni4xxJogEW"
          },
          {
            title: "Lec-04: New Product Development Process",
            screenpalId: "cOVvDMn3y0b",
            pdfId: "1PQEhDuUS_lfpIuUJ-ZCZKfIwVe5zyD_O"
          },
          {
            title: "Lec-05: Idea generation methods",
            screenpalId: "cOVvbln3yOs",
            pdfId: "1YGMbyLhYqSUicT0xxIhZt9JttOfUbPF4"
          },
          {
            title: "Lec-06: Creativity",
            screenpalId: "cOVweyn34uU",
            pdfId: "1q1wjCIp1R6H3YPo7uPK6sk-plcHTkSw-"
          }
        ]
      },
      {
        name: "Product life cycle",
        lectures: [
          {
            title: "Lec-01: Product Life Cycle",
            screenpalId: "cOVwfrn34wr",
            pdfId: "1O8zNe2tIpLfeYjAi59MjO7zK7Qt6Z6RA"
          },
          {
            title: "Lec-02: The challenges of product development",
            screenpalId: "cOVwftn34wm",
            pdfId: "1eDMCT3wDXZBgisvJOjzuu51NLYHK-jLr"
          },
          {
            title: "Lec-03: Product analysis",
            screenpalId: "cOVwfCn34xv",
            pdfId: "1TtCzliidmJqjBEGcGw57R9979n64mkB0"
          },
          {
            title: "Lec-04: Economic consideration",
            screenpalId: "cOVwfCn34x4",
            pdfId: "1YzMCu3MCDloYZvWn1NWzxH4MgOXrBrwd"
          },
          {
            title: "Lec-05: Production and marketing aspect",
            screenpalId: "cOVwh5n34z4",
            pdfId: "1kU649y2O-qZokWeLVda1yUOQD4SWrbW1"
          },
          {
            title: "Lec-06: Characteristics of successful product development",
            screenpalId: "cOVwh5n34za",
            pdfId: "1Dy9KluXkQsSzWSXwLeQprVjV0GHjtv3g"
          },
          {
            title: "Lec-07: Phases in a generic product development",
            screenpalId: "cOVwh5n34zz",
            pdfId: "1mluEEVsYmZzg2UPpkzi85W397qhrIV-V"
          }
        ]
      },
      {
        name: "Product design",
        lectures: [
          {
            title: "Lec-01: Product design - by evolution, by innovation",
            screenpalId: "cOVwfNn34yz",
            pdfId: "1negH-iZeep2xT8ej_sNFDwDdLDAt87FH"
          },
          {
            title: "Lec-02: Design by imitation",
            screenpalId: "cOVwhen344Q",
            pdfId: "1BJt_PbqOpKgITF_34w5ZwKeSnrMnPwLQ"
          },
          {
            title: "Lec-03: Factors affecting product design",
            screenpalId: "cOVwhjn3440",
            pdfId: "1m8i5WtNflPEi5LQMqX5a09UTJZgunzdN"
          },
          {
            title: "Lec-04: Standards of performance & Env factors",
            screenpalId: "cOVwhjn344Z",
            pdfId: "1X7_K4dnzZKabfLzqFwC0ER3utiCtpdhy"
          },
          {
            title: "Lec-05: Decision making & iteration",
            screenpalId: "cOVwhjn344T",
            pdfId: "1ObN-LUmGj3uDrlo3YF8KEtj9ZudBPnxv"
          },
          {
            title: "Lec-06: Morphology of design (7 phases)",
            screenpalId: "cOVwhZn34ax",
            pdfId: "1xsvihyMeE0FdeFeJVYw7uIZuwsVwnrS1"
          },
          {
            title: "Lec-07: Morphology of design (2)",
            screenpalId: "cOVwhZn34a4",
            pdfId: "12IcUsaWsn9TS2JUmNyJdlq6CHfhfn3r0"
          },
          {
            title: "Lec-08: Role of aesthetics",
            screenpalId: "cOVwhun34aJ",
            pdfId: "11GlpQ2HbRPT6iNM1--oqzyc3WfqfOPtn"
          }
        ]
      },
      {
        name: "Introduction to optimization in design",
        lectures: [
          {
            title: "Lec-01: Optimization in design",
            screenpalId: "cOVw1en34AE",
            pdfId: "1kj7EzXhkc26ZIub0lyuyBV_wbYyIWWXx"
          },
          {
            title: "Lec-02: Economic factors in design",
            screenpalId: "cOVw1en34Am",
            pdfId: "1nkbwaa-yvFbg1jeW7luEKU6jRSurMS0W"
          },
          {
            title: "Lec-03: Design for safety & reliability",
            screenpalId: "cOVw1jn34A9",
            pdfId: "1BA-PyKPSZt_FzRgcG0ikvPDVzc5nD0xT"
          },
          {
            title: "Lec-04: Role of computers in design",
            screenpalId: "cOVw1jn34AR",
            pdfId: "1MDi_X4FIrBswpBruP8HRAiyhhRWsqDwL"
          },
          {
            title: "Lec-05: Role of models in design",
            screenpalId: "cOVw1jn34AS",
            pdfId: "1Yl-z1ZQTRDQ9wmhhxxIe9fMDCASy84Nd"
          },
          {
            title: "Lec-06: Mathematical modeling",
            screenpalId: "cOVw1Yn34BG",
            pdfId: "1Yl-z1ZQTRDQ9wmhhxxIe9fMDCASy84Nd"
          },
          {
            title: "Lec-07: Similitude & scaled models",
            screenpalId: "cOVw1Yn34Bm",
            pdfId: "1k4rBFoUTJDsnVFzGfsDrfYTAk-uxVVRz"
          },
          {
            title: "Lec-08: Concurrent design",
            screenpalId: "cOVw10n34BS",
            pdfId: "1MaPMliX1EINunOllEOTVMnFtsqW03BLv"
          },
          {
            title: "Lec-09: Six Sigma & DFSS",
            screenpalId: "cOVw10n34BW",
            pdfId: "17hBPA5TjNWqUSb3_4uO3IqlIYLmuBo4f"
          },
          {
            title: "Lec-10: DFM",
            screenpalId: "cOVw1wn34g4",
            pdfId: "1UiW8tHenlRQCuhciGX_sXOfHkAof99Xe"
          },
          {
            title: "Lec-11: Rapid prototyping (RP)",
            screenpalId: "cOVw1wn34ga",
            pdfId: "180Ie2MepSz_Y6g6kJ4AW_8q8ptmvK2YR"
          },
          {
            title: "Lec-12: RP its application in product design",
            screenpalId: "cOVw1pn34kX",
            pdfId: "1vrqn6Uxg44uUduZhoHGNE2i58vjNSSVa"
          },
          {
            title: "Lec-13: Product dev & product design",
            screenpalId: "cOVw1pn34kl",
            pdfId: "1LmWtZlU4i1afvyv0W_aqPuuT5YFwoa0h"
          }
        ]
      }
    ],
    notes: []
  },
  {
    id: "networking",
    name: "Computer Networking and Data Communication",
    icon: "🌐",
    units: [
      {
        name: "Unit 1",
        lectures: [
          {
            title: "Lec 1: Basics of Networking",
            screenpalId: "",
            pdfId: ""
          }
        ]
      }
    ],
    notes: [
      { title: "Full Notes", pdfId: "" },
      { title: "Previous Year Papers", pdfId: "" }
    ]
  },
  {
    id: "mechatronics",
    name: "Mechatronics",
    icon: "🤖",
    units: [
      {
        name: "Unit 1",
        lectures: [
          {
            title: "Lec 1: Intro to Mechatronics",
            screenpalId: "",
            pdfId: ""
          }
        ]
      }
    ],
    notes: [
      { title: "Unit Notes", pdfId: "" },
      { title: "Previous Year Papers", pdfId: "" }
    ]
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship and Start-Ups",
    icon: "🚀",
    units: [
      {
        name: "Unit 1",
        lectures: [
          {
            title: "Lec 1: Basics of Entrepreneurship",
            screenpalId: "",
            pdfId: ""
          }
        ]
      }
    ],
    notes: [
      { title: "Full Notes + Case Studies", pdfId: "" },
      { title: "Previous Year Papers", pdfId: "" }
    ]
  },
  {
    id: "adv-iot",
    name: "Advance IoT",
    icon: "📡",
    units: [
      {
        name: "Unit 1",
        lectures: [
          {
            title: "Lec 1: Advanced IoT Concepts",
            screenpalId: "",
            pdfId: ""
          }
        ]
      }
    ],
    notes: [
      { title: "Unit Notes + Protocols", pdfId: "" },
      { title: "Previous Year Papers", pdfId: "" }
    ]
  }
];
