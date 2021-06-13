import React from 'react'
import "./Table.css";

const Table = ({arraycountries}) => {
    return (
        <div className = "tablecomponent">
            {
                arraycountries.map((country => (
                    <tr>
                        <td>{country.country}</td>
                        <td>{country.cases}</td>
                    </tr>

                )))
            }
            
        </div>
    )
}

export default Table
