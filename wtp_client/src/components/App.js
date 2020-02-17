import React from 'react';
import axios from 'axios';
import PlantForm from './PlantForm';
import PlantList from './PlantList';

class App extends React.Component {
    state = { plants: [] }
    //TODO : change the name of onSearchSubmit to onFormSubmit or something.
    //this is not a search 
    onSearchSubmit(plantData) {
        
        var bodyFormData = new FormData();
        bodyFormData.append("name", plantData.name);
        bodyFormData.append("wks", plantData.wks);
        bodyFormData.append("before_last_frost", plantData.before_last_frost);
        bodyFormData.append("after_last_frost", plantData.after_last_frost);
        bodyFormData.append("inside_or_outside", plantData.inside_or_outside);
        bodyFormData.append("recommended", plantData.recommended);
        

        axios.post('http://localhost:8080/plant', bodyFormData)
        .then((response) => {
                console.log(response);
            });

            // .catch(function (response) {
            //     //handle error
            //     console.log(response);
            // });
    }
    //TODO : to see most current list, we have to refresh the page
    //make it add the new data to the list view automatically
    componentDidMount() {
        axios.get('http://localhost:8080/plant').then((response) => {
            this.setState(
                {
                    plants: response.data
                })
        })
    }

    render() {
        return (
            <div>
                <div className="ui container" style={{ marginTop: '10px'}}>
                    <PlantForm onSubmit={this.onSearchSubmit} />
                </div>
                <table class="ui celled table">
                    <thead>
                        <tr><th>Name</th>
                        <th>Weeks</th>
                        <th>Plant Before Last Frost?</th>
                        <th>Plant Before After Frost?</th>
                        <th>Start Plants :</th>
                        <th>Recommended method :</th>
                    </tr></thead>
                    <PlantList plants={this.state.plants}/>
                </table>
            </div>
        );
    }  
}


export default App;