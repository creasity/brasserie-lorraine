import React from 'react';
import { useTranslation } from 'react-i18next';

const Warning = () => {
  const { t } = useTranslation();
  return (
    <div className="Warning">
      <p>{t('warning_footer')}</p>
    </div>
  );
};

export default Warning;
