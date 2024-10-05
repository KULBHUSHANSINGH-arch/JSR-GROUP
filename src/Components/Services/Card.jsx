

import React from 'react';
import './Card.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../../Assetes/Design/constructions-1.jpg'
import img2 from '../../Assetes/Design/constructions-2.jpg'
import img3 from '../../Assetes/Design/constructions-3.jpg'
import img4 from '../../Assetes/Design/constructions-4.jpg'

const Card = () => {
  return (
    <section id="constructions" className="constructions section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Design</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          <CardItem 
            imageSrc={img1} 
            title="Eligendi omnis sunt veritatis." 
            description="Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et." 
            delay={100} 
          />
          <CardItem 
            imageSrc={img2} 
            title="Possimus ut sed velit assumenda" 
            description="Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos." 
            delay={200} 
          />
          <CardItem 
            imageSrc={img3} 
            title="Error beatae dolor inventore aut" 
            description="Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa." 
            delay={300} 
          />
          <CardItem 
            imageSrc={img4}  
            title="Expedita voluptas ut ut nesciunt" 
            description="Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos doloremque architecto illo at beatae dolore. Fugiat suscipit et sint ratione dolores. Aut aliquid ea dolores libero nobis." 
            delay={400} 
          />
        </div>
      </div>
    </section>
  );
};

const CardItem = ({ imageSrc, title, description, delay }) => {
  return (
    <div className="col-lg-6" data-aos="fade-up" data-aos-delay={delay}>
      <div className="card-item">
        <div className="row">
          <div className="col-xl-5">
            <div className="card-bg">
              <img src={imageSrc} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-xl-7 d-flex align-items-center">
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
