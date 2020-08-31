import React from 'react';

class APItest extends React.Component {
    
    state = {
        data: {}
    }

    componentDidMount = () => {
        const configObj = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-token': 'AIzaSyAg9vTI59ac2X9pl3I41TH8lmdMf2h51fM'
              }
            }
            fetch(`https://gs.cscapi.com/data/getNFTMasterData`, configObj)
            .then(resp => resp.json())
            .then(result => console.log(result))

    }

        render () {
            return null
        }        
    }
export default APItest;