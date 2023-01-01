import axios from "axios"

const hostUrl = "https://prim.iledefrance-mobilites.fr/marketplace"

const lineMapping = [
    {
      "human":"ligne 1",
      "stif":"C01371"
    },
    {
      "human":"ligne 2",
      "stif":"C01372"
    },
    {
      "human":"ligne 3",
      "stif":"C01373"
    },
    {
      "human":"ligne 3bis",
      "stif":"C01386"
    },
    {
      "human":"ligne 4",
      "stif":"C01374"
    },
    {
      "human":"ligne 5",
      "stif":"C01375"
    },
    {
      "human":"ligne 6",
      "stif":"C01376"
    },
    {
      "human":"ligne 7",
      "stif":"C01377"
    },
    {
      "human":"ligne 7bis",
      "stif":"C01387"
    },
    {
      "human":"ligne 8",
      "stif":"C01378"
    },
    {
      "human":"ligne 9",
      "stif":"C01379"
    },
    {
      "human":"ligne 10",
      "stif":"C01380"
    },
    {
      "human":"ligne 11",
      "stif":"C01381"
    },
    {
      "human":"ligne 12",
      "stif":"C01382"
    },
    {
      "human":"ligne 13",
      "stif":"C01383"
    },
    {
      "human":"ligne 14",
      "stif":"C01384"
    },
    {
      "human":"ligne R",
      "stif":"C01731"
    },
    {
      "human":"ligne H",
      "stif":"C01737"
    },
    {
      "human":"ligne A",
      "stif":"C01742"
    },
    {
      "human":"ligne B",
      "stif":"C01743"
    },
    {
      "human":"ligne C",
      "stif":"C01727"
    },
    {
      "human":"ligne D",
      "stif":"C01728"
    },
    {
      "human":"ligne E",
      "stif":"C01729"
    },
  ]
  
  const getInfosTrafic = async function(requestedLine, apikey){
    console.log(apikey)
    
    const possibleLine =lineMapping.filter(line => line.human === requestedLine);
    
  
    if(possibleLine.length <= 0) {
      return ["Désolé, nous ne connaissons pas la " + requestedLine]
    } else {
      const headers = {
        Accept:"application/json",
        apiKey:apikey,
        'Accept-Encoding': 'gzip, deflate'
        
      }
      console.log(possibleLine)
      
      const myParams = {
       LineRef:"STIF:Line::" + possibleLine[0].stif + ":"
      }
      
      const url = hostUrl+"/general-message"
      
      try {
        let resp = await axios.get(url,{headers:headers, params: myParams})
        let perturbations = []
        resp.data.Siri.ServiceDelivery.GeneralMessageDelivery.forEach(generalData => {
          generalData.InfoMessage.forEach(info => {
            console.log(info)
            if (info.InfoChannelRef.value === "Perturbation") {
              perturbations.push(info.Content.Message[0].MessageText.value)
            }
          })
        })
        if (perturbations.length == 0) {
          perturbations = ["Pas de perturbations à notre connaissance pour la " + requestedLine]
        }
        
        return perturbations
      } catch(error) {
        console.log(error)
        return ["Désolé, une erreur est survenue"]
      }
      
    }
    
  }
  
  exports.getInfosTrafic = getInfosTrafic