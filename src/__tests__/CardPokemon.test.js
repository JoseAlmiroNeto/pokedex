import React from 'react';
import { render, screen } from '@testing-library/react';
import CardPokemon from '../CardPokemon';

describe('CardPokemon', () => {
  it('should render the name of the pokemon', () => {
    const pokemon = {
      name: 'Pikachu',
      element: ['Electric'],
      id: 25,
      abilities: ['Static', 'Lightning Rod'],
      moves: ['Thunderbolt', 'Quick Attack'],
      stats: [
        { name: 'hp', baseValue: 35, effectiveValue: 0 },
        { name: 'attack', baseValue: 55, effectiveValue: 0 },
        { name: 'defense', baseValue: 40, effectiveValue: 0 },
        { name: 'special-attack', baseValue: 50, effectiveValue: 0 },
        { name: 'special-defense', baseValue: 50, effectiveValue: 0 },
        { name: 'speed', baseValue: 90, effectiveValue: 0 },
      ],
      weight: 60,
      height: '0.4',
    };
    render(<CardPokemon pokemon={pokemon} index={1} />);
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
  });
});
