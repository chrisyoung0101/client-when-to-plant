import React from 'react';

class PlantForm extends React.Component {
    //state allows us to have a controlled input where we have the data in the 
    //component and not in the DOM
    state = { 
        plantData: {
            name: '',
            wks: '',
            before_last_frost: '',
            after_last_frost: '',
            inside_or_outside: '',
            recommended: ''
        }
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        //console.log(this.state.name);
        this.props.onSubmit(this.state.plantData);
    }

    plantFormChangeHandler = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        let tempPlant = {...this.state.plantData};
        tempPlant[name] = value;
        this.setState(
            {
                plantData: tempPlant
            }
        )

    }


    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    {/* <div className="field">
                        <label>Plant Name : </label>
                        <input 
                            type="text" 
                            value={this.state.plantData.name} 
                            onChange={(e) => this.setState({ name: e.target.value})} 
                        />
                    </div> */}
                    <div className="field">
                        <label>Plant Name : </label>
                        <input 
                            type="text" 
                            placeholder="Plant Name" 
                            onChange={this.plantFormChangeHandler} 
                            value={this.state.plantData.name} 
                            name="name"/>
                    </div>
                    <div className="field">
                        <label>Weeks : </label>
                        <input 
                            type="text" 
                            placeholder="Weeks" 
                            onChange={this.plantFormChangeHandler} 
                            value={this.state.plantData.wks} 
                            name="wks"/>
                    </div>
                    <div className="field">
                        <label>Before Last Frost? : </label>
                        <input 
                            type="text" 
                            placeholder="Yes or No" 
                            onChange={this.plantFormChangeHandler} 
                            value={this.state.plantData.before_last_frost} 
                            name="before_last_frost"/>
                    </div>
                    <div className="field">
                        <label>After Last Frost? : </label>
                        <input 
                            type="text" 
                            placeholder="Yes or No" 
                            onChange={this.plantFormChangeHandler} 
                            value={this.state.plantData.after_last_frost} 
                            name="after_last_frost"/>
                    </div>
                    <div className="field">
                        <label>Inside or Outside? : </label>
                        <input 
                            type="text" 
                            placeholder="Which one?" 
                            onChange={this.plantFormChangeHandler} 
                            value={this.state.plantData.inside_or_outside} 
                            name="inside_or_outside"/>
                    </div>
                    <div className="field">
                        <label>Recommended? : </label>
                        <input 
                            type="text" 
                            placeholder="Yes or No" 
                            onChange={this.plantFormChangeHandler} 
                            value={this.state.plantData.recommended} 
                            name="recommended"/>
                    </div>

                    <button>Submit</button>
                </form>
            </div>
        );
    }
};


export default PlantForm;