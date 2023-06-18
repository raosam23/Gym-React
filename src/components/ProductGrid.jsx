import React from 'react'

export default function ProductGrid() {
    const cards = [
        {
          id: 1,
          title: 'Card 1',
          description: 'This is the description of Card 1.',
          imageUrl: 'https://example.com/card1.jpg',
        },
        {
          id: 2,
          title: 'Card 2',
          description: 'This is the description of Card 2.',
          imageUrl: 'https://example.com/card2.jpg',
        },
        {
          id: 3,
          title: 'Card 3',
          description: 'This is the description of Card 3.',
          imageUrl: 'https://example.com/card3.jpg',
        },
      ];
  return (
    <div className="container">
    <div className="row">
      {cards.map((card) => (
        <div key={card.id} className="col-md-4">
          <div className="card mb-3">
            <img src={card.imageUrl} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
