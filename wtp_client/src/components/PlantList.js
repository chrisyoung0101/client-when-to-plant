import React from 'react';

const PlantList = (props) => {
    return props.plants.map((plant, index) => 
        // <div>{plant.name}</div>

       
            
            <tbody key={index}>
                <tr>
                <td>{plant.name}</td>
                <td>{plant.wks}</td>
                <td>{plant.before_last_frost}</td>
                <td>{plant.after_last_frost}</td>
                <td>{plant.inside_or_outside}</td>
                <td>{plant.recommended}</td>
                </tr>
            </tbody>
        
        
    );
};

export default PlantList;