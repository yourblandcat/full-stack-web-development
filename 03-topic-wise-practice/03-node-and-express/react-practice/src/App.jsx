import React, { useState } from 'react';

// 1. Child Component: Reusable card for each item
function ItemCard({ name, category, price }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '12px', margin: '8px 0', borderRadius: '6px' }}>
            <h3>{name}</h3>
            <p>Category: {category}</p>
            <p>Price: ${price}</p>
        </div>
    );
}

// 2. Root Component: Manages state and layout
export default function App() {
    // State hook to track dynamic user input
    const [searchTerm, setSearchTerm] = useState('');

    // Sample data array
    const inventory = [
        { id: 1, name: 'Mechanical Keyboard', category: 'Accessories', price: 89 },
        { id: 2, name: 'UltraWide Monitor', category: 'Displays', price: 349 },
        { id: 3, name: 'Ergonomic Mouse', category: 'Accessories', price: 49 },
        { id: 4, name: 'USB-C Hub', category: 'Adapters', price: 29 }
    ];

    // Filter array based on search input state
    const filteredItems = inventory.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '500px', margin: 'auto' }}>
            <h1>Inventory Dashboard</h1>
            
            {/* Interactive Search Input */}
            <input 
                type="text" 
                placeholder="Search items..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
            />

            {/* Dynamic Rendering: Mapping array data to components */}
            {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                    <ItemCard 
                        key={item.id} 
                        name={item.name} 
                        category={item.category} 
                        price={item.price} 
                    />
                ))
            ) : (
                <p>No items found matching your search.</p>
            )}
        </div>
    );
}