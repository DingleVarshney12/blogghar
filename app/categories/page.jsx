import Container from '@/components/ui/container';
import { categories } from '@/constant';
import React from 'react'

const CategoryPage = () => {
  const generateRandomGradient = () => {
    const colors = [
      ['#FF7E5F', '#feb47b'],
      ['#6a11cb', '#2575fc'],
      ['#00c6ff', '#0072ff'],
      ['#FFB6C1', '#FF1493'],
      ['#8E2DE2', '#4A00E0'],
      ['#FF9800', '#FF5722'],
      ['#00FF7F', '#32CD32'],
    ];

    // Randomly select a gradient from the array
    const randomIndex = Math.floor(Math.random() * colors.length);
    return `linear-gradient(to right, ${colors[randomIndex][0]}, ${colors[randomIndex][1]})`;
  };
  return (
    <Container className="mt-28 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {categories.map((category) => (
          <div key={category} style={{
            padding: '20px',
            borderRadius: '8px',
            background: generateRandomGradient(),
            color: 'white',
            textAlign: 'center',
          }} className='hover:scale-105 cursor-pointer'>
            {category}
          </div>
        )
        )}
      </div>
    </Container>
  )
}

export default CategoryPage;