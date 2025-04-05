import React from 'react';

export default function PropertyCard({ property, onClick }) {
    return (
        <div style={{ width: 200, margin: 10, border: '1px solid #ccc', padding: 10 }} onClick={() => onClick(property)}>
            <img src={`${process.env.REACT_APP_API_URL}${property.image}`} alt={property.title} width="100%" />
            <h3>{property.title}</h3>
            <p>{property.complex_name}</p>
        </div>
    );
}
