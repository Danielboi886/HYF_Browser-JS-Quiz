'use strict';

import { FINNISH_BUTTON_ID } from '../constants.js';

import { createDOMElement } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';

const createFinnishButton = () => {
  const finnishButton = createDOMElement('button', {
    id: FINNISH_BUTTON_ID,
    content: 'Finnish',
  });
  finnishButton.addEventListener('click', () => location.reload());
  return finnishButton;
};

export const createResultPage = () => {
  const finalScore = quizData.currentTotalScore;
  const resultPageContainer = createDOMElement('div', {
    id: 'result-page',
    className: 'column',
  });

  const congratsMessage = createDOMElement('h1', {
    className: 'congrats-message',
  });
  if (finalScore >= 7) {
    congratsMessage.innerText = `Well Done ${quizData.userName} !!`;
  } else {
    congratsMessage.innerText = `Keep Learning ${quizData.userName} & Try Again!`;
  }
  const scoreMessage = createDOMElement('h2', {
    className: 'score-message',
    content: 'Your Score is',
  });

  const totalScoreElement = createDOMElement('h3', {
    className: 'total-score',
    content: finalScore,
  });

  const finnishButton = createFinnishButton();
  resultPageContainer.appendChild(congratsMessage);
  resultPageContainer.appendChild(scoreMessage);
  resultPageContainer.appendChild(totalScoreElement);
  resultPageContainer.appendChild(finnishButton);

  return resultPageContainer;
};
