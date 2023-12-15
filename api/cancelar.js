import Global from "../global"


export default async function Cancelar(id) {
    console.log(id)
    fetch(
      `https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/agendamento/cancelar?idAgendamento=${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Global.token}`
        }
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if(data.message == 'Agendamento cancelado'){
            return true
        }
      })
      .catch(error => console.log(error))
  }
