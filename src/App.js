import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './components/PropertyCard';

function App() {
    const [properties, setProperties] = useState([]);
    const [filter, setFilter] = useState('');
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        let url = `${process.env.REACT_APP_API_URL}/properties/`;
        if (filter) url += `?type=${filter}`;
        axios.get(url).then(res => setProperties(res.data));
    }, [filter]);

    return (
        <div>
            <div>
                <button onClick={() => setFilter('')}>Все</button>
                <button onClick={() => setFilter('flat')}>Квартиры</button>
                <button onClick={() => setFilter('commercial')}>Коммерция</button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {properties.map(p => (
                    <PropertyCard key={p.id} property={p} onClick={setSelected} />
                ))}
            </div>

            {selected && (
                <div style={{
                    position: 'fixed', top: 50, left: 50,
                    background: '#fff', padding: 20,
                    border: '1px solid #ccc', zIndex: 10
                }}>
                    <h2>{selected.title}</h2>
                    <p><strong>ЖК:</strong> {selected.complex_name}</p>
                    <p>{selected.description}</p>
                    <p><strong>Цена:</strong> {selected.price}</p>
                    <button onClick={() => setSelected(null)}>Закрыть</button>
                </div>
            )}
        </div>
    );
}

export default App;
