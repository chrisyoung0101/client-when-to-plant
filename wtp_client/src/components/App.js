import React from 'react';
import axios from 'axios';
import PlantForm from './PlantForm';

class App extends React.Component {
    //TODO : change the name of onSearchSubmit to onFormSubmit or something.
    //this is not a search 
    onSearchSubmit(plantData) {
        console.log("Console " + plantData.wks);

        var bodyFormData = new FormData();
        bodyFormData.append("name", plantData.name);
        bodyFormData.append("wks", plantData.wks);
        bodyFormData.append("before_last_frost", plantData.before_last_frost);
        bodyFormData.append("after_last_frost", plantData.after_last_frost);
        bodyFormData.append("inside_or_outside", plantData.inside_or_outside);
        bodyFormData.append("recommended", plantData.recommended);
        

        axios.post('http://localhost:8080/plant', bodyFormData)
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

        // var bodyFormData = new FormData();
        // bodyFormData.set('name', 'fig tree');
        
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:8080/plant',
        //     data: bodyFormData,
        //     headers: {'Content-Type': 'multipart/form-data' }
        //     })
        //     .then(function (response) {
        //         //handle success
        //         console.log(response);
        //     })
        //     .catch(function (response) {
        //         //handle error
        //         console.log(response);
        //     });

        //how do I do a Post in axios?
        //how do I use like a template string here?
        // axios.post('http://localhost:8080/plant', {
        //     name: ''
        // })
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error){
        //     console.log(error);
        // });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <PlantForm onSubmit={this.onSearchSubmit} />
            </div>
        );
    }  
}


export default App;