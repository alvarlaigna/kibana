import React from 'react';
import PropTypes from 'prop-types';

import {
  KuiButton,
} from 'ui_framework/components';

import {
  keyCodes,
} from 'ui_framework/services';

export function PanelOptionsMenuForm({ title, onReset, onUpdatePanelTitle, onClose }) {
  function onInputChange(event) {
    onUpdatePanelTitle(event.target.value);
  }

  function onKeyDown(event) {
    if (event.keyCode === keyCodes.ENTER) {
      onClose();
    }
  }

  return (
    <div
      className="kuiVerticalRhythm dashboardPanelMenuOptionsForm"
      data-test-subj="dashboardPanelTitleInputMenuItem"
    >
      <label className="kuiFormLabel" htmlFor="panelTitleInput">Panel title</label>
      <input
        id="panelTitleInput"
        name="min"
        type="text"
        className="kuiTextInput"
        value={title}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />
      <KuiButton
        buttonType="hollow"
        onClick={onReset}
      >
        Reset title
      </KuiButton>
    </div>
  );
}

PanelOptionsMenuForm.propTypes = {
  title: PropTypes.string,
  onUpdatePanelTitle: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
