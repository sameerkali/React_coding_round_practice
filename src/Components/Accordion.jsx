import React, {useState} from 'react';
import { technicalRoundPreparation } from '../Utils'; 

const Accordion = () => {
  const { easy, medium, hard } = technicalRoundPreparation;

  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null); // Collapse if already active
    } else {
      setActiveAccordion(index); // Expand if not active
    }
  };

  return (
    <div>
      <div className="collapse collapse-plus bg-base-200">
        <input
          type="radio"
          name="accordion-easy"
          id="accordion-easy"
          checked={activeAccordion === 0}
          onChange={() => toggleAccordion(0)}
        />
        <div className="collapse-title text-xl font-medium">Easy Questions</div>
        <div className={`collapse-content ${activeAccordion === 0 ? 'open' : ''}`}>
          <ul>
            {easy.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200">
        <input
          type="radio"
          name="accordion-medium"
          id="accordion-medium"
          checked={activeAccordion === 1}
          onChange={() => toggleAccordion(1)}
        />
        <div className="collapse-title text-xl font-medium">Medium Questions</div>
        <div className={`collapse-content ${activeAccordion === 1 ? 'open' : ''}`}>
          <ul>
            {medium.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200">
        <input
          type="radio"
          name="accordion-hard"
          id="accordion-hard"
          checked={activeAccordion === 2}
          onChange={() => toggleAccordion(2)}
        />
        <div className="collapse-title text-xl font-medium">Hard Questions</div>
        <div className={`collapse-content ${activeAccordion === 2 ? 'open' : ''}`}>
          <ul>
            {hard.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
