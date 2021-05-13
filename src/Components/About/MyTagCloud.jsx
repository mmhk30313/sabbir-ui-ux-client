import React from 'react';
import { TagCloud } from 'react-tagcloud';

const data = [
  { value: 'NextJS', count: 25 },
  { value: 'MongoDB', count: 18 },
  { value: 'JavaScript', count: 30 },
  { value: 'React', count: 30 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS3', count: 20 },
  { value: 'Firebase', count: 22 },
  { value: 'Java', count: 15 },
  { value: 'ECMAScript', count: 25 },
  { value: 'C++', count: 15 },
  { value: 'Chrome Dev Tools', count: 17 },
  { value: 'React Native', count: 27 },
  { value: 'Bootstrap', count: 30 },
  { value: 'TypeScript', count: 15 },
  { value: 'YARN', count: 25 },
  { value: 'NPM', count: 11 },
  { value: 'Heroku', count: 30 },
  { value: 'Git', count: 15 },
];

const MyTagCloud = () => {
    return (
        <>
          <p className="tools mt-3">TOOLS & TECHNOLOGY</p>
          <div data-aos="fada-up" data-duration="1500s"  className="d-flex justify-content-center font-weight-light text-cloud mx-auto mt-4">
              <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
          </div>
        </>
    );
};

const customRenderer = (tag, size, color) => (
  <span
    key={tag.value}
    style={{
      animation: 'blinkingText 3s linear infinite',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size / 2}em`,
      border: `2px solid #9a4dce`,
      // border: `2px solid ${color}`,
      borderRadius: '10px',
      margin: '3px',
      padding: '3px',
      display: 'inline-block',
      color: 'white',
    }}
  >
    {tag.value}
  </span>
)
export default MyTagCloud;