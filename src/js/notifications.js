import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

import { defaults } from '@pnotify/core';
defaults.maxTextHeight = null;
defaults.delay = 5000;

import { alert, notice, info, success, error } from '@pnotify/core';

function createSuccessNotification() {
  const SuccessNotification = success({
    text: 'Your query has been successfully handled.',
  });
}

function createErrorNotification() {
  const ErrorNotification = error({
    text: 'No results were found for your search.',
  });
}

export { createSuccessNotification, createErrorNotification };
