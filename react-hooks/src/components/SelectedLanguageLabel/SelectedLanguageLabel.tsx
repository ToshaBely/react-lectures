import React, { useState } from 'react';

interface SelectedLanguageLabelProps {
  lang: 'en' | 'ru';
}

const LABELS = {
  en: 'Selected language is English',
  ru: 'Выбранный язык Русский',
};

export const SelectedLanguageLabel = function SelectedLanguageLabel({ lang }: SelectedLanguageLabelProps) {

  return (
    <h4>
      {LABELS[lang]}
    </h4>
  );
};
