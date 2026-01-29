import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import AllPagesPDFViewer from '../Pdf/all-pages';
import mentionsLegalesPDF from '../../assets/mentionsLegalesPDF.pdf';
import pcPDF from '../../assets/pcPDF.pdf';
import cookiesPDF from '../../assets/cookiesPDF.pdf';
import reglementPDF from '../../assets/reglementPDF.pdf';

const StaticPage = ({ page, resetGsap }) => {
  useEffect(() => {
    resetGsap(true);
  });

  return (
    <div className="StaticPage">
      <div className="StaticPage-back">
        <button onClick={() => resetGsap(false)} className="StaticPage-back-button w900" type="button"><NavLink to="/" exact>Retour en arrière</NavLink></button>
      </div>
      <div className="StaticPage-wrap">
        {page === 'mentions-legales' && (
          <AllPagesPDFViewer pdf={mentionsLegalesPDF} />
        )}
        {page === 'politique-de-confidentialité' && (
          <AllPagesPDFViewer pdf={pcPDF} />
        )}
        {page === 'politique-de-cookies' && (
          <AllPagesPDFViewer pdf={cookiesPDF} />
        )}
        {page === 'reglement-du-jeu' && (
          <AllPagesPDFViewer pdf={reglementPDF} />
        )}
      </div>
    </div>
  );
};

StaticPage.propTypes = {
  page: PropTypes.string.isRequired,
  resetGsap: PropTypes.func.isRequired,
};

export default StaticPage;
