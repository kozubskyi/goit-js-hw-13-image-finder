import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

import { defaults } from '@pnotify/core';
defaults.minHeight = '20px'; //! на нотификации какой-то скролл, пытаюсь убрать его, но не работает
defaults.delay = 3000;

import { alert, notice, info, success, error } from '@pnotify/core';

function createSuccessNotification() {
  const SuccessNotification = success({
    text: 'Your request has been successfully processed.',
  });
}

function createErrorNotification() {
  const ErrorNotification = error({
    text: 'No results were found for your search.',
  });
}

export { createSuccessNotification, createErrorNotification };
